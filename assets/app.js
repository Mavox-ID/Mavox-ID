(function(){
var d=document,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function c(v,a,b){a=a||0;b=b==null?1:b;return v<a?a:v>b?b:v}
function $(s){return[].slice.call(d.querySelectorAll(s))}
function L(a,b,t){return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function R(a){return"rgb("+(a[0]|0)+","+(a[1]|0)+","+(a[2]|0)+")"}
var rs=$(".r"),bars=$(".bar"),ns=$(".n"),cards=$(".card"),pjs=d.querySelector(".pjs"),fb=d.querySelector(".fb"),ff=d.querySelector(".ff"),hero=d.querySelector(".hero"),hin=d.querySelector(".hin"),pr=d.querySelector(".pr"),wr=d.querySelector(".wr"),wp=wr.querySelector("p"),pj=d.querySelector(".pj");
var vw=innerWidth,vh=innerHeight,Z=1,td=0,sd=0,ss=0,mx=-999,my=-999,chs=[],cws=[],pk=[],mh=300;
$("[data-m]").forEach(function(a){var m=a.getAttribute("data-m").split("").reverse().join("");a.href="mailto:"+m;a.textContent=m});
var cp=d.querySelector(".cp");
if(cp)cp.addEventListener("click",function(){var m=d.querySelector(".mail").textContent;try{navigator.clipboard.writeText(m).then(function(){cp.textContent="Copied";setTimeout(function(){cp.textContent="Copy email"},1600)})}catch(e){}});
$(".gl").forEach(function(e){e.addEventListener("pointermove",function(v){var b=e.getBoundingClientRect();e.style.setProperty("--gx",v.clientX-b.left+"px");e.style.setProperty("--gy",v.clientY-b.top+"px")})});
var txt=wp.textContent.trim().split(/\s+/);wp.textContent="";
var ws=txt.map(function(w){var s=d.createElement("span");s.textContent=w+" ";s.style.opacity=.18;wp.appendChild(s);return s});
function ez(v){return 1-Math.pow(1-v,3)}
function sm(a,b,v){var t=c((v-a)/(b-a));return t*t*(3-2*t)}
function upd(){
var y=scrollY,mxs=d.documentElement.scrollHeight-vh;
td=mxs>Z?c((y-Z)/(mxs-Z)):0;
ss=c(y/Z);
pr.style.transform="scaleX("+(mxs>0?c(y/mxs):0)+")";
var s=c(y/(vh*.8));
hin.style.transform="translate3d(0,"+(-s*60)+"px,0) scale("+(1+s*.35)+")";
hin.style.opacity=c(1-s*1.4);
var t=rs.map(function(e){return e.getBoundingClientRect().top});
rs.forEach(function(e,i){var p=c((vh*.98-t[i])/(vh*.3));e.style.opacity=p;e.style.transform="translate3d(0,"+(1-p)*56+"px,0)"});
ns.forEach(function(e){var p=c((vh*.98-e.getBoundingClientRect().top)/(vh*.32));e.textContent=Math.round(e.dataset.n*p).toLocaleString("en-US")+(e.dataset.s||"")});
bars.forEach(function(b){var p=c((vh*.99-b.getBoundingClientRect().top)/(vh*.25));b.firstChild.style.width=(b.dataset.v*p)+"%"});
var b=wr.getBoundingClientRect(),k=c(-b.top/(b.height-vh))*1.2*ws.length;
ws.forEach(function(w,i){w.style.opacity=c(.18+(k-i),.18,1)});
var pb=pj.getBoundingClientRect(),n=cards.length,se=n-1+.4,u=c(-pb.top/(pb.height-vh))*(se+1.8),lp=Math.min(u,se),fp=c((u-se-.2)/1.4);
var fH=Math.min(.34*vh,300),fW=Math.min(pjs.clientWidth,560),fe=ez(c(fp/.25)),ft=vh-vh*.06-fH*.68;
fb.style.transform=ff.style.transform="translate3d(-50%,"+(1-fe)*(fH+90)+"px,0)";
cards.forEach(function(e,i){var eo=ez(i?c(lp-(i-1)):1),dd=c(lp-i,0,5),sy=(1-eo)*vh*1.05-dd*11,sc=1-dd*.03,j=n-1-i,di=ez(c((fp-.15-j*.1)/.3)),w=cws[i]||300,sf=c(fW*.8/w,.18,.42),yf=ft-(8+j*5)-(vh/2-mh/2);e.style.transform="translate3d(0,"+(sy+(yf-sy)*di-mh/2)+"px,0) rotate("+((i%3-1)*2.2*di)+"deg) scale("+(sc+(sf-sc)*di)+")"});
if(rm)draw(0)
}
var ALL=".:-=+*#o,%&~@O0",T=32,dp=1;
function atlas(tint){var a=d.createElement("canvas"),g=a.getContext("2d");a.width=T*ALL.length;a.height=T;g.font="600 26px ui-monospace,Menlo,Consolas,monospace";g.textAlign="center";g.textBaseline="middle";g.fillStyle="#fff";for(var i=0;i<ALL.length;i++)g.fillText(ALL.charAt(i),i*T+T/2,T/2+1);if(tint){g.globalCompositeOperation="source-in";g.fillStyle=tint;g.fillRect(0,0,a.width,T)}return a}
var A1=atlas(),A2=atlas("#ffb454"),A3=atlas("#d7e8ff"),A4=atlas("#ff5a2e");
function ix(s){return s.split("").map(function(ch){return ALL.indexOf(ch)})}
var SEA=ix(".:-=+*#"),WAT=ix(".o:,"),CR=ix("#%&=+"),MA=ix("*+~:"),CO=ix("@O0o");
var cv=d.getElementById("bg"),x=cv.getContext("2d"),lc=d.createElement("canvas"),lx=lc.getContext("2d"),W,H,cell,cols,rows,last=0,hz=0;
var iOS=/iP(hone|ad|od)/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
function rz(){vw=innerWidth;vh=innerHeight;W=vw;H=vh;Z=Math.max(1,hero.offsetHeight-vh);dp=Math.min(devicePixelRatio||1,1.5);cv.width=lc.width=W*dp;cv.height=lc.height=H*dp;x.setTransform(dp,0,0,dp,0,0);lx.setTransform(dp,0,0,dp,0,0);chs=cards.map(function(e){return e.offsetHeight});mh=Math.max.apply(null,chs)||300;cws=cards.map(function(e){return e.offsetWidth});cell=W<700?22:18;cols=Math.ceil(W/cell)+1;rows=Math.ceil(H/cell)+1;fit();upd()}
var pal=[[0,10,40,70],[.12,8,50,95],[.3,6,28,66],[.45,46,44,56],[.6,44,38,70],[.8,36,32,76],[1,28,30,84]];
function col(l){for(var i=1;i<pal.length;i++)if(l<=pal[i][0]){var a=pal[i-1],b=pal[i],k=(l-a[0])/(b[0]-a[0]);return[a[1]+(b[1]-a[1])*k|0,a[2]+(b[2]-a[2])*k|0,a[3]+(b[3]-a[3])*k|0]}return[28,30,84]}
var TD=[12,34,72],TU=[48,22,64],TN=[4,7,18],HD=[255,170,90],HU=[255,90,50],HN=[70,36,84],YD=[150,215,235],YU=[255,170,120],YN=[110,140,190];
function g(cx,at,i,px,py,s){cx.drawImage(at,i*T,0,T,T,px-s/2,py-s/2,s,s)}
function spawn(px,py,dx,dy,a,t,w){pk.push({x:px,y:py,dx:dx,dy:dy,a:a,t:t,w:w||80});if(pk.length>(W<700?7:12))pk.shift()}
function draw(t){
var ts=t*.001,cb=col(sd),fade=c(1-sd/.1),fa=c((sd-.03)/.07),f=(.26+sd*.18)*(1-.45*ss*fade),ph=ss<.55?ss/.55:(ss-.55)/.45;
var top=ss<.55?L(TD,TU,ph):L(TU,TN,ph),hor=ss<.55?L(HD,HU,ph):L(HU,HN,ph),ti=ss<.55?L(YD,YU,ph):L(YU,YN,ph);
var sx=W*.68,mcx=W*.26,mp=c((ss-.72)/.28),gl=[],gm=[],sv=c((.95-ss)/.35),ex=0,ey=0;
hz=H*.42-sd*H*6;
x.globalAlpha=1;
x.fillStyle=R([cb[0]*f,cb[1]*f,cb[2]*f]);
x.fillRect(0,0,W,H);
x.save();
if(fade>0){
var sk=x.createLinearGradient(0,-ey,0,Math.max(hz,1));
sk.addColorStop(0,R(top));sk.addColorStop(1,R(hor));
x.globalAlpha=fade;x.fillStyle=sk;x.fillRect(-ex,-ey,W+ex*2,hz+ey);
if(ss>.45){var sa=c((ss-.45)/.4)*fade;for(var k=0;k<90;k++){var sx2=(k*7919%1000)/1000*W,sy2=(k*104729%1000)/1000*Math.max(0,hz)*.85;x.globalAlpha=sa*(.35+.65*Math.abs(Math.sin(ts*1.7+k)));g(x,A3,0,sx2,sy2,k%5?4:7)}}
}
x.restore();
lx.globalCompositeOperation="source-over";
lx.globalAlpha=1;
lx.clearRect(0,0,W,H);
lx.save();
if(fade>0){
var P=[];
for(var k=pk.length-1;k>=0;k--){var p=pk[k],a=(t-p.t)/1000;if(a>4){pk.splice(k,1);continue}P.push(p.x,p.y,p.dx,p.dy,a*300,p.a*Math.exp(-a*.7),1/(2*Math.pow(p.w+a*70,2)))}
var el=1.25-ss*2.7,lt=c((el+1.45)/2.7),lit=Math.pow(lt,.9),wsun=1+.9*(1-lt),lm=Math.pow(mp,1.3)*.9,wmoon=1+.6*(1-mp);
var M=W<700?16:30,Hs=H+ey;
for(var r=0;r<M;r++){
var z=r/(M-1),y0=hz+(Hs-hz)*Math.pow(z,1.6),sc=.3+z,sp=cell*(.45+z*.9),sz=cell*(.7+z*.9),i0=-Math.ceil(ex/sp),i1=Math.ceil((W+ex)/sp)+1;
for(var i=i0;i<i1;i++){
var px=i*sp,h=Math.sin(i*.55+ts*1.3+r*.8)*.5+Math.sin(i*.21-ts*.9+r*1.4)*.5,rp=0;
for(var k=0;k<P.length;k+=7){var rx=px-P[k],ry=y0-P[k+1],al=rx*P[k+2]+ry*P[k+3],pp=-rx*P[k+3]+ry*P[k+2],e1=pp*pp*P[k+6];if(e1>8)continue;var df=al-P[k+4];rp+=P[k+5]*Math.exp(-e1-df*df/12800)*Math.cos(df*.085)}
rp=c(rp,-2.2,2.2);
var q=h*.5+rp*1.3,py=y0+(h*6+rp*34)*sc,gd=(px-sx)/(sc*150*wsun),lg=lit>.01?Math.exp(-gd*gd)*lit*(1-z*.35):0;
if(lg>.03){var gh=.4+.6*Math.max(0,Math.sin(ts*2.4+i*1.7+r));gl.push(px,py,sz*(1+lg*.15),Math.min(1,lg*gh*1.25)*fade,SEA[c(Math.floor(2+lg*5),2,6)])}
var gdm=(px-mcx)/(sc*110*wmoon),lgm=lm>.01?Math.exp(-gdm*gdm)*lm*(1-z*.3):0;
if(lgm>.03){var gh2=.4+.6*Math.max(0,Math.sin(ts*2+i*1.3+r));gm.push(px,py,sz*.95,Math.min(1,lgm*gh2*1.5)*.9*fade,SEA[c(Math.floor(1+lgm*4),1,5)])}
lx.globalAlpha=(.14+z*.6+Math.max(0,q)*.3)*fade;
g(lx,A1,SEA[c(Math.floor((q+1)*3.5),0,6)],px,py,sz)
}
}
}
if(fa>0){
var j0=-Math.ceil(ey/cell),j1=rows+Math.ceil(ey/cell),i0=-Math.ceil(ex/cell),i1=cols+Math.ceil(ex/cell),HH=H+ey*2+cell,SETS=[WAT,CR,MA,CO],BD=[.3,.52,.8],BW=.04;
for(var j=j0;j<j1;j++){
var ld=sd+c(j/rows)*.1;
for(var i=i0;i<i1;i++){
var hs=((i*73856093)^(j*19349663))>>>0;
if(hs%100>72)continue;
for(var n=0;n<4;n++){
var wn=(n?sm(BD[n-1]-BW,BD[n-1]+BW,ld):1)*(n<3?1-sm(BD[n]-BW,BD[n]+BW,ld):1);
if(wn<.02)continue;
var px=i*cell,py=j*cell,v;
if(n===0){py=((py+ey-ts*(14+hs%17)+sd*H*3)%HH+HH)%HH-ey;v=.5}
else if(n===1){v=Math.sin(i*.4+j*.2+(hs%7))*.5+.5;py+=Math.sin(ts+i)*1.5}
else if(n===2){v=Math.sin(i*.18+ts*.8+j*.3)*Math.sin(j*.22-ts*.6)*.5+.5;px+=Math.sin(ts*.7+j*.4)*8;py+=Math.cos(ts*.6+i*.3)*5}
else{var ex2=px-W/2,ey2=py-H/2;v=Math.sin(Math.sqrt(ex2*ex2+ey2*ey2)*.045-ts*3)*.5+.5}
var dx=px-mx,dy=py-my,dd=dx*dx+dy*dy,k=dd<14400?1-Math.sqrt(dd)/120:0;
if(k>0){var sq=Math.sqrt(dd)+1;px+=dx/sq*k*18;py+=dy/sq*k*18}
lx.globalAlpha=Math.min(1,(.12+v*.42+k*.6)*fa*wn);
g(lx,A1,SETS[n][(hs>>3)%SETS[n].length],px,py,cell*1.15)
}
}
}
}
lx.restore();
lx.globalCompositeOperation="source-in";
lx.globalAlpha=1;
lx.fillStyle=R(L(ti,[Math.min(255,cb[0]+70),Math.min(255,cb[1]+110),Math.min(255,cb[2]+110)],c(sd/.12)));
lx.fillRect(0,0,W,H);
x.globalAlpha=1;
x.drawImage(lc,0,0,W,H);
x.save();
if(fade>0){
for(var q2=0;q2<gl.length;q2+=5){x.globalAlpha=gl[q2+3];g(x,ss>.45?A4:A2,gl[q2+4],gl[q2],gl[q2+1],gl[q2+2])}
for(var q3=0;q3<gm.length;q3+=5){x.globalAlpha=gm[q3+3];g(x,A3,gm[q3+4],gm[q3],gm[q3+1],gm[q3+2])}
var Rr=Math.min(W,H)*.15,st=cell*.9,pul=.92+Math.sin(ts*1.2)*.08;
if(sv>0){
var Rs=Rr*(1+ss*.25),sy=hz-Rr*1.25+ss*Rr*2.7,AS=ss>.45?A4:A2;
for(var yy=sy-Rs*2.4;yy<hz;yy+=st)for(var xx=sx-Rs*2.4;xx<sx+Rs*2.4;xx+=st){
var ddx=xx-sx,ddy=yy-sy,r2=Math.sqrt(ddx*ddx+ddy*ddy);
if(r2<Rs){var u=r2/Rs;x.globalAlpha=(.95-u*.25)*fade*pul;g(x,AS,u<.45?12:u<.8?13:5,xx,yy,st*1.25)}
else if(r2<Rs*2.4){var hh=((xx*7+yy*13)|0)%5;if(hh>1)continue;x.globalAlpha=(1-(r2-Rs)/(Rs*1.4))*.4*fade*pul;g(x,AS,hh?0:3,xx,yy,st)}
}
}
if(mp>0){
var Rm=Rr*.5,mcy=hz+Rm*.5-mp*Rm*1.25;
for(var yy=mcy-Rm;yy<Math.min(mcy+Rm,hz);yy+=st*.8)for(var xx=mcx-Rm;xx<mcx+Rm;xx+=st*.8){
var ddx=xx-mcx,ddy=yy-mcy,r2=Math.sqrt(ddx*ddx+ddy*ddy);
if(r2>Rm)continue;
var hh=((xx*5+yy*11)|0)%7;
x.globalAlpha=mp*fade*(.95-r2/Rm*.3);g(x,A3,hh<2?7:hh<4?1:0,xx,yy,st)
}
}
}
x.restore();
x.globalAlpha=1
}
function loop(t){
requestAnimationFrame(loop);
if(t-last<(W<700?40:32))return;
last=t;
sd+=(td-sd)*.09;
draw(t)
}
var lpx=0,lpy=0,lpi=false,lfl=0;
function flick(sx){var n=performance.now();if(n-lfl<500||Math.abs(sx)<9)return;lfl=n;var sg=sx>0?1:-1;spawn(sg>0?-30:W+30,hz+(H-hz)*.5,sg,0,c(Math.abs(sx)/10,.7,1.8),n,Math.max(160,(H-hz)*.8))}
function mot(e){var k=iOS?-1:1,a=e.acceleration,ax,ay;if(a&&a.x!=null&&a.y!=null){ax=a.x;ay=a.y}else{var g=e.accelerationIncludingGravity;if(!g||g.x==null||g.y==null)return;if(!lpi){lpx=g.x;lpy=g.y;lpi=true}lpx+=(g.x-lpx)*.12;lpy+=(g.y-lpy)*.12;ax=g.x-lpx;ay=g.y-lpy}ax*=k;ay*=k;var an=screen.orientation&&screen.orientation.angle!=null?screen.orientation.angle:(window.orientation?(360-window.orientation)%360:0);flick(an===90?-ay:an===180?-ax:an===270?ay:ax)}
function listen(){addEventListener("devicemotion",mot)}
if(window.DeviceMotionEvent&&!rm){
if(typeof DeviceMotionEvent.requestPermission==="function"){
var ask=function(){try{DeviceMotionEvent.requestPermission().then(function(s){if(s==="granted"){listen();removeEventListener("touchend",ask)}}).catch(function(){})}catch(e){}};
addEventListener("touchend",ask,{passive:true})
}else listen()
}
var pmx=-999,pmy=0,lsp=0;
addEventListener("load",rz);
addEventListener("scroll",function(){if(rm)sd=td;upd()},{passive:true});
addEventListener("resize",rz);
addEventListener("pointermove",function(e){
if(e.pointerType==="touch")return;
mx=e.clientX;my=e.clientY;
var n=performance.now();
if(pmx>-900&&sd<.1){var vx=mx-pmx,vy=my-pmy,sp=Math.sqrt(vx*vx+vy*vy);if(sp>5&&n-lsp>55&&my>hz-20){lsp=n;spawn(mx,my,vx/sp,vy/sp,c(sp/55,.3,1),n)}}
pmx=mx;pmy=my
},{passive:true});
d.documentElement.addEventListener("mouseleave",function(){mx=my=pmx=-999});
function fit(){var ml=d.querySelector(".mail"),cb=d.querySelector(".ct");if(!ml||!cb)return;var cs=getComputedStyle(cb),av=cb.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);ml.style.fontSize="100px";var w=ml.offsetWidth;if(w>0)ml.style.fontSize=Math.max(12,Math.min(72,av/w*100*.97))+"px"}
function applyStats(o){if(!o)return;ns.forEach(function(e){var v=o[e.getAttribute("data-k")];if(typeof v==="number"&&isFinite(v))e.dataset.n=v});upd()}
function parseCard(t){var o={},doc=new DOMParser().parseFromString(t,"image/svg+xml"),map=[["Total Stars Earned","stars"],["Total Commits","commits"],["Pull Requests","prs"],["Issues Opened","issues"],["Estimated Coding Hours","hours"],["Contributions This Year","contribs"],["Public Repos","repos"],["Followers","followers"]];
[].slice.call(doc.querySelectorAll("g.row")).forEach(function(g){var l=g.querySelector(".label"),v=g.querySelector(".value");if(!l||!v)return;var lt=l.textContent.trim(),n=parseFloat(v.textContent.replace(/[^0-9.]/g,""));if(!isFinite(n))return;map.forEach(function(m){if(lt.indexOf(m[0])===0)o[m[1]]=m[0]==="Estimated Coding Hours"?Math.round(n):n})});return o}
function saveStats(o){try{localStorage.setItem("mx-stats",JSON.stringify(o))}catch(e){}}
function loadStats(){var live=false;
try{var cs=localStorage.getItem("mx-stats");if(cs)applyStats(JSON.parse(cs))}catch(e){}
if(!window.fetch)return;
fetch("https://ghstats.dev/api/card?username=Mavox-ID",{cache:"no-store"}).then(function(r){return r.ok?r.text():Promise.reject()}).then(function(t){var o=parseCard(t);if(Object.keys(o).length<6)return Promise.reject();live=true;applyStats(o);saveStats(o)}).catch(function(){});
fetch("/stats.json?t="+Date.now(),{cache:"no-store"}).then(function(r){return r.ok?r.json():Promise.reject()}).then(function(o){if(live)return;applyStats(o);saveStats(o)}).catch(function(){})}
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(fit);
rz();
loadStats();
if(!rm)requestAnimationFrame(loop)
})();
