import{readdirSync as A,readFileSync as B,writeFileSync as C,mkdirSync as D}from"node:fs";
let V=process.env,I=V.MAKEFUN_INPUT_DIR,O=V.MAKEFUN_OUTPUT_DIR,E=[5,10,1,3,8,2,6,4,7,11,9];
let e=n=>{throw n};
function R(p,q){
let d=[],c=[],m=[],o=[],x=0,i=0,s=0;
let f=()=>d.pop()??e(2);
let g=v=>{if(d.push(v|0)>256)e(3)};
let n=k=>{if(x+k>p.length)e(10);let v=p.readUIntLE(x,k);return x+=k,v};
try{for(;;){
if(++s>1e6)e(8);if(x<0||x>=p.length)e(1);
let t=p[x++];
if(t>15&&t<35&&t!=23&&t!=27){
let b=f(),a=f(),r;
if(t<19)r=t==16?a+b:t==17?a-b:Math.imul(a,b);
else if(t>18&&t<23){if(!b)e(7);r=t<20?a/b|0:t<21?a%b:t<22?(a>>>0)/(b>>>0)|0:(a>>>0)%(b>>>0)}
else if(t>23&&t<27)r=t==24?a&b:t==25?a|b:a^b;
else if(t>27&&t<31)r=t==28?a<<b:t==29?a>>b:a>>>b;
else if(t>31)r=(t==32?a==b:t==33?a<b:(a>>>0)<(b>>>0))?1:0;
else e(0);
g(r);
}else if(!t)return{o,code:0};
else if(t==1)g(n(1)<<24>>24);
else if(t==2)g(n(4));
else if(t==3)f();
else if(t==4){let a=f();g(a);g(a)}
else if(t==5){let b=f(),a=f();g(b);g(a)}
else if(t==6){let b=f(),a=f();g(a);g(b);g(a)}
else if(t==7){let y=f(),b=f(),a=f();g(b);g(y);g(a)}
else if(t==23||t==27)g(t<24?-f():~f());
else if(t>47&&t<51){let r=n(2)<<16>>16;if(t<49||(t==49)==(f()==0))x+=r}
else if(t==51){if(c.push(x+2)>256)e(5);x=n(2)}
else if(t==52){if(!c.length)e(4);x=c.pop()}
else if(t==64||t==65){let a=f();if(a&~255)e(6);t==64?g(m[a]):m[a]=f()}
else if(t==80)o.push(...Buffer.from(""+f()));
else if(t==81)o.push(f()&255);
else if(t==82)g(i<q.length?q[i++]:-1);
else if(t==83)return{o,code:f()&255};
else e(0);
if(o.length>65536)e((o.length=65536,9))
}}catch(z){return{o,code:E[z]||1}}
}
for(let id of A(I)){let r=R(B(I+"/"+id+"/program.bin"),B(I+"/"+id+"/input.bin")),q=O+"/"+id;D(q,{recursive:true});C(q+"/stdout.bin",Buffer.from(r.o));C(q+"/exit.txt",r.code+"\n")}
