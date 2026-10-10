/* ===== قسم كتابة المواضيع — من الصفر حتى الإتقان — 8 مراحل ===== */
var DATA_WRITING = [

/* ===================== المرحلة 1 ===================== */
{ id:'w1', t:'The Correct Sentence', ta:'المرحلة 1 — الجملة الصحيحة', tag:'حجر الأساس',
blocks:[
 {type:'text', html:'لا يوجد موضوع جيّد مبنيّ من جمل خاطئة. فلنبنِ أولاً <b>الجملة الإنجليزية السليمة</b>، ثم الفقرة، ثم الموضوع الكامل. اتبع هذه المراحل بالترتيب ولا تتجاوز مرحلةً قبل إتقانها.'},
 {type:'h', ico:'🧱', t:'1) أركان الجملة'},
 {type:'box', kind:'rule', t:'القاعدة الأم', html:'كل جملة إنجليزية تحتاج <b>فاعلاً</b> و<b>فعلاً</b>، ولا تبدأ بالفعل كما في العربية.<br><span class="en-blk">The weather is cold. (لا نقول: The weather cold)<br>Ahmad went to school. (لا نقول: Went Ahmad to school)</span>'},
 {type:'box', kind:'rule', t:'الترتيب الذهبي', html:'<b>فاعل + فعل + مفعول + كيف + أين + متى</b><br><span class="en-blk">She&nbsp;|&nbsp;wrote&nbsp;|&nbsp;the essay&nbsp;|&nbsp;carefully&nbsp;|&nbsp;at home&nbsp;|&nbsp;last night.</span>'},
 {type:'h', ico:'⚠️', t:'2) أخطاء المترجم الحرفي'},
 {type:'table', head:['خطأ','صواب','السبب'],
  rows:[
   ['<span class="en">I have 17 years.</span>','<span class="en">I am 17 years old.</span>','العمر بـ <span class="en">be</span> لا <span class="en">have</span>'],
   ['<span class="en">I am agree.</span>','<span class="en">I agree.</span>','<span class="en">agree</span> فعل لا صفة'],
   ['<span class="en">The people is kind.</span>','<span class="en">People are kind.</span>','<span class="en">people</span> جمع'],
   ['<span class="en">Every students</span>','<span class="en">Every student</span>','<span class="en">every</span> + مفرد'],
   ['<span class="en">I will going</span>','<span class="en">I will go / I am going</span>','لا نجمع صيغتين'],
   ['<span class="en">He can to swim.</span>','<span class="en">He can swim.</span>','بعد الناقص مصدر مجرّد'],
   ['<span class="en">an advice</span>','<span class="en">a piece of advice</span>','غير معدود'],
   ['<span class="en">informations</span>','<span class="en">information</span>','غير معدود'],
   ['<span class="en">He discussed about it.</span>','<span class="en">He discussed it.</span>','<span class="en">discuss</span> متعدٍّ بلا حرف'],
   ['<span class="en">In my opinion I think</span>','<span class="en">In my opinion, …</span>','حشو']
  ]},
 {type:'h', ico:'🔀', t:'3) من الجملة البسيطة إلى المركّبة'},
 {type:'table', head:['النوع','التركيب','مثال'],
  rows:[
   ['بسيطة','فاعل + فعل','<span class="en">Reading improves the mind.</span>'],
   ['مركّبة بالعطف','جملة + <span class="en">and/but/so/or</span> + جملة','<span class="en">He studied hard, so he passed.</span>'],
   ['معقّدة بالربط','رابط + جملة تابعة','<span class="en">Although he was tired, he studied.</span>'],
   ['بضمير وصل','اسم + <span class="en">who/which/that</span>','<span class="en">A student who reads daily improves fast.</span>'],
   ['ببداية ظرفية','ظرف + فاصلة + جملة','<span class="en">Nowadays, technology is everywhere.</span>']
  ]},
 {type:'box', kind:'tip', t:'سرّ الأسلوب الراقي', html:'لا تجعل كل جملك قصيرة ولا كلّها طويلة. <b>نوّع</b>: جملة قصيرة تلفت النظر، ثم جملة أطول تشرح. هذا التنويع وحده يرفع علامة التعبير.'},
 {type:'h', ico:'🔗', t:'4) أدوات الربط الأساسية'},
 {type:'table', head:['المعنى','الأدوات'],
  rows:[
   ['إضافة','<span class="en">and, also, in addition, moreover, furthermore, besides</span>'],
   ['تضاد','<span class="en">but, however, although, though, whereas, on the contrary</span>'],
   ['سبب','<span class="en">because, since, as, due to, because of</span>'],
   ['نتيجة','<span class="en">so, therefore, thus, as a result, consequently</span>'],
   ['غاية','<span class="en">to, in order to, so as to, so that</span>'],
   ['تمثيل','<span class="en">for example, for instance, such as, namely</span>'],
   ['ترتيب','<span class="en">first, then, after that, next, finally</span>'],
   ['إجمال','<span class="en">in short, to sum up, in conclusion, all in all</span>']
  ]},
 {type:'box', kind:'warn', t:'فخّ الربط', html:'<span class="en">because</span> + جملة &nbsp;|&nbsp; <span class="en">because of</span> + اسم<br><span class="en">although</span> + جملة &nbsp;|&nbsp; <span class="en">despite / in spite of</span> + اسم أو <span class="en">V-ing</span><br>✗ <span class="en">Although of the rain</span> &nbsp; ✓ <span class="en">Despite the rain</span>'},
 {type:'drill', items:[
  '1) صحّح: <span class="en">I have 16 years and I am agree with you.</span>',
  '2) صحّح: <span class="en">Although of the noise, he studied.</span>',
  '3) ادمج بـ <span class="en">who</span>: <span class="en">I know a student. He reads daily.</span>',
  '4) اربط بـ <span class="en">so</span>: <span class="en">It rained heavily. We stayed at home.</span>',
  '5) أعد ترتيب: <span class="en">yesterday / the letter / wrote / she / carefully</span>'
 ], answers:'1) <span class="en">I am 16 years old and I agree with you.</span> &nbsp;2) <span class="en">Despite the noise, he studied.</span> &nbsp;3) <span class="en">I know a student who reads daily.</span> &nbsp;4) <span class="en">It rained heavily, so we stayed at home.</span> &nbsp;5) <span class="en">She wrote the letter carefully yesterday.</span>'}
],
quiz:[
 {q:'الجملة الصحيحة:', o:['<span class="en">The weather cold today.</span>','<span class="en">The weather is cold today.</span>','<span class="en">Cold the weather today.</span>','<span class="en">Is the weather cold today.</span>'], a:1, sk:'writing', e:'لا جملة إنجليزية بلا فعل.'},
 {q:'<span class="en">______ the heavy rain, the match continued.</span>', o:['<span class="en">Although</span>','<span class="en">Despite</span>','<span class="en">Because</span>','<span class="en">However</span>'], a:1, sk:'writing', e:'قبل الاسم نستعمل <span class="en">Despite / In spite of</span>.'},
 {q:'<span class="en">He was tired. ______ , he finished the work.</span>', o:['<span class="en">Because</span>','<span class="en">However</span>','<span class="en">So that</span>','<span class="en">Due to</span>'], a:1, sk:'writing', e:'<span class="en">However</span> رابط تضاد بين جملتين.'},
 {q:'أي جملة صحيحة؟', o:['<span class="en">I have 18 years.</span>','<span class="en">I am 18 years old.</span>','<span class="en">I am 18 years.</span>','<span class="en">I have 18 years old.</span>'], a:1, sk:'writing', e:'العمر يُعبَّر عنه بـ <span class="en">be … years old</span>.'},
 {q:'<span class="en">He succeeded ______ his hard work.</span>', o:['<span class="en">because</span>','<span class="en">because of</span>','<span class="en">although</span>','<span class="en">so</span>'], a:1, sk:'writing', e:'<span class="en">his hard work</span> اسم ← <span class="en">because of</span>.'},
 {q:'الترتيب الصحيح:', o:['<span class="en">She carefully the essay wrote.</span>','<span class="en">She wrote carefully the essay.</span>','<span class="en">She wrote the essay carefully.</span>','<span class="en">Wrote she the essay carefully.</span>'], a:2, sk:'writing', e:'فاعل + فعل + مفعول + كيف.'},
 {q:'<span class="en">He discussed ______ the problem.</span>', o:['<span class="en">about</span>','<span class="en">on</span>','—','<span class="en">of</span>'], a:2, sk:'writing', e:'<span class="en">discuss</span> فعل متعدٍّ بلا حرف جر.'},
 {q:'أي كلمة غير معدودة؟', o:['<span class="en">suggestion</span>','<span class="en">information</span>','<span class="en">idea</span>','<span class="en">reason</span>'], a:1, sk:'writing', e:'<span class="en">information</span> غير معدودة؛ لا نقول <span class="en">informations</span>.'},
 {q:'أفضل أسلوب في التعبير:', o:['جمل قصيرة كلّها','جمل طويلة كلّها','تنويع بين القصيرة والطويلة','جملة واحدة طويلة جداً'], a:2, sk:'writing', e:'التنويع يرفع جودة الأسلوب.'},
 {q:'<span class="en">Every ______ must bring a pen.</span>', o:['<span class="en">students</span>','<span class="en">student</span>','<span class="en">of students</span>','<span class="en">the students</span>'], a:1, sk:'writing', e:'<span class="en">Every</span> + مفرد.'}
]
},

/* ===================== المرحلة 2 ===================== */
{ id:'w2', t:'The Paragraph', ta:'المرحلة 2 — الفقرة المتكاملة', tag:'بنية ثلاثية',
blocks:[
 {type:'text', html:'الفقرة مجموعة جمل تخدم <b>فكرةً واحدة</b>. من أشهر أخطاء الطلبة أن يحشروا ثلاث أفكار في فقرة واحدة، فتضيع العلامة. القاعدة: <b>فقرة واحدة = فكرة واحدة</b>.'},
 {type:'h', ico:'🏛️', t:'1) البنية الثلاثية'},
 {type:'table', head:['الجزء','وظيفته','مثال'],
  rows:[
   ['<span class="en">Topic sentence</span>','تعلن الفكرة','<span class="en">Reading daily has three clear benefits.</span>'],
   ['<span class="en">Supporting sentences</span>','شرح + دليل + مثال','<span class="en">First, it widens vocabulary… For instance, …</span>'],
   ['<span class="en">Concluding sentence</span>','تُجمل وتُغلق','<span class="en">In short, a daily reading habit pays off.</span>']
  ]},
 {type:'box', kind:'rule', t:'ترتيب الجمل الداعمة', html:'استعمل <b>سلّم الروابط</b>: <span class="en">First, … Second, … Moreover, … For example, … Finally, …</span><br>كلّ جملة داعمة تفعل واحداً من ثلاثة: <b>تشرح</b>، أو <b>تُدلّل</b>، أو <b>تُمثّل</b>.'},
 {type:'h', ico:'🧩', t:'2) التماسك والترابط'},
 {type:'box', kind:'tip', t:'ثلاث وسائل', html:'1) <b>الروابط</b>: <span class="en">however, therefore, in addition</span>.<br>2) <b>الضمائر</b>: استعمل <span class="en">it, they, this</span> بدل تكرار الاسم.<br>3) <b>تكرار الكلمة المفتاحية</b> ومشتقّاتها: <span class="en">read → reading → reader</span>.'},
 {type:'h', ico:'📄', t:'3) نموذج فقرة محكمة'},
 {type:'box', kind:'ex', t:'The Importance of Reading', html:'<span class="en-blk">Reading daily is one of the best habits a student can build. First, it widens vocabulary, because a reader meets new words in natural contexts rather than in lists. Second, it sharpens concentration; a person who reads for thirty minutes without interruption trains the mind to stay focused. Moreover, reading opens windows onto other cultures and ways of thinking. For instance, a single novel can teach more about a society than a long lecture. In short, a quiet half-hour with a book every day is a small investment with a large return.</span>'},
 {type:'box', kind:'note', t:'لاحظ في النموذج', html:'• الجملة الأولى تعلن الفكرة بوضوح.<br>• ثلاث جمل داعمة بثلاثة روابط مختلفة.<br>• مثال واحد محدّد بـ <span class="en">For instance</span>.<br>• خاتمة تُجمل بصياغة جديدة لا تكراراً حرفياً.'},
 {type:'h', ico:'📝', t:'4) أنواع الفقرات المطلوبة'},
 {type:'table', head:['النوع','ما تفعله','روابطها'],
  rows:[
   ['وصفية','ترسم مكاناً أو شخصاً','<span class="en">on the right, in the middle, beyond</span>'],
   ['سردية','تحكي حادثة','<span class="en">then, suddenly, after that, finally</span>'],
   ['إرشادية','تشرح خطوات عملية','<span class="en">first, next, after that, lastly</span>'],
   ['سببية','تبيّن أسباباً ونتائج','<span class="en">because, as a result, therefore</span>'],
   ['موازنة','تقارن بين أمرين','<span class="en">whereas, on the other hand, similarly</span>'],
   ['رأي','تعرض موقفاً بدليل','<span class="en">in my view, admittedly, to sum up</span>']
  ]},
 {type:'drill', items:[
  '1) اكتب جملة موضوعية لفقرة عن أهمية الرياضة.',
  '2) أضف ثلاث جمل داعمة بروابط مختلفة.',
  '3) اختم بجملة تبدأ بـ <span class="en">In short</span>.',
  '4) حدّد نوع الفقرة: «كيف تُعِدّ كوب شاي» ← ؟',
  '5) استبدل تكرار الاسم بضمير في: <span class="en">Sport is useful. Sport improves health.</span>'
 ], answers:'1) مثال: <span class="en">Doing sport regularly benefits both body and mind.</span> &nbsp;2) <span class="en">First, … Second, … Moreover, …</span> &nbsp;3) <span class="en">In short, half an hour of sport a day keeps a student healthy and alert.</span> &nbsp;4) إرشادية &nbsp;5) <span class="en">Sport is useful; it improves health.</span>'}
],
quiz:[
 {q:'عدد الأفكار الرئيسة في الفقرة الواحدة:', o:['ثلاث','واحدة','خمس','بحسب الطول'], a:1, sk:'writing', e:'فقرة واحدة = فكرة واحدة.'},
 {q:'الجملة الموضوعية موضعها:', o:['في النهاية','في البداية عادةً','في المنتصف','لا تُكتب'], a:1, sk:'writing', e:'تفتتح الفقرة وتعلن فكرتها.'},
 {q:'وظيفة جملة الخاتمة:', o:['إضافة فكرة جديدة','الإجمال والإغلاق','طرح سؤال','تكرار المقدّمة حرفياً'], a:1, sk:'writing', e:'تُجمل بصياغة جديدة ولا تضيف جديداً.'},
 {q:'أي رابط يصلح للموازنة؟', o:['<span class="en">therefore</span>','<span class="en">whereas</span>','<span class="en">because</span>','<span class="en">finally</span>'], a:1, sk:'writing', e:'<span class="en">whereas</span> و<span class="en">on the other hand</span> للموازنة.'},
 {q:'الفقرة التي تشرح خطوات عمل تسمّى:', o:['وصفية','سردية','إرشادية','موازنة'], a:2, sk:'writing', e:'الفقرة الإرشادية <span class="en">process paragraph</span>.'},
 {q:'لتجنّب تكرار الاسم نستعمل:', o:['مرادفات وضمائر','جملاً أقصر','أحرفاً كبيرة','علامات تعجّب'], a:0, sk:'writing', e:'الضمائر والمرادفات تحقّق الترابط.'},
 {q:'الرابط المناسب للتمثيل:', o:['<span class="en">however</span>','<span class="en">for instance</span>','<span class="en">therefore</span>','<span class="en">although</span>'], a:1, sk:'writing', e:'<span class="en">for instance / for example</span>.'},
 {q:'أي بداية خاتمة أفضل؟', o:['<span class="en">And that\'s all.</span>','<span class="en">In short, …</span>','<span class="en">Also, …</span>','<span class="en">Finally I want to say that in my opinion I think…</span>'], a:1, sk:'writing', e:'<span class="en">In short</span> صيغة إجمال موجزة سليمة.'},
 {q:'وظيفة الجمل الداعمة:', o:['تشرح وتُدلّل وتُمثّل','تطرح أفكاراً جديدة','تكرّر الموضوعية','تختم الفقرة'], a:0, sk:'writing', e:'ثلاث وظائف لا رابع لها.'},
 {q:'الرابط المناسب للترتيب الزمني في السرد:', o:['<span class="en">whereas</span>','<span class="en">suddenly</span>','<span class="en">similarly</span>','<span class="en">in addition</span>'], a:1, sk:'writing', e:'السرد يعتمد روابط الزمن والمفاجأة.'}
]
},

/* ===================== المرحلة 3 ===================== */
{ id:'w3', t:'The Essay Plan', ta:'المرحلة 3 — خطة الموضوع', tag:'قبل أن تكتب',
blocks:[
 {type:'text', html:'لا تبدأ الكتابة فوراً. خصّص <b>خمس دقائق</b> للتخطيط، فهي أربح خمس دقائق في الامتحان كلّه؛ فالموضوع المخطَّط يُكتب أسرع وبأخطاء أقلّ.'},
 {type:'h', ico:'🔍', t:'1) تحليل السؤال'},
 {type:'steps', items:[
   'حدّد <b>كلمة الأمر</b>: <span class="en">Describe / Discuss / Compare / Explain / Write a letter / Give your opinion</span>.',
   'حدّد <b>الموضوع</b> بدقّة، ولا تكتب عن موضوع قريب منه.',
   'حدّد <b>النوع</b>: مقالة، أم رسالة، أم تقرير، أم قصة.',
   'حدّد <b>عدد الكلمات</b> والالتزام به تقريباً (±10%).',
   'حدّد <b>الزمن الغالب</b>: الوصف بالمضارع، والسرد بالماضي، والرأي بالمضارع.'
 ]},
 {type:'h', ico:'🗺️', t:'2) العصف والترتيب'},
 {type:'box', kind:'rule', t:'طريقة الدقائق الخمس', html:'1) اكتب على الهامش كل ما يخطر لك من أفكار بلا ترتيب (دقيقتان).<br>2) اشطب الأفكار المتكرّرة أو الضعيفة.<br>3) اختر <b>ثلاث أفكار</b> قوية فقط.<br>4) رتّبها: الأقوى في الوسط، والأوضح في البداية.<br>5) اكتب تحت كل فكرة <b>مثالاً أو دليلاً</b>.'},
 {type:'h', ico:'📐', t:'3) الهيكل القياسي للموضوع'},
 {type:'table', head:['الجزء','عدد الفقرات','ما يحويه'],
  rows:[
   ['المقدّمة','1','تهيئة عامة + جملة الأطروحة'],
   ['العرض','2–3','فكرة واحدة لكل فقرة + دليلها'],
   ['الخاتمة','1','إجمال + رأي أو توصية']
  ]},
 {type:'box', kind:'tip', t:'توزيع الكلمات في موضوع من 120 كلمة', html:'المقدّمة نحو 25 كلمة &nbsp;|&nbsp; كل فقرة عرض نحو 35 كلمة &nbsp;|&nbsp; الخاتمة نحو 25 كلمة.'},
 {type:'h', ico:'✅', t:'4) نموذج خطة جاهزة'},
 {type:'box', kind:'ex', t:'السؤال: Write about the advantages and disadvantages of the internet.', html:'<b>المقدّمة:</b> الإنترنت صار جزءاً من الحياة اليومية + الأطروحة: له منافع كبيرة ومخاطر لا تُهمل.<br><b>فقرة 1 (المنافع):</b> المعلومات، التعلّم عن بعد، التواصل. مثال: الطالب يحضر درساً من بلد آخر.<br><b>فقرة 2 (المخاطر):</b> إهدار الوقت، المعلومات المضلّلة، الخصوصية. مثال: خبر كاذب ينتشر في ساعات.<br><b>الخاتمة:</b> الإنترنت أداة، والمستخدم هو من يحدّد قيمتها + توصية بالاستعمال الواعي.'},
 {type:'drill', items:[
  '1) حدّد كلمة الأمر: <span class="en">Compare life in the city and the countryside.</span>',
  '2) ضع خطة ثلاثية لموضوع: أهمية التعلّم عن بعد.',
  '3) اكتب جملة أطروحة لموضوع عن التلوّث.',
  '4) ما الزمن الغالب في موضوع «رحلة قمتَ بها»؟',
  '5) كم فقرة يحتاج موضوع من 120 كلمة؟'
 ], answers:'1) <span class="en">Compare</span> ← موازنة &nbsp;2) منافع / تحديات / توصية &nbsp;3) مثال: <span class="en">Pollution threatens both our health and our future, and the solution starts with daily habits.</span> &nbsp;4) الماضي البسيط &nbsp;5) أربع فقرات: مقدّمة + فقرتا عرض + خاتمة'}
],
quiz:[
 {q:'أول خطوة قبل الكتابة:', o:['كتابة المقدّمة','تحليل السؤال وكلمة الأمر','عدّ الكلمات','كتابة الخاتمة'], a:1, sk:'writing', e:'فهم المطلوب يحدّد كل ما بعده.'},
 {q:'<span class="en">Compare</span> تطلب:', o:['وصفاً','موازنة بين أمرين','سرداً','إرشادات'], a:1, sk:'writing', e:'<span class="en">compare</span> = قارن بين طرفين.'},
 {q:'العدد الأمثل للأفكار الرئيسة في موضوع قصير:', o:['فكرة واحدة','ثلاث أفكار قوية','سبع أفكار','بلا حدّ'], a:1, sk:'writing', e:'ثلاث أفكار مدعومة أفضل من عشر مرسلة.'},
 {q:'جملة الأطروحة موضعها:', o:['أول المقدّمة','آخر المقدّمة','أول الخاتمة','وسط العرض'], a:1, sk:'writing', e:'تُقفل المقدّمة وتحدّد مسار الموضوع.'},
 {q:'الزمن الغالب في موضوع سردي عن تجربة:', o:['المضارع البسيط','الماضي البسيط','المستقبل','المضارع التام'], a:1, sk:'writing', e:'السرد عن حدث منتهٍ بالماضي.'},
 {q:'موضوع من 120 كلمة: نصيب المقدّمة تقريباً:', o:['10 كلمات','25 كلمة','60 كلمة','80 كلمة'], a:1, sk:'writing', e:'نحو خُمس العدد أو أقلّ قليلاً.'},
 {q:'الوقت المثالي للتخطيط في الامتحان:', o:['بلا تخطيط','خمس دقائق','نصف الوقت','دقيقة واحدة'], a:1, sk:'writing', e:'خمس دقائق تخطيط توفّر وقتاً وتقلّل الأخطاء.'},
 {q:'موضوع «وصف مدينتك» زمنه الغالب:', o:['الماضي','المضارع البسيط','المستقبل','الماضي التام'], a:1, sk:'writing', e:'الوصف لحالة قائمة ← المضارع.'},
 {q:'إذا طُلب 100 كلمة فكتبتَ 220:', o:['أفضل','يخالف المطلوب ويضرّ العلامة','لا يهمّ','يرفع العلامة دائماً'], a:1, sk:'writing', e:'الالتزام بالعدد جزء من التقييم.'},
 {q:'ماذا تكتب تحت كل فكرة في الخطة؟', o:['فكرة فرعية جديدة','مثالاً أو دليلاً','مقدّمة صغيرة','سؤالاً'], a:1, sk:'writing', e:'الفكرة بلا دليل لا تُقنع.'}
]
}
,
/* ===================== المرحلة 4 ===================== */
{ id:'w4', t:'Opinion & Argument', ta:'المرحلة 4 — موضوع الرأي والحجاج', tag:'كيف تُقنع',
blocks:[
 {type:'text', html:'هذا أكثر نوع يتكرّر في امتحان البكالوريا: أن تُسأل عن رأيك في قضية، أو أن تعرض <b>الإيجابيات والسلبيات</b>. والسرّ في النجاح ليس قوّة الرأي بل <b>تنظيم الحجّة</b>.'},
 {type:'h', ico:'🏗️', t:'1) نمطان للبناء'},
 {type:'table', head:['النمط','البنية','متى؟'],
  rows:[
   ['رأي واضح','مقدّمة ← حجّة 1 ← حجّة 2 ← حجّة مضادّة وردّها ← خاتمة','إذا طُلب رأيك المباشر'],
   ['متوازن','مقدّمة ← فقرة الإيجابيات ← فقرة السلبيات ← خاتمة برأي مُجمَل','إذا طُلبت المنافع والمضارّ']
  ]},
 {type:'h', ico:'🧠', t:'2) هيكل الحجّة الواحدة'},
 {type:'box', kind:'rule', t:'قاعدة (دعوى ← سبب ← دليل ← أثر)', html:'<b>الدعوى:</b> <span class="en">Online learning saves time.</span><br><b>السبب:</b> <span class="en">because students do not have to travel every day,</span><br><b>الدليل:</b> <span class="en">A student who used to spend an hour on the road can now use that hour for revision.</span><br><b>الأثر:</b> <span class="en">As a result, more time goes into learning itself.</span>'},
 {type:'h', ico:'🔁', t:'3) الحجّة المضادّة وردّها'},
 {type:'box', kind:'tip', t:'جُمل جاهزة', html:'<span class="en-blk">Some people argue that … However, this view overlooks the fact that …<br>It is true that … , but the benefits clearly outweigh the drawbacks.<br>Admittedly, … Nevertheless, …<br>Critics claim that … Yet experience shows that …</span>وجود حجّة مضادّة <b>يرفع</b> علامتك لأنّه يُظهر وعياً بالقضية.'},
 {type:'h', ico:'💬', t:'4) بنك العبارات'},
 {type:'table', head:['الوظيفة','العبارات'],
  rows:[
   ['استهلال','<span class="en">Nowadays, … has become a widely discussed issue. / It is often argued that …</span>'],
   ['إبداء الرأي','<span class="en">In my view, … / I firmly believe that … / From my point of view, …</span>'],
   ['تعزيز','<span class="en">What is more, … / Furthermore, … / Another point worth mentioning is …</span>'],
   ['تمثيل','<span class="en">A clear example of this is … / Take … as an example.</span>'],
   ['تنازل','<span class="en">Admittedly, … / It is true that … / While it may be argued that …</span>'],
   ['اعتراض','<span class="en">However, … / On the other hand, … / Nevertheless, …</span>'],
   ['خاتمة','<span class="en">To sum up, … / All things considered, … / In conclusion, …</span>'],
   ['توصية','<span class="en">Therefore, schools should … / It would be wise to …</span>']
  ]},
 {type:'box', kind:'warn', t:'أخطاء تُنقص العلامة ⚠️', html:'• الحشو: <span class="en">In my opinion I think that personally I believe…</span><br>• الجزم بلا دليل: <span class="en">Everyone knows that…</span><br>• الخروج عن الموضوع ولو بجملة واحدة.<br>• العامية والاختصارات في المقالة الرسمية: ✗ <span class="en">don\'t, can\'t, gonna</span> ← ✓ <span class="en">do not, cannot</span>.<br>• الأسئلة الخطابية الكثيرة.'},
 {type:'h', ico:'📄', t:'5) نموذج كامل (125 كلمة)'},
 {type:'box', kind:'ex', t:'Should students use mobile phones at school?', html:'<span class="en-blk">The use of mobile phones at school is a widely debated issue today. In my view, phones should be allowed only under clear rules.<br><br>On the one hand, a phone is a powerful learning tool. A student can look up a word, record a difficult explanation, or contact a parent in an emergency. In addition, many schools now use digital platforms that need a device.<br><br>On the other hand, phones distract attention and may be used for cheating. Admittedly, this is a real danger. Nevertheless, the solution is regulation rather than a total ban: phones could be used in class only when the teacher asks for them.<br><br>To sum up, a controlled use of mobile phones serves education better than either free use or complete prohibition.</span>'},
 {type:'drill', items:[
  '1) اكتب دعوى + سبب + دليل + أثر عن أهمية الرياضة.',
  '2) اكتب حجّة مضادّة لها وردّها.',
  '3) أعد صياغة بلا حشو: <span class="en">In my opinion I personally think that I believe reading is good.</span>',
  '4) استبدل الاختصارات: <span class="en">Students don\'t have time and they can\'t focus.</span>',
  '5) اكتب خاتمة بتوصية لموضوع عن التلوّث.'
 ], answers:'1) مثال: <span class="en">Daily sport improves school performance because exercise increases blood flow to the brain. Students who train regularly report better concentration. As a result, their marks tend to rise.</span> &nbsp;2) <span class="en">Some argue that sport wastes study time. However, thirty minutes a day cost little and return much.</span> &nbsp;3) <span class="en">In my view, reading is beneficial.</span> &nbsp;4) <span class="en">Students do not have time and they cannot focus.</span> &nbsp;5) <span class="en">To sum up, pollution is a shared responsibility; therefore, schools should teach recycling from an early age.</span>'}
],
quiz:[
 {q:'في موضوع الرأي، ذكر الحجّة المضادّة:', o:['يُضعف الموضوع','يُقوّيه ويُظهر الوعي','ممنوع','للخاتمة فقط'], a:1, sk:'writing', e:'التنازل ثم الردّ أسلوب حجاجي راقٍ.'},
 {q:'ترتيب الحجّة السليم:', o:['دليل ← دعوى ← سبب','دعوى ← سبب ← دليل ← أثر','أثر ← دعوى','دعوى فقط'], a:1, sk:'writing', e:'الدعوى تحتاج سبباً ودليلاً ثم بيان أثرها.'},
 {q:'العبارة الأنسب للتنازل:', o:['<span class="en">Admittedly, …</span>','<span class="en">Therefore, …</span>','<span class="en">For example, …</span>','<span class="en">Finally, …</span>'], a:0, sk:'writing', e:'<span class="en">Admittedly</span> تعترف بالطرف الآخر قبل الردّ.'},
 {q:'في المقالة الرسمية نكتب:', o:['<span class="en">don\'t</span>','<span class="en">do not</span>','<span class="en">gonna</span>','<span class="en">can\'t</span>'], a:1, sk:'writing', e:'نتجنّب الاختصارات في الكتابة الرسمية.'},
 {q:'أي جملة فيها حشو؟', o:['<span class="en">In my view, reading is useful.</span>','<span class="en">In my opinion I think I believe reading is useful.</span>','<span class="en">I firmly believe that reading is useful.</span>','<span class="en">From my point of view, reading is useful.</span>'], a:1, sk:'writing', e:'ثلاث صيغ رأي في جملة واحدة حشو واضح.'},
 {q:'النمط المتوازن يُستعمل عندما:', o:['يُطلب رأيك المباشر','تُطلب المنافع والمضارّ','يُطلب سرد قصة','يُطلب وصف مكان'], a:1, sk:'writing', e:'فقرة للإيجابيات وأخرى للسلبيات.'},
 {q:'<span class="en">Everyone knows that…</span> عبارة:', o:['قويّة علمياً','جزم بلا دليل يُضعف الحجّة','خاتمة مناسبة','مثال جيّد'], a:1, sk:'writing', e:'التعميم بلا دليل من أخطاء الحجاج.'},
 {q:'الرابط المناسب للاعتراض بعد التنازل:', o:['<span class="en">Moreover</span>','<span class="en">Nevertheless</span>','<span class="en">Similarly</span>','<span class="en">For instance</span>'], a:1, sk:'writing', e:'<span class="en">Nevertheless / However</span> تقلب الاتجاه.'},
 {q:'الخاتمة المثالية في موضوع رأي:', o:['إجمال + رأي أو توصية','فكرة جديدة','سؤال بلا جواب','تكرار المقدّمة حرفياً'], a:0, sk:'writing', e:'إجمال ثم موقف أو توصية عملية.'},
 {q:'<span class="en">A clear example of this is …</span> وظيفتها:', o:['الاستهلال','التمثيل','الاعتراض','الإجمال'], a:1, sk:'writing', e:'تقدّم مثالاً يدعم الدعوى.'}
]
},
/* ===================== المرحلة 5 ===================== */
{ id:'w5', t:'Letters, Emails & Reports', ta:'المرحلة 5 — الرسائل والبريد والتقارير', tag:'الكتابة الوظيفية',
blocks:[
 {type:'text', html:'تُطلب في الامتحان كتابة <b>رسالة</b> أو <b>بريد إلكتروني</b> أو <b>تقرير</b>. لكل نوع صيغته الثابتة، وحفظ الصيغة يضمن لك نصف العلامة قبل أن تكتب كلمة في المضمون.'},
 {type:'h', ico:'✉️', t:'1) الرسالة الرسمية — Formal Letter'},
 {type:'table', head:['الجزء','الصيغة'],
  rows:[
   ['التحية','<span class="en">Dear Sir / Dear Madam / Dear Mr Ahmad,</span>'],
   ['الغرض','<span class="en">I am writing to apply for … / to complain about … / to enquire about …</span>'],
   ['العرض','فقرة أو اثنتان بالتفاصيل مرتّبة'],
   ['الطلب','<span class="en">I would be grateful if you could … / I look forward to hearing from you.</span>'],
   ['الختام','<span class="en">Yours faithfully,</span> (إذا لم تعرف الاسم) أو <span class="en">Yours sincerely,</span> (إذا عرفته)'],
   ['الاسم','اسمك كاملاً في سطر مستقلّ']
  ]},
 {type:'box', kind:'warn', t:'قواعد الرسالة الرسمية ⚠️', html:'• لا اختصارات ولا عامية ولا علامات تعجّب.<br>• <span class="en">Dear Sir</span> ← <span class="en">Yours faithfully</span> &nbsp;|&nbsp; <span class="en">Dear Mr Ali</span> ← <span class="en">Yours sincerely</span>.<br>• لا تكتب <span class="en">Dear Sir,</span> ثم <span class="en">Hi!</span><br>• فاصلة بعد التحية وبعد الختام.'},
 {type:'h', ico:'💌', t:'2) الرسالة الودّية — Informal Letter'},
 {type:'box', kind:'rule', t:'الصيغة', html:'التحية: <span class="en">Dear Omar, / Hi Lana,</span><br>الافتتاح: <span class="en">How are you? I hope you and your family are well. Sorry for the late reply.</span><br>المتن: أخبارك، وجواب أسئلته، وسؤالك إليه.<br>الختام: <span class="en">Write back soon. / Give my regards to your family.</span><br>التوقيع: <span class="en">Best wishes, / Yours, / Love,</span> + اسمك.'},
 {type:'h', ico:'📧', t:'3) البريد الإلكتروني — Email'},
 {type:'box', kind:'rule', t:'ما يزيد على الرسالة', html:'سطر الموضوع <span class="en">Subject:</span> قصير ودقيق: <span class="en">Subject: Request for a school certificate</span><br>الجسم أقصر من الرسالة وأكثر مباشرة، والختام: <span class="en">Best regards, / Kind regards,</span>'},
 {type:'h', ico:'📊', t:'4) التقرير — Report'},
 {type:'table', head:['الجزء','ما يحويه'],
  rows:[
   ['العنوان','<span class="en">Report on the School Library</span>'],
   ['المقدّمة','الغرض: <span class="en">The aim of this report is to …</span>'],
   ['النتائج','بعناوين فرعية وأرقام: <span class="en">Findings: 60% of students said …</span>'],
   ['التوصيات','<span class="en">Recommendations: It is recommended that the library open in the afternoon.</span>'],
   ['الأسلوب','موضوعي بلا مشاعر، ويُكثر من المبني للمجهول']
  ]},
 {type:'h', ico:'📄', t:'5) نموذج رسالة رسمية'},
 {type:'box', kind:'ex', t:'Applying for a summer course', html:'<span class="en-blk">Dear Sir,<br><br>I am writing to apply for the summer English course advertised on your website.<br><br>I am a secondary-school student in Homs and I have studied English for nine years. I am particularly interested in improving my writing, as I intend to study at university next year. I am available throughout July and August and I am willing to attend evening classes.<br><br>I would be grateful if you could send me details of the fees and the timetable. I look forward to hearing from you.<br><br>Yours faithfully,<br>Omar Khaled</span>'},
 {type:'drill', items:[
  '1) ما الختام الصحيح بعد <span class="en">Dear Sir,</span>؟',
  '2) اكتب سطر موضوع لبريد تطلب فيه شهادة دراسية.',
  '3) اكتب جملة الغرض في رسالة شكوى عن كتاب تالف.',
  '4) ما أسلوب التقرير الغالب؟',
  '5) صحّح: <span class="en">Dear Mr Ali, … Yours faithfully,</span>'
 ], answers:'1) <span class="en">Yours faithfully,</span> &nbsp;2) <span class="en">Subject: Request for a school certificate</span> &nbsp;3) <span class="en">I am writing to complain about a damaged book I received last week.</span> &nbsp;4) موضوعي بعناوين فرعية وتوصيات، ويُكثر من المبني للمجهول &nbsp;5) <span class="en">Yours sincerely,</span>'}
],
quiz:[
 {q:'بعد <span class="en">Dear Sir,</span> نختم بـ:', o:['<span class="en">Yours sincerely,</span>','<span class="en">Yours faithfully,</span>','<span class="en">Best wishes,</span>','<span class="en">Love,</span>'], a:1, sk:'writing', e:'الاسم غير معروف ← <span class="en">Yours faithfully</span>.'},
 {q:'بعد <span class="en">Dear Mr Ahmad,</span> نختم بـ:', o:['<span class="en">Yours faithfully,</span>','<span class="en">Yours sincerely,</span>','<span class="en">Hi,</span>','<span class="en">Regards you,</span>'], a:1, sk:'writing', e:'الاسم معروف ← <span class="en">Yours sincerely</span>.'},
 {q:'جملة الغرض في الرسالة الرسمية:', o:['<span class="en">How are you?</span>','<span class="en">I am writing to apply for …</span>','<span class="en">Guess what!</span>','<span class="en">See you soon.</span>'], a:1, sk:'writing', e:'الرسالة الرسمية تُعلن غرضها في أول فقرة.'},
 {q:'ما يميّز البريد الإلكتروني:', o:['سطر الموضوع','التحية','الختام','التوقيع'], a:0, sk:'writing', e:'<span class="en">Subject</span> خاصّ بالبريد.'},
 {q:'أسلوب التقرير:', o:['عاطفي','موضوعي بتوصيات','قصصي','شعري'], a:1, sk:'writing', e:'التقرير يعرض نتائج ثم توصيات.'},
 {q:'في الرسالة الرسمية نتجنّب:', o:['الفقرات','الاختصارات والعامية','جملة الغرض','التحية'], a:1, sk:'writing', e:'✗ <span class="en">don\'t</span> ← ✓ <span class="en">do not</span>.'},
 {q:'الختام المناسب لرسالة ودّية:', o:['<span class="en">Yours faithfully,</span>','<span class="en">Best wishes,</span>','<span class="en">Respectfully submitted,</span>','<span class="en">Sincerely yours faithfully,</span>'], a:1, sk:'writing', e:'الرسالة الودّية تُختم بـ <span class="en">Best wishes / Yours / Love</span>.'},
 {q:'<span class="en">I would be grateful if you could …</span> وظيفتها:', o:['التحية','طلب مهذّب','الشكوى','الوصف'], a:1, sk:'writing', e:'صيغة الطلب الرسمية المهذّبة.'},
 {q:'قسم التوصيات في التقرير يبدأ عادةً بـ:', o:['<span class="en">It is recommended that …</span>','<span class="en">I think maybe …</span>','<span class="en">Once upon a time …</span>','<span class="en">How are you?</span>'], a:0, sk:'writing', e:'صيغة موضوعية بالمبني للمجهول.'},
 {q:'افتتاح الرسالة الودّية الأنسب:', o:['<span class="en">I am writing to enquire about …</span>','<span class="en">How are you? I hope you are well.</span>','<span class="en">The aim of this report is …</span>','<span class="en">Dear Sir,</span>'], a:1, sk:'writing', e:'الودّية تبدأ بالسؤال عن الحال.'}
]
}
,
/* ===================== المرحلة 6 ===================== */
{ id:'w6', t:'Describing & Narrating', ta:'المرحلة 6 — الوصف والسرد', tag:'الصورة والحكاية',
blocks:[
 {type:'text', html:'الوصف والسرد يرفعان جودة أسلوبك في كل موضوع، حتى في موضوع الرأي. والمهارة هنا ليست في الصفات الكثيرة بل في <b>التفصيل المحدّد</b>.'},
 {type:'h', ico:'🖼️', t:'1) الوصف — Description'},
 {type:'box', kind:'rule', t:'قاعدة الحواسّ الخمس', html:'لا تصف بالعين وحدها. اذكر ما تراه، وما تسمعه، وما تشمّه، وما تحسّه:<br><span class="en-blk">The old market was crowded and noisy. The smell of fresh bread mixed with the scent of cardamom, and the shouts of the sellers echoed between the stone walls.</span>'},
 {type:'table', head:['تصف','ترتيب الوصف','عبارات مفيدة'],
  rows:[
   ['مكاناً','من العام إلى الخاص','<span class="en">on the right, in the middle, in the distance, beyond the gate</span>'],
   ['شخصاً','المظهر ← الملبس ← الخُلُق','<span class="en">in his late fifties, with kind eyes, always ready to help</span>'],
   ['جوّاً','الزمن ← الضوء ← الصوت','<span class="en">at dawn, a pale light, a deep silence</span>']
  ]},
 {type:'box', kind:'tip', t:'ارفع مفرداتك', html:'بدل <span class="en">big</span>: <span class="en">huge, enormous, vast, spacious</span><br>بدل <span class="en">nice</span>: <span class="en">pleasant, delightful, charming, impressive</span><br>بدل <span class="en">very happy</span>: <span class="en">delighted, thrilled, overjoyed</span><br>بدل <span class="en">said</span>: <span class="en">whispered, replied, muttered, explained, shouted</span><br>بدل <span class="en">walked</span>: <span class="en">strolled, rushed, wandered, hurried</span>'},
 {type:'h', ico:'🎬', t:'2) السرد — Narration'},
 {type:'box', kind:'rule', t:'الأزمنة في السرد', html:'الحوادث: <b>الماضي البسيط</b>.<br>الخلفية والمَشاهد المستمرّة: <b>الماضي المستمر</b>.<br>ما وقع قبل الحادثة: <b>الماضي التام</b>.<br><span class="en-blk">I was walking home when I noticed that someone had left a bag on the bench.</span>'},
 {type:'box', kind:'rule', t:'بنية القصة الخمسية', html:'1) <b>التهيئة</b>: الزمان والمكان والشخصيات.<br>2) <b>الحدث المحرّك</b>: ما قلب الأمور.<br>3) <b>التصاعد</b>: مشكلات متتابعة.<br>4) <b>الذروة</b>: اللحظة الأشدّ.<br>5) <b>الحلّ والعِبرة</b>.'},
 {type:'box', kind:'tip', t:'روابط السرد', html:'<span class="en">At first, … / Soon afterwards, … / A few minutes later, … / Suddenly, … / Meanwhile, … / To my surprise, … / In the end, …</span>'},
 {type:'h', ico:'📄', t:'3) نموذج سردي (110 كلمة)'},
 {type:'box', kind:'ex', t:'A day I will never forget', html:'<span class="en-blk">It was a cold morning in January, and I was walking to school as usual. The streets were almost empty and a thin rain was falling.<br><br>Suddenly, I heard a weak sound from a pile of boxes near the wall. When I looked closer, I found a small kitten that had been left there in the cold. It was shivering and could hardly move.<br><br>I wrapped it in my scarf and carried it to the nearest shop, where the owner gave it warm milk. A few minutes later, the kitten lifted its head and looked at me.<br><br>I was late for school that day, but I had learnt something no lesson could teach: a small act of kindness can change a life.</span>'},
 {type:'drill', items:[
  '1) صِف سوقاً قديماً بثلاث حواسّ مختلفة.',
  '2) استبدل: <span class="en">The house was very big and very nice.</span>',
  '3) أكمل بالزمن الصحيح: <span class="en">I ______ (walk) when I ______ (see) him.</span>',
  '4) اكتب جملة ذروة تبدأ بـ <span class="en">Suddenly</span>.',
  '5) اكتب عِبرة في جملة واحدة لقصة عن مساعدة غريب.'
 ], answers:'1) مثال: <span class="en">The narrow lanes were full of colour; the smell of spices filled the air, and the sellers\' voices rose above the crowd.</span> &nbsp;2) <span class="en">The house was spacious and impressive.</span> &nbsp;3) <span class="en">was walking / saw</span> &nbsp;4) <span class="en">Suddenly, the lights went out and the hall fell silent.</span> &nbsp;5) <span class="en">That day taught me that helping a stranger costs little but means much.</span>'}
],
quiz:[
 {q:'أفضل وصف:', o:['<span class="en">The market was nice.</span>','<span class="en">The market was very very big.</span>','<span class="en">The smell of fresh bread filled the narrow lane.</span>','<span class="en">The market was a market.</span>'], a:2, sk:'writing', e:'التفصيل الحسّي المحدّد أقوى من الصفات العامة.'},
 {q:'الزمن الأساسي في السرد:', o:['المضارع البسيط','الماضي البسيط','المستقبل','المضارع التام'], a:1, sk:'writing', e:'الحوادث المنتهية بالماضي البسيط.'},
 {q:'<span class="en">I was walking when I ______ him.</span>', o:['<span class="en">see</span>','<span class="en">saw</span>','<span class="en">was seeing</span>','<span class="en">had seen</span>'], a:1, sk:'writing', e:'الحدث القاطع القصير بالماضي البسيط.'},
 {q:'للتعبير عمّا وقع قبل حادثة القصة نستعمل:', o:['الماضي المستمر','الماضي التام','المضارع التام','المستقبل'], a:1, sk:'writing', e:'<span class="en">had + V3</span> للأسبق.'},
 {q:'بديل أفصح لـ <span class="en">very happy</span>:', o:['<span class="en">so happy</span>','<span class="en">delighted</span>','<span class="en">happy happy</span>','<span class="en">not sad</span>'], a:1, sk:'writing', e:'الصفة القوية تُغني عن <span class="en">very</span>.'},
 {q:'ترتيب وصف المكان:', o:['من الخاص إلى العام','من العام إلى الخاص','بلا ترتيب','من النهاية'], a:1, sk:'writing', e:'الصورة الكلّية أولاً ثم التفاصيل.'},
 {q:'<span class="en">Meanwhile</span> تدلّ على:', o:['نتيجة','تزامن','سبب','تضاد'], a:1, sk:'writing', e:'<span class="en">Meanwhile</span> = في الوقت نفسه.'},
 {q:'ذروة القصة هي:', o:['التهيئة','اللحظة الأشدّ توتّراً','الحلّ','العِبرة'], a:1, sk:'writing', e:'<span class="en">climax</span> = قمّة التوتّر.'},
 {q:'بديل أدقّ لـ <span class="en">said</span> في همس:', o:['<span class="en">shouted</span>','<span class="en">whispered</span>','<span class="en">replied</span>','<span class="en">asked</span>'], a:1, sk:'writing', e:'<span class="en">whisper</span> = يهمس.'},
 {q:'خاتمة القصة الجيّدة:', o:['تنتهي بلا تفسير','تحوي حلّاً وعِبرة','تطرح مشكلة جديدة','تكرّر البداية'], a:1, sk:'writing', e:'الحلّ ثم الدرس المستفاد.'}
]
},
/* ===================== المرحلة 7 ===================== */
{ id:'w7', t:'Common Exam Topics', ta:'المرحلة 7 — المواضيع المتوقَّعة', tag:'بنوك جاهزة',
blocks:[
 {type:'text', html:'هذه أكثر المواضيع تكراراً في امتحانات الشهادة. تحت كل موضوع <b>ثلاث أفكار</b> و<b>مفرداته</b> و<b>جملة أطروحة جاهزة</b>. احفظ الهيكل، ثم اكتب بأسلوبك.'},
 {type:'h', ico:'1️⃣', t:'التقانة والإنترنت'},
 {type:'box', kind:'rule', t:'الأفكار', html:'منافع: سرعة المعلومة، التعلّم عن بعد، التواصل، فرص العمل.<br>مضارّ: إهدار الوقت، المعلومات المضلّلة، الخصوصية، ضعف التواصل المباشر.<br>الأطروحة: <span class="en">Technology is a tool whose value depends on how we use it.</span><br>مفردات: <span class="en">access, platform, misinformation, privacy, screen time, digital skills</span>'},
 {type:'h', ico:'2️⃣', t:'التعليم والدراسة'},
 {type:'box', kind:'rule', t:'الأفكار', html:'أهمية التعليم: الوعي، فرص العمل، تقدّم المجتمع.<br>تحدّيات: الحفظ بلا فهم، ضعف التدريب العملي، ضغط الامتحانات.<br>الأطروحة: <span class="en">Education succeeds when it teaches students how to think, not only what to remember.</span><br>مفردات: <span class="en">curriculum, skill, critical thinking, revision, achievement, qualification</span>'},
 {type:'h', ico:'3️⃣', t:'الصحة والرياضة'},
 {type:'box', kind:'rule', t:'الأفكار', html:'الوقاية خير من العلاج؛ الغذاء المتوازن؛ الرياضة والنوم؛ الصحة النفسية.<br>الأطروحة: <span class="en">Good health is built by daily habits rather than by occasional treatment.</span><br>مفردات: <span class="en">balanced diet, immune system, fitness, stress, prevention, lifestyle</span>'},
 {type:'h', ico:'4️⃣', t:'البيئة والتلوّث'},
 {type:'box', kind:'rule', t:'الأفكار', html:'أسباب: المصانع، النفايات، قطع الأشجار، وسائل النقل.<br>حلول: التدوير، الطاقة المتجدّدة، التشجير، الوعي المدرسي.<br>الأطروحة: <span class="en">Protecting the environment begins with small daily choices in every home.</span><br>مفردات: <span class="en">pollution, recycle, waste, renewable, greenhouse gases, sustainable</span>'},
 {type:'h', ico:'5️⃣', t:'العمل التطوّعي والمجتمع'},
 {type:'box', kind:'rule', t:'الأفكار', html:'فائدته للمتطوّع: خبرة وثقة وصداقات. وللمجتمع: خدمات وتكافل.<br>الأطروحة: <span class="en">Volunteering benefits the volunteer as much as the community.</span><br>مفردات: <span class="en">volunteer, campaign, cooperation, solidarity, initiative, contribute</span>'},
 {type:'h', ico:'6️⃣', t:'السياحة والتراث'},
 {type:'box', kind:'rule', t:'الأفكار', html:'سورية غنية بالآثار؛ السياحة تدرّ دخلاً وتعرّف بالثقافة؛ ويجب حماية المواقع من التلف.<br>الأطروحة: <span class="en">Tourism can support the economy only if our heritage is well protected.</span><br>مفردات: <span class="en">heritage, ancient ruins, attract visitors, preserve, guide, accommodation</span>'},
 {type:'h', ico:'7️⃣', t:'مهنة المستقبل'},
 {type:'box', kind:'rule', t:'الأفكار', html:'الميل الشخصي، والقدرة، وحاجة السوق، والاستعداد للتعلّم المستمر.<br>الأطروحة: <span class="en">The right career lies where your interests, your abilities and society\'s needs meet.</span><br>مفردات: <span class="en">career, ambition, qualification, experience, training, opportunity</span>'},
 {type:'h', ico:'8️⃣', t:'العائلة والقيم'},
 {type:'box', kind:'rule', t:'الأفكار', html:'العائلة أول مدرسة؛ الحوار بين الأجيال؛ القدوة أقوى من الوعظ.<br>الأطروحة: <span class="en">Values are learnt at home long before they are taught at school.</span><br>مفردات: <span class="en">respect, responsibility, honesty, generation, upbringing, role model</span>'},
 {type:'box', kind:'tip', t:'جُمل افتتاح تصلح لأي موضوع', html:'<span class="en-blk">Nowadays, … has become one of the most discussed issues in our society.<br>Few would deny that … plays a vital role in modern life.<br>Over the past few years, … has changed the way we live and learn.</span>'},
 {type:'drill', items:[
  '1) اكتب جملة أطروحة عن أهمية التطوّع.',
  '2) أعطِ ثلاث مفردات متقدّمة لموضوع البيئة.',
  '3) اكتب فقرة عرض قصيرة (ثلاث جمل) عن منافع التقانة.',
  '4) اكتب جملة افتتاح لموضوع عن الصحة.',
  '5) اكتب خاتمة بتوصية لموضوع عن مهنة المستقبل.'
 ], answers:'1) <span class="en">Volunteering builds the volunteer\'s character while serving the whole community.</span> &nbsp;2) <span class="en">sustainable, greenhouse gases, recycle</span> &nbsp;3) <span class="en">Technology has made knowledge available to everyone. A student in a small village can now attend a lecture given abroad. As a result, learning no longer depends on place.</span> &nbsp;4) <span class="en">Few would deny that health is the foundation of a productive life.</span> &nbsp;5) <span class="en">To sum up, students should be guided early so that their choice of career matches both their talents and the needs of the market.</span>'}
],
quiz:[
 {q:'أفضل أطروحة لموضوع التقانة:', o:['<span class="en">Technology is good.</span>','<span class="en">Technology is a tool whose value depends on how we use it.</span>','<span class="en">I like technology.</span>','<span class="en">Technology is bad for everyone.</span>'], a:1, sk:'writing', e:'الأطروحة الجيّدة محدّدة وقابلة للمناقشة.'},
 {q:'مفردة متقدّمة في موضوع البيئة:', o:['<span class="en">dirty</span>','<span class="en">sustainable</span>','<span class="en">bad air</span>','<span class="en">many rubbish</span>'], a:1, sk:'writing', e:'<span class="en">sustainable</span> من لغة الموضوع الأكاديمية.'},
 {q:'من حلول التلوّث:', o:['زيادة المصانع','التدوير والطاقة المتجدّدة','قطع الأشجار','إهمال النفايات'], a:1, sk:'writing', e:'التدوير والطاقة النظيفة والتشجير.'},
 {q:'في موضوع المهنة، المعيار الثالث بعد الميل والقدرة:', o:['رأي الأصدقاء','حاجة سوق العمل','سهولة الدراسة','قرب الجامعة'], a:1, sk:'writing', e:'التقاء الميل والقدرة بحاجة المجتمع.'},
 {q:'جملة الافتتاح الأنسب:', o:['<span class="en">I will write about health.</span>','<span class="en">Few would deny that health is the foundation of a productive life.</span>','<span class="en">Health health health.</span>','<span class="en">Hello, today my topic is health.</span>'], a:1, sk:'writing', e:'الافتتاح يهيّئ للموضوع بلا إعلان عن الكتابة.'},
 {q:'منفعة التطوّع للمتطوّع نفسه:', o:['لا منفعة','خبرة وثقة وصداقات','مال فقط','شهادة فقط'], a:1, sk:'writing', e:'التطوّع يبني الشخصية والخبرة.'},
 {q:'شرط نجاح السياحة وفق المفردات المعروضة:', o:['رفع الأسعار','حماية التراث','تقليل الزوّار','إغلاق المواقع'], a:1, sk:'writing', e:'<span class="en">preserve our heritage</span>.'},
 {q:'<span class="en">critical thinking</span> تنتمي إلى موضوع:', o:['البيئة','التعليم','السياحة','العائلة'], a:1, sk:'writing', e:'التفكير النقدي من مفردات التعليم.'},
 {q:'<span class="en">role model</span> تعني:', o:['قدوة','قاعدة','دور مسرحي','نموذج اختبار'], a:0, sk:'writing', e:'<span class="en">role model</span> = القدوة التي يُقتدى بها.'},
 {q:'من مضارّ الإنترنت المذكورة:', o:['سرعة المعلومة','المعلومات المضلّلة','التعلّم عن بعد','فرص العمل'], a:1, sk:'writing', e:'<span class="en">misinformation</span> من أبرز المضارّ.'}
]
},
/* ===================== المرحلة 8 ===================== */
{ id:'w8', t:'Self-Check & Mastery', ta:'المرحلة 8 — المراجعة الذاتية والإتقان', tag:'سلّم التصحيح',
blocks:[
 {type:'text', html:'المرحلة الأخيرة أن تتعلّم <b>تصحيح نفسك</b> كما يصحّح المدرّس. راجع كل موضوع تكتبه بهذا السلّم، وستتحسّن علامتك بلا معلّم.'},
 {type:'h', ico:'📋', t:'1) سلّم التصحيح — Rubric'},
 {type:'table', head:['المعيار','ما يُنظر فيه','العلامة'],
  rows:[
   ['المضمون','التزام الموضوع، وضوح الأفكار، وجود أدلّة','٣٠٪'],
   ['التنظيم','مقدّمة وعرض وخاتمة، فكرة لكل فقرة، روابط','٢٥٪'],
   ['القواعد','الأزمنة، المطابقة، ترتيب الكلمات، حروف الجر','٢٥٪'],
   ['المفردات','دقّة الكلمة، التنويع، تجنّب التكرار','١٥٪'],
   ['الشكل','الترقيم، الأحرف الكبيرة، الإملاء، الخطّ','٥٪']
  ]},
 {type:'h', ico:'🔎', t:'2) قائمة الفحص قبل التسليم'},
 {type:'steps', items:[
   'هل أجبتُ عن <b>السؤال نفسه</b> لا عن موضوع قريب منه؟',
   'هل في كل فقرة <b>فكرة واحدة</b> وجملة موضوعية؟',
   'هل في كل جملة <b>فاعل وفعل</b>؟',
   'هل الأزمنة متّسقة، ولم أخلط الماضي بالمضارع بلا سبب؟',
   'هل أضفتُ <span class="en">s</span> للفاعل المفرد الغائب في المضارع؟',
   'هل استعملتُ <b>روابط متنوّعة</b> ولم أكرّر <span class="en">and</span> عشر مرّات؟',
   'هل بدأتُ كل جملة بحرف كبير وختمتُها بنقطة؟',
   'هل التزمتُ <b>عدد الكلمات</b> المطلوب؟',
   'هل أبقيتُ خاتمةً تُجمل ولا تضيف جديداً؟'
 ]},
 {type:'h', ico:'🧪', t:'3) الأخطاء العشرة القاتلة'},
 {type:'table', head:['الخطأ','الصواب'],
  rows:[
   ['<span class="en">He go to school.</span>','<span class="en">He goes to school.</span>'],
   ['<span class="en">I am agree with you.</span>','<span class="en">I agree with you.</span>'],
   ['<span class="en">She is teacher.</span>','<span class="en">She is a teacher.</span>'],
   ['<span class="en">I didn\'t went.</span>','<span class="en">I didn\'t go.</span>'],
   ['<span class="en">Although of the rain</span>','<span class="en">Despite the rain</span>'],
   ['<span class="en">It depend on you.</span>','<span class="en">It depends on you.</span>'],
   ['<span class="en">The informations are</span>','<span class="en">The information is</span>'],
   ['<span class="en">He suggested me to go.</span>','<span class="en">He suggested that I should go.</span>'],
   ['<span class="en">In nowadays</span>','<span class="en">Nowadays</span>'],
   ['<span class="en">more better</span>','<span class="en">better</span>']
  ]},
 {type:'h', ico:'🏁', t:'4) خطة الإتقان في ثلاثين يوماً'},
 {type:'steps', items:[
   'الأيام 1–7: اكتب كل يوم <b>فقرة واحدة</b> (٦٠ كلمة) وصحّحها بالسلّم.',
   'الأيام 8–14: اكتب كل يومين <b>موضوعاً من ١٠٠ كلمة</b> من قائمة المواضيع المتوقَّعة.',
   'الأيام 15–21: أضف <b>الحجّة المضادّة</b> في كل موضوع، واستعمل بنك العبارات.',
   'الأيام 22–26: اكتب <b>رسالة وتقريراً</b>، وتدرّب على الصيغ الثابتة حتى تحفظها.',
   'الأيام 27–30: اكتب موضوعين <b>بالتوقيت الامتحاني</b> (٢٥ دقيقة لكل موضوع) بلا مراجعة أثناء الكتابة، ثم صحّح.',
   'بعد ذلك: انتقل إلى قسم <b>نماذج الامتحانات</b> وطبّق ما تعلّمته على نمط أسئلة الشهادة.'
 ]},
 {type:'box', kind:'note', t:'كلمة من الأستاذ أحمد', html:'الكتابة مهارة لا معلومة؛ لا تُتقَن بالقراءة عنها بل بالممارسة. اكتب يومياً ولو خمسين كلمة، واطلب التصحيح، واحتفظ بـ «دفتر الأخطاء». ومن راجع أخطاءه مرّتين لم يعد إليها.'},
 {type:'drill', items:[
  '1) صحّح: <span class="en">He go to the school every day and he don\'t late.</span>',
  '2) صحّح: <span class="en">Although of the noise, she study well.</span>',
  '3) صحّح: <span class="en">The informations about this topic are more better now.</span>',
  '4) صحّح: <span class="en">In nowadays, she is teacher in our school.</span>',
  '5) صحّح: <span class="en">He suggested me to write the essay again.</span>'
 ], answers:'1) <span class="en">He goes to school every day and he is not late.</span> &nbsp;2) <span class="en">Despite the noise, she studies well.</span> &nbsp;3) <span class="en">The information about this topic is better now.</span> &nbsp;4) <span class="en">Nowadays, she is a teacher in our school.</span> &nbsp;5) <span class="en">He suggested that I should write the essay again.</span>'}
],
quiz:[
 {q:'أكبر وزن في سلّم التصحيح:', o:['الشكل','المضمون','المفردات','الخطّ'], a:1, sk:'writing', e:'المضمون ثم التنظيم والقواعد.'},
 {q:'صحّح: <span class="en">He go to school.</span>', o:['<span class="en">He going to school.</span>','<span class="en">He goes to school.</span>','<span class="en">He is go to school.</span>','<span class="en">He gone to school.</span>'], a:1, sk:'writing', e:'الغائب المفرد يأخذ <span class="en">s</span>.'},
 {q:'صحّح: <span class="en">She is teacher.</span>', o:['<span class="en">She is a teacher.</span>','<span class="en">She is the teacher of.</span>','<span class="en">She teacher.</span>','<span class="en">She is teachers.</span>'], a:0, sk:'writing', e:'المهنة المفردة تحتاج <span class="en">a/an</span>.'},
 {q:'صحّح: <span class="en">more better</span>', o:['<span class="en">more good</span>','<span class="en">better</span>','<span class="en">most better</span>','<span class="en">more best</span>'], a:1, sk:'writing', e:'لا نجمع بين <span class="en">more</span> وصيغة المقارنة.'},
 {q:'صحّح: <span class="en">In nowadays</span>', o:['<span class="en">Nowadays</span>','<span class="en">On nowadays</span>','<span class="en">At nowadays</span>','<span class="en">In the nowadays</span>'], a:0, sk:'writing', e:'<span class="en">Nowadays</span> ظرف بلا حرف جر.'},
 {q:'<span class="en">The information ______ useful.</span>', o:['<span class="en">are</span>','<span class="en">is</span>','<span class="en">were</span>','<span class="en">have</span>'], a:1, sk:'writing', e:'<span class="en">information</span> غير معدودة ← مفرد.'},
 {q:'صحّح: <span class="en">He suggested me to go.</span>', o:['<span class="en">He suggested me going.</span>','<span class="en">He suggested that I should go.</span>','<span class="en">He suggested to me to go.</span>','<span class="en">He suggested I to go.</span>'], a:1, sk:'writing', e:'<span class="en">suggest</span> لا تأخذ <span class="en">مفعول + to</span>.'},
 {q:'أول سؤال في قائمة الفحص:', o:['هل الخطّ جميل؟','هل أجبتُ عن السؤال نفسه؟','هل عددتُ الكلمات؟','هل استعملتُ كلمات صعبة؟'], a:1, sk:'writing', e:'الخروج عن الموضوع أخطر خطأ.'},
 {q:'في الأسبوع الأخير من خطة الثلاثين يوماً:', o:['قراءة النماذج فقط','الكتابة بالتوقيت الامتحاني','حفظ المفردات','التوقّف عن الكتابة'], a:1, sk:'writing', e:'التدريب على ضغط الوقت يسبق الامتحان.'},
 {q:'أفضل وسيلة لإتقان الكتابة:', o:['القراءة عنها','الممارسة اليومية مع التصحيح','حفظ مواضيع جاهزة','الاعتماد على الحظّ'], a:1, sk:'writing', e:'مهارة لا تُتقَن إلّا بالممارسة والتصحيح.'}
]
}
];
