/* =======================================================================
   عرّاب الانجليزي — محرك التطبيق
   إعداد الأستاذ أحمد نور الحسين العلي — 0965266039
   ======================================================================= */
(function () {
'use strict';

/* ---------------------------------------------------------------
   1) الإعدادات — غيّر الأكواد من هنا
   --------------------------------------------------------------- */
var CONFIG = {
  teacherName : 'أحمد نور الحسين العلي',
  teacherPhone: '963965266039',          // بصيغة دولية بدون +
  phoneShow   : '0965266039',
  unlockHash  : 2348239360,             // كود الطلاب  = 748215
  teacherHash : 2112274974,             // كود المعلم  = 139057
  appVersion  : '1.0'
};

/* ---------------------------------------------------------------
   2) أدوات مساعدة
   --------------------------------------------------------------- */
function $(id){ return document.getElementById(id); }
function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
function hash(s){ var h=5381,i; s=String(s); for(i=0;i<s.length;i++){ h=((h<<5)+h+s.charCodeAt(i))>>>0; } return h; }
function setTitle(titleId, subId, main, sub){
  var t=$(titleId); if(!t) return;
  t.innerHTML = esc(main)+'<span class="sub" id="'+subId+'">'+esc(sub==null?'':sub)+'</span>';
}
function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
function today(){ return new Date().toISOString().slice(0,10); }
function nowMs(){ return Date.now(); }
function pad(n){ return n<10?'0'+n:''+n; }
function arDate(ts){ var d=new Date(ts); return pad(d.getDate())+'/'+pad(d.getMonth()+1)+'/'+d.getFullYear(); }

function store(key, val){
  try{
    if(val===undefined){ var r=localStorage.getItem(key); return r?JSON.parse(r):null; }
    localStorage.setItem(key, JSON.stringify(val));
  }catch(e){ return null; }
}

function waLink(msg){
  return 'https://wa.me/'+CONFIG.teacherPhone+'?text='+encodeURIComponent(msg);
}
function openWA(msg){
  var a=document.createElement('a');
  a.href=waLink(msg); a.target='_blank'; a.rel='noopener';
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---------------------------------------------------------------
   3) الحالة
   --------------------------------------------------------------- */
var S = {
  student : store('gf_student') || null,
  prog    : store('gf_prog')    || {},
  log     : store('gf_log')     || [],
  meta    : store('gf_meta')    || { days: [], lastReport: 0, installed: nowMs() },
  curSec  : null,
  curUnit : null,
  quiz    : null
};
function save(){ store('gf_student',S.student); store('gf_prog',S.prog); store('gf_log',S.log); store('gf_meta',S.meta); }

function markDay(){
  var d=today();
  if(S.meta.days.indexOf(d)===-1){ S.meta.days.push(d); if(S.meta.days.length>400) S.meta.days.shift(); save(); }
}

/* ---------------------------------------------------------------
   4) خريطة الأقسام
   --------------------------------------------------------------- */
var SECTIONS = {
  found : { id:'found', name:'التأسيس ورفع المستوى', emo:'🧱', theme:'found',
            desc:'من الصفر — الأساس الذي تُبنى عليه كل مرحلة', data:function(){return DATA_FOUNDATION;} },
  g9    : { id:'g9',    name:'الصف التاسع',          emo:'📗', theme:'g9',
            desc:'منهاج الصف التاسع كاملاً', data:function(){return DATA_G9;} },
  sci   : { id:'sci',   name:'بكالوريا — علمي',      emo:'🔬', theme:'sci',
            desc:'منهاج الثالث الثانوي العلمي', data:function(){return DATA_SCI;} },
  lit   : { id:'lit',   name:'بكالوريا — أدبي',      emo:'📜', theme:'lit',
            desc:'منهاج الثالث الثانوي الأدبي', data:function(){return DATA_LIT;} },
  write : { id:'write', name:'كتابة المواضيع',       emo:'✍️', theme:'write',
            desc:'من الجملة الأولى حتى الموضوع المتقن', data:function(){return DATA_WRITING;} },
  exam  : { id:'exam',  name:'نماذج الامتحانات',     emo:'🎯', theme:'exam',
            desc:'على نمط أسئلة الدورات', data:function(){return DATA_EXAMS;} }
};
var BRANCH_NAME = { g9:'الصف التاسع', sci:'البكالوريا العلمي', lit:'البكالوريا الأدبي' };
var SKILL_NAME  = { grammar:'القواعد', vocab:'المفردات', reading:'الفهم والقراءة',
                    writing:'الكتابة', pron:'اللفظ والصوتيات', func:'التعابير والمحادثة' };

/* ---------------------------------------------------------------
   5) التنقل
   --------------------------------------------------------------- */
function show(id, theme){
  var all=document.querySelectorAll('.screen'), i;
  for(i=0;i<all.length;i++) all[i].classList.remove('active');
  $(id).classList.add('active');
  if(theme) document.body.setAttribute('data-theme', theme);
  window.scrollTo(0,0);
}
document.addEventListener('click', function(e){
  var b=e.target.closest('[data-back]'); if(!b) return;
  var t=b.getAttribute('data-back');
  if(t==='s-home') goHome(); else if(t==='s-section') openSection(S.curSec);
});

/* ---------------------------------------------------------------
   6) شاشة القفل
   --------------------------------------------------------------- */
function initLock(){
  $('btn-unlock').onclick=function(){
    var v=$('inp-code').value.trim();
    if(!v){ $('lock-err').textContent='أدخل الكود أولاً'; return; }
    if(hash(v)===CONFIG.unlockHash){
      store('gf_unlocked', true);
      $('lock-err').textContent='';
      afterUnlock();
    } else {
      $('lock-err').textContent='الكود غير صحيح. تواصل مع الأستاذ للحصول عليه.';
      $('inp-code').value='';
    }
  };
  $('inp-code').addEventListener('keydown', function(e){ if(e.key==='Enter') $('btn-unlock').click(); });
  $('btn-wa-code').onclick=function(){
    openWA('السلام عليكم أستاذ أحمد 🌿\nأرغب بالحصول على كود تفعيل تطبيق «عرّاب الانجليزي».\n\nالاسم: \nالصف: ');
  };
}
function afterUnlock(){
  if(S.student && S.student.name) goHome();
  else show('s-register','found');
}

/* ---------------------------------------------------------------
   7) التسجيل
   --------------------------------------------------------------- */
function initRegister(){
  $('btn-register').onclick=function(){
    var n=$('inp-name').value.trim(), b=$('inp-branch').value, c=$('inp-city').value.trim();
    if(n.length<3){ $('reg-err').textContent='اكتب اسمك الثلاثي من فضلك'; return; }
    if(!b){ $('reg-err').textContent='اختر صفك الحالي'; return; }
    S.student={ name:n, branch:b, city:c, since:nowMs() };
    save(); markDay(); goHome();
  };
}

/* ---------------------------------------------------------------
   8) الإحصاءات
   --------------------------------------------------------------- */
function allUnitsForStudent(){
  var out=[], br=S.student? S.student.branch : 'g9';
  var pushAll=function(secId){
    var arr=SECTIONS[secId].data()||[];
    for(var i=0;i<arr.length;i++) out.push({ sec:secId, u:arr[i] });
  };
  pushAll('found'); pushAll(br); pushAll('write'); pushAll('exam');
  return out;
}
function unitProg(id){ return S.prog[id] || null; }
function isDone(id){ var p=unitProg(id); return !!(p && p.best>=60); }

function foundationDone(){
  var arr=DATA_FOUNDATION, n=0, i;
  for(i=0;i<arr.length;i++) if(isDone(arr[i].id)) n++;
  return { done:n, total:arr.length, ok: n>=Math.ceil(arr.length*0.75) };
}

function overallStats(){
  var list=allUnitsForStudent(), done=0, sum=0, cnt=0, i, p;
  for(i=0;i<list.length;i++){
    p=unitProg(list[i].u.id);
    if(p){ if(p.best>=60) done++; sum+=p.best; cnt++; }
  }
  return { total:list.length, done:done, avg: cnt? Math.round(sum/cnt):null, days:S.meta.days.length };
}

function skillStats(){
  var m={}, i, k, e;
  for(i=0;i<S.log.length;i++){
    e=S.log[i];
    if(!e.sk) continue;
    for(k in e.sk){
      if(!m[k]) m[k]={c:0,t:0};
      m[k].c+=e.sk[k].c; m[k].t+=e.sk[k].t;
    }
  }
  var arr=[];
  for(k in m) if(m[k].t>0) arr.push({ k:k, name:SKILL_NAME[k]||k, pct:Math.round(m[k].c/m[k].t*100), t:m[k].t });
  arr.sort(function(a,b){ return a.pct-b.pct; });
  return arr;
}

/* ---------------------------------------------------------------
   9) الرئيسية
   --------------------------------------------------------------- */
function goHome(){
  markDay();
  var st=overallStats();
  $('home-hello').innerHTML = 'أهلاً '+esc(S.student.name.split(' ')[0])+' 👋<span class="sub">'+
      (BRANCH_NAME[S.student.branch]||'')+'</span>';
  var pct = st.total? Math.round(st.done/st.total*100) : 0;
  $('home-bar').style.width=pct+'%';
  $('home-bar-txt').textContent = 'أنجزت '+st.done+' من '+st.total+' وحدة ('+pct+'%)';
  $('st-units').textContent=st.done;
  $('st-avg').textContent= st.avg!=null? st.avg+'%':'—';
  $('st-days').textContent=st.days;

  // بطاقات الأقسام
  var g=$('home-grid'); g.innerHTML='';
  var fd=foundationDone();
  var order=['found', S.student.branch, 'write', 'exam'];
  var colors={found:'#0f766e',g9:'#0b3d91',sci:'#7a0000',lit:'#14204a',write:'#5b21b6',exam:'#1f2937'};
  order.forEach(function(id){
    var sec=SECTIONS[id]; if(!sec) return;
    var locked = (id!=='found') && !fd.ok;
    var arr=sec.data()||[], dn=0;
    arr.forEach(function(u){ if(isDone(u.id)) dn++; });
    var t=el('div','tile'+(locked?' locked':''));
    t.style.setProperty('--tile-c', colors[id]);
    t.innerHTML='<span class="emo">'+sec.emo+'</span><span class="nm">'+sec.name+'</span>'+
                '<span class="ds">'+(locked?'يُفتح بعد التأسيس':dn+' / '+arr.length+' مُنجزة')+'</span>'+
                (locked?'<span class="lockmark">🔒</span>':'');
    t.onclick=function(){
      if(locked){ alert('أنهِ 75% من قسم التأسيس أولاً.\nأنجزتَ حتى الآن '+fd.done+' من '+fd.total+' وحدة.'); return; }
      openSection(id);
    };
    g.appendChild(t);
  });

  // نقاط الضعف
  renderWeak();

  // تنبيه التقرير الشهري
  var due = !S.meta.lastReport ? (S.log.length>=3) : (nowMs()-S.meta.lastReport > 28*864e5);
  $('report-due').classList.toggle('hide', !due);

  show('s-home','found');
}

function renderWeak(){
  var c=$('weak-card'), arr=skillStats();
  if(!arr.length){ c.innerHTML='<p class="muted" style="margin:0">ابدأ بحل الاختبارات وسيظهر هنا تحليل دقيق لنقاط ضعفك.</p>'; return; }
  c.innerHTML='';
  arr.forEach(function(s){
    var cls = s.pct>=80?'ok':(s.pct>=60?'warn':'bad');
    var color= s.pct>=80?'var(--ok)':(s.pct>=60?'var(--warn)':'var(--bad)');
    var row=el('div');
    row.style.marginBottom='12px';
    row.innerHTML='<div style="display:flex;justify-content:space-between;font-size:14.5px;font-weight:700">'+
      '<span>'+s.name+'</span><span style="color:'+color+'">'+s.pct+'%</span></div>'+
      '<div class="bar"><i style="width:'+s.pct+'%;background:'+color+'"></i></div>'+
      '<div class="muted" style="font-size:12.5px">'+s.t+' سؤالاً — '+
      (s.pct>=80?'ممتاز، حافظ على مستواك':(s.pct>=60?'جيد، يحتاج مراجعة':'يحتاج تركيزاً ومراجعة مع الأستاذ'))+'</div>';
    c.appendChild(row);
  });
}

/* ---------------------------------------------------------------
   10) قائمة الوحدات
   --------------------------------------------------------------- */
function openSection(id){
  var sec=SECTIONS[id]; if(!sec) return goHome();
  S.curSec=id;
  setTitle('sec-title','sec-sub', sec.name, sec.desc);
  var arr=sec.data()||[], dn=0;
  arr.forEach(function(u){ if(isDone(u.id)) dn++; });
  var pct=arr.length? Math.round(dn/arr.length*100):0;
  $('sec-bar').style.width=pct+'%';
  $('sec-bar-txt').textContent='أنجزت '+dn+' من '+arr.length+' ('+pct+'%)';

  var L=$('sec-list'); L.innerHTML='';
  arr.forEach(function(u,i){
    var p=unitProg(u.id), done=isDone(u.id);
    var d=el('div','unit'+(done?' done':''));
    var badge = p ? '<span class="badge'+(p.best>=80?'':(p.best>=60?' warn':' bad'))+'">'+p.best+'%</span>'
                  : '<span class="badge gray">جديد</span>';
    d.innerHTML='<div class="n">'+(done?'✓':(i+1))+'</div>'+
      '<div class="t"><b>'+esc(u.ta||u.t)+'</b><small>'+esc(u.t!==u.ta?u.t:'')+(u.tag?' · '+u.tag:'')+'</small></div>'+
      badge+'<span class="chev">‹</span>';
    d.onclick=function(){ openUnit(id,u.id); };
    L.appendChild(d);
  });
  show('s-section', sec.theme);
}

/* ---------------------------------------------------------------
   11) عرض الوحدة
   --------------------------------------------------------------- */
function findUnit(secId, unitId){
  var arr=SECTIONS[secId].data()||[], i;
  for(i=0;i<arr.length;i++) if(arr[i].id===unitId) return arr[i];
  return null;
}

function openUnit(secId, unitId){
  var u=findUnit(secId,unitId); if(!u) return;
  S.curSec=secId; S.curUnit=u; markDay();
  setTitle('unit-title','unit-sub', u.ta||u.t, (u.t!==u.ta? u.t : SECTIONS[secId].name));
  var B=$('unit-body'); B.innerHTML='';
  (u.blocks||[]).forEach(function(b){ B.appendChild(renderBlock(b)); });
  $('btn-start-quiz').textContent = (u.quiz&&u.quiz.length)? '📝 ابدأ اختبار الوحدة ('+u.quiz.length+' سؤالاً)' : 'لا يوجد اختبار';
  $('btn-start-quiz').disabled = !(u.quiz&&u.quiz.length);
  show('s-unit', SECTIONS[secId].theme);
}

function renderBlock(b){
  var d;
  switch(b.type){

    case 'h':
      d=el('div','sec-title','<span class="ico">'+(b.ico||'▸')+'</span> '+esc(b.t));
      return d;

    case 'text':
      d=el('div','card'); 
      d.innerHTML=(b.t?'<h2>'+esc(b.t)+'</h2>':'')+'<div>'+b.html+'</div>';
      return d;

    case 'box':
      d=el('div','box box-'+(b.kind||'note'));
      d.innerHTML=(b.t?'<b class="box-title">'+esc(b.t)+'</b>':'')+b.html;
      return d;

    case 'vocab':
      d=el('div','card');
      var h='<h2>🔤 '+esc(b.t||'المفردات')+'</h2>';
      b.items.forEach(function(it){
        h+='<div class="vocab-row"><span class="w en">'+it[0]+'</span><span class="m">'+it[1]+'</span></div>';
      });
      if(b.note) h+='<div class="box box-tip" style="margin-bottom:0"><b class="box-title">💡 ملاحظة</b>'+b.note+'</div>';
      d.innerHTML=h; return d;

    case 'table':
      d=el('div','card');
      var t='<h2>'+esc(b.t||'')+'</h2><div class="tbl-wrap"><table><thead><tr>';
      b.head.forEach(function(x){ t+='<th>'+x+'</th>'; });
      t+='</tr></thead><tbody>';
      b.rows.forEach(function(r){ t+='<tr>'; r.forEach(function(c){ t+='<td>'+c+'</td>'; }); t+='</tr>'; });
      t+='</tbody></table></div>';
      if(b.note) t+='<div class="box box-tip" style="margin-bottom:0">'+b.note+'</div>';
      d.innerHTML=t; return d;

    case 'list':
      d=el('div','card');
      var L='<h2>'+esc(b.t||'')+'</h2><ul class="clean">';
      b.items.forEach(function(x){ L+='<li>'+x+'</li>'; });
      d.innerHTML=L+'</ul>'; return d;

    case 'steps':
      d=el('div','card');
      var O='<h2>'+esc(b.t||'')+'</h2><ol class="steps">';
      b.items.forEach(function(x){ O+='<li>'+x+'</li>'; });
      d.innerHTML=O+'</ol>'; return d;

    case 'dialog':
      d=el('div','card');
      var g='<h2>💬 '+esc(b.t||'حوار')+'</h2>';
      b.lines.forEach(function(l){
        g+='<div style="margin:10px 0;padding:10px 12px;background:var(--brand-tint);border-radius:12px">'+
           '<b style="color:var(--brand-2);font-size:13px">'+esc(l[0])+'</b>'+
           '<div class="en-blk">'+l[1]+'</div>'+
           '<div class="muted" style="font-size:13.5px">'+l[2]+'</div></div>';
      });
      d.innerHTML=g; return d;

    case 'drill':
      d=el('div','card');
      var q='<h2>✏️ '+esc(b.t||'تمرين سريع')+'</h2><ol class="steps">';
      b.items.forEach(function(x){ q+='<li>'+x+'</li>'; });
      q+='</ol><button class="btn ghost sm" data-toggle="ans">👁️ أظهر الإجابات</button>'+
         '<div class="box box-ex hide" data-ans style="margin-top:10px">'+b.answers+'</div>';
      d.innerHTML=q;
      d.querySelector('[data-toggle]').onclick=function(){
        var a=d.querySelector('[data-ans]');
        a.classList.toggle('hide');
        this.textContent = a.classList.contains('hide')?'👁️ أظهر الإجابات':'🙈 أخفِ الإجابات';
      };
      return d;
  }
  d=el('div'); return d;
}

/* ---------------------------------------------------------------
   12) محرك الاختبار
   --------------------------------------------------------------- */
function startQuiz(unit, secId){
  var qs=(unit.quiz||[]).slice();
  S.quiz={ unit:unit, sec:secId, qs:qs, i:0, answers:new Array(qs.length), locked:false };
  setTitle('quiz-title','quiz-sub','اختبار: '+(unit.ta||unit.t), SECTIONS[secId].name);
  show('s-quiz', SECTIONS[secId].theme);
  renderQ();
}

function renderQ(){
  var Q=S.quiz, q=Q.qs[Q.i];
  $('quiz-bar').style.width = Math.round(Q.i/Q.qs.length*100)+'%';
  $('quiz-count').textContent='السؤال '+(Q.i+1)+' من '+Q.qs.length;
  var B=$('quiz-body'); B.innerHTML='';
  var card=el('div','q');
  var head='<div class="qn">'+(SKILL_NAME[q.sk]||'سؤال')+'</div><div class="qt">'+q.q+'</div>';
  card.innerHTML=head;
  q.o.forEach(function(opt,idx){
    var b=el('button','opt'); b.innerHTML=opt;
    b.onclick=function(){ answer(idx, card); };
    card.appendChild(b);
  });
  B.appendChild(card);
  Q.locked=false;
  $('btn-quiz-next').textContent = (Q.i===Q.qs.length-1)?'إنهاء وعرض النتيجة ✓':'التالي ←';
  $('btn-quiz-next').disabled=true;
}

function answer(idx, card){
  var Q=S.quiz; if(Q.locked) return;
  Q.locked=true; Q.answers[Q.i]=idx;
  var q=Q.qs[Q.i], opts=card.querySelectorAll('.opt'), i;
  for(i=0;i<opts.length;i++){
    opts[i].disabled=true;
    if(i===q.a) opts[i].classList.add('right');
    else if(i===idx) opts[i].classList.add('wrong');
  }
  var e=el('div','expl','<b>'+(idx===q.a?'✅ إجابة صحيحة':'❌ الإجابة الصحيحة: '+q.o[q.a])+'</b><br>'+(q.e||''));
  card.appendChild(e);
  $('btn-quiz-next').disabled=false;
}

$ && null;

function nextQ(){
  var Q=S.quiz;
  if(!Q.locked) return;
  if(Q.i < Q.qs.length-1){ Q.i++; renderQ(); }
  else finishQuiz();
}

function finishQuiz(){
  var Q=S.quiz, correct=0, sk={}, wrong=[], i, q;
  for(i=0;i<Q.qs.length;i++){
    q=Q.qs[i];
    var k=q.sk||'grammar';
    if(!sk[k]) sk[k]={c:0,t:0};
    sk[k].t++;
    if(Q.answers[i]===q.a){ correct++; sk[k].c++; }
    else wrong.push(i);
  }
  var pct=Math.round(correct/Q.qs.length*100);
  var id=Q.unit.id, p=S.prog[id]||{best:0,tries:0};
  p.tries++; p.last=nowMs(); p.lastPct=pct;
  if(pct>p.best) p.best=pct;
  S.prog[id]=p;
  S.log.push({ ts:nowMs(), unit:id, sec:Q.sec, name:(Q.unit.ta||Q.unit.t), pct:pct, sk:sk, n:Q.qs.length });
  if(S.log.length>500) S.log.shift();
  markDay(); save();

  $('res-sub').textContent=Q.unit.ta||Q.unit.t;
  $('res-pct').textContent=pct+'%';
  var lbl = pct>=90?'🏆 ممتاز! إتقان كامل':
            pct>=80?'🌟 جيد جداً':
            pct>=60?'👍 ناجح — تحتاج مراجعة بسيطة':
                    '📌 لم تجتز الوحدة — أعد الدرس وحاول مجدداً';
  $('res-lbl').textContent=lbl;

  var D=$('res-detail'), h='<h2>التفاصيل</h2>';
  h+='<p>أجبت بشكل صحيح على <b>'+correct+'</b> من <b>'+Q.qs.length+'</b> سؤالاً.</p>';
  var k2;
  for(k2 in sk){
    var sp=Math.round(sk[k2].c/sk[k2].t*100);
    h+='<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:14px"><span>'+
       (SKILL_NAME[k2]||k2)+'</span><span><b>'+sk[k2].c+'/'+sk[k2].t+'</b></span></div>'+
       '<div class="bar"><i style="width:'+sp+'%"></i></div></div>';
  }
  if(pct<60) h+='<div class="box box-warn" style="margin-bottom:0"><b class="box-title">⚠️ لم تُحتسب الوحدة مُنجزة</b>يجب الحصول على 60% فأكثر. راجع الدرس ثم أعد الاختبار.</div>';
  D.innerHTML=h;
  S.quiz.wrong=wrong;
  show('s-result', SECTIONS[Q.sec].theme);
}

function reviewWrong(){
  var Q=S.quiz; if(!Q||!Q.wrong||!Q.wrong.length){ modal('مراجعة','<p>ممتاز! لا توجد أخطاء لمراجعتها. 🎉</p>'); return; }
  var h='';
  Q.wrong.forEach(function(i){
    var q=Q.qs[i];
    h+='<div class="box box-warn"><b class="box-title">السؤال '+(i+1)+' — '+(SKILL_NAME[q.sk]||'')+'</b>'+
       q.q+'<div style="margin-top:8px"><b style="color:var(--bad)">إجابتك:</b> '+(Q.answers[i]!=null?q.o[Q.answers[i]]:'—')+'</div>'+
       '<div><b style="color:var(--ok)">الصحيحة:</b> '+q.o[q.a]+'</div>'+
       (q.e?'<div style="margin-top:7px;font-size:14px">'+q.e+'</div>':'')+'</div>';
  });
  modal('🔍 مراجعة الأخطاء', h);
}

/* ---------------------------------------------------------------
   13) التقرير الشهري
   --------------------------------------------------------------- */
function buildReport(){
  var st=overallStats(), sk=skillStats(), i;
  var since = S.meta.lastReport || S.student.since;
  var recent = S.log.filter(function(e){ return e.ts>=since; });

  var t='📘 *تقرير أداء — تطبيق عرّاب الانجليزي*\n';
  t+='━━━━━━━━━━━━━━━━\n';
  t+='👤 الطالب: '+S.student.name+'\n';
  if(S.student.city) t+='🏫 '+S.student.city+'\n';
  t+='📚 الصف: '+(BRANCH_NAME[S.student.branch]||'')+'\n';
  t+='🗓 الفترة: من '+arDate(since)+' إلى '+arDate(nowMs())+'\n';
  t+='━━━━━━━━━━━━━━━━\n';
  t+='📊 *الأداء العام*\n';
  t+='• الوحدات المُنجزة: '+st.done+' من '+st.total+'\n';
  t+='• متوسط الاختبارات: '+(st.avg!=null?st.avg+'%':'—')+'\n';
  t+='• أيام الدراسة: '+st.days+' يوماً\n';
  t+='• اختبارات هذه الفترة: '+recent.length+'\n';

  if(sk.length){
    t+='\n🎯 *المستوى حسب المهارة*\n';
    for(i=0;i<sk.length;i++){
      var mark = sk[i].pct>=80?'🟢':(sk[i].pct>=60?'🟡':'🔴');
      t+=mark+' '+sk[i].name+': '+sk[i].pct+'%  ('+sk[i].t+' سؤالاً)\n';
    }
    var weak=sk.filter(function(x){return x.pct<70;});
    if(weak.length){
      t+='\n⚠️ *أحتاج شرحاً إضافياً في:*\n';
      weak.forEach(function(w){ t+='— '+w.name+'\n'; });
    } else {
      t+='\n✅ لا توجد مهارة تحت 70%.\n';
    }
  }

  if(recent.length){
    t+='\n📝 *آخر الاختبارات*\n';
    var last=recent.slice(-8);
    for(i=0;i<last.length;i++){
      t+='• '+last[i].name+' — '+last[i].pct+'%  ('+arDate(last[i].ts)+')\n';
    }
  }

  var low=[];
  for(var id in S.prog){ if(S.prog[id].best<60 && S.prog[id].tries>0) low.push(id); }
  if(low.length){
    t+='\n🔁 *وحدات لم أجتزها بعد:* '+low.length+' وحدة\n';
  }

  t+='\n━━━━━━━━━━━━━━━━\n';
  t+='أ. '+CONFIG.teacherName+'\n';
  t+='كود التقرير: '+reportCode()+'\n';
  return t;
}

function reportCode(){
  // بصمة مختصرة تمنع التلاعب بالتقرير
  var st=overallStats();
  var raw=S.student.name+'|'+st.done+'|'+st.avg+'|'+st.days+'|'+S.log.length;
  return ('GF'+hash(raw).toString(36)).toUpperCase().slice(0,10);
}

function sendReport(){
  if(!S.log.length){ modal('التقرير','<p>لم تحلّ أي اختبار بعد. ابدأ بوحدة واحدة على الأقل ثم أرسل تقريرك.</p>'); return; }
  var t=buildReport();
  S.meta.lastReport=nowMs(); save();
  $('report-due').classList.add('hide');
  openWA(t);
}

/* ---------------------------------------------------------------
   14) النافذة المنبثقة
   --------------------------------------------------------------- */
function modal(title, html){
  $('modal-title').textContent=title;
  $('modal-body').innerHTML=html;
  $('modal').classList.add('open');
}
function closeModal(){ $('modal').classList.remove('open'); }

/* ---------------------------------------------------------------
   15) لوحة المعلم والإعدادات
   --------------------------------------------------------------- */
function teacherPanel(){
  modal('🔑 لوحة المعلم',
    '<p class="muted">هذه اللوحة للأستاذ فقط.</p>'+
    '<div class="field"><label>كود المعلم</label><input id="tp-code" class="code-input" type="text" inputmode="numeric" maxlength="8"></div>'+
    '<div class="err" id="tp-err"></div>'+
    '<button class="btn" id="tp-go">دخول</button>');
  $('tp-go').onclick=function(){
    if(hash($('tp-code').value.trim())===CONFIG.teacherHash) teacherView();
    else $('tp-err').textContent='كود غير صحيح';
  };
}

function teacherView(){
  var st=overallStats(), sk=skillStats();
  var h='<div class="box box-note"><b class="box-title">👤 '+esc(S.student.name)+'</b>'+
        (S.student.city?esc(S.student.city)+'<br>':'')+
        (BRANCH_NAME[S.student.branch]||'')+' — مسجَّل منذ '+arDate(S.student.since)+'</div>';
  h+='<div class="stats"><div class="stat"><span class="v">'+st.done+'</span><span class="k">وحدة</span></div>'+
     '<div class="stat"><span class="v">'+(st.avg!=null?st.avg+'%':'—')+'</span><span class="k">المتوسط</span></div>'+
     '<div class="stat"><span class="v">'+st.days+'</span><span class="k">يوم</span></div></div>';
  if(sk.length){
    h+='<h3 style="font-size:15px">المهارات</h3>';
    sk.forEach(function(s){
      var c = s.pct>=80?'var(--ok)':(s.pct>=60?'var(--warn)':'var(--bad)');
      h+='<div style="display:flex;justify-content:space-between;font-size:14px"><span>'+s.name+'</span><b style="color:'+c+'">'+s.pct+'%</b></div>'+
         '<div class="bar"><i style="width:'+s.pct+'%;background:'+c+'"></i></div>';
    });
  }
  h+='<h3 style="font-size:15px">سجل الاختبارات ('+S.log.length+')</h3><div class="tbl-wrap"><table><thead><tr><th>الوحدة</th><th>النتيجة</th><th>التاريخ</th></tr></thead><tbody>';
  S.log.slice(-25).reverse().forEach(function(e){
    h+='<tr><td>'+esc(e.name)+'</td><td>'+e.pct+'%</td><td class="num">'+arDate(e.ts)+'</td></tr>';
  });
  h+='</tbody></table></div>';
  h+='<div style="height:10px"></div><button class="btn ghost sm" id="tp-copy">📋 نسخ التقرير الكامل</button>';
  modal('🔑 لوحة المعلم', h);
  $('tp-copy').onclick=function(){
    var t=buildReport();
    try{ navigator.clipboard.writeText(t); this.textContent='✅ تم النسخ'; }
    catch(e){ modal('التقرير','<pre style="white-space:pre-wrap;font-size:13px;direction:rtl">'+esc(t)+'</pre>'); }
  };
}

function settingsPanel(){
  var h='<div class="box box-note"><b class="box-title">👤 بياناتي</b>'+esc(S.student.name)+'<br>'+
        (BRANCH_NAME[S.student.branch]||'')+'</div>';
  h+='<div class="field"><label>تغيير الصف</label><select id="set-branch">'+
     '<option value="g9">الصف التاسع</option><option value="sci">البكالوريا العلمي</option><option value="lit">البكالوريا الأدبي</option>'+
     '</select></div>';
  h+='<button class="btn sm" id="set-save">حفظ التغيير</button><div style="height:14px"></div>';
  h+='<button class="btn wa sm" id="set-wa">💬 تواصل مع الأستاذ</button><div style="height:14px"></div>';
  h+='<button class="btn ghost sm" id="set-reset" style="border-color:var(--bad);color:var(--bad)">🗑️ تصفير كل التقدّم</button>';
  h+='<div class="muted" style="margin-top:14px;font-size:12.5px">الإصدار '+CONFIG.appVersion+' — أ. '+CONFIG.teacherName+'</div>';
  modal('⚙️ الإعدادات', h);
  $('set-branch').value=S.student.branch;
  $('set-save').onclick=function(){ S.student.branch=$('set-branch').value; save(); closeModal(); goHome(); };
  $('set-wa').onclick=function(){ openWA('السلام عليكم أستاذ أحمد، معك الطالب '+S.student.name+'.\nعندي سؤال: '); };
  $('set-reset').onclick=function(){
    if(confirm('سيتم مسح كل تقدّمك ونتائجك نهائياً. هل أنت متأكد؟')){
      S.prog={}; S.log=[]; S.meta={days:[],lastReport:0,installed:nowMs()}; save(); closeModal(); goHome();
    }
  };
}

/* ---------------------------------------------------------------
   16) قسم الكتابة (عرض خاص)
   --------------------------------------------------------------- */
// يستخدم نفس محرك الوحدات (DATA_WRITING بنفس البنية)

/* ---------------------------------------------------------------
   17) الإقلاع
   --------------------------------------------------------------- */
function boot(){
  initLock(); initRegister();

  $('btn-quiz-next').onclick=nextQ;
  $('quiz-exit').onclick=function(){
    if(confirm('هل تريد الخروج من الاختبار؟ لن تُحتسب النتيجة.')) openSection(S.quiz.sec);
  };
  $('btn-start-quiz').onclick=function(){ startQuiz(S.curUnit, S.curSec); };
  $('btn-res-back').onclick=function(){ openSection(S.quiz.sec); };
  $('btn-res-review').onclick=reviewWrong;
  $('modal-close').onclick=closeModal;
  $('modal').onclick=function(e){ if(e.target===this) closeModal(); };
  $('btn-teacher').onclick=teacherPanel;
  $('btn-settings').onclick=settingsPanel;
  $('btn-send-report').onclick=sendReport;
  $('btn-view-report').onclick=function(){
    if(!S.log.length){ modal('التقرير','<p>لم تحلّ أي اختبار بعد.</p>'); return; }
    modal('👁️ معاينة التقرير','<div style="white-space:pre-wrap;font-size:13.5px;line-height:2;background:#f1f5f9;padding:12px;border-radius:12px">'+esc(buildReport())+'</div>');
  };
  $('btn-wa-ask').onclick=function(){
    openWA('السلام عليكم أستاذ أحمد، معك الطالب '+(S.student?S.student.name:'')+'.\nعندي سؤال في: ');
  };

  if(store('gf_unlocked')) afterUnlock();
  else show('s-lock','found');
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

})();
