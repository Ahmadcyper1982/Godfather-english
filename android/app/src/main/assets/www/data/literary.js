/* ===== بكالوريا — الفرع الأدبي — 12 وحدة ===== */
var DATA_LIT = [

/* ===================== الوحدة 1 ===================== */
{ id:'l1', t:'Life Choices', ta:'الوحدة 1 — خيارات الحياة', tag:'مراجعة الأزمنة 1',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Future Career</span> + <span class="en">A Learned Lesson is a Good Lesson</span> &nbsp;|&nbsp; المفردات: <span class="en">Word Family &amp; Phrasal Verbs</span> &nbsp;|&nbsp; القواعد: <span class="en">Revision of Tenses 1</span> &nbsp;|&nbsp; النطق: <span class="en">Homophones</span> &nbsp;|&nbsp; المحادثة: <span class="en">Giving Advice</span> &nbsp;|&nbsp; الكتابة: تجربة شخصية.'},
 {type:'h', ico:'📖', t:'أولاً: فكرة النص — Future Career'},
 {type:'text', html:'يدور النص حول <b>اختيار المهنة المستقبلية</b>: كيف يوازن الشاب بين ميوله الشخصية (<span class="en">interests</span>)، وقدراته (<span class="en">abilities</span>)، وحاجة سوق العمل (<span class="en">job market</span>). يشدّد الكاتب على أنّ القرار الناجح يقوم على <b>معرفة الذات</b> أولاً، ثم <b>جمع المعلومات</b> عن المهنة، ثم <b>التجريب</b> عبر التطوّع أو التدريب الصيفي، وأخيراً <b>الاستعداد للتغيير</b> لأنّ المهن تتبدّل بسرعة في عصر التقانة. ونصّ كتاب الأنشطة يكمل الفكرة بأنّ <b>الدرس المُستفاد من التجربة</b> — ولو كانت فاشلة — أثمن من النصيحة المجّانية.'},
 {type:'box', kind:'tip', t:'أسئلة الفهم التي تتكرّر', html:'<span class="en">What is the main idea of the text? / Why does the writer mention…? / What does the word "it" in line 5 refer to? / Give a suitable title.</span><br>قاعدة ذهبية: الفكرة الرئيسة تكون غالباً في <b>الجملة الأولى أو الأخيرة</b> من الفقرة.'},
 {type:'h', ico:'🔤', t:'ثانياً: المفردات — Word Family'},
 {type:'table', head:['فعل','اسم','صفة','ظرف'],
  rows:[
   ['<span class="en">choose</span>','<span class="en">choice</span>','<span class="en">choosy</span>','—'],
   ['<span class="en">decide</span>','<span class="en">decision</span>','<span class="en">decisive</span>','<span class="en">decisively</span>'],
   ['<span class="en">achieve</span>','<span class="en">achievement</span>','<span class="en">achievable</span>','—'],
   ['<span class="en">qualify</span>','<span class="en">qualification</span>','<span class="en">qualified</span>','—'],
   ['<span class="en">employ</span>','<span class="en">employment / employer / employee</span>','<span class="en">unemployed</span>','—'],
   ['<span class="en">succeed</span>','<span class="en">success</span>','<span class="en">successful</span>','<span class="en">successfully</span>'],
   ['<span class="en">advise</span>','<span class="en">advice</span>','<span class="en">advisable</span>','—'],
   ['<span class="en">apply</span>','<span class="en">application / applicant</span>','<span class="en">applicable</span>','—']
  ]},
 {type:'box', kind:'warn', t:'فخّ إملائي ⚠️', html:'<span class="en">advise</span> فعل (بـ s)، و<span class="en">advice</span> اسم (بـ c) وهو <b>غير معدود</b>:<br>✗ <span class="en">an advice / advices</span> &nbsp; ✓ <span class="en">a piece of advice</span>'},
 {type:'h', ico:'🔗', t:'الأفعال المركّبة — Phrasal Verbs'},
 {type:'vocab', items:[
   ['<span class="en">take up</span>','يبدأ ممارسة شيء'],
   ['<span class="en">give up</span>','يستسلم / يُقلع عن'],
   ['<span class="en">look into</span>','يبحث في / يتقصّى'],
   ['<span class="en">carry on</span>','يستمر'],
   ['<span class="en">put off</span>','يؤجّل'],
   ['<span class="en">turn down</span>','يرفض (عرضاً)'],
   ['<span class="en">come up with</span>','يأتي بفكرة'],
   ['<span class="en">set up</span>','يؤسّس'],
   ['<span class="en">end up</span>','ينتهي به الأمر إلى'],
   ['<span class="en">get on with</span>','ينسجم مع / يتابع']
 ]},
 {type:'h', ico:'📐', t:'ثالثاً: القواعد — Revision of Tenses 1'},
 {type:'box', kind:'rule', t:'1) Present Simple مقابل Present Continuous', html:'<b>البسيط</b>: حقيقة، عادة، جدول ثابت. <span class="en-blk">Water boils at 100°C. / He works in a lab.</span><br><b>المستمر</b>: الآن، فترة حاضرة، ترتيب مستقبلي، أو عادة مزعجة مع <span class="en">always</span>.<br><span class="en-blk">He is working on a project this month. / She is always losing her keys!</span>'},
 {type:'box', kind:'rule', t:'2) Present Perfect مقابل Present Perfect Continuous', html:'<b>التام</b> <span class="en">have/has + V3</span>: يركّز على <b>النتيجة</b> أو العدد. <span class="en-blk">I have written three reports.</span><br><b>التام المستمر</b> <span class="en">have/has been + V-ing</span>: يركّز على <b>المدّة والاستمرار</b>. <span class="en-blk">I have been writing since morning.</span><br>مع <span class="en">How long…?</span> نفضّل التام المستمر، إلّا مع أفعال الحالة.'},
 {type:'box', kind:'rule', t:'3) Present Perfect مقابل Past Simple', html:'<b>التام</b>: زمن غير منتهٍ أو غير محدّد (<span class="en">today, this week, ever, never, just, already, yet, since, for</span>).<br><b>الماضي البسيط</b>: زمن منتهٍ ومحدّد (<span class="en">yesterday, last year, in 2015, ago, when</span>).<br>✗ <span class="en">I have seen him yesterday.</span> &nbsp; ✓ <span class="en">I saw him yesterday.</span>'},
 {type:'table', head:['الزمن','الصيغة','دلالته'],
  rows:[
   ['Present Simple','<span class="en">V / V-s</span>','حقيقة وعادة'],
   ['Present Continuous','<span class="en">am/is/are + V-ing</span>','الآن / ترتيب'],
   ['Present Perfect','<span class="en">have/has + V3</span>','ماضٍ بأثر حاضر'],
   ['Pres. Perfect Cont.','<span class="en">have/has been + V-ing</span>','مدّة مستمرة'],
   ['Past Simple','<span class="en">V2</span>','ماضٍ منتهٍ ومحدّد'],
   ['Past Continuous','<span class="en">was/were + V-ing</span>','خلفية في الماضي'],
   ['Past Perfect','<span class="en">had + V3</span>','أسبق من ماضٍ آخر'],
   ['Future Simple','<span class="en">will + V</span>','قرار لحظي / توقّع'],
   ['Future with going to','<span class="en">be going to + V</span>','نيّة أو دليل'],
   ['Future Continuous','<span class="en">will be + V-ing</span>','سيكون جارياً في وقت مستقبلي'],
   ['Future Perfect','<span class="en">will have + V3</span>','سينتهي قبل وقت مستقبلي']
  ]},
 {type:'h', ico:'🗣️', t:'رابعاً: النطق — Homophones'},
 {type:'table', head:['ينطقان متشابهين','المعنى الأول','المعنى الثاني'],
  rows:[
   ['<span class="en">their / there</span>','ضمير ملكية','هناك'],
   ['<span class="en">write / right</span>','يكتب','صحيح / يمين'],
   ['<span class="en">piece / peace</span>','قطعة','سلام'],
   ['<span class="en">weather / whether</span>','الطقس','سواء / إن كان'],
   ['<span class="en">principal / principle</span>','مدير / رئيسي','مبدأ'],
   ['<span class="en">weak / week</span>','ضعيف','أسبوع'],
   ['<span class="en">sea / see</span>','بحر','يرى'],
   ['<span class="en">flour / flower</span>','طحين','زهرة']
  ]},
 {type:'h', ico:'💬', t:'خامساً: Everyday English — Giving Advice'},
 {type:'table', head:['التعبير','الملاحظة'],
  rows:[
   ['<span class="en">You should / shouldn\'t…</span>','نصيحة عامة + مصدر'],
   ['<span class="en">You\'d better (not)…</span>','نصيحة أقوى فيها تحذير + مصدر مجرّد'],
   ['<span class="en">If I were you, I would…</span>','شرط ثانٍ'],
   ['<span class="en">Why don\'t you…?</span>','اقتراح + مصدر'],
   ['<span class="en">How about + V-ing?</span>','اقتراح + <span class="en">-ing</span>'],
   ['<span class="en">It might be a good idea to…</span>','نصيحة مهذّبة']
  ]},
 {type:'h', ico:'✍️', t:'سادساً: الكتابة — تجربة شخصية'},
 {type:'steps', items:[
   'المقدّمة: اذكر التجربة ومتى وقعت في جملتين.',
   'العرض: اسرد الأحداث بالماضي البسيط والماضي المستمر، واربطها بـ <span class="en">then, after that, suddenly, finally</span>.',
   'المشاعر: استعمل صفات دقيقة <span class="en">(nervous, relieved, proud, disappointed)</span>.',
   'الدرس المستفاد: اختم بجملة تبدأ بـ <span class="en">This experience taught me that…</span>',
   'راجع: الأزمنة، النقاط، والأحرف الكبيرة.'
 ]},
 {type:'drill', items:[
  '1) <span class="en">I ______ (know) him since 2018.</span>',
  '2) <span class="en">She ______ (study) medicine for three years now.</span>',
  '3) <span class="en">We ______ (visit) Palmyra last summer.</span>',
  '4) <span class="en">Look! The technician ______ (repair) the machine.</span>',
  '5) أعطِ نصيحة لصديق متردّد في اختيار فرعه الجامعي.'
 ], answers:'1) <span class="en">have known</span> &nbsp;2) <span class="en">has been studying</span> &nbsp;3) <span class="en">visited</span> &nbsp;4) <span class="en">is repairing</span> &nbsp;5) مثال: <span class="en">If I were you, I would look into the job market first.</span>'}
],
quiz:[
 {q:'<span class="en">I ______ this book three times; I know it well.</span>', o:['<span class="en">read</span>','<span class="en">have read</span>','<span class="en">am reading</span>','<span class="en">was reading</span>'], a:1, sk:'grammar', e:'عدد المرات حتى الآن ← المضارع التام.'},
 {q:'<span class="en">He ______ the laboratory yesterday morning.</span>', o:['<span class="en">has visited</span>','<span class="en">visited</span>','<span class="en">has been visiting</span>','<span class="en">visits</span>'], a:1, sk:'grammar', e:'<span class="en">yesterday</span> زمن منتهٍ محدّد ← الماضي البسيط.'},
 {q:'<span class="en">How long ______ you ______ for this company?</span>', o:['<span class="en">did / work</span>','<span class="en">have / been working</span>','<span class="en">are / working</span>','<span class="en">do / work</span>'], a:1, sk:'grammar', e:'<span class="en">How long</span> + استمرار ← التام المستمر.'},
 {q:'الكلمة التي تنطق مثل <span class="en">peace</span>:', o:['<span class="en">pace</span>','<span class="en">piece</span>','<span class="en">pass</span>','<span class="en">pick</span>'], a:1, sk:'pron', e:'<span class="en">peace / piece</span> كلمتان متجانستان لفظاً.'},
 {q:'<span class="en">He ______ smoking last year and never went back.</span>', o:['<span class="en">took up</span>','<span class="en">gave up</span>','<span class="en">put off</span>','<span class="en">set up</span>'], a:1, sk:'vocab', e:'<span class="en">give up</span> = يُقلع عن.'},
 {q:'الاسم من <span class="en">qualify</span>:', o:['<span class="en">qualified</span>','<span class="en">qualification</span>','<span class="en">qualifying</span>','<span class="en">qualifiable</span>'], a:1, sk:'vocab', e:'لاحقة <span class="en">-tion</span> تُكوّن اسماً.'},
 {q:'<span class="en">My teacher gave me a useful ______ .</span>', o:['<span class="en">advise</span>','<span class="en">advices</span>','<span class="en">piece of advice</span>','<span class="en">advisable</span>'], a:2, sk:'vocab', e:'<span class="en">advice</span> غير معدود ← <span class="en">a piece of advice</span>.'},
 {q:'<span class="en">You\'d better ______ to the doctor.</span>', o:['<span class="en">to go</span>','<span class="en">going</span>','<span class="en">go</span>','<span class="en">went</span>'], a:2, sk:'func', e:'بعد <span class="en">had better</span> مصدر مجرّد.'},
 {q:'<span class="en">Water ______ at 100 degrees Celsius.</span>', o:['<span class="en">is boiling</span>','<span class="en">boils</span>','<span class="en">has boiled</span>','<span class="en">boiled</span>'], a:1, sk:'grammar', e:'حقيقة علمية ← المضارع البسيط.'},
 {q:'<span class="en">How about ______ the problem together?</span>', o:['<span class="en">solve</span>','<span class="en">to solve</span>','<span class="en">solving</span>','<span class="en">solved</span>'], a:2, sk:'func', e:'بعد <span class="en">How about</span> يأتي <span class="en">V-ing</span>.'},
 {q:'وفق النص، أساس اختيار المهنة الناجح هو:', o:['تقليد الأصدقاء','معرفة الذات ثم جمع المعلومات','اختيار الأعلى أجراً فقط','الانتظار حتى التخرّج'], a:1, sk:'reading', e:'يشدّد النص على معرفة الميول والقدرات أولاً.'},
 {q:'<span class="en">She is always ______ her phone at home!</span>', o:['<span class="en">leave</span>','<span class="en">leaves</span>','<span class="en">leaving</span>','<span class="en">left</span>'], a:2, sk:'grammar', e:'<span class="en">always + V-ing</span> للتعبير عن عادة مزعجة متكرّرة.'}
]
},

/* ===================== الوحدة 2 ===================== */
{ id:'l2', t:'Success', ta:'الوحدة 2 — النجاح', tag:'مراجعة الأزمنة 2',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Stop Wishing, Start Doing</span> + <span class="en">Famous Failures</span> &nbsp;|&nbsp; المفردات: <span class="en">Success Idioms</span> &nbsp;|&nbsp; القواعد: <span class="en">Revision of Tenses 2</span> (الأزمنة الماضية والمستقبلية) &nbsp;|&nbsp; النطق: <span class="en">-ed</span> &nbsp;|&nbsp; المحادثة: التهنئة والمواساة.'},
 {type:'h', ico:'📖', t:'فكرة النص'},
 {type:'text', html:'النجاح ليس هِبةً ولا حظّاً، بل <b>سلسلة قرارات صغيرة متكرّرة</b>. يفرّق النص بين <span class="en">wishing</span> (التمنّي السلبي) و<span class="en">doing</span> (الفعل)، ويقدّم ثلاث ركائز: <b>هدف واضح ومكتوب</b>، و<b>خطة زمنية مقسّمة</b>، و<b>مثابرة بعد الفشل</b>. أمّا نصّ كتاب الأنشطة فيستعرض مشاهير فشلوا مراراً قبل أن ينجحوا، ليؤكّد أنّ الفشل مرحلة لا نهاية.'},
 {type:'h', ico:'💡', t:'المفردات — Success Idioms'},
 {type:'vocab', items:[
   ['<span class="en">against all odds</span>','رغم كل الصعاب'],
   ['<span class="en">pay off</span>','يؤتي ثماره'],
   ['<span class="en">a stepping stone</span>','نقطة انطلاق'],
   ['<span class="en">make it</span>','ينجح / يصل'],
   ['<span class="en">go the extra mile</span>','يبذل جهداً إضافياً'],
   ['<span class="en">keep your chin up</span>','لا تيأس'],
   ['<span class="en">learn the ropes</span>','يتعلّم أصول العمل'],
   ['<span class="en">a blessing in disguise</span>','نعمة في ثوب نقمة'],
   ['<span class="en">burn the midnight oil</span>','يسهر في العمل أو الدراسة'],
   ['<span class="en">get off the ground</span>','ينطلق (مشروع)']
 ]},
 {type:'h', ico:'📐', t:'القواعد — الأزمنة الماضية والمستقبلية'},
 {type:'box', kind:'rule', t:'Past Simple مقابل Past Continuous', html:'المستمر = الخلفية الطويلة، والبسيط = الحدث القصير القاطع.<br><span class="en-blk">While I was revising, the electricity went off.</span><br><span class="en">while</span> + مستمر &nbsp;|&nbsp; <span class="en">when</span> + بسيط.'},
 {type:'box', kind:'rule', t:'Past Perfect', html:'<span class="en">had + V3</span> للحدث <b>الأسبق</b> بين حدثين ماضيين.<br><span class="en-blk">When I arrived, the lecture had already started.</span><br>مفاتيحه: <span class="en">before, after, already, by the time, as soon as</span>.'},
 {type:'box', kind:'rule', t:'صيغ المستقبل', html:'<span class="en">will</span> قرار لحظي وتوقّع &nbsp;|&nbsp; <span class="en">be going to</span> نيّة ودليل &nbsp;|&nbsp; <span class="en">Present Continuous</span> ترتيب مؤكّد &nbsp;|&nbsp; <span class="en">will be + V-ing</span> سيكون جارياً &nbsp;|&nbsp; <span class="en">will have + V3</span> سينتهي قبل وقتٍ محدّد.<br><span class="en-blk">By 2030, scientists will have found new treatments.</span>'},
 {type:'box', kind:'warn', t:'فخّ ⚠️', html:'بعد <span class="en">when, before, after, as soon as, until</span> لا نضع <span class="en">will</span>:<br>✗ <span class="en">I will call you when I will arrive.</span> &nbsp; ✓ <span class="en">…when I arrive.</span>'},
 {type:'h', ico:'🗣️', t:'النطق — نهاية -ed'},
 {type:'table', head:['الصوت','متى','أمثلة'],
  rows:[
   ['<span class="en">/ɪd/</span>','بعد <span class="en">t, d</span>','<span class="en">wanted, needed, decided, started</span>'],
   ['<span class="en">/t/</span>','بعد صوت مهموس <span class="en">p, k, f, s, ʃ, tʃ</span>','<span class="en">stopped, worked, laughed, washed</span>'],
   ['<span class="en">/d/</span>','بعد صوت مجهور أو حرف علة','<span class="en">played, cleaned, opened, agreed</span>']
  ]},
 {type:'h', ico:'💬', t:'Everyday English — التهنئة والمواساة'},
 {type:'table', head:['الموقف','التعبير'],
  rows:[
   ['تهنئة','<span class="en">Congratulations on your success! / Well done! / You deserve it.</span>'],
   ['تهنئة رسمية','<span class="en">I\'d like to congratulate you on…</span>'],
   ['مواساة','<span class="en">I\'m really sorry to hear that. / Please accept my condolences.</span>'],
   ['تشجيع','<span class="en">Don\'t worry, better luck next time. / Keep your chin up.</span>'],
   ['ردّ','<span class="en">Thank you very much. That\'s very kind of you.</span>']
  ]},
 {type:'drill', items:[
  '1) <span class="en">By the time we arrived, the train ______ (leave).</span>',
  '2) <span class="en">I ______ (watch) TV when the phone rang.</span>',
  '3) <span class="en">Next year I ______ (finish) my studies by June.</span>',
  '4) <span class="en">Call me as soon as you ______ (get) home.</span>',
  '5) صنّف لفظ <span class="en">-ed</span> في: <span class="en">decided, helped, opened</span>'
 ], answers:'1) <span class="en">had left</span> &nbsp;2) <span class="en">was watching</span> &nbsp;3) <span class="en">will have finished</span> &nbsp;4) <span class="en">get</span> &nbsp;5) <span class="en">/ɪd/, /t/, /d/</span>'}
],
quiz:[
 {q:'<span class="en">When I got to the station, the bus ______ .</span>', o:['<span class="en">left</span>','<span class="en">has left</span>','<span class="en">had left</span>','<span class="en">leaves</span>'], a:2, sk:'grammar', e:'الحدث الأسبق بين ماضيين ← <span class="en">had + V3</span>.'},
 {q:'<span class="en">I\'ll phone you as soon as I ______ .</span>', o:['<span class="en">will arrive</span>','<span class="en">arrive</span>','<span class="en">arrived</span>','<span class="en">am arriving</span>'], a:1, sk:'grammar', e:'لا <span class="en">will</span> بعد <span class="en">as soon as</span>.'},
 {q:'<span class="en">By 2030, researchers ______ a vaccine.</span>', o:['<span class="en">will find</span>','<span class="en">will have found</span>','<span class="en">are finding</span>','<span class="en">found</span>'], a:1, sk:'grammar', e:'<span class="en">By + وقت مستقبلي</span> ← المستقبل التام.'},
 {q:'في أي كلمة تُلفظ <span class="en">-ed</span> كـ <span class="en">/t/</span>؟', o:['<span class="en">needed</span>','<span class="en">washed</span>','<span class="en">cleaned</span>','<span class="en">agreed</span>'], a:1, sk:'pron', e:'بعد الصوت المهموس <span class="en">/ʃ/</span> تُلفظ <span class="en">/t/</span>.'},
 {q:'<span class="en">His hard work finally ______ .</span>', o:['<span class="en">paid off</span>','<span class="en">put off</span>','<span class="en">took off</span>','<span class="en">called off</span>'], a:0, sk:'vocab', e:'<span class="en">pay off</span> = يؤتي ثماره.'},
 {q:'<span class="en">He succeeded ______ ; nobody expected it.</span>', o:['<span class="en">in time</span>','<span class="en">against all odds</span>','<span class="en">on purpose</span>','<span class="en">by heart</span>'], a:1, sk:'vocab', e:'<span class="en">against all odds</span> = رغم كل الصعاب.'},
 {q:'<span class="en">While she ______ , the lights went out.</span>', o:['<span class="en">studied</span>','<span class="en">was studying</span>','<span class="en">had studied</span>','<span class="en">studies</span>'], a:1, sk:'grammar', e:'<span class="en">while</span> + الماضي المستمر.'},
 {q:'التهنئة الأنسب على النجاح:', o:['<span class="en">Never mind.</span>','<span class="en">Congratulations! You deserve it.</span>','<span class="en">I\'m sorry to hear that.</span>','<span class="en">What a pity!</span>'], a:1, sk:'func', e:'التهنئة تُستعمل مع الأخبار السارّة.'},
 {q:'عند سماع خبر حزين نقول:', o:['<span class="en">Well done!</span>','<span class="en">I\'m really sorry to hear that.</span>','<span class="en">Congratulations!</span>','<span class="en">Good for you!</span>'], a:1, sk:'func', e:'تعبير المواساة القياسي.'},
 {q:'الفكرة الرئيسة للنص:', o:['النجاح حظّ','النجاح نتيجة أفعال متكرّرة لا أمنيات','النجاح للموهوبين فقط','الفشل نهاية الطريق'], a:1, sk:'reading', e:'العنوان نفسه: <span class="en">Stop Wishing, Start Doing</span>.'},
 {q:'<span class="en">This failure was a blessing in disguise</span> تعني:', o:['كارثة مؤكّدة','نعمة في ثوب نقمة','خسارة مالية','فرصة ضائعة'], a:1, sk:'vocab', e:'مكروهٌ ظاهره شرّ وباطنه خير.'},
 {q:'<span class="en">He is going to open his own clinic</span> تدلّ على:', o:['قرار لحظي','نيّة مُخطَّط لها','توقّع بلا دليل','عادة'], a:1, sk:'grammar', e:'<span class="en">be going to</span> للنيّة المسبقة.'}
]
},

/* ===================== الوحدة 3 ===================== */
{ id:'l3', t:'Poetry', ta:'الوحدة 3 — الشعر', tag:'المبني للمجهول',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">A Brief History of Poetry</span> + <span class="en">John Keats</span> &nbsp;|&nbsp; المفردات: <span class="en">Figures of Speech</span> &nbsp;|&nbsp; القواعد: <span class="en">Passive Voice</span> &nbsp;|&nbsp; النطق: <span class="en">Emphatic Stress</span> &nbsp;|&nbsp; المحادثة: طلب المعلومات.'},
 {type:'h', ico:'📖', t:'فكرة النص — تاريخ الشعر'},
 {type:'text', html:'الشعر أقدم أشكال الأدب؛ نشأ <b>شفاهياً</b> قبل الكتابة، فكان الوزن والقافية وسيلةً للحفظ. مرّ بمحطات: الشعر الملحمي عند الإغريق (<span class="en">Homer</span>)، والشعر الغنائي، ثم عصر النهضة والسوناتة مع <span class="en">Shakespeare</span>، ثم <b>الرومانتيكية</b> في القرن التاسع عشر التي رفعت شأن الطبيعة والعاطفة والخيال (<span class="en">Wordsworth, Keats, Shelley</span>)، ثم الشعر الحديث الذي تحرّر من الوزن الصارم إلى <span class="en">free verse</span>. ونصّ الأنشطة يعرض حياة <b>جون كيتس</b>: شاعر إنجليزي عاش خمسةً وعشرين عاماً فقط، فقد والديه باكراً، وكتب قصائده الكبرى في عام واحد، واشتهر بمبدأ أنّ «الجمال حقيقة»، وتوفي بالسلّ في روما عام 1821، ليُعترف بعبقريته بعد موته.'},
 {type:'h', ico:'🎭', t:'الصور البلاغية — Figures of Speech'},
 {type:'table', head:['المصطلح','التعريف','مثال'],
  rows:[
   ['<span class="en">Simile</span>','تشبيه صريح بـ <span class="en">like/as</span>','<span class="en">as brave as a lion</span>'],
   ['<span class="en">Metaphor</span>','استعارة بلا أداة تشبيه','<span class="en">Time is a thief.</span>'],
   ['<span class="en">Personification</span>','تشخيص: صفة إنسانية لغير العاقل','<span class="en">The wind whispered.</span>'],
   ['<span class="en">Alliteration</span>','تكرار الحرف الأول','<span class="en">silent sea sailing</span>'],
   ['<span class="en">Hyperbole</span>','مبالغة','<span class="en">I have told you a million times.</span>'],
   ['<span class="en">Onomatopoeia</span>','محاكاة صوتية','<span class="en">buzz, bang, hiss</span>'],
   ['<span class="en">Imagery</span>','صور حسّية','<span class="en">the golden light of dawn</span>'],
   ['<span class="en">Symbol</span>','رمز','<span class="en">a dove = peace</span>'],
   ['<span class="en">Irony</span>','سخرية بقلب المعنى','<span class="en">What lovely weather!</span> في عاصفة'],
   ['<span class="en">Oxymoron</span>','جمع نقيضين','<span class="en">a deafening silence</span>']
  ]},
 {type:'vocab', items:[
   ['<span class="en">verse</span>','بيت شعري / شعر'], ['<span class="en">stanza</span>','مقطع شعري'],
   ['<span class="en">rhyme</span>','قافية'], ['<span class="en">rhythm</span>','إيقاع'],
   ['<span class="en">sonnet</span>','سوناتة (14 بيتاً)'], ['<span class="en">ode</span>','قصيدة غنائية مدحية'],
   ['<span class="en">epic</span>','ملحمة'], ['<span class="en">free verse</span>','شعر حر'],
   ['<span class="en">poet / poetry / poetic</span>','شاعر / شعر / شعري'], ['<span class="en">theme</span>','موضوع / فكرة محورية'],
   ['<span class="en">mood / tone</span>','جوّ النص / نبرة الشاعر'], ['<span class="en">masterpiece</span>','تحفة فنية']
 ]},
 {type:'h', ico:'📐', t:'القواعد — Passive Voice'},
 {type:'box', kind:'rule', t:'القاعدة الأم', html:'المفعول يصبح فاعلاً + <span class="en">be</span> بزمن الفعل الأصلي + <span class="en">V3</span> + (<span class="en">by</span> + الفاعل الأصلي إن لزم).'},
 {type:'table', head:['الزمن','المعلوم','المجهول'],
  rows:[
   ['Present Simple','<span class="en">They treat patients.</span>','<span class="en">Patients are treated.</span>'],
   ['Present Cont.','<span class="en">They are testing it.</span>','<span class="en">It is being tested.</span>'],
   ['Past Simple','<span class="en">He discovered it.</span>','<span class="en">It was discovered.</span>'],
   ['Past Cont.','<span class="en">They were building it.</span>','<span class="en">It was being built.</span>'],
   ['Present Perfect','<span class="en">They have found it.</span>','<span class="en">It has been found.</span>'],
   ['Past Perfect','<span class="en">They had used it.</span>','<span class="en">It had been used.</span>'],
   ['Future','<span class="en">They will produce it.</span>','<span class="en">It will be produced.</span>'],
   ['Modals','<span class="en">They must clean it.</span>','<span class="en">It must be cleaned.</span>']
  ]},
 {type:'box', kind:'warn', t:'نقاط امتحانية دقيقة ⚠️', html:'• الفعل اللازم (<span class="en">arrive, happen, sleep</span>) لا يُبنى للمجهول.<br>• مع فعلين مفعولين نبدأ بالشخص: <span class="en">He was given a prize.</span><br>• صيغة المصدر: <span class="en">It is said that he is a great doctor. = He is said to be a great doctor.</span><br>• نحذف <span class="en">by</span> إذا كان الفاعل مجهولاً أو عامّاً (<span class="en">someone, people, they</span>).'},
 {type:'h', ico:'🗣️', t:'النطق — Emphatic Stress'},
 {type:'text', html:'النبر التوكيدي هو رفع الصوت على كلمة واحدة لتغيير <b>بؤرة المعنى</b>. الجملة نفسها تعطي خمسة معانٍ بحسب الكلمة المنبورة:<br><span class="en-blk"><b>I</b> didn\'t take your book. (غيري أخذه)<br>I didn\'t take <b>your</b> book. (بل كتاب آخر)<br>I didn\'t <b>take</b> it. (بل استعرته)</span>'},
 {type:'h', ico:'💬', t:'Everyday English — طلب المعلومات'},
 {type:'table', head:['الصيغة','الملاحظة'],
  rows:[
   ['<span class="en">Could you tell me where the lab is?</span>','سؤال غير مباشر: ترتيب خبري لا استفهامي'],
   ['<span class="en">I\'d like to know when the results come out.</span>','صيغة مهذّبة'],
   ['<span class="en">Do you happen to know…?</span>','تخفيف شديد'],
   ['<span class="en">Would you mind telling me…?</span>','+ <span class="en">V-ing</span>'],
   ['<span class="en">Excuse me, may I ask…?</span>','بداية مهذّبة']
  ]},
 {type:'box', kind:'warn', t:'فخّ السؤال غير المباشر', html:'✗ <span class="en">Could you tell me where is the lab?</span><br>✓ <span class="en">Could you tell me where the lab is?</span>'},
 {type:'drill', items:[
  '1) حوّل: <span class="en">Alexander Fleming discovered penicillin in 1928.</span>',
  '2) حوّل: <span class="en">They are testing the new vaccine.</span>',
  '3) حوّل: <span class="en">You must take the medicine twice a day.</span>',
  '4) حوّل إلى سؤال غير مباشر: <span class="en">Where is the pharmacy?</span>',
  '5) <span class="en">People say that he is a skilled surgeon.</span> → <span class="en">He ______ .</span>'
 ], answers:'1) <span class="en">Penicillin was discovered by Alexander Fleming in 1928.</span> &nbsp;2) <span class="en">The new vaccine is being tested.</span> &nbsp;3) <span class="en">The medicine must be taken twice a day.</span> &nbsp;4) <span class="en">Could you tell me where the pharmacy is?</span> &nbsp;5) <span class="en">is said to be a skilled surgeon</span>'}
],
quiz:[
 {q:'<span class="en">Penicillin ______ by Fleming in 1928.</span>', o:['<span class="en">discovered</span>','<span class="en">was discovered</span>','<span class="en">is discovered</span>','<span class="en">has discovered</span>'], a:1, sk:'grammar', e:'ماضٍ مجهول: <span class="en">was + V3</span>.'},
 {q:'<span class="en">The new drug ______ at the moment.</span>', o:['<span class="en">is tested</span>','<span class="en">is being tested</span>','<span class="en">was tested</span>','<span class="en">tests</span>'], a:1, sk:'grammar', e:'مضارع مستمر مجهول: <span class="en">is being + V3</span>.'},
 {q:'المجهول من <span class="en">They must sterilize the tools.</span>', o:['<span class="en">The tools must sterilized.</span>','<span class="en">The tools must be sterilized.</span>','<span class="en">The tools must being sterilized.</span>','<span class="en">The tools are must sterilized.</span>'], a:1, sk:'grammar', e:'مع الأفعال الناقصة: <span class="en">modal + be + V3</span>.'},
 {q:'أي فعل <b>لا</b> يُبنى للمجهول؟', o:['<span class="en">write</span>','<span class="en">arrive</span>','<span class="en">build</span>','<span class="en">treat</span>'], a:1, sk:'grammar', e:'<span class="en">arrive</span> فعل لازم بلا مفعول به.'},
 {q:'<span class="en">Could you tell me where ______ ?</span>', o:['<span class="en">is the clinic</span>','<span class="en">the clinic is</span>','<span class="en">does the clinic</span>','<span class="en">is clinic</span>'], a:1, sk:'func', e:'السؤال غير المباشر بترتيب خبري.'},
 {q:'<span class="en">It is said that she is an expert.</span> = ', o:['<span class="en">She said to be an expert.</span>','<span class="en">She is said to be an expert.</span>','<span class="en">She is saying an expert.</span>','<span class="en">She has said an expert.</span>'], a:1, sk:'grammar', e:'صيغة <span class="en">be said to + مصدر</span>.'},
 {q:'في <span class="en">"I didn\'t break YOUR phone"</span> النبر على <span class="en">your</span> يعني:', o:['شخص آخر كسره','كسرتُ هاتفاً آخر','لم أكسره بل أصلحته','لا أملك هاتفاً'], a:1, sk:'pron', e:'النبر على <span class="en">your</span> ينفي ملكية الهاتف لا الفعل.'},
 {q:'<span class="en">The results ______ already ______ .</span>', o:['<span class="en">have / announced</span>','<span class="en">have / been announced</span>','<span class="en">has / announced</span>','<span class="en">are / announcing</span>'], a:1, sk:'grammar', e:'مضارع تام مجهول: <span class="en">have been + V3</span>.'},
 {q:'<span class="en">"The wind whispered through the trees"</span> صورة بلاغية اسمها:', o:['<span class="en">Simile</span>','<span class="en">Personification</span>','<span class="en">Hyperbole</span>','<span class="en">Irony</span>'], a:1, sk:'vocab',
  e:'إعطاء صفة إنسانية لغير العاقل تشخيص <span class="en">personification</span>.'},
 {q:'<span class="en">"He is as brave as a lion"</span> هي:', o:['استعارة','تشبيه','رمز','مبالغة'], a:1, sk:'vocab',
  e:'وجود <span class="en">as … as</span> يجعلها تشبيهاً صريحاً <span class="en">simile</span>.'},
 {q:'القصيدة المكوّنة من أربعة عشر بيتاً تُسمّى:', o:['<span class="en">ode</span>','<span class="en">epic</span>','<span class="en">sonnet</span>','<span class="en">stanza</span>'], a:2, sk:'vocab',
  e:'<span class="en">sonnet</span> = السوناتة ذات الأربعة عشر بيتاً.'},
 {q:'وفق النص، نشأ الشعر أولاً:', o:['مكتوباً في الكتب','شفاهياً للحفظ والإنشاد','في المسرح','في الصحف'], a:1, sk:'reading',
  e:'الوزن والقافية كانا وسيلة الحفظ قبل الكتابة.'},
 {q:'جون كيتس من شعراء:', o:['الكلاسيكية الإغريقية','الرومانتيكية','الحداثة','عصر النهضة'], a:1, sk:'reading',
  e:'كيتس من أعلام الرومانتيكية الإنجليزية في القرن التاسع عشر.'}
]
},

/* ===================== الوحدة 4 ===================== */
{ id:'l4', t:'Drama', ta:'الوحدة 4 — المسرح', tag:'فعل التسبب',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">History of Drama</span> + <span class="en">William Shakespeare</span> &nbsp;|&nbsp; المفردات: مصطلحات المسرح وحروف الحركة &nbsp;|&nbsp; القواعد: <span class="en">The Causative</span> &nbsp;|&nbsp; النطق: <span class="en">Elision</span> &nbsp;|&nbsp; المحادثة: التردّد.'},
 {type:'h', ico:'📖', t:'فكرة النص — تاريخ المسرح'},
 {type:'text', html:'وُلد المسرح في <b>اليونان القديمة</b> من الاحتفالات الدينية تكريماً لـ <span class="en">Dionysus</span>، وقام على نوعين: <b>التراجيديا</b> التي تنتهي بسقوط البطل بسبب عيب فيه (<span class="en">tragic flaw</span>)، و<b>الكوميديا</b> التي تنتهي بالوفاق. أبرز كتّابه الإغريق <span class="en">Sophocles</span> و<span class="en">Euripides</span>. ثم جاء المسرح الروماني، فمسرحيات العصور الوسطى الدينية، فعصر <b>إليزابيث</b> الذهبي في إنجلترا ومسرح <span class="en">The Globe</span>. ونصّ الأنشطة عن <b>وليم شكسبير</b> (1564–1616) من <span class="en">Stratford-upon-Avon</span>: كتب نحو 37 مسرحية و154 سوناتة، وقسّمت أعماله إلى تراجيديات (<span class="en">Hamlet, Macbeth, Othello, King Lear</span>) وكوميديات (<span class="en">Twelfth Night</span>) ومسرحيات تاريخية، وأثرى الإنجليزية بآلاف الكلمات والتعابير.'},
 {type:'h', ico:'🎬', t:'مصطلحات المسرح'},
 {type:'vocab', items:[
   ['<span class="en">play / playwright</span>','مسرحية / كاتب مسرحي'], ['<span class="en">stage</span>','خشبة المسرح'],
   ['<span class="en">act / scene</span>','فصل / مشهد'], ['<span class="en">plot</span>','حبكة'],
   ['<span class="en">character</span>','شخصية'], ['<span class="en">dialogue</span>','حوار'],
   ['<span class="en">monologue / soliloquy</span>','مناجاة / حديث النفس'], ['<span class="en">tragedy / comedy</span>','تراجيديا / كوميديا'],
   ['<span class="en">audience</span>','الجمهور'], ['<span class="en">rehearsal</span>','تمرين على العرض'],
   ['<span class="en">costume</span>','زيّ تمثيلي'], ['<span class="en">performance</span>','أداء / عرض'],
   ['<span class="en">conflict</span>','صراع (محرّك الحبكة)'], ['<span class="en">climax</span>','ذروة الأحداث']
 ]},
 {type:'box', kind:'tip', t:'بنية الحبكة', html:'<span class="en">exposition</span> (العرض) → <span class="en">rising action</span> (تصاعد) → <span class="en">climax</span> (الذروة) → <span class="en">falling action</span> (انحدار) → <span class="en">resolution</span> (الحلّ).'},
 {type:'h', ico:'🧭', t:'حروف الحركة — Prepositions of Movement'},
 {type:'table', head:['الحرف','المعنى','مثال'],
  rows:[
   ['<span class="en">onto</span>','إلى سطح','<span class="en">He stepped onto the stage.</span>'],
   ['<span class="en">off</span>','بعيداً عن سطح','<span class="en">She walked off the stage.</span>'],
   ['<span class="en">through</span>','عبر الداخل','<span class="en">They passed through the curtain.</span>'],
   ['<span class="en">across</span>','عبر السطح','<span class="en">He ran across the hall.</span>'],
   ['<span class="en">towards</span>','باتجاه','<span class="en">He moved towards the audience.</span>'],
   ['<span class="en">past</span>','مروراً بجانب','<span class="en">She walked past him.</span>'],
   ['<span class="en">along</span>','بمحاذاة','<span class="en">Walk along the aisle.</span>'],
   ['<span class="en">into / out of</span>','إلى الداخل / الخارج','<span class="en">He came into the room.</span>']
  ]},
 {type:'h', ico:'📐', t:'القواعد — The Causative'},
 {type:'box', kind:'rule', t:'الصيغة الأساسية', html:'<b>الفاعل يُسبّب القيام بالعمل لا يؤدّيه بنفسه.</b><br><span class="en">have / get + مفعول به + V3</span><br><span class="en-blk">I had my car repaired. / She got her report checked.</span><br>قارن: <span class="en">I repaired my car.</span> (بنفسي) &nbsp;≠&nbsp; <span class="en">I had my car repaired.</span> (غيري فعلها).'},
 {type:'table', head:['الزمن','المثال'],
  rows:[
   ['مضارع بسيط','<span class="en">He has his machines serviced every year.</span>'],
   ['ماضٍ بسيط','<span class="en">We had the bridge inspected last month.</span>'],
   ['مضارع تام','<span class="en">They have had the system upgraded.</span>'],
   ['مستقبل','<span class="en">I will have the prototype tested.</span>'],
   ['ناقص','<span class="en">You should have your eyes checked.</span>']
  ]},
 {type:'box', kind:'rule', t:'صيغ أخرى', html:'• <span class="en">have + شخص + مصدر مجرّد</span>: <span class="en">I had the technician repair it.</span><br>• <span class="en">get + شخص + to + مصدر</span>: <span class="en">I got the technician to repair it.</span><br>• <span class="en">make + شخص + مصدر مجرّد</span> (إجبار): <span class="en">The teacher made us rewrite it.</span><br>• <span class="en">let + شخص + مصدر مجرّد</span> (سماح): <span class="en">He let me use his laptop.</span><br>• تجربة سلبية: <span class="en">He had his phone stolen.</span>'},
 {type:'box', kind:'warn', t:'فخّ ⚠️', html:'في المبني للمجهول يصبح <span class="en">make</span> متبوعاً بـ <span class="en">to</span>:<br><span class="en-blk">We were made to rewrite the report.</span>'},
 {type:'h', ico:'🗣️', t:'النطق — Elision'},
 {type:'text', html:'الحذف الصوتي هو اختفاء صوت في الكلام السريع. أشهره حذف <span class="en">/t/</span> و<span class="en">/d/</span> بين ساكنين:<br><span class="en-blk">next day → nex(t) day &nbsp;|&nbsp; must be → mus(t) be &nbsp;|&nbsp; sandwich → san(d)wich &nbsp;|&nbsp; friendship → frien(d)ship &nbsp;|&nbsp; comfortable → comf(or)table</span>'},
 {type:'h', ico:'💬', t:'Everyday English — التردّد وعدم التأكّد'},
 {type:'vocab', items:[
   ['<span class="en">I\'m not quite sure.</span>','لستُ متأكّداً تماماً'],
   ['<span class="en">Let me think for a moment.</span>','دعني أفكّر لحظة'],
   ['<span class="en">It\'s hard to say.</span>','من الصعب الجزم'],
   ['<span class="en">I\'d rather not say.</span>','أفضّل ألّا أجيب'],
   ['<span class="en">Well, it depends.</span>','يعتمد على الحالة'],
   ['<span class="en">As far as I know…</span>','على حدّ علمي'],
   ['<span class="en">I suppose so.</span>','أظنّ ذلك']
 ]},
 {type:'drill', items:[
  '1) <span class="en">I had my laptop ______ (repair) yesterday.</span>',
  '2) <span class="en">She got the engineer ______ (check) the design.</span>',
  '3) <span class="en">The teacher made us ______ (repeat) the experiment.</span>',
  '4) <span class="en">The cables run ______ the tunnel.</span>',
  '5) عبّر عن تردّدك عند سؤالك عن موعد لا تعرفه.'
 ], answers:'1) <span class="en">repaired</span> &nbsp;2) <span class="en">to check</span> &nbsp;3) <span class="en">repeat</span> &nbsp;4) <span class="en">through</span> &nbsp;5) <span class="en">I\'m not quite sure — as far as I know, it\'s on Sunday.</span>'}
],
quiz:[
 {q:'<span class="en">We had the machine ______ last week.</span>', o:['<span class="en">repair</span>','<span class="en">repaired</span>','<span class="en">repairing</span>','<span class="en">to repair</span>'], a:1, sk:'grammar', e:'<span class="en">have + مفعول + V3</span>.'},
 {q:'<span class="en">I got my brother ______ me with the project.</span>', o:['<span class="en">help</span>','<span class="en">helped</span>','<span class="en">to help</span>','<span class="en">helping</span>'], a:2, sk:'grammar', e:'<span class="en">get + شخص + to + مصدر</span>.'},
 {q:'<span class="en">The manager made the staff ______ overtime.</span>', o:['<span class="en">to work</span>','<span class="en">work</span>','<span class="en">worked</span>','<span class="en">working</span>'], a:1, sk:'grammar', e:'<span class="en">make + شخص + مصدر مجرّد</span> في المعلوم.'},
 {q:'<span class="en">We ______ to repeat the test.</span> (مجهول من make)', o:['<span class="en">made</span>','<span class="en">were made</span>','<span class="en">have made</span>','<span class="en">are making</span>'], a:1, sk:'grammar', e:'في المجهول: <span class="en">be made to + مصدر</span>.'},
 {q:'<span class="en">The new bridge goes ______ the river.</span>', o:['<span class="en">through</span>','<span class="en">across</span>','<span class="en">into</span>','<span class="en">along</span>'], a:1, sk:'grammar', e:'<span class="en">across</span> للعبور فوق سطح ممتد.'},
 {q:'<span class="en">He had his phone stolen</span> تعني:', o:['سرق هاتف غيره','سُرق هاتفه','باع هاتفه','أصلح هاتفه'], a:1, sk:'grammar', e:'صيغة التسبب تُستعمل أيضاً لتجربة سلبية وقعت عليه.'},
 {q:'في الكلام السريع تُحذف <span class="en">/t/</span> في:', o:['<span class="en">next day</span>','<span class="en">open door</span>','<span class="en">big car</span>','<span class="en">blue sky</span>'], a:0, sk:'pron', e:'<span class="en">/t/</span> بين ساكنين تُحذف: <span class="en">nex(t) day</span>.'},
 {q:'تعبير عدم التأكّد:', o:['<span class="en">Definitely yes.</span>','<span class="en">As far as I know…</span>','<span class="en">Of course not.</span>','<span class="en">Certainly.</span>'], a:1, sk:'func', e:'يُظهر تحفّظاً على دقّة المعلومة.'},
 {q:'<span class="en">soliloquy</span> تعني:', o:['حوار بين شخصيتين','مناجاة الشخصية لنفسها بصوت مسموع','وصف المشهد','نهاية المسرحية'], a:1, sk:'vocab',
  e:'الشخصية تكشف أفكارها وحدها على الخشبة.'},
 {q:'ذروة الأحداث في المسرحية تُسمّى:', o:['<span class="en">exposition</span>','<span class="en">climax</span>','<span class="en">resolution</span>','<span class="en">rehearsal</span>'], a:1, sk:'vocab',
  e:'<span class="en">climax</span> = نقطة التوتّر الأعلى.'},
 {q:'نشأ المسرح اليوناني في الأصل من:', o:['المحاكم','الاحتفالات الدينية','الأسواق','المدارس'], a:1, sk:'reading',
  e:'كان جزءاً من أعياد تكريم <span class="en">Dionysus</span>.'},
 {q:'المسرح الذي عُرضت فيه أعمال شكسبير:', o:['<span class="en">The Globe</span>','<span class="en">The Odeon</span>','<span class="en">The Colosseum</span>','<span class="en">The Parthenon</span>'], a:0, sk:'reading',
  e:'مسرح <span class="en">The Globe</span> في لندن.'},
 {q:'سبب سقوط البطل في التراجيديا غالباً:', o:['الحظ وحده','عيب في شخصيته','تدخّل الجمهور','خطأ المخرج'], a:1, sk:'reading',
  e:'<span class="en">tragic flaw</span> هو محرّك السقوط التراجيدي.'}
]
},

/* ===================== الوحدة 5 ===================== */
{ id:'l5', t:'Civil Rights', ta:'الوحدة 5 — الحقوق المدنية', tag:'الجمل الموصولة',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Civil Rights</span> + <span class="en">The Right to Education</span> &nbsp;|&nbsp; المفردات: <span class="en">Law Idioms</span> &nbsp;|&nbsp; القواعد: <span class="en">Relative Clauses</span> &nbsp;|&nbsp; النطق: الأصوات المجهورة والمهموسة &nbsp;|&nbsp; المحادثة: الشكوى والاعتذار.'},
 {type:'h', ico:'📖', t:'فكرة النص'},
 {type:'text', html:'الحقوق المدنية هي <b>الضمانات التي تكفل للفرد المساواة أمام القانون</b> بصرف النظر عن العرق أو الدين أو الجنس. يستعرض النص تطوّر هذه الحقوق: من إعلان حقوق الإنسان العالمي (1948)، إلى حركة الحقوق المدنية في أمريكا وإلغاء الفصل العنصري، مع التذكير بأنّ الحقوق لا تُمنح وحدها بل <b>تُنتزع بالوعي والتنظيم السلمي</b>. ونصّ الأنشطة يركّز على <b>الحق في التعليم</b> بوصفه المفتاح الذي يفتح باقي الحقوق.'},
 {type:'h', ico:'⚖️', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">right</span>','حق'], ['<span class="en">duty / obligation</span>','واجب / التزام'],
   ['<span class="en">equality</span>','مساواة'], ['<span class="en">justice</span>','عدالة'],
   ['<span class="en">discrimination</span>','تمييز'], ['<span class="en">freedom / liberty</span>','حرية'],
   ['<span class="en">citizen</span>','مواطن'], ['<span class="en">law / legal / illegal</span>','قانون / قانوني / غير قانوني'],
   ['<span class="en">court</span>','محكمة'], ['<span class="en">witness</span>','شاهد'],
   ['<span class="en">trial</span>','محاكمة'], ['<span class="en">protest</span>','احتجاج']
 ]},
 {type:'box', kind:'tip', t:'Law Idioms', html:'<span class="en">above the law</span> فوق القانون &nbsp;|&nbsp; <span class="en">take the law into your own hands</span> يقتصّ بنفسه &nbsp;|&nbsp; <span class="en">the letter of the law</span> نصّ القانون الحرفي &nbsp;|&nbsp; <span class="en">beyond a reasonable doubt</span> بما لا يدع مجالاً للشك &nbsp;|&nbsp; <span class="en">get away with</span> يفلت من العقاب.'},
 {type:'h', ico:'📐', t:'القواعد — Relative Clauses'},
 {type:'table', head:['الضمير','يعود على','مثال'],
  rows:[
   ['<span class="en">who</span>','عاقل (فاعل/مفعول)','<span class="en">The lawyer who defended him is famous.</span>'],
   ['<span class="en">whom</span>','عاقل (مفعول، رسمي)','<span class="en">The man whom we met…</span>'],
   ['<span class="en">which</span>','غير عاقل','<span class="en">The law which was passed…</span>'],
   ['<span class="en">that</span>','عاقل وغير عاقل (في المحدِّدة فقط)','<span class="en">The book that I read…</span>'],
   ['<span class="en">whose</span>','ملكية','<span class="en">The student whose paper won…</span>'],
   ['<span class="en">where</span>','مكان','<span class="en">The court where the trial was held…</span>'],
   ['<span class="en">when</span>','زمان','<span class="en">The day when he was freed…</span>'],
   ['<span class="en">why</span>','سبب','<span class="en">The reason why he left…</span>']
  ]},
 {type:'box', kind:'rule', t:'المحدِّدة مقابل غير المحدِّدة', html:'<b>Defining</b>: ضرورية للمعنى، بلا فواصل، ويجوز فيها <span class="en">that</span> وحذف الضمير إذا كان مفعولاً.<br><span class="en-blk">The man who called you is here.</span><br><b>Non-defining</b>: معلومة إضافية بين فاصلتين، ولا تقبل <span class="en">that</span> ولا الحذف.<br><span class="en-blk">My father, who is a lawyer, lives in Homs.</span>'},
 {type:'box', kind:'warn', t:'أخطاء شائعة ⚠️', html:'✗ <span class="en">The book which I read it was useful.</span> (لا نكرّر المفعول)<br>✗ <span class="en">My brother, that is a doctor…</span> (لا <span class="en">that</span> بعد فاصلة)<br>✓ <span class="en">The city in which he lives</span> = <span class="en">The city which he lives in</span> = <span class="en">where he lives</span>'},
 {type:'h', ico:'🗣️', t:'النطق — مجهور ومهموس'},
 {type:'table', head:['مهموس','مجهور','ملاحظة'],
  rows:[
   ['<span class="en">/p/ pen</span>','<span class="en">/b/ bag</span>','المجهور يهتز معه الحبلان الصوتيان'],
   ['<span class="en">/t/ ten</span>','<span class="en">/d/ den</span>','—'],
   ['<span class="en">/k/ cap</span>','<span class="en">/g/ gap</span>','—'],
   ['<span class="en">/f/ fan</span>','<span class="en">/v/ van</span>','—'],
   ['<span class="en">/s/ sip</span>','<span class="en">/z/ zip</span>','—'],
   ['<span class="en">/θ/ think</span>','<span class="en">/ð/ this</span>','—']
  ]},
 {type:'h', ico:'💬', t:'Everyday English — الشكوى والاعتذار'},
 {type:'table', head:['الوظيفة','التعبير'],
  rows:[
   ['شكوى مهذّبة','<span class="en">I\'m sorry to bother you, but there\'s a problem with…</span>'],
   ['شكوى أقوى','<span class="en">I\'d like to make a complaint about…</span>'],
   ['اعتذار','<span class="en">I do apologise for the delay. / I\'m terribly sorry.</span>'],
   ['تبرير','<span class="en">It was entirely our fault. / There seems to have been a mistake.</span>'],
   ['تهدئة','<span class="en">We\'ll look into it right away.</span>'],
   ['قبول الاعتذار','<span class="en">That\'s all right. / Never mind.</span>']
  ]},
 {type:'drill', items:[
  '1) <span class="en">The woman ______ car was stolen called the police.</span>',
  '2) <span class="en">This is the school ______ I studied.</span>',
  '3) ادمج: <span class="en">The law was passed in 1990. It protects children.</span>',
  '4) صحّح: <span class="en">My uncle, that lives in Hama, is a judge.</span>',
  '5) اكتب شكوى مهذّبة عن تأخّر خدمة.'
 ], answers:'1) <span class="en">whose</span> &nbsp;2) <span class="en">where</span> &nbsp;3) <span class="en">The law which was passed in 1990 protects children.</span> &nbsp;4) <span class="en">…, who lives in Hama, …</span> &nbsp;5) <span class="en">I\'m sorry to bother you, but I\'d like to make a complaint about the delay.</span>'}
],
quiz:[
 {q:'<span class="en">The student ______ answer was correct got full marks.</span>', o:['<span class="en">who</span>','<span class="en">which</span>','<span class="en">whose</span>','<span class="en">whom</span>'], a:2, sk:'grammar', e:'الملكية ← <span class="en">whose</span>.'},
 {q:'<span class="en">Damascus, ______ is the capital, is very old.</span>', o:['<span class="en">that</span>','<span class="en">which</span>','<span class="en">where</span>','<span class="en">what</span>'], a:1, sk:'grammar', e:'جملة غير محدِّدة ← <span class="en">which</span> ولا تقبل <span class="en">that</span>.'},
 {q:'أي جملة <b>خاطئة</b>؟', o:['<span class="en">The book that I read was useful.</span>','<span class="en">The book which I read it was useful.</span>','<span class="en">The book I read was useful.</span>','<span class="en">The book which I read was useful.</span>'], a:1, sk:'grammar', e:'لا نكرّر المفعول بعد ضمير الوصل.'},
 {q:'<span class="en">That\'s the hospital ______ he was born.</span>', o:['<span class="en">which</span>','<span class="en">where</span>','<span class="en">who</span>','<span class="en">whose</span>'], a:1, sk:'grammar', e:'ظرف مكان ← <span class="en">where</span>.'},
 {q:'<span class="en">______ means treating people differently without a fair reason.</span>', o:['<span class="en">Equality</span>','<span class="en">Discrimination</span>','<span class="en">Justice</span>','<span class="en">Liberty</span>'], a:1, sk:'vocab', e:'<span class="en">discrimination</span> = تمييز.'},
 {q:'<span class="en">Nobody is ______ the law.</span>', o:['<span class="en">over</span>','<span class="en">above</span>','<span class="en">on</span>','<span class="en">under</span>'], a:1, sk:'vocab', e:'التعبير الثابت <span class="en">above the law</span>.'},
 {q:'<span class="en">He ______ with cheating in the exam.</span>', o:['<span class="en">got away</span>','<span class="en">got up</span>','<span class="en">got over</span>','<span class="en">got on</span>'], a:0, sk:'vocab', e:'<span class="en">get away with</span> = يفلت من العقاب.'},
 {q:'الصوت المجهور المقابل لـ <span class="en">/f/</span>:', o:['<span class="en">/v/</span>','<span class="en">/s/</span>','<span class="en">/θ/</span>','<span class="en">/p/</span>'], a:0, sk:'pron', e:'<span class="en">/f/</span> مهموس و<span class="en">/v/</span> مجهور.'},
 {q:'للشكوى بلطف نبدأ بـ:', o:['<span class="en">This is terrible!</span>','<span class="en">I\'m sorry to bother you, but…</span>','<span class="en">You must fix it now.</span>','<span class="en">Never mind.</span>'], a:1, sk:'func', e:'التلطيف يسبق الشكوى في الإنجليزية.'},
 {q:'الاعتذار الرسمي الأنسب:', o:['<span class="en">My bad.</span>','<span class="en">I do apologise for the delay.</span>','<span class="en">Whatever.</span>','<span class="en">Not my problem.</span>'], a:1, sk:'func', e:'<span class="en">I do apologise</span> صيغة رسمية مؤكّدة.'},
 {q:'وفق النص، الحقوق:', o:['تُمنح دائماً بلا جهد','تُنتزع بالوعي والتنظيم السلمي','تخصّ فئة واحدة','لا علاقة لها بالتعليم'], a:1, sk:'reading', e:'النص يشدّد على الوعي والعمل السلمي المنظّم.'},
 {q:'<span class="en">The man ______ we met yesterday is a judge.</span>', o:['<span class="en">which</span>','<span class="en">whose</span>','<span class="en">whom</span>','<span class="en">where</span>'], a:2, sk:'grammar', e:'عاقل في موضع المفعول ← <span class="en">whom</span> (أو <span class="en">who/that</span> أو الحذف).'}
]
},

/* ===================== الوحدة 6 ===================== */
{ id:'l6', t:'United Nations', ta:'الوحدة 6 — الأمم المتحدة', tag:'صيغ المستقبل',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">United Nations</span> &nbsp;|&nbsp; المفردات: <span class="en">Prefixes</span> &nbsp;|&nbsp; القواعد: <span class="en">Future Forms</span> &nbsp;|&nbsp; النطق: نبر الكلمات ذات المقطعين &nbsp;|&nbsp; المحادثة: التواضع.'},
 {type:'h', ico:'📖', t:'فكرة النص'},
 {type:'text', html:'تأسّست <b>الأمم المتحدة</b> عام 1945 بعد الحرب العالمية الثانية لمنع تكرار الحروب الكبرى. أهدافها الأربعة: حفظ السلم والأمن، وتنمية العلاقات الودّية بين الدول، وتحقيق التعاون الدولي في حلّ المشكلات الاقتصادية والاجتماعية والإنسانية، وتعزيز احترام حقوق الإنسان. أجهزتها الرئيسة: الجمعية العامة، ومجلس الأمن، والأمانة العامة، ومحكمة العدل الدولية، والمجلس الاقتصادي والاجتماعي. ولها وكالات متخصّصة مثل <span class="en">UNESCO, WHO, UNICEF, UNHCR</span>. ينتقد البعض بطء قراراتها وحقّ النقض، لكنّ النص يرى أنّ وجودها أفضل من غيابها.'},
 {type:'h', ico:'🌐', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">peace / peaceful</span>','سلام / سلمي'], ['<span class="en">security</span>','أمن'],
   ['<span class="en">cooperation</span>','تعاون'], ['<span class="en">negotiation</span>','مفاوضات'],
   ['<span class="en">agreement / treaty</span>','اتفاق / معاهدة'], ['<span class="en">conflict</span>','نزاع'],
   ['<span class="en">refugee</span>','لاجئ'], ['<span class="en">aid / relief</span>','مساعدات / إغاثة'],
   ['<span class="en">poverty</span>','فقر'], ['<span class="en">sustainable development</span>','تنمية مستدامة'],
   ['<span class="en">resolution</span>','قرار (أممي)'], ['<span class="en">veto</span>','حقّ النقض']
 ]},
 {type:'h', ico:'🔡', t:'السوابق — Prefixes'},
 {type:'table', head:['السابقة','المعنى','مثال'],
  rows:[
   ['<span class="en">un-</span>','نفي','<span class="en">unfair, unable, unhappy</span>'],
   ['<span class="en">in- / im- / ir- / il-</span>','نفي','<span class="en">incorrect, impossible, irregular, illegal</span>'],
   ['<span class="en">dis-</span>','عكس','<span class="en">disagree, dishonest, disappear</span>'],
   ['<span class="en">mis-</span>','خطأ','<span class="en">misunderstand, misuse</span>'],
   ['<span class="en">re-</span>','إعادة','<span class="en">rebuild, rewrite, reunite</span>'],
   ['<span class="en">pre- / post-</span>','قبل / بعد','<span class="en">prewar, postwar</span>'],
   ['<span class="en">inter-</span>','بين','<span class="en">international, interact</span>'],
   ['<span class="en">over- / under-</span>','مفرط / ناقص','<span class="en">overpopulation, underdeveloped</span>'],
   ['<span class="en">co-</span>','مشاركة','<span class="en">cooperate, coexist</span>'],
   ['<span class="en">multi-</span>','متعدّد','<span class="en">multinational</span>']
  ]},
 {type:'box', kind:'tip', t:'قاعدة الاختيار', html:'<span class="en">im-</span> قبل <span class="en">m, p, b</span> &nbsp;|&nbsp; <span class="en">ir-</span> قبل <span class="en">r</span> &nbsp;|&nbsp; <span class="en">il-</span> قبل <span class="en">l</span> &nbsp;|&nbsp; <span class="en">in-</span> في غير ذلك.'},
 {type:'h', ico:'📐', t:'القواعد — Future Forms'},
 {type:'table', head:['الصيغة','الاستعمال','مثال'],
  rows:[
   ['<span class="en">will</span>','قرار لحظي، وعد، توقّع، عرض','<span class="en">I\'ll help you.</span>'],
   ['<span class="en">be going to</span>','نيّة سابقة أو دليل حاضر','<span class="en">They are going to sign a treaty.</span>'],
   ['<span class="en">Present Continuous</span>','ترتيب مؤكّد بموعد','<span class="en">We are meeting the delegation at 9.</span>'],
   ['<span class="en">Present Simple</span>','جدول رسمي ثابت','<span class="en">The session starts at 10 a.m.</span>'],
   ['<span class="en">will be + V-ing</span>','سيكون جارياً في لحظة مستقبلية','<span class="en">This time tomorrow they will be voting.</span>'],
   ['<span class="en">will have + V3</span>','سينتهي قبل وقت مستقبلي','<span class="en">By June they will have signed it.</span>'],
   ['<span class="en">be about to</span>','وشيك جداً','<span class="en">The meeting is about to begin.</span>']
  ]},
 {type:'box', kind:'warn', t:'فخّ ⚠️', html:'لا <span class="en">will</span> بعد روابط الزمن (<span class="en">when, after, before, until, as soon as</span>)، لكنّها جائزة بعد <span class="en">if</span> حين تعني «إن كنتَ مستعداً» في الطلبات المهذّبة: <span class="en">If you will wait a moment…</span>'},
 {type:'h', ico:'🗣️', t:'النطق — نبر الكلمات ذات المقطعين'},
 {type:'text', html:'قاعدة عملية: <b>الاسم أو الصفة</b> يكون النبر على المقطع الأول، و<b>الفعل</b> على المقطع الثاني.<br><span class="en-blk">a <b>RE</b>cord ← to re<b>CORD</b> &nbsp;|&nbsp; a <b>PRE</b>sent ← to pre<b>SENT</b> &nbsp;|&nbsp; an <b>IN</b>crease ← to in<b>CREASE</b> &nbsp;|&nbsp; a <b>CON</b>flict ← to con<b>FLICT</b> &nbsp;|&nbsp; an <b>OB</b>ject ← to ob<b>JECT</b></span>'},
 {type:'h', ico:'💬', t:'Everyday English — التواضع'},
 {type:'vocab', items:[
   ['<span class="en">It was nothing really.</span>','لم يكن شيئاً يُذكر'],
   ['<span class="en">I was just doing my job.</span>','كنتُ أؤدّي واجبي فحسب'],
   ['<span class="en">I owe it all to my team.</span>','الفضل كلّه لفريقي'],
   ['<span class="en">You\'re too kind.</span>','أنت لطيف جداً'],
   ['<span class="en">Anyone would have done the same.</span>','أيّ أحد كان سيفعل مثلي'],
   ['<span class="en">I still have a lot to learn.</span>','ما زال أمامي الكثير لأتعلّمه']
 ]},
 {type:'drill', items:[
  '1) <span class="en">Look at the clouds! It ______ rain.</span>',
  '2) <span class="en">The train ______ (leave) at 6:30 every morning.</span>',
  '3) <span class="en">By next year, they ______ (complete) the project.</span>',
  '4) ضع السابقة المناسبة: ______<span class="en">legal</span>, ______<span class="en">possible</span>, ______<span class="en">regular</span>',
  '5) أين النبر في <span class="en">to increase</span>؟'
 ], answers:'1) <span class="en">is going to</span> &nbsp;2) <span class="en">leaves</span> &nbsp;3) <span class="en">will have completed</span> &nbsp;4) <span class="en">illegal, impossible, irregular</span> &nbsp;5) على المقطع الثاني <span class="en">in-CREASE</span>'}
],
quiz:[
 {q:'<span class="en">Look at those clouds! It ______ rain.</span>', o:['<span class="en">will</span>','<span class="en">is going to</span>','<span class="en">shall</span>','<span class="en">is raining</span>'], a:1, sk:'grammar', e:'دليل حاضر ← <span class="en">be going to</span>.'},
 {q:'<span class="en">This time tomorrow we ______ the report.</span>', o:['<span class="en">will discuss</span>','<span class="en">will be discussing</span>','<span class="en">discuss</span>','<span class="en">have discussed</span>'], a:1, sk:'grammar', e:'لحظة محدّدة في المستقبل ← المستقبل المستمر.'},
 {q:'<span class="en">The conference ______ at 9 a.m. according to the schedule.</span>', o:['<span class="en">is starting</span>','<span class="en">starts</span>','<span class="en">will start</span>','<span class="en">is going to start</span>'], a:1, sk:'grammar', e:'جدول رسمي ← المضارع البسيط.'},
 {q:'السابقة الصحيحة: ______<span class="en">possible</span>', o:['<span class="en">un-</span>','<span class="en">im-</span>','<span class="en">ir-</span>','<span class="en">dis-</span>'], a:1, sk:'vocab', e:'<span class="en">im-</span> قبل <span class="en">p</span>.'},
 {q:'<span class="en">He ______ the instructions and failed.</span>', o:['<span class="en">reunderstood</span>','<span class="en">misunderstood</span>','<span class="en">disunderstood</span>','<span class="en">overunderstood</span>'], a:1, sk:'vocab', e:'<span class="en">mis-</span> تدلّ على الخطأ.'},
 {q:'الوكالة المعنية بالصحة:', o:['<span class="en">UNESCO</span>','<span class="en">WHO</span>','<span class="en">UNICEF</span>','<span class="en">UNHCR</span>'], a:1, sk:'reading', e:'<span class="en">WHO</span> منظمة الصحة العالمية.'},
 {q:'<span class="en">veto</span> تعني:', o:['قرار بالإجماع','حقّ النقض','مفاوضات','معاهدة'], a:1, sk:'vocab', e:'<span class="en">veto</span> = حق النقض في مجلس الأمن.'},
 {q:'<span class="en">I\'ll call you when I ______ there.</span>', o:['<span class="en">will get</span>','<span class="en">get</span>','<span class="en">am getting</span>','<span class="en">got</span>'], a:1, sk:'grammar', e:'لا <span class="en">will</span> بعد <span class="en">when</span> الزمنية.'},
 {q:'النبر في الاسم <span class="en">a record</span> يقع على:', o:['المقطع الأول','المقطع الثاني','المقطعين معاً','لا نبر'], a:0, sk:'pron', e:'الأسماء ذات مقطعين تُنبر على الأول.'},
 {q:'ردّ متواضع على المديح:', o:['<span class="en">Yes, I am the best.</span>','<span class="en">I owe it all to my team.</span>','<span class="en">Finally you noticed.</span>','<span class="en">Of course I am.</span>'], a:1, sk:'func', e:'ينسب الفضل للآخرين.'},
 {q:'تأسّست الأمم المتحدة عام:', o:['1919','1945','1948','1950'], a:1, sk:'reading', e:'بعد الحرب العالمية الثانية مباشرة.'},
 {q:'<span class="en">The meeting is about to ______ .</span>', o:['<span class="en">beginning</span>','<span class="en">begin</span>','<span class="en">began</span>','<span class="en">begins</span>'], a:1, sk:'grammar', e:'بعد <span class="en">be about to</span> مصدر.'}
]
},

/* ===================== الوحدة 7 ===================== */
{ id:'l7', t:'Prose', ta:'الوحدة 7 — النثر', tag:'الشرط الثاني والثالث',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Prose</span> &nbsp;|&nbsp; المفردات: <span class="en">Phrasal Verbs &amp; Prepositional Phrases</span> &nbsp;|&nbsp; القواعد: <span class="en">Conditionals II &amp; III</span> &nbsp;|&nbsp; المحادثة: مصطلحات الهاتف.'},
 {type:'h', ico:'📖', t:'فكرة النص — النثر'},
 {type:'text', html:'النثر هو <b>الكلام المرسل بلا وزن ولا قافية</b>، وهو لغة الحياة اليومية والكتابة العلمية والأدبية على السواء. ينقسم إلى <b>نثر تخييلي</b> (<span class="en">fiction</span>): الرواية (<span class="en">novel</span>)، والرواية القصيرة (<span class="en">novella</span>)، والقصة القصيرة (<span class="en">short story</span>)؛ و<b>نثر غير تخييلي</b> (<span class="en">non-fiction</span>): السيرة (<span class="en">biography</span>)، والسيرة الذاتية (<span class="en">autobiography</span>)، والمقالة، والمذكّرات، والتقارير. وأركان العمل النثري: <b>الحبكة</b>، و<b>الشخصيات</b>، و<b>الزمان والمكان</b> (<span class="en">setting</span>)، و<b>زاوية الرؤية</b> (<span class="en">point of view</span>)، و<b>الفكرة المحورية</b> (<span class="en">theme</span>). وقد بلغت الرواية الإنجليزية ذروتها في القرن التاسع عشر مع <span class="en">Dickens</span> و<span class="en">Austen</span> و<span class="en">the Brontë sisters</span>.'},
 {type:'h', ico:'📚', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">prose</span>','نثر'], ['<span class="en">fiction / non-fiction</span>','تخييلي / غير تخييلي'],
   ['<span class="en">novel / novella</span>','رواية / رواية قصيرة'], ['<span class="en">narrator</span>','الراوي'],
   ['<span class="en">setting</span>','الزمان والمكان'], ['<span class="en">point of view</span>','زاوية الرؤية'],
   ['<span class="en">protagonist / antagonist</span>','البطل / الخصم'], ['<span class="en">biography</span>','سيرة'],
   ['<span class="en">autobiography</span>','سيرة ذاتية'], ['<span class="en">chapter</span>','فصل'],
   ['<span class="en">description</span>','وصف'], ['<span class="en">narrative</span>','سرد / سردي'],
   ['<span class="en">flashback</span>','استرجاع'], ['<span class="en">suspense</span>','تشويق']
 ]},
 {type:'h', ico:'🔗', t:'Phrasal Verbs & Prepositional Phrases'},
 {type:'table', head:['التعبير','المعنى','مثال'],
  rows:[
   ['<span class="en">bring about</span>','يُحدِث / يُسبّب','<span class="en">The novel brought about a change in views.</span>'],
   ['<span class="en">come across</span>','يعثر مصادفةً','<span class="en">I came across an old manuscript.</span>'],
   ['<span class="en">make up</span>','يختلق / يؤلّف','<span class="en">He made up the whole story.</span>'],
   ['<span class="en">point out</span>','يُنبّه إلى','—'],
   ['<span class="en">look up to</span>','يُعجب بـ / يقتدي','—'],
   ['<span class="en">in brief / in short</span>','بإيجاز','—'],
   ['<span class="en">on the whole</span>','بشكل عام','—'],
   ['<span class="en">by heart</span>','عن ظهر قلب','—'],
   ['<span class="en">at first sight</span>','من النظرة الأولى','—'],
   ['<span class="en">in the long run</span>','على المدى الطويل','—']
  ]},
 {type:'h', ico:'📐', t:'القواعد — الجمل الشرطية'},
 {type:'table', head:['النوع','صيغة if','الصيغة الرئيسة','الدلالة'],
  rows:[
   ['صفر','<span class="en">present simple</span>','<span class="en">present simple</span>','حقيقة علمية: <span class="en">If you heat water, it boils.</span>'],
   ['الأول','<span class="en">present simple</span>','<span class="en">will + V</span>','احتمال واقعي: <span class="en">If you wash your hands, you will avoid germs.</span>'],
   ['الثاني','<span class="en">past simple</span>','<span class="en">would + V</span>','فرض مخالف للحاضر: <span class="en">If I had a microscope, I would examine it.</span>'],
   ['الثالث','<span class="en">had + V3</span>','<span class="en">would have + V3</span>','ندم على الماضي: <span class="en">If he had taken the vaccine, he wouldn\'t have got ill.</span>']
  ]},
 {type:'box', kind:'rule', t:'الشرط المختلط', html:'ماضٍ أثّر في الحاضر:<br><span class="en-blk">If I had studied medicine, I would be a doctor now.</span>'},
 {type:'box', kind:'warn', t:'نقاط امتحانية ⚠️', html:'• في الشرط الثاني نستعمل <span class="en">were</span> مع كل الضمائر: <span class="en">If I were you…</span><br>• القلب بحذف <span class="en">if</span>: <span class="en">Were I you… / Had he known… / Should you need help…</span><br>• <span class="en">unless</span> = <span class="en">if … not</span> ولا تُنفى بعدها: ✓ <span class="en">Unless you hurry, you will be late.</span><br>• بدائل <span class="en">if</span>: <span class="en">provided that, as long as, in case, otherwise</span>.'},
 {type:'h', ico:'🗣️', t:'النطق — الحروف الصامتة'},
 {type:'table', head:['الحرف الصامت','أمثلة'],
  rows:[
   ['<span class="en">b</span>','<span class="en">climb, lamb, doubt, debt, comb</span>'],
   ['<span class="en">k</span>','<span class="en">know, knife, knee, knock</span>'],
   ['<span class="en">w</span>','<span class="en">write, wrong, answer, two, sword</span>'],
   ['<span class="en">h</span>','<span class="en">hour, honest, honour, ghost</span>'],
   ['<span class="en">t</span>','<span class="en">listen, castle, often, whistle</span>'],
   ['<span class="en">l</span>','<span class="en">calm, half, could, walk, talk</span>'],
   ['<span class="en">g</span>','<span class="en">sign, design, foreign</span>'],
   ['<span class="en">p</span>','<span class="en">psychology, receipt, pneumonia</span>']
  ]},
 {type:'h', ico:'💬', t:'Everyday English — على الهاتف'},
 {type:'table', head:['الموقف','التعبير'],
  rows:[
   ['الردّ','<span class="en">Hello, this is Ahmad speaking.</span>'],
   ['السؤال عن الهوية','<span class="en">Who\'s calling, please?</span>'],
   ['الطلب','<span class="en">May I speak to Dr. Samer, please?</span>'],
   ['الانتظار','<span class="en">Hold on a moment, please. / I\'ll put you through.</span>'],
   ['الغياب','<span class="en">I\'m afraid he\'s not available at the moment.</span>'],
   ['الرسالة','<span class="en">Can I take a message? / Could you ask him to call me back?</span>'],
   ['سوء الاتصال','<span class="en">Sorry, the line is bad. / You\'re breaking up.</span>'],
   ['الخطأ','<span class="en">I\'m sorry, you\'ve got the wrong number.</span>']
  ]},
 {type:'drill', items:[
  '1) <span class="en">If I ______ (be) you, I would wear gloves.</span>',
  '2) <span class="en">If she ______ (take) the medicine, she would have recovered.</span>',
  '3) <span class="en">______ you hurry, you will miss the lab session.</span> (unless/if)',
  '4) اقلب: <span class="en">If I had known, I would have told you.</span>',
  '5) ما الحرف الصامت في <span class="en">receipt</span>؟'
 ], answers:'1) <span class="en">were</span> &nbsp;2) <span class="en">had taken</span> &nbsp;3) <span class="en">Unless</span> &nbsp;4) <span class="en">Had I known, I would have told you.</span> &nbsp;5) حرف <span class="en">p</span>'}
],
quiz:[
 {q:'<span class="en">If I ______ more time, I would repeat the experiment.</span>', o:['<span class="en">have</span>','<span class="en">had</span>','<span class="en">will have</span>','<span class="en">have had</span>'], a:1, sk:'grammar', e:'الشرط الثاني: <span class="en">If + past simple, would + V</span>.'},
 {q:'<span class="en">If they ______ the sample, they would have found the bacteria.</span>', o:['<span class="en">tested</span>','<span class="en">had tested</span>','<span class="en">test</span>','<span class="en">would test</span>'], a:1, sk:'grammar', e:'الشرط الثالث: <span class="en">had + V3</span>.'},
 {q:'<span class="en">______ you study hard, you will not pass.</span>', o:['<span class="en">If</span>','<span class="en">Unless</span>','<span class="en">When</span>','<span class="en">Although</span>'], a:1, sk:'grammar', e:'<span class="en">Unless</span> = <span class="en">If … not</span>.'},
 {q:'<span class="en">If you heat water to 100°C, it ______ .</span>', o:['<span class="en">would boil</span>','<span class="en">boils</span>','<span class="en">boiled</span>','<span class="en">will have boiled</span>'], a:1, sk:'grammar', e:'الشرط الصفري للحقائق العلمية.'},
 {q:'الصيغة المقلوبة لـ <span class="en">If he had known…</span>', o:['<span class="en">Did he know…</span>','<span class="en">Had he known…</span>','<span class="en">Has he known…</span>','<span class="en">Were he known…</span>'], a:1, sk:'grammar', e:'نحذف <span class="en">if</span> ونقدّم <span class="en">had</span>.'},
 {q:'أي كلمة فيها حرف صامت؟', o:['<span class="en">doubt</span>','<span class="en">table</span>','<span class="en">simple</span>','<span class="en">problem</span>'], a:0, sk:'pron', e:'<span class="en">b</span> صامتة في <span class="en">doubt</span>.'},
 {q:'على الهاتف، <span class="en">"I\'ll put you through"</span> تعني:', o:['سأنهي المكالمة','سأحوّلك إلى الشخص المطلوب','لقد اتصلت برقم خاطئ','الخط مشغول'], a:1, sk:'func', e:'<span class="en">put through</span> = يحوّل المكالمة.'},
 {q:'<span class="en">If I had studied medicine, I ______ a doctor now.</span>', o:['<span class="en">would be</span>','<span class="en">would have been</span>','<span class="en">will be</span>','<span class="en">am</span>'], a:0, sk:'grammar', e:'شرط مختلط: ماضٍ أثّر في الحاضر.'},
 {q:'الفرق بين <span class="en">biography</span> و<span class="en">autobiography</span>:', o:['لا فرق','الثانية يكتبها صاحب السيرة نفسه','الأولى خيالية','الثانية شعرية'], a:1, sk:'vocab',
  e:'<span class="en">auto-</span> تعني «ذاتي»: يكتبها الشخص عن نفسه.'},
 {q:'<span class="en">setting</span> في العمل النثري تعني:', o:['الحبكة','الزمان والمكان','الراوي','الفكرة'], a:1, sk:'vocab',
  e:'<span class="en">setting</span> = إطار الزمان والمكان.'},
 {q:'<span class="en">I ______ an old letter while cleaning.</span>', o:['<span class="en">came across</span>','<span class="en">came up</span>','<span class="en">came out</span>','<span class="en">came over</span>'], a:0, sk:'vocab',
  e:'<span class="en">come across</span> = يعثر على شيء مصادفةً.'},
 {q:'النثر يختلف عن الشعر بأنّه:', o:['أقصر دائماً','بلا وزن ولا قافية','لا يُقرأ','للأطفال فقط'], a:1, sk:'reading',
  e:'النثر كلام مرسل بلا قيد الوزن والقافية.'},
 {q:'بلغت الرواية الإنجليزية ذروتها في:', o:['القرن السادس عشر','القرن التاسع عشر','القرن الحادي والعشرين','العصور الوسطى'], a:1, sk:'reading',
  e:'عصر ديكنز وأوستن والأخوات برونتي.'}
]
},

/* ===================== الوحدة 8 ===================== */
{ id:'l8', t:'Essays', ta:'الوحدة 8 — المقالة', tag:'التمنّي',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Essays</span> &nbsp;|&nbsp; المفردات: <span class="en">Body Idioms</span> &nbsp;|&nbsp; القواعد: <span class="en">Expressing Wishes</span> &nbsp;|&nbsp; النطق: نبر المقاطع &nbsp;|&nbsp; المحادثة: طلب المساعدة.'},
 {type:'h', ico:'📖', t:'فكرة النص — المقالة'},
 {type:'text', html:'المقالة قطعة نثرية قصيرة تعرض <b>فكرة واحدة</b> بأسلوب منظّم. يُنسب تأسيس هذا الفن إلى الفرنسي <span class="en">Montaigne</span> في القرن السادس عشر، ثم أرساه في الإنجليزية <span class="en">Francis Bacon</span>. أنواعها الأربعة: <b>السردية</b> (<span class="en">narrative</span>) تحكي تجربة، و<b>الوصفية</b> (<span class="en">descriptive</span>) ترسم بالكلمات، و<b>التفسيرية</b> (<span class="en">expository</span>) تشرح وتحلّل، و<b>الحجاجية</b> (<span class="en">argumentative/persuasive</span>) تُقنع بالدليل. وبنيتها ثلاثية: <b>مقدّمة</b> تنتهي بجملة الأطروحة (<span class="en">thesis statement</span>)، و<b>متن</b> كل فقرة فيه فكرة واحدة بجملة موضوعية (<span class="en">topic sentence</span>) ودليل، و<b>خاتمة</b> تُجمل ولا تُضيف جديداً. أمّا الأسلوب الجيّد فيقوم على الوضوح والتماسك (<span class="en">coherence</span>) والترابط (<span class="en">cohesion</span>).'},
 {type:'h', ico:'🖋️', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">essay</span>','مقالة'], ['<span class="en">thesis statement</span>','جملة الأطروحة'],
   ['<span class="en">topic sentence</span>','الجملة الموضوعية'], ['<span class="en">argument</span>','حجّة'],
   ['<span class="en">evidence</span>','دليل'], ['<span class="en">viewpoint / opinion</span>','وجهة نظر / رأي'],
   ['<span class="en">persuade / convince</span>','يُقنع'], ['<span class="en">coherence</span>','تماسك المعنى'],
   ['<span class="en">conclusion</span>','خاتمة'], ['<span class="en">summarise</span>','يُلخّص'],
   ['<span class="en">objective / subjective</span>','موضوعي / ذاتي'], ['<span class="en">counter-argument</span>','الحجّة المضادّة']
 ]},
 {type:'box', kind:'tip', t:'عبارات جاهزة للمقالة', html:'الاستهلال: <span class="en">It is often argued that… / Nowadays, … has become a controversial issue.</span><br>العرض: <span class="en">To begin with, … / Furthermore, … / What is more, …</span><br>المثال: <span class="en">For instance, … / A case in point is …</span><br>الطرف الآخر: <span class="en">On the other hand, … / Admittedly, … however, …</span><br>الخاتمة: <span class="en">To sum up, … / All things considered, …</span>'},
 {type:'h', ico:'📐', t:'القواعد — Expressing Wishes'},
 {type:'table', head:['الزمن المُتمنّى','الصيغة','المثال'],
  rows:[
   ['الحاضر','<span class="en">wish + past simple</span>','<span class="en">I wish I knew the answer.</span> (لا أعرفه)'],
   ['الحاضر مع be','<span class="en">wish + were</span>','<span class="en">I wish I were taller.</span>'],
   ['الماضي (ندم)','<span class="en">wish + had + V3</span>','<span class="en">I wish I had studied harder.</span>'],
   ['المستقبل / الانزعاج','<span class="en">wish + would + V</span>','<span class="en">I wish it would stop raining.</span>'],
   ['القدرة','<span class="en">wish + could + V</span>','<span class="en">I wish I could help you.</span>']
  ]},
 {type:'box', kind:'rule', t:'صيغ مرادفة', html:'<span class="en">If only</span> أقوى من <span class="en">wish</span> وتتبع القواعد نفسها: <span class="en">If only I had listened!</span><br><span class="en">It\'s time</span> + ماضٍ بسيط: <span class="en">It\'s time we left.</span><br><span class="en">would rather</span> + ماضٍ بسيط عند تغيّر الفاعل: <span class="en">I\'d rather you came early.</span><br><span class="en">as if / as though</span> + ماضٍ: <span class="en">He talks as if he knew everything.</span>'},
 {type:'box', kind:'warn', t:'فخّ ⚠️', html:'لا نستعمل <span class="en">would</span> مع الفاعل نفسه للتعبير عن رغبة ذاتية:<br>✗ <span class="en">I wish I would be rich.</span> &nbsp; ✓ <span class="en">I wish I were rich.</span>'},
 {type:'h', ico:'🗣️', t:'النطق — نبر المقاطع'},
 {type:'text', html:'قواعد مفيدة: الكلمات المنتهية بـ <span class="en">-tion, -sion, -ic, -ical</span> يقع النبر على <b>المقطع السابق للّاحقة</b>:<br><span class="en-blk">infor<b>MA</b>tion, deci<b>SI</b>on, scien<b>TI</b>fic, eco<b>NO</b>mic</span><br>والمنتهية بـ <span class="en">-ity, -ety, -graphy, -ology</span> يقع النبر قبل اللاحقة بمقطع:<br><span class="en-blk">a<b>BI</b>lity, so<b>CI</b>ety, bi<b>O</b>logy, pho<b>TO</b>graphy</span>'},
 {type:'h', ico:'💬', t:'Everyday English — طلب المساعدة'},
 {type:'vocab', items:[
   ['<span class="en">Could you give me a hand, please?</span>','هل تساعدني من فضلك؟'],
   ['<span class="en">Would you mind helping me?</span>','+ <span class="en">V-ing</span>'],
   ['<span class="en">I wonder if you could…</span>','صيغة مهذّبة جداً'],
   ['<span class="en">Do you think you could…?</span>','طلب لطيف'],
   ['<span class="en">Sure, no problem.</span>','قبول'],
   ['<span class="en">I\'m afraid I\'m a bit busy right now.</span>','رفض مهذّب']
 ]},
 {type:'drill', items:[
  '1) <span class="en">I wish I ______ (know) the answer.</span>',
  '2) <span class="en">If only I ______ (not waste) so much time last year!</span>',
  '3) <span class="en">I wish the neighbours ______ (stop) making noise.</span>',
  '4) <span class="en">It\'s time we ______ (start) revising.</span>',
  '5) ماذا يعني <span class="en">cost an arm and a leg</span>؟'
 ], answers:'1) <span class="en">knew</span> &nbsp;2) <span class="en">hadn\'t wasted</span> &nbsp;3) <span class="en">would stop</span> &nbsp;4) <span class="en">started</span> &nbsp;5) باهظ الثمن جداً'}
],
quiz:[
 {q:'<span class="en">I wish I ______ taller.</span>', o:['<span class="en">am</span>','<span class="en">were</span>','<span class="en">will be</span>','<span class="en">would be</span>'], a:1, sk:'grammar', e:'أمنية في الحاضر مع <span class="en">be</span> ← <span class="en">were</span>.'},
 {q:'<span class="en">I wish I ______ harder for the exam.</span>', o:['<span class="en">study</span>','<span class="en">studied</span>','<span class="en">had studied</span>','<span class="en">would study</span>'], a:2, sk:'grammar', e:'ندم على الماضي ← <span class="en">wish + had + V3</span>.'},
 {q:'<span class="en">I wish he ______ shouting.</span>', o:['<span class="en">stops</span>','<span class="en">stopped</span>','<span class="en">would stop</span>','<span class="en">had stopped</span>'], a:2, sk:'grammar', e:'انزعاج من سلوك مستمر ← <span class="en">wish + would</span>.'},
 {q:'<span class="en">It\'s time we ______ home.</span>', o:['<span class="en">go</span>','<span class="en">went</span>','<span class="en">will go</span>','<span class="en">going</span>'], a:1, sk:'grammar', e:'<span class="en">It\'s time</span> + ماضٍ بسيط.'},
 {q:'<span class="en">He behaves as if he ______ the manager.</span>', o:['<span class="en">is</span>','<span class="en">were</span>','<span class="en">will be</span>','<span class="en">has been</span>'], a:1, sk:'grammar', e:'<span class="en">as if</span> + ماضٍ للدلالة على الخيال.'},
 {q:'النبر في <span class="en">information</span> يقع على:', o:['<span class="en">in</span>','<span class="en">for</span>','<span class="en">ma</span>','<span class="en">tion</span>'], a:2, sk:'pron', e:'قبل لاحقة <span class="en">-tion</span> مباشرة.'},
 {q:'<span class="en">Would you mind ______ me?</span>', o:['<span class="en">to help</span>','<span class="en">help</span>','<span class="en">helping</span>','<span class="en">helped</span>'], a:2, sk:'func', e:'بعد <span class="en">mind</span> يأتي <span class="en">V-ing</span>.'},
 {q:'أي جملة <b>خاطئة</b>؟', o:['<span class="en">I wish I were rich.</span>','<span class="en">I wish I would be rich.</span>','<span class="en">I wish I could travel.</span>','<span class="en">I wish I had travelled.</span>'], a:1, sk:'grammar', e:'لا نستعمل <span class="en">would</span> مع الفاعل نفسه في التمنّي.'},
 {q:'جملة الأطروحة <span class="en">(thesis statement)</span> تأتي عادةً:', o:['في منتصف المقالة','في نهاية المقدّمة','في الخاتمة فقط','في العنوان'], a:1, sk:'vocab',
  e:'تُقفل المقدّمة وتحدّد مسار المقالة.'},
 {q:'المقالة التي تهدف إلى إقناع القارئ بالدليل:', o:['<span class="en">narrative</span>','<span class="en">descriptive</span>','<span class="en">argumentative</span>','<span class="en">expository</span>'], a:2, sk:'vocab',
  e:'<span class="en">argumentative/persuasive</span> تعرض الحجج والأدلّة.'},
 {q:'<span class="en">coherence</span> تعني:', o:['طول المقالة','تماسك المعنى وترتيب الأفكار','عدد الكلمات','جمال الخط'], a:1, sk:'vocab',
  e:'انسجام الأفكار وتسلسلها المنطقي.'},
 {q:'وفق النص، يُنسب تأسيس فن المقالة إلى:', o:['<span class="en">Shakespeare</span>','<span class="en">Montaigne</span>','<span class="en">Dickens</span>','<span class="en">Keats</span>'], a:1, sk:'reading',
  e:'مونتين الفرنسي، ثم أرساه بيكون في الإنجليزية.'},
 {q:'الخاتمة الجيّدة في المقالة:', o:['تُضيف أفكاراً جديدة','تُجمل ما سبق دون إضافة جديد','تكرّر المقدّمة حرفياً','تطرح سؤالاً بلا إجابة دائماً'], a:1, sk:'reading',
  e:'وظيفتها الإجمال والإغلاق المنطقي.'}
]
},

/* ===================== الوحدة 9 ===================== */
{ id:'l9', t:'Citizenship', ta:'الوحدة 9 — المواطنة', tag:'أدوات الربط المزدوجة',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Citizenship</span> &nbsp;|&nbsp; المفردات: عائلة الكلمة والصفات مع حروف الجر &nbsp;|&nbsp; القواعد: <span class="en">Paired Conjunctions</span> &nbsp;|&nbsp; النطق: <span class="en">Homographs</span> &nbsp;|&nbsp; المحادثة: قبول العروض ورفضها.'},
 {type:'h', ico:'📖', t:'فكرة النص'},
 {type:'text', html:'المواطنة ليست مجرّد وثيقة هوية، بل <b>عقد متبادل بين الفرد والمجتمع</b>: للمواطن حقوق (التعليم، الصحة، الأمان، المشاركة)، وعليه واجبات (احترام القانون، دفع الضرائب، حماية الممتلكات العامة، احترام التنوّع). ويميّز النص بين <b>المواطن السلبي</b> الذي يكتفي بالانتقاد، و<b>المواطن الفاعل</b> الذي يتطوّع ويشارك ويحافظ على بيئته. والمواطنة الرقمية امتداد لذلك: احترام الآخرين على الشبكة، والتحقّق من الأخبار قبل نشرها.'},
 {type:'h', ico:'🏛️', t:'المفردات + حروف الجر'},
 {type:'table', head:['الصفة + حرف الجر','المعنى','مثال'],
  rows:[
   ['<span class="en">responsible for</span>','مسؤول عن','<span class="en">We are responsible for our city.</span>'],
   ['<span class="en">proud of</span>','فخور بـ','<span class="en">He is proud of his country.</span>'],
   ['<span class="en">aware of</span>','مدرك لـ','<span class="en">Be aware of your duties.</span>'],
   ['<span class="en">interested in</span>','مهتم بـ','—'],
   ['<span class="en">capable of</span>','قادر على','—'],
   ['<span class="en">keen on</span>','شغوف بـ','—'],
   ['<span class="en">good / bad at</span>','جيد / سيئ في','—'],
   ['<span class="en">different from</span>','مختلف عن','—'],
   ['<span class="en">similar to</span>','مشابه لـ','—'],
   ['<span class="en">dependent on</span>','معتمد على','—']
  ]},
 {type:'h', ico:'📐', t:'القواعد — Paired Conjunctions'},
 {type:'table', head:['الأداة','المعنى','المثال'],
  rows:[
   ['<span class="en">both … and</span>','كلاهما','<span class="en">Both students and teachers took part.</span>'],
   ['<span class="en">either … or</span>','إمّا','<span class="en">Either you or he is wrong.</span>'],
   ['<span class="en">neither … nor</span>','لا هذا ولا ذاك','<span class="en">Neither the mayor nor the council was there.</span>'],
   ['<span class="en">not only … but also</span>','ليس فقط بل أيضاً','<span class="en">He is not only clever but also humble.</span>'],
   ['<span class="en">whether … or</span>','سواء','<span class="en">Whether you agree or not, the law applies.</span>']
  ]},
 {type:'box', kind:'rule', t:'قاعدة المطابقة الذهبية', html:'مع <span class="en">both … and</span> يكون الفعل <b>جمعاً</b> دائماً.<br>مع <span class="en">either … or</span> و<span class="en">neither … nor</span> و<span class="en">not only … but also</span> يطابق الفعل <b>أقرب فاعل إليه</b>.<br><span class="en-blk">Neither the teachers nor the principal was present.<br>Neither the principal nor the teachers were present.</span>'},
 {type:'box', kind:'warn', t:'التوازي ⚠️', html:'ما يلي الطرف الأول يجب أن يماثل ما يلي الطرف الثاني في النوع النحوي:<br>✗ <span class="en">He is not only clever but also he works hard.</span><br>✓ <span class="en">He is not only clever but also hard-working.</span><br>وبعد <span class="en">neither</span> لا ننفي مرة أخرى: ✗ <span class="en">Neither he didn\'t come…</span>'},
 {type:'box', kind:'tip', t:'التقديم مع not only', html:'إذا بدأت الجملة بـ <span class="en">Not only</span> نقلب الترتيب:<br><span class="en-blk">Not only did he volunteer, but he also donated.</span>'},
 {type:'h', ico:'🗣️', t:'النطق — Homographs'},
 {type:'table', head:['الكلمة','لفظ 1','لفظ 2'],
  rows:[
   ['<span class="en">read</span>','<span class="en">/riːd</span>/ مضارع','<span class="en">/red/</span> ماضٍ'],
   ['<span class="en">lead</span>','<span class="en">/liːd/</span> يقود','<span class="en">/led/</span> رصاص'],
   ['<span class="en">live</span>','<span class="en">/lɪv/</span> يعيش','<span class="en">/laɪv/</span> حيّ/مباشر'],
   ['<span class="en">tear</span>','<span class="en">/tɪə/</span> دمعة','<span class="en">/teə/</span> يمزّق'],
   ['<span class="en">wind</span>','<span class="en">/wɪnd/</span> ريح','<span class="en">/waɪnd/</span> يلفّ'],
   ['<span class="en">close</span>','<span class="en">/kləʊz/</span> يغلق','<span class="en">/kləʊs/</span> قريب'],
   ['<span class="en">use</span>','<span class="en">/juːz/</span> يستعمل','<span class="en">/juːs/</span> استعمال']
  ]},
 {type:'h', ico:'💬', t:'Everyday English — قبول العروض ورفضها'},
 {type:'table', head:['الوظيفة','التعبير'],
  rows:[
   ['عرض','<span class="en">Would you like me to help? / Shall I give you a lift?</span>'],
   ['قبول','<span class="en">Yes, please. That\'s very kind of you. / I\'d appreciate that.</span>'],
   ['رفض مهذّب','<span class="en">No, thanks. I can manage. / That\'s very kind, but I\'m fine.</span>'],
   ['إصرار لطيف','<span class="en">Are you sure? It\'s no trouble at all.</span>']
  ]},
 {type:'drill', items:[
  '1) <span class="en">Neither the students nor the teacher ______ (be) ready.</span>',
  '2) <span class="en">Both Ali and Samer ______ (want) to volunteer.</span>',
  '3) صحّح: <span class="en">He is not only a doctor but also he teaches.</span>',
  '4) <span class="en">We are responsible ______ our environment.</span>',
  '5) ابدأ بـ <span class="en">Not only</span>: <span class="en">He volunteered and he donated.</span>'
 ], answers:'1) <span class="en">is</span> &nbsp;2) <span class="en">want</span> &nbsp;3) <span class="en">…but also a teacher.</span> &nbsp;4) <span class="en">for</span> &nbsp;5) <span class="en">Not only did he volunteer, but he also donated.</span>'}
],
quiz:[
 {q:'<span class="en">Neither the manager nor the workers ______ present.</span>', o:['<span class="en">was</span>','<span class="en">were</span>','<span class="en">is</span>','<span class="en">has been</span>'], a:1, sk:'grammar', e:'الفعل يطابق أقرب فاعل وهو <span class="en">workers</span>.'},
 {q:'<span class="en">Both teachers and students ______ invited.</span>', o:['<span class="en">was</span>','<span class="en">were</span>','<span class="en">is</span>','<span class="en">has</span>'], a:1, sk:'grammar', e:'<span class="en">both … and</span> دائماً جمع.'},
 {q:'أي جملة صحيحة التوازي؟', o:['<span class="en">He is not only kind but also he helps.</span>','<span class="en">He is not only kind but also helpful.</span>','<span class="en">He not only kind but also helpful.</span>','<span class="en">He is not only kind but helpful also is.</span>'], a:1, sk:'grammar', e:'صفة تقابل صفة.'},
 {q:'<span class="en">Not only ______ he apologise, but he also paid.</span>', o:['<span class="en">did</span>','<span class="en">does</span>','<span class="en">has</span>','<span class="en">was</span>'], a:0, sk:'grammar', e:'بعد <span class="en">Not only</span> في البداية نقلب الترتيب بالفعل المساعد.'},
 {q:'<span class="en">She is proud ______ her achievements.</span>', o:['<span class="en">for</span>','<span class="en">of</span>','<span class="en">at</span>','<span class="en">with</span>'], a:1, sk:'grammar', e:'<span class="en">proud of</span> تلازم ثابت.'},
 {q:'<span class="en">We are responsible ______ keeping our city clean.</span>', o:['<span class="en">of</span>','<span class="en">to</span>','<span class="en">for</span>','<span class="en">on</span>'], a:2, sk:'grammar', e:'<span class="en">responsible for</span>.'},
 {q:'<span class="en">read</span> في <span class="en">"I read it yesterday"</span> تُلفظ:', o:['<span class="en">/riːd/</span>','<span class="en">/red/</span>','<span class="en">/raɪd/</span>','<span class="en">/reɪd/</span>'], a:1, sk:'pron', e:'الماضي يُلفظ <span class="en">/red/</span> رغم الكتابة نفسها.'},
 {q:'المواطن الفاعل وفق النص:', o:['يكتفي بالانتقاد','يشارك ويتطوّع','يتجنّب المجتمع','يهتم بحقوقه فقط'], a:1, sk:'reading', e:'التمييز بين المواطن السلبي والفاعل محور النص.'},
 {q:'الردّ المهذّب لرفض عرض مساعدة:', o:['<span class="en">No!</span>','<span class="en">That\'s very kind, but I\'m fine.</span>','<span class="en">Leave me alone.</span>','<span class="en">Why do you ask?</span>'], a:1, sk:'func', e:'الشكر ثم الرفض اللطيف.'},
 {q:'<span class="en">Either you or I ______ responsible.</span>', o:['<span class="en">are</span>','<span class="en">am</span>','<span class="en">is</span>','<span class="en">be</span>'], a:1, sk:'grammar', e:'الفعل يطابق الأقرب <span class="en">I</span>.'},
 {q:'<span class="en">He is different ______ his brother.</span>', o:['<span class="en">of</span>','<span class="en">from</span>','<span class="en">than</span>','<span class="en">with</span>'], a:1, sk:'grammar', e:'<span class="en">different from</span> في الإنجليزية البريطانية.'},
 {q:'المواطنة الرقمية تشمل:', o:['نشر الأخبار بسرعة','التحقّق قبل النشر واحترام الآخرين','تجاهل القوانين','إخفاء الهوية دائماً'], a:1, sk:'reading', e:'التحقّق والاحترام أساس السلوك الرقمي المسؤول.'}
]
},

/* ===================== الوحدة 10 ===================== */
{ id:'l10', t:'Culture Shock', ta:'الوحدة 10 — صدمة الثقافة', tag:'الأفعال الناقصة',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Culture Shock</span> &nbsp;|&nbsp; المفردات: <span class="en">Idioms</span> &nbsp;|&nbsp; القواعد: <span class="en">Modals of Obligation</span> &nbsp;|&nbsp; النطق: نغمة السؤال &nbsp;|&nbsp; المحادثة: التعبير عن الدهشة.'},
 {type:'h', ico:'📖', t:'فكرة النص'},
 {type:'text', html:'«صدمة الثقافة» هي الارتباك الذي يصيب من ينتقل إلى مجتمع مختلف. تمرّ بأربع مراحل: <b>شهر العسل</b> (الإعجاب بكل جديد)، ثم <b>الأزمة</b> (الحنين والتوتر وصعوبة اللغة)، ثم <b>التكيّف</b> (فهم القواعد الاجتماعية الضمنية)، ثم <b>الاندماج</b> (الشعور بالانتماء دون التخلّي عن الهوية). ويقدّم النص علاجاً عملياً: تعلّم اللغة، وبناء صداقات محلّية، والحفاظ على الروتين الرياضي والغذائي، وطلب الدعم، وتذكّر أنّ الاختلاف ليس خطأً.'},
 {type:'h', ico:'🌍', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">custom / tradition</span>','عُرف / تقليد'], ['<span class="en">adapt / adjust</span>','يتكيّف'],
   ['<span class="en">homesick</span>','يشتاق لوطنه'], ['<span class="en">misunderstanding</span>','سوء فهم'],
   ['<span class="en">stereotype</span>','صورة نمطية'], ['<span class="en">tolerance</span>','تسامح'],
   ['<span class="en">diversity</span>','تنوّع'], ['<span class="en">etiquette</span>','آداب التعامل'],
   ['<span class="en">belong</span>','ينتمي'], ['<span class="en">integrate</span>','يندمج'],
   ['<span class="en">overcome</span>','يتغلّب على'], ['<span class="en">prejudice</span>','تحامل']
 ]},
 {type:'box', kind:'tip', t:'Idioms', html:'<span class="en">a fish out of water</span> غريب في غير بيئته &nbsp;|&nbsp; <span class="en">when in Rome, do as the Romans do</span> خالِ القومَ بما هم فيه &nbsp;|&nbsp; <span class="en">break the ice</span> يكسر الجفاء &nbsp;|&nbsp; <span class="en">feel at home</span> يشعر بالراحة &nbsp;|&nbsp; <span class="en">get used to</span> يعتاد على &nbsp;|&nbsp; <span class="en">see the world through someone\'s eyes</span> يفهم وجهة نظره.'},
 {type:'h', ico:'📐', t:'القواعد — Modals of Obligation'},
 {type:'table', head:['الفعل','الدلالة','مثال'],
  rows:[
   ['<span class="en">must</span>','واجب قوي من المتكلّم','<span class="en">You must respect local customs.</span>'],
   ['<span class="en">have to</span>','واجب من ظرف أو قانون خارجي','<span class="en">I have to renew my visa.</span>'],
   ['<span class="en">mustn\'t</span>','منع تام','<span class="en">You mustn\'t enter without permission.</span>'],
   ['<span class="en">don\'t have to / needn\'t</span>','لا ضرورة','<span class="en">You don\'t have to tip here.</span>'],
   ['<span class="en">should / ought to</span>','نصيحة','<span class="en">You should learn the language.</span>'],
   ['<span class="en">had to</span>','ماضي الواجب','<span class="en">I had to leave early.</span>'],
   ['<span class="en">will have to</span>','مستقبل الواجب','<span class="en">You will have to apply again.</span>']
  ]},
 {type:'box', kind:'rule', t:'الاستنتاج — Modals of Deduction', html:'<span class="en">must</span> استنتاج شبه مؤكّد: <span class="en">He must be tired.</span><br><span class="en">can\'t</span> استحالة: <span class="en">He can\'t be at home; his car is gone.</span><br><span class="en">may / might / could</span> احتمال: <span class="en">She might be late.</span><br>للماضي: <span class="en">must have + V3 / can\'t have + V3 / might have + V3</span>.'},
 {type:'box', kind:'warn', t:'ثلاثة فروق امتحانية ⚠️', html:'1) <span class="en">mustn\'t</span> (ممنوع) ≠ <span class="en">don\'t have to</span> (غير لازم).<br>2) <span class="en">should have + V3</span> = كان ينبغي ولم يحدث: <span class="en">You should have told me.</span><br>3) <span class="en">needn\'t have + V3</span> = فعلتَه ولم يكن لازماً، مقابل <span class="en">didn\'t need to</span> = لم يكن لازماً فلم تفعله.'},
 {type:'h', ico:'🗣️', t:'النطق — نغمة السؤال'},
 {type:'text', html:'الأسئلة التي تُجاب بـ <span class="en">yes/no</span> تأخذ نغمة <b>صاعدة</b> ↗:<br><span class="en-blk">Are you ready? ↗ / Did you enjoy it? ↗</span><br>وأسئلة <span class="en">Wh-</span> تأخذ نغمة <b>هابطة</b> ↘:<br><span class="en-blk">Where are you from? ↘ / Why did he leave? ↘</span><br>أمّا سؤال الاختيار فيصعد ثم يهبط: <span class="en">Would you like tea ↗ or coffee? ↘</span>'},
 {type:'h', ico:'💬', t:'Everyday English — الدهشة'},
 {type:'vocab', items:[
   ['<span class="en">Really? / Is that so?</span>','حقاً؟'],
   ['<span class="en">You must be joking!</span>','لا بدّ أنّك تمزح!'],
   ['<span class="en">I can\'t believe it!</span>','لا أستطيع تصديق ذلك!'],
   ['<span class="en">What a surprise!</span>','يا للمفاجأة!'],
   ['<span class="en">That\'s amazing!</span>','مذهل!'],
   ['<span class="en">I had no idea.</span>','لم تكن لديّ أي فكرة.'],
   ['<span class="en">Are you serious?</span>','أنت جادّ؟']
 ]},
 {type:'drill', items:[
  '1) <span class="en">You ______ smoke here; it\'s a hospital.</span>',
  '2) <span class="en">You ______ pay; the entry is free.</span>',
  '3) <span class="en">He ______ (be) very tired; he worked all night.</span>',
  '4) <span class="en">You ______ (tell) me earlier!</span> (لوم على الماضي)',
  '5) ما نغمة <span class="en">Where do you live?</span>'
 ], answers:'1) <span class="en">mustn\'t</span> &nbsp;2) <span class="en">don\'t have to</span> &nbsp;3) <span class="en">must be</span> &nbsp;4) <span class="en">should have told</span> &nbsp;5) هابطة ↘'}
],
quiz:[
 {q:'<span class="en">You ______ take photos inside the museum. It is forbidden.</span>', o:['<span class="en">don\'t have to</span>','<span class="en">mustn\'t</span>','<span class="en">needn\'t</span>','<span class="en">shouldn\'t have</span>'], a:1, sk:'grammar', e:'المنع التام ← <span class="en">mustn\'t</span>.'},
 {q:'<span class="en">The lights are off — they ______ be out.</span>', o:['<span class="en">must</span>','<span class="en">mustn\'t</span>','<span class="en">can</span>','<span class="en">should</span>'], a:0, sk:'grammar', e:'استنتاج شبه مؤكّد ← <span class="en">must</span>.'},
 {q:'<span class="en">You ______ me; I would have helped.</span>', o:['<span class="en">should tell</span>','<span class="en">should have told</span>','<span class="en">must tell</span>','<span class="en">had to tell</span>'], a:1, sk:'grammar', e:'لوم على ماضٍ لم يحدث ← <span class="en">should have + V3</span>.'},
 {q:'<span class="en">He can\'t have been at school; it was a holiday.</span> تعني:', o:['من المؤكّد أنه كان','من المستحيل أنه كان','ربما كان','كان يجب أن يكون'], a:1, sk:'grammar', e:'<span class="en">can\'t have + V3</span> استحالة في الماضي.'},
 {q:'<span class="en">a fish out of water</span> تعني:', o:['سبّاح ماهر','غريب في غير بيئته','شخص هادئ','صديق مقرّب'], a:1, sk:'vocab', e:'يشعر بعدم الانتماء للمكان.'},
 {q:'<span class="en">He told a joke to ______ .</span>', o:['<span class="en">break the ice</span>','<span class="en">break a leg</span>','<span class="en">break down</span>','<span class="en">break up</span>'], a:0, sk:'vocab', e:'<span class="en">break the ice</span> = يكسر الجفاء.'},
 {q:'المرحلة الأولى من صدمة الثقافة:', o:['الأزمة','شهر العسل','التكيّف','الاندماج'], a:1, sk:'reading', e:'تبدأ بالإعجاب والانتعاش ثم تأتي الأزمة.'},
 {q:'<span class="en">Are you ready?</span> نغمتها:', o:['صاعدة ↗','هابطة ↘','مستوية','صاعدة ثم هابطة'], a:0, sk:'pron', e:'أسئلة <span class="en">yes/no</span> نغمتها صاعدة.'},
 {q:'للتعبير عن الدهشة نقول:', o:['<span class="en">Never mind.</span>','<span class="en">You must be joking!</span>','<span class="en">It depends.</span>','<span class="en">As usual.</span>'], a:1, sk:'func', e:'تعبير دهشة قوي شائع.'},
 {q:'<span class="en">I ______ get used to the new timetable.</span>', o:['<span class="en">must to</span>','<span class="en">had to</span>','<span class="en">have must</span>','<span class="en">musted</span>'], a:1, sk:'grammar', e:'ماضي الواجب ← <span class="en">had to</span>.'},
 {q:'<span class="en">You needn\'t have bought bread.</span> تعني:', o:['لم تشترِ الخبز','اشتريتَه ولم يكن لازماً','كان يجب أن تشتريه','ستشتريه لاحقاً'], a:1, sk:'grammar', e:'<span class="en">needn\'t have + V3</span>: وقع الفعل بلا حاجة.'},
 {q:'علاج صدمة الثقافة وفق النص يشمل:', o:['العزلة','تعلّم اللغة وبناء صداقات','رفض العادات المحلية','العودة فوراً'], a:1, sk:'reading', e:'اللغة والتواصل الاجتماعي أهم عاملي التكيّف.'}
]
},

/* ===================== الوحدة 11 ===================== */
{ id:'l11', t:'Epics', ta:'الوحدة 11 — الملاحم', tag:'الكلام المنقول',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Epics</span> &nbsp;|&nbsp; المفردات: <span class="en">Literary Terms</span> &nbsp;|&nbsp; القواعد: <span class="en">Reported Speech</span> &nbsp;|&nbsp; النطق: الصيغ القوية والضعيفة &nbsp;|&nbsp; المحادثة: اللباقة في الحديث.'},
 {type:'h', ico:'📖', t:'فكرة النص — الملاحم'},
 {type:'text', html:'الملحمة قصيدة سردية طويلة تحكي <b>مغامرات بطل خارق</b> تتجسّد فيه قيم أمّته. خصائصها: بطل نبيل الأصل، ومهمّة محفوفة بالمخاطر، ورحلة واسعة الجغرافيا، وتدخّل قوى عُلويّة، وأسلوب جليل، وبداية <b>في وسط الحدث</b> (<span class="en">in medias res</span>)، ودعاء استهلالي بالإلهام. وأشهر الملاحم: <b>جلجامش</b> من بلاد الرافدين وهي أقدم نصّ ملحمي معروف، و<span class="en">The Iliad</span> و<span class="en">The Odyssey</span> لهوميروس، و<span class="en">The Aeneid</span> لفرجيل، و<span class="en">Beowulf</span> في الإنجليزية القديمة، و<span class="en">Paradise Lost</span> لـ <span class="en">John Milton</span>. والملحمة ليست تسلية؛ بل <b>ذاكرة جماعية</b> تحفظ تاريخ الشعب وأخلاقه.'},
 {type:'h', ico:'🏛️', t:'المصطلحات الأدبية'},
 {type:'vocab', items:[
   ['<span class="en">epic</span>','ملحمة'], ['<span class="en">hero / heroine</span>','بطل / بطلة'],
   ['<span class="en">quest</span>','مهمّة / رحلة بحث'], ['<span class="en">myth / mythology</span>','أسطورة / علم الأساطير'],
   ['<span class="en">legend</span>','أسطورة شعبية'], ['<span class="en">fate / destiny</span>','قَدَر'],
   ['<span class="en">glory</span>','مجد'], ['<span class="en">courage / bravery</span>','شجاعة'],
   ['<span class="en">loyalty</span>','وفاء'], ['<span class="en">sacrifice</span>','تضحية'],
   ['<span class="en">immortality</span>','خلود'], ['<span class="en">supernatural</span>','خارق للطبيعة'],
   ['<span class="en">in medias res</span>','البدء من وسط الحدث'], ['<span class="en">invocation</span>','دعاء استهلالي بالإلهام']
 ]},
 {type:'h', ico:'📐', t:'القواعد — Reported Speech'},
 {type:'table', head:['المباشر','المنقول'],
  rows:[
   ['<span class="en">present simple</span>','<span class="en">past simple</span>'],
   ['<span class="en">present continuous</span>','<span class="en">past continuous</span>'],
   ['<span class="en">past simple</span>','<span class="en">past perfect</span>'],
   ['<span class="en">present perfect</span>','<span class="en">past perfect</span>'],
   ['<span class="en">will</span>','<span class="en">would</span>'],
   ['<span class="en">can</span>','<span class="en">could</span>'],
   ['<span class="en">may</span>','<span class="en">might</span>'],
   ['<span class="en">must</span>','<span class="en">had to</span>']
  ]},
 {type:'table', head:['ظرف مباشر','ظرف منقول'],
  rows:[
   ['<span class="en">now</span>','<span class="en">then</span>'],
   ['<span class="en">today</span>','<span class="en">that day</span>'],
   ['<span class="en">tomorrow</span>','<span class="en">the next day / the following day</span>'],
   ['<span class="en">yesterday</span>','<span class="en">the day before / the previous day</span>'],
   ['<span class="en">last week</span>','<span class="en">the week before</span>'],
   ['<span class="en">next year</span>','<span class="en">the following year</span>'],
   ['<span class="en">here</span>','<span class="en">there</span>'],
   ['<span class="en">this / these</span>','<span class="en">that / those</span>'],
   ['<span class="en">ago</span>','<span class="en">before</span>']
  ]},
 {type:'box', kind:'rule', t:'الأسئلة المنقولة', html:'سؤال <span class="en">Wh-</span>: <span class="en">He asked where I lived.</span> (ترتيب خبري بلا <span class="en">do</span>)<br>سؤال <span class="en">yes/no</span>: نستعمل <span class="en">if / whether</span>: <span class="en">She asked if I had finished.</span>'},
 {type:'box', kind:'rule', t:'الأوامر والطلبات', html:'الأمر: <span class="en">tell / order + مفعول + to + مصدر</span>: <span class="en">He told me to wait.</span><br>النهي: <span class="en">not to + مصدر</span>: <span class="en">He told me not to touch it.</span><br>الطلب: <span class="en">ask + مفعول + to</span>: <span class="en">She asked me to help her.</span><br>النصيحة: <span class="en">advise + مفعول + to</span> &nbsp;|&nbsp; الاقتراح: <span class="en">suggest + V-ing</span> أو <span class="en">suggest that + فاعل + مصدر</span>.'},
 {type:'box', kind:'warn', t:'لا يتراجع الزمن إذا ⚠️', html:'• كان المنقول <b>حقيقة ثابتة</b>: <span class="en">He said that water boils at 100°C.</span><br>• كان فعل القول في <b>المضارع</b>: <span class="en">He says he is busy.</span><br>• كان الزمن <b>ماضياً تاماً</b> أصلاً فلا يتراجع أكثر.<br>• الفرق بين <span class="en">say</span> (لا تأخذ مفعولاً مباشراً) و<span class="en">tell</span> (تأخذه): <span class="en">He said to me / He told me</span>.'},
 {type:'h', ico:'🗣️', t:'النطق — الصيغ القوية والضعيفة'},
 {type:'text', html:'الأفعال المساعدة وحروف الجر تُلفظ <b>ضعيفة</b> في الكلام العادي، و<b>قوية</b> عند التوكيد أو في نهاية الجملة:<br><span class="en-blk">can: /kən/ ضعيفة ← /kæn/ قوية<br>was: /wəz/ ← /wɒz/<br>and: /ən/ ← /ænd/<br>to: /tə/ ← /tuː/<br>from: /frəm/ ← /frɒm/</span><br>مثال: <span class="en">"Yes, I CAN." /kæn/</span> مقابل <span class="en">"I can swim." /kən/</span>'},
 {type:'h', ico:'💬', t:'Everyday English — اللباقة'},
 {type:'vocab', items:[
   ['<span class="en">I\'m afraid I have to disagree.</span>','أخشى أنني مضطر للاختلاف'],
   ['<span class="en">With respect, I see it differently.</span>','مع احترامي، أرى الأمر مختلفاً'],
   ['<span class="en">That\'s an interesting point, however…</span>','نقطة مثيرة، لكن…'],
   ['<span class="en">Perhaps it would be better to…</span>','ربّما الأفضل أن…'],
   ['<span class="en">I don\'t mean to interrupt, but…</span>','لا أقصد المقاطعة، لكن…'],
   ['<span class="en">If you don\'t mind my saying so…</span>','إن سمحتَ لي بالقول…']
 ]},
 {type:'drill', items:[
  '1) انقل: <span class="en">"I am working on the data," he said.</span>',
  '2) انقل: <span class="en">"Where do you live?" she asked.</span>',
  '3) انقل: <span class="en">"Don\'t touch the machine," the teacher said.</span>',
  '4) انقل: <span class="en">"Have you finished?" he asked.</span>',
  '5) انقل: <span class="en">"Water freezes at 0°C," the teacher said.</span>'
 ], answers:'1) <span class="en">He said (that) he was working on the data.</span> &nbsp;2) <span class="en">She asked where I lived.</span> &nbsp;3) <span class="en">The teacher told us not to touch the machine.</span> &nbsp;4) <span class="en">He asked if I had finished.</span> &nbsp;5) <span class="en">The teacher said that water freezes at 0°C.</span> (حقيقة ثابتة)'}
],
quiz:[
 {q:'انقل: <span class="en">"I will call you," he said.</span>', o:['<span class="en">He said he will call me.</span>','<span class="en">He said he would call me.</span>','<span class="en">He said he calls me.</span>','<span class="en">He said he had called me.</span>'], a:1, sk:'grammar', e:'<span class="en">will → would</span>.'},
 {q:'انقل: <span class="en">"Did you see the report?" she asked.</span>', o:['<span class="en">She asked did I see the report.</span>','<span class="en">She asked if I had seen the report.</span>','<span class="en">She asked if did I see the report.</span>','<span class="en">She asked I saw the report.</span>'], a:1, sk:'grammar', e:'سؤال <span class="en">yes/no</span> ← <span class="en">if</span> + تراجع الزمن.'},
 {q:'انقل: <span class="en">"Open the file," he told me.</span>', o:['<span class="en">He told me open the file.</span>','<span class="en">He told me to open the file.</span>','<span class="en">He said me to open the file.</span>','<span class="en">He told to me open the file.</span>'], a:1, sk:'grammar', e:'الأمر ← <span class="en">tell + مفعول + to + مصدر</span>.'},
 {q:'أي جملة لا يتراجع فيها الزمن؟', o:['<span class="en">He said he was tired.</span>','<span class="en">He said that light travels faster than sound.</span>','<span class="en">He said he had finished.</span>','<span class="en">He said he would come.</span>'], a:1, sk:'grammar', e:'الحقيقة العلمية الثابتة تبقى بالمضارع.'},
 {q:'<span class="en">tomorrow</span> في الكلام المنقول تصبح:', o:['<span class="en">that day</span>','<span class="en">the next day</span>','<span class="en">the day before</span>','<span class="en">then</span>'], a:1, sk:'grammar', e:'<span class="en">tomorrow → the next/following day</span>.'},
 {q:'الفرق بين <span class="en">say</span> و<span class="en">tell</span>:', o:['لا فرق','<span class="en">tell</span> تأخذ مفعولاً مباشراً','<span class="en">say</span> تأخذ مفعولاً مباشراً','كلتاهما بلا مفعول'], a:1, sk:'grammar', e:'<span class="en">tell me</span> صحيحة، و<span class="en">say me</span> خطأ.'},
 {q:'<span class="en">can</span> تُلفظ <span class="en">/kæn/</span> (قوية) عندما:', o:['تكون في وسط الجملة','تكون مؤكّدة أو في نهاية الجملة','تكون منفية','تكون مع <span class="en">he</span>'], a:1, sk:'pron', e:'التوكيد أو موقع النهاية يُقوّي الصيغة.'},
 {q:'للاعتراض بلباقة نقول:', o:['<span class="en">You are wrong.</span>','<span class="en">That\'s nonsense.</span>','<span class="en">With respect, I see it differently.</span>','<span class="en">No way.</span>'], a:2, sk:'func', e:'تلطيف الاعتراض سمة الحديث اللبق.'},
 {q:'<span class="en">in medias res</span> تعني أنّ الملحمة تبدأ:', o:['من البداية الزمنية','من وسط الحدث','من النهاية','بمقدّمة نقدية'], a:1, sk:'vocab',
  e:'ثم تعود إلى ما سبق بالاسترجاع.'},
 {q:'أقدم نصّ ملحمي معروف:', o:['<span class="en">The Iliad</span>','<span class="en">Gilgamesh</span>','<span class="en">Beowulf</span>','<span class="en">Paradise Lost</span>'], a:1, sk:'reading',
  e:'ملحمة جلجامش من بلاد الرافدين.'},
 {q:'<span class="en">Paradise Lost</span> كتبها:', o:['<span class="en">Homer</span>','<span class="en">Virgil</span>','<span class="en">John Milton</span>','<span class="en">Shakespeare</span>'], a:2, sk:'reading',
  e:'ملحمة جون ميلتون في القرن السابع عشر.'},
 {q:'<span class="en">quest</span> تعني:', o:['سؤال في امتحان','مهمّة أو رحلة بحث','قصيدة قصيرة','خاتمة'], a:1, sk:'vocab',
  e:'الرحلة التي يخوضها البطل لتحقيق غاية.'},
 {q:'وظيفة الملحمة وفق النص:', o:['التسلية فقط','حفظ ذاكرة الشعب وقيمه','تعليم القواعد','نقد الشعراء'], a:1, sk:'reading',
  e:'الملحمة ذاكرة جماعية تحمل أخلاق الأمّة.'}
]
},

/* ===================== الوحدة 12 ===================== */
{ id:'l12', t:'Masterpieces', ta:'الوحدة 12 — روائع فنية', tag:'القلب النحوي',
blocks:[
 {type:'box', kind:'note', t:'محاور الوحدة', html:'القراءة: <span class="en">Masterpieces</span> &nbsp;|&nbsp; المفردات: أفعال بالمعنى الحرفي والمجازي &nbsp;|&nbsp; القواعد: <span class="en">Inversion</span> &nbsp;|&nbsp; النطق: ربط الأصوات &nbsp;|&nbsp; المحادثة: طلب الإذن ومنحه ورفضه.'},
 {type:'h', ico:'📖', t:'فكرة النص — الروائع الفنية'},
 {type:'text', html:'ما الذي يجعل عملاً فنياً <b>تحفة</b> (<span class="en">masterpiece</span>)؟ يرى النص أنّ ثلاثة شروط تتضافر: <b>الإتقان التقني</b>، و<b>الأصالة</b> التي تفتح طريقاً جديداً، و<b>الخلود الإنساني</b> أي قدرة العمل على مخاطبة أجيال متعاقبة. ويعرض النص أمثلة من الفنون: الموناليزا لـ <span class="en">Leonardo da Vinci</span> بغموض ملامحها، وسقف كنيسة <span class="en">Sistine</span> لـ <span class="en">Michelangelo</span>، و<span class="en">Starry Night</span> لـ <span class="en">Van Gogh</span>، وفي الأدب أعمال شكسبير، وفي الموسيقى سيمفونيات <span class="en">Beethoven</span>. ويلفت النص إلى أنّ كثيراً من هذه الأعمال لم تُقدَّر في حياة أصحابها، وأنّ <b>الحفاظ على التراث الفني</b> مسؤولية مشتركة، ولا سيّما في البلدان التي تملك إرثاً غنيّاً كسورية بتدمر وقلعة الحصن والمدن القديمة.'},
 {type:'h', ico:'🎨', t:'المفردات'},
 {type:'vocab', items:[
   ['<span class="en">masterpiece</span>','تحفة فنية'], ['<span class="en">artist / artwork</span>','فنّان / عمل فني'],
   ['<span class="en">sculpture</span>','منحوتة'], ['<span class="en">portrait</span>','صورة شخصية'],
   ['<span class="en">landscape</span>','منظر طبيعي'], ['<span class="en">exhibition / gallery</span>','معرض / صالة عرض'],
   ['<span class="en">heritage</span>','تراث'], ['<span class="en">preserve / restore</span>','يحفظ / يرمّم'],
   ['<span class="en">originality</span>','أصالة'], ['<span class="en">genius</span>','عبقرية'],
   ['<span class="en">appreciate</span>','يُقدّر'], ['<span class="en">timeless</span>','خالد لا يبلى']
 ]},
 {type:'h', ico:'🔀', t:'أفعال بين الحرفي والمجازي'},
 {type:'table', head:['الفعل','المعنى الحرفي','المعنى المجازي'],
  rows:[
   ['<span class="en">paint</span>','يرسم بالألوان','<span class="en">paint a picture of the situation</span> يصف الموقف'],
   ['<span class="en">draw</span>','يرسم بالقلم','<span class="en">draw a conclusion</span> يستنتج'],
   ['<span class="en">capture</span>','يأسر','<span class="en">capture the moment</span> يخلّد اللحظة'],
   ['<span class="en">touch</span>','يلمس','<span class="en">a touching story</span> قصة مؤثّرة'],
   ['<span class="en">sketch</span>','يخطّط رسماً','<span class="en">sketch an idea</span> يعرض فكرة بإيجاز'],
   ['<span class="en">frame</span>','يُبرطش بإطار','<span class="en">frame a question</span> يصوغ سؤالاً'],
   ['<span class="en">illuminate</span>','يُضيء','<span class="en">illuminate a problem</span> يُجلّي مشكلة']
  ]},
 {type:'h', ico:'📐', t:'القواعد — Inversion'},
 {type:'box', kind:'rule', t:'ما هو القلب؟', html:'تقديم الفعل المساعد على الفاعل بعد كلمات ذات دلالة نفي أو حصر أو توكيد، وهو أسلوب أدبي رسمي يرفع مستوى الكتابة.'},
 {type:'table', head:['البادئة','المثال'],
  rows:[
   ['<span class="en">Never / Rarely / Seldom</span>','<span class="en">Never have I seen such progress.</span>'],
   ['<span class="en">Hardly / Scarcely … when</span>','<span class="en">Hardly had he logged in when the system crashed.</span>'],
   ['<span class="en">No sooner … than</span>','<span class="en">No sooner had she posted it than it spread.</span>'],
   ['<span class="en">Not only … but also</span>','<span class="en">Not only did he hack the site, but he also leaked data.</span>'],
   ['<span class="en">Little / Nowhere</span>','<span class="en">Little did they know the risk.</span>'],
   ['<span class="en">Only after / Only when</span>','<span class="en">Only after checking the source did she share it.</span>'],
   ['<span class="en">Under no circumstances</span>','<span class="en">Under no circumstances should you share your password.</span>'],
   ['<span class="en">So / Such</span>','<span class="en">So fast was the spread that nobody could stop it.</span>'],
   ['شرطي','<span class="en">Had I known, I would have warned you.</span>']
  ]},
 {type:'box', kind:'warn', t:'قواعد دقيقة ⚠️', html:'• <span class="en">Hardly / No sooner</span> تلازم الماضي التام: <span class="en">Hardly had … when</span> و<span class="en">No sooner had … than</span>.<br>• إذا لم يوجد فعل مساعد نستعير <span class="en">do / does / did</span>: <span class="en">Never did I imagine…</span><br>• لا نقلب في الأسئلة المنقولة ولا في الجمل العادية بلا بادئة قلب.'},
 {type:'h', ico:'🗣️', t:'النطق — ربط الأصوات'},
 {type:'text', html:'في الكلام المتصل تلتحم نهاية الكلمة ببداية التالية:<br><b>1) ربط ساكن بعلّة:</b> <span class="en-blk">turn it off → tur-ni-toff &nbsp;|&nbsp; log in → lo-gin</span><br><b>2) إدخال /j/:</b> <span class="en-blk">my own → my(y)own</span><br><b>3) إدخال /w/:</b> <span class="en-blk">go out → go(w)out</span><br><b>4) إدخال /r/ (بريطاني):</b> <span class="en-blk">far away → far(r)away</span>'},
 {type:'h', ico:'💬', t:'Everyday English — الإذن'},
 {type:'table', head:['الوظيفة','التعبير'],
  rows:[
   ['طلب الإذن','<span class="en">May I use your laptop? / Could I borrow your charger?</span>'],
   ['طلب رسمي','<span class="en">Would it be all right if I used your account?</span>'],
   ['غير رسمي','<span class="en">Is it OK if I log in here?</span>'],
   ['المنح','<span class="en">Yes, of course. / By all means. / Go ahead.</span>'],
   ['الرفض','<span class="en">I\'m afraid you can\'t. / Sorry, that\'s not allowed.</span>'],
   ['الرفض بتبرير','<span class="en">I\'d rather you didn\'t — it has private data.</span>']
  ]},
 {type:'box', kind:'note', t:'ختام القسم', html:'أتممتَ وحدات الفرع العلمي الاثنتي عشرة. انتقل الآن إلى قسم <b>كتابة المواضيع</b> لإتقان التعبير، ثم إلى <b>نماذج الامتحانات</b> لاختبار نفسك على نمط أسئلة البكالوريا.'},
 {type:'drill', items:[
  '1) ابدأ بـ <span class="en">Never</span>: <span class="en">I have never seen such a fast network.</span>',
  '2) ابدأ بـ <span class="en">No sooner</span>: <span class="en">He had hardly arrived when the power cut.</span>',
  '3) <span class="en">Under no circumstances ______ you share your password.</span>',
  '4) <span class="en">______ (Little) did they know the website was fake.</span>',
  '5) اطلب الإذن باستعمال حاسوب صديقك بصيغة رسمية.'
 ], answers:'1) <span class="en">Never have I seen such a fast network.</span> &nbsp;2) <span class="en">No sooner had he arrived than the power cut.</span> &nbsp;3) <span class="en">should</span> &nbsp;4) <span class="en">Little</span> &nbsp;5) <span class="en">Would it be all right if I used your computer?</span>'}
],
quiz:[
 {q:'<span class="en">Never ______ such a thing before.</span>', o:['<span class="en">I have seen</span>','<span class="en">have I seen</span>','<span class="en">I saw</span>','<span class="en">did I saw</span>'], a:1, sk:'grammar', e:'بعد <span class="en">Never</span> في البداية نقلب الفاعل والمساعد.'},
 {q:'<span class="en">No sooner had he logged in ______ the system crashed.</span>', o:['<span class="en">when</span>','<span class="en">than</span>','<span class="en">that</span>','<span class="en">then</span>'], a:1, sk:'grammar', e:'<span class="en">No sooner … than</span> و<span class="en">Hardly … when</span>.'},
 {q:'<span class="en">Hardly ______ the file when the power went off.</span>', o:['<span class="en">he had opened</span>','<span class="en">had he opened</span>','<span class="en">did he open</span>','<span class="en">he opened</span>'], a:1, sk:'grammar', e:'<span class="en">Hardly</span> + ماضٍ تام مقلوب.'},
 {q:'<span class="en">Under no circumstances ______ reveal your password.</span>', o:['<span class="en">you should</span>','<span class="en">should you</span>','<span class="en">you have to</span>','<span class="en">do you</span>'], a:1, sk:'grammar', e:'عبارة نفي في البداية ← قلب.'},
 {q:'<span class="en">Only after checking the source ______ she share the news.</span>', o:['<span class="en">did</span>','<span class="en">does</span>','<span class="en">has</span>','<span class="en">was</span>'], a:0, sk:'grammar', e:'نستعير <span class="en">did</span> لعدم وجود مساعد.'},
 {q:'منح الإذن بصيغة رسمية:', o:['<span class="en">Whatever.</span>','<span class="en">By all means.</span>','<span class="en">No way.</span>','<span class="en">I\'d rather not.</span>'], a:1, sk:'func', e:'<span class="en">By all means</span> = بكل تأكيد.'},
 {q:'<span class="en">turn it off</span> في الكلام المتصل تُربط هكذا:', o:['<span class="en">turn-it-off</span> بوقفات','<span class="en">tur-ni-toff</span>','<span class="en">turni toff</span> مع حذف t','لا تُربط'], a:1, sk:'pron', e:'ربط الساكن بالعلّة التالية.'},
 {q:'<span class="en">draw a conclusion</span> تعني:', o:['يرسم خطاً','يستنتج','يؤجّل القرار','يُلخّص النص'], a:1, sk:'vocab',
  e:'استعمال مجازي لفعل <span class="en">draw</span>.'},
 {q:'<span class="en">timeless</span> تعني:', o:['بلا وقت محدّد للعرض','خالد لا تبلى قيمته','قديم ومهجور','سريع التنفيذ'], a:1, sk:'vocab',
  e:'يحتفظ بقيمته عبر الأزمنة.'},
 {q:'وفق النص، من شروط التحفة الفنية:', o:['الحجم الكبير','الأصالة والإتقان والخلود الإنساني','ثمنها المرتفع','شهرة صاحبها في حياته'], a:1, sk:'reading',
  e:'ثلاثة شروط متضافرة ذكرها النص.'},
 {q:'<span class="en">Starry Night</span> من أعمال:', o:['<span class="en">Leonardo da Vinci</span>','<span class="en">Michelangelo</span>','<span class="en">Van Gogh</span>','<span class="en">Beethoven</span>'], a:2, sk:'reading',
  e:'لوحة فان غوخ الشهيرة.'},
 {q:'يُشير النص إلى أنّ كثيراً من الروائع:', o:['حقّقت الثراء لأصحابها فوراً','لم تُقدَّر في حياة أصحابها','صُنعت بالآلات','فُقدت كلّها'], a:1, sk:'reading',
  e:'التقدير جاء متأخّراً في حالات كثيرة.'}
]
}

];