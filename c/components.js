document.documentElement.lang||(document.documentElement.lang='en');
(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function esc(s){return String(s).replace(/[<>&"]/g,function(c){return{'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]})}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function mounts(n){return [].slice.call(document.querySelectorAll('[data-c="'+n+'"]'))}

/* ===================== JOURNEY ===================== */
var INK='#2B4430',LF='#6E9460',LI='#CFDDA5',SA='#E9ECD6',SN='#F1E6D3',CL='#D9A57A',PA='#FFFCF7';
function S(inner){return '<svg viewBox="0 0 240 180" fill="none" stroke="'+INK+'" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+inner+'</svg>'}
var blob='<path d="M26 108C14 64 56 30 112 30s108 24 104 70c-4 44-52 58-100 56S36 150 26 108z" fill="'+SA+'" stroke="none"/>';
var IL=[
/* Discover: a person describing their concern */
S(blob+'<circle cx="190" cy="44" r="10" fill="'+SN+'" stroke="none"/>'+
'<path d="M62 160c0-34 13-58 30-58s30 24 30 58z" fill="'+LI+'"/><circle cx="92" cy="76" r="15" fill="'+SN+'"/><path d="M78 72c2-14 24-18 29-4" /><path d="M86 82q6 4 12 0" stroke-width="1.8"/>'+
'<path d="M132 36h62a9 9 0 0 1 9 9v34a9 9 0 0 1-9 9h-34l-16 14V88h-12a9 9 0 0 1-9-9V45a9 9 0 0 1 9-9z" fill="'+PA+'"/>'+
'<path d="M156 78c0-18 10-26 28-26 0 17-9 27-28 26z" fill="'+LI+'"/><path d="M156 78l16-14"/>'+
'<path d="M30 150h20M200 150h14" stroke-dasharray="1 6"/><path d="M168 130c8-6 14-2 16 6" stroke="'+CL+'"/>'),
/* Diagnose: pulse reading + chart */
S(blob+'<rect x="104" y="30" width="96" height="124" rx="10" fill="'+PA+'" transform="rotate(4 152 92)"/><rect x="138" y="24" width="30" height="12" rx="5" fill="'+LI+'" transform="rotate(4 152 92)"/>'+
'<path d="M118 100h18l8-22 12 42 10-30 8 10h14" stroke="'+LF+'" stroke-width="3" transform="rotate(4 152 92)"/>'+
'<path d="M118 130h54M118 142h36" stroke-dasharray="1 6" transform="rotate(4 152 92)"/>'+
'<path d="M34 118c10-30 22-12 36-26l16 8" fill="none"/><path d="M34 118c-4 26 20 40 42 22 10-8 12-20 10-40" fill="'+SN+'"/>'+
'<circle cx="78" cy="72" r="9" fill="'+LI+'"/><path d="M78 81c0 20-10 22-24 30" /><circle cx="44" cy="112" r="6" fill="'+CL+'" stroke="'+INK+'"/>'+
'<path d="M196 150c-4-20 4-34 18-40-2 18-6 30-18 40z" fill="'+LI+'"/><path d="M196 150c4-14 8-24 18-40"/>'),
/* Treat: oil therapy vessel and leaves */
S(blob+'<path d="M52 118h96c0 30-20 44-48 44s-48-14-48-44z" fill="'+CL+'" fill-opacity=".55"/><path d="M46 118h108" stroke-width="3"/>'+
'<path d="M154 40l24 8-14 22-30-6z" fill="'+PA+'" transform="rotate(-8 160 52)"/>'+
'<path d="M138 56c-8 14-14 26-14 40" stroke="'+LF+'" stroke-width="3"/><path d="M124 100c0 6-3 10 0 12" stroke="'+LF+'" stroke-width="3"/>'+
'<circle cx="124" cy="116" r="3" fill="'+LF+'" stroke="none"/>'+
'<path d="M170 150c6-22 22-32 40-32-4 20-18 32-40 32z" fill="'+LI+'"/><path d="M170 150c10-14 20-22 40-32"/>'+
'<path d="M30 150c4-18 14-26 28-28-2 16-12 26-28 28z" fill="'+LI+'"/><path d="M30 150c6-10 12-18 28-28"/>'+
'<circle cx="188" cy="40" r="5" fill="'+SN+'"/><circle cx="64" cy="52" r="4" fill="'+SN+'"/>'),
/* Thrive: person in open posture, rising sun, sprouts */
S('<circle cx="120" cy="82" r="52" fill="'+LI+'" stroke="none"/>'+blob.replace(SA,'#F3EDDF')+
'<circle cx="120" cy="82" r="52" fill="none" stroke="'+LF+'" stroke-dasharray="1 7"/>'+
'<circle cx="120" cy="68" r="12" fill="'+SN+'"/><path d="M120 80v38"/><path d="M120 92l-30-20M120 92l30-20"/><path d="M120 118l-18 32M120 118l18 32"/>'+
'<path d="M40 152h160" stroke-width="2.6"/>'+
'<path d="M52 152c0-14 8-24 16-26 2 12-4 22-16 26z" fill="'+LI+'"/><path d="M190 152c0-16-8-26-18-28-2 14 6 24 18 28z" fill="'+LI+'"/>'+
'<path d="M60 40l6 8M180 36l-6 8M120 20v10" stroke="'+CL+'"/>')
];
var J=[['Discover','Share your health concerns and tell us what you are looking for.'],['Diagnose','Meet with medical experts to receive a customized treatment protocol.'],['Treat','Undergo targeted care and therapeutic programs for targeted recovery.'],['Thrive','Sustain health gains with ongoing follow-ups and long-term care plans.']];
mounts('journey').forEach(function(m){
 var sec=document.createElement('section');sec.className='cj';sec.id=m.id||'journey';
 var h='<div class="trk"><div class="stg"><div class="cw cjh"><h2>How your <em>journey unfolds</em></h2><p>Understanding your health needs is the first step. Our care journey helps you explore the next steps with appropriate guidance.</p></div>'+
 '<div class="cw rail"><svg aria-hidden="false" role="group" aria-label="Journey progress"><path class="p-bg"/><path class="p-fg"/><g class="stops"></g><g class="trav"><circle class="halo" r="16"/><circle class="dot" r="8"/></g></svg></div>'+
 '<div class="cw cols">'+J.map(function(s,i){return '<button type="button" class="col" data-i="'+i+'" aria-label="Step '+(i+1)+': '+s[0]+'"><div class="il">'+IL[i]+'</div><div><small>Step 0'+(i+1)+'</small><b>'+s[0]+'</b><p>'+s[1]+'</p></div></button>'}).join('')+'</div>'+
 '<div class="ctr" aria-live="polite"><b class="cn">01</b><span>/ 04</span></div></div></div>';
 sec.innerHTML=h;m.replaceWith(sec);
 var trk=sec.querySelector('.trk'),stg=sec.querySelector('.stg'),rail=sec.querySelector('.rail'),svg=rail.querySelector('svg'),bg=svg.querySelector('.p-bg'),fg=svg.querySelector('.p-fg'),stops=svg.querySelector('.stops'),trav=svg.querySelector('.trav'),cols=[].slice.call(sec.querySelectorAll('.col')),cn=sec.querySelector('.cn');
 var NS='http://www.w3.org/2000/svg',W=0,Hh=0,L=1,xs=[],lastK=-1;
 function build(){
  W=rail.clientWidth;Hh=rail.clientHeight;svg.setAttribute('viewBox','0 0 '+W+' '+Hh);
  var pad=Math.min(70,W*.08),a=pad,b=W-pad,amp=Hh*.26,mid=Hh*.46;
  /* stops sit over the centre of each column on desktop, evenly spaced on mobile */
  var wide=innerWidth>860;xs=J.map(function(_,i){return wide?(W/8)*(2*i+1):pad+(b-pad)*i/3});
  var x0=xs[0]-(wide?W/10:0),x1=xs[3]+(wide?W/10:0);
  var pts=[],steps=80;for(var i=0;i<=steps;i++){var x=x0+(x1-x0)*i/steps;pts.push([x,mid+Math.sin((x-x0)/(x1-x0)*Math.PI*3.2)*amp])}
  var d=pts.map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('');
  bg.setAttribute('d',d);fg.setAttribute('d',d);L=bg.getTotalLength();fg.style.strokeDasharray=L;
  stops.innerHTML='';
  xs.forEach(function(x,i){var y=yAt(x),g=document.createElementNS(NS,'g');g.setAttribute('class','stop');g.dataset.i=i;g.innerHTML='<circle class="o" cx="'+x+'" cy="'+y+'" r="13"/><circle class="i" cx="'+x+'" cy="'+y+'" r="5"/>';stops.appendChild(g)});
  lastK=-1;upd();
 }
 function lenAtX(x){var lo=0,hi=L;for(var i=0;i<24;i++){var md=(lo+hi)/2;if(bg.getPointAtLength(md).x<x)lo=md;else hi=md}return (lo+hi)/2}
 function yAt(x){return bg.getPointAtLength(lenAtX(x)).y}
 function prog(){var r=trk.getBoundingClientRect(),span=trk.offsetHeight-stg.offsetHeight;return span>0?clamp(-r.top/span,0,1):0}
 function upd(){
  if(!L||!xs.length)return;var p=prog(),k=Math.round(p*3);
  var la=lenAtX(xs[0]),lb=lenAtX(xs[3]);var len=la+(lb-la)*p;
  /* the filled line begins at the very start of the path */
  fg.style.strokeDashoffset=L-len;var pt=bg.getPointAtLength(len);trav.setAttribute('transform','translate('+pt.x+' '+pt.y+')');
  if(k!==lastK){lastK=k;cols.forEach(function(c,i){c.classList.toggle('on',i==k)});[].forEach.call(stops.children,function(g,i){g.setAttribute('class','stop'+(i<k?' done':'')+(i==k?' on':''))});cn.textContent='0'+(k+1)}
 }
 var tk=false;function q(){if(!tk){tk=true;requestAnimationFrame(function(){upd();tk=false})}}
 addEventListener('scroll',q,{passive:true});addEventListener('resize',function(){build()});
 function go(i){var span=trk.offsetHeight-stg.offsetHeight,top=scrollY+trk.getBoundingClientRect().top+span*(i/3)+1;scrollTo({top:top,behavior:rm?'auto':'smooth'})}
 svg.addEventListener('click',function(e){var g=e.target.closest('.stop');if(g)go(+g.dataset.i)});
 sec.querySelector('.cols').addEventListener('click',function(e){var b=e.target.closest('.col');if(b)go(+b.dataset.i)});
 build();setTimeout(build,400);
});

/* ===================== TOUR (Option 2) ===================== */
var TOUR=[['x-hall','Arrival','Open verandas look out over the gardens at the foothills of the Velliangiri Mountains. Reception is just inside.'],
['x-online','Consultations','Meet your doctor in person or online. Your history is reviewed before anything is planned.'],
['v3','Yoga hall','Guided yoga practice as part of your program, adapted to your condition.'],
['x-shiro','Therapy rooms','Ayurvedic therapies delivered by trained therapists, planned by your doctor.'],
['v5','Panchakarma suite','Panchakarma preparations and therapies, supervised daily.'],
['x-herbs','Herbal pharmacy','Natural medicines prepared for your plan, explained before you take them.'],
['v7','Walks on campus','Gentle walks through the grounds are part of the daily routine.'],
['v8','Rest and recovery','Quiet time outdoors to let the benefits settle between therapies.']];
mounts('tour').forEach(function(m){
 var sec=document.createElement('section');sec.id='tour';sec.className='tour';
 sec.innerHTML='<div class="track"><div class="stage"><div class="wrap intro"><div class="head"><h2>Step into a serene sanctuary <em>dedicated to your recovery</em></h2><p class="lede">Nestled in peaceful surroundings, our quiet therapy suites, clinical rooms, and open yoga halls offer a tranquil retreat for deep physical renewal.</p></div></div><div class="cam"><div class="world"><div class="floor"></div></div></div><div class="glow"></div><div class="hud"><div class="wrap"><div class="now" aria-live="polite"><small class="tNo">Stop 1 of 8</small><b class="tName"></b><span class="tDesc"></span></div><div class="prog"></div></div></div></div></div><div class="wrap flat"></div>';
 m.replaceWith(sec);
 var N=TOUR.length,D=760,track=sec.querySelector('.track'),world=sec.querySelector('.world'),stage=sec.querySelector('.stage'),prog=sec.querySelector('.prog');track.style.setProperty('--n',N);
 sec.querySelector('.flat').innerHTML=TOUR.map(function(t){return '<figure><img src="i/'+t[0]+'.jpg" alt="'+esc(t[1])+'" loading="lazy"><figcaption>'+esc(t[1])+'</figcaption></figure>'}).join('');
 var narrow=matchMedia('(max-width:640px)');
 var pns=TOUR.map(function(t,i){var el=document.createElement('div');el.className='pn';el.innerHTML='<figure><img src="i/'+t[0]+'.jpg" alt="'+esc(t[1])+'"><figcaption><span>'+String(i+1).padStart(2,'0')+'</span>'+esc(t[1])+'</figcaption></figure>';world.appendChild(el);return el});
 prog.innerHTML=TOUR.map(function(){return '<i></i>'}).join('');
 var bars=prog.querySelectorAll('i'),last=-1,tNo=sec.querySelector('.tNo'),tName=sec.querySelector('.tName'),tDesc=sec.querySelector('.tDesc');
 function place(){var x=narrow.matches?Math.round(innerWidth*.1):Math.round(Math.min(340,innerWidth*.235)),ry=narrow.matches?16:38;pns.forEach(function(p,i){var side=i%2?1:-1;p.dataset.z=-(i*D+560);p.style.transform='translate3d('+(side*x)+'px,0,'+(-(i*D+560))+'px) rotateY('+(-side*ry)+'deg)'})}
 function frame(){var r=track.getBoundingClientRect(),span=track.offsetHeight-stage.offsetHeight;if(!(span>0))return;var p=Math.max(0,Math.min(1,-r.top/span));
  var cam=p*(N-1)*D+260,bob=Math.sin(cam/110)*5,sway=Math.sin(cam/220)*.6;
  world.style.transform='translate3d(0,'+bob+'px,'+cam+'px) rotateZ('+sway+'deg)';
  pns.forEach(function(el){var z=+el.dataset.z+cam;var fs=narrow.matches?-400:-220,o=z>fs?Math.max(0,1-(z-fs)/(narrow.matches?200:230)):z<-D*3.2?Math.max(0,1+(z+D*3.2)/D):1;el.style.opacity=o.toFixed(3)});
  var k=Math.max(0,Math.min(N-1,Math.round((cam-260)/D)));
  if(k!==last){last=k;tNo.textContent='Stop '+(k+1)+' of '+N;tName.textContent=TOUR[k][1];tDesc.textContent=TOUR[k][2];[].forEach.call(bars,function(b,j){b.classList.toggle('on',j<=k)})}}
 place();if(!rm)frame();
 if(!rm){var tk=false;addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(function(){frame();tk=false})}},{passive:true});addEventListener('resize',function(){place();frame()});narrow.addEventListener&&narrow.addEventListener('change',function(){place();frame()})}
});

/* ===================== FAQ (nofinder) ===================== */
var QD=[{t:'Getting started',q:'How do I know which program is right for me?',a:"Start with a free consultation; your doctor recommends what your condition needs. You can also use Help me choose and we will point you to the right place."},
{t:'Getting started',q:'My condition is not listed. Can you still help?',a:'Very possibly. Ayurveda treats the person, not only the condition. Book a free consultation and a doctor will tell you honestly whether we are the right place.'},
{t:'Care & treatment',q:'I am on allopathic medication. Can I still come?',a:'Yes. Our doctors review your case and integrate treatment safely. Any change to your medication is made gradually and only under medical guidance.'},
{t:'Care & treatment',q:'How long do programs usually last?',a:'From a single consultation to 21 days, depending on your condition. Your doctor will recommend the duration.'},
{t:'Your stay',q:'Do I have to stay residentially?',a:'No. Many programs are available non-residentially, with online follow-up.'}];
mounts('faq').forEach(function(m){
 var Q=m.dataset.q?JSON.parse(m.dataset.q):QD;
 var sec=document.createElement('div');sec.className='cfaq';
 sec.innerHTML='<div class="fqw"><div class="hd"><div><h2>'+(m.dataset.h||'Have questions about our programs?')+'</h2></div><div><p>'+(m.dataset.s||'Find answers to common questions about program duration, residential stays, and treatment protocols, or speak directly with our health team.')+'</p><label class="srch"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input class="fqs" type="search" placeholder="Search a question, e.g. medication" aria-label="Search questions"></label></div></div><div class="fqt" role="group" aria-label="Topics"></div><ol class="fql"></ol></div>';
 m.replaceWith(sec);
 var fqt=sec.querySelector('.fqt'),fql=sec.querySelector('.fql'),fqs=sec.querySelector('.fqs'),qt='All',qi=0,qs='';
 function fr(){var topics=['All'].concat(Q.map(function(x){return x.t}).filter(function(v,i,a){return a.indexOf(v)==i}));
  fqt.innerHTML=topics.map(function(t){var n=t=='All'?Q.length:Q.filter(function(x){return x.t==t}).length;return '<button type="button" data-t="'+esc(t)+'" aria-pressed="'+(t==qt)+'">'+esc(t)+'</button>'}).join('');
  var vis=Q.map(function(x,i){return i}).filter(function(i){var x=Q[i];return (qt=='All'||x.t==qt)&&(!qs||(x.q+' '+x.a).toLowerCase().indexOf(qs)>-1)});
  if(qi>=0&&vis.indexOf(qi)<0)qi=vis.length?vis[0]:-1;
  fql.innerHTML=vis.length?vis.map(function(i){return '<li class="'+(i==qi?'op':'')+'"><button type="button" data-i="'+i+'" aria-expanded="'+(i==qi)+'"><span>'+Q[i].q+'</span><span class="pm" aria-hidden="true">'+(i==qi?'−':'+')+'</span></button><div class="fan"'+(i==qi?'':' hidden')+'><p>'+Q[i].a+'</p></div></li>'}).join(''):'<li class="nores">No question matches “'+esc(qs)+'”. Ask us directly instead.</li>'}
 fr();
 fqt.onclick=function(e){var b=e.target.closest('button');if(b){qt=b.dataset.t;fr()}};
 fql.onclick=function(e){var b=e.target.closest('button');if(!b)return;var i=+b.dataset.i;qi=(qi===i)?-1:i;fr();var f=fql.querySelector('[data-i="'+i+'"]');if(f)f.focus({preventScroll:true})};
 fqs.addEventListener('input',function(){qs=this.value.trim().toLowerCase();fr()});
});

/* ===================== JOURNEY (scroll-driven, slider bar) ===================== */
(function(){
var jw=document.getElementById('jwrap');if(!jw)return;
var J=[['Discover','Share your health concerns and tell us what you are looking for.','i/jill.svg'],['Diagnose','Meet with medical experts to receive a customized treatment protocol.','i/st2.png'],['Treat','Undergo targeted care and therapeutic programs for targeted recovery.','i/st3.png'],['Thrive','Sustain health gains with ongoing follow-ups and long-term care plans.','i/st4.png']],k=-1;
var st=document.getElementById('jstage'),ln=document.getElementById('jline');
jw.classList.add('jscroll');jw.style.setProperty('--n',J.length);
st.innerHTML='<div class="jtrack">'+J.map(function(s,i){return '<div class="jsl" role="group" aria-roledescription="slide" aria-label="Step '+(i+1)+' of '+J.length+'"><div class="il"><img src="'+s[2]+'" alt=""></div><div class="tx"><span class="jpill">Step '+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div></div>'}).join('')+'</div>';
var track=st.firstChild,sl=[].slice.call(track.children);
ln.innerHTML='<i class="jln"></i><i class="jln jfl" id="jfill"></i>'+J.map(function(x,i){return '<button type="button" class="jbar" data-i="'+i+'" data-n="'+(i+1)+'" aria-label="Step '+(i+1)+': '+x[0]+'"><i></i><span>'+x[0]+'</span></button>'}).join('');var jf=document.getElementById('jfill');
var bars=[].slice.call(ln.querySelectorAll('.jbar'));
function range(){var r=jw.getBoundingClientRect(),hh=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hh'))||72;var tot=jw.offsetHeight-(innerHeight-hh);return {top:r.top+scrollY-hh,tot:Math.max(1,tot),y:scrollY}}
function upd(){var g=range(),p=Math.max(0,Math.min(1,(g.y-g.top)/g.tot)),n=J.length,i=Math.min(n-1,Math.floor(p*n));
 if(i!=k){k=i;track.style.transform='translateX(-'+(k*100)+'%)';sl.forEach(function(s,j){s.setAttribute('aria-hidden',j!=k)})}
 bars.forEach(function(b,j){var f=Math.max(0,Math.min(1,p*n-j));b.style.setProperty('--f',f);b.classList.toggle('on',j==k);b.classList.toggle('done',j<k)});if(jf)jf.style.width=(Math.max(0,Math.min(1,(p*n-.5)/(n-1)))*100)+'%'}
var t=0;addEventListener('scroll',function(){if(!t)t=requestAnimationFrame(function(){t=0;upd()})},{passive:true});addEventListener('resize',upd);
ln.addEventListener('click',function(e){var b=e.target.closest('.jbar');if(!b)return;var g=range(),i=+b.dataset.i;scrollTo({top:g.top+g.tot*(i+.5)/J.length,behavior:'smooth'})});
upd();
})();
})();

/* ---- IA: formats, availability, registration flow ---- */
(function(){
var FM={
c:{t:'Consultation',sub:'Online or in person · 30 min – 1 hr',cta:'Book consultation',steps:[['Login or register','Create your profile so your doctor can see your details.',['Add your name and contact number','Already registered? Simply log in']],['Select your symptom','Tell us what is troubling you.',['Choose the closest concern, such as back pain or migraine','Add anything else the doctor should know']],['Check location and dates','Pick in person or online and see what is open.',['Compare available dates','Choose the format that suits you']],['Book consultation','Confirm your slot with a doctor.',['Consultations take 30 minutes to an hour','Your doctor reviews your case first']]]},
r:{t:'Residential',sub:'Intensive treatment and rehabilitation · 7–21 days',cta:'Enquire for residential',steps:[['Select program','Choose the program closest to your condition.',['See which programs are offered residentially','Not sure? Ask for guidance']],['Submit enquiry','Share your details and what you are looking for.',['Name and Whatsapp number','Your condition and any current medication']],['Pilot call','A doctor speaks with you before anything is confirmed.',['A review of your case','Advice on whether the program fits you']],['Confirmation','Dates and arrangements are confirmed with you.',['Residential programs run 7 to 21 days','Your doctor recommends the duration']],['Registration','Complete registration to secure your place.',['Final steps with our team','Guidance on what to prepare']]]},
n:{t:'Non-residential',sub:'Online treatment and follow-up',cta:'Submit interest',steps:[['Select program','Choose the program closest to your condition.',['See which programs run non-residentially','Not sure? Ask for guidance']],['Submit interest','Tell us you would like to take part.',['Name and Whatsapp number','Your condition and any current medication']],['Pilot call','A doctor speaks with you before anything is confirmed.',['A review of your case','Advice on whether the program fits you']],['Registration','Complete registration to begin.',['Final steps with our team','Online follow-up as part of the program']]]},
wi:{t:'Wellness, in person',sub:'Therapies and retreats on campus',cta:'Start with a pilot call',steps:[['Pilot call','A doctor speaks with you about what you need.',['A short conversation about your goals','Advice on the right therapy']],['Therapy confirmation','Your therapies and dates are confirmed.',['Therapies chosen with your doctor','Dates confirmed with you']],['Registration','Complete registration to secure your place.',['Final steps with our team','Guidance on what to prepare']]]},
wo:{t:'Wellness, online',sub:'Guided programs from home',cta:'Start with a pilot call',steps:[['Pilot call','A doctor speaks with you about what you need.',['A short conversation about your goals','Advice on the right program']],['Program confirmation','Your program and schedule are confirmed.',['Program chosen with your doctor','Schedule confirmed with you']],['Registration','Complete registration to begin.',['Final steps with our team','Guided sessions from home']]]}};
var PATHS=[
{k:'c',t:'Consultation',tag:'Yoga Upchar',d:'Assessment, guidance and personalised care with a doctor.',who:'For people with a health concern or diagnosis, or who need medical guidance.',f:['c']},
{k:'p',t:'Programs',tag:'Yoga Chikitsa',d:'Structured treatment or rehabilitation for a specific condition.',who:'For people with a specific condition, or seeking long-term improvement.',f:['r','n']},
{k:'w',t:'Wellness & Retreat',tag:'Yoga Marga',d:'Maintain and enhance overall well-being.',who:'For people wanting vitality, better recovery and a steadier lifestyle.',f:['wi','wo']}];
var AV={'all-kinds-of-muscle-joint-and-nerve-related-pain':'c n wo','migraine-and-headaches':'c r n wo','arthritis':'c r wo','spine-related-issues':'c r wo','chronic-pain-management':'c r n wo','sports-injuries':'c r wo','mobility-and-balance':'c wi','post-surgical-injury-rehabilitation':'c r wo','pulmonary-rehabilitation':'c r wo','cardiac-rehabilitation':'c r wo','stroke-rehabilitation':'c r wo','nutrition':'c r n wi'};
function slugOf(h){var m=(h||'').match(/prog-(.*?)\.html/);return m&&m[1]}
function how(el,k,tabs,onTab){
 var S=FM[k].steps,cur=0;
 function draw(){var s=S[cur];
  el.innerHTML='<div class="howtabs" role="tablist" aria-label="Program type">'+tabs.map(function(t){return '<button type="button" role="tab" data-k="'+t+'" aria-selected="'+(t==k)+'" class="'+(t==k?'on':'')+'">'+FM[t].t+'</button>'}).join('')+'</div>'
  +'<p class="howsub">'+FM[k].sub+'</p>'
  +'<div class="howrow" style="--ns:'+S.length+'">'+S.map(function(x,i){return '<button type="button" class="hs'+(i==cur?' on':'')+(i<cur?' done':'')+'" data-i="'+i+'"><b>0'+(i+1)+'</b><span>'+x[0]+'</span></button>'}).join('')+'</div>'
  +'<div class="howdet"><div class="hd2"><small>Step 0'+(cur+1)+' of 0'+S.length+'</small><h3>'+s[0]+'</h3><p>'+s[1]+'</p><ul>'+s[2].map(function(b){return '<li>'+b+'</li>'}).join('')+'</ul><a class="btn btn-p" href="#enquire">'+FM[k].cta+' <span class="ci">→</span></a></div>'
  +'<div class="phone" aria-hidden="true"><div class="ph"><i>9:41</i><em>Isha Health</em></div><div class="pb"><small>'+FM[k].t+'</small><b>'+s[0]+'</b><div class="pr">'+s[2].map(function(b){return '<span>'+b+'</span>'}).join('')+'</div><div class="pp">'+S.map(function(_,i){return '<u class="'+(i<=cur?'on':'')+'"></u>'}).join('')+'</div></div></div></div>'}
 draw();
 el.onclick=function(e){var t=e.target.closest('.howtabs button');if(t){if(onTab)onTab(t.dataset.k);return}var h=e.target.closest('.hs');if(h){cur=+h.dataset.i;draw()}}}
function badges(k){return (AV[k]||'').split(' ').map(function(f){return FM[f]?'<span class="ib ib-'+f+'">'+FM[f].t+'</span>':''}).join('')}
var state={f:''};
function apply(){
 var cards=document.querySelectorAll('.pgs .pc[data-slug]'),n=0;
 cards.forEach(function(c){var ok=!state.f||(AV[c.dataset.slug]||'').split(' ').indexOf(state.f)>-1;c.hidden=!ok;if(ok)n++;
  var e=c.querySelector('.pe');if(e){e.firstChild.nodeValue=state.f?FM[state.f].cta:'Enquire'}});
 var ct=document.getElementById('iacount');if(ct)ct.textContent=state.f?n+' of '+cards.length+' programs available as '+FM[state.f].t.toLowerCase():'All '+cards.length+' programs. Pick a path above to see how each can be taken.';
 document.querySelectorAll('.iap').forEach(function(p){var on=PATHS.filter(function(x){return x.k==p.dataset.p})[0].f.indexOf(state.f)>-1;p.classList.toggle('on',on);p.setAttribute('aria-pressed',on)});
 document.querySelectorAll('.iaf button').forEach(function(b){b.classList.toggle('on',b.dataset.f==state.f)});
 var r=document.getElementById('iareg');if(r)renderReg(r)}
function renderReg(el){var k=state.f||'r';how(el,k,Object.keys(FM),function(t){state.f=t;apply()})}
function mountFilter(el){
 el.innerHTML='<div class="iapaths">'+PATHS.map(function(p){return '<button type="button" class="iap" data-p="'+p.k+'" aria-pressed="false"><small>'+p.tag+'</small><b>'+p.t+'</b><span>'+p.d+'</span><em>'+p.who+'</em></button>'}).join('')+'</div><div class="iaf" role="group" aria-label="Format"><span>Format</span><button type="button" data-f="">All</button>'+Object.keys(FM).map(function(k){return '<button type="button" data-f="'+k+'">'+FM[k].t+'</button>'}).join('')+'</div><p class="iacount" id="iacount" aria-live="polite"></p>';
 el.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.dataset.p){var p=PATHS.filter(function(x){return x.k==b.dataset.p})[0];state.f=p.f.indexOf(state.f)>-1?'':p.f[0]}else if('f' in b.dataset){state.f=b.dataset.f}apply()})}
function mountAvail(el){
 var s=el.dataset.slug||(location.pathname.match(/prog-(.*?)\.html/)||[])[1];var a=(AV[s]||'').split(' ').filter(Boolean);if(!a.length)return;
 var name=el.dataset.name||'this program';
 el.innerHTML='<div class="w"><div class="hd"><h2>How it <em>works</em></h2><p>'+name+' is available in '+a.length+' format'+(a.length>1?'s':'')+'. Choose one to see the steps. One team the whole way.</p></div><div class="how" id="hw"></div></div>';
 var box=el.querySelector('#hw');function show(k){how(box,k,a,show)}show(a[0])}
function init(){
 document.querySelectorAll('.pgs .pc').forEach(function(c){var s=slugOf((c.querySelector('.pbt')||c).getAttribute('href'));if(s){c.dataset.slug=s;var h=c.querySelector('h3');if(h&&!c.querySelector('.ibs'))h.insertAdjacentHTML('afterend','<div class="ibs">'+badges(s)+'</div>')}});
 document.querySelectorAll('[data-c="iafilter"]').forEach(mountFilter);
 document.querySelectorAll('[data-c="iareg"]').forEach(function(el){el.id='iareg';el.classList.add('how')});
 document.querySelectorAll('[data-c="avail"]').forEach(mountAvail);
 if(document.getElementById('iacount'))apply()}
if(document.readyState!='loading')init();else document.addEventListener('DOMContentLoaded',init)})();

/* shared hero (headline word reveal + pointer depth) and stats ticker */
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var m=document.getElementById('mqi');if(m&&!m.children.length){var st=['30% Improved Mobility','10,000+ Lives Supported','100% Patient Satisfaction','30% Reduced Stress Levels'],h='';try{if(m.dataset.stats)st=JSON.parse(m.dataset.stats)}catch(e){}for(var k=0;k<4;k++)st.forEach(function(s){h+='<span>'+s+'</span><i></i>'});m.innerHTML=h}
var h1=document.getElementById('h1'),hero=document.getElementById('hero');if(!h1||!hero||h1.querySelector('.wd'))return;var i=0;
function wrap(n0){[].slice.call(n0.childNodes).forEach(function(n){if(n.nodeType===3){var f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return}var o=document.createElement('span');o.className='wd';var t=document.createElement('span');t.style.setProperty('--d',i++);t.textContent=w;o.appendChild(t);f.appendChild(o)});n.replaceWith(f)}else wrap(n)})}wrap(h1);
if(rm||!matchMedia('(hover:hover)').matches)return;

})();

/* motion standard: one reveal system for every page */
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var hd=document.querySelector('header');if(hd){var f=function(){hd.classList.toggle('scrolled',scrollY>8)};addEventListener('scroll',f,{passive:true});f()}
if(rm||!('IntersectionObserver' in window))return;
var G='.xp-f,.xp-r,.cl,.lb-hd,.lb-row article,.ak-h,.ak-g>div,.fmc,.vs .hd,.vwho>div,.vben>div,.vta article,.vpd>div,.vinc>div,.vst,.vq figure,.kcs .hd,.cint .in,.rel-sec .hd,.sup .l,.sup form,.csec>.w>.hd,.csec>.w.cpn>.hd,.csec .fm,.p4h,.ns .t,.ns .col,.fps>*,.ots>*,.dc,.ic,.kc,.rels .rlk,.cfaq .fqw,.fqw';
var els=[].slice.call(document.querySelectorAll(G)).filter(function(e){return !e.closest('.jwrap,.tour,.hero,.car,.stories')&&!e.parentElement.closest('.rv')});
els.forEach(function(e){
 var p=e.parentElement,sib=[].filter.call(p.children,function(c){return c.matches&&els.indexOf(c)>-1}),n=Math.min(sib.indexOf(e),5);
 var r=e.getBoundingClientRect();if(r.top<innerHeight*.9&&r.bottom>0)return;
 e.classList.add('rv');e.style.setProperty('--rd',(n<0?0:n)*90+'ms');
 var im=e.querySelector('.kc-im,.rim');if(im)e.classList.add('rv-img')});
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var el=x.target;el.classList.add('in');io.unobserve(el);setTimeout(function(){el.classList.remove('rv','in','rv-img');el.style.removeProperty('--rd')},1700+parseInt(el.style.getPropertyValue('--rd')||0))}})},{rootMargin:'0px 0px -10% 0px',threshold:.06});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)})})();

/* brand loader: lift curtain, then start hero motion */
(function(){var d=document.documentElement;if(!d.classList.contains('has-ld'))return;var t0=performance.now(),done=false;
function go(){if(done)return;done=true;var wait=Math.max(0,1300-(performance.now()-t0));setTimeout(function(){d.classList.add('ld-out');d.classList.remove('is-loading');setTimeout(function(){d.classList.remove('has-ld','ld-out')},1100)},wait)}
if(document.readyState==='complete')go();else{addEventListener('load',go);setTimeout(go,3200)}})();

/* enquiry forms: validation, endpoint hook, success state (shared) */
(function(){var MM=window.MYMEDIC||'https://mymedic.in/';
document.querySelectorAll('form[data-enquiry]').forEach(function(f){
 f.onsubmit=null;
 function err(el,msg){var lab=el.closest('label')||el.parentElement,id=(el.id||Math.random().toString(36).slice(2))+'-err',m=lab.querySelector('.fe-msg');
  if(!msg){el.removeAttribute('aria-invalid');if(m)m.remove();return true}
  el.setAttribute('aria-invalid','true');if(!m){m=document.createElement('span');m.className='fe-msg';m.id=id;lab.appendChild(m)}m.textContent=msg;el.setAttribute('aria-describedby',id);return false}
 function check(el){var v=(el.value||'').trim();
  if(el.type==='checkbox')return err(el,el.required&&!el.checked?'Please accept to continue.':'');
  if(el.required&&!v)return err(el,'This field is required.');
  if(el.type==='tel'&&v&&!/^\+?[\d\s()-]{8,18}$/.test(v))return err(el,'Enter a WhatsApp number with country code, e.g. +91 98765 43210.');
  if(el.type==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))return err(el,'Enter a valid email address.');
  return err(el,'')}
 var fields=[].slice.call(f.querySelectorAll('input,select,textarea'));
 fields.forEach(function(el){el.addEventListener('blur',function(){if(el.hasAttribute('aria-invalid')||el.value)check(el)});el.addEventListener('input',function(){if(el.hasAttribute('aria-invalid'))check(el)})});
 f.addEventListener('submit',function(e){e.preventDefault();var ok=true,first=null;fields.forEach(function(el){if(!check(el)){ok=false;first=first||el}});if(!ok){first.focus();return}
  var btn=f.querySelector('button[type=submit]');btn.disabled=true;btn.classList.add('is-busy');var data={};fields.forEach(function(el){data[el.id||el.name]=el.type==='checkbox'?el.checked:el.value.trim()});data.page=location.pathname;
  var name=(f.querySelector('input[type=text]')||{}).value||'';
  function done(){var box=document.createElement('div');box.className='fe-done';box.setAttribute('role','status');box.setAttribute('tabindex','-1');
   box.innerHTML='<span class="fe-ic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h3>Thank you'+(name?', '+name.replace(/[<>&"]/g,'').split(' ')[0]:'')+'.</h3><p>Our health team will reach out on WhatsApp to understand your concern and guide your next step.</p><a class="btn btn-p" href="'+MM+'" target="_blank" rel="noopener">Book a consultation now<span class="ci">→</span></a>';
   f.replaceChildren(box);box.focus()}
  function fail(){btn.disabled=false;btn.classList.remove('is-busy');var o=f.querySelector('.ok');if(o)o.textContent='Something went wrong. Please try again, or call +91 83000 45333.'}
  var ep=f.dataset.endpoint;if(ep){fetch(ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(function(r){r.ok?done():fail()}).catch(fail)}else{setTimeout(done,600)}
 })})})();

/* ===================== Scroll-to-top (all pages) ===================== */
(function(){
 if(document.querySelector('.totop'))return;
 var b=document.createElement('button');b.type='button';b.className='totop';b.setAttribute('aria-label','Scroll to top');
 b.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>';
 document.body.appendChild(b);
 var on=false,tk=false;
 function upd(){var s=(window.pageYOffset||document.documentElement.scrollTop)>Math.max(480,innerHeight*.6);if(s!==on){on=s;b.classList.toggle('on',s)}}
 addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(function(){upd();tk=false})}},{passive:true});
 b.addEventListener('click',function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;window.scrollTo({top:0,behavior:rm?'auto':'smooth'});setTimeout(function(){var h=document.querySelector('header a,header button');if(h)h.focus({preventScroll:true})},rm?0:600)});
 upd();
})();
