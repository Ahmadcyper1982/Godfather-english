/* ===== قسم التأسيس ورفع المستوى — 8 وحدات ===== */
var DATA_FOUNDATION = [

/* ========================= الوحدة 1 ========================= */
{
id:'f1', t:'Getting Started', ta:'الوحدة 1 — بداية الانطلاق', tag:'الحروف والتحية',
blocks:[
 {type:'text', t:'ماذا ستتعلم في هذه الوحدة؟', html:
  '<ul class="clean"><li>نطق الحروف الإنكليزية الستة والعشرين وأصواتها الحقيقية.</li>'+
  '<li>الحروف التي تُكتب ولا تُلفظ، والحروف التي تجتمع لتعطي صوتاً جديداً.</li>'+
  '<li>تحية الآخرين والتعريف بنفسك في أول لقاء.</li>'+
  '<li>عبارات صفّية ويومية ستحتاجها كل يوم.</li></ul>'},

 {type:'h', ico:'🔤', t:'الأبجدية الإنكليزية'},
 {type:'text', html:
  '<p>اللغة الإنكليزية تتكوّن من <b>26 حرفاً</b>. لكل حرف <b>اسم</b> (كيف ننطقه وحده) و<b>صوت</b> (كيف يُنطق داخل الكلمة). الخلط بين الاثنين هو أول سبب للأخطاء عند المبتدئين.</p>'+
  '<div class="en-blk" style="font-size:18px;letter-spacing:2px;text-align:center">A B C D E F G H I J K L M<br>N O P Q R S T U V W X Y Z</div>'},

 {type:'table', t:'حروف العلّة والحروف الساكنة', head:['النوع','الحروف','الوظيفة'], rows:[
  ['<b>حروف العلّة</b><br>Vowels','<span class="en">A · E · I · O · U</span>','تُنطق بحرية دون إغلاق مجرى الهواء، وهي أساس كل مقطع صوتي.'],
  ['<b>الحروف الساكنة</b><br>Consonants','<span class="en">B C D F G H J K L M N P Q R S T V W X Y Z</span>','تحتاج حرف علّة بجانبها لتشكيل مقطع كامل.']
 ]},

 {type:'table', t:'حروف يخطئ بنطقها المبتدئون', head:['الحرف','الصوت','أمثلة','القاعدة'], rows:[
  ['<span class="en">C</span>','<span class="en">/k/</span> أو <span class="en">/s/</span>','<span class="en">cat · city</span>','تُنطق «س» فقط قبل <span class="en">e, i, y</span>، وغير ذلك «ك».'],
  ['<span class="en">G</span>','<span class="en">/g/</span> أو <span class="en">/dʒ/</span>','<span class="en">go · giant</span>','تُنطق «ج» غالباً قبل <span class="en">e, i, y</span>.'],
  ['<span class="en">J</span>','<span class="en">/dʒ/</span>','<span class="en">jam · joke</span>','دائماً مثل الجيم المصرية.'],
  ['<span class="en">W</span>','<span class="en">/w/</span>','<span class="en">we · water</span>','شفاه مستديرة كأنك تنفخ، وليست «و» ساكنة.'],
  ['<span class="en">H</span>','زفير خفيف','<span class="en">hello · house</span>','أحياناً لا تُنطق: <span class="en">hour, honest</span>.']
 ]},

 {type:'h', ico:'🔇', t:'أصوات صعبة وحروف لا تُنطق'},
 {type:'table', t:'حروف مجتمعة بصوت واحد', head:['الحروف','الصوت','أمثلة'], rows:[
  ['<span class="en">th</span>','ث / ذ','<span class="en">think · this</span>'],
  ['<span class="en">sh</span>','ش','<span class="en">she · shop</span>'],
  ['<span class="en">ch</span>','تش','<span class="en">chair · teacher</span>'],
  ['<span class="en">ph</span>','ف','<span class="en">phone · photo</span>'],
  ['<span class="en">ng</span>','نغ (أنفي)','<span class="en">sing · morning</span>'],
  ['<span class="en">tion</span>','شن','<span class="en">station · action</span>'],
  ['<span class="en">igh</span>','آي','<span class="en">light · night</span>']
 ]},
 {type:'box', kind:'warn', t:'🤫 حروف تُكتب ولا تُلفظ', html:
  '<ul class="clean" style="margin:0">'+
  '<li><span class="en">k</span> لا تُنطق قبل <span class="en">n</span>: <span class="en">know, knife, knee</span></li>'+
  '<li><span class="en">w</span> لا تُنطق قبل <span class="en">r</span>: <span class="en">write, wrong, wrist</span></li>'+
  '<li><span class="en">b</span> لا تُنطق بعد <span class="en">m</span>: <span class="en">climb, comb, thumb</span></li>'+
  '<li><span class="en">e</span> الأخيرة لا تُنطق لكنها تُطيل الحرف قبلها: <span class="en">make, like, home</span></li>'+
  '<li><span class="en">h</span> تختفي أحياناً: <span class="en">hour, honest</span></li></ul>'},
 {type:'box', kind:'tip', t:'💡 نصيحة الأستاذ', html:
  'لا تحفظ هذه القواعد دفعة واحدة. استمع للكلمة من قاموس ناطق وكرّرها بصوت عالٍ ثلاث مرات. أذنك ستتذكّر أسرع من عقلك.'},

 {type:'h', ico:'👋', t:'التحية والتعارف'},
 {type:'table', t:'عبارات التحية', head:['English','الترجمة','متى نستخدمها'], rows:[
  ['<span class="en">Hello / Hi</span>','مرحباً / أهلاً','في أي وقت، <span class="en">Hi</span> أقل رسمية.'],
  ['<span class="en">Good morning</span>','صباح الخير','من الفجر حتى الظهر.'],
  ['<span class="en">Good afternoon</span>','مساء الخير','من الظهر حتى الغروب.'],
  ['<span class="en">Good evening</span>','مساء الخير','بعد الغروب عند اللقاء.'],
  ['<span class="en">Good night</span>','تصبح على خير','عند الوداع ليلاً فقط، وليس عند اللقاء.'],
  ['<span class="en">How are you?</span>','كيف حالك؟','بعد التحية مباشرة.'],
  ['<span class="en">Nice to meet you</span>','سعيد بلقائك','عند أول لقاء فقط.'],
  ['<span class="en">See you later / Bye</span>','أراك لاحقاً / وداعاً','عند الانصراف.']
 ], note:'<b>فخّ شائع:</b> <span class="en">Good night</span> ليست تحية لقاء بل وداع. عند اللقاء ليلاً نقول <span class="en">Good evening</span>.'},

 {type:'dialog', t:'أول لقاء', lines:[
  ['Sara','Hello! What\'s your name?','مرحباً! ما اسمك؟'],
  ['Omar','Hi! My name is Omar. And you?','أهلاً! اسمي عمر. وأنت؟'],
  ['Sara','I\'m Sara. Nice to meet you.','أنا سارة. سعيدة بلقائك.'],
  ['Omar','Nice to meet you too. Where are you from?','سعيد بلقائك أيضاً. من أين أنت؟'],
  ['Sara','I\'m from Damascus. See you later!','أنا من دمشق. أراك لاحقاً!']
 ]},

 {type:'table', t:'أسئلة التعارف الأساسية', head:['السؤال','الترجمة','نموذج إجابة'], rows:[
  ['<span class="en">What\'s your name?</span>','ما اسمك؟','<span class="en">My name is Ahmad.</span>'],
  ['<span class="en">How old are you?</span>','كم عمرك؟','<span class="en">I am sixteen years old.</span>'],
  ['<span class="en">Where are you from?</span>','من أين أنت؟','<span class="en">I am from Syria.</span>'],
  ['<span class="en">What do you do?</span>','ماذا تعمل؟','<span class="en">I am a student.</span>']
 ]},

 {type:'h', ico:'🏫', t:'عبارات صفّية لا غنى عنها'},
 {type:'vocab', t:'احفظها اليوم', items:[
  ['Excuse me','لو سمحت / عفواً'],
  ['Please','من فضلك'],
  ['Thank you / Thanks','شكراً'],
  ['Sorry','آسف'],
  ['I don\'t understand','لا أفهم'],
  ['Can you repeat, please?','هل يمكنك الإعادة من فضلك؟'],
  ['How do you say ... in English?','كيف تقول ... بالإنكليزية؟'],
  ['How do you spell it?','كيف تتهجّى هذه الكلمة؟'],
  ['May I come in?','هل لي أن أدخل؟'],
  ['I have a question','عندي سؤال']
 ], note:'هذه العبارات ستوفر عليك الكثير من الحرج داخل الصف. تدرّب على نطقها بصوت عالٍ عشر مرات.'},

 {type:'drill', t:'تمرين: صِل الموقف بالعبارة', items:[
  'تريد الدخول للصف متأخراً.',
  'لم تسمع ما قاله المعلم.',
  'ساعدك أحدهم.',
  'لا تعرف كلمة بالإنكليزية.',
  'ارتكبت خطأً بسيطاً.'
 ], answers:'1. <span class="en">Excuse me, may I come in?</span><br>2. <span class="en">Can you repeat, please?</span><br>3. <span class="en">Thank you.</span><br>4. <span class="en">How do you say ... in English?</span><br>5. <span class="en">Sorry.</span>'},

 {type:'box', kind:'ex', t:'🎯 تحدي اليوم', html:'حيِّ ثلاثة أشخاص اليوم بالإنكليزية واسألهم <span class="en">How are you?</span> — الممارسة أهم من الحفظ.'}
],
quiz:[
 {q:'ما الصوت الصحيح للحرف <span class="en">C</span> في كلمة <span class="en">city</span>؟', o:['«ك» كما في <span class="en">cat</span>','«س»','«تش»','«ج»'], a:1, sk:'pron',
  e:'الحرف <span class="en">C</span> يُنطق «س» قبل <span class="en">e, i, y</span>، وفي <span class="en">city</span> يأتي بعده <span class="en">i</span>.'},
 {q:'أي حرف لا يُنطق في كلمة <span class="en">knife</span>؟', o:['<span class="en">n</span>','<span class="en">f</span>','<span class="en">k</span>','<span class="en">e</span> فقط'], a:2, sk:'pron',
  e:'<span class="en">k</span> صامتة دائماً قبل <span class="en">n</span>: <span class="en">know, knee, knife</span>.'},
 {q:'الحروف <span class="en">ph</span> تُنطق:', o:['«ب ه»','«ف»','«ب»','«ه»'], a:1, sk:'pron',
  e:'<span class="en">ph</span> تعطي صوت «ف»: <span class="en">phone, photo, elephant</span>.'},
 {q:'التقيت بشخص لأول مرة. ماذا تقول؟', o:['<span class="en">See you later.</span>','<span class="en">Good night.</span>','<span class="en">Nice to meet you.</span>','<span class="en">You\'re welcome.</span>'], a:2, sk:'func',
  e:'<span class="en">Nice to meet you</span> تُستخدم في أول لقاء فقط، وبعدها نقول <span class="en">Nice to see you</span>.'},
 {q:'الساعة التاسعة ليلاً وتدخل على مجلس. ماذا تقول؟', o:['<span class="en">Good night</span>','<span class="en">Good evening</span>','<span class="en">Good afternoon</span>','<span class="en">Goodbye</span>'], a:1, sk:'func',
  e:'<span class="en">Good night</span> للوداع فقط. عند اللقاء ليلاً نقول <span class="en">Good evening</span>.'},
 {q:'لم تفهم كلام المعلم وتريده أن يعيد. العبارة الصحيحة:', o:['<span class="en">Repeat!</span>','<span class="en">Can you repeat, please?</span>','<span class="en">I don\'t know.</span>','<span class="en">Excuse me, bye.</span>'], a:1, sk:'func',
  e:'إضافة <span class="en">please</span> وصيغة السؤال تجعل الطلب مؤدّباً، أما <span class="en">Repeat!</span> فأمر جاف.'},
 {q:'كم عدد حروف العلّة في الإنكليزية؟', o:['ثلاثة','خمسة','سبعة','عشرة'], a:1, sk:'pron',
  e:'حروف العلّة خمسة: <span class="en">A, E, I, O, U</span>، وأحياناً تؤدي <span class="en">Y</span> دورها.'},
 {q:'أي كلمة فيها حرف صامت لا يُنطق؟', o:['<span class="en">friend</span>','<span class="en">heart</span>','<span class="en">honest</span>','<span class="en">table</span>'], a:2, sk:'pron',
  e:'في <span class="en">honest</span> لا تُنطق <span class="en">h</span> إطلاقاً، فتُقرأ كأنها تبدأ بحرف علّة.'},
 {q:'ما ترجمة <span class="en">How do you spell it?</span>؟', o:['كيف تقولها؟','كيف تتهجّاها؟','ماذا تعني؟','من أين أنت؟'], a:1, sk:'vocab',
  e:'<span class="en">spell</span> = يتهجّى، أي يذكر حروف الكلمة واحداً واحداً.'},
 {q:'أردت سؤال زميلك عن بلده. السؤال الصحيح:', o:['<span class="en">Where you from?</span>','<span class="en">Where are you from?</span>','<span class="en">From where you?</span>','<span class="en">What are you from?</span>'], a:1, sk:'grammar',
  e:'السؤال يحتاج الفعل <span class="en">are</span> بعد أداة الاستفهام: <span class="en">Where + are + you + from?</span>'}
]
},

/* ========================= الوحدة 2 ========================= */
{
id:'f2', t:'Numbers, Time & Everyday Basics', ta:'الوحدة 2 — الأرقام والوقت', tag:'أساسيات يومية',
blocks:[
 {type:'text', t:'ماذا ستتعلم؟', html:'<ul class="clean"><li>العدّ من صفر إلى مليون.</li><li>الأيام والأشهر والفصول والتواريخ.</li><li>قول الوقت بدقة.</li><li>الألوان والكميات البسيطة.</li></ul>'},

 {type:'h', ico:'🔢', t:'الأرقام الأساسية'},
 {type:'table', t:'من 1 إلى 20', head:['الرقم','الكلمة','الرقم','الكلمة'], rows:[
  ['<span class="num">1</span>','<span class="en">one</span>','<span class="num">11</span>','<span class="en">eleven</span>'],
  ['<span class="num">2</span>','<span class="en">two</span>','<span class="num">12</span>','<span class="en">twelve</span>'],
  ['<span class="num">3</span>','<span class="en">three</span>','<span class="num">13</span>','<span class="en">thirteen</span>'],
  ['<span class="num">4</span>','<span class="en">four</span>','<span class="num">14</span>','<span class="en">fourteen</span>'],
  ['<span class="num">5</span>','<span class="en">five</span>','<span class="num">15</span>','<span class="en">fifteen</span>'],
  ['<span class="num">6</span>','<span class="en">six</span>','<span class="num">16</span>','<span class="en">sixteen</span>'],
  ['<span class="num">7</span>','<span class="en">seven</span>','<span class="num">17</span>','<span class="en">seventeen</span>'],
  ['<span class="num">8</span>','<span class="en">eight</span>','<span class="num">18</span>','<span class="en">eighteen</span>'],
  ['<span class="num">9</span>','<span class="en">nine</span>','<span class="num">19</span>','<span class="en">nineteen</span>'],
  ['<span class="num">10</span>','<span class="en">ten</span>','<span class="num">20</span>','<span class="en">twenty</span>']
 ], note:'<b>انتبه:</b> <span class="en">thirteen</span> وليس <span class="en">threeteen</span>، و<span class="en">fifteen</span> وليس <span class="en">fiveteen</span>.'},

 {type:'table', t:'العشرات', head:['الرقم','الكلمة','الرقم','الكلمة'], rows:[
  ['<span class="num">20</span>','<span class="en">twenty</span>','<span class="num">60</span>','<span class="en">sixty</span>'],
  ['<span class="num">30</span>','<span class="en">thirty</span>','<span class="num">70</span>','<span class="en">seventy</span>'],
  ['<span class="num">40</span>','<span class="en">forty</span>','<span class="num">80</span>','<span class="en">eighty</span>'],
  ['<span class="num">50</span>','<span class="en">fifty</span>','<span class="num">90</span>','<span class="en">ninety</span>'],
  ['<span class="num">100</span>','<span class="en">one hundred</span>','<span class="num">1000</span>','<span class="en">one thousand</span>']
 ], note:'<b>خطأ إملائي شهير:</b> <span class="en">forty</span> بدون <span class="en">u</span>، رغم أن الأربعة <span class="en">four</span>.'},

 {type:'box', kind:'rule', t:'🧩 تركيب الأرقام بين 21 و99', html:
  'نضع العشرة أولاً ثم الآحاد، ونربط بينهما بشرطة:<br>'+
  '<span class="en">21 = twenty-one · 35 = thirty-five · 99 = ninety-nine</span>'},

 {type:'table', t:'الأرقام الكبيرة', head:['الرقم','بالكلمات'], rows:[
  ['<span class="num">200</span>','<span class="en">two hundred</span>'],
  ['<span class="num">5,400</span>','<span class="en">five thousand four hundred</span>'],
  ['<span class="num">100,000</span>','<span class="en">one hundred thousand</span>'],
  ['<span class="num">1,000,000</span>','<span class="en">one million</span>']
 ], note:'<b>قاعدة حاسمة:</b> لا نضع <span class="en">s</span> على <span class="en">hundred / thousand / million</span> إذا سبقها رقم محدد.<br>✅ <span class="en">three hundred students</span> — ❌ <span class="en">three hundreds students</span>'},

 {type:'table', t:'الأعداد الترتيبية (للتواريخ والترتيب)', head:['الرقم','الكلمة','الرقم','الكلمة'], rows:[
  ['<span class="en">1st</span>','<span class="en">first</span>','<span class="en">6th</span>','<span class="en">sixth</span>'],
  ['<span class="en">2nd</span>','<span class="en">second</span>','<span class="en">7th</span>','<span class="en">seventh</span>'],
  ['<span class="en">3rd</span>','<span class="en">third</span>','<span class="en">8th</span>','<span class="en">eighth</span>'],
  ['<span class="en">4th</span>','<span class="en">fourth</span>','<span class="en">9th</span>','<span class="en">ninth</span>'],
  ['<span class="en">5th</span>','<span class="en">fifth</span>','<span class="en">10th</span>','<span class="en">tenth</span>']
 ], note:'<b>نقول التاريخ هكذا:</b> <span class="num">25/12/2026</span> ← <span class="en">the twenty-fifth of December, two thousand twenty-six</span>'},

 {type:'h', ico:'🕐', t:'قول الوقت'},
 {type:'table', t:'الساعة', head:['الساعة','نقول'], rows:[
  ['<span class="num">3:00</span>','<span class="en">three o\'clock</span>'],
  ['<span class="num">3:05</span>','<span class="en">five past three</span>'],
  ['<span class="num">3:15</span>','<span class="en">a quarter past three</span>'],
  ['<span class="num">3:30</span>','<span class="en">half past three</span>'],
  ['<span class="num">3:45</span>','<span class="en">a quarter to four</span>'],
  ['<span class="num">3:50</span>','<span class="en">ten to four</span>'],
  ['<span class="num">12:00</span> نهاراً','<span class="en">noon / midday</span>'],
  ['<span class="num">12:00</span> ليلاً','<span class="en">midnight</span>']
 ], note:'<b>القاعدة:</b> حتى النصف نستخدم <span class="en">past</span> (بعد)، وبعد النصف نستخدم <span class="en">to</span> (باقي للساعة التالية).'},
 {type:'box', kind:'rule', t:'❓ السؤال عن الوقت', html:
  '<span class="en">What time is it?</span> / <span class="en">What\'s the time?</span> — كم الساعة؟<br>'+
  '<span class="en">It\'s 3 o\'clock.</span> — الساعة الثالثة.<br>'+
  '<span class="en">At what time...?</span> — في أي ساعة...؟ والجواب: <span class="en">At 7 o\'clock.</span>'},

 {type:'h', ico:'📅', t:'الأيام والأشهر والفصول'},
 {type:'table', t:'أيام الأسبوع', head:['English','الترجمة','English','الترجمة'], rows:[
  ['<span class="en">Saturday</span>','السبت','<span class="en">Wednesday</span>','الأربعاء'],
  ['<span class="en">Sunday</span>','الأحد','<span class="en">Thursday</span>','الخميس'],
  ['<span class="en">Monday</span>','الاثنين','<span class="en">Friday</span>','الجمعة'],
  ['<span class="en">Tuesday</span>','الثلاثاء','','']
 ]},
 {type:'table', t:'الأشهر', head:['','','',''], rows:[
  ['<span class="en">January</span> كانون الثاني','<span class="en">February</span> شباط','<span class="en">March</span> آذار','<span class="en">April</span> نيسان'],
  ['<span class="en">May</span> أيار','<span class="en">June</span> حزيران','<span class="en">July</span> تموز','<span class="en">August</span> آب'],
  ['<span class="en">September</span> أيلول','<span class="en">October</span> تشرين الأول','<span class="en">November</span> تشرين الثاني','<span class="en">December</span> كانون الأول']
 ], note:'<b>قاعدة إملائية مهمة:</b> أسماء الأيام والأشهر تبدأ دائماً بحرف كبير حتى في منتصف الجملة: <span class="en">I was born in March.</span>'},
 {type:'table', t:'الفصول', head:['English','الترجمة'], rows:[
  ['<span class="en">Winter</span>','الشتاء'],['<span class="en">Spring</span>','الربيع'],
  ['<span class="en">Summer</span>','الصيف'],['<span class="en">Autumn / Fall</span>','الخريف']
 ]},

 {type:'h', ico:'🎨', t:'الألوان والكميات'},
 {type:'vocab', t:'الألوان', items:[
  ['red','أحمر'],['blue','أزرق'],['green','أخضر'],['yellow','أصفر'],
  ['orange','برتقالي'],['purple','بنفسجي'],['black','أسود'],['white','أبيض'],
  ['brown','بنّي'],['pink','وردي'],['grey / gray','رمادي'],['navy blue','كحلي']
 ]},
 {type:'box', kind:'rule', t:'📦 كميات بسيطة', html:
  '<b>مع المعدود:</b> <span class="en">many books · a few books · no books</span><br>'+
  '<b>مع غير المعدود:</b> <span class="en">much water · a little water · no water</span><br>'+
  '<b>مع الاثنين:</b> <span class="en">a lot of · plenty of · some</span>'},

 {type:'drill', t:'تمرين: اكتب الوقت بالكلمات', items:[
  '<span class="num">6:00</span>','<span class="num">9:15</span>','<span class="num">2:30</span>','<span class="num">8:45</span>','<span class="num">7:10</span>'
 ], answers:'1. <span class="en">six o\'clock</span><br>2. <span class="en">a quarter past nine</span><br>3. <span class="en">half past two</span><br>4. <span class="en">a quarter to nine</span><br>5. <span class="en">ten past seven</span>'}
],
quiz:[
 {q:'كيف نكتب الرقم <span class="num">45</span> بالكلمات؟', o:['<span class="en">four-five</span>','<span class="en">fourty-five</span>','<span class="en">forty-five</span>','<span class="en">fourteen-five</span>'], a:2, sk:'vocab',
  e:'<span class="en">forty</span> تُكتب بدون <span class="en">u</span>، ونربطها بالآحاد بشرطة.'},
 {q:'الساعة <span class="num">4:45</span> نقول عنها:', o:['<span class="en">a quarter past four</span>','<span class="en">a quarter to five</span>','<span class="en">half past four</span>','<span class="en">forty-five four</span>'], a:1, sk:'vocab',
  e:'بعد النصف نعدّ ما بقي للساعة التالية: بقي ربع ساعة للخامسة.'},
 {q:'أي جملة صحيحة؟', o:['<span class="en">I have three hundreds books.</span>','<span class="en">I have three hundred books.</span>','<span class="en">I have three hundred of books.</span>','<span class="en">I have three hundreds of book.</span>'], a:1, sk:'grammar',
  e:'لا نضع <span class="en">s</span> على <span class="en">hundred</span> إذا سبقها رقم محدد.'},
 {q:'أي كتابة صحيحة؟', o:['<span class="en">I was born in march.</span>','<span class="en">I was born in March.</span>','<span class="en">I Was born in march.</span>','<span class="en">i was born In March.</span>'], a:1, sk:'grammar',
  e:'أسماء الأشهر والأيام تبدأ بحرف كبير دائماً، أما بقية الكلمات فتبقى صغيرة في وسط الجملة.'},
 {q:'العدد الترتيبي للرقم <span class="num">3</span> هو:', o:['<span class="en">threeth</span>','<span class="en">thirth</span>','<span class="en">third</span>','<span class="en">thirdth</span>'], a:2, sk:'vocab',
  e:'<span class="en">first, second, third</span> أعداد ترتيبية شاذة تُحفظ، ثم تنتظم بعدها بإضافة <span class="en">-th</span>.'},
 {q:'<span class="en">There isn\'t ...... water in the bottle.</span>', o:['<span class="en">many</span>','<span class="en">much</span>','<span class="en">a few</span>','<span class="en">number of</span>'], a:1, sk:'grammar',
  e:'<span class="en">water</span> اسم غير معدود، فنستخدم معه <span class="en">much</span> وليس <span class="en">many</span>.'},
 {q:'<span class="en">12:00</span> ليلاً نسميها:', o:['<span class="en">noon</span>','<span class="en">midday</span>','<span class="en">midnight</span>','<span class="en">evening</span>'], a:2, sk:'vocab',
  e:'<span class="en">midnight</span> منتصف الليل، أما <span class="en">noon / midday</span> فمنتصف النهار.'},
 {q:'أي يوم يأتي مباشرة بعد <span class="en">Tuesday</span>؟', o:['<span class="en">Monday</span>','<span class="en">Thursday</span>','<span class="en">Wednesday</span>','<span class="en">Sunday</span>'], a:2, sk:'vocab',
  e:'الترتيب: <span class="en">Monday → Tuesday → Wednesday → Thursday</span>.'},
 {q:'السؤال الصحيح عن الساعة:', o:['<span class="en">How is the time?</span>','<span class="en">What time is it?</span>','<span class="en">What is the clock?</span>','<span class="en">When is time?</span>'], a:1, sk:'func',
  e:'الصيغتان المعتمدتان: <span class="en">What time is it?</span> و<span class="en">What\'s the time?</span>'},
 {q:'كيف نقرأ التاريخ <span class="num">1/5/2026</span>؟', o:['<span class="en">the one of May</span>','<span class="en">the first of May</span>','<span class="en">the one May</span>','<span class="en">May the one</span>'], a:1, sk:'grammar',
  e:'التواريخ تُقرأ بالأعداد الترتيبية: <span class="en">the first of May</span>.'}
]
}

,
/* ========================= الوحدة 3 ========================= */
{
id:'f3', t:'Pronouns & The Verb To Be', ta:'الوحدة 3 — الضمائر وفعل الكينونة', tag:'am / is / are',
blocks:[
 {type:'text', t:'لماذا هذه الوحدة هي الأهم في التأسيس؟', html:
  '<p>في العربية نقول «أنا طالب» بلا فعل. في الإنكليزية <b>لا يمكن</b> أن تخلو الجملة من فعل، فنضيف فعل الكينونة <span class="en">to be</span>. إهمال هذه القاعدة هو الخطأ رقم واحد عند الطلاب العرب.</p>'},

 {type:'h', ico:'👤', t:'ضمائر الفاعل'},
 {type:'table', t:'Subject Pronouns', head:['الضمير','المعنى','مثال'], rows:[
  ['<span class="en">I</span>','أنا','<span class="en">I am a student.</span>'],
  ['<span class="en">You</span>','أنتَ / أنتِ / أنتم','<span class="en">You are my friend.</span>'],
  ['<span class="en">He</span>','هو (للعاقل المذكر)','<span class="en">He is my brother.</span>'],
  ['<span class="en">She</span>','هي (للعاقلة المؤنثة)','<span class="en">She is a teacher.</span>'],
  ['<span class="en">It</span>','لغير العاقل والحيوان','<span class="en">It is a nice book.</span>'],
  ['<span class="en">We</span>','نحن','<span class="en">We are ready.</span>'],
  ['<span class="en">They</span>','هم / هنّ (وغير العاقل جمعاً)','<span class="en">They are friends.</span>']
 ], note:'<b>فرق جوهري عن العربية:</b> لا يوجد مثنّى في الإنكليزية، والاثنان يأخذان <span class="en">they</span>.'},

 {type:'h', ico:'🔗', t:'فعل الكينونة في المضارع'},
 {type:'table', t:'Present — am / is / are', head:['الضمير','الفعل','مثبت','منفي','سؤال'], rows:[
  ['<span class="en">I</span>','<span class="en">am</span>','<span class="en">I am happy.</span>','<span class="en">I am not (I\'m not)</span>','<span class="en">Am I ...?</span>'],
  ['<span class="en">He / She / It</span>','<span class="en">is</span>','<span class="en">She is here.</span>','<span class="en">is not (isn\'t)</span>','<span class="en">Is she ...?</span>'],
  ['<span class="en">You / We / They</span>','<span class="en">are</span>','<span class="en">They are late.</span>','<span class="en">are not (aren\'t)</span>','<span class="en">Are they ...?</span>']
 ]},
 {type:'box', kind:'warn', t:'⚠️ أخطاء يقع بها كل مبتدئ', html:
  '❌ <span class="en">She student.</span> ← ✅ <span class="en">She is a student.</span><br>'+
  '❌ <span class="en">I am agree with you.</span> ← ✅ <span class="en">I agree with you.</span> (<span class="en">agree</span> فعل رئيسي ولا يحتاج <span class="en">am</span>)<br>'+
  '❌ <span class="en">I have 16 years.</span> ← ✅ <span class="en">I am 16 years old.</span><br>'+
  '❌ <span class="en">The people is nice.</span> ← ✅ <span class="en">The people are nice.</span>'},

 {type:'table', t:'فعل الكينونة في الماضي — was / were', head:['الضمير','الفعل','مثال'], rows:[
  ['<span class="en">I / He / She / It</span>','<span class="en">was</span>','<span class="en">I was at school yesterday.</span>'],
  ['<span class="en">You / We / They</span>','<span class="en">were</span>','<span class="en">They were very happy.</span>']
 ], note:'<b>النفي:</b> <span class="en">wasn\'t / weren\'t</span> — <b>السؤال:</b> <span class="en">Was she ...? / Were they ...?</span>'},

 {type:'h', ico:'👉', t:'أدوات الإشارة'},
 {type:'table', t:'This / That / These / Those', head:['','قريب Near','بعيد Far'], rows:[
  ['<b>مفرد</b>','<span class="en">this book</span> — هذا الكتاب','<span class="en">that car</span> — تلك السيارة'],
  ['<b>جمع</b>','<span class="en">these books</span> — هذه الكتب','<span class="en">those cars</span> — تلك السيارات']
 ], note:'الفعل يتبع المفرد/الجمع: <span class="en">This is a pen.</span> / <span class="en">These are pens.</span>'},

 {type:'h', ico:'🔑', t:'صفات وضمائر الملكية'},
 {type:'table', t:'Possessives', head:['الضمير','صفة الملكية (+ اسم)','ضمير الملكية (بدون اسم)'], rows:[
  ['<span class="en">I</span>','<span class="en">my</span> book','<span class="en">It\'s mine.</span>'],
  ['<span class="en">You</span>','<span class="en">your</span> book','<span class="en">It\'s yours.</span>'],
  ['<span class="en">He</span>','<span class="en">his</span> book','<span class="en">It\'s his.</span>'],
  ['<span class="en">She</span>','<span class="en">her</span> book','<span class="en">It\'s hers.</span>'],
  ['<span class="en">It</span>','<span class="en">its</span> tail','—'],
  ['<span class="en">We</span>','<span class="en">our</span> book','<span class="en">It\'s ours.</span>'],
  ['<span class="en">They</span>','<span class="en">their</span> book','<span class="en">It\'s theirs.</span>']
 ]},
 {type:'box', kind:'rule', t:'🔑 الفرق بسطر واحد', html:
  'صفة الملكية تأتي <b>قبل اسم</b>: <span class="en">my car</span>. ضمير الملكية يأتي <b>وحده</b> لأنه يحلّ محل (الصفة + الاسم): <span class="en">This car is mine.</span><br>'+
  '<b>تحذير:</b> لا نكتب أبداً <span class="en">her\'s</span> أو <span class="en">your\'s</span> — بلا فاصلة عليا.'},
 {type:'box', kind:'tip', t:'📎 حالة الملكية بإضافة <span class="en">\'s</span>', html:
  '<span class="en">Ahmad\'s car</span> (سيارة أحمد) — <span class="en">my sister\'s phone</span><br>'+
  'إذا كان الاسم جمعاً منتهياً بـ <span class="en">s</span> نضع الفاصلة فقط: <span class="en">the students\' books</span>'},

 {type:'h', ico:'❓', t:'أدوات الاستفهام'},
 {type:'table', t:'Wh- Questions', head:['الأداة','المعنى','مثال'], rows:[
  ['<span class="en">What</span>','ما / ماذا','<span class="en">What is your name?</span>'],
  ['<span class="en">Who</span>','مَن','<span class="en">Who is that boy?</span>'],
  ['<span class="en">Where</span>','أين','<span class="en">Where do you live?</span>'],
  ['<span class="en">When</span>','متى','<span class="en">When is your birthday?</span>'],
  ['<span class="en">Why</span>','لماذا','<span class="en">Why are you late?</span>'],
  ['<span class="en">How</span>','كيف','<span class="en">How are you today?</span>'],
  ['<span class="en">Which</span>','أيّ (من مجموعة)','<span class="en">Which color do you like?</span>'],
  ['<span class="en">How much / many</span>','كم (سعر / عدد)','<span class="en">How many books do you have?</span>']
 ], note:'<b>ترتيب السؤال:</b> أداة الاستفهام + الفعل المساعد + الفاعل + الفعل الرئيسي؟<br><span class="en">Where do you live?</span>'},

 {type:'drill', t:'تمرين: أكمل بصفة أو ضمير الملكية', items:[
  '<span class="en">This is Sara. It is _____ (she) bag.</span>',
  '<span class="en">We have a car. It is _____ (we) car.</span>',
  '<span class="en">Is this pen yours or _____ (I)?</span>',
  '<span class="en">That is Ahmad\'s phone. It is _____ (he).</span>'
 ], answers:'1. <span class="en">her</span> &nbsp; 2. <span class="en">our</span> &nbsp; 3. <span class="en">mine</span> &nbsp; 4. <span class="en">his</span>'}
],
quiz:[
 {q:'<span class="en">My brother ...... a doctor.</span>', o:['<span class="en">am</span>','<span class="en">is</span>','<span class="en">are</span>','<span class="en">be</span>'], a:1, sk:'grammar',
  e:'<span class="en">My brother</span> = <span class="en">he</span>، والمفرد الغائب يأخذ <span class="en">is</span>.'},
 {q:'صحّح: <span class="en">She student at our school.</span>', o:['<span class="en">She is a student at our school.</span>','<span class="en">She student is at our school.</span>','الجملة صحيحة','<span class="en">She are student at our school.</span>'], a:0, sk:'grammar',
  e:'الجملة الإنكليزية لا تخلو من فعل، فنضيف <span class="en">is</span>، ومع المهنة المفردة نضيف <span class="en">a</span>.'},
 {q:'<span class="en">...... these your books?</span>', o:['<span class="en">Is</span>','<span class="en">Am</span>','<span class="en">Are</span>','<span class="en">Was</span>'], a:2, sk:'grammar',
  e:'<span class="en">these</span> جمع، فيأخذ <span class="en">are</span>.'},
 {q:'<span class="en">They ...... at the party last night.</span>', o:['<span class="en">was</span>','<span class="en">were</span>','<span class="en">are</span>','<span class="en">is</span>'], a:1, sk:'grammar',
  e:'<span class="en">last night</span> تدل على الماضي، و<span class="en">they</span> تأخذ <span class="en">were</span>.'},
 {q:'<span class="en">This book isn\'t mine, it\'s ...... .</span>', o:['<span class="en">her</span>','<span class="en">hers</span>','<span class="en">her\'s</span>','<span class="en">she</span>'], a:1, sk:'grammar',
  e:'بعد الفعل وبدون اسم نستخدم ضمير الملكية <span class="en">hers</span>، ولا تُكتب أبداً بفاصلة عليا.'},
 {q:'أيّ جملة صحيحة؟', o:['<span class="en">I have 17 years.</span>','<span class="en">I am 17 years.</span>','<span class="en">I am 17 years old.</span>','<span class="en">My age 17.</span>'], a:2, sk:'grammar',
  e:'العمر في الإنكليزية يُقال بالفعل <span class="en">be</span>: <span class="en">I am ... years old</span>.'},
 {q:'<span class="en">...... is your birthday?</span>', o:['<span class="en">What</span>','<span class="en">Who</span>','<span class="en">When</span>','<span class="en">How</span>'], a:2, sk:'grammar',
  e:'السؤال عن الزمن يبدأ بـ <span class="en">When</span>.'},
 {q:'<span class="en">...... cars over there are very expensive.</span>', o:['<span class="en">This</span>','<span class="en">That</span>','<span class="en">These</span>','<span class="en">Those</span>'], a:3, sk:'grammar',
  e:'<span class="en">cars</span> جمع و<span class="en">over there</span> تدل على البُعد، فالأداة <span class="en">Those</span>.'},
 {q:'<span class="en">I ...... agree with your opinion.</span>', o:['<span class="en">am</span>','<span class="en">am not</span>','لا نضع شيئاً','<span class="en">is</span>'], a:2, sk:'grammar',
  e:'<span class="en">agree</span> فعل رئيسي كامل، فلا يحتاج فعل كينونة قبله.'},
 {q:'الجمع من <span class="en">The man ...... my uncle.</span>', o:['<span class="en">is</span>','<span class="en">are</span>','<span class="en">am</span>','<span class="en">were</span>'], a:0, sk:'grammar',
  e:'<span class="en">The man</span> مفرد مذكر = <span class="en">he</span>، فيأخذ <span class="en">is</span>.'}
]
},

/* ========================= الوحدة 4 ========================= */
{
id:'f4', t:'Nouns & Articles', ta:'الوحدة 4 — الأسماء وأدوات التعريف', tag:'الجمع و a/an/the',
blocks:[
 {type:'h', ico:'📚', t:'المفرد والجمع'},
 {type:'table', t:'الجمع القياسي', head:['القاعدة','المفرد','الجمع'], rows:[
  ['معظم الأسماء: <span class="en">+ s</span>','<span class="en">book, car</span>','<span class="en">books, cars</span>'],
  ['المنتهي بـ <span class="en">s, ss, sh, ch, x, o</span>: <span class="en">+ es</span>','<span class="en">bus, box, watch</span>','<span class="en">buses, boxes, watches</span>'],
  ['ساكن + <span class="en">y</span> ← <span class="en">ies</span>','<span class="en">city, baby</span>','<span class="en">cities, babies</span>'],
  ['متحرك + <span class="en">y</span>: <span class="en">+ s</span> فقط','<span class="en">boy, key</span>','<span class="en">boys, keys</span>'],
  ['<span class="en">-f / -fe</span> ← <span class="en">ves</span>','<span class="en">leaf, knife</span>','<span class="en">leaves, knives</span>']
 ]},
 {type:'table', t:'الجمع الشاذ (يُحفظ حفظاً)', head:['المفرد','الجمع','المفرد','الجمع'], rows:[
  ['<span class="en">man</span>','<span class="en">men</span>','<span class="en">foot</span>','<span class="en">feet</span>'],
  ['<span class="en">woman</span>','<span class="en">women</span>','<span class="en">tooth</span>','<span class="en">teeth</span>'],
  ['<span class="en">child</span>','<span class="en">children</span>','<span class="en">mouse</span>','<span class="en">mice</span>'],
  ['<span class="en">person</span>','<span class="en">people</span>','<span class="en">fish / sheep</span>','<span class="en">fish / sheep</span> (بلا تغيير)']
 ]},

 {type:'h', ico:'🔢', t:'المعدود وغير المعدود'},
 {type:'table', t:'Countable vs Uncountable', head:['','معدود Countable','غير معدود Uncountable'], rows:[
  ['<b>التعريف</b>','أشياء منفصلة يمكن عدّها','مواد أو مفاهيم لا تُعدّ بمفردها'],
  ['<b>أمثلة</b>','<span class="en">apple, book, student, chair</span>','<span class="en">water, rice, money, information, advice</span>'],
  ['<b>الجمع</b>','<span class="en">two apples</span> ✅','<span class="en">two waters</span> ❌'],
  ['<b>أدوات</b>','<span class="en">a/an, many, a few, numbers</span>','<span class="en">much, a little, some</span>']
 ]},
 {type:'box', kind:'tip', t:'🥤 كيف نعدّ غير المعدود؟', html:
  'نستعير له وعاءً أو وحدة قياس:<br><span class="en">a glass of water · a cup of tea · a piece of cake · a bottle of juice · a kilo of rice · a piece of advice</span>'},
 {type:'table', t:'Some / Any / Much / Many', head:['الكلمة','تُستخدم مع','مثال'], rows:[
  ['<span class="en">some</span>','الاثنين — في الجمل المثبتة والعروض','<span class="en">I have some money. / Would you like some tea?</span>'],
  ['<span class="en">any</span>','الاثنين — في النفي والسؤال','<span class="en">I don\'t have any money. / Do you have any apples?</span>'],
  ['<span class="en">much</span>','غير المعدود','<span class="en">I don\'t have much time.</span>'],
  ['<span class="en">many</span>','المعدود','<span class="en">I don\'t have many friends here.</span>'],
  ['<span class="en">a lot of</span>','الاثنين','<span class="en">a lot of homework / a lot of books</span>']
 ]},

 {type:'h', ico:'🅰️', t:'أدوات التعريف والتنكير'},
 {type:'table', t:'A / An / The / بلا أداة', head:['الأداة','متى','أمثلة'], rows:[
  ['<span class="en">a</span>','شيء غير محدد يبدأ بصوت ساكن','<span class="en">a book, a university</span> (صوتها <span class="en">yu</span>)'],
  ['<span class="en">an</span>','شيء غير محدد يبدأ بصوت علّة','<span class="en">an apple, an hour</span> (<span class="en">h</span> صامتة)'],
  ['<span class="en">the</span>','شيء محدد أو سبق ذكره أو وحيد','<span class="en">The sun. I have a dog. The dog is small.</span>'],
  ['<b>بلا أداة</b>','الدول والمدن، الأسماء، اللغات، الوجبات، الجمع العام','<span class="en">Syria, Ahmad, English, breakfast, I like cats.</span>']
 ], note:'<b>القاعدة الذهبية:</b> العبرة بالصوت لا بالحرف. <span class="en">an hour</span> لأن <span class="en">h</span> صامتة، و<span class="en">a university</span> لأن صوتها يبدأ بـ «يو».'},

 {type:'h', ico:'🧩', t:'الأسماء المركبة'},
 {type:'table', t:'Compound Nouns', head:['كلمة 1','كلمة 2','الاسم المركب','المعنى'], rows:[
  ['<span class="en">class</span>','<span class="en">room</span>','<span class="en">classroom</span>','غرفة الصف'],
  ['<span class="en">foot</span>','<span class="en">ball</span>','<span class="en">football</span>','كرة القدم'],
  ['<span class="en">home</span>','<span class="en">work</span>','<span class="en">homework</span>','الواجب المنزلي'],
  ['<span class="en">tooth</span>','<span class="en">brush</span>','<span class="en">toothbrush</span>','فرشاة الأسنان']
 ], note:'<b>انتبه:</b> <span class="en">a greenhouse</span> = بيت زجاجي للنباتات، أما <span class="en">a green house</span> = بيت لونه أخضر. الفرق في النبر والمعنى.'},

 {type:'drill', t:'تمرين: أكمل بـ a / an / the أو اترك الفراغ (—)', items:[
  '<span class="en">I saw _____ elephant at the zoo.</span>',
  '<span class="en">_____ Nile is a famous river.</span>',
  '<span class="en">She is _____ doctor.</span>',
  '<span class="en">I study _____ English every day.</span>',
  '<span class="en">We had _____ dinner at 7 o\'clock.</span>'
 ], answers:'1. <span class="en">an</span> &nbsp; 2. <span class="en">The</span> &nbsp; 3. <span class="en">a</span> &nbsp; 4. — &nbsp; 5. —'}
],
quiz:[
 {q:'جمع كلمة <span class="en">knife</span> هو:', o:['<span class="en">knifes</span>','<span class="en">knives</span>','<span class="en">knifs</span>','<span class="en">knife</span>'], a:1, sk:'grammar',
  e:'المنتهي بـ <span class="en">-fe</span> تتحول إلى <span class="en">-ves</span>: <span class="en">knife → knives</span>.'},
 {q:'جمع كلمة <span class="en">child</span> هو:', o:['<span class="en">childs</span>','<span class="en">childes</span>','<span class="en">children</span>','<span class="en">childrens</span>'], a:2, sk:'grammar',
  e:'جمع شاذ يُحفظ، ولا تُضاف له <span class="en">s</span> أبداً.'},
 {q:'<span class="en">He has _____ information about the topic.</span>', o:['<span class="en">many</span>','<span class="en">a few</span>','<span class="en">a lot of</span>','<span class="en">number of</span>'], a:2, sk:'grammar',
  e:'<span class="en">information</span> غير معدود، فلا تصلح <span class="en">many</span> ولا <span class="en">a few</span>، و<span class="en">a lot of</span> تصلح للنوعين.'},
 {q:'<span class="en">I waited for _____ hour.</span>', o:['<span class="en">a</span>','<span class="en">an</span>','<span class="en">the</span>','بلا أداة'], a:1, sk:'grammar',
  e:'حرف <span class="en">h</span> في <span class="en">hour</span> صامت، فالكلمة تبدأ بصوت علّة وتأخذ <span class="en">an</span>.'},
 {q:'<span class="en">She bought _____ university book.</span>', o:['<span class="en">an</span>','<span class="en">a</span>','<span class="en">the</span>','بلا أداة'], a:1, sk:'grammar',
  e:'<span class="en">university</span> تبدأ بصوت «يو» وهو صوت ساكن، فتأخذ <span class="en">a</span> رغم أن حرفها حرف علّة.'},
 {q:'<span class="en">Do you have _____ questions?</span>', o:['<span class="en">some</span>','<span class="en">any</span>','<span class="en">much</span>','<span class="en">a little</span>'], a:1, sk:'grammar',
  e:'في السؤال والنفي نستخدم <span class="en">any</span>.'},
 {q:'أي جملة صحيحة؟', o:['<span class="en">I live in the Syria.</span>','<span class="en">I live in Syria.</span>','<span class="en">I live in a Syria.</span>','<span class="en">I live Syria.</span>'], a:1, sk:'grammar',
  e:'أسماء الدول المفردة لا تأخذ أداة تعريف، لكن نحتاج حرف الجر <span class="en">in</span>.'},
 {q:'جمع <span class="en">city</span> هو:', o:['<span class="en">citys</span>','<span class="en">cityes</span>','<span class="en">cities</span>','<span class="en">cityies</span>'], a:2, sk:'grammar',
  e:'ساكن (<span class="en">t</span>) قبل <span class="en">y</span>، فتتحول <span class="en">y</span> إلى <span class="en">ies</span>.'},
 {q:'ما معنى <span class="en">a piece of advice</span>؟', o:['قطعة ورق','نصيحة واحدة','مجموعة نصائح','قرار'], a:1, sk:'vocab',
  e:'<span class="en">advice</span> غير معدود، فنعدّه بوحدة <span class="en">a piece of</span>.'},
 {q:'<span class="en">There are three _____ in the garden.</span>', o:['<span class="en">woman</span>','<span class="en">womans</span>','<span class="en">women</span>','<span class="en">womens</span>'], a:2, sk:'grammar',
  e:'جمع <span class="en">woman</span> شاذ: <span class="en">women</span>، والعدد ثلاثة يستلزم الجمع.'}
]
},

/* ========================= الوحدة 5 ========================= */
{
id:'f5', t:'Adjectives, Adverbs & Prepositions', ta:'الوحدة 5 — الصفات والظروف وحروف الجر', tag:'الوصف والمقارنة',
blocks:[
 {type:'h', ico:'🎨', t:'الصفات'},
 {type:'box', kind:'rule', t:'📐 قاعدة مريحة', html:
  'الصفة في الإنكليزية <b>لا تتغيّر أبداً</b> مع المذكر أو المؤنث أو الجمع:<br>'+
  '<span class="en">a tall boy · a tall girl · tall boys · tall girls</span><br>'+
  '<b>موقعها:</b> قبل الاسم مباشرة (<span class="en">a beautiful house</span>) أو بعد أفعال مثل <span class="en">be, seem, look, feel</span> (<span class="en">This house is beautiful.</span>).'},
 {type:'vocab', t:'صفات المشاعر', items:[
  ['happy','سعيد'],['sad','حزين'],['angry','غاضب'],['tired','متعب'],
  ['scared','خائف'],['excited','متحمّس'],['confused','مرتبك'],['bored','ضجِر'],
  ['proud','فخور'],['worried','قلق']
 ]},
 {type:'box', kind:'warn', t:'⚠️ الفرق بين <span class="en">-ed</span> و <span class="en">-ing</span>', html:
  '<span class="en">-ed</span> = شعور الشخص: <span class="en">I am bored.</span> (أنا أشعر بالملل)<br>'+
  '<span class="en">-ing</span> = صفة الشيء: <span class="en">This film is boring.</span> (الفيلم مُملّ)<br>'+
  'لو قلت <span class="en">I am boring</span> فأنت تصف نفسك بأنك شخص مُملّ!'},

 {type:'h', ico:'📊', t:'درجات المقارنة'},
 {type:'table', t:'Comparatives & Superlatives', head:['نوع الصفة','المقارنة (+ <span class="en">than</span>)','التفضيل (<span class="en">the</span> +)'], rows:[
  ['قصيرة (مقطع واحد): <span class="en">tall</span>','<span class="en">taller than</span>','<span class="en">the tallest</span>'],
  ['منتهية بـ <span class="en">-y</span>: <span class="en">happy</span>','<span class="en">happier than</span>','<span class="en">the happiest</span>'],
  ['طويلة (مقطعان فأكثر): <span class="en">beautiful</span>','<span class="en">more beautiful than</span>','<span class="en">the most beautiful</span>']
 ]},
 {type:'table', t:'صفات شاذة تُحفظ', head:['الصفة','المقارنة','التفضيل'], rows:[
  ['<span class="en">good</span>','<span class="en">better</span>','<span class="en">the best</span>'],
  ['<span class="en">bad</span>','<span class="en">worse</span>','<span class="en">the worst</span>'],
  ['<span class="en">far</span>','<span class="en">farther / further</span>','<span class="en">the farthest</span>'],
  ['<span class="en">little</span>','<span class="en">less</span>','<span class="en">the least</span>'],
  ['<span class="en">many / much</span>','<span class="en">more</span>','<span class="en">the most</span>']
 ], note:'<b>المساواة:</b> <span class="en">as + adjective + as</span> ← <span class="en">Mona is as tall as her brother.</span>'},

 {type:'h', ico:'🏃', t:'الظروف'},
 {type:'table', t:'من الصفة إلى الظرف', head:['Adjective','Adverb','ملاحظة'], rows:[
  ['<span class="en">quick</span>','<span class="en">quickly</span>','القاعدة العامة: <span class="en">+ ly</span>'],
  ['<span class="en">careful</span>','<span class="en">carefully</span>',''],
  ['<span class="en">easy</span>','<span class="en">easily</span>','<span class="en">y → i + ly</span>'],
  ['<span class="en">good</span>','<span class="en">well</span>','<b>شاذ تماماً!</b>'],
  ['<span class="en">fast / hard</span>','<span class="en">fast / hard</span>','لا تتغير']
 ]},
 {type:'box', kind:'rule', t:'🔁 ظروف التكرار', html:
  '<span class="en">always (100%) → usually → often → sometimes → rarely → never (0%)</span><br>'+
  '<b>موقعها:</b> قبل الفعل الرئيسي وبعد فعل الكينونة:<br>'+
  '<span class="en">I always drink coffee.</span> — <span class="en">She is never late.</span><br>'+
  '❌ <span class="en">I go always to school.</span>'},

 {type:'h', ico:'📍', t:'حروف الجر'},
 {type:'table', t:'للزمان والمكان والحركة', head:['النوع','in','on','at'], rows:[
  ['<b>الزمان</b>','الشهور والسنوات والفصول: <span class="en">in March, in 2026</span>','الأيام والتواريخ: <span class="en">on Monday, on 5 May</span>','الساعة والليل: <span class="en">at 7 o\'clock, at night</span>'],
  ['<b>المكان</b>','داخل حيّز: <span class="en">in the box, in Aleppo</span>','على سطح: <span class="en">on the table</span>','نقطة محددة: <span class="en">at home, at school</span>']
 ], note:'<b>الحركة:</b> <span class="en">to</span> (باتجاه) · <span class="en">from</span> (من) · <span class="en">into</span> (إلى الداخل) · <span class="en">through</span> (عبر الداخل) · <span class="en">across</span> (عبر السطح) · <span class="en">over</span> (من فوق) · <span class="en">past</span> (متجاوزاً)'},
 {type:'vocab', t:'حروف جر مكانية', items:[
  ['in front of','أمام'],['behind','خلف'],['between','بين (اثنين)'],['among','بين (مجموعة)'],
  ['next to / beside','بجانب'],['above / over','فوق'],['below / under','تحت'],
  ['near','قرب'],['opposite','مقابل'],['inside / outside','داخل / خارج']
 ]},

 {type:'drill', t:'تمرين: اختر in أو on أو at', items:[
  '<span class="en">I wake up _____ 7 o\'clock.</span>',
  '<span class="en">My birthday is _____ May.</span>',
  '<span class="en">We have class _____ Monday.</span>',
  '<span class="en">The cat is _____ the box.</span>',
  '<span class="en">She lives _____ Homs.</span>'
 ], answers:'1. <span class="en">at</span> &nbsp; 2. <span class="en">in</span> &nbsp; 3. <span class="en">on</span> &nbsp; 4. <span class="en">in</span> &nbsp; 5. <span class="en">in</span>'}
],
quiz:[
 {q:'<span class="en">This book is ...... than that one.</span>', o:['<span class="en">interesting</span>','<span class="en">more interesting</span>','<span class="en">most interesting</span>','<span class="en">interestinger</span>'], a:1, sk:'grammar',
  e:'<span class="en">interesting</span> صفة طويلة، فمقارنتها بـ <span class="en">more + الصفة + than</span>.'},
 {q:'<span class="en">Ali is the ...... boy in the class.</span>', o:['<span class="en">tall</span>','<span class="en">taller</span>','<span class="en">tallest</span>','<span class="en">more tall</span>'], a:2, sk:'grammar',
  e:'وجود <span class="en">the</span> و<span class="en">in the class</span> يدل على التفضيل: <span class="en">the tallest</span>.'},
 {q:'<span class="en">Today is ...... than yesterday.</span>', o:['<span class="en">gooder</span>','<span class="en">more good</span>','<span class="en">better</span>','<span class="en">best</span>'], a:2, sk:'grammar',
  e:'<span class="en">good</span> صفة شاذة: <span class="en">good → better → the best</span>.'},
 {q:'الظرف من الصفة <span class="en">good</span> هو:', o:['<span class="en">goodly</span>','<span class="en">well</span>','<span class="en">better</span>','<span class="en">goodness</span>'], a:1, sk:'grammar',
  e:'ظرف شاذ: <span class="en">He is a good player → He plays well.</span>'},
 {q:'أي جملة صحيحة في موقع ظرف التكرار؟', o:['<span class="en">I go always to school.</span>','<span class="en">I always go to school.</span>','<span class="en">Always I go to school early.</span>','<span class="en">I go to always school.</span>'], a:1, sk:'grammar',
  e:'ظرف التكرار يسبق الفعل الرئيسي مباشرة.'},
 {q:'<span class="en">The film was very ...... , so I slept.</span>', o:['<span class="en">bored</span>','<span class="en">boring</span>','<span class="en">bore</span>','<span class="en">boredom</span>'], a:1, sk:'grammar',
  e:'نصف الشيء نفسه بـ <span class="en">-ing</span>، ونصف شعور الشخص بـ <span class="en">-ed</span>.'},
 {q:'<span class="en">My birthday is ...... 15 June.</span>', o:['<span class="en">in</span>','<span class="en">at</span>','<span class="en">on</span>','<span class="en">to</span>'], a:2, sk:'grammar',
  e:'التاريخ المحدد (يوم + شهر) يأخذ <span class="en">on</span>.'},
 {q:'<span class="en">The train goes ...... the tunnel.</span>', o:['<span class="en">across</span>','<span class="en">through</span>','<span class="en">over</span>','<span class="en">on</span>'], a:1, sk:'grammar',
  e:'<span class="en">through</span> للمرور من داخل شيء كالنفق، و<span class="en">across</span> للعبور على سطح.'},
 {q:'<span class="en">She sings as ...... as a professional.</span>', o:['<span class="en">better</span>','<span class="en">good</span>','<span class="en">well</span>','<span class="en">best</span>'], a:2, sk:'grammar',
  e:'نصف الفعل <span class="en">sings</span> بظرف، وصيغة المساواة <span class="en">as + well + as</span>.'},
 {q:'<span class="en">The bank is ...... the post office and the school.</span>', o:['<span class="en">among</span>','<span class="en">between</span>','<span class="en">behind</span>','<span class="en">opposite</span>'], a:1, sk:'vocab',
  e:'<span class="en">between</span> بين شيئين محددين، و<span class="en">among</span> بين مجموعة.'}
]
}
,
/* ====================== الوحدة 6 ====================== */
{ id:'f6', t:'Verbs & Tenses', ta:'الوحدة 6 — الأفعال والأزمنة', tag:'قلب اللغة الإنجليزية',
blocks:[
 {type:'text', html:'الأزمنة هي العمود الفقري للغة الإنجليزية. مَن يتقن الأزمنة يستطيع أن يعبّر عن أي فكرة في أي وقت. في هذه الوحدة نبني الأزمنة الأساسية من الصفر، ونربط كلّ زمن بـ <b>وظيفته</b> و<b>كلماته الدالّة</b> (<span class="en">time markers</span>) التي تكشفه في أي سؤال امتحاني.'},

 {type:'h', ico:'⏱️', t:'1) المضارع البسيط — Present Simple'},
 {type:'box', kind:'rule', t:'متى نستعمله؟', html:'للحقائق الثابتة، والعادات المتكرّرة، والجداول الزمنية.<br><span class="en-blk">Water boils at 100°C. / I go to school every day. / The train leaves at 7.</span>'},
 {type:'table', head:['الحالة','الصيغة','مثال'],
  rows:[
   ['مثبت (I/You/We/They)','الفعل المجرّد','<span class="en">They play football.</span>'],
   ['مثبت (He/She/It)','الفعل + <span class="en">s/es</span>','<span class="en">He plays football.</span>'],
   ['منفي','<span class="en">don\'t / doesn\'t</span> + مصدر','<span class="en">She doesn\'t play.</span>'],
   ['سؤال','<span class="en">Do / Does</span> + فاعل + مصدر','<span class="en">Does he play?</span>']
  ]},
 {type:'box', kind:'warn', t:'فخّ شائع ⚠️', html:'بعد <span class="en">does / doesn\'t</span> يعود الفعل مجرّداً بلا <span class="en">s</span>:<br>✗ <span class="en">He doesn\'t plays.</span> &nbsp;&nbsp; ✓ <span class="en">He doesn\'t play.</span>'},
 {type:'h', ico:'✍️', t:'قاعدة إضافة s / es'},
 {type:'table', head:['النهاية','القاعدة','مثال'],
  rows:[
   ['<span class="en">s, sh, ch, x, z, o</span>','نضيف <span class="en">es</span>','<span class="en">watch → watches, go → goes, fix → fixes</span>'],
   ['حرف ساكن + <span class="en">y</span>','نحذف <span class="en">y</span> ونضيف <span class="en">ies</span>','<span class="en">study → studies, carry → carries</span>'],
   ['حرف علة + <span class="en">y</span>','نضيف <span class="en">s</span> فقط','<span class="en">play → plays, enjoy → enjoys</span>'],
   ['غير ذلك','نضيف <span class="en">s</span>','<span class="en">read → reads</span>']
  ]},
 {type:'box', kind:'tip', t:'كلمات دالّة', html:'<span class="en">always, usually, often, sometimes, never, every day/week, on Mondays, twice a week</span>'},

 {type:'h', ico:'🔄', t:'2) المضارع المستمر — Present Continuous'},
 {type:'box', kind:'rule', t:'الصيغة والوظيفة', html:'<span class="en">am / is / are + V-ing</span><br>لحدثٍ يجري <b>الآن</b> أو في فترة حاضرة، أو لترتيب مستقبلي مؤكّد.<br><span class="en-blk">Look! The baby is sleeping. / I am studying English this year. / We are travelling tomorrow.</span>'},
 {type:'table', head:['النهاية','القاعدة','مثال'],
  rows:[
   ['<span class="en">e</span> صامتة','نحذفها','<span class="en">write → writing, make → making</span>'],
   ['فعل قصير: ساكن+علة+ساكن','نضاعف الحرف الأخير','<span class="en">run → running, sit → sitting, stop → stopping</span>'],
   ['<span class="en">ie</span>','تتحوّل إلى <span class="en">y</span>','<span class="en">lie → lying, die → dying</span>'],
   ['غير ذلك','نضيف <span class="en">ing</span>','<span class="en">play → playing, study → studying</span>']
  ]},
 {type:'box', kind:'warn', t:'أفعال لا تُستعمل في المستمر (State Verbs)', html:'<span class="en">know, understand, believe, want, need, like, love, hate, remember, belong, seem, own, cost</span><br>✗ <span class="en">I am knowing him.</span> &nbsp;&nbsp; ✓ <span class="en">I know him.</span>'},

 {type:'h', ico:'🕰️', t:'3) الماضي البسيط — Past Simple'},
 {type:'box', kind:'rule', t:'الصيغة', html:'مثبت: فعل + <span class="en">ed</span> (منتظم) أو التصريف الثاني (شاذ).<br>منفي: <span class="en">didn\'t + مصدر</span> — سؤال: <span class="en">Did + فاعل + مصدر؟</span><br><span class="en-blk">I visited Homs last year. / I didn\'t visit Homs. / Did you visit Homs?</span>'},
 {type:'box', kind:'warn', t:'فخّ شائع ⚠️', html:'بعد <span class="en">did / didn\'t</span> نعود للمصدر:<br>✗ <span class="en">Did you went?</span> &nbsp;&nbsp; ✓ <span class="en">Did you go?</span>'},
 {type:'h', ico:'📋', t:'أهم الأفعال الشاذة (احفظها جيداً)'},
 {type:'table', head:['المصدر','الماضي','التصريف الثالث','المعنى'],
  rows:[
   ['<span class="en">go</span>','<span class="en">went</span>','<span class="en">gone</span>','يذهب'],
   ['<span class="en">see</span>','<span class="en">saw</span>','<span class="en">seen</span>','يرى'],
   ['<span class="en">take</span>','<span class="en">took</span>','<span class="en">taken</span>','يأخذ'],
   ['<span class="en">give</span>','<span class="en">gave</span>','<span class="en">given</span>','يعطي'],
   ['<span class="en">write</span>','<span class="en">wrote</span>','<span class="en">written</span>','يكتب'],
   ['<span class="en">speak</span>','<span class="en">spoke</span>','<span class="en">spoken</span>','يتكلم'],
   ['<span class="en">eat</span>','<span class="en">ate</span>','<span class="en">eaten</span>','يأكل'],
   ['<span class="en">drink</span>','<span class="en">drank</span>','<span class="en">drunk</span>','يشرب'],
   ['<span class="en">begin</span>','<span class="en">began</span>','<span class="en">begun</span>','يبدأ'],
   ['<span class="en">buy</span>','<span class="en">bought</span>','<span class="en">bought</span>','يشتري'],
   ['<span class="en">bring</span>','<span class="en">brought</span>','<span class="en">brought</span>','يُحضر'],
   ['<span class="en">think</span>','<span class="en">thought</span>','<span class="en">thought</span>','يفكّر'],
   ['<span class="en">teach</span>','<span class="en">taught</span>','<span class="en">taught</span>','يُعلّم'],
   ['<span class="en">make</span>','<span class="en">made</span>','<span class="en">made</span>','يصنع'],
   ['<span class="en">find</span>','<span class="en">found</span>','<span class="en">found</span>','يجد'],
   ['<span class="en">leave</span>','<span class="en">left</span>','<span class="en">left</span>','يغادر'],
   ['<span class="en">run</span>','<span class="en">ran</span>','<span class="en">run</span>','يركض'],
   ['<span class="en">come</span>','<span class="en">came</span>','<span class="en">come</span>','يأتي']
  ]},
 {type:'box', kind:'tip', t:'لفظ نهاية ed', html:'<b>/t/</b> بعد أصوات مهموسة: <span class="en">worked, stopped, washed</span><br><b>/d/</b> بعد أصوات مجهورة: <span class="en">played, cleaned, opened</span><br><b>/ɪd/</b> بعد <span class="en">t, d</span> فقط: <span class="en">wanted, needed, started</span>'},

 {type:'h', ico:'🎬', t:'4) الماضي المستمر — Past Continuous'},
 {type:'box', kind:'rule', t:'الصيغة والوظيفة', html:'<span class="en">was / were + V-ing</span> — لحدثٍ كان مستمرّاً في الماضي، وغالباً يقطعه حدث قصير بالماضي البسيط.<br><span class="en-blk">I was studying when the lights went out.</span><br>الكلمتان المفتاحيتان: <span class="en">while</span> مع المستمر، و<span class="en">when</span> مع البسيط.'},

 {type:'h', ico:'🚀', t:'5) المستقبل — will / be going to'},
 {type:'table', head:['الصيغة','الاستعمال','مثال'],
  rows:[
   ['<span class="en">will + مصدر</span>','قرار لحظي، وعد، توقّع، عرض مساعدة','<span class="en">I\'ll help you. / It will rain tomorrow.</span>'],
   ['<span class="en">be going to + مصدر</span>','نيّة مُسبقة، أو دليل حاضر على المستقبل','<span class="en">I\'m going to study medicine. / Look at those clouds — it\'s going to rain.</span>']
  ]},

 {type:'h', ico:'📦', t:'6) There is / There are'},
 {type:'box', kind:'rule', t:'القاعدة', html:'<span class="en">There is</span> + مفرد أو غير معدود &nbsp;|&nbsp; <span class="en">There are</span> + جمع<br><span class="en-blk">There is a book on the desk. / There are five books on the desk. / There is some water.</span><br>النفي: <span class="en">There isn\'t / There aren\'t</span> — الماضي: <span class="en">There was / There were</span>.'},

 {type:'h', ico:'🔑', t:'7) الأفعال الناقصة الأساسية — Modals'},
 {type:'table', head:['الفعل','المعنى','مثال'],
  rows:[
   ['<span class="en">can / can\'t</span>','القدرة والإمكانية','<span class="en">I can swim. / She can\'t drive.</span>'],
   ['<span class="en">must</span>','واجب قوي من المتكلّم','<span class="en">You must wear a helmet.</span>'],
   ['<span class="en">mustn\'t</span>','مَنع (محظور!)','<span class="en">You mustn\'t smoke here.</span>'],
   ['<span class="en">have to</span>','واجب من قانون أو ظرف خارجي','<span class="en">I have to wear a uniform.</span>'],
   ['<span class="en">don\'t have to</span>','لا ضرورة (مسموح لكن غير لازم)','<span class="en">You don\'t have to come early.</span>'],
   ['<span class="en">should</span>','نصيحة','<span class="en">You should revise daily.</span>'],
   ['<span class="en">may / might</span>','احتمال','<span class="en">It may rain.</span>']
  ]},
 {type:'box', kind:'warn', t:'أخطر فخّ في الامتحان ⚠️', html:'<span class="en">mustn\'t</span> ≠ <span class="en">don\'t have to</span><br><span class="en">You mustn\'t park here.</span> = ممنوع تماماً.<br><span class="en">You don\'t have to park here.</span> = لست مضطرّاً، لكن لا مانع.'},
 {type:'box', kind:'rule', t:'بعد الفعل الناقص يأتي المصدر مجرّداً', html:'✗ <span class="en">She can to swim.</span> &nbsp; ✗ <span class="en">He must goes.</span><br>✓ <span class="en">She can swim.</span> &nbsp; ✓ <span class="en">He must go.</span>'},

 {type:'h', ico:'❗', t:'8) الأمر — Imperatives'},
 {type:'box', kind:'rule', t:'القاعدة', html:'الفعل المجرّد بلا فاعل: <span class="en">Open the door. / Sit down. / Please be quiet.</span><br>النهي: <span class="en">Don\'t</span> + مصدر: <span class="en">Don\'t touch that!</span><br>الدعوة للمشاركة: <span class="en">Let\'s</span> + مصدر: <span class="en">Let\'s start.</span>'},

 {type:'drill', items:[
   '1) <span class="en">My father ______ (work) in a hospital.</span>',
   '2) <span class="en">Listen! Someone ______ (knock) at the door.</span>',
   '3) <span class="en">We ______ (go) to Aleppo last summer.</span>',
   '4) <span class="en">She ______ (not / like) coffee.</span>',
   '5) <span class="en">I ______ (read) when the phone rang.</span>',
   '6) <span class="en">There ______ three students in the lab.</span>',
   '7) <span class="en">You ______ (not have to) come; it\'s optional.</span>',
   '8) <span class="en">Look at the sky! It ______ (rain) soon.</span>'
 ], answers:'1) <span class="en">works</span> &nbsp;2) <span class="en">is knocking</span> &nbsp;3) <span class="en">went</span> &nbsp;4) <span class="en">doesn\'t like</span> &nbsp;5) <span class="en">was reading</span> &nbsp;6) <span class="en">are</span> &nbsp;7) <span class="en">don\'t have to</span> &nbsp;8) <span class="en">is going to rain</span>'}
],
quiz:[
 {q:'اختر الصحيح: <span class="en">My brother ______ English every evening.</span>', o:['<span class="en">study</span>','<span class="en">studys</span>','<span class="en">studies</span>','<span class="en">studying</span>'], a:2, sk:'grammar',
  e:'ساكن + <span class="en">y</span> ← نحذف <span class="en">y</span> ونضيف <span class="en">ies</span>: <span class="en">studies</span>.'},
 {q:'<span class="en">He doesn\'t ______ to school on Fridays.</span>', o:['<span class="en">goes</span>','<span class="en">go</span>','<span class="en">went</span>','<span class="en">going</span>'], a:1, sk:'grammar',
  e:'بعد <span class="en">doesn\'t</span> يأتي المصدر مجرّداً.'},
 {q:'<span class="en">Look! The children ______ in the garden.</span>', o:['<span class="en">play</span>','<span class="en">plays</span>','<span class="en">are playing</span>','<span class="en">played</span>'], a:2, sk:'grammar',
  e:'<span class="en">Look!</span> تدلّ على حدث يجري الآن ← المضارع المستمر.'},
 {q:'أي جملة <b>خاطئة</b>؟', o:['<span class="en">I know the answer.</span>','<span class="en">I am knowing the answer.</span>','<span class="en">I understand you.</span>','<span class="en">I want some water.</span>'], a:1, sk:'grammar',
  e:'<span class="en">know</span> فعل حالة لا يُستعمل في المستمر.'},
 {q:'الصيغة الصحيحة لـ <span class="en">sit</span> مع <span class="en">-ing</span>:', o:['<span class="en">siting</span>','<span class="en">sitting</span>','<span class="en">siteing</span>','<span class="en">sitteing</span>'], a:1, sk:'grammar',
  e:'فعل قصير (ساكن+علة+ساكن) ← نضاعف الحرف الأخير: <span class="en">sitting</span>.'},
 {q:'<span class="en">Did you ______ the match yesterday?</span>', o:['<span class="en">watched</span>','<span class="en">watch</span>','<span class="en">watching</span>','<span class="en">watches</span>'], a:1, sk:'grammar',
  e:'بعد <span class="en">did</span> يعود الفعل للمصدر.'},
 {q:'الماضي من <span class="en">bring</span> هو:', o:['<span class="en">bringed</span>','<span class="en">brang</span>','<span class="en">brought</span>','<span class="en">brung</span>'], a:2, sk:'vocab',
  e:'<span class="en">bring → brought → brought</span> فعل شاذ.'},
 {q:'<span class="en">You ______ smoke in the hospital. It is forbidden.</span>', o:['<span class="en">don\'t have to</span>','<span class="en">mustn\'t</span>','<span class="en">needn\'t</span>','<span class="en">shouldn\'t have</span>'], a:1, sk:'grammar',
  e:'المنع التام يُعبَّر عنه بـ <span class="en">mustn\'t</span>.'},
 {q:'في أي كلمة تُلفظ نهاية <span class="en">-ed</span> كـ <span class="en">/ɪd/</span>؟', o:['<span class="en">worked</span>','<span class="en">played</span>','<span class="en">wanted</span>','<span class="en">cleaned</span>'], a:2, sk:'pron',
  e:'نهاية <span class="en">/ɪd/</span> تأتي فقط بعد <span class="en">t</span> أو <span class="en">d</span>: <span class="en">wanted</span>.'},
 {q:'<span class="en">There ______ a lot of water in the bottle.</span>', o:['<span class="en">are</span>','<span class="en">is</span>','<span class="en">were</span>','<span class="en">have</span>'], a:1, sk:'grammar',
  e:'<span class="en">water</span> غير معدود ← <span class="en">There is</span>.'},
 {q:'<span class="en">I was cooking ______ my sister was studying.</span>', o:['<span class="en">when</span>','<span class="en">while</span>','<span class="en">before</span>','<span class="en">after</span>'], a:1, sk:'grammar',
  e:'حدثان مستمرّان في الوقت نفسه ← <span class="en">while</span>.'},
 {q:'<span class="en">I have decided: I ______ study engineering.</span>', o:['<span class="en">will</span>','<span class="en">am going to</span>','<span class="en">would</span>','<span class="en">shall have</span>'], a:1, sk:'grammar',
  e:'نيّة مُسبقة مُخطَّط لها ← <span class="en">be going to</span>.'}
]
},
/* ====================== الوحدة 7 ====================== */
{ id:'f7', t:'Everyday English', ta:'الوحدة 7 — الإنجليزية في الحياة اليومية', tag:'مفردات وتعابير',
blocks:[
 {type:'text', html:'في هذه الوحدة ننتقل من القاعدة إلى <b>الاستعمال</b>. سنبني حصيلة من المفردات المرتّبة في حقول دلالية (<span class="en">word families</span>)، ونتعلّم <b>التعابير الوظيفية</b> (<span class="en">language functions</span>) التي يسألك عنها الامتحان مباشرة: كيف تطلب، كيف ترفض بلطف، كيف تقترح، كيف تعتذر.'},

 {type:'h', ico:'👨‍👩‍👧', t:'1) العائلة والناس'},
 {type:'vocab', items:[
   ['<span class="en">parents</span>','الوالدان'], ['<span class="en">relatives</span>','الأقارب'],
   ['<span class="en">cousin</span>','ابن/ابنة العم أو الخال'], ['<span class="en">nephew</span>','ابن الأخ/الأخت'],
   ['<span class="en">niece</span>','ابنة الأخ/الأخت'], ['<span class="en">neighbour</span>','الجار'],
   ['<span class="en">colleague</span>','الزميل في العمل'], ['<span class="en">guest</span>','الضيف'],
   ['<span class="en">generous</span>','كريم'], ['<span class="en">polite</span>','مهذّب'],
   ['<span class="en">patient</span>','صبور'], ['<span class="en">honest</span>','صادق / أمين']
 ]},
 {type:'box', kind:'warn', t:'انتبه', html:'<span class="en">sensible</span> = عاقل، و<span class="en">sensitive</span> = حسّاس. كلمتان مختلفتان تماماً!'},

 {type:'h', ico:'🏫', t:'2) الدراسة والمدرسة'},
 {type:'vocab', items:[
   ['<span class="en">subject</span>','مادة دراسية'], ['<span class="en">lesson</span>','درس'],
   ['<span class="en">homework</span>','واجب منزلي (غير معدود)'], ['<span class="en">revise</span>','يراجع'],
   ['<span class="en">pass / fail</span>','ينجح / يرسب'], ['<span class="en">mark / grade</span>','علامة'],
   ['<span class="en">certificate</span>','شهادة'], ['<span class="en">effort</span>','جهد'],
   ['<span class="en">achieve</span>','يُحقّق'], ['<span class="en">improve</span>','يُحسّن / يتحسّن'],
   ['<span class="en">concentrate</span>','يُركّز'], ['<span class="en">attend</span>','يحضر']
 ]},

 {type:'h', ico:'🏥', t:'3) الصحة والجسم'},
 {type:'vocab', items:[
   ['<span class="en">headache</span>','صداع'], ['<span class="en">stomachache</span>','ألم في المعدة'],
   ['<span class="en">fever</span>','حمّى'], ['<span class="en">cough</span>','سعال'],
   ['<span class="en">medicine</span>','دواء'], ['<span class="en">prescription</span>','وصفة طبية'],
   ['<span class="en">treatment</span>','علاج'], ['<span class="en">healthy diet</span>','نظام غذائي صحي'],
   ['<span class="en">exercise</span>','تمرين رياضي'], ['<span class="en">recover</span>','يتعافى']
 ]},
 {type:'box', kind:'tip', t:'تعبير مهم', html:'نقول <span class="en">I have a headache</span> (بـ <span class="en">a</span>)، لكن <span class="en">I have toothache / I have flu</span> غالباً بلا أداة في الإنجليزية البريطانية.'},

 {type:'h', ico:'🛒', t:'4) التسوّق والمال'},
 {type:'vocab', items:[
   ['<span class="en">customer</span>','زبون'], ['<span class="en">shop assistant</span>','بائع'],
   ['<span class="en">price</span>','سعر'], ['<span class="en">expensive / cheap</span>','غالٍ / رخيص'],
   ['<span class="en">discount</span>','حسم'], ['<span class="en">receipt</span>','إيصال'],
   ['<span class="en">afford</span>','يقدر على الشراء'], ['<span class="en">spend / save</span>','يُنفق / يدّخر'],
   ['<span class="en">bargain</span>','صفقة رابحة'], ['<span class="en">cash</span>','نقداً']
 ]},

 {type:'h', ico:'🌍', t:'5) البيئة والسفر'},
 {type:'vocab', items:[
   ['<span class="en">pollution</span>','تلوّث'], ['<span class="en">recycle</span>','يُعيد التدوير'],
   ['<span class="en">waste</span>','نفايات / يُبذّر'], ['<span class="en">environment</span>','بيئة'],
   ['<span class="en">protect</span>','يحمي'], ['<span class="en">energy</span>','طاقة'],
   ['<span class="en">journey / trip</span>','رحلة'], ['<span class="en">luggage</span>','أمتعة (غير معدود)'],
   ['<span class="en">passport</span>','جواز سفر'], ['<span class="en">abroad</span>','في الخارج']
 ]},

 {type:'h', ico:'💬', t:'6) التعابير الوظيفية — Language Functions'},
 {type:'table', head:['الوظيفة','التعبير','الردّ المناسب'],
  rows:[
   ['طلب مهذّب','<span class="en">Could you please open the window?</span>','<span class="en">Certainly. / Of course.</span>'],
   ['طلب إذن','<span class="en">May I come in?</span>','<span class="en">Yes, please do.</span>'],
   ['اقتراح','<span class="en">Why don\'t we study together?</span>','<span class="en">That\'s a good idea.</span>'],
   ['عرض مساعدة','<span class="en">Shall I carry that for you?</span>','<span class="en">Yes, please. / No, thanks.</span>'],
   ['دعوة','<span class="en">Would you like to join us?</span>','<span class="en">I\'d love to. / I\'m afraid I can\'t.</span>'],
   ['اعتذار','<span class="en">I\'m sorry for being late.</span>','<span class="en">Never mind. / It\'s all right.</span>'],
   ['شكر','<span class="en">Thanks a lot for your help.</span>','<span class="en">You\'re welcome. / Not at all.</span>'],
   ['نصيحة','<span class="en">You\'d better see a doctor.</span>','<span class="en">I think you\'re right.</span>'],
   ['موافقة','<span class="en">I totally agree with you.</span>','—'],
   ['اعتراض مهذّب','<span class="en">I\'m afraid I don\'t agree.</span>','—']
  ]},
 {type:'box', kind:'warn', t:'فخّ شائع ⚠️', html:'الرفض المهذّب لا يكون بـ <span class="en">No!</span> المجرّدة. نقول:<br><span class="en-blk">I\'m afraid I can\'t. / I\'d love to, but I\'m busy.</span>'},

 {type:'dialog', lines:[
   ['Ali','Excuse me, could you tell me the way to the library?','عفواً، هل يمكنك أن تدلّني على الطريق إلى المكتبة؟'],
   ['Man','Certainly. Go straight on, then turn left at the traffic lights.','بالتأكيد. امشِ مباشرةً، ثم انعطف يساراً عند الإشارة.'],
   ['Ali','Is it far from here?','هل هي بعيدة من هنا؟'],
   ['Man','Not at all. It\'s about five minutes on foot.','أبداً. حوالي خمس دقائق سيراً على الأقدام.'],
   ['Ali','Thank you very much for your help.','شكراً جزيلاً على مساعدتك.'],
   ['Man','You\'re welcome. Have a nice day!','على الرحب والسعة. نهارك سعيد!']
 ]},

 {type:'h', ico:'🔗', t:'7) أدوات الربط الأساسية — Linking Words'},
 {type:'table', head:['المعنى','الأدوات','مثال'],
  rows:[
   ['إضافة','<span class="en">and, also, in addition, moreover</span>','<span class="en">He is clever and hard-working.</span>'],
   ['تضاد','<span class="en">but, however, although, on the other hand</span>','<span class="en">Although he was tired, he studied.</span>'],
   ['سبب','<span class="en">because, since, as, due to</span>','<span class="en">I stayed home because it was raining.</span>'],
   ['نتيجة','<span class="en">so, therefore, as a result</span>','<span class="en">It rained, so we stayed home.</span>'],
   ['غاية','<span class="en">to, in order to, so that</span>','<span class="en">I study hard in order to succeed.</span>'],
   ['ترتيب','<span class="en">first, then, after that, finally</span>','<span class="en">First, boil the water.</span>']
  ]},
 {type:'box', kind:'warn', t:'فخّ نحوي', html:'<span class="en">because</span> + جملة كاملة &nbsp;|&nbsp; <span class="en">because of</span> + اسم<br>✓ <span class="en">because it was cold</span> &nbsp;&nbsp; ✓ <span class="en">because of the cold</span>'},

 {type:'drill', items:[
   '1) اختر الأنسب: ______ <span class="en">you please help me?</span>',
   '2) ردّ مهذّب على دعوة لا تستطيع تلبيتها: ______',
   '3) <span class="en">He failed ______ he didn\'t revise.</span>',
   '4) <span class="en">I have a bad ______ ; I can\'t stop coughing.</span>',
   '5) <span class="en">______ it was expensive, she bought it.</span>'
 ], answers:'1) <span class="en">Could</span> &nbsp;2) <span class="en">I\'d love to, but I\'m afraid I can\'t.</span> &nbsp;3) <span class="en">because</span> &nbsp;4) <span class="en">cough</span> &nbsp;5) <span class="en">Although</span>'}
],
quiz:[
 {q:'<span class="en">______ you please pass me the salt?</span>', o:['<span class="en">Must</span>','<span class="en">Could</span>','<span class="en">Should</span>','<span class="en">May</span>'], a:1, sk:'func',
  e:'<span class="en">Could you please…</span> هي الصيغة القياسية للطلب المهذّب.'},
 {q:'الردّ الأنسب على <span class="en">"Thanks a lot for your help."</span>', o:['<span class="en">Never mind.</span>','<span class="en">You\'re welcome.</span>','<span class="en">I\'m afraid not.</span>','<span class="en">Good luck.</span>'], a:1, sk:'func',
  e:'<span class="en">You\'re welcome</span> أو <span class="en">Not at all</span> ردّ الشكر.'},
 {q:'<span class="en">"Would you like to come to my party?"</span> — رفض مهذّب:', o:['<span class="en">No, I don\'t want.</span>','<span class="en">I\'d love to, but I\'m busy.</span>','<span class="en">Never mind.</span>','<span class="en">Of course not.</span>'], a:1, sk:'func',
  e:'الرفض المهذّب يبدأ بالشكر أو الرغبة ثم العذر.'},
 {q:'<span class="en">She is very ______ ; she always tells the truth.</span>', o:['<span class="en">generous</span>','<span class="en">honest</span>','<span class="en">patient</span>','<span class="en">sensitive</span>'], a:1, sk:'vocab',
  e:'<span class="en">honest</span> = صادق/أمين.'},
 {q:'<span class="en">I couldn\'t ______ the new phone; it was too expensive.</span>', o:['<span class="en">spend</span>','<span class="en">afford</span>','<span class="en">save</span>','<span class="en">waste</span>'], a:1, sk:'vocab',
  e:'<span class="en">afford</span> = يقدر مالياً على الشراء.'},
 {q:'<span class="en">______ the heavy rain, the match was cancelled.</span>', o:['<span class="en">Because</span>','<span class="en">Because of</span>','<span class="en">Although</span>','<span class="en">So</span>'], a:1, sk:'grammar',
  e:'قبل الاسم نستعمل <span class="en">because of</span>.'},
 {q:'<span class="en">______ he was ill, he came to school.</span>', o:['<span class="en">Although</span>','<span class="en">Because</span>','<span class="en">So</span>','<span class="en">Therefore</span>'], a:0, sk:'grammar',
  e:'العلاقة تضاد ← <span class="en">Although</span>.'},
 {q:'<span class="en">We should ______ paper and plastic to protect the environment.</span>', o:['<span class="en">waste</span>','<span class="en">recycle</span>','<span class="en">pollute</span>','<span class="en">spend</span>'], a:1, sk:'vocab',
  e:'<span class="en">recycle</span> = يُعيد التدوير.'},
 {q:'اختر الكلمة غير المعدودة:', o:['<span class="en">suitcase</span>','<span class="en">luggage</span>','<span class="en">ticket</span>','<span class="en">passport</span>'], a:1, sk:'vocab',
  e:'<span class="en">luggage</span> اسم جمعي غير معدود؛ لا نقول <span class="en">luggages</span>.'},
 {q:'<span class="en">"Shall I help you with those bags?"</span> هذه الجملة تُعبّر عن:', o:['طلب','عرض مساعدة','اعتذار','شكوى'], a:1, sk:'func',
  e:'<span class="en">Shall I…?</span> صيغة عرض المساعدة.'},
 {q:'<span class="en">The doctor gave me a ______ for the medicine.</span>', o:['<span class="en">receipt</span>','<span class="en">prescription</span>','<span class="en">certificate</span>','<span class="en">discount</span>'], a:1, sk:'vocab',
  e:'<span class="en">prescription</span> = وصفة طبية؛ <span class="en">receipt</span> = إيصال شراء.'},
 {q:'<span class="en">You\'d better ______ earlier if you want to pass.</span>', o:['<span class="en">to revise</span>','<span class="en">revising</span>','<span class="en">revise</span>','<span class="en">revised</span>'], a:2, sk:'grammar',
  e:'بعد <span class="en">had better</span> يأتي المصدر بلا <span class="en">to</span>.'}
]
},
/* ====================== الوحدة 8 ====================== */
{ id:'f8', t:'Review & Beyond', ta:'الوحدة 8 — المراجعة الشاملة والانطلاق', tag:'تثبيت قبل الانتقال',
blocks:[
 {type:'text', html:'هذه الوحدة الأخيرة في قسم التأسيس. هدفها <b>تثبيت</b> ما بنيناه، و<b>تصحيح</b> أشهر الأخطاء التي يقع فيها الطالب العربي، ثم فتح الباب نحو قسمك (التاسع، العلمي، الأدبي). اقرأها بتأنٍّ؛ فهي خلاصة الوحدات السبع السابقة.'},

 {type:'h', ico:'🧭', t:'1) خريطة الجملة الإنجليزية'},
 {type:'box', kind:'rule', t:'الترتيب الذهبي', html:'<b>فاعل + فعل + مفعول + كيف + أين + متى</b><br><span class="en-blk">She&nbsp;|&nbsp;read&nbsp;|&nbsp;the book&nbsp;|&nbsp;carefully&nbsp;|&nbsp;in the library&nbsp;|&nbsp;yesterday.</span><br>الجملة الإنجليزية <b>لا تبدأ بالفعل</b> كما في العربية، ولا تخلو من فاعل أبداً.'},
 {type:'box', kind:'warn', t:'أخطاء الترجمة الحرفية من العربية', html:'✗ <span class="en">Went Ahmad to school.</span> → ✓ <span class="en">Ahmad went to school.</span><br>✗ <span class="en">The weather beautiful.</span> → ✓ <span class="en">The weather is beautiful.</span><br>✗ <span class="en">I have 17 years.</span> → ✓ <span class="en">I am 17 years old.</span><br>✗ <span class="en">I am agree.</span> → ✓ <span class="en">I agree.</span><br>✗ <span class="en">The people is kind.</span> → ✓ <span class="en">People are kind.</span><br>✗ <span class="en">Every students</span> → ✓ <span class="en">Every student</span>'},

 {type:'h', ico:'📊', t:'2) جدول الأزمنة في صفحة واحدة'},
 {type:'table', head:['الزمن','الصيغة','الكلمات الدالّة'],
  rows:[
   ['Present Simple','<span class="en">V / V-s</span>','<span class="en">always, usually, every day</span>'],
   ['Present Continuous','<span class="en">am/is/are + V-ing</span>','<span class="en">now, at the moment, Look!</span>'],
   ['Past Simple','<span class="en">V2</span>','<span class="en">yesterday, last…, ago, in 2019</span>'],
   ['Past Continuous','<span class="en">was/were + V-ing</span>','<span class="en">while, when, at 8 o\'clock yesterday</span>'],
   ['Future (will)','<span class="en">will + V</span>','<span class="en">tomorrow, next…, I think, probably</span>'],
   ['Future (going to)','<span class="en">am/is/are going to + V</span>','نيّة أو دليل حاضر'],
   ['Present Perfect','<span class="en">have/has + V3</span>','<span class="en">just, already, yet, ever, never, since, for</span>']
  ]},
 {type:'box', kind:'tip', t:'لمحة عن المضارع التام', html:'<span class="en">have/has + V3</span> يربط الماضي بالحاضر:<br><span class="en-blk">I have finished my homework. (انتهيت والنتيجة الآن)</span><br><span class="en">since</span> + نقطة بداية (<span class="en">since 2020</span>) &nbsp;|&nbsp; <span class="en">for</span> + مدّة (<span class="en">for two years</span>).<br>ستدرسه بتوسّع في قسمك.'},

 {type:'h', ico:'🔁', t:'3) المبني للمجهول — لمحة تأسيسية'},
 {type:'box', kind:'rule', t:'القاعدة', html:'<span class="en">be</span> (بزمن الفعل الأصلي) + التصريف الثالث.<br><span class="en-blk">They built the bridge in 1990. → The bridge was built in 1990.</span><br>نذكر الفاعل بـ <span class="en">by</span> فقط إذا كان مهمّاً.'},
 {type:'table', head:['المعلوم','المجهول'],
  rows:[
   ['<span class="en">They make cars here.</span>','<span class="en">Cars are made here.</span>'],
   ['<span class="en">Someone stole my bag.</span>','<span class="en">My bag was stolen.</span>'],
   ['<span class="en">They will open the school.</span>','<span class="en">The school will be opened.</span>']
  ]},

 {type:'h', ico:'🗣️', t:'4) الكلام المنقول — لمحة تأسيسية'},
 {type:'box', kind:'rule', t:'القاعدة المختصرة', html:'يتراجع الزمن خطوةً إلى الوراء، وتتغيّر الضمائر وظروف الزمان.<br><span class="en-blk">"I am tired," he said. → He said (that) he was tired.</span><br><span class="en">now → then, today → that day, tomorrow → the next day, here → there</span>'},

 {type:'h', ico:'🎯', t:'5) الجمل الشرطية — النوعان الأوّلان'},
 {type:'table', head:['النوع','الصيغة','المعنى'],
  rows:[
   ['الأول','<span class="en">If + present simple, will + V</span>','شرط ممكن الحدوث: <span class="en">If you study, you will pass.</span>'],
   ['الثاني','<span class="en">If + past simple, would + V</span>','شرط متخيّل: <span class="en">If I were rich, I would travel.</span>']
  ]},
 {type:'box', kind:'warn', t:'فخّ', html:'لا نضع <span class="en">will</span> بعد <span class="en">if</span> في النوع الأول:<br>✗ <span class="en">If you will study…</span> &nbsp;&nbsp; ✓ <span class="en">If you study…</span>'},

 {type:'h', ico:'🧩', t:'6) الاشتقاق — من الكلمة إلى عائلتها'},
 {type:'table', head:['فعل','اسم','صفة','ظرف'],
  rows:[
   ['<span class="en">succeed</span>','<span class="en">success</span>','<span class="en">successful</span>','<span class="en">successfully</span>'],
   ['<span class="en">decide</span>','<span class="en">decision</span>','<span class="en">decisive</span>','<span class="en">decisively</span>'],
   ['<span class="en">educate</span>','<span class="en">education</span>','<span class="en">educational</span>','—'],
   ['<span class="en">care</span>','<span class="en">care</span>','<span class="en">careful / careless</span>','<span class="en">carefully</span>'],
   ['<span class="en">protect</span>','<span class="en">protection</span>','<span class="en">protective</span>','—'],
   ['<span class="en">differ</span>','<span class="en">difference</span>','<span class="en">different</span>','<span class="en">differently</span>']
  ]},
 {type:'box', kind:'tip', t:'لواحق تدلّ على نوع الكلمة', html:'أسماء: <span class="en">-tion, -ment, -ness, -ity, -ance</span><br>صفات: <span class="en">-ful, -less, -ous, -ive, -al, -able</span><br>ظروف: <span class="en">-ly</span> &nbsp;|&nbsp; أفعال: <span class="en">-ise/-ize, -en, -ify</span>'},

 {type:'h', ico:'📝', t:'7) خطوات ذهبية قبل الانتقال إلى قسمك'},
 {type:'steps', items:[
   'راجع جدول الأزمنة حتى تستطيع ملء الصيغة والكلمات الدالّة من ذاكرتك.',
   'احفظ قائمة الأفعال الشاذة (الوحدة 6) بمعدّل خمسة أفعال يومياً.',
   'اكتب كل يوم خمس جمل عن يومك بأزمنة مختلفة، وراجعها بنفسك.',
   'اقرأ نصّاً إنجليزياً قصيراً يومياً، واستخرج منه خمس كلمات جديدة بعائلتها الاشتقاقية.',
   'سجّل أخطاءك المتكرّرة في دفتر صغير اسمه «دفتر الأخطاء»، وراجعه قبل كل اختبار.',
   'بعد اجتياز اختبارات التأسيس، انتقل إلى قسمك: التاسع، أو البكالوريا العلمي، أو البكالوريا الأدبي.'
 ]},

 {type:'drill', items:[
   '1) حوّل إلى المجهول: <span class="en">They clean the classroom every day.</span>',
   '2) <span class="en">If it ______ (rain), we will stay at home.</span>',
   '3) اشتقّ الاسم من <span class="en">decide</span>.',
   '4) صحّح: <span class="en">I have 18 years.</span>',
   '5) حوّل إلى كلام منقول: <span class="en">"I am busy," she said.</span>',
   '6) <span class="en">She has lived here ______ 2015.</span>'
 ], answers:'1) <span class="en">The classroom is cleaned every day.</span> &nbsp;2) <span class="en">rains</span> &nbsp;3) <span class="en">decision</span> &nbsp;4) <span class="en">I am 18 years old.</span> &nbsp;5) <span class="en">She said (that) she was busy.</span> &nbsp;6) <span class="en">since</span>'},

 {type:'box', kind:'note', t:'كلمة من الأستاذ أحمد', html:'إذا وصلتَ إلى هنا فقد بنيتَ أساساً متيناً. تذكّر: الإنجليزية لا تُحفظ، بل تُمارَس. راجع يومياً ولو خمس عشرة دقيقة، وستلمس الفرق خلال شهر. وفّقك الله.'}
],
quiz:[
 {q:'الترتيب الصحيح للجملة:', o:['<span class="en">Went Ahmad to school yesterday.</span>','<span class="en">Ahmad went to school yesterday.</span>','<span class="en">Ahmad to school went yesterday.</span>','<span class="en">Yesterday went Ahmad school.</span>'], a:1, sk:'grammar',
  e:'الجملة الإنجليزية تبدأ بالفاعل ثم الفعل.'},
 {q:'المجهول من <span class="en">They built the school in 1990.</span>', o:['<span class="en">The school is built in 1990.</span>','<span class="en">The school was built in 1990.</span>','<span class="en">The school built in 1990.</span>','<span class="en">The school has built in 1990.</span>'], a:1, sk:'grammar',
  e:'الفعل ماضٍ ← <span class="en">was/were + V3</span>.'},
 {q:'<span class="en">If you ______ hard, you will succeed.</span>', o:['<span class="en">will study</span>','<span class="en">study</span>','<span class="en">studied</span>','<span class="en">would study</span>'], a:1, sk:'grammar',
  e:'الشرط الأول: <span class="en">If + present simple, will + V</span>.'},
 {q:'<span class="en">If I ______ you, I would accept the offer.</span>', o:['<span class="en">am</span>','<span class="en">was</span>','<span class="en">were</span>','<span class="en">will be</span>'], a:2, sk:'grammar',
  e:'في الشرط الثاني نستعمل <span class="en">were</span> مع جميع الضمائر.'},
 {q:'الكلام المنقول لـ <span class="en">"I am tired," he said.</span>', o:['<span class="en">He said he is tired.</span>','<span class="en">He said he was tired.</span>','<span class="en">He says he was tired.</span>','<span class="en">He said I am tired.</span>'], a:1, sk:'grammar',
  e:'يتراجع الزمن خطوة: <span class="en">am → was</span>.'},
 {q:'الاسم المشتق من <span class="en">succeed</span>:', o:['<span class="en">successful</span>','<span class="en">successfully</span>','<span class="en">success</span>','<span class="en">succeeding</span>'], a:2, sk:'vocab',
  e:'<span class="en">success</span> اسم، و<span class="en">successful</span> صفة.'},
 {q:'<span class="en">She has worked here ______ five years.</span>', o:['<span class="en">since</span>','<span class="en">for</span>','<span class="en">ago</span>','<span class="en">from</span>'], a:1, sk:'grammar',
  e:'<span class="en">for</span> + مدّة، <span class="en">since</span> + نقطة بداية.'},
 {q:'أي جملة صحيحة؟', o:['<span class="en">Every students must attend.</span>','<span class="en">Every student must attend.</span>','<span class="en">Every student must attends.</span>','<span class="en">Every students must attends.</span>'], a:1, sk:'grammar',
  e:'<span class="en">Every</span> + مفرد، وبعد <span class="en">must</span> مصدر مجرّد.'},
 {q:'<span class="en">The weather ______ beautiful today.</span>', o:['—','<span class="en">is</span>','<span class="en">are</span>','<span class="en">has</span>'], a:1, sk:'grammar',
  e:'الجملة الإنجليزية لا تخلو من فعل؛ نحتاج <span class="en">is</span>.'},
 {q:'اللاحقة التي تُكوّن ظرفاً غالباً:', o:['<span class="en">-ful</span>','<span class="en">-ness</span>','<span class="en">-ly</span>','<span class="en">-tion</span>'], a:2, sk:'vocab',
  e:'<span class="en">-ly</span> لاحقة الظروف: <span class="en">quickly, carefully</span>.'},
 {q:'<span class="en">My bag ______ yesterday.</span>', o:['<span class="en">stole</span>','<span class="en">was stolen</span>','<span class="en">is stolen</span>','<span class="en">has stole</span>'], a:1, sk:'grammar',
  e:'مجهول في الماضي: <span class="en">was + stolen</span>.'},
 {q:'<span class="en">I ______ my homework, so I can watch TV now.</span>', o:['<span class="en">finish</span>','<span class="en">have finished</span>','<span class="en">was finishing</span>','<span class="en">will finish</span>'], a:1, sk:'grammar',
  e:'ماضٍ له أثر في الحاضر ← المضارع التام.'}
]
}
];
