(function(){
var d=document,rm=matchMedia("(prefers-reduced-motion:reduce)").matches,ALL=".:-=+*#o,%&~@O0",T=32;
function c(v,a,b){a=a||0;b=b==null?1:b;return v<a?a:v>b?b:v}
function atlas(tint){var a=d.createElement("canvas"),g=a.getContext("2d");a.width=T*ALL.length;a.height=T;g.font="600 26px ui-monospace,Menlo,Consolas,monospace";g.textAlign="center";g.textBaseline="middle";g.fillStyle="#fff";for(var i=0;i<ALL.length;i++)g.fillText(ALL.charAt(i),i*T+T/2,T/2+1);g.globalCompositeOperation="source-in";g.fillStyle=tint;g.fillRect(0,0,a.width,T);return a}
function ix(s){return s.split("").map(function(ch){return ALL.indexOf(ch)})}
var AB=atlas("#5a86c0"),AR=atlas("#ff4a2a"),AD=atlas("#c22a22"),AW=atlas("#d7e8ff");
var SEA=ix(".:-=+*#"),RAMP=ix(".:-=+*#%&@");
var CR=[[-.35,-.25,.2],[.3,.35,.25],[.1,-.5,.14],[-.1,.15,.1],[.5,-.2,.12],[-.45,.45,.12],[.05,.62,.1]];
var cv=d.getElementById("bg"),x=cv.getContext("2d"),W=0,H=0,cell=18,hz=0,mx=0,R=0,last=0,pk=[],iOS=/iP(hone|ad|od)/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
function spawn(px,py,dx,dy,a,t,w){pk.push({x:px,y:py,dx:dx,dy:dy,a:a,t:t,w:w||80});if(pk.length>(W<700?7:12))pk.shift()}
function g(at,i,px,py,s){x.drawImage(at,i*T,0,T,T,px-s/2,py-s/2,s,s)}
function rz(){var dp=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;cv.width=W*dp;cv.height=H*dp;x.setTransform(dp,0,0,dp,0,0);cell=W<700?22:18;hz=H*.52;mx=W<700?W*.62:W*.68;R=Math.min(W*.17,H*.125);if(rm)draw(0)}
function draw(t){
var ts=t*.001,fi=rm?1:c(t/1400),my=hz-R*.55,k,i,j,r,q;
x.globalAlpha=1;
var sk=x.createLinearGradient(0,0,0,hz);sk.addColorStop(0,"rgb(3,5,14)");sk.addColorStop(.7,"rgb(20,10,32)");sk.addColorStop(1,"rgb(60,18,40)");
x.fillStyle=sk;x.fillRect(0,0,W,hz);
var sg=x.createLinearGradient(0,hz,0,H);sg.addColorStop(0,"rgb(36,12,34)");sg.addColorStop(1,"rgb(3,5,12)");
x.fillStyle=sg;x.fillRect(0,hz,W,H-hz);
x.save();x.beginPath();x.rect(0,0,W,hz);x.clip();
var gr=x.createRadialGradient(mx,my,R*.4,mx,my,R*4.2);gr.addColorStop(0,"rgba(255,70,50,.3)");gr.addColorStop(1,"rgba(255,70,50,0)");
x.fillStyle=gr;x.fillRect(0,0,W,hz);
for(k=0;k<110;k++){var sx=(k*7919%1000)/1000*W,sy=(k*104729%1000)/1000*hz*.9,dm=Math.sqrt((sx-mx)*(sx-mx)+(sy-my)*(sy-my));if(dm<R*2.1)continue;x.globalAlpha=fi*(.25+.6*Math.abs(Math.sin(ts*1.5+k)))*c((dm-R*2.1)/R);g(AW,k%7?0:5,sx,sy,k%5?5:9)}
for(k=0;k<14;k++){var rr=R*(1.08+k*.1),n=Math.floor(6.283*rr/(cell*.8)),al=Math.pow(1-k/14,1.5)*(.5+Math.sin(ts*1.1)*.07)*fi;for(j=0;j<n;j++){var a=j/n*6.283+k*.7,hs=((j*73856093)^(k*19349663))>>>0;if(hs%100>70)continue;var hx=mx+Math.cos(a)*rr,hy=my+Math.sin(a)*rr;if(hy>hz)continue;x.globalAlpha=al*(.5+(hs%50)/100);g(AR,k<4?1:0,hx,hy,cell*.9)}}

var st=Math.max(7,R/15),lx=-.5,ly=-.5,lz=.7,ll=Math.sqrt(lx*lx+ly*ly+lz*lz);
for(var yy=my-R;yy<Math.min(my+R,hz);yy+=st)for(var xx=mx-R;xx<mx+R;xx+=st){
var ux=(xx-mx)/R,uy=(yy-my)/R,r2=ux*ux+uy*uy;if(r2>1)continue;
var nz=Math.sqrt(1-r2),lam=Math.max(0,(ux*lx+uy*ly+nz*lz)/ll),v=.44+.56*lam;
for(q=0;q<CR.length;q++){var ex=ux-CR[q][0],ey=uy-CR[q][1],cd=Math.sqrt(ex*ex+ey*ey)/CR[q][2];if(cd<1)v-=(1-cd*cd)*.32;else if(cd<1.18)v+=.1*(1.18-cd)/.18}
v=c(Math.pow(c(v*(.62+.38*nz)),.8));
x.globalAlpha=fi*.9;g(v>.5?AR:AD,RAMP[Math.max(3,Math.floor(v*(RAMP.length-1)))],xx,yy,st*1.7)}
x.restore();
var P=[];for(k=pk.length-1;k>=0;k--){var pp=pk[k],pa=(t-pp.t)/1000;if(pa>4){pk.splice(k,1);continue}P.push(pp.x,pp.y,pp.dx,pp.dy,pa*300,pp.a*Math.exp(-pa*.7),1/(2*Math.pow(pp.w+pa*70,2)))}
var M=W<700?15:28;
for(r=0;r<M;r++){var z=r/(M-1),y0=hz+(H-hz)*Math.pow(z,1.6)+2,sc=.3+z,sp=cell*(.45+z*.9),sz=cell*(.7+z*.9),cn=Math.ceil(W/sp)+1;
for(i=0;i<cn;i++){
var px=i*sp,h=Math.sin(i*.55+ts*1.3+r*.8)*.5+Math.sin(i*.21-ts*.9+r*1.4)*.5,rp=0;
for(var u=0;u<P.length;u+=7){var rx=px-P[u],ry=y0-P[u+1],al=rx*P[u+2]+ry*P[u+3],pq=-rx*P[u+3]+ry*P[u+2],e1=pq*pq*P[u+6];if(e1>8)continue;var df=al-P[u+4];rp+=P[u+5]*Math.exp(-e1-df*df/12800)*Math.cos(df*.085)}
rp=c(rp,-2.2,2.2);
var qq=h*.5+rp*1.3,py=y0+(h*6+rp*34)*sc,gd=Math.abs(px-mx),lg=Math.exp(-Math.pow(gd/(sc*240),2))*(1-z*.35),gw=(24+sc*80)*(.4+Math.max(0,Math.sin(ts*2.4+i*1.7+r))),gi=Math.floor((qq+1)*3.5);
x.globalAlpha=(.14+z*.55+Math.max(0,qq)*.25)*(1-lg*.7)*fi;g(AB,SEA[c(gi,0,6)],px,py,sz);
if(lg>.04){x.globalAlpha=lg*(.5+Math.max(0,qq)*.5)*fi;g(AR,SEA[c(gi+1,1,6)],px,py,sz)}
if(gd<gw&&z>.02){x.globalAlpha=Math.min(1,(1-gd/gw)*.9)*(1-z*.35)*fi;g(AR,SEA[6],px,py,sz*1.1)}
}}
x.globalAlpha=1}
function loop(t){requestAnimationFrame(loop);if(t-last<32)return;last=t;draw(t)}
var lpx=0,lpy=0,lpi=false,lfl=0,mpx=-999,mpy=0,lsp=0;
function flick(sx){var n=performance.now();if(n-lfl<500||Math.abs(sx)<9)return;lfl=n;var sg=sx>0?1:-1;spawn(sg>0?-30:W+30,hz+(H-hz)*.5,sg,0,c(Math.abs(sx)/10,.7,1.8),n,Math.max(160,(H-hz)*.8))}
function mot(e){var k=iOS?-1:1,a=e.acceleration,ax,ay;if(a&&a.x!=null&&a.y!=null){ax=a.x;ay=a.y}else{var g=e.accelerationIncludingGravity;if(!g||g.x==null||g.y==null)return;if(!lpi){lpx=g.x;lpy=g.y;lpi=true}lpx+=(g.x-lpx)*.12;lpy+=(g.y-lpy)*.12;ax=g.x-lpx;ay=g.y-lpy}ax*=k;ay*=k;var an=screen.orientation&&screen.orientation.angle!=null?screen.orientation.angle:(window.orientation?(360-window.orientation)%360:0);flick(an===90?-ay:an===180?-ax:an===270?ay:ax)}
function listen(){addEventListener("devicemotion",mot)}
if(window.DeviceMotionEvent&&!rm){
if(typeof DeviceMotionEvent.requestPermission==="function"){
var ask=function(){try{DeviceMotionEvent.requestPermission().then(function(s){if(s==="granted"){listen();removeEventListener("touchend",ask)}}).catch(function(){})}catch(e){}};
addEventListener("touchend",ask,{passive:true})
}else listen()
}
addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var n=performance.now(),cx=e.clientX,cy=e.clientY;if(mpx>-900){var vx=cx-mpx,vy=cy-mpy,sp=Math.sqrt(vx*vx+vy*vy);if(sp>5&&n-lsp>55&&cy>hz-20){lsp=n;spawn(cx,cy,vx/sp,vy/sp,c(sp/55,.3,1),n)}}mpx=cx;mpy=cy},{passive:true});
d.documentElement.addEventListener("mouseleave",function(){mpx=-999});
addEventListener("pointerdown",function(e){if(e.clientY>hz-20)spawn(e.clientX,e.clientY,0,1,.9,performance.now())},{passive:true});
addEventListener("resize",rz);rz();
if(!rm)requestAnimationFrame(loop)
})();
