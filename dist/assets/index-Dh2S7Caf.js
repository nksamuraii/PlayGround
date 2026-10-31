(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="170",pp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,oc=1,ad=2,gp=3,xp=0,bc=1,od=2,zn=3,li=0,Ye=1,Ve=2,ri=0,Ji=1,Ue=2,lc=3,cc=4,ld=5,bi=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,Za=204,$a=205,xd=206,_d=207,vd=208,yd=209,Md=210,Sd=211,bd=212,wd=213,Td=214,Ja=0,Ka=1,Qa=2,ts=3,ja=4,to=5,eo=6,no=7,Fr=0,Ed=1,Ad=2,ai=0,Cd=1,Rd=2,Id=3,wc=4,Pd=5,Ld=6,Dd=7,hc="attached",Ud="detached",zo=300,ci=301,Ti=302,yr=303,Mr=304,Vs=306,Os=1e3,Sn=1001,Sr=1002,Ge=1003,Tc=1004,_p=1004,Ls=1005,vp=1005,Fe=1006,ur=1007,yp=1007,Hn=1008,Mp=1008,Xn=1009,Ec=1010,Ac=1011,Bs=1012,ko=1013,hi=1014,hn=1015,Gs=1016,Ho=1017,Vo=1018,es=1020,Cc=35902,Rc=1021,Ic=1022,en=1023,Pc=1024,Lc=1025,Ki=1026,ns=1027,Go=1028,Or=1029,Dc=1030,Wo=1031,Sp=1032,Xo=1033,dr=33776,fr=33777,pr=33778,mr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,xo=37814,_o=37815,vo=37816,yo=37817,Mo=37818,So=37819,bo=37820,wo=37821,gr=36492,To=36494,Eo=36495,Uc=36283,Ao=36284,Co=36285,Ro=36286,Nd=2200,Fd=2201,Od=2202,br=2300,Io=2301,Wa=2302,qi=2400,Yi=2401,wr=2402,qo=2500,Nc=2501,bp=0,wp=1,Tp=2,Bd=3200,zd=3201,Ep=3202,Ap=3203,Ei=0,kd=1,ei="",Ne="srgb",os="srgb-linear",Br="linear",me="srgb",Cp=0,Gi=7680,Rp=7681,Ip=7682,Pp=7683,Lp=34055,Dp=34056,Up=5386,Np=512,Fp=513,Op=514,Bp=515,zp=516,kp=517,Hp=518,uc=519,Hd=512,Vd=513,Gd=514,Fc=515,Wd=516,Xd=517,qd=518,Yd=519,Tr=35044,Vp=35048,Gp=35040,Wp=35045,Xp=35049,qp=35041,Yp=35046,Zp=35050,$p=35042,Jp="100",dc="300 es",Vn=2e3,Er=2001;class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const Qi=Math.PI/180,zs=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Oc(s,t){return(s%t+t)%t}function Kp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Qp(s,t,e){return s!==t?(e-s)/(t-s):0}function xr(s,t,e){return(1-e)*s+e*t}function jp(s,t,e,n){return xr(s,t,1-Math.exp(-e*n))}function tm(s,t=1){return t-Math.abs(Oc(s,t*2)-t)}function em(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function im(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sm(s,t){return s+Math.random()*(t-s)}function rm(s){return s*(.5-Math.random())}function am(s){s!==void 0&&(yh=s);let t=yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function om(s){return s*Qi}function lm(s){return s*zs}function cm(s){return(s&s-1)===0&&s!==0}function hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dm(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kn={DEG2RAD:Qi,RAD2DEG:zs,generateUUID:_n,clamp:Ee,euclideanModulo:Oc,mapLinear:Kp,inverseLerp:Qp,lerp:xr,damp:jp,pingpong:tm,smoothstep:em,smootherstep:nm,randInt:im,randFloat:sm,randFloatSpread:rm,seededRandom:am,degToRad:om,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:ie,denormalize:tn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,i,r,a,o,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],y=i[4],_=i[7],R=i[2],T=i[5],E=i[8];return r[0]=a*x+o*v+l*R,r[3]=a*g+o*y+l*T,r[6]=a*p+o*_+l*E,r[1]=c*x+h*v+u*R,r[4]=c*g+h*y+u*T,r[7]=c*p+h*_+u*E,r[2]=d*x+f*v+m*R,r[5]=d*g+f*y+m*T,r[8]=d*p+f*_+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new ne;function Zd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const fm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ds(s,t){return new fm[s](t)}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){const s=Ar("canvas");return s.style.display="block",s}const Mh={};function lr(s){s in Mh||(Mh[s]=!0,console.warn(s))}function pm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Br:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Sh=[.64,.33,.3,.6,.15,.06],bh=[.2126,.7152,.0722],wh=[.3127,.329],Th=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[os]:{primaries:Sh,whitePoint:wh,transfer:Br,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:bh,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Sh,whitePoint:wh,transfer:me,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:bh,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let ds;class Jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Ar("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xm=0;class Zi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_l(i[a].image)):r.push(_l(i[a]))}else r=_l(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function _l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class Ae extends qn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Sn,i=Sn,r=Fe,a=Hn,o=en,l=Xn,c=Ae.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=_n(),this.name="",this.source=new Zi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=zo;Ae.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,R=(p+1)/2,T=(h+d)/4,E=(u+x)/4,P=(m+g)/4;return y>_&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=E/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Kd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yo extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vm extends Nn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yo(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Bc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ym extends Nn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Bc(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),T=Math.atan2(R,p*v);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}const _=o*v;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new A,Ah=new sn;class rn{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Qr.subVectors(this.max,Js),fs.subVectors(t.a,Js),ps.subVectors(t.b,Js),ms.subVectors(t.c,Js),mi.subVectors(ps,fs),gi.subVectors(ms,ps),Ii.subVectors(fs,ms);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ii.z,Ii.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ii.z,0,-Ii.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ii.y,Ii.x,0];return!yl(e,fs,ps,ms,Qr)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,fs,ps,ms,Qr))?!1:(jr.crossVectors(mi,gi),e=[jr.x,jr.y,jr.z],yl(e,fs,ps,ms,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new A,new A,new A,new A,new A,new A,new A,new A],In=new A,Kr=new rn,fs=new A,ps=new A,ms=new A,mi=new A,gi=new A,Ii=new A,Js=new A,Qr=new A,jr=new A,Pi=new A;function yl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pi.fromArray(s,r);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mm=new rn,Ks=new A,Ml=new A;class Ze{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ml)),this.expandByPoint(Ks.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new A,Sl=new A,ta=new A,xi=new A,bl=new A,ea=new A,wl=new A;class Ws{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sl.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(Sl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ta),o=xi.dot(this.direction),l=-xi.dot(ta),c=xi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sl).addScaledVector(ta,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,r){bl.subVectors(e,t),ea.subVectors(n,t),wl.crossVectors(bl,ea);let a=this.direction.dot(wl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,t);const l=o*this.direction.dot(ea.crossVectors(xi,ea));if(l<0)return null;const c=o*this.direction.dot(bl.cross(xi));if(c<0||l+c>a)return null;const h=-o*xi.dot(wl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sm,t,bm)}lookAt(t,e,n){const i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),_i.crossVectors(n,mn),_i.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),_i.crossVectors(n,mn)),_i.normalize(),na.crossVectors(mn,_i),i[0]=_i.x,i[4]=na.x,i[8]=mn.x,i[1]=_i.y,i[5]=na.y,i[9]=mn.y,i[2]=_i.z,i[6]=na.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],R=n[15],T=i[0],E=i[4],P=i[8],b=i[12],S=i[1],L=i[5],W=i[9],G=i[13],O=i[2],U=i[6],F=i[10],Y=i[14],X=i[3],it=i[7],Mt=i[11],Et=i[15];return r[0]=a*T+o*S+l*O+c*X,r[4]=a*E+o*L+l*U+c*it,r[8]=a*P+o*W+l*F+c*Mt,r[12]=a*b+o*G+l*Y+c*Et,r[1]=h*T+u*S+d*O+f*X,r[5]=h*E+u*L+d*U+f*it,r[9]=h*P+u*W+d*F+f*Mt,r[13]=h*b+u*G+d*Y+f*Et,r[2]=m*T+x*S+g*O+p*X,r[6]=m*E+x*L+g*U+p*it,r[10]=m*P+x*W+g*F+p*Mt,r[14]=m*b+x*G+g*Y+p*Et,r[3]=v*T+y*S+_*O+R*X,r[7]=v*E+y*L+_*U+R*it,r[11]=v*P+y*W+_*F+R*Mt,r[15]=v*b+y*G+_*Y+R*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=u*g*c-x*d*c+x*l*f-o*g*f-u*l*p+o*d*p,y=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,_=h*x*c-m*u*c+m*o*f-a*x*f-h*o*p+a*u*p,R=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,T=e*v+n*y+i*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=v*E,t[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*E,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=y*E,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*E,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=_*E,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*E,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=R*E,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*x*i-m*n*l+e*x*l+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,v=l*c,y=l*h,_=l*u,R=n.x,T=n.y,E=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+_)*R,i[2]=(m-y)*R,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+y)*E,i[9]=(g-v)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Pn.copy(this);const c=1/r,h=1/a,u=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(o===Vn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Er)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Vn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let m,x;if(o===Vn)m=(a+r)*u,x=-2*u;else if(o===Er)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new A,Pn=new Zt,Sm=new A(0,0,0),bm=new A(1,1,1),_i=new A,na=new A,mn=new A,Ch=new Zt,Rh=new sn;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wm=0;const Ih=new A,xs=new sn,Kn=new Zt,ia=new A,Qs=new A,Tm=new A,Em=new sn,Ph=new A(1,0,0),Lh=new A(0,1,0),Dh=new A(0,0,1),Uh={type:"added"},Am={type:"removed"},_s={type:"childadded",child:null},Tl={type:"childremoved",child:null};class ue extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new A,e=new vn,n=new sn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ne}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Qs,ia,this.up):Kn.lookAt(ia,Qs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Kn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Am),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new A(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new A,Qn=new A,El=new A,jn=new A,vs=new A,ys=new A,Nh=new A,Al=new A,Cl=new A,Rl=new A,Il=new he,Pl=new he,Ll=new he;class cn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),Qn.subVectors(n,e),El.subVectors(t,e);const a=Ln.dot(Ln),o=Ln.dot(Qn),l=Ln.dot(El),c=Qn.dot(Qn),h=Qn.dot(El),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Il.setScalar(0),Pl.setScalar(0),Ll.setScalar(0),Il.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Ll,r.z),a}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),Qn.subVectors(t,e),Ln.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Ln.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;vs.subVectors(i,n),ys.subVectors(r,n),Al.subVectors(t,n);const l=vs.dot(Al),c=ys.dot(Al);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,i);const h=vs.dot(Cl),u=ys.dot(Cl);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vs,a);Rl.subVectors(t,r);const f=vs.dot(Rl),m=ys.dot(Rl);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ys,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Nh.subVectors(r,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Nh,o);const p=1/(g+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(vs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Dl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Oc(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return oe.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ee(Xe.r*255,0,255))*65536+Math.round(Ee(Xe.g*255,0,255))*256+Math.round(Ee(Xe.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ne){oe.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(sa);const n=xr(vi.h,sa.h,e),i=xr(vi.s,sa.s,e),r=xr(vi.l,sa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Tt;Tt.NAMES=Qd;let Cm=0;class $e extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=_n(),this.name="",this.blending=Ji,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=$a,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends $e{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ni=Rm();function Rm(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function ln(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ee(s,-65504,65504),ni.floatView[0]=s;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function cr(s){const t=s>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(s&1023)]+ni.exponentTable[t],ni.floatView[0]}const Im={toHalfFloat:ln,fromHalfFloat:cr},Ie=new A,ra=new rt;class le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tr&&(t.usage=this.usage),t}}class Pm extends le{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Lm extends le{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Dm extends le{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Um extends le{constructor(t,e,n){super(new Int16Array(t),e,n)}}class zc extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nm extends le{constructor(t,e,n){super(new Int32Array(t),e,n)}}class kc extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fm extends le{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=cr(this.array[t*this.itemSize]);return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=ln(e),this}getY(t){let e=cr(this.array[t*this.itemSize+1]);return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=ln(e),this}getZ(t){let e=cr(this.array[t*this.itemSize+2]);return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=ln(e),this}getW(t){let e=cr(this.array[t*this.itemSize+3]);return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=ln(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=ln(e),this.array[t+1]=ln(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=ln(e),this.array[t+1]=ln(n),this.array[t+2]=ln(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=ln(e),this.array[t+1]=ln(n),this.array[t+2]=ln(i),this.array[t+3]=ln(r),this}}class Ft extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Om=0;const Mn=new Zt,Ul=new ue,Ms=new A,gn=new rn,js=new rn,ze=new A;class te extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?kc:zc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(gn.min,js.min),gn.expandByPoint(ze),ze.addVectors(gn.max,js.max),gn.expandByPoint(ze)):(gn.expandByPoint(js.min),gn.expandByPoint(js.max))}gn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(t,c),ze.add(Ms)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new A,l[P]=new A;const c=new A,h=new A,u=new A,d=new rt,f=new rt,m=new rt,x=new A,g=new A;function p(P,b,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[P].add(x),o[b].add(x),o[S].add(x),l[P].add(g),l[b].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,b=v.length;P<b;++P){const S=v[P],L=S.start,W=S.count;for(let G=L,O=L+W;G<O;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new A,_=new A,R=new A,T=new A;function E(P){R.fromBufferAttribute(i,P),T.copy(R);const b=o[P];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(T,b);const L=_.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,b=v.length;P<b;++P){const S=v[P],L=S.start,W=S.count;for(let G=L,O=L+W;G<O;G+=3)E(t.getX(G+0)),E(t.getX(G+1)),E(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new Zt,Li=new Ws,aa=new Ze,Oh=new A,oa=new A,la=new A,ca=new A,Nl=new A,ha=new A,Bh=new A,ua=new A;class K extends ue{constructor(t=new te,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Nl.fromBufferAttribute(u,t),a?ha.addScaledVector(Nl,h):ha.addScaledVector(Nl.sub(e),h))}e.add(ha)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(aa.containsPoint(Li.origin)===!1&&(Li.intersectSphere(aa,Oh)===null||Li.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,R=y;_<R;_+=3){const T=o.getX(_),E=o.getX(_+1),P=o.getX(_+2);i=da(this,p,t,n,c,h,u,T,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);i=da(this,a,t,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,R=y;_<R;_+=3){const T=_,E=_+1,P=_+2;i=da(this,p,t,n,c,h,u,T,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,y=g+1,_=g+2;i=da(this,a,t,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Bm(s,t,e,n,i,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===li,o),l===null)return null;ua.copy(o),ua.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:s}}function da(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,oa),s.getVertexPosition(l,la),s.getVertexPosition(c,ca);const h=Bm(s,t,e,n,oa,la,ca,Bh);if(h){const u=new A;cn.getBarycoord(Bh,oa,la,ca,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new rt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};cn.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}class It extends te{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(x,g,p,v,y,_,R,T,E,P,b){const S=_/E,L=R/P,W=_/2,G=R/2,O=T/2,U=E+1,F=P+1;let Y=0,X=0;const it=new A;for(let Mt=0;Mt<F;Mt++){const Et=Mt*L-G;for(let Vt=0;Vt<U;Vt++){const Kt=Vt*S-W;it[x]=Kt*v,it[g]=Et*y,it[p]=O,c.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Vt/E),u.push(1-Mt/P),Y+=1}}for(let Mt=0;Mt<P;Mt++)for(let Et=0;Et<E;Et++){const Vt=d+Et+U*Mt,Kt=d+Et+U*(Mt+1),Q=d+(Et+1)+U*(Mt+1),lt=d+(Et+1)+U*Mt;l.push(Vt,Kt,lt),l.push(Kt,Q,lt),X+=6}o.addGroup(f,X,b),f+=X,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const n=ks(s[e]);for(const i in n)t[i]=n[i]}return t}function zm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const tf={clone:ks,merge:Qe};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends $e{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new A,zh=new rt,kh=new rt;class He extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,bs=1;class ef extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(Ss,bs,t,e);i.layers=this.layers,this.add(i);const r=new He(Ss,bs,t,e);r.layers=this.layers,this.add(r);const a=new He(Ss,bs,t,e);a.layers=this.layers,this.add(a);const o=new He(Ss,bs,t,e);o.layers=this.layers,this.add(o);const l=new He(Ss,bs,t,e);l.layers=this.layers,this.add(l);const c=new He(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class zr extends Ae{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new It(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ri});r.uniforms.tEquirect.value=e;const a=new K(i,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Fe),new ef(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Fl=new A,Vm=new A,Gm=new ne;class Si{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fl.subVectors(n,e).cross(Vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gm.getNormalMatrix(t),i=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ze,fa=new A;class kr{constructor(t=new Si,e=new Si,n=new Si,i=new Si,r=new Si,a=new Si){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],v=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+a,d+h,g+m,_+v).normalize(),n[3].setComponents(l-a,d-h,g-m,_-v).normalize(),n[4].setComponents(l-o,d-u,g-x,_-y).normalize(),e===Vn)n[5].setComponents(l+o,d+u,g+x,_+y).normalize();else if(e===Er)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fa.x=i.normal.x>0?t.max.x:t.min.x,fa.y=i.normal.y>0?t.max.y:t.min.y,fa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wm(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Re extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*d-a;for(let y=0;y<c;y++){const _=y*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,_=v+c*(p+1),R=v+1+c*(p+1),T=v+1+c*p;f.push(y,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,p0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,O0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:Km,aomap_pars_fragment:Qm,batching_pars_vertex:jm,batching_vertex:t0,begin_vertex:e0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:c0,color_fragment:h0,color_pars_fragment:u0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:x0,displacementmap_vertex:_0,emissivemap_fragment:v0,emissivemap_pars_fragment:y0,colorspace_fragment:M0,colorspace_pars_fragment:S0,envmap_fragment:b0,envmap_common_pars_fragment:w0,envmap_pars_fragment:T0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:O0,envmap_vertex:A0,fog_vertex:C0,fog_pars_vertex:R0,fog_fragment:I0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:D0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:N0,lights_pars_begin:F0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:k0,lights_phong_pars_fragment:H0,lights_physical_fragment:V0,lights_physical_pars_fragment:G0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:J0,map_fragment:K0,map_pars_fragment:Q0,map_particle_fragment:j0,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:xg,opaque_fragment:_g,packing:vg,premultiplied_alpha_fragment:yg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:bg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Ig,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Dg,specularmap_fragment:Ug,specularmap_pars_fragment:Ng,tonemapping_fragment:Fg,tonemapping_pars_fragment:Og,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:kg,uv_pars_vertex:Hg,uv_vertex:Vg,worldpos_vertex:Gg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:Zg,cube_frag:$g,depth_vert:Jg,depth_frag:Kg,distanceRGBA_vert:Qg,distanceRGBA_frag:jg,equirect_vert:tx,equirect_frag:ex,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ax,meshlambert_frag:ox,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:xx,points_vert:_x,points_frag:vx,shadow_vert:yx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:bx},wt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Dn={basic:{uniforms:Qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Qe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Qe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Qe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Qe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Qe([wt.points,wt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Qe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Qe([wt.common,wt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Qe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Qe([wt.sprite,wt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Qe([wt.common,wt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Qe([wt.lights,wt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Dn.physical={uniforms:Qe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const pa={r:0,b:0,g:0},Ui=new vn,wx=new Zt;function Tx(s,t,e,n,i,r,a){const o=new Tt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const _=m(v);_===null?p(o,l):_&&_.isColor&&(p(_,1),y=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Vs)?(h===void 0&&(h=new K(new It(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ks(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ui.copy(y.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Ui)),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new K(new Re(2,2),new An({name:"BackgroundMaterial",uniforms:ks(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(pa,jd(s)),n.buffers.color.setClear(pa.r,pa.g,pa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:x,addToRenderList:g}}function Ex(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,L,W,G,O){let U=!1;const F=u(G,W,L);r!==F&&(r=F,c(r.object)),U=f(S,G,W,O),U&&m(S,G,W,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(S,L,W,G),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,L,W){const G=W.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let U=O[L.id];U===void 0&&(U={},O[L.id]=U);let F=U[G];return F===void 0&&(F=d(l()),U[G]=F),F}function d(S){const L=[],W=[],G=[];for(let O=0;O<e;O++)L[O]=0,W[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,L,W,G){const O=r.attributes,U=L.attributes;let F=0;const Y=W.getAttributes();for(const X in Y)if(Y[X].location>=0){const Mt=O[X];let Et=U[X];if(Et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),Mt===void 0||Mt.attribute!==Et||Et&&Mt.data!==Et.data)return!0;F++}return r.attributesNum!==F||r.index!==G}function m(S,L,W,G){const O={},U=L.attributes;let F=0;const Y=W.getAttributes();for(const X in Y)if(Y[X].location>=0){let Mt=U[X];Mt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor));const Et={};Et.attribute=Mt,Mt&&Mt.data&&(Et.data=Mt.data),O[X]=Et,F++}r.attributes=O,r.attributesNum=F,r.index=G}function x(){const S=r.newAttributes;for(let L=0,W=S.length;L<W;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const W=r.newAttributes,G=r.enabledAttributes,O=r.attributeDivisors;W[S]=1,G[S]===0&&(s.enableVertexAttribArray(S),G[S]=1),O[S]!==L&&(s.vertexAttribDivisor(S,L),O[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let W=0,G=L.length;W<G;W++)L[W]!==S[W]&&(s.disableVertexAttribArray(W),L[W]=0)}function y(S,L,W,G,O,U,F){F===!0?s.vertexAttribIPointer(S,L,W,O,U):s.vertexAttribPointer(S,L,W,G,O,U)}function _(S,L,W,G){x();const O=G.attributes,U=W.getAttributes(),F=L.defaultAttributeValues;for(const Y in U){const X=U[Y];if(X.location>=0){let it=O[Y];if(it===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const Mt=it.normalized,Et=it.itemSize,Vt=t.get(it);if(Vt===void 0)continue;const Kt=Vt.buffer,Q=Vt.type,lt=Vt.bytesPerElement,mt=Q===s.INT||Q===s.UNSIGNED_INT||it.gpuType===ko;if(it.isInterleavedBufferAttribute){const dt=it.data,Pt=dt.stride,Ht=it.offset;if(dt.isInstancedInterleavedBuffer){for(let N=0;N<X.locationSize;N++)p(X.location+N,dt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let N=0;N<X.locationSize;N++)g(X.location+N);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let N=0;N<X.locationSize;N++)y(X.location+N,Et/X.locationSize,Q,Mt,Pt*lt,(Ht+Et/X.locationSize*N)*lt,mt)}else{if(it.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)p(X.location+dt,it.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<X.locationSize;dt++)g(X.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let dt=0;dt<X.locationSize;dt++)y(X.location+dt,Et/X.locationSize,Q,Mt,Et*lt,Et/X.locationSize*dt*lt,mt)}}else if(F!==void 0){const Mt=F[Y];if(Mt!==void 0)switch(Mt.length){case 2:s.vertexAttrib2fv(X.location,Mt);break;case 3:s.vertexAttrib3fv(X.location,Mt);break;case 4:s.vertexAttrib4fv(X.location,Mt);break;default:s.vertexAttrib1fv(X.location,Mt)}}}}v()}function R(){P();for(const S in n){const L=n[S];for(const W in L){const G=L[W];for(const O in G)h(G[O].object),delete G[O];delete L[W]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const W in L){const G=L[W];for(const O in G)h(G[O].object),delete G[O];delete L[W]}delete n[S.id]}function E(S){for(const L in n){const W=n[L];if(W[S.id]===void 0)continue;const G=W[S.id];for(const O in G)h(G[O].object),delete G[O];delete W[S.id]}}function P(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Ax(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==en&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!P)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function Rx(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Si,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;l.value=_,_=h(m,d,y,f);for(let R=0;R!==y;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ix(s){let t=new WeakMap;function e(a,o){return o===yr?a.mapping=ci:o===Mr&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yr||o===Mr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jo extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,Hh=[.125,.215,.35,.446,.526,.582],Xi=20,Ol=new Jo,Vh=new Tt;let Bl=null,zl=0,kl=0,Hl=!1;const Wi=(1+Math.sqrt(5))/2,ws=1/Wi,Gh=[new A(-Wi,ws,0),new A(Wi,ws,0),new A(-ws,0,Wi),new A(ws,0,Wi),new A(0,Wi,-ws),new A(0,Wi,ws),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Gs,format:en,colorSpace:os,depthBuffer:!1},i=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Px(r)),this._blurMaterial=Lx(r,t,e)}return i}_compileMaterial(t){const e=new K(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,i){const o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vh),h.toneMapping=ai,h.autoClear=!1;const f=new Qt({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new K(new It,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Vh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ma(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ci||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gh[(i-r-1)%Gh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new K(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const p=[];let v=0;for(let E=0;E<Xi;++E){const P=E/x,b=Math.exp(-P*P/2);p.push(b),E===0?v+=b:E<g&&(v+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const _=this._sizeLods[i],R=3*_*(i>y-Us?i-y+Us:0),T=4*(this._cubeSize-_);ma(e,R,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Ol)}}function Px(s){const t=[],e=[],n=[];let i=s;const r=s-Us+1+Hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Us?l=Hh[a-s+Us-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,P=T>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(b,x*m*T),y.set(d,g*m*T);const S=[T,T,T,T,T,T];_.set(S,p*m*T)}const R=new te;R.setAttribute("position",new le(v,x)),R.setAttribute("uv",new le(y,g)),R.setAttribute("faceIndex",new le(_,p)),t.push(R),i>Us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wh(s,t,e){const n=new Nn(s,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lx(s,t,e){const n=new Float32Array(Xi),i=new A(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dx(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yr||l===Mr,h=l===ci||l===Ti;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Po(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Po(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ux(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nx(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){const R=v[y+0],T=v[y+1],E=v[y+2];d.push(R,T,T,E,E,R)}}else if(m!==void 0){const v=m.array;x=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const R=y+0,T=y+1,E=y+2;d.push(R,T,T,E,E,R)}}else return;const g=new(Zd(d)?kc:zc)(d,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Fx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ox(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Bx(s,t,e){const n=new WeakMap,i=new he;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let R=o.attributes.position.count*_,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*T*4*u),P=new Yo(E,R,T,u);P.type=hn,P.needsUpdate=!0;const b=_*4;for(let L=0;L<u;L++){const W=p[L],G=v[L],O=y[L],U=R*T*4*L;for(let F=0;F<W.count;F++){const Y=F*b;m===!0&&(i.fromBufferAttribute(W,F),E[U+Y+0]=i.x,E[U+Y+1]=i.y,E[U+Y+2]=i.z,E[U+Y+3]=0),x===!0&&(i.fromBufferAttribute(G,F),E[U+Y+4]=i.x,E[U+Y+5]=i.y,E[U+Y+6]=i.z,E[U+Y+7]=0),g===!0&&(i.fromBufferAttribute(O,F),E[U+Y+8]=i.x,E[U+Y+9]=i.y,E[U+Y+10]=i.z,E[U+Y+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new rt(R,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vc extends Ae{constructor(t,e,n,i,r,a,o,l,c,h=Ki){if(h!==Ki&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=hi),n===void 0&&h===ns&&(n=es),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rf=new Ae,Yh=new Vc(1,1),af=new Yo,of=new Bc,lf=new zr,Zh=[],$h=[],Jh=new Float32Array(16),Kh=new Float32Array(9),Qh=new Float32Array(4);function Xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Zh[i];if(r===void 0&&(r=new Float32Array(i),Zh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ko(s,t){let e=$h[t];e===void 0&&(e=new Int32Array(t),$h[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function kx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function Vx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function Gx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function Wx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Qh.set(n),s.uniformMatrix2fv(this.addr,!1,Qh),Be(e,n)}}function Xx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Kh.set(n),s.uniformMatrix3fv(this.addr,!1,Kh),Be(e,n)}}function qx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Jh.set(n),s.uniformMatrix4fv(this.addr,!1,Jh),Be(e,n)}}function Yx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function $x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function Kx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function e_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yh.compareFunction=Fc,r=Yh):r=rf,e.setTexture2D(t||r,i)}function n_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||of,i)}function i_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lf,i)}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||af,i)}function r_(s){switch(s){case 5126:return kx;case 35664:return Hx;case 35665:return Vx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return Zx;case 35668:case 35672:return $x;case 35669:case 35673:return Jx;case 5125:return Kx;case 36294:return Qx;case 36295:return jx;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function a_(s,t){s.uniform1fv(this.addr,t)}function o_(s,t){const e=Xs(t,this.size,2);s.uniform2fv(this.addr,e)}function l_(s,t){const e=Xs(t,this.size,3);s.uniform3fv(this.addr,e)}function c_(s,t){const e=Xs(t,this.size,4);s.uniform4fv(this.addr,e)}function h_(s,t){const e=Xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function u_(s,t){const e=Xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function d_(s,t){const e=Xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function f_(s,t){s.uniform1iv(this.addr,t)}function p_(s,t){s.uniform2iv(this.addr,t)}function m_(s,t){s.uniform3iv(this.addr,t)}function g_(s,t){s.uniform4iv(this.addr,t)}function x_(s,t){s.uniform1uiv(this.addr,t)}function __(s,t){s.uniform2uiv(this.addr,t)}function v_(s,t){s.uniform3uiv(this.addr,t)}function y_(s,t){s.uniform4uiv(this.addr,t)}function M_(s,t,e){const n=this.cache,i=t.length,r=Ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rf,r[a])}function S_(s,t,e){const n=this.cache,i=t.length,r=Ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||of,r[a])}function b_(s,t,e){const n=this.cache,i=t.length,r=Ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lf,r[a])}function w_(s,t,e){const n=this.cache,i=t.length,r=Ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||af,r[a])}function T_(s){switch(s){case 5126:return a_;case 35664:return o_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return v_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return w_}}class E_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function jh(s,t){s.seq.push(t),s.map[t.id]=t}function R_(s,t,e){const n=s.name,i=n.length;for(Vl.lastIndex=0;;){const r=Vl.exec(n),a=Vl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jh(e,c===void 0?new E_(o,s,t):new A_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new C_(o),jh(e,u)),e=u}}}class Xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);R_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function tu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const I_=37297;let P_=0;function L_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eu=new ne;function D_(s){oe._getMatrix(eu,oe.workingColorSpace,s);const t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Br:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+L_(s.getShaderSource(t),a)}else return i}function U_(s,t){const e=D_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N_(s,t){let e;switch(t){case Cd:e="Linear";break;case Rd:e="Reinhard";break;case Id:e="Cineon";break;case wc:e="ACESFilmic";break;case Ld:e="AgX";break;case Dd:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ga=new A;function F_(){oe.getLuminanceCoefficients(ga);const s=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function B_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function hr(s){return s!==""}function iu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function su(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(s){return s.replace(k_,V_)}const H_=new Map;function V_(s,t){let e=re[t];if(e===void 0){const n=H_.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fc(e)}const G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(s){return s.replace(G_,W_)}function W_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function au(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===od?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function q_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ci:case Ti:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fr:t="ENVMAP_BLENDING_MULTIPLY";break;case Ed:t="ENVMAP_BLENDING_MIX";break;case Ad:t="ENVMAP_BLENDING_ADD";break}return t}function $_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=X_(e),c=q_(e),h=Y_(e),u=Z_(e),d=$_(e),f=O_(e),m=B_(r),x=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(g=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?re.tonemapping_pars_fragment:"",e.toneMapping!==ai?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),F_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=fc(a),a=iu(a,e),a=su(a,e),o=fc(o),o=iu(o,e),o=su(o,e),a=ru(a),o=ru(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+a,_=v+p+o,R=tu(i,i.VERTEX_SHADER,y),T=tu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(L){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(T).trim();let U=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{const Y=nu(i,R,"vertex"),X=nu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+Y+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||O==="")&&(F=!1);F&&(L.diagnostics={runnable:U,programLog:W,vertexShader:{log:G,prefix:g},fragmentShader:{log:O,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new Xa(i,x),b=z_(i,x)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,I_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let K_=0;class Q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new j_(t),e.set(t,n)),n}}class j_{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}}function tv(s,t,e,n,i,r,a){const o=new Zo,l=new Q_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,W,G){const O=W.fog,U=G.geometry,F=b.isMeshStandardMaterial?W.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),X=Y&&Y.mapping===Vs?Y.image.height:null,it=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Mt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Et=Mt!==void 0?Mt.length:0;let Vt=0;U.morphAttributes.position!==void 0&&(Vt=1),U.morphAttributes.normal!==void 0&&(Vt=2),U.morphAttributes.color!==void 0&&(Vt=3);let Kt,Q,lt,mt;if(it){const ae=Dn[it];Kt=ae.vertexShader,Q=ae.fragmentShader}else Kt=b.vertexShader,Q=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);const dt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ht=G.isInstancedMesh===!0,N=G.isBatchedMesh===!0,_t=!!b.map,q=!!b.matcap,j=!!Y,I=!!b.aoMap,Lt=!!b.lightMap,ht=!!b.bumpMap,pt=!!b.normalMap,ct=!!b.displacementMap,Ot=!!b.emissiveMap,St=!!b.metalnessMap,C=!!b.roughnessMap,M=b.anisotropy>0,H=b.clearcoat>0,k=b.dispersion>0,st=b.iridescence>0,tt=b.sheen>0,Dt=b.transmission>0,bt=M&&!!b.anisotropyMap,Rt=H&&!!b.clearcoatMap,ee=H&&!!b.clearcoatNormalMap,ut=H&&!!b.clearcoatRoughnessMap,At=st&&!!b.iridescenceMap,Wt=st&&!!b.iridescenceThicknessMap,Yt=tt&&!!b.sheenColorMap,Ut=tt&&!!b.sheenRoughnessMap,ot=!!b.specularMap,at=!!b.specularColorMap,vt=!!b.specularIntensityMap,D=Dt&&!!b.transmissionMap,et=Dt&&!!b.thicknessMap,V=!!b.gradientMap,J=!!b.alphaMap,gt=b.alphaTest>0,yt=!!b.alphaHash,qt=!!b.extensions;let xe=ai;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(xe=s.toneMapping);const be={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Kt,fragmentShader:Q,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:N,batchingColor:N&&G._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&G.instanceColor!==null,instancingMorph:Ht&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:os,alphaToCoverage:!!b.alphaToCoverage,map:_t,matcap:q,envMap:j,envMapMode:j&&Y.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:Lt,bumpMap:ht,normalMap:pt,displacementMap:d&&ct,emissiveMap:Ot,normalMapObjectSpace:pt&&b.normalMapType===kd,normalMapTangentSpace:pt&&b.normalMapType===Ei,metalnessMap:St,roughnessMap:C,anisotropy:M,anisotropyMap:bt,clearcoat:H,clearcoatMap:Rt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ut,dispersion:k,iridescence:st,iridescenceMap:At,iridescenceThicknessMap:Wt,sheen:tt,sheenColorMap:Yt,sheenRoughnessMap:Ut,specularMap:ot,specularColorMap:at,specularIntensityMap:vt,transmission:Dt,transmissionMap:D,thicknessMap:et,gradientMap:V,opaque:b.transparent===!1&&b.blending===Ji&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:yt,combine:b.combine,mapUv:_t&&x(b.map.channel),aoMapUv:I&&x(b.aoMap.channel),lightMapUv:Lt&&x(b.lightMap.channel),bumpMapUv:ht&&x(b.bumpMap.channel),normalMapUv:pt&&x(b.normalMap.channel),displacementMapUv:ct&&x(b.displacementMap.channel),emissiveMapUv:Ot&&x(b.emissiveMap.channel),metalnessMapUv:St&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:bt&&x(b.anisotropyMap.channel),clearcoatMapUv:Rt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(b.sheenRoughnessMap.channel),specularMapUv:ot&&x(b.specularMap.channel),specularColorMapUv:at&&x(b.specularColorMap.channel),specularIntensityMapUv:vt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:et&&x(b.thicknessMap.channel),alphaMapUv:J&&x(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(_t||J),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:G.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:_t&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===Ye,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(S,b),y(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const S=m[b.type];let L;if(S){const W=Dn[S];L=tf.clone(W.uniforms)}else L=b.uniforms;return L}function R(b,S){let L;for(let W=0,G=h.length;W<G;W++){const O=h[W];if(O.cacheKey===S){L=O,++L.usedTimes;break}}return L===void 0&&(L=new J_(s,S,b,r),h.push(L)),L}function T(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function ev(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ou(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||nv),n.length>1&&n.sort(d||ou),i.length>1&&i.sort(d||ou)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function iv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new lu,s.set(n,[a])):i>=r.length?(a=new lu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Tt};break;case"SpotLight":e={position:new A,direction:new A,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function rv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let av=0;function ov(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lv(s){const t=new sv,e=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,_=0,R=0,T=0,E=0;c.sort(ov);for(let b=0,S=c.length;b<S;b++){const L=c[b],W=L.color,G=L.intensity,O=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],G);E++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=F,f++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(W).multiplyScalar(G),F.distance=O,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[x]=F;const Y=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,Y.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=U,_++}x++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(W).multiplyScalar(G),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=F,g++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const Y=L.shadow,X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(G),F.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=F,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=E,n.version=av++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function cu(s){const t=new lv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new cu(s),t.set(i,[o])):r>=a.length?(o=new cu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gc extends $e{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wc extends $e{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dv(s,t,e){let n=new kr;const i=new rt,r=new rt,a=new he,o=new Gc({depthPacking:zd}),l=new Wc,c={},h=e.maxTextureSize,u={[li]:Ye,[Ye]:li,[Ve]:Ve},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new te;m.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new K(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let p=this.type;this.render=function(T,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),W=s.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=p!==zn&&this.type===zn,O=p===zn&&this.type!==zn;for(let U=0,F=T.length;U<F;U++){const Y=T[U],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const it=X.getFrameExtents();if(i.multiply(it),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,X.mapSize.y=r.y)),X.map===null||G===!0||O===!0){const Et=this.type!==zn?{minFilter:Ge,magFilter:Ge}:{};X.map!==null&&X.map.dispose(),X.map=new Nn(i.x,i.y,Et),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Mt=X.getViewportCount();for(let Et=0;Et<Mt;Et++){const Vt=X.getViewport(Et);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),W.viewport(a),X.updateMatrices(Y,Et),n=X.getFrustum(),_(E,P,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&v(X,P),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,S,L)};function v(T,E){const P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,P,f,x,null)}function y(T,E,P,b){let S=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=S.uuid,G=E.uuid;let O=c[W];O===void 0&&(O={},c[W]=O);let U=O[G];U===void 0&&(U=S.clone(),O[G]=U,E.addEventListener("dispose",R)),S=U}if(S.visible=E.visible,S.wireframe=E.wireframe,b===zn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=s.properties.get(S);W.light=P}return S}function _(T,E,P,b,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const G=t.update(T),O=T.material;if(Array.isArray(O)){const U=G.groups;for(let F=0,Y=U.length;F<Y;F++){const X=U[F],it=O[X.materialIndex];if(it&&it.visible){const Mt=y(T,it,b,S);T.onBeforeShadow(s,T,E,P,G,Mt,X),s.renderBufferDirect(P,null,G,Mt,T,X),T.onAfterShadow(s,T,E,P,G,Mt,X)}}}else if(O.visible){const U=y(T,O,b,S);T.onBeforeShadow(s,T,E,P,G,U,null),s.renderBufferDirect(P,null,G,U,T,null),T.onAfterShadow(s,T,E,P,G,U,null)}}const W=T.children;for(let G=0,O=W.length;G<O;G++)_(W[G],E,P,b,S)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const b=c[P],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const fv={[Ja]:Ka,[Qa]:eo,[ja]:no,[ts]:to,[Ka]:Ja,[eo]:Qa,[no]:ja,[to]:ts};function pv(s,t){function e(){let D=!1;const et=new he;let V=null;const J=new he(0,0,0,0);return{setMask:function(gt){V!==gt&&!D&&(s.colorMask(gt,gt,gt,gt),V=gt)},setLocked:function(gt){D=gt},setClear:function(gt,yt,qt,xe,be){be===!0&&(gt*=xe,yt*=xe,qt*=xe),et.set(gt,yt,qt,xe),J.equals(et)===!1&&(s.clearColor(gt,yt,qt,xe),J.copy(et))},reset:function(){D=!1,V=null,J.set(-1,0,0,0)}}}function n(){let D=!1,et=!1,V=null,J=null,gt=null;return{setReversed:function(yt){if(et!==yt){const qt=t.get("EXT_clip_control");et?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const xe=gt;gt=null,this.setClear(xe)}et=yt},getReversed:function(){return et},setTest:function(yt){yt?dt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(yt){V!==yt&&!D&&(s.depthMask(yt),V=yt)},setFunc:function(yt){if(et&&(yt=fv[yt]),J!==yt){switch(yt){case Ja:s.depthFunc(s.NEVER);break;case Ka:s.depthFunc(s.ALWAYS);break;case Qa:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case ja:s.depthFunc(s.EQUAL);break;case to:s.depthFunc(s.GEQUAL);break;case eo:s.depthFunc(s.GREATER);break;case no:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=yt}},setLocked:function(yt){D=yt},setClear:function(yt){gt!==yt&&(et&&(yt=1-yt),s.clearDepth(yt),gt=yt)},reset:function(){D=!1,V=null,J=null,gt=null,et=!1}}}function i(){let D=!1,et=null,V=null,J=null,gt=null,yt=null,qt=null,xe=null,be=null;return{setTest:function(ae){D||(ae?dt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ae){et!==ae&&!D&&(s.stencilMask(ae),et=ae)},setFunc:function(ae,De,fn){(V!==ae||J!==De||gt!==fn)&&(s.stencilFunc(ae,De,fn),V=ae,J=De,gt=fn)},setOp:function(ae,De,fn){(yt!==ae||qt!==De||xe!==fn)&&(s.stencilOp(ae,De,fn),yt=ae,qt=De,xe=fn)},setLocked:function(ae){D=ae},setClear:function(ae){be!==ae&&(s.clearStencil(ae),be=ae)},reset:function(){D=!1,et=null,V=null,J=null,gt=null,yt=null,qt=null,xe=null,be=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,R=null,T=null,E=new Tt(0,0,0),P=0,b=!1,S=null,L=null,W=null,G=null,O=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=Y>=2);let it=null,Mt={};const Et=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),Kt=new he().fromArray(Et),Q=new he().fromArray(Vt);function lt(D,et,V,J){const gt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(D,yt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<V;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(et+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return yt}const mt={};mt[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(ts),ht(!1),pt(oc),dt(s.CULL_FACE),I(ri);function dt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Pt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ht(D,et){return u[D]!==et?(s.bindFramebuffer(D,et),u[D]=et,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=et),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=et),!0):!1}function N(D,et){let V=f,J=!1;if(D){V=d.get(et),V===void 0&&(V=[],d.set(et,V));const gt=D.textures;if(V.length!==gt.length||V[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,qt=gt.length;yt<qt;yt++)V[yt]=s.COLOR_ATTACHMENT0+yt;V.length=gt.length,J=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,J=!0);J&&s.drawBuffers(V)}function _t(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const q={[bi]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};q[ud]=s.MIN,q[dd]=s.MAX;const j={[fd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[Za]:s.SRC_ALPHA,[Md]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[xd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[$a]:s.ONE_MINUS_SRC_ALPHA,[yd]:s.ONE_MINUS_DST_COLOR,[_d]:s.ONE_MINUS_DST_ALPHA,[Sd]:s.CONSTANT_COLOR,[bd]:s.ONE_MINUS_CONSTANT_COLOR,[wd]:s.CONSTANT_ALPHA,[Td]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,et,V,J,gt,yt,qt,xe,be,ae){if(D===ri){x===!0&&(Pt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),D!==ld){if(D!==g||ae!==b){if((p!==bi||_!==bi)&&(s.blendEquation(s.FUNC_ADD),p=bi,_=bi),ae)switch(D){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ue:s.blendFunc(s.ONE,s.ONE);break;case lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ue:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,R=null,T=null,E.set(0,0,0),P=0,g=D,b=ae}return}gt=gt||et,yt=yt||V,qt=qt||J,(et!==p||gt!==_)&&(s.blendEquationSeparate(q[et],q[gt]),p=et,_=gt),(V!==v||J!==y||yt!==R||qt!==T)&&(s.blendFuncSeparate(j[V],j[J],j[yt],j[qt]),v=V,y=J,R=yt,T=qt),(xe.equals(E)===!1||be!==P)&&(s.blendColor(xe.r,xe.g,xe.b,be),E.copy(xe),P=be),g=D,b=!1}function Lt(D,et){D.side===Ve?Pt(s.CULL_FACE):dt(s.CULL_FACE);let V=D.side===Ye;et&&(V=!V),ht(V),D.blending===Ji&&D.transparent===!1?I(ri):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function pt(D){D!==rd?(dt(s.CULL_FACE),D!==L&&(D===oc?s.cullFace(s.BACK):D===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),L=D}function ct(D){D!==W&&(F&&s.lineWidth(D),W=D)}function Ot(D,et,V){D?(dt(s.POLYGON_OFFSET_FILL),(G!==et||O!==V)&&(s.polygonOffset(et,V),G=et,O=V)):Pt(s.POLYGON_OFFSET_FILL)}function St(D){D?dt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+U-1),it!==D&&(s.activeTexture(D),it=D)}function M(D,et,V){V===void 0&&(it===null?V=s.TEXTURE0+U-1:V=it);let J=Mt[V];J===void 0&&(J={type:void 0,texture:void 0},Mt[V]=J),(J.type!==D||J.texture!==et)&&(it!==V&&(s.activeTexture(V),it=V),s.bindTexture(D,et||mt[D]),J.type=D,J.texture=et)}function H(){const D=Mt[it];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(D){Kt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Kt.copy(D))}function Ut(D){Q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function ot(D,et){let V=c.get(et);V===void 0&&(V=new WeakMap,c.set(et,V));let J=V.get(D);J===void 0&&(J=s.getUniformBlockIndex(et,D.name),V.set(D,J))}function at(D,et){const J=c.get(et).get(D);l.get(et)!==J&&(s.uniformBlockBinding(et,J,D.__bindingPointIndex),l.set(et,J))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,Mt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,R=null,T=null,E=new Tt(0,0,0),P=0,b=!1,S=null,L=null,W=null,G=null,O=null,Kt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Pt,bindFramebuffer:Ht,drawBuffers:N,useProgram:_t,setBlending:I,setMaterial:Lt,setFlipSided:ht,setCullFace:pt,setLineWidth:ct,setPolygonOffset:Ot,setScissorTest:St,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:k,compressedTexImage3D:st,texImage2D:At,texImage3D:Wt,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:ee,texStorage3D:ut,texSubImage2D:tt,texSubImage3D:Dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Rt,scissor:Yt,viewport:Ut,reset:vt}}function mv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function gv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function xv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function pc(s,t,e,n){const i=_v(n);switch(e){case Rc:return s*t;case Pc:return s*t;case Lc:return s*t*2;case Go:return s*t/i.components*i.byteLength;case Or:return s*t/i.components*i.byteLength;case Dc:return s*t*2/i.components*i.byteLength;case Wo:return s*t*2/i.components*i.byteLength;case Ic:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case Xo:return s*t*4/i.components*i.byteLength;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(s,16)*Math.max(t,8)/4;case io:case ro:return Math.max(s,8)*Math.max(t,8)/2;case oo:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case gr:case To:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uc:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Co:case Ro:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _v(s){switch(s){case Xn:case Ec:return{byteLength:1,components:1};case Bs:case Ac:case Gs:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case hi:case ko:case hn:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const vv={contain:mv,cover:gv,fill:xv,getByteLength:pc};function yv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return f?new OffscreenCanvas(C,M):Ar("canvas")}function x(C,M,H){let k=1;const st=St(C);if((st.width>H||st.height>H)&&(k=H/Math.max(st.width,st.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(k*st.width),Dt=Math.floor(k*st.height);u===void 0&&(u=m(tt,Dt));const bt=M?m(tt,Dt):u;return bt.width=tt,bt.height=Dt,bt.getContext("2d").drawImage(C,0,0,tt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Dt+")."),bt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,M,H,k,st=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=M;if(M===s.RED&&(H===s.FLOAT&&(tt=s.R32F),H===s.HALF_FLOAT&&(tt=s.R16F),H===s.UNSIGNED_BYTE&&(tt=s.R8)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.R8UI),H===s.UNSIGNED_SHORT&&(tt=s.R16UI),H===s.UNSIGNED_INT&&(tt=s.R32UI),H===s.BYTE&&(tt=s.R8I),H===s.SHORT&&(tt=s.R16I),H===s.INT&&(tt=s.R32I)),M===s.RG&&(H===s.FLOAT&&(tt=s.RG32F),H===s.HALF_FLOAT&&(tt=s.RG16F),H===s.UNSIGNED_BYTE&&(tt=s.RG8)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RG8UI),H===s.UNSIGNED_SHORT&&(tt=s.RG16UI),H===s.UNSIGNED_INT&&(tt=s.RG32UI),H===s.BYTE&&(tt=s.RG8I),H===s.SHORT&&(tt=s.RG16I),H===s.INT&&(tt=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),H===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),H===s.UNSIGNED_INT&&(tt=s.RGB32UI),H===s.BYTE&&(tt=s.RGB8I),H===s.SHORT&&(tt=s.RGB16I),H===s.INT&&(tt=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),H===s.UNSIGNED_INT&&(tt=s.RGBA32UI),H===s.BYTE&&(tt=s.RGBA8I),H===s.SHORT&&(tt=s.RGBA16I),H===s.INT&&(tt=s.RGBA32I)),M===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),M===s.RGBA){const Dt=st?Br:oe.getTransfer(k);H===s.FLOAT&&(tt=s.RGBA32F),H===s.HALF_FLOAT&&(tt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(tt=Dt===me?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(C,M){let H;return C?M===null||M===hi||M===es?H=s.DEPTH24_STENCIL8:M===hn?H=s.DEPTH32F_STENCIL8:M===Bs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===es?H=s.DEPTH_COMPONENT24:M===hn?H=s.DEPTH_COMPONENT32F:M===Bs&&(H=s.DEPTH_COMPONENT16),H}function R(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==Fe?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){const M=C.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&h.delete(M)}function E(C){const M=C.target;M.removeEventListener("dispose",E),S(M)}function P(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,k=d.get(H);if(k){const st=k[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(C),Object.keys(k).length===0&&d.delete(H)}n.remove(C)}function b(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const H=C.source,k=d.get(H);delete k[M.__cacheKey],a.memory.textures--}function S(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(M.__webglFramebuffer[k]))for(let st=0;st<M.__webglFramebuffer[k].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[k][st]);else s.deleteFramebuffer(M.__webglFramebuffer[k]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[k])}else{if(Array.isArray(M.__webglFramebuffer))for(let k=0;k<M.__webglFramebuffer.length;k++)s.deleteFramebuffer(M.__webglFramebuffer[k]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let k=0;k<M.__webglColorRenderbuffer.length;k++)M.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[k]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let k=0,st=H.length;k<st;k++){const tt=n.get(H[k]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(H[k])}n.remove(C)}let L=0;function W(){L=0}function G(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function U(C,M){const H=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const k=C.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,C,M);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function F(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Q(H,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function Y(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Q(H,C,M);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function X(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){lt(H,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}const it={[Os]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},Mt={[Ge]:s.NEAREST,[Tc]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Et={[Hd]:s.NEVER,[Yd]:s.ALWAYS,[Vd]:s.LESS,[Fc]:s.LEQUAL,[Gd]:s.EQUAL,[qd]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function Vt(C,M){if(M.type===hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fe||M.magFilter===ur||M.magFilter===Ls||M.magFilter===Hn||M.minFilter===Fe||M.minFilter===ur||M.minFilter===Ls||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,it[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,it[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,it[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Mt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Mt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ge||M.minFilter!==Ls&&M.minFilter!==Hn||M.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const k=M.source;let st=d.get(k);st===void 0&&(st={},d.set(k,st));const tt=O(M);if(tt!==C.__cacheKey){st[tt]===void 0&&(st[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),st[tt].usedTimes++;const Dt=st[C.__cacheKey];Dt!==void 0&&(st[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&b(M)),C.__cacheKey=tt,C.__webglTexture=st[tt].texture}return H}function Q(C,M,H){let k=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(k=s.TEXTURE_3D);const st=Kt(C,M),tt=M.source;e.bindTexture(k,C.__webglTexture,s.TEXTURE0+H);const Dt=n.get(tt);if(tt.version!==Dt.__version||st===!0){e.activeTexture(s.TEXTURE0+H);const bt=oe.getPrimaries(oe.workingColorSpace),Rt=M.colorSpace===ei?null:oe.getPrimaries(M.colorSpace),ee=M.colorSpace===ei||bt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ut=x(M.image,!1,i.maxTextureSize);ut=Ot(M,ut);const At=r.convert(M.format,M.colorSpace),Wt=r.convert(M.type);let Yt=y(M.internalFormat,At,Wt,M.colorSpace,M.isVideoTexture);Vt(k,M);let Ut;const ot=M.mipmaps,at=M.isVideoTexture!==!0,vt=Dt.__version===void 0||st===!0,D=tt.dataReady,et=R(M,ut);if(M.isDepthTexture)Yt=_(M.format===ns,M.type),vt&&(at?e.texStorage2D(s.TEXTURE_2D,1,Yt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Yt,ut.width,ut.height,0,At,Wt,null));else if(M.isDataTexture)if(ot.length>0){at&&vt&&e.texStorage2D(s.TEXTURE_2D,et,Yt,ot[0].width,ot[0].height);for(let V=0,J=ot.length;V<J;V++)Ut=ot[V],at?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Ut.width,Ut.height,At,Wt,Ut.data):e.texImage2D(s.TEXTURE_2D,V,Yt,Ut.width,Ut.height,0,At,Wt,Ut.data);M.generateMipmaps=!1}else at?(vt&&e.texStorage2D(s.TEXTURE_2D,et,Yt,ut.width,ut.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,At,Wt,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Yt,ut.width,ut.height,0,At,Wt,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Yt,ot[0].width,ot[0].height,ut.depth);for(let V=0,J=ot.length;V<J;V++)if(Ut=ot[V],M.format!==en)if(At!==null)if(at){if(D)if(M.layerUpdates.size>0){const gt=pc(Ut.width,Ut.height,M.format,M.type);for(const yt of M.layerUpdates){const qt=Ut.data.subarray(yt*gt/Ut.data.BYTES_PER_ELEMENT,(yt+1)*gt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,yt,Ut.width,Ut.height,1,At,qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Ut.width,Ut.height,ut.depth,At,Ut.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Yt,Ut.width,Ut.height,ut.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Ut.width,Ut.height,ut.depth,At,Wt,Ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Yt,Ut.width,Ut.height,ut.depth,0,At,Wt,Ut.data)}else{at&&vt&&e.texStorage2D(s.TEXTURE_2D,et,Yt,ot[0].width,ot[0].height);for(let V=0,J=ot.length;V<J;V++)Ut=ot[V],M.format!==en?At!==null?at?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Ut.width,Ut.height,At,Ut.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Ut.width,Ut.height,At,Wt,Ut.data):e.texImage2D(s.TEXTURE_2D,V,Yt,Ut.width,Ut.height,0,At,Wt,Ut.data)}else if(M.isDataArrayTexture)if(at){if(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Yt,ut.width,ut.height,ut.depth),D)if(M.layerUpdates.size>0){const V=pc(ut.width,ut.height,M.format,M.type);for(const J of M.layerUpdates){const gt=ut.data.subarray(J*V/ut.data.BYTES_PER_ELEMENT,(J+1)*V/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ut.width,ut.height,1,At,Wt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,At,Wt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,ut.width,ut.height,ut.depth,0,At,Wt,ut.data);else if(M.isData3DTexture)at?(vt&&e.texStorage3D(s.TEXTURE_3D,et,Yt,ut.width,ut.height,ut.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,At,Wt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Yt,ut.width,ut.height,ut.depth,0,At,Wt,ut.data);else if(M.isFramebufferTexture){if(vt)if(at)e.texStorage2D(s.TEXTURE_2D,et,Yt,ut.width,ut.height);else{let V=ut.width,J=ut.height;for(let gt=0;gt<et;gt++)e.texImage2D(s.TEXTURE_2D,gt,Yt,V,J,0,At,Wt,null),V>>=1,J>>=1}}else if(ot.length>0){if(at&&vt){const V=St(ot[0]);e.texStorage2D(s.TEXTURE_2D,et,Yt,V.width,V.height)}for(let V=0,J=ot.length;V<J;V++)Ut=ot[V],at?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,At,Wt,Ut):e.texImage2D(s.TEXTURE_2D,V,Yt,At,Wt,Ut);M.generateMipmaps=!1}else if(at){if(vt){const V=St(ut);e.texStorage2D(s.TEXTURE_2D,et,Yt,V.width,V.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Wt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Yt,At,Wt,ut);g(M)&&p(k),Dt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function lt(C,M,H){if(M.image.length!==6)return;const k=Kt(C,M),st=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const tt=n.get(st);if(st.version!==tt.__version||k===!0){e.activeTexture(s.TEXTURE0+H);const Dt=oe.getPrimaries(oe.workingColorSpace),bt=M.colorSpace===ei?null:oe.getPrimaries(M.colorSpace),Rt=M.colorSpace===ei||Dt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,At=[];for(let J=0;J<6;J++)!ee&&!ut?At[J]=x(M.image[J],!0,i.maxCubemapSize):At[J]=ut?M.image[J].image:M.image[J],At[J]=Ot(M,At[J]);const Wt=At[0],Yt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),ot=y(M.internalFormat,Yt,Ut,M.colorSpace),at=M.isVideoTexture!==!0,vt=tt.__version===void 0||k===!0,D=st.dataReady;let et=R(M,Wt);Vt(s.TEXTURE_CUBE_MAP,M);let V;if(ee){at&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,ot,Wt.width,Wt.height);for(let J=0;J<6;J++){V=At[J].mipmaps;for(let gt=0;gt<V.length;gt++){const yt=V[gt];M.format!==en?Yt!==null?at?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,yt.width,yt.height,Yt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,yt.width,yt.height,Yt,Ut,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ot,yt.width,yt.height,0,Yt,Ut,yt.data)}}}else{if(V=M.mipmaps,at&&vt){V.length>0&&et++;const J=St(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,ot,J.width,J.height)}for(let J=0;J<6;J++)if(ut){at?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At[J].width,At[J].height,Yt,Ut,At[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ot,At[J].width,At[J].height,0,Yt,Ut,At[J].data);for(let gt=0;gt<V.length;gt++){const qt=V[gt].image[J].image;at?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,qt.width,qt.height,Yt,Ut,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ot,qt.width,qt.height,0,Yt,Ut,qt.data)}}else{at?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Yt,Ut,At[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ot,Yt,Ut,At[J]);for(let gt=0;gt<V.length;gt++){const yt=V[gt];at?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Yt,Ut,yt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ot,Yt,Ut,yt.image[J])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),tt.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function mt(C,M,H,k,st,tt){const Dt=r.convert(H.format,H.colorSpace),bt=r.convert(H.type),Rt=y(H.internalFormat,Dt,bt,H.colorSpace),ee=n.get(M),ut=n.get(H);if(ut.__renderTarget=M,!ee.__hasExternalTextures){const At=Math.max(1,M.width>>tt),Wt=Math.max(1,M.height>>tt);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,Rt,At,Wt,M.depth,0,Dt,bt,null):e.texImage2D(st,tt,Rt,At,Wt,0,Dt,bt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,st,ut.__webglTexture,0,ht(M)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,st,ut.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(C,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const k=M.depthTexture,st=k&&k.isDepthTexture?k.type:null,tt=_(M.stencilBuffer,st),Dt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=ht(M);pt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,tt,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,tt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,C)}else{const k=M.textures;for(let st=0;st<k.length;st++){const tt=k[st],Dt=r.convert(tt.format,tt.colorSpace),bt=r.convert(tt.type),Rt=y(tt.internalFormat,Dt,bt,tt.colorSpace),ee=ht(M);H&&pt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Rt,M.width,M.height):pt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Rt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(M.depthTexture);k.__renderTarget=M,(!k.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const st=k.__webglTexture,tt=ht(M);if(M.depthTexture.format===Ki)pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(M.depthTexture.format===ns)pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const k=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),k){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,k.removeEventListener("dispose",st)};k.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=k}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[k]),M.__webglDepthbuffer[k]===void 0)M.__webglDepthbuffer[k]=s.createRenderbuffer(),dt(M.__webglDepthbuffer[k],C,!1);else{const st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),dt(M.__webglDepthbuffer,C,!1);else{const k=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function N(C,M,H){const k=n.get(C);M!==void 0&&mt(k.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ht(C)}function _t(C){const M=C.texture,H=n.get(C),k=n.get(M);C.addEventListener("dispose",E);const st=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=M.version,a.memory.textures++),tt){H.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[bt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)H.__webglFramebuffer[bt][Rt]=s.createFramebuffer()}else H.__webglFramebuffer[bt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let bt=0;bt<M.mipmaps.length;bt++)H.__webglFramebuffer[bt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let bt=0,Rt=st.length;bt<Rt;bt++){const ee=n.get(st[bt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let bt=0;bt<st.length;bt++){const Rt=st[bt];H.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[bt]);const ee=r.convert(Rt.format,Rt.colorSpace),ut=r.convert(Rt.type),At=y(Rt.internalFormat,ee,ut,Rt.colorSpace,C.isXRRenderTarget===!0),Wt=ht(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,At,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,H.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,M);for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)mt(H.__webglFramebuffer[bt][Rt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt);else mt(H.__webglFramebuffer[bt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let bt=0,Rt=st.length;bt<Rt;bt++){const ee=st[bt],ut=n.get(ee);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),Vt(s.TEXTURE_2D,ee),mt(H.__webglFramebuffer,C,ee,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),g(ee)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let bt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,k.__webglTexture),Vt(bt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)mt(H.__webglFramebuffer[Rt],C,M,s.COLOR_ATTACHMENT0,bt,Rt);else mt(H.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,bt,0);g(M)&&p(bt),e.unbindTexture()}C.depthBuffer&&Ht(C)}function q(C){const M=C.textures;for(let H=0,k=M.length;H<k;H++){const st=M[H];if(g(st)){const tt=v(C),Dt=n.get(st).__webglTexture;e.bindTexture(tt,Dt),p(tt),e.unbindTexture()}}}const j=[],I=[];function Lt(C){if(C.samples>0){if(pt(C)===!1){const M=C.textures,H=C.width,k=C.height;let st=s.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(C),bt=M.length>1;if(bt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),bt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const ee=n.get(M[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,H,k,0,0,H,k,st,s.NEAREST),l===!0&&(j.length=0,I.length=0,j.push(s.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push(tt),I.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const ee=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ht(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ot(C,M){const H=C.colorSpace,k=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==os&&H!==ei&&(oe.getTransfer(H)===me?(k!==en||st!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=N,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pt}function cf(s,t){function e(n,i=ei){let r;const a=oe.getTransfer(i);if(n===Xn)return s.UNSIGNED_BYTE;if(n===Ho)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return s.BYTE;if(n===Ac)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===ko)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Gs)return s.HALF_FLOAT;if(n===Rc)return s.ALPHA;if(n===Ic)return s.RGB;if(n===en)return s.RGBA;if(n===Pc)return s.LUMINANCE;if(n===Lc)return s.LUMINANCE_ALPHA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===ns)return s.DEPTH_STENCIL;if(n===Go)return s.RED;if(n===Or)return s.RED_INTEGER;if(n===Dc)return s.RG;if(n===Wo)return s.RG_INTEGER;if(n===Xo)return s.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===vo||n===yo||n===Mo||n===So||n===bo||n===wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===To||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Ao||n===Co||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class hf extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ke extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mv={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends qn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=new wv,g=e.getContextAttributes();let p=null,v=null;const y=[],_=[],R=new rt;let T=null;const E=new He;E.viewport=new he;const P=new He;P.viewport=new he;const b=[E,P],S=new hf;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let lt=y[Q];return lt===void 0&&(lt=new Gl,y[Q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Q){let lt=y[Q];return lt===void 0&&(lt=new Gl,y[Q]=lt),lt.getGripSpace()},this.getHand=function(Q){let lt=y[Q];return lt===void 0&&(lt=new Gl,y[Q]=lt),lt.getHandSpace()};function G(Q){const lt=_.indexOf(Q.inputSource);if(lt===-1)return;const mt=y[lt];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,c||a),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",U);for(let Q=0;Q<y.length;Q++){const lt=_[Q];lt!==null&&(_[Q]=null,y[Q].disconnect(lt))}L=null,W=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",O),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Nn(f.framebufferWidth,f.framebufferHeight,{format:en,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,mt=null,dt=null;g.depth&&(dt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?ns:Ki,mt=g.stencil?es:hi);const Pt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Nn(d.textureWidth,d.textureHeight,{format:en,type:Xn,depthTexture:new Vc(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Q){for(let lt=0;lt<Q.removed.length;lt++){const mt=Q.removed[lt],dt=_.indexOf(mt);dt>=0&&(_[dt]=null,y[dt].disconnect(mt))}for(let lt=0;lt<Q.added.length;lt++){const mt=Q.added[lt];let dt=_.indexOf(mt);if(dt===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=_.length){_.push(mt),dt=Ht;break}else if(_[Ht]===null){_[Ht]=mt,dt=Ht;break}if(dt===-1)break}const Pt=y[dt];Pt&&Pt.connect(mt)}}const F=new A,Y=new A;function X(Q,lt,mt){F.setFromMatrixPosition(lt.matrixWorld),Y.setFromMatrixPosition(mt.matrixWorld);const dt=F.distanceTo(Y),Pt=lt.projectionMatrix.elements,Ht=mt.projectionMatrix.elements,N=Pt[14]/(Pt[10]-1),_t=Pt[14]/(Pt[10]+1),q=(Pt[9]+1)/Pt[5],j=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],Lt=(Ht[8]+1)/Ht[0],ht=N*I,pt=N*Lt,ct=dt/(-I+Lt),Ot=ct*-I;if(lt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pt[10]===-1)Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const St=N+ct,C=_t+ct,M=ht-Ot,H=pt+(dt-Ot),k=q*_t/C*St,st=j*_t/C*St;Q.projectionMatrix.makePerspective(M,H,k,st,St,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function it(Q,lt){lt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(lt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let lt=Q.near,mt=Q.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),S.near=P.near=E.near=lt,S.far=P.far=E.far=mt,(L!==S.near||W!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,W=S.far),E.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,S.layers.mask=E.layers.mask|P.layers.mask;const dt=Q.parent,Pt=S.cameras;it(S,dt);for(let Ht=0;Ht<Pt.length;Ht++)it(Pt[Ht],dt);Pt.length===2?X(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),Mt(Q,S,dt)};function Mt(Q,lt,mt){mt===null?Q.matrix.copy(lt.matrixWorld):(Q.matrix.copy(mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(lt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Et=null;function Vt(Q,lt){if(h=lt.getViewerPose(c||a),m=lt,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let dt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let Ht=0;Ht<mt.length;Ht++){const N=mt[Ht];let _t=null;if(f!==null)_t=f.getViewport(N);else{const j=u.getViewSubImage(d,N);_t=j.viewport,Ht===0&&(t.setRenderTargetTextures(v,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(v))}let q=b[Ht];q===void 0&&(q=new He,q.layers.enable(Ht),q.viewport=new he,b[Ht]=q),q.matrix.fromArray(N.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(N.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(_t.x,_t.y,_t.width,_t.height),Ht===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(q)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ht=u.getDepthInformation(mt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,i.renderState)}}for(let mt=0;mt<y.length;mt++){const dt=_[mt],Pt=y[mt];dt!==null&&Pt!==void 0&&Pt.update(dt,lt,c||a)}Et&&Et(Q,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}const Kt=new sf;Kt.setAnimationLoop(Vt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}}const Ni=new vn,Ev=new Zt;function Av(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ye&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ye&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Ni.copy(_),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Ni)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=i[v.id];_===void 0&&(m(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",g));const R=y.program;n.updateUBOMapping(v,R);const T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const y=u();v.__bindingPointIndex=y;const _=s.createBuffer(),R=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],_=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,E=_.length;T<E;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=P.length;b<S;b++){const L=P[b];if(f(L,T,b,R)===!0){const W=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let U=0;U<G.length;U++){const F=G[U],Y=x(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,W+O,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,_,R){const T=v.value,E=y+"_"+_;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(v){const y=v.uniforms;let _=0;const R=16;for(let E=0,P=y.length;E<P;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,L=b.length;S<L;S++){const W=b[S],G=Array.isArray(W.value)?W.value:[W.value];for(let O=0,U=G.length;O<U;O++){const F=G[O],Y=x(F),X=_%R,it=X%Y.boundary,Mt=X+it;_+=it,Mt!==0&&R-Mt<Y.storage&&(_+=R-Mt),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=Y.storage}}}const T=_%R;return T>0&&(_+=R-T),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class uf{constructor(t={}){const{canvas:e=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let R=!1,T=0,E=0,P=null,b=-1,S=null;const L=new he,W=new he;let G=null;const O=new Tt(0);let U=0,F=e.width,Y=e.height,X=1,it=null,Mt=null;const Et=new he(0,0,F,Y),Vt=new he(0,0,F,Y);let Kt=!1;const Q=new kr;let lt=!1,mt=!1;const dt=new Zt,Pt=new Zt,Ht=new A,N=new he,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function j(){return P===null?X:1}let I=n;function Lt(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),I===null){const B="webgl2";if(I=Lt(B,w),I===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,pt,ct,Ot,St,C,M,H,k,st,tt,Dt,bt,Rt,ee,ut,At,Wt,Yt,Ut,ot,at,vt,D;function et(){ht=new Ux(I),ht.init(),at=new cf(I,ht),pt=new Cx(I,ht,t,at),ct=new pv(I,ht),pt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ot=new Ox(I),St=new ev,C=new yv(I,ht,ct,St,pt,at,Ot),M=new Ix(_),H=new Dx(_),k=new Wm(I),vt=new Ex(I,k),st=new Nx(I,k,Ot,vt),tt=new zx(I,st,k,Ot),Yt=new Bx(I,pt,C),ut=new Rx(St),Dt=new tv(_,M,H,ht,pt,vt,ut),bt=new Av(_,St),Rt=new iv,ee=new cv(ht),Wt=new Tx(_,M,H,ct,tt,f,l),At=new dv(_,tt,pt),D=new Cv(I,Ot,pt,ct),Ut=new Ax(I,ht,Ot),ot=new Fx(I,ht,Ot),Ot.programs=Dt.programs,_.capabilities=pt,_.extensions=ht,_.properties=St,_.renderLists=Rt,_.shadowMap=At,_.state=ct,_.info=Ot}et();const V=new Tv(_,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(F,Y,!1))},this.getSize=function(w){return w.set(F,Y)},this.setSize=function(w,B,Z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,Y=B,e.width=Math.floor(w*X),e.height=Math.floor(B*X),Z===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(F*X,Y*X).floor()},this.setDrawingBufferSize=function(w,B,Z){F=w,Y=B,X=Z,e.width=Math.floor(w*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,B,Z,$){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,B,Z,$),ct.viewport(L.copy(Et).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,B,Z,$){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,B,Z,$),ct.scissor(W.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){ct.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(w=!0,B=!0,Z=!0){let $=0;if(w){let z=!1;if(P!==null){const xt=P.texture.format;z=xt===Xo||xt===Wo||xt===Or}if(z){const xt=P.texture.type,Ct=xt===Xn||xt===hi||xt===Bs||xt===es||xt===Ho||xt===Vo,Bt=Wt.getClearColor(),zt=Wt.getClearAlpha(),jt=Bt.r,se=Bt.g,kt=Bt.b;Ct?(m[0]=jt,m[1]=se,m[2]=kt,m[3]=zt,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=jt,x[1]=se,x[2]=kt,x[3]=zt,I.clearBufferiv(I.COLOR,0,x))}else $|=I.COLOR_BUFFER_BIT}B&&($|=I.DEPTH_BUFFER_BIT),Z&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Rt.dispose(),ee.dispose(),St.dispose(),M.dispose(),H.dispose(),tt.dispose(),vt.dispose(),D.dispose(),Dt.dispose(),V.dispose(),V.removeEventListener("sessionstart",hs),V.removeEventListener("sessionend",Ri),Cn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Ot.autoReset,B=At.enabled,Z=At.autoUpdate,$=At.needsUpdate,z=At.type;et(),Ot.autoReset=w,At.enabled=B,At.autoUpdate=Z,At.needsUpdate=$,At.type=z}function yt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){const B=w.target;B.removeEventListener("dispose",qt),xe(B)}function xe(w){be(w),St.remove(w)}function be(w){const B=St.get(w).programs;B!==void 0&&(B.forEach(function(Z){Dt.releaseProgram(Z)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Z,$,z,xt){B===null&&(B=_t);const Ct=z.isMesh&&z.matrixWorld.determinant()<0,Bt=up(w,B,Z,$,z);ct.setMaterial($,Ct);let zt=Z.index,jt=1;if($.wireframe===!0){if(zt=st.getWireframeAttribute(Z),zt===void 0)return;jt=2}const se=Z.drawRange,kt=Z.attributes.position;let de=se.start*jt,_e=(se.start+se.count)*jt;xt!==null&&(de=Math.max(de,xt.start*jt),_e=Math.min(_e,(xt.start+xt.count)*jt)),zt!==null?(de=Math.max(de,0),_e=Math.min(_e,zt.count)):kt!=null&&(de=Math.max(de,0),_e=Math.min(_e,kt.count));const ye=_e-de;if(ye<0||ye===1/0)return;vt.setup(z,$,Bt,Z,zt);let an,fe=Ut;if(zt!==null&&(an=k.get(zt),fe=ot,fe.setIndex(an)),z.isMesh)$.wireframe===!0?(ct.setLineWidth($.wireframeLinewidth*j()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(z.isLine){let Gt=$.linewidth;Gt===void 0&&(Gt=1),ct.setLineWidth(Gt*j()),z.isLineSegments?fe.setMode(I.LINES):z.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else z.isPoints?fe.setMode(I.POINTS):z.isSprite&&fe.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Gt=z._multiDrawStarts,Zn=z._multiDrawCounts,pe=z._multiDrawCount,Rn=zt?k.get(zt).bytesPerElement:1,us=St.get($).currentProgram.getUniforms();for(let pn=0;pn<pe;pn++)us.setValue(I,"_gl_DrawID",pn),fe.render(Gt[pn]/Rn,Zn[pn])}else if(z.isInstancedMesh)fe.renderInstances(de,ye,z.count);else if(Z.isInstancedBufferGeometry){const Gt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Zn=Math.min(Z.instanceCount,Gt);fe.renderInstances(de,ye,Zn)}else fe.render(de,ye)};function ae(w,B,Z){w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,Jr(w,B,Z),w.side=li,w.needsUpdate=!0,Jr(w,B,Z),w.side=Ve):Jr(w,B,Z)}this.compile=function(w,B,Z=null){Z===null&&(Z=w),p=ee.get(Z),p.init(B),y.push(p),Z.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==Z&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const xt=z.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const Bt=xt[Ct];ae(Bt,Z,z),$.add(Bt)}else ae(xt,Z,z),$.add(xt)}),y.pop(),p=null,$},this.compileAsync=function(w,B,Z=null){const $=this.compile(w,B,Z);return new Promise(z=>{function xt(){if($.forEach(function(Ct){St.get(Ct).currentProgram.isReady()&&$.delete(Ct)}),$.size===0){z(w);return}setTimeout(xt,10)}ht.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let De=null;function fn(w){De&&De(w)}function hs(){Cn.stop()}function Ri(){Cn.start()}const Cn=new sf;Cn.setAnimationLoop(fn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(w){De=w,V.setAnimationLoop(w),w===null?Cn.stop():Cn.start()},V.addEventListener("sessionstart",hs),V.addEventListener("sessionend",Ri),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(B),B=V.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,P),p=ee.get(w,y.length),p.init(B),y.push(p),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Pt),mt=this.localClippingEnabled,lt=ut.init(this.clippingPlanes,mt),g=Rt.get(w,v.length),g.init(),v.push(g),V.enabled===!0&&V.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Ys(xt,B,-1/0,_.sortObjects)}Ys(w,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(it,Mt),q=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,q&&Wt.addToRenderList(g,w),this.info.render.frame++,lt===!0&&ut.beginShadows();const Z=p.state.shadowsArray;At.render(Z,w,B),lt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){const xt=B.cameras;if(z.length>0)for(let Ct=0,Bt=xt.length;Ct<Bt;Ct++){const zt=xt[Ct];mh($,z,w,zt)}q&&Wt.render(w);for(let Ct=0,Bt=xt.length;Ct<Bt;Ct++){const zt=xt[Ct];Zr(g,w,zt,zt.viewport)}}else z.length>0&&mh($,z,w,B),q&&Wt.render(w),Zr(g,w,B);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,B),vt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],lt===!0&&ut.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ys(w,B,Z,$){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){$&&N.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const Ct=tt.update(w),Bt=w.material;Bt.visible&&g.push(w,Ct,Bt,Z,N.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Ct=tt.update(w),Bt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),N.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),N.copy(Ct.boundingSphere.center)),N.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Bt)){const zt=Ct.groups;for(let jt=0,se=zt.length;jt<se;jt++){const kt=zt[jt],de=Bt[kt.materialIndex];de&&de.visible&&g.push(w,Ct,de,Z,N.z,kt)}}else Bt.visible&&g.push(w,Ct,Bt,Z,N.z,null)}}const xt=w.children;for(let Ct=0,Bt=xt.length;Ct<Bt;Ct++)Ys(xt[Ct],B,Z,$)}function Zr(w,B,Z,$){const z=w.opaque,xt=w.transmissive,Ct=w.transparent;p.setupLightsView(Z),lt===!0&&ut.setGlobalState(_.clippingPlanes,Z),$&&ct.viewport(L.copy($)),z.length>0&&$r(z,B,Z),xt.length>0&&$r(xt,B,Z),Ct.length>0&&$r(Ct,B,Z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function mh(w,B,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Nn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Gs:Xn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const xt=p.state.transmissionRenderTarget[$.id],Ct=$.viewport||L;xt.setSize(Ct.z,Ct.w);const Bt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(O),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),q&&Wt.render(Z);const zt=_.toneMapping;_.toneMapping=ai;const jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),lt===!0&&ut.setGlobalState(_.clippingPlanes,$),$r(w,Z,$),C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let kt=0,de=B.length;kt<de;kt++){const _e=B[kt],ye=_e.object,an=_e.geometry,fe=_e.material,Gt=_e.group;if(fe.side===Ve&&ye.layers.test($.layers)){const Zn=fe.side;fe.side=Ye,fe.needsUpdate=!0,gh(ye,Z,$,an,fe,Gt),fe.side=Zn,fe.needsUpdate=!0,se=!0}}se===!0&&(C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt))}_.setRenderTarget(Bt),_.setClearColor(O,U),jt!==void 0&&($.viewport=jt),_.toneMapping=zt}function $r(w,B,Z){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,xt=w.length;z<xt;z++){const Ct=w[z],Bt=Ct.object,zt=Ct.geometry,jt=$===null?Ct.material:$,se=Ct.group;Bt.layers.test(Z.layers)&&gh(Bt,B,Z,zt,jt,se)}}function gh(w,B,Z,$,z,xt){w.onBeforeRender(_,B,Z,$,z,xt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,B,Z,$,w,xt),z.transparent===!0&&z.side===Ve&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,_.renderBufferDirect(Z,B,$,z,w,xt),z.side=li,z.needsUpdate=!0,_.renderBufferDirect(Z,B,$,z,w,xt),z.side=Ve):_.renderBufferDirect(Z,B,$,z,w,xt),w.onAfterRender(_,B,Z,$,z,xt)}function Jr(w,B,Z){B.isScene!==!0&&(B=_t);const $=St.get(w),z=p.state.lights,xt=p.state.shadowsArray,Ct=z.state.version,Bt=Dt.getParameters(w,z.state,xt,B,Z),zt=Dt.getProgramCacheKey(Bt);let jt=$.programs;$.environment=w.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,jt===void 0&&(w.addEventListener("dispose",qt),jt=new Map,$.programs=jt);let se=jt.get(zt);if(se!==void 0){if($.currentProgram===se&&$.lightsStateVersion===Ct)return _h(w,Bt),se}else Bt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Bt,_),se=Dt.acquireProgram(Bt,zt),jt.set(zt,se),$.uniforms=Bt.uniforms;const kt=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=ut.uniform),_h(w,Bt),$.needsLights=fp(w),$.lightsStateVersion=Ct,$.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=se,$.uniformsList=null,se}function xh(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Xa.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function _h(w,B){const Z=St.get(w);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function up(w,B,Z,$,z){B.isScene!==!0&&(B=_t),C.resetTextureUnits();const xt=B.fog,Ct=$.isMeshStandardMaterial?B.environment:null,Bt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:os,zt=($.isMeshStandardMaterial?H:M).get($.envMap||Ct),jt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,_e=!!Z.morphAttributes.color;let ye=ai;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=_.toneMapping);const an=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=an!==void 0?an.length:0,Gt=St.get($),Zn=p.state.lights;if(lt===!0&&(mt===!0||w!==S)){const yn=w===S&&$.id===b;ut.setState($,w,yn)}let pe=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Zn.state.version||Gt.outputColorSpace!==Bt||z.isBatchedMesh&&Gt.batching===!1||!z.isBatchedMesh&&Gt.batching===!0||z.isBatchedMesh&&Gt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Gt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Gt.instancing===!1||!z.isInstancedMesh&&Gt.instancing===!0||z.isSkinnedMesh&&Gt.skinning===!1||!z.isSkinnedMesh&&Gt.skinning===!0||z.isInstancedMesh&&Gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Gt.instancingMorph===!1&&z.morphTexture!==null||Gt.envMap!==zt||$.fog===!0&&Gt.fog!==xt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ut.numPlanes||Gt.numIntersection!==ut.numIntersection)||Gt.vertexAlphas!==jt||Gt.vertexTangents!==se||Gt.morphTargets!==kt||Gt.morphNormals!==de||Gt.morphColors!==_e||Gt.toneMapping!==ye||Gt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Gt.__version=$.version);let Rn=Gt.currentProgram;pe===!0&&(Rn=Jr($,B,z));let us=!1,pn=!1,Zs=!1;const Me=Rn.getUniforms(),Bn=Gt.uniforms;if(ct.useProgram(Rn.program)&&(us=!0,pn=!0,Zs=!0),$.id!==b&&(b=$.id,pn=!0),us||S!==w){ct.buffers.depth.getReversed()?(dt.copy(w.projectionMatrix),mm(dt),gm(dt),Me.setValue(I,"projectionMatrix",dt)):Me.setValue(I,"projectionMatrix",w.projectionMatrix),Me.setValue(I,"viewMatrix",w.matrixWorldInverse);const fi=Me.map.cameraPosition;fi!==void 0&&fi.setValue(I,Ht.setFromMatrixPosition(w.matrixWorld)),pt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Me.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,pn=!0,Zs=!0)}if(z.isSkinnedMesh){Me.setOptional(I,z,"bindMatrix"),Me.setOptional(I,z,"bindMatrixInverse");const yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Me.setValue(I,"boneTexture",yn.boneTexture,C))}z.isBatchedMesh&&(Me.setOptional(I,z,"batchingTexture"),Me.setValue(I,"batchingTexture",z._matricesTexture,C),Me.setOptional(I,z,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",z._indirectTexture,C),Me.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",z._colorsTexture,C));const $s=Z.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Yt.update(z,Z,Rn),(pn||Gt.receiveShadow!==z.receiveShadow)&&(Gt.receiveShadow=z.receiveShadow,Me.setValue(I,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Bn.envMap.value=zt,Bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),pn&&(Me.setValue(I,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&dp(Bn,Zs),xt&&$.fog===!0&&bt.refreshFogUniforms(Bn,xt),bt.refreshMaterialUniforms(Bn,$,X,Y,p.state.transmissionRenderTarget[w.id]),Xa.upload(I,xh(Gt),Bn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xa.upload(I,xh(Gt),Bn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Me.setValue(I,"center",z.center),Me.setValue(I,"modelViewMatrix",z.modelViewMatrix),Me.setValue(I,"normalMatrix",z.normalMatrix),Me.setValue(I,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let fi=0,pi=yn.length;fi<pi;fi++){const vh=yn[fi];D.update(vh,Rn),D.bind(vh,Rn)}}return Rn}function dp(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function fp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,Z){St.get(w.texture).__webglTexture=B,St.get(w.depthTexture).__webglTexture=Z;const $=St.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const Z=St.get(w);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Z=0){P=w,T=B,E=Z;let $=!0,z=null,xt=!1,Ct=!1;if(w){const zt=St.get(w);if(zt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(zt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(zt.__hasExternalTextures)C.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const kt=w.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&St.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ct=!0);const se=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(se[B])?z=se[B][Z]:z=se[B],xt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=St.get(w).__webglMultisampledFramebuffer:Array.isArray(se)?z=se[Z]:z=se,L.copy(w.viewport),W.copy(w.scissor),G=w.scissorTest}else L.copy(Et).multiplyScalar(X).floor(),W.copy(Vt).multiplyScalar(X).floor(),G=Kt;if(ct.bindFramebuffer(I.FRAMEBUFFER,z)&&$&&ct.drawBuffers(w,z),ct.viewport(L),ct.scissor(W),ct.setScissorTest(G),xt){const zt=St.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,zt.__webglTexture,Z)}else if(Ct){const zt=St.get(w.texture),jt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,Z||0,jt)}b=-1},this.readRenderTargetPixels=function(w,B,Z,$,z,xt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt){ct.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const zt=w.texture,jt=zt.format,se=zt.type;if(!pt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-$&&Z>=0&&Z<=w.height-z&&I.readPixels(B,Z,$,z,at.convert(jt),at.convert(se),xt)}finally{const zt=P!==null?St.get(P).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,B,Z,$,z,xt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt){const zt=w.texture,jt=zt.format,se=zt.type;if(!pt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-$&&Z>=0&&Z<=w.height-z){ct.bindFramebuffer(I.FRAMEBUFFER,Bt);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(B,Z,$,z,at.convert(jt),at.convert(se),0);const de=P!==null?St.get(P).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,de);const _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pm(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(kt),I.deleteSync(_e),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,Z=0){w.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-Z),z=Math.floor(w.image.width*$),xt=Math.floor(w.image.height*$),Ct=B!==null?B.x:0,Bt=B!==null?B.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ct,Bt,z,xt),ct.unbindTexture()},this.copyTextureToTexture=function(w,B,Z=null,$=null,z=0){w.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,Z=null);let xt,Ct,Bt,zt,jt,se,kt,de,_e;const ye=w.isCompressedTexture?w.mipmaps[z]:w.image;Z!==null?(xt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,jt=Z.min.y,se=Z.isBox3?Z.min.z:0):(xt=ye.width,Ct=ye.height,Bt=ye.depth||1,zt=0,jt=0,se=0),$!==null?(kt=$.x,de=$.y,_e=$.z):(kt=0,de=0,_e=0);const an=at.convert(B.format),fe=at.convert(B.type);let Gt;B.isData3DTexture?(C.setTexture3D(B,0),Gt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),Gt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),Gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Zn=I.getParameter(I.UNPACK_ROW_LENGTH),pe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=I.getParameter(I.UNPACK_SKIP_PIXELS),us=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,se);const Zs=w.isDataArrayTexture||w.isData3DTexture,Me=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=St.get(w),$s=St.get(B),yn=St.get(Bn.__renderTarget),fi=St.get($s.__renderTarget);ct.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pi=0;pi<Bt;pi++)Zs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(w).__webglTexture,z,se+pi),w.isDepthTexture?(Me&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(B).__webglTexture,z,_e+pi),I.blitFramebuffer(zt,jt,xt,Ct,kt,de,xt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST)):Me?I.copyTexSubImage3D(Gt,z,kt,de,_e+pi,zt,jt,xt,Ct):I.copyTexSubImage2D(Gt,z,kt,de,_e+pi,zt,jt,xt,Ct);ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Me?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Gt,z,kt,de,_e,xt,Ct,Bt,an,fe,ye.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Gt,z,kt,de,_e,xt,Ct,Bt,an,ye.data):I.texSubImage3D(Gt,z,kt,de,_e,xt,Ct,Bt,an,fe,ye):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,kt,de,xt,Ct,an,fe,ye.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,kt,de,ye.width,ye.height,an,ye.data):I.texSubImage2D(I.TEXTURE_2D,z,kt,de,xt,Ct,an,fe,ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,us),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),z===0&&B.generateMipmaps&&I.generateMipmap(Gt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,B,Z=null,$=null,z=0){return w.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,Z,$,z)},this.initRenderTarget=function(w){St.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,ct.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Hr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jo extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tr,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new A;class is{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new is(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bn extends $e{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const tr=new A,Es=new A,As=new A,Cs=new rt,er=new rt,df=new Zt,xa=new A,nr=new A,_a=new A,hu=new rt,Wl=new rt,uu=new rt;class Un extends ue{constructor(t=new bn){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tl(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new is(n,3,0,!1)),Ts.setAttribute("uv",new is(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),df.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;va(xa.set(-.5,-.5,0),As,a,Es,i,r),va(nr.set(.5,-.5,0),As,a,Es,i,r),va(_a.set(.5,.5,0),As,a,Es,i,r),hu.set(0,0),Wl.set(1,0),uu.set(1,1);let o=t.ray.intersectTriangle(xa,nr,_a,!1,tr);if(o===null&&(va(nr.set(-.5,.5,0),As,a,Es,i,r),Wl.set(0,1),o=t.ray.intersectTriangle(xa,_a,nr,!1,tr),o===null))return;const l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:cn.getInterpolation(tr,xa,nr,_a,hu,Wl,uu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function va(s,t,e,n,i,r){Cs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(er.x=r*Cs.x-i*Cs.y,er.y=i*Cs.x+r*Cs.y):er.copy(Cs),s.copy(t),s.x+=er.x,s.y+=er.y,s.applyMatrix4(df)}const ya=new A,du=new A;class ff extends ue{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ya.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ya);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ya.setFromMatrixPosition(t.matrixWorld),du.setFromMatrixPosition(this.matrixWorld);const n=ya.distanceTo(du)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const fu=new A,pu=new he,mu=new he,Rv=new A,gu=new Zt,Ma=new A,Xl=new Ze,xu=new Zt,ql=new Ws;class pf extends K{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hc,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ze),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xl.copy(this.boundingSphere),Xl.applyMatrix4(i),t.ray.intersectsSphere(Xl)!==!1&&(xu.copy(i).invert(),ql.copy(t.ray).applyMatrix4(xu),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ql)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;pu.fromBufferAttribute(i.attributes.skinIndex,t),mu.fromBufferAttribute(i.attributes.skinWeight,t),fu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=mu.getComponent(r);if(a!==0){const o=pu.getComponent(r);gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Rv.copy(fu).applyMatrix4(gu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Xc extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gn extends Ae{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=new Zt,Iv=new Zt;class el{constructor(t=[],e=[]){this.uuid=_n(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Iv;_u.multiplyMatrices(o,e[r]),_u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new el(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Gn(e,t,t,en,hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Xc),this.bones.push(a),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Hs extends le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new Zt,vu=new Zt,Sa=[],yu=new rn,Pv=new Zt,ir=new K,sr=new Ze;class mf extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),yu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ze),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),sr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),vu.multiplyMatrices(n,Rs),ir.matrixWorld=vu,ir.raycast(t,Sa);for(let a=0,o=Sa.length;a<o;a++){const l=Sa[a];l.instanceId=r,l.object=this,e.push(l)}Sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gn(new Float32Array(i*this.count),i,this.count,Go,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Yl(s,t){return s-t}function Lv(s,t){return s.z-t.z}function Dv(s,t){return t.z-s.z}class Uv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const on=new Zt,Nv=new Tt(1,1,1),Zl=new kr,ba=new rn,Fi=new Ze,rr=new A,Mu=new A,Fv=new A,$l=new Uv,qe=new K,wa=[];function Ov(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Oi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class gf extends K{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new te,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Gn(e,t,t,en,hn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Gn(e,t,t,Or,hi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Gn(e,t,t,en,hn);n.colorSpace=oe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new le(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new le(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingBoxAt(r,ba).applyMatrix4(on),t.union(ba)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ze);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingSphereAt(r,Fi).applyMatrix4(on),t.union(Fi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Yl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;on.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Nv.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Yl),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const u=e.getAttribute(h),d=n.getAttribute(h);Ov(u,d,l);const f=u.itemSize;for(let m=u.count,x=c;m<x;m++){const g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,m=f.array,x=t-u;for(let g=h;g<h+d;g++)m[g]=m[g]+x;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const m=d[f],{array:x,itemSize:g}=m;x.copyWithin(t*g,h*g,(h+u)*g),m.addUpdateRange(t*g,u*g)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new rn,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(rr.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Ze;this.getBoundingBoxAt(t,ba),ba.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),rr.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(rr))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._instanceInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,i=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=i.length||i[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Yl);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Oi(this._multiDrawCounts,i),Oi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Oi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Oi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Oi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new te,this._initializeGeometry(r));const a=this.geometry;r.index&&Oi(r.index.array,a.index.array);for(const o in r.attributes)Oi(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;qe.material=this.material,qe.geometry.index=a.index,qe.geometry.attributes=a.attributes,qe.geometry.boundingBox===null&&(qe.geometry.boundingBox=new rn),qe.geometry.boundingSphere===null&&(qe.geometry.boundingSphere=new Ze);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];qe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,qe.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,qe.geometry.boundingBox),this.getBoundingSphereAt(c,qe.geometry.boundingSphere),qe.raycast(t,wa);for(let u=0,d=wa.length;u<d;u++){const f=wa[u];f.object=this,f.batchId=o,e.push(f)}wa.length=0}qe.material=null,qe.geometry.index=null,qe.geometry.attributes={},qe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(on.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Zl.setFromProjectionMatrix(on,t.coordinateSystem));let x=0;if(this.sortObjects){on.copy(this.matrixWorld).invert(),rr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(on),Mu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(on);for(let v=0,y=l.length;v<y;v++)if(l[v].visible&&l[v].active){const _=l[v].geometryIndex;this.getMatrixAt(v,on),this.getBoundingSphereAt(_,Fi).applyMatrix4(on);let R=!1;if(d&&(R=!Zl.intersectsSphere(Fi)),!R){const T=u[_],E=Fv.subVectors(Fi.center,rr).dot(Mu);$l.push(T.start,T.count,E,v)}}const g=$l.list,p=this.customSort;p===null?g.sort(r.transparent?Dv:Lv):p.call(this,g,n);for(let v=0,y=g.length;v<y;v++){const _=g[v];c[x]=_.start*o,h[x]=_.count,m[x]=_.index,x++}$l.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const v=l[g].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(g,on),this.getBoundingSphereAt(v,Fi).applyMatrix4(on),y=!Zl.intersectsSphere(Fi)),!y){const _=u[v];c[x]=_.start*o,h[x]=_.count,m[x]=g,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class Je extends $e{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new A,Do=new A,Su=new Zt,ar=new Ws,Ta=new Ze,Jl=new A,bu=new A;class ui extends ue{constructor(t=new te,e=new Je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Lo.fromBufferAttribute(e,i-1),Do.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Su.copy(i).invert(),ar.copy(t.ray).applyMatrix4(Su);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),v=h.getX(x+1),y=Ea(this,t,ar,l,p,v);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Ea(this,t,ar,l,x,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=Ea(this,t,ar,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Ea(this,t,ar,l,m-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ea(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Lo.fromBufferAttribute(a,i),Do.fromBufferAttribute(a,r),e.distanceSqToSegment(Lo,Do,Jl,bu)>n)return;Jl.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Jl);if(!(l<t.near||l>t.far))return{distance:l,point:bu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const wu=new A,Tu=new A;class Yn extends ui{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wu.fromBufferAttribute(e,i),Tu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wu.distanceTo(Tu);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends ui{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nl extends $e{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eu=new Zt,mc=new Ws,Aa=new Ze,Ca=new A;class il extends ue{constructor(t=new te,e=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Eu.copy(i).invert(),mc.copy(t.ray).applyMatrix4(Eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Ca.fromBufferAttribute(u,g),Au(Ca,g,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Ca.fromBufferAttribute(u,m),Au(Ca,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Au(s,t,e,n,i,r,a){const o=mc.distanceSqToPoint(s);if(o<e){const l=new A;mc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bv extends Ae{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Fe,this.magFilter=r!==void 0?r:Fe,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class zv extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ge,this.minFilter=Ge,this.generateMipmaps=!1,this.needsUpdate=!0}}class sl extends Ae{constructor(t,e,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class kv extends sl{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Sn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hv extends sl{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ci),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class ss extends Ae{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new rt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],a=[],o=new A,l=new Zt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ee(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rl extends Fn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _f extends rl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ra=new A,Kl=new qc,Ql=new qc,jl=new qc;class vf extends Fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ra.subVectors(i[0],i[1]).add(i[0]),c=Ra);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ra.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Kl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Ql.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),jl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ql.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),jl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Kl.calc(l),Ql.calc(l),jl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cu(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Vv(s,t){const e=1-s;return e*e*t}function Gv(s,t){return 2*(1-s)*s*t}function Wv(s,t){return s*s*t}function _r(s,t,e,n){return Vv(s,t)+Gv(s,e)+Wv(s,n)}function Xv(s,t){const e=1-s;return e*e*e*t}function qv(s,t){const e=1-s;return 3*e*e*s*t}function Yv(s,t){return 3*(1-s)*s*s*t}function Zv(s,t){return s*s*s*t}function vr(s,t,e,n,i){return Xv(s,t)+qv(s,e)+Yv(s,n)+Zv(s,i)}class Yc extends Fn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,i.x,r.x,a.x,o.x),vr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yf extends Fn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,i.x,r.x,a.x,o.x),vr(t,i.y,r.y,a.y,o.y),vr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zc extends Fn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends Fn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $c extends Fn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,i.x,r.x,a.x),_r(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jc extends Fn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,i.x,r.x,a.x),_r(t,i.y,r.y,a.y),_r(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kc extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Cu(o,l.x,c.x,h.x,u.x),Cu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:_f,CatmullRomCurve3:vf,CubicBezierCurve:Yc,CubicBezierCurve3:yf,EllipseCurve:rl,LineCurve:Zc,LineCurve3:Mf,QuadraticBezierCurve:$c,QuadraticBezierCurve3:Jc,SplineCurve:Kc});class Sf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uo[i.type]().fromJSON(i))}return this}}class Cr extends Sf{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new $c(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Yc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new rl(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vr extends te{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ee(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,d=new rt,f=new A,m=new A,x=new A;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*i,_=Math.sin(y),R=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=v/e,d.y=T/(t.length-1),o.push(d.x,d.y);const E=l[3*T+0]*_,P=l[3*T+1],b=l[3*T+0]*R;c.push(E,P,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const _=y+v*t.length,R=_,T=_+t.length,E=_+t.length+1,P=_+1;r.push(R,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2)),this.setAttribute("normal",new Ft(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.points,t.segments,t.phiStart,t.phiLength)}}class al extends Vr{constructor(t=1,e=1,n=4,i=8){const r=new Cr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new al(t.radius,t.length,t.capSegments,t.radialSegments)}}class Gr extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new A,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(o,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends te{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function v(){const _=new A,R=new A;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const b=[],S=P/r,L=S*(e-t)+t;for(let W=0;W<=i;W++){const G=W/i,O=G*l+o,U=Math.sin(O),F=Math.cos(O);R.x=L*U,R.y=-S*n+g,R.z=L*F,u.push(R.x,R.y,R.z),_.set(U,E,F).normalize(),d.push(_.x,_.y,_.z),f.push(G,1-S),b.push(m++)}x.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const S=x[b][P],L=x[b+1][P],W=x[b+1][P+1],G=x[b][P+1];(t>0||b!==0)&&(h.push(S,L,G),T+=3),(e>0||b!==r-1)&&(h.push(L,W,G),T+=3)}c.addGroup(p,T,0),p+=T}function y(_){const R=m,T=new rt,E=new A;let P=0;const b=_===!0?t:e,S=_===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const L=m;for(let W=0;W<=i;W++){const O=W/i*l+o,U=Math.cos(O),F=Math.sin(O);E.x=b*F,E.y=g*S,E.z=b*U,u.push(E.x,E.y,E.z),d.push(0,S,0),T.x=U*.5+.5,T.y=F*.5*S+.5,f.push(T.x,T.y),m++}for(let W=0;W<i;W++){const G=R+W,O=L+W;_===!0?h.push(O,O+1,G):h.push(O+1,O,G),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends je{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ol(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ai extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new A,_=new A,R=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],_),f(e[T+2],R),l(y,_,R,v)}function l(v,y,_,R){const T=R+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const b=v.clone().lerp(_,P/T),S=y.clone().lerp(_,P/T),L=T-P;for(let W=0;W<=L;W++)W===0&&P===T?E[P][W]=b:E[P][W]=b.clone().lerp(S,W/L)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){const S=Math.floor(b/2);b%2===0?(d(E[P][S+1]),d(E[P+1][S]),d(E[P][S])):(d(E[P][S+1]),d(E[P+1][S+1]),d(E[P+1][S]))}}function c(v){const y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const v=new A;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=g(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;a.push(_,1-R)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){const y=a[v+0],_=a[v+2],R=a[v+4],T=Math.max(y,_,R),E=Math.min(y,_,R);T>.9&&E<.1&&(y<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const v=new A,y=new A,_=new A,R=new A,T=new rt,E=new rt,P=new rt;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),R.copy(v).add(y).add(_).divideScalar(3);const L=g(R);x(T,S+0,v,L),x(E,S+2,y,L),x(P,S+4,_,L)}}function x(v,y,_,R){R<0&&v.x===1&&(a[y]=v.x-1),_.x===0&&_.z===0&&(a[y]=R/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.vertices,t.indices,t.radius,t.details)}}class ll extends Ai{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ll(t.radius,t.detail)}}const Ia=new A,Pa=new A,tc=new A,La=new cn;class bf extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Qi*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:g,c:p}=La;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),La.getNormal(tc),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const y=(v+1)%3,_=u[v],R=u[y],T=La[h[v]],E=La[h[y]],P=`${_}_${R}`,b=`${R}_${_}`;b in d&&d[b]?(tc.dot(d[b].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[b]=null):P in d||(d[P]={index0:c[v],index1:c[y],normal:tc.clone()})}}for(const m in d)if(d[m]){const{index0:x,index1:g}=d[m];Ia.fromBufferAttribute(o,x),Pa.fromBufferAttribute(o,g),f.push(Ia.x,Ia.y,Ia.z),f.push(Pa.x,Pa.y,Pa.z)}this.setAttribute("position",new Ft(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ji extends Cr{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cr().fromJSON(i))}return this}}const $v={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=wf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=ty(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Rr(r,a,e,o,l,f,0),a}};function wf(s,t,e,n,i){let r,a;if(i===uy(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Ru(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ru(r,s[r],s[r+1],a);return a&&cl(a,a.next)&&(Pr(a),a=a.next),a}function rs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(cl(e,e.next)||we(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&ry(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Kv(s,n,i,r):Jv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Pr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Qv(rs(s),t,e),Rr(s,t,e,n,i,r,2)):a===2&&jv(s,t,e,n,i,r):Rr(rs(s),t,e,n,i,r,1);break}}}function Jv(s){const t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ns(i,o,r,l,a,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(we(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=gc(f,m,t,e,n),v=gc(x,g,t,e,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ns(o,h,l,u,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ns(o,h,l,u,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qv(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!cl(i,r)&&Tf(i,n,n.next,r)&&Ir(i,r)&&Ir(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Pr(n),Pr(n.next),n=s=r),n=n.next}while(n!==s);return rs(n)}function jv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ly(a,o)){let l=Ef(a,o);a=rs(a,a.next),l=rs(l,l.next),Rr(a,t,e,n,i,r,0),Rr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ty(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=wf(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(oy(c));for(i.sort(ey),r=0;r<i.length;r++)e=ny(i[r],e);return e}function ey(s,t){return s.x-t.x}function ny(s,t){const e=iy(s,t);if(!e)return t;const n=Ef(e,s);return rs(n,n.next),rs(e,e.next)}function iy(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ns(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ir(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&sy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function sy(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function ry(s,t,e,n){let i=s;do i.z===0&&(i.z=gc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ay(i)}function ay(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function gc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ns(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ly(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cy(s,t)&&(Ir(s,t)&&Ir(t,s)&&hy(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||cl(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function cl(s,t){return s.x===t.x&&s.y===t.y}function Tf(s,t,e,n){const i=Ua(we(s,t,e)),r=Ua(we(s,t,n)),a=Ua(we(e,n,s)),o=Ua(we(e,n,t));return!!(i!==r&&a!==o||i===0&&Da(s,e,t)||r===0&&Da(s,n,t)||a===0&&Da(e,s,n)||o===0&&Da(e,t,n))}function Da(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ua(s){return s>0?1:s<0?-1:0}function cy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Tf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ir(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function hy(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ef(s,t){const e=new xc(s.i,s.x,s.y),n=new xc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ru(s,t,e,n){const i=new xc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Wn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Wn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Iu(t),Pu(n,t);let a=t.length;e.forEach(Iu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Pu(n,e[l]);const o=$v.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Iu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Pu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class hl extends te{constructor(t=new ji([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ft(i,3)),this.setAttribute("uv",new Ft(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:dy;let y,_=!1,R,T,E,P;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new A,E=new A,P=new A),d||(g=0,f=0,m=0,x=0);const b=o.extractPoints(c);let S=b.shape;const L=b.holes;if(!Wn.isClockWise(S)){S=S.reverse();for(let q=0,j=L.length;q<j;q++){const I=L[q];Wn.isClockWise(I)&&(L[q]=I.reverse())}}const G=Wn.triangulateShape(S,L),O=S;for(let q=0,j=L.length;q<j;q++){const I=L[q];S=S.concat(I)}function U(q,j,I){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(j,I)}const F=S.length,Y=G.length;function X(q,j,I){let Lt,ht,pt;const ct=q.x-j.x,Ot=q.y-j.y,St=I.x-q.x,C=I.y-q.y,M=ct*ct+Ot*Ot,H=ct*C-Ot*St;if(Math.abs(H)>Number.EPSILON){const k=Math.sqrt(M),st=Math.sqrt(St*St+C*C),tt=j.x-Ot/k,Dt=j.y+ct/k,bt=I.x-C/st,Rt=I.y+St/st,ee=((bt-tt)*C-(Rt-Dt)*St)/(ct*C-Ot*St);Lt=tt+ct*ee-q.x,ht=Dt+Ot*ee-q.y;const ut=Lt*Lt+ht*ht;if(ut<=2)return new rt(Lt,ht);pt=Math.sqrt(ut/2)}else{let k=!1;ct>Number.EPSILON?St>Number.EPSILON&&(k=!0):ct<-Number.EPSILON?St<-Number.EPSILON&&(k=!0):Math.sign(Ot)===Math.sign(C)&&(k=!0),k?(Lt=-Ot,ht=ct,pt=Math.sqrt(M)):(Lt=ct,ht=Ot,pt=Math.sqrt(M/2))}return new rt(Lt/pt,ht/pt)}const it=[];for(let q=0,j=O.length,I=j-1,Lt=q+1;q<j;q++,I++,Lt++)I===j&&(I=0),Lt===j&&(Lt=0),it[q]=X(O[q],O[I],O[Lt]);const Mt=[];let Et,Vt=it.concat();for(let q=0,j=L.length;q<j;q++){const I=L[q];Et=[];for(let Lt=0,ht=I.length,pt=ht-1,ct=Lt+1;Lt<ht;Lt++,pt++,ct++)pt===ht&&(pt=0),ct===ht&&(ct=0),Et[Lt]=X(I[Lt],I[pt],I[ct]);Mt.push(Et),Vt=Vt.concat(Et)}for(let q=0;q<g;q++){const j=q/g,I=f*Math.cos(j*Math.PI/2),Lt=m*Math.sin(j*Math.PI/2)+x;for(let ht=0,pt=O.length;ht<pt;ht++){const ct=U(O[ht],it[ht],Lt);dt(ct.x,ct.y,-I)}for(let ht=0,pt=L.length;ht<pt;ht++){const ct=L[ht];Et=Mt[ht];for(let Ot=0,St=ct.length;Ot<St;Ot++){const C=U(ct[Ot],Et[Ot],Lt);dt(C.x,C.y,-I)}}}const Kt=m+x;for(let q=0;q<F;q++){const j=d?U(S[q],Vt[q],Kt):S[q];_?(E.copy(R.normals[0]).multiplyScalar(j.x),T.copy(R.binormals[0]).multiplyScalar(j.y),P.copy(y[0]).add(E).add(T),dt(P.x,P.y,P.z)):dt(j.x,j.y,0)}for(let q=1;q<=h;q++)for(let j=0;j<F;j++){const I=d?U(S[j],Vt[j],Kt):S[j];_?(E.copy(R.normals[q]).multiplyScalar(I.x),T.copy(R.binormals[q]).multiplyScalar(I.y),P.copy(y[q]).add(E).add(T),dt(P.x,P.y,P.z)):dt(I.x,I.y,u/h*q)}for(let q=g-1;q>=0;q--){const j=q/g,I=f*Math.cos(j*Math.PI/2),Lt=m*Math.sin(j*Math.PI/2)+x;for(let ht=0,pt=O.length;ht<pt;ht++){const ct=U(O[ht],it[ht],Lt);dt(ct.x,ct.y,u+I)}for(let ht=0,pt=L.length;ht<pt;ht++){const ct=L[ht];Et=Mt[ht];for(let Ot=0,St=ct.length;Ot<St;Ot++){const C=U(ct[Ot],Et[Ot],Lt);_?dt(C.x,C.y+y[h-1].y,y[h-1].x+I):dt(C.x,C.y,u+I)}}}Q(),lt();function Q(){const q=i.length/3;if(d){let j=0,I=F*j;for(let Lt=0;Lt<Y;Lt++){const ht=G[Lt];Pt(ht[2]+I,ht[1]+I,ht[0]+I)}j=h+g*2,I=F*j;for(let Lt=0;Lt<Y;Lt++){const ht=G[Lt];Pt(ht[0]+I,ht[1]+I,ht[2]+I)}}else{for(let j=0;j<Y;j++){const I=G[j];Pt(I[2],I[1],I[0])}for(let j=0;j<Y;j++){const I=G[j];Pt(I[0]+F*h,I[1]+F*h,I[2]+F*h)}}n.addGroup(q,i.length/3-q,0)}function lt(){const q=i.length/3;let j=0;mt(O,j),j+=O.length;for(let I=0,Lt=L.length;I<Lt;I++){const ht=L[I];mt(ht,j),j+=ht.length}n.addGroup(q,i.length/3-q,1)}function mt(q,j){let I=q.length;for(;--I>=0;){const Lt=I;let ht=I-1;ht<0&&(ht=q.length-1);for(let pt=0,ct=h+g*2;pt<ct;pt++){const Ot=F*pt,St=F*(pt+1),C=j+Lt+Ot,M=j+ht+Ot,H=j+ht+St,k=j+Lt+St;Ht(C,M,H,k)}}}function dt(q,j,I){l.push(q),l.push(j),l.push(I)}function Pt(q,j,I){N(q),N(j),N(I);const Lt=i.length/3,ht=v.generateTopUV(n,i,Lt-3,Lt-2,Lt-1);_t(ht[0]),_t(ht[1]),_t(ht[2])}function Ht(q,j,I,Lt){N(q),N(j),N(Lt),N(j),N(I),N(Lt);const ht=i.length/3,pt=v.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);_t(pt[0]),_t(pt[1]),_t(pt[3]),_t(pt[1]),_t(pt[2]),_t(pt[3])}function N(q){i.push(l[q*3+0]),i.push(l[q*3+1]),i.push(l[q*3+2])}function _t(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Uo[i.type]().fromJSON(i)),new hl(n,t.options)}}const dy={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-u),new rt(d,1-m),new rt(x,1-p)]:[new rt(o,1-l),new rt(h,1-u),new rt(f,1-m),new rt(g,1-p)]}};function fy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wr extends Ai{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wr(t.radius,t.detail)}}class Xr extends Ai{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class qs extends te{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new A,m=new rt;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,_=v+n+1,R=v+n+2,T=v+1;o.push(y,_,T),o.push(_,R,T)}}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ul extends te{constructor(t=new ji([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ft(i,3)),this.setAttribute("normal",new Ft(r,3)),this.setAttribute("uv",new Ft(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Wn.isClockWise(v)===!0&&(m[g]=v.reverse())}const x=Wn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){const v=x[g],y=v[0]+u,_=v[1]+u,R=v[2]+u;n.push(y,_,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return py(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new ul(n,t.curveSegments)}}function py(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class wn extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],_=h[p][v],R=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(y,_,T),(p!==n-1||l<Math.PI)&&f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dl extends Ai{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dl(t.radius,t.detail)}}class as extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(x,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fl extends te{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,m=new A,x=new A,g=new A,p=new A;for(let y=0;y<=n;++y){const _=y/n*r*Math.PI*2;v(_,r,a,t,f),v(_+.01,r,a,t,m),g.subVectors(m,f),p.addVectors(m,f),x.crossVectors(g,p),p.crossVectors(x,g),x.normalize(),p.normalize();for(let R=0;R<=i;++R){const T=R/i*Math.PI*2,E=-e*Math.cos(T),P=e*Math.sin(T);u.x=f.x+(E*p.x+P*x.x),u.y=f.y+(E*p.y+P*x.y),u.z=f.z+(E*p.z+P*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(R/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){const R=(i+1)*(y-1)+(_-1),T=(i+1)*y+(_-1),E=(i+1)*y+_,P=(i+1)*(y-1)+_;o.push(R,T,P),o.push(T,E,P)}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2));function v(y,_,R,T,E){const P=Math.cos(y),b=Math.sin(y),S=R/_*y,L=Math.cos(S);E.x=T*(2+L)*.5*P,E.y=T*(2+L)*b*.5,E.z=T*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class pl extends te{constructor(t=new Jc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new rt;let h=new A;const u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);const _=a.normals[y],R=a.binormals[y];for(let T=0;T<=i;T++){const E=T/i*Math.PI*2,P=Math.sin(E),b=-Math.cos(E);l.x=b*_.x+P*R.x,l.y=b*_.y+P*R.y,l.z=b*_.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){const R=(i+1)*(y-1)+(_-1),T=(i+1)*y+(_-1),E=(i+1)*y+_,P=(i+1)*(y-1)+_;m.push(R,T,P),m.push(T,E,P)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)c.x=y/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pl(new Uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Af extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new A,r=new A;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let m=d,x=d+f;m<x;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),v=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),Lu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Lu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ft(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Lu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Du=Object.freeze({__proto__:null,BoxGeometry:It,CapsuleGeometry:al,CircleGeometry:Gr,ConeGeometry:ol,CylinderGeometry:je,DodecahedronGeometry:ll,EdgesGeometry:bf,ExtrudeGeometry:hl,IcosahedronGeometry:Wr,LatheGeometry:Vr,OctahedronGeometry:Xr,PlaneGeometry:Re,PolyhedronGeometry:Ai,RingGeometry:qs,ShapeGeometry:ul,SphereGeometry:wn,TetrahedronGeometry:dl,TorusGeometry:as,TorusKnotGeometry:fl,TubeGeometry:pl,WireframeGeometry:Af});class Cf extends $e{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Tt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Rf extends An{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Se extends $e{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class If extends Se{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pf extends $e{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lf extends $e{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Df extends $e{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Uf extends $e{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends $e{static get type(){return"MeshMatcapMaterial"}constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new Tt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends Je{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function $i(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Of(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bf(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function _c(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Qc(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function my(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<e||m>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=$i(u,c.times.constructor),c.values=$i(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function gy(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let x;if(r<=o.times[0]){const p=h,v=u-h;x=o.values.slice(p,v)}else if(r>=o.times[m]){const p=m*u+h,v=p+u-h;x=o.values.slice(p,v)}else{const p=o.createInterpolant(),v=h,y=u-h;p.evaluate(r),x=p.resultBuffer.slice(v,y)}l==="quaternion"&&new sn().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let p=0;p<g;++p){const v=p*f+d;if(l==="quaternion")sn.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const y=f-d*2;for(let _=0;_<y;++_)c.values[v+_]-=x[_]}}}return s.blendMode=Nc,s}const xy={convertArray:$i,isTypedArray:Of,getKeyframeOrder:Bf,sortedArray:_c,flattenJSON:Qc,subclip:my,makeClipAdditive:gy};class qr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zf extends qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qi,endingEnd:qi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yi:r=t,o=2*e-n;break;case wr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yi:a=t,l=2*n-e;break;case wr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+v*a[c+R]+y*a[l+R]+_*a[u+R];return r}}class jc extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class kf extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class On{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$i(e,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$i(t.times,Array),values:$i(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case Io:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Of(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wa,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Io;class ls extends On{constructor(t,e,n){super(t,e,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=br;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class th extends On{}th.prototype.ValueTypeName="color";class Lr extends On{}Lr.prototype.ValueTypeName="number";class Hf extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Yr extends On{InterpolantFactoryMethodLinear(t){return new Hf(this.times,this.values,this.getValueSize(),t)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends On{constructor(t,e,n){super(t,e,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=br;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends On{}Dr.prototype.ValueTypeName="vector";class Ur{constructor(t="",e=-1,n=[],i=qo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(vy(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Bf(l);l=_c(l,1,h),c=_c(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Lr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];Qc(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Lr(".morphTargetInfluence["+x+"]",g,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(Dr,f+".position",d,"pos",i),n(Yr,f+".quaternion",d,"rot",i),n(Dr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _y(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return th;case"quaternion":return Yr;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=_y(s.type);if(s.times===void 0){const e=[],n=[];Qc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class eh{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Vf=new eh;class dn{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class yy extends Error{constructor(t,e){super(t),this.response=e}}class di extends dn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ii.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:i});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ti[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,E=h.length;T<E;T++){const P=h[T];P.onProgress&&P.onProgress(R)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new yy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ii.add(t,c);const h=ti[t];delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ti[t];if(h===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class My extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new di(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Ur.parse(t[n]);e.push(i)}return e}}class Sy extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new sl,l=new di(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Fe),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+x]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Fe),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}class Nr extends dn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ar("img");function l(){h(),ii.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class by extends dn{constructor(t){super(t)}load(t,e,n,i){const r=new zr;r.colorSpace=Ne;const a=new Nr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class wy extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Gn,o=new di(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Sn,a.wrapT=c.wrapT!==void 0?c.wrapT:Sn,a.magFilter=c.magFilter!==void 0?c.magFilter:Fe,a.minFilter=c.minFilter!==void 0?c.minFilter:Fe,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Hn),c.mipmapCount===1&&(a.minFilter=Fe),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}}class Ty extends dn{constructor(t){super(t)}load(t,e,n,i){const r=new Ae,a=new Nr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ci extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nh extends Ci{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ec=new Zt,Uu=new A,Nu=new A;class ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ey extends ih{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gf extends Ci{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ey}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fu=new Zt,or=new A,nc=new A;class Ay extends ih{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),nc.copy(n.position),nc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nc),n.updateMatrixWorld(),i.makeTranslation(-or.x,-or.y,-or.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class wi extends Ci{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cy extends ih{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class No extends Ci{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Cy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sh extends Ci{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wf extends Ci{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Xf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new A)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class qf extends Ci{constructor(t=new Xf,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class ml extends dn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new di(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Tt().setHex(a.value);break;case"v2":i.uniforms[r].value=new rt().fromArray(a.value);break;case"v3":i.uniforms[r].value=new A().fromArray(a.value);break;case"v4":i.uniforms[r].value=new he().fromArray(a.value);break;case"m3":i.uniforms[r].value=new ne().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Zt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new rt().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return ml.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:Cf,SpriteMaterial:bn,RawShaderMaterial:Rf,ShaderMaterial:An,PointsMaterial:nl,MeshPhysicalMaterial:If,MeshStandardMaterial:Se,MeshPhongMaterial:Pf,MeshToonMaterial:Lf,MeshNormalMaterial:Df,MeshLambertMaterial:Uf,MeshDepthMaterial:Gc,MeshDistanceMaterial:Wc,MeshBasicMaterial:Qt,MeshMatcapMaterial:Nf,LineDashedMaterial:Ff,LineBasicMaterial:Je,Material:$e};return new e[t]}}class vc{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Yf extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Zf extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new di(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];const g=f.interleavedBuffers[m],p=r(f,g.buffer),v=Ds(g.type,p),y=new tl(v,g.stride);return y.uuid=g.uuid,e[m]=y,y}function r(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=t.isInstancedBufferGeometry?new Yf:new te,o=t.data.index;if(o!==void 0){const f=Ds(o.type,o.array);a.setIndex(new le(f,1))}const l=t.data.attributes;for(const f in l){const m=l[f];let x;if(m.isInterleavedBufferAttribute){const g=i(t.data,m.data);x=new is(g,m.itemSize,m.offset,m.normalized)}else{const g=Ds(m.type,m.array),p=m.isInstancedBufferAttribute?Hs:le;x=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),a.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const m=c[f],x=[];for(let g=0,p=m.length;g<p;g++){const v=m[g];let y;if(v.isInterleavedBufferAttribute){const _=i(t.data,v.data);y=new is(_,v.itemSize,v.offset,v.normalized)}else{const _=Ds(v.type,v.array);y=new le(_,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),x.push(y)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){const x=u[f];a.addGroup(x.start,x.count,x.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new A;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new Ze(f,d.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}class Ry extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?vc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new di(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?vc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new di(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new ji().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new el().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Zf;for(let r=0,a=t.length;r<a;r++){let o;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Du?o=Du[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new ml;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Ur.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Ds(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new eh(e);r=new Nr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const u=t[c],d=u.url;if(Array.isArray(d)){const f=[];for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Gn(p.data,p.width,p.height)))}i[u.uuid]=new Zi(f)}else{const f=o(u.url);i[u.uuid]=new Zi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Ds(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Nr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Gn(m.data,m.width,m.height)))}n[l.uuid]=new Zi(h)}else{const h=await r(l.url);n[l.uuid]=new Zi(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new zr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Gn:h=new Ae,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Iy)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Ou),h.wrapT=n(o.wrap[1],Ou)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Bu)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Bu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,x=d.length;m<x;m++){const g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":a=new jo,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Tt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Qo(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Hr(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new He(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Jo(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new sh(t.color,t.intensity);break;case"DirectionalLight":a=new No(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new wi(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Wf(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Gf(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new nh(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new qf().fromJSON(t);break;case"SkinnedMesh":h=o(t.geometry),u=l(t.material),a=new pf(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=l(t.material),a=new K(h,u);break;case"InstancedMesh":h=o(t.geometry),u=l(t.material);const d=t.count,f=t.instanceMatrix,m=t.instanceColor;a=new mf(h,u,d),a.instanceMatrix=new Hs(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Hs(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=l(t.material),a=new gf(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(x=>{const g=new rn;g.min.fromArray(x.boxMin),g.max.fromArray(x.boxMax);const p=new Ze;return p.radius=x.sphereRadius,p.center.fromArray(x.sphereCenter),{boxInitialized:x.boxInitialized,box:g,sphereInitialized:x.sphereInitialized,sphere:p}}),a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=c(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid));break;case"LOD":a=new ff;break;case"Line":a=new ui(o(t.geometry),l(t.material));break;case"LineLoop":a=new xf(o(t.geometry),l(t.material));break;case"LineSegments":a=new Yn(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new il(o(t.geometry),l(t.material));break;case"Sprite":a=new Un(l(t.material));break;case"Group":a=new ke;break;case"Bone":a=new Xc;break;default:a=new ue}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const m=d[f];a.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const m=d[f],x=a.getObjectByProperty("uuid",m.object);x!==void 0&&a.addLevel(x,m.distance,m.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ue}})}}const Iy={UVMapping:zo,CubeReflectionMapping:ci,CubeRefractionMapping:Ti,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,CubeUVReflectionMapping:Vs},Ou={RepeatWrapping:Os,ClampToEdgeWrapping:Sn,MirroredRepeatWrapping:Sr},Bu={NearestFilter:Ge,NearestMipmapNearestFilter:Tc,NearestMipmapLinearFilter:Ls,LinearFilter:Fe,LinearMipmapNearestFilter:ur,LinearMipmapLinearFilter:Hn};class Py extends dn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ii.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ii.add(t,l),r.manager.itemStart(t)}}let Na;class rh{static getContext(){return Na===void 0&&(Na=new(window.AudioContext||window.webkitAudioContext)),Na}static setContext(t){Na=t}}class Ly extends dn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new di(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);rh.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(t)}}}const zu=new Zt,ku=new Zt,Bi=new Zt;class Dy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new He,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new He,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Bi.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(Qi*e.fov*.5)/e.zoom;let o,l;ku.elements[12]=-i,zu.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,Bi.elements[0]=2*e.near/(l-o),Bi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Bi),o=-a*e.aspect-r,l=a*e.aspect-r,Bi.elements[0]=2*e.near/(l-o),Bi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Bi)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(ku),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(zu)}}class ah{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hu(){return performance.now()}const zi=new A,Vu=new sn,Uy=new A,ki=new A;class Ny extends ue{constructor(){super(),this.type="AudioListener",this.context=rh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ah}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(zi,Vu,Uy),ki.set(0,0,-1).applyQuaternion(Vu),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(zi.x,i),e.positionY.linearRampToValueAtTime(zi.y,i),e.positionZ.linearRampToValueAtTime(zi.z,i),e.forwardX.linearRampToValueAtTime(ki.x,i),e.forwardY.linearRampToValueAtTime(ki.y,i),e.forwardZ.linearRampToValueAtTime(ki.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(zi.x,zi.y,zi.z),e.setOrientation(ki.x,ki.y,ki.z,n.x,n.y,n.z)}}class $f extends ue{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Hi=new A,Gu=new sn,Fy=new A,Vi=new A;class Oy extends $f{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Hi,Gu,Fy),Vi.set(0,0,1).applyQuaternion(Gu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Hi.x,n),e.positionY.linearRampToValueAtTime(Hi.y,n),e.positionZ.linearRampToValueAtTime(Hi.z,n),e.orientationX.linearRampToValueAtTime(Vi.x,n),e.orientationY.linearRampToValueAtTime(Vi.y,n),e.orientationZ.linearRampToValueAtTime(Vi.z,n)}else e.setPosition(Hi.x,Hi.y,Hi.z),e.setOrientation(Vi.x,Vi.y,Vi.z)}}class By{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Jf{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){sn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;sn.multiplyQuaternionsFlat(t,a,t,e,t,n),sn.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const oh="\\[\\]\\.:\\/",zy=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",ky="[^"+oh.replace("\\.","")+"]",Hy=/((?:WC+[\/:])*)/.source.replace("WC",lh),Vy=/(WCOD+)?/.source.replace("WCOD",ky),Gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Wy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Xy=new RegExp("^"+Hy+Vy+Gy+Wy+"$"),qy=["material","materials","bones","map"];class Yy{constructor(t,e,n){const i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zy,"")}static parseTrackName(t){const e=Xy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=Yy;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=_n(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let m=e[f];if(m===void 0){m=l++,e[f]=m,t.push(d);for(let x=0,g=a;x!==g;++x)r[x].push(new ce(d,n[x],i[x]))}else if(m<c){o=t[m];const x=--c,g=t[x];e[g.uuid]=m,t[m]=g,e[f]=x,t[x]=d;for(let p=0,v=a;p!==v;++p){const y=r[p],_=y[x];let R=y[m];y[m]=_,R===void 0&&(R=new ce(d,n[p],i[p])),y[x]=R}}else t[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,m=i;f!==m;++f){const x=n[f],g=x[u],p=x[h];x[h]=g,x[u]=p}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){const d=--r,f=t[d],m=--a,x=t[m];e[f.uuid]=u,t[u]=f,e[x.uuid]=d,t[d]=x,t.pop();for(let g=0,p=i;g!==p;++g){const v=n[g],y=v[d],_=v[m];v[u]=y,v[d]=_,v.pop()}}else{const d=--a,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let m=0,x=i;m!==x;++m){const g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){const m=l[d];u[d]=new ce(m,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Kf{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:qi,endingEnd:qi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case qo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Od;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Nd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Yi,i.endingEnd=Yi):(t?i.endingStart=this.zeroSlopeAtStart?Yi:qi:i.endingStart=wr,e?i.endingEnd=this.zeroSlopeAtEnd?Yi:qi:i.endingEnd=wr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const $y=new Float32Array(1);class Jy extends qn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=e&&e._propertyBindings[u].binding.parsedPath;m=new Jf(ce.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new jc(new Float32Array(2),new Float32Array(2),1,$y),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Ur.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qo),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Kf(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ur.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ch{constructor(t){this.value=t}clone(){return new ch(this.value.clone===void 0?this.value:this.value.clone())}}let Ky=0;class Qy extends qn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ky++}),this.name="",this.usage=Tr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class jy extends tl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class tM{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Wu=new Zt;class Qf{constructor(t,e,n=0,i=1/0){this.ray=new Ws(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(t,e=!0,n=[]){return yc(t,this,n,e),n.sort(Xu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yc(t[i],this,n,e);return n.sort(Xu),n}}function Xu(s,t){return s.distance-t.distance}function yc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)yc(r[a],t,e,!0)}}class eM{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nM{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class hh{constructor(t,e,n,i){hh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const qu=new rt;class iM{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yu=new A,Fa=new A;class sM{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yu.subVectors(t,this.start),Fa.subVectors(this.end,this.start);const n=Fa.dot(Fa);let r=Fa.dot(Yu)/n;return e&&(r=Ee(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Zu=new A;class rM extends ue{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new te,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ft(i,3));const r=new Je({fog:!1,toneMapped:!1});this.cone=new Yn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Zu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Zu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Mi=new A,Oa=new Zt,ic=new Zt;class aM extends Yn{constructor(t){const e=jf(t),n=new te,i=[],r=[],a=new Tt(0,0,1),o=new Tt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ft(i,3)),n.setAttribute("color",new Ft(r,3));const l=new Je({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");ic.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Oa.multiplyMatrices(ic,o.matrixWorld),Mi.setFromMatrixPosition(Oa),i.setXYZ(a,Mi.x,Mi.y,Mi.z),Oa.multiplyMatrices(ic,o.parent.matrixWorld),Mi.setFromMatrixPosition(Oa),i.setXYZ(a+1,Mi.x,Mi.y,Mi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function jf(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,jf(s.children[e]));return t}class oM extends K{constructor(t,e,n){const i=new wn(e,4,2),r=new Qt({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const lM=new A,$u=new Tt,Ju=new Tt;class cM extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Xr(e);i.rotateY(Math.PI*.5),this.material=new Qt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new le(a,3)),this.add(new K(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");$u.copy(this.light.color),Ju.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?$u:Ju;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(lM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class hM extends Yn{constructor(t=10,e=10,n=4473924,i=8947848){n=new Tt(n),i=new Tt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=e;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const x=d===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new te;h.setAttribute("position",new Ft(l,3)),h.setAttribute("color",new Ft(c,3));const u=new Je({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uM extends Yn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new Tt(r),a=new Tt(a);const o=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,m=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,m);const x=u&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=t-t/n*u;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),g=Math.sin(x)*f,p=Math.cos(x)*f;o.push(g,0,p),l.push(d.r,d.g,d.b),x=(m+1)/i*(Math.PI*2),g=Math.sin(x)*f,p=Math.cos(x)*f,o.push(g,0,p),l.push(d.r,d.g,d.b)}}const c=new te;c.setAttribute("position",new Ft(o,3)),c.setAttribute("color",new Ft(l,3));const h=new Je({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ku=new A,Ba=new A,Qu=new A;class dM extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new te;i.setAttribute("position",new Ft([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Je({fog:!1,toneMapped:!1});this.lightPlane=new ui(i,r),this.add(this.lightPlane),i=new te,i.setAttribute("position",new Ft([0,0,0,0,0,1],3)),this.targetLine=new ui(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ku.setFromMatrixPosition(this.light.matrixWorld),Ba.setFromMatrixPosition(this.light.target.matrixWorld),Qu.subVectors(Ba,Ku),this.lightPlane.lookAt(Ba),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ba),this.targetLine.scale.z=Qu.length()}}const za=new A,Te=new $o;class fM extends Yn{constructor(t){const e=new te,n=new Je({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,x){l(m),l(x)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}e.setAttribute("position",new Ft(i,3)),e.setAttribute("color",new Ft(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Tt(16755200),h=new Tt(16711680),u=new Tt(43775),d=new Tt(16777215),f=new Tt(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;Te.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ce("c",e,t,Te,0,0,-1),Ce("t",e,t,Te,0,0,1),Ce("n1",e,t,Te,-n,-i,-1),Ce("n2",e,t,Te,n,-i,-1),Ce("n3",e,t,Te,-n,i,-1),Ce("n4",e,t,Te,n,i,-1),Ce("f1",e,t,Te,-n,-i,1),Ce("f2",e,t,Te,n,-i,1),Ce("f3",e,t,Te,-n,i,1),Ce("f4",e,t,Te,n,i,1),Ce("u1",e,t,Te,n*.7,i*1.1,-1),Ce("u2",e,t,Te,-n*.7,i*1.1,-1),Ce("u3",e,t,Te,0,i*2,-1),Ce("cf1",e,t,Te,-n,0,1),Ce("cf2",e,t,Te,n,0,1),Ce("cf3",e,t,Te,0,-i,1),Ce("cf4",e,t,Te,0,i,1),Ce("cn1",e,t,Te,-n,0,-1),Ce("cn2",e,t,Te,n,0,-1),Ce("cn3",e,t,Te,0,-i,-1),Ce("cn4",e,t,Te,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ce(s,t,e,n,i,r,a){za.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],za.x,za.y,za.z)}}const ka=new rn;class pM extends Yn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new te;r.setIndex(new le(n,1)),r.setAttribute("position",new le(i,3)),super(r,new Je({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ka.setFromObject(this.object),ka.isEmpty())return;const e=ka.min,n=ka.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class mM extends Yn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new te;r.setIndex(new le(n,1)),r.setAttribute("position",new Ft(i,3)),super(r,new Je({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class gM extends ui{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new te;a.setAttribute("position",new Ft(r,3)),a.computeBoundingSphere(),super(a,new Je({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new te;l.setAttribute("position",new Ft(o,3)),l.computeBoundingSphere(),this.add(new K(l,new Qt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ju=new A;let Ha,sc;class xM extends ue{constructor(t=new A(0,0,1),e=new A(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ha===void 0&&(Ha=new te,Ha.setAttribute("position",new Ft([0,0,0,0,1,0],3)),sc=new je(0,.5,1,5,1),sc.translate(0,-.5,0)),this.position.copy(e),this.line=new ui(Ha,new Je({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new K(sc,new Qt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ju.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ju,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class _M extends Yn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new te;i.setAttribute("position",new Ft(e,3)),i.setAttribute("color",new Ft(n,3));const r=new Je({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Tt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vM{constructor(){this.type="ShapePath",this.color=new Tt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Cr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const v=[];for(let y=0,_=p.length;y<_;y++){const R=p[y],T=new ji;T.curves=R.curves,v.push(T)}return v}function n(p,v){const y=v.length;let _=!1;for(let R=y-1,T=0;T<y;R=T++){let E=v[R],P=v[T],b=P.x-E.x,S=P.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=v[T],b=-b,P=v[R],S=-S),p.y<E.y||p.y>P.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const L=S*(p.x-E.x)-b*(p.y-E.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(p.y!==E.y)continue;if(P.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=P.x)return!0}}return _}const i=Wn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ji,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],m=0,x;d[m]=void 0,f[m]=[];for(let p=0,v=r.length;p<v;p++)o=r[p],x=o.getPoints(),a=i(x),a=t?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new ji,p:x},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:x[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,v=0;for(let y=0,_=d.length;y<_;y++)u[y]=[];for(let y=0,_=d.length;y<_;y++){const R=f[y];for(let T=0;T<R.length;T++){const E=R[T];let P=!0;for(let b=0;b<d.length;b++)n(E.p,d[b].p)&&(y!==b&&v++,P?(P=!1,u[b].push(E)):p=!0);P&&u[y].push(E)}}v>0&&p===!1&&(f=u)}let g;for(let p=0,v=d.length;p<v;p++){l=d[p].s,c.push(l),g=f[p];for(let y=0,_=g.length;y<_;y++)l.holes.push(g[y].h)}return c}}class yM extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class MM extends Nn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);const SM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:wc,AddEquation:bi,AddOperation:Ad,AdditiveAnimationBlendMode:Nc,AdditiveBlending:Ue,AgXToneMapping:Ld,AlphaFormat:Rc,AlwaysCompare:Yd,AlwaysDepth:Ka,AlwaysStencilFunc:uc,AmbientLight:sh,AnimationAction:Kf,AnimationClip:Ur,AnimationLoader:My,AnimationMixer:Jy,AnimationObjectGroup:Zy,AnimationUtils:xy,ArcCurve:_f,ArrayCamera:hf,ArrowHelper:xM,AttachedBindMode:hc,Audio:$f,AudioAnalyser:By,AudioContext:rh,AudioListener:Ny,AudioLoader:Ly,AxesHelper:_M,BackSide:Ye,BasicDepthPacking:Bd,BasicShadowMap:xp,BatchedMesh:gf,Bone:Xc,BooleanKeyframeTrack:ls,Box2:iM,Box3:rn,Box3Helper:mM,BoxGeometry:It,BoxHelper:pM,BufferAttribute:le,BufferGeometry:te,BufferGeometryLoader:Zf,ByteType:Ec,Cache:ii,Camera:$o,CameraHelper:fM,CanvasTexture:ss,CapsuleGeometry:al,CatmullRomCurve3:vf,CineonToneMapping:Id,CircleGeometry:Gr,ClampToEdgeWrapping:Sn,Clock:ah,Color:Tt,ColorKeyframeTrack:th,ColorManagement:oe,CompressedArrayTexture:kv,CompressedCubeTexture:Hv,CompressedTexture:sl,CompressedTextureLoader:Sy,ConeGeometry:ol,ConstantAlphaFactor:wd,ConstantColorFactor:Sd,Controls:yM,CubeCamera:ef,CubeReflectionMapping:ci,CubeRefractionMapping:Ti,CubeTexture:zr,CubeTextureLoader:by,CubeUVReflectionMapping:Vs,CubicBezierCurve:Yc,CubicBezierCurve3:yf,CubicInterpolant:zf,CullFaceBack:oc,CullFaceFront:ad,CullFaceFrontBack:gp,CullFaceNone:rd,Curve:Fn,CurvePath:Sf,CustomBlending:ld,CustomToneMapping:Pd,CylinderGeometry:je,Cylindrical:nM,Data3DTexture:Bc,DataArrayTexture:Yo,DataTexture:Gn,DataTextureLoader:wy,DataUtils:Im,DecrementStencilOp:Pp,DecrementWrapStencilOp:Dp,DefaultLoadingManager:Vf,DepthFormat:Ki,DepthStencilFormat:ns,DepthTexture:Vc,DetachedBindMode:Ud,DirectionalLight:No,DirectionalLightHelper:dM,DiscreteInterpolant:kf,DodecahedronGeometry:ll,DoubleSide:Ve,DstAlphaFactor:xd,DstColorFactor:vd,DynamicCopyUsage:Zp,DynamicDrawUsage:Vp,DynamicReadUsage:Xp,EdgesGeometry:bf,EllipseCurve:rl,EqualCompare:Gd,EqualDepth:ja,EqualStencilFunc:Op,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,Euler:vn,EventDispatcher:qn,ExtrudeGeometry:hl,FileLoader:di,Float16BufferAttribute:Fm,Float32BufferAttribute:Ft,FloatType:hn,Fog:Qo,FogExp2:Hr,FramebufferTexture:zv,FrontSide:li,Frustum:kr,GLBufferAttribute:tM,GLSL1:Jp,GLSL3:dc,GreaterCompare:Wd,GreaterDepth:eo,GreaterEqualCompare:qd,GreaterEqualDepth:to,GreaterEqualStencilFunc:Hp,GreaterStencilFunc:zp,GridHelper:hM,Group:ke,HalfFloatType:Gs,HemisphereLight:nh,HemisphereLightHelper:cM,IcosahedronGeometry:Wr,ImageBitmapLoader:Py,ImageLoader:Nr,ImageUtils:Jd,IncrementStencilOp:Ip,IncrementWrapStencilOp:Lp,InstancedBufferAttribute:Hs,InstancedBufferGeometry:Yf,InstancedInterleavedBuffer:jy,InstancedMesh:mf,Int16BufferAttribute:Um,Int32BufferAttribute:Nm,Int8BufferAttribute:Pm,IntType:ko,InterleavedBuffer:tl,InterleavedBufferAttribute:is,Interpolant:qr,InterpolateDiscrete:br,InterpolateLinear:Io,InterpolateSmooth:Wa,InvertStencilOp:Up,KeepStencilOp:Gi,KeyframeTrack:On,LOD:ff,LatheGeometry:Vr,Layers:Zo,LessCompare:Vd,LessDepth:Qa,LessEqualCompare:Fc,LessEqualDepth:ts,LessEqualStencilFunc:Bp,LessStencilFunc:Fp,Light:Ci,LightProbe:qf,Line:ui,Line3:sM,LineBasicMaterial:Je,LineCurve:Zc,LineCurve3:Mf,LineDashedMaterial:Ff,LineLoop:xf,LineSegments:Yn,LinearFilter:Fe,LinearInterpolant:jc,LinearMipMapLinearFilter:Mp,LinearMipMapNearestFilter:yp,LinearMipmapLinearFilter:Hn,LinearMipmapNearestFilter:ur,LinearSRGBColorSpace:os,LinearToneMapping:Cd,LinearTransfer:Br,Loader:dn,LoaderUtils:vc,LoadingManager:eh,LoopOnce:Nd,LoopPingPong:Od,LoopRepeat:Fd,LuminanceAlphaFormat:Lc,LuminanceFormat:Pc,MOUSE:pp,Material:$e,MaterialLoader:ml,MathUtils:kn,Matrix2:hh,Matrix3:ne,Matrix4:Zt,MaxEquation:dd,Mesh:K,MeshBasicMaterial:Qt,MeshDepthMaterial:Gc,MeshDistanceMaterial:Wc,MeshLambertMaterial:Uf,MeshMatcapMaterial:Nf,MeshNormalMaterial:Df,MeshPhongMaterial:Pf,MeshPhysicalMaterial:If,MeshStandardMaterial:Se,MeshToonMaterial:Lf,MinEquation:ud,MirroredRepeatWrapping:Sr,MixOperation:Ed,MultiplyBlending:cc,MultiplyOperation:Fr,NearestFilter:Ge,NearestMipMapLinearFilter:vp,NearestMipMapNearestFilter:_p,NearestMipmapLinearFilter:Ls,NearestMipmapNearestFilter:Tc,NeutralToneMapping:Dd,NeverCompare:Hd,NeverDepth:Ja,NeverStencilFunc:Np,NoBlending:ri,NoColorSpace:ei,NoToneMapping:ai,NormalAnimationBlendMode:qo,NormalBlending:Ji,NotEqualCompare:Xd,NotEqualDepth:no,NotEqualStencilFunc:kp,NumberKeyframeTrack:Lr,Object3D:ue,ObjectLoader:Ry,ObjectSpaceNormalMap:kd,OctahedronGeometry:Xr,OneFactor:pd,OneMinusConstantAlphaFactor:Td,OneMinusConstantColorFactor:bd,OneMinusDstAlphaFactor:_d,OneMinusDstColorFactor:yd,OneMinusSrcAlphaFactor:$a,OneMinusSrcColorFactor:gd,OrthographicCamera:Jo,PCFShadowMap:bc,PCFSoftShadowMap:od,PMREMGenerator:Po,Path:Cr,PerspectiveCamera:He,Plane:Si,PlaneGeometry:Re,PlaneHelper:gM,PointLight:wi,PointLightHelper:oM,Points:il,PointsMaterial:nl,PolarGridHelper:uM,PolyhedronGeometry:Ai,PositionalAudio:Oy,PropertyBinding:ce,PropertyMixer:Jf,QuadraticBezierCurve:$c,QuadraticBezierCurve3:Jc,Quaternion:sn,QuaternionKeyframeTrack:Yr,QuaternionLinearInterpolant:Hf,RED_GREEN_RGTC2_Format:Co,RED_RGTC1_Format:Uc,REVISION:Bo,RGBADepthPacking:zd,RGBAFormat:en,RGBAIntegerFormat:Xo,RGBA_ASTC_10x10_Format:So,RGBA_ASTC_10x5_Format:vo,RGBA_ASTC_10x6_Format:yo,RGBA_ASTC_10x8_Format:Mo,RGBA_ASTC_12x10_Format:bo,RGBA_ASTC_12x12_Format:wo,RGBA_ASTC_4x4_Format:ho,RGBA_ASTC_5x4_Format:uo,RGBA_ASTC_5x5_Format:fo,RGBA_ASTC_6x5_Format:po,RGBA_ASTC_6x6_Format:mo,RGBA_ASTC_8x5_Format:go,RGBA_ASTC_8x6_Format:xo,RGBA_ASTC_8x8_Format:_o,RGBA_BPTC_Format:gr,RGBA_ETC2_EAC_Format:co,RGBA_PVRTC_2BPPV1_Format:ao,RGBA_PVRTC_4BPPV1_Format:ro,RGBA_S3TC_DXT1_Format:fr,RGBA_S3TC_DXT3_Format:pr,RGBA_S3TC_DXT5_Format:mr,RGBDepthPacking:Ep,RGBFormat:Ic,RGBIntegerFormat:Sp,RGB_BPTC_SIGNED_Format:To,RGB_BPTC_UNSIGNED_Format:Eo,RGB_ETC1_Format:oo,RGB_ETC2_Format:lo,RGB_PVRTC_2BPPV1_Format:so,RGB_PVRTC_4BPPV1_Format:io,RGB_S3TC_DXT1_Format:dr,RGDepthPacking:Ap,RGFormat:Dc,RGIntegerFormat:Wo,RawShaderMaterial:Rf,Ray:Ws,Raycaster:Qf,RectAreaLight:Wf,RedFormat:Go,RedIntegerFormat:Or,ReinhardToneMapping:Rd,RenderTarget:Kd,RepeatWrapping:Os,ReplaceStencilOp:Rp,ReverseSubtractEquation:hd,RingGeometry:qs,SIGNED_RED_GREEN_RGTC2_Format:Ro,SIGNED_RED_RGTC1_Format:Ao,SRGBColorSpace:Ne,SRGBTransfer:me,Scene:jo,ShaderChunk:re,ShaderLib:Dn,ShaderMaterial:An,ShadowMaterial:Cf,Shape:ji,ShapeGeometry:ul,ShapePath:vM,ShapeUtils:Wn,ShortType:Ac,Skeleton:el,SkeletonHelper:aM,SkinnedMesh:pf,Source:Zi,Sphere:Ze,SphereGeometry:wn,Spherical:eM,SphericalHarmonics3:Xf,SplineCurve:Kc,SpotLight:Gf,SpotLightHelper:rM,Sprite:Un,SpriteMaterial:bn,SrcAlphaFactor:Za,SrcAlphaSaturateFactor:Md,SrcColorFactor:md,StaticCopyUsage:Yp,StaticDrawUsage:Tr,StaticReadUsage:Wp,StereoCamera:Dy,StreamCopyUsage:$p,StreamDrawUsage:Gp,StreamReadUsage:qp,StringKeyframeTrack:cs,SubtractEquation:cd,SubtractiveBlending:lc,TOUCH:mp,TangentSpaceNormalMap:Ei,TetrahedronGeometry:dl,Texture:Ae,TextureLoader:Ty,TextureUtils:vv,TorusGeometry:as,TorusKnotGeometry:fl,Triangle:cn,TriangleFanDrawMode:Tp,TriangleStripDrawMode:wp,TrianglesDrawMode:bp,TubeGeometry:pl,UVMapping:zo,Uint16BufferAttribute:zc,Uint32BufferAttribute:kc,Uint8BufferAttribute:Lm,Uint8ClampedBufferAttribute:Dm,Uniform:ch,UniformsGroup:Qy,UniformsLib:wt,UniformsUtils:tf,UnsignedByteType:Xn,UnsignedInt248Type:es,UnsignedInt5999Type:Cc,UnsignedIntType:hi,UnsignedShort4444Type:Ho,UnsignedShort5551Type:Vo,UnsignedShortType:Bs,VSMShadowMap:zn,Vector2:rt,Vector3:A,Vector4:he,VectorKeyframeTrack:Dr,VideoTexture:Bv,WebGL3DRenderTarget:ym,WebGLArrayRenderTarget:vm,WebGLCoordinateSystem:Vn,WebGLCubeRenderTarget:nf,WebGLMultipleRenderTargets:MM,WebGLRenderTarget:Nn,WebGLRenderer:uf,WebGLUtils:cf,WebGPUCoordinateSystem:Er,WireframeGeometry:Af,WrapAroundEnding:wr,ZeroCurvatureEnding:qi,ZeroFactor:fd,ZeroSlopeEnding:Yi,ZeroStencilOp:Cp,createCanvasElement:$d},Symbol.toStringTag,{value:"Module"}));class bM extends jo{constructor(){super();const t=new It;t.deleteAttribute("uv");const e=new Se({side:Ye}),n=new Se,i=new wi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new K(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new K(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new K(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new K(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new K(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new K(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new K(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new K(t,Is(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new K(t,Is(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new K(t,Is(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const x=new K(t,Is(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new K(t,Is(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new K(t,Is(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Is(s){const t=new Qt;return t.color.setScalar(s),t}const Nt={halfX:15.4,minZ:-20.4,maxZ:20.4,height:9},ve={x:0,z:-14.4,radius:2.35,y:2.1},ge=(()=>{let s=1337;return()=>(s=s*16807%2147483647,(s-1)/2147483646)})();function Va(s,t,e,n=1,i=1){const r=document.createElement("canvas");r.width=s,r.height=t;const a=r.getContext("2d");e(a,s,t);const o=new ss(r);return o.wrapS=o.wrapT=Os,o.repeat.set(n,i),o.colorSpace=Ne,o.anisotropy=8,o}function wM(s,t,e){s.fillStyle="#1d2529",s.fillRect(0,0,t,e);const n=128;for(let i=0;i<e;i+=n)for(let r=0;r<t;r+=n){const a=36+Math.floor(ge()*14);s.fillStyle=`rgb(${a+4},${a+10},${a+13})`,s.fillRect(r+2,i+2,n-4,n-4),s.strokeStyle="rgba(4,8,10,0.85)",s.lineWidth=3,s.strokeRect(r+1,i+1,n-2,n-2),s.strokeStyle="rgba(150,190,200,0.05)",s.lineWidth=1,s.strokeRect(r+5,i+5,n-10,n-10);for(let o=0;o<4;o++)s.fillStyle="rgba(0,0,0,0.35)",s.beginPath(),s.arc(r+12+ge()*(n-24),i+12+ge()*(n-24),1.4,0,7),s.fill()}for(let i=0;i<34;i++){const r=ge()*t,a=ge()*e,o=10+ge()*58,l=s.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,`rgba(3,6,7,${.12+ge()*.18})`),l.addColorStop(1,"rgba(3,6,7,0)"),s.fillStyle=l,s.fillRect(r-o,a-o,o*2,o*2)}for(let i=0;i<90;i++){s.strokeStyle=`rgba(${ge()>.6?"180,200,205":"0,0,0"},${.03+ge()*.06})`,s.lineWidth=ge()>.8?1.5:.7;const r=ge()*t,a=ge()*e;s.beginPath(),s.moveTo(r,a),s.lineTo(r+(ge()-.5)*46,a+(ge()-.5)*12),s.stroke()}}function TM(s,t,e){s.fillStyle="#1b2225",s.fillRect(0,0,t,e);for(let n=0;n<e;n+=170)for(let i=0;i<t;i+=170){const r=44+Math.floor(ge()*12);if(s.fillStyle=`rgb(${r},${r+8},${r+11})`,s.fillRect(i+4,n+4,162,162),s.strokeStyle="rgba(5,9,11,0.9)",s.lineWidth=5,s.strokeRect(i+2,n+2,166,166),s.strokeStyle="rgba(0,0,0,0.4)",s.lineWidth=2,s.strokeRect(i+14,n+14,142,142),ge()>.55){s.fillStyle="rgba(4,8,10,0.6)";for(let a=0;a<5;a++)s.fillRect(i+46,n+52+a*8,76,3)}for(const[a,o]of[[10,10],[158,10],[10,158],[158,158]])s.fillStyle="rgba(190,215,220,0.16)",s.beginPath(),s.arc(i+a,n+o,2.2,0,7),s.fill();if(ge()>.5){const a=i+10+ge()*140,o=s.createLinearGradient(a,n+10,a,n+170);o.addColorStop(0,"rgba(0,0,0,0.28)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(a,n+8,7+ge()*14,160)}}for(let n=0;n<22;n++)s.fillStyle=`rgba(0,0,0,${.05+ge()*.08})`,s.fillRect(ge()*t,ge()*e,2+ge()*40,1+ge()*4)}function EM(s,t,e){const n=[92,104,108];s.fillStyle=`rgb(${n[0]},${n[1]},${n[2]})`,s.fillRect(0,0,t,e);for(let i=0;i<t;i+=26)s.fillStyle=i%52===0?"rgba(255,255,255,0.045)":"rgba(0,0,0,0.2)",s.fillRect(i,0,12,e),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(i+12,0,2,e);s.strokeStyle="rgba(6,10,12,0.9)",s.lineWidth=10,s.strokeRect(5,5,t-10,e-10),s.strokeStyle="rgba(190,210,215,0.12)",s.lineWidth=2,s.strokeRect(12,12,t-24,e-24),s.save(),s.translate(t/2,e/2),s.rotate(-.04),s.font="bold 42px monospace",s.textAlign="center",s.fillStyle="rgba(220,230,230,0.22)",s.fillText("CF-09",0,-4),s.font="bold 15px monospace",s.fillText("CARGO / SECURE",0,26),s.restore();for(let i=0;i<6;i++)s.fillStyle="rgba(0,0,0,0.2)",s.fillRect(ge()*t,ge()*e,10+ge()*40,2+ge()*6)}function AM(s,t,e){s.clearRect(0,0,t,e),s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(0,0,t,e),s.save(),s.beginPath(),s.rect(0,0,t,e),s.clip();const n=48;for(let i=-e;i<t+e;i+=n)s.fillStyle="rgba(255,170,50,0.85)",s.beginPath(),s.moveTo(i,e),s.lineTo(i+n/2,e),s.lineTo(i+n/2+e,0),s.lineTo(i+e,0),s.closePath(),s.fill();s.restore(),s.strokeStyle="rgba(0,0,0,0.5)",s.lineWidth=4,s.strokeRect(0,0,t,e)}function CM(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new ss(s);return n.colorSpace=Ne,n}function RM(s){const t=new ke;s.add(t);const e=[],n=[],i=[],r=Va(512,512,wM,4,5),a=Va(512,512,TM,5,1.2),o=Va(256,256,EM),l=Va(256,128,AM),c=CM(),h=new Se({map:r,color:14147810,roughness:.62,metalness:.5}),u=new K(new Re(Nt.halfX*2+3,Nt.maxZ*2+3),h);u.rotation.x=-Math.PI/2,t.add(u),e.push(u);const d=new Se({color:1713192,roughness:.85,metalness:.45}),f=new K(new Re(Nt.halfX*2,Nt.maxZ*2),d);f.rotation.x=Math.PI/2,f.position.y=Nt.height,t.add(f),e.push(f);const m=new Se({map:a,color:14871276,roughness:.75,metalness:.4}),x=new Re(Nt.maxZ*2,Nt.height);for(const ot of[-1,1]){const at=new K(x,m);at.position.set(ot*(Nt.halfX+1.7),Nt.height/2,0),at.rotation.y=ot>0?-Math.PI/2:Math.PI/2,t.add(at),e.push(at)}const g=new Re(Nt.halfX*2+3,Nt.height),p=new K(g,m);p.position.set(0,Nt.height/2,Nt.minZ-.7),t.add(p),e.push(p);const v=new K(g,m);v.position.set(0,Nt.height/2,Nt.maxZ+.7),v.rotation.y=Math.PI,t.add(v),e.push(v);const y=new Se({color:2897723,metalness:.75,roughness:.42}),_=new It(.5,Nt.height,.7);for(let ot=-18;ot<=18;ot+=6)for(const at of[-1,1]){const vt=new K(_,y);vt.position.set(at*(Nt.halfX-.1),Nt.height/2,ot),t.add(vt)}const R=new Se({color:3753803,metalness:.85,roughness:.35});for(const ot of[-1,1])for(let at=0;at<2;at++){const vt=new K(new je(.16,.16,Nt.maxZ*2-1,8),R);vt.rotation.x=Math.PI/2,vt.position.set(ot*(Nt.halfX+1.35),6.6+at*.55,0),t.add(vt)}const T=new Se({color:2765880,metalness:.7,roughness:.5}),E=new Se({color:4938592,metalness:.8,roughness:.35});for(const ot of[-1,1]){const at=new K(new It(2.4,.22,Nt.maxZ*2-2),T);at.position.set(ot*(Nt.halfX-2.3),5.1,0),t.add(at);const vt=new K(new It(.08,.08,Nt.maxZ*2-2),E);vt.position.set(ot*(Nt.halfX-3.45),6.05,0),t.add(vt);for(let et=-19;et<=19;et+=2.4){const V=new K(new It(.07,1,.07),E);V.position.set(ot*(Nt.halfX-3.45),5.55,et),t.add(V)}const D=new K(new It(.06,.06,Nt.maxZ*2-3),new Qt({color:1928316}));D.position.set(ot*(Nt.halfX-3.52),4.96,0),t.add(D);for(const et of[-12,11]){for(let V=.4;V<5.2;V+=.45){const J=new K(new It(.7,.05,.05),E);J.position.set(ot*(Nt.halfX-1.4),V,et),t.add(J)}for(const V of[-.36,.36]){const J=new K(new It(.05,5.2,.05),E);J.position.set(ot*(Nt.halfX-1.4)+V,2.6,et),t.add(J)}}}const P=new Se({color:3817797,metalness:.7,roughness:.45}),b=new Qt({color:16770236,toneMapped:!1}),S=[[-7,7.9,-8],[7,7.9,-8],[-7,7.9,7],[7,7.9,7]];for(const[ot,at,vt]of S){const D=new K(new It(3.1,.3,1.1),P);D.position.set(ot,at+.5,vt),t.add(D);const et=new K(new It(2.8,.08,.8),b);et.position.set(ot,at+.34,vt),t.add(et);const V=new Un(new bn({map:c,color:16759671,transparent:!0,opacity:.5,blending:Ue,depthWrite:!1,toneMapped:!1}));V.position.set(ot,at+.2,vt),V.scale.set(4.2,4.2,1),t.add(V);const J=new wi(16762767,240,38,2);J.position.set(ot,at-.5,vt),t.add(J)}const L=new Qt({color:16726560,toneMapped:!1});for(const ot of[-1,1])for(const at of[-16,-10,4,12,18]){const vt=new K(new It(.05,.18,2.2),L);vt.position.set(ot*(Nt.halfX+1.62),3.1,at),t.add(vt);const D=new Un(new bn({map:c,color:16726556,transparent:!0,opacity:.4,blending:Ue,depthWrite:!1,toneMapped:!1}));D.position.copy(vt.position),D.position.x-=ot*.1,D.scale.set(2.6,1.2,1),t.add(D)}const W=[],G=new Se({map:o,roughness:.72,metalness:.35});for(const ot of[9083550,10521443,7309966,11581624])W.push(G.clone()),W[W.length-1].color.setHex(ot);const O=new Se({color:2371121,metalness:.8,roughness:.4});function U(ot,at,vt,D){const et=new K(new Re(vt,D),new Qt({map:c,color:0,transparent:!0,opacity:.55,depthWrite:!1}));et.rotation.x=-Math.PI/2,et.position.set(ot,.012,at),t.add(et)}function F(ot,at,vt,D,et,V=0,J=0){const gt=W[V%W.length],yt=new K(new It(vt,D,et),gt);yt.position.set(ot,D/2,at),yt.rotation.y=J,t.add(yt),e.push(yt);const qt=new K(new It(vt+.06,.1,et+.06),O);qt.position.set(ot,D-.05,at),qt.rotation.y=J,t.add(qt);const xe=qt.clone();xe.position.y=.06,t.add(xe);const be=(Math.abs(Math.cos(J))*vt+Math.abs(Math.sin(J))*et)/2,ae=(Math.abs(Math.sin(J))*vt+Math.abs(Math.cos(J))*et)/2;if(n.push({minX:ot-be,maxX:ot+be,minZ:at-ae,maxZ:at+ae,tag:"crate"}),U(ot,at,be*2.6,ae*2.6),ge()>.55){const De=new K(new Re(vt*.55,.16),new Qt({color:16753710,transparent:!0,opacity:.55}));De.position.set(ot,D*.62,at+Math.cos(J)*(et/2+.02)),De.rotation.y=J,t.add(De)}return yt}F(-9.6,5.4,3,2.5,3,0,.06),F(-11.9,1.4,2.6,3.4,2.6,2,-.12),F(-8.4,9.9,2.2,1.7,2.2,1,.2),F(9.4,4.6,3.2,2.6,3,3,-.05),F(12.2,10.4,2.4,2,2.8,1,.16),F(7.8,-8.9,2.4,1.8,2.2,2,.1),F(-8.1,-8.4,2.6,2.2,2.4,3,-.08),F(11.6,-4.8,2.5,2.8,2.5,0,.24),F(-4.9,13.7,1.7,1.25,1.7,2,.4),F(4.6,13.9,1.6,1.1,1.6,1,-.3),F(-11.5,-14.8,2.2,5,2.2,3,.04),F(11.6,-15.2,2.2,4.2,2.2,0,-.05);const Y=new ke;Y.position.set(ve.x,0,ve.z),t.add(Y);const X=new Se({color:1976363,metalness:.85,roughness:.3}),it=new K(new je(3.15,3.5,.6,32),X);it.position.y=.3,Y.add(it),e.push(it);const Mt=new K(new je(2.55,2.9,.7,32),X);Mt.position.y=.8,Y.add(Mt);const Et=new Se({color:530970,emissive:2087092,emissiveIntensity:.55,metalness:.55,roughness:.25}),Vt=new ke;Vt.position.y=2.5,Y.add(Vt);for(let ot=0;ot<8;ot++){const at=ot/8*Math.PI*2,vt=new K(new It(.3,3.42,.16),Et);vt.position.set(Math.cos(at)*1.58,0,Math.sin(at)*1.58),vt.rotation.y=-at,Vt.add(vt),e.push(vt)}for(const ot of[-1.55,0,1.55]){const at=new K(new as(1.6,.07,8,28),X);at.rotation.x=Math.PI/2,at.position.y=ot,Vt.add(at)}const Kt=new K(new je(.62,.72,3.15,16,1,!0),new Qt({color:10354672,transparent:!0,opacity:.72,side:Ve,toneMapped:!1}));Kt.position.y=2.5,Y.add(Kt);const Q=new K(new je(1.78,1.82,3.55,24,1,!0),new Qt({color:4190408,transparent:!0,opacity:.09,side:Ve,blending:Ue,depthWrite:!1,toneMapped:!1}));Q.position.y=2.5,Y.add(Q);const lt=new K(new je(1.72,1.5,.5,24),X);lt.position.y=4.35,Y.add(lt);const mt=new K(new wn(.55,20,14),new Qt({color:12255217,toneMapped:!1}));mt.position.y=4.85,Y.add(mt);const dt=[];for(let ot=0;ot<4;ot++){const at=new Qt({color:4714703,toneMapped:!1,transparent:!0});dt.push(at);const vt=new K(new as(2.02,.07,8,40),at);vt.rotation.x=Math.PI/2,vt.position.y=1.15+ot*.95,vt.userData.baseScale=1,Y.add(vt)}const Pt=new wi(4190408,42,28,2);Pt.position.set(0,3.4,3),Y.add(Pt);const Ht=new Un(new bn({map:c,color:4190408,transparent:!0,opacity:.7,blending:Ue,depthWrite:!1,toneMapped:!1}));Ht.position.set(0,2.8,0),Ht.scale.set(11,14,1),Y.add(Ht);const N=new K(new Re(12,12),new Qt({map:c,color:3135672,transparent:!0,opacity:.35,blending:Ue,depthWrite:!1,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=.03,Y.add(N);for(let ot=0;ot<4;ot++){const at=ot/4*Math.PI*2+Math.PI/4,vt=new K(new It(.26,4.2,.26),X);vt.position.set(Math.cos(at)*2.35,2.2,Math.sin(at)*2.35),Y.add(vt)}const _t=new K(new qs(3.8,4.6,48),new Qt({map:l,transparent:!0,opacity:.75,side:Ve}));_t.rotation.x=-Math.PI/2,_t.position.y=.015,Y.add(_t);const q=document.createElement("canvas");q.width=512,q.height=128;const j=q.getContext("2d");j.fillStyle="#0c1416",j.fillRect(0,0,512,128),j.strokeStyle="#ffa42e",j.lineWidth=6,j.strokeRect(6,6,500,116),j.fillStyle="#ffb347",j.font="bold 40px monospace",j.textAlign="center",j.fillText("REACTOR 09",256,58),j.font="18px monospace",j.fillStyle="#7d9398",j.fillText("DO NOT BREACH // CLASS IV",256,92);const I=new ss(q);I.colorSpace=Ne;const Lt=new K(new Re(2.6,.65),new Qt({map:I,transparent:!1}));Lt.position.set(0,.42,3.2),Y.add(Lt),n.push({minX:-3.4,maxX:3.4,minZ:ve.z-3.4,maxZ:ve.z+3.4,tag:"core"});const ht=new Se({color:2831930,metalness:.8,roughness:.35}),pt=new Se({color:1778470,metalness:.7,roughness:.5}),ct=new Qt({color:3541766});function Ot(ot,at,vt,D,et,V,J){const gt=new ke;gt.position.set(ot,0,at),gt.rotation.y=vt,t.add(gt);const yt=new K(new It(.4,et+.6,.55),pt);yt.position.set(-D/2-.2,(et+.6)/2,0);const qt=yt.clone();qt.position.x=D/2+.2;const xe=new K(new It(D+.8,.5,.6),pt);xe.position.set(0,et+.3,0),gt.add(yt,qt,xe);const be=new K(new It(D,et,.16),ht);be.position.set(0,et/2,0),gt.add(be);const ae=new K(new It(.1,et-.2,.05),new Qt({color:16723484}));ae.position.set(0,et/2,-.11),gt.add(ae);const De=new K(new Re(D-.3,et-.3),ct);De.position.set(0,et/2,-.12),gt.add(De);const fn=new K(new Re(D*.9,.7),new Qt({map:l,transparent:!0,opacity:.8}));fn.rotation.x=-Math.PI/2,fn.position.set(0,.02,2),gt.add(fn);const hs=new K(new wn(.12,10,8),new Qt({color:16723484}));hs.position.set(0,et+.72,0),gt.add(hs);const Ri=new Un(new bn({map:c,color:16723484,transparent:!0,opacity:.55,blending:Ue,depthWrite:!1}));Ri.position.copy(hs.position),Ri.scale.set(2.2,2.2,1),gt.add(Ri);const Cn=new wi(16722710,18,10,2);return Cn.position.set(0,3,2.4),gt.add(Cn),i.push({position:new A(V[0],0,V[1]),lane:J.map(([Ys,Zr])=>new A(Ys,0,Zr)),door:gt}),{g:gt,seam:ae,portal:De,glow:Ri,light:Cn}}const St=[];St.push(Ot(-15.4-.4,-4,Math.PI/2,4.2,5.2,[-13.6,-4],[[-10.5,-4],[-5,-2],[-1.5,-9.5]])),St.push(Ot(Nt.halfX+.4,-4,-Math.PI/2,4.2,5.2,[13.6,-4],[[10.5,-4],[5,-2],[1.5,-9.5]])),St.push(Ot(0,Nt.maxZ+.4,Math.PI,5.4,5.6,[0,18.4],[[0,13.5],[0,5],[0,-8.5]]));const C=document.createElement("canvas");C.width=512,C.height=512;const M=C.getContext("2d");M.clearRect(0,0,512,512),M.strokeStyle="rgba(255,170,50,0.65)",M.lineWidth=12,M.setLineDash([34,22]),M.beginPath(),M.moveTo(256,500),M.lineTo(256,90),M.stroke(),M.setLineDash([]),M.strokeStyle="rgba(255,170,50,0.5)",M.lineWidth=6,M.strokeRect(30,30,452,452),M.font="bold 150px monospace",M.textAlign="center",M.fillStyle="rgba(210,230,230,0.07)",M.fillText("09",256,300),M.font="bold 18px monospace",M.fillStyle="rgba(255,170,50,0.34)",M.fillText("CARGO BAY // AUTHORIZED ONLY",256,342);const H=new ss(C);H.colorSpace=Ne;const k=new K(new Re(14,26),new Qt({map:H,transparent:!0,opacity:.62,depthWrite:!1,toneMapped:!1}));k.rotation.x=-Math.PI/2,k.position.set(0,.02,2),t.add(k);for(let ot=-8;ot<=16;ot+=2.4)for(const at of[-1,1]){const vt=new K(new It(.12,.02,.35),new Qt({color:2981768}));vt.position.set(at*4.2,.03,ot),t.add(vt)}const st=new te,tt=420,Dt=new Float32Array(tt*3);for(let ot=0;ot<tt;ot++)Dt[ot*3]=(Math.random()-.5)*Nt.halfX*2,Dt[ot*3+1]=Math.random()*Nt.height,Dt[ot*3+2]=Nt.minZ+Math.random()*(Nt.maxZ-Nt.minZ);st.setAttribute("position",new le(Dt,3));const bt=new il(st,new nl({color:10470598,size:.035,transparent:!0,opacity:.45,depthWrite:!1}));t.add(bt);const Rt=new Qt({map:c,color:16758903,transparent:!0,opacity:.055,blending:Ue,depthWrite:!1,side:Ve,toneMapped:!1});for(const[ot,,at]of S){const vt=new K(new Re(9,14),Rt);vt.position.set(ot,4.4,at),vt.rotation.y=Math.PI/4,t.add(vt);const D=new K(new je(.75,4.6,8.1,20,1,!0),new Qt({color:16762767,transparent:!0,opacity:.028,blending:Ue,depthWrite:!1,side:Ve,toneMapped:!1}));D.position.set(ot,4.05,at),t.add(D)}let ee=1;const ut=new Tt(4714703),At=new Tt(16726832);new Tt;let Wt=0;function Yt(ot){ee=kn.clamp(ot,0,1);const at=1-ee;Et.emissive.copy(ut).lerp(At,at*.9),Et.emissiveIntensity=.34+ee*.4;for(const vt of dt)vt.color.copy(ut).lerp(At,at);Pt.color.copy(ut).lerp(At,at),Pt.intensity=24+ee*26,Ht.material.color.copy(ut).lerp(At,at),Kt.material.color.copy(new Tt(10354672)).lerp(At,at),mt.material.color.copy(new Tt(12255217)).lerp(At,at)}function Ut(ot,at){for(let et=0;et<4;et++){const V=Y.children.find(J=>J.material===dt[et]);if(V){const J=1+Math.sin(at*(1.1+et*.2)+et)*.015;V.scale.set(J,J,J),V.material.opacity=.75+Math.sin(at*2+et)*.2,V.material.transparent=!0}}mt.scale.setScalar(1+Math.sin(at*3.2)*.06),Ht.material.opacity=.35+Math.sin(at*2.1)*.06+(1-ee)*.16,_t.rotation.z+=ot*.03,Kt.material.opacity=.55+Math.sin(at*3.6)*.12;const vt=bt.geometry.attributes.position;for(let et=0;et<tt;et++){let V=vt.getY(et)+ot*(.04+et%5*.012);V>Nt.height&&(V=.2),vt.setY(et,V)}if(vt.needsUpdate=!0,ee<.35){Wt+=ot;const et=Math.sin(Wt*9)>-.4;for(const V of St)V.glow.material.opacity=et?.7:.15}const D=.35+Math.sin(at*2.5)*.12;ct.color.setRGB(.28+D*.2,.035,.02)}return Yt(1),{root:t,floor:u,solids:e,colliders:n,spawns:i,core:{x:ve.x,z:ve.z,radius:ve.radius,position:new A(ve.x,0,ve.z)},doors:St,setCoreHealth:Yt,update:Ut}}function IM(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.2)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ss(s)}function PM(s,t){const n=new Float32Array(2100),i=new Float32Array(700*3),r=new Float32Array(700),a=new Float32Array(700),o=new te;o.setAttribute("position",new le(n,3)),o.setAttribute("aColor",new le(i,3)),o.setAttribute("aSize",new le(r,1)),o.setAttribute("aAlpha",new le(a,1));const l=new An({uniforms:{uPR:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uPR;
      void main() {
        vColor = aColor;
        vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPR * (12.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 d = gl_PointCoord - vec2(0.5);
        float a = smoothstep(0.5, 0.05, length(d));
        gl_FragColor = vec4(vColor, a * vAlpha);
      }
    `,transparent:!0,depthWrite:!1,blending:Ue}),c=new il(o,l);c.frustumCulled=!1,s.add(c);const h=[];for(let O=0;O<700;O++)h.push({alive:!1,vx:0,vy:0,vz:0,life:0,maxLife:1,gravity:0,drag:0,size:2,r:1,g:1,b:1,fade:1}),n[O*3+1]=-999;let u=0;const d=new Tt,f=IM();function m(O,U={}){const F=U.count??8,Y=U.speed??3,X=U.spread??1,it=U.life??.5,Mt=U.size??3.5,Et=U.gravity??8,Vt=U.drag??1.5,Kt=U.normal??null;d.set(U.color??16757575);for(let Q=0;Q<F;Q++){const lt=u;u=(u+1)%700;const mt=h[lt];mt.alive=!0,mt.life=mt.maxLife=it*(.6+Math.random()*.7);const dt=Math.random()*Math.PI*2,Pt=Math.acos(2*Math.random()-1);let Ht=Math.sin(Pt)*Math.cos(dt),N=Math.cos(Pt),_t=Math.sin(Pt)*Math.sin(dt);Kt&&(Ht=Ht*X+Kt.x,N=N*X+Kt.y,_t=_t*X+Kt.z);const q=Y*(.35+Math.random()*.9);mt.vx=Ht*q,mt.vy=N*q+(U.lift??0),mt.vz=_t*q,mt.gravity=Et,mt.drag=Vt,mt.size=Mt*(.5+Math.random()*.9);const j=.82+Math.random()*.36;mt.r=Math.min(1,d.r*j),mt.g=Math.min(1,d.g*j),mt.b=Math.min(1,d.b*j),n[lt*3]=O.x+(Math.random()-.5)*.18,n[lt*3+1]=O.y+(Math.random()-.5)*.18,n[lt*3+2]=O.z+(Math.random()-.5)*.18,i[lt*3]=mt.r,i[lt*3+1]=mt.g,i[lt*3+2]=mt.b,r[lt]=mt.size,a[lt]=1}o.attributes.position.needsUpdate=!0,o.attributes.aColor.needsUpdate=!0,o.attributes.aSize.needsUpdate=!0,o.attributes.aAlpha.needsUpdate=!0}const x=[];for(let O=0;O<22;O++){const U=new te;U.setAttribute("position",new le(new Float32Array(6),3));const F=new Je({color:16764810,transparent:!0,opacity:0,blending:Ue,depthWrite:!1}),Y=new ui(U,F);Y.frustumCulled=!1,Y.visible=!1,s.add(Y),x.push({line:Y,life:0,maxLife:.09})}let g=0;function p(O,U,F=16764810,Y=.08){const X=x[g];g=(g+1)%x.length;const it=X.line.geometry.attributes.position.array;it[0]=O.x,it[1]=O.y,it[2]=O.z,it[3]=U.x,it[4]=U.y,it[5]=U.z,X.line.geometry.attributes.position.needsUpdate=!0,X.line.material.color.setHex(F),X.line.material.opacity=1,X.line.visible=!0,X.life=X.maxLife=Y}const v=new Un(new bn({map:f,color:16761706,transparent:!0,opacity:0,blending:Ue,depthWrite:!1}));v.scale.set(.7,.7,1),v.visible=!1,s.add(v);const y=new wi(16752704,0,14,2);s.add(y);let _=0;function R(O,U=16756822){v.position.copy(O),v.material.color.setHex(U),v.material.opacity=1,v.visible=!0,v.scale.setScalar(.5+Math.random()*.35),v.material.rotation=Math.random()*Math.PI,y.position.copy(O),y.color.setHex(U),y.intensity=26,_=.05}const T=[];for(let O=0;O<16;O++){const U=new Un(new bn({map:f,color:16760944,transparent:!0,opacity:0,blending:Ue,depthWrite:!1}));U.visible=!1,s.add(U),T.push({sprite:U,life:0,maxLife:.25})}let E=0;function P(O,U,F=16760944){const Y=T[E];E=(E+1)%T.length,Y.sprite.position.copy(O).addScaledVector(U,.02),Y.sprite.material.color.setHex(F),Y.sprite.material.opacity=.9,Y.sprite.scale.setScalar(.24+Math.random()*.14),Y.sprite.visible=!0,Y.life=Y.maxLife,m(O,{count:7,speed:4.5,color:F,size:2.6,life:.32,gravity:9,normal:U,spread:.55})}const b=[];for(let O=0;O<8;O++){const U=new K(new qs(.3,.42,28),new Qt({color:16742970,transparent:!0,opacity:0,blending:Ue,side:Ve,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.visible=!1,s.add(U),b.push({mesh:U,life:0,maxLife:.45})}let S=0;function L(O,U=16742970){const F=b[S];S=(S+1)%b.length,F.mesh.position.set(O.x,Math.max(.05,O.y),O.z),F.mesh.material.color.setHex(U),F.mesh.scale.setScalar(1),F.mesh.material.opacity=.9,F.mesh.visible=!0,F.life=F.maxLife}function W(O){for(let U=0;U<700;U++){const F=h[U];if(!F.alive)continue;if(F.life-=O,F.life<=0){F.alive=!1,a[U]=0,n[U*3+1]=-999;continue}const Y=Math.max(0,1-F.drag*O);F.vx*=Y,F.vz*=Y,F.vy=F.vy*Y-F.gravity*O,n[U*3]+=F.vx*O,n[U*3+1]+=F.vy*O,n[U*3+2]+=F.vz*O,n[U*3+1]<.02&&(n[U*3+1]=.02,F.vy*=-.32,F.vx*=.7,F.vz*=.7);const X=F.life/F.maxLife;a[U]=X<.3?X/.3:1}o.attributes.position.needsUpdate=!0,o.attributes.aAlpha.needsUpdate=!0;for(const U of x)U.life<=0||(U.life-=O,U.line.material.opacity=Math.max(0,U.life/U.maxLife),U.life<=0&&(U.line.visible=!1));_>0&&(_-=O,y.intensity=Math.max(0,26*(_/.05)),v.material.opacity=Math.max(0,_/.05),_<=0&&(y.intensity=0,v.visible=!1));for(const U of T)U.life<=0||(U.life-=O,U.sprite.material.opacity=Math.max(0,U.life/U.maxLife),U.sprite.scale.multiplyScalar(1+O*3),U.life<=0&&(U.sprite.visible=!1));for(const U of b){if(U.life<=0)continue;U.life-=O;const F=1-U.life/U.maxLife;U.mesh.scale.setScalar(1+F*5),U.mesh.material.opacity=Math.max(0,(1-F)*.55),U.life<=0&&(U.mesh.visible=!1)}}function G(O){l.uniforms.uPR.value=O}return{spawn:m,tracer:p,muzzle:R,impact:P,shockwave:L,update:W,setPixelRatio:G}}function LM(){let s=null,t=null,e=!1,n=!1,i=null;function r(){if(s)return s.state==="suspended"&&s.resume(),!0;const h=window.AudioContext||window.webkitAudioContext;if(!h)return!1;s=new h,t=s.createGain(),t.gain.value=.55,t.connect(s.destination),i=s.createBuffer(1,s.sampleRate*1.2,s.sampleRate);const u=i.getChannelData(0);for(let d=0;d<u.length;d++)u[d]=Math.random()*2-1;return!0}function a(){return s?s.currentTime:0}function o(h,u,d="sine",f=.1,m=null,x=0){if(!s||e)return;const g=a()+x,p=s.createOscillator(),v=s.createGain();p.type=d,p.frequency.setValueAtTime(h,g),m&&p.frequency.exponentialRampToValueAtTime(Math.max(20,m),g+u),v.gain.setValueAtTime(1e-4,g),v.gain.exponentialRampToValueAtTime(f,g+.008),v.gain.exponentialRampToValueAtTime(1e-4,g+u),p.connect(v).connect(t),p.start(g),p.stop(g+u+.02)}function l(h,u,d=.2,f=1,m=0,x="bandpass"){if(!s||e)return;const g=a()+m,p=s.createBufferSource();p.buffer=i;const v=s.createBiquadFilter();v.type=x,v.frequency.value=u,v.Q.value=f;const y=s.createGain();y.gain.setValueAtTime(d,g),y.gain.exponentialRampToValueAtTime(1e-4,g+h),p.connect(v).connect(y).connect(t),p.start(g),p.stop(g+h+.02)}function c(){if(!s||e||n)return;n=!0;const h=s.createGain();h.gain.value=.05,h.connect(t);for(const[m,x,g]of[[46,"sine",0],[55.2,"triangle",7],[92,"sine",-6]]){const p=s.createOscillator();p.type=x,p.frequency.value=m,p.detune.value=g;const v=s.createBiquadFilter();v.type="lowpass",v.frequency.value=240,p.connect(v).connect(h),p.start()}const u=s.createBufferSource();u.buffer=i,u.loop=!0;const d=s.createBiquadFilter();d.type="lowpass",d.frequency.value=420;const f=s.createGain();f.gain.value=.035,u.connect(d).connect(f).connect(t),u.start()}return{init(){r()&&c()},get muted(){return e},setMuted(h){e=h,t&&(t.gain.value=h?0:.55)},shot(){l(.09,1400,.26,.8),o(135,.11,"triangle",.22,52),l(.03,3400,.1,1.4,0,"highpass")},enemyShot(){o(680,.14,"sawtooth",.06,240),l(.08,1900,.05,1.8)},empty(){l(.03,2200,.08,2)},hit(){o(980,.045,"square",.055,760)},headshot(){o(1520,.06,"square",.07,1180),o(2200,.05,"sine",.045,1500,.02)},kill(){o(240,.18,"sawtooth",.09,90),l(.22,500,.14,.6)},reload(){l(.04,1800,.12,2,0),l(.05,900,.14,1.4,.55),l(.04,2400,.1,2,1.35),o(320,.05,"square",.03,220,1.35)},hurt(){o(90,.22,"sine",.22,48),l(.18,340,.13,.7)},coreHit(){o(70,.35,"sine",.24,38),o(420,.12,"square",.05,240,.02)},spawn(){o(160,.3,"sawtooth",.05,420),l(.25,800,.06,1.2)},wave(){o(330,.16,"square",.07),o(330,.16,"square",.07,null,.22),o(494,.3,"square",.07,null,.44)},clear(){o(392,.16,"triangle",.08),o(523,.16,"triangle",.08,null,.14),o(659,.34,"triangle",.08,null,.28)},explosion(){l(.5,260,.3,.5),o(58,.5,"sine",.3,28)},win(){[392,523,659,784].forEach((h,u)=>o(h,.6,"triangle",.09,null,u*.12))},lose(){o(220,.5,"sawtooth",.09,110),o(147,.9,"triangle",.1,62,.25),l(.9,200,.1,.5,.1)}}}const td=1.68,DM=.42;class UM{constructor({camera:t,world:e,fx:n,audio:i,hooks:r}){this.camera=t,this.world=e,this.fx=n,this.audio=i,this.hooks=r,this.position=new A(0,0,10.5),this.velocity=new A,this.yaw=0,this.pitch=0,this.onGround=!0,this.radius=DM,this.maxHealth=100,this.health=100,this.alive=!0,this.damageTimer=0,this.invuln=0,this.magSize=30,this.ammo=30,this.reserve=1/0,this.fireRate=620/60,this.fireCooldown=0,this.reloading=0,this.reloadTime=1.55,this.reloadQueued=!1,this.bloom=0,this.ads=!1,this.sprint=!1,this.bobTime=0,this.recoilRecover=0,this.shake=0,this.land=0,this.muzzleCooldown=0,this.baseFov=74,this.targetFov=74,this.buildWeapon()}buildWeapon(){const t=new ke;this.gun=t,this.camera.add(t);const e=new Se({color:3292224,metalness:.5,roughness:.5}),n=new Se({color:1777955,metalness:.2,roughness:.8}),i=new Se({color:4279634,metalness:.45,roughness:.5}),r=new Qt({color:16747050}),a=new Qt({color:6029280}),o=new K(new It(.075,.105,.36),e);o.position.set(0,0,-.05),t.add(o);const l=new K(new It(.06,.045,.3),i);l.position.set(0,.072,-.08),t.add(l);const c=new K(new je(.019,.022,.34,10),e);c.rotation.x=Math.PI/2,c.position.set(0,.015,-.4),t.add(c);const h=new K(new It(.058,.06,.22),n);h.position.set(0,.012,-.29),t.add(h);for(let S=0;S<3;S++){const L=new K(new It(.064,.008,.03),i);L.position.set(0,.03,-.24-S*.055),t.add(L)}const u=new K(new It(.05,.075,.15),n);u.position.set(0,-.012,.2),t.add(u);const d=new K(new It(.045,.13,.06),n);d.position.set(0,-.1,.07),d.rotation.x=-.24,t.add(d);const f=new K(new It(.042,.16,.075),i);f.position.set(0,-.125,-.045),f.rotation.x=.15,t.add(f);const m=new K(new It(.036,.018,.24),n);m.position.set(0,.095,-.06),t.add(m);const x=new K(new It(.075,.07,.035),n);x.position.set(0,.135,-.06),t.add(x);const g=new K(new Re(.052,.05),new Qt({color:2775896,transparent:!0,opacity:.4,side:Ve}));g.position.set(0,.137,-.078),t.add(g);const p=new K(new Gr(.006,12),a);p.position.set(0,.137,-.079),t.add(p);const v=new K(new It(.002,.012,.16),r);v.position.set(-.039,0,-.09),t.add(v);const y=v.clone();y.position.x=.039,t.add(y);const _=new Se({color:1580319,metalness:.15,roughness:.85}),R=new Se({color:16742954,metalness:.3,roughness:.6}),T=new K(new It(.075,.09,.11),_);T.position.set(.012,-.11,.06),T.rotation.x=-.3,t.add(T);const E=new K(new It(.078,.022,.045),R);E.position.set(.012,-.085,.045),E.rotation.x=-.3,t.add(E);const P=new K(new It(.08,.075,.1),_);P.position.set(-.015,-.065,-.27),P.rotation.x=-.15,P.rotation.z=.2,t.add(P),t.position.set(.29,-.245,-.46),t.rotation.set(.015,-.035,.006),t.scale.setScalar(.94),this.gunHome=t.position.clone(),this.gunRotHome=t.rotation.clone();const b=new wi(16767152,6,3.2,2);b.position.set(.5,.4,.25),this.camera.add(b),this.ammoLight=v}reset(){this.position.set(0,0,10.5),this.velocity.set(0,0,0),this.yaw=0,this.pitch=0,this.health=this.maxHealth,this.alive=!0,this.ammo=this.magSize,this.reloading=0,this.reloadQueued=!1,this.fireCooldown=0,this.bloom=0,this.ads=!1,this.invuln=0,this.damageTimer=0,this.recoilRecover=0,this.shake=0,this.targetFov=this.baseFov,this.gun.visible=!0,this.gun.position.copy(this.gunHome),this.gun.rotation.copy(this.gunRotHome)}get eyePosition(){return new A(this.position.x,this.position.y+td,this.position.z)}get onLowHealth(){return this.health<=32}addLook(t,e,n=.0022){this.yaw-=t*n,this.pitch-=e*n,this.pitch=kn.clamp(this.pitch,-1.42,1.42)}addShake(t){this.shake=Math.min(1.2,this.shake+t)}muzzleWorldPosition(){const t=new A(0,.02,-.52);return this.gun.localToWorld(t)}canFire(){return this.alive&&!this.reloading&&this.fireCooldown<=0&&this.ammo>0}startReload(){this.reloading||!this.alive||this.ammo===this.magSize||(this.reloading=this.reloadTime,this.reloadQueued=!1,this.audio.reload())}fire(){if(!this.canFire())return null;this.ammo--,this.fireCooldown=1/this.fireRate,this.bloom=Math.min(.02,this.bloom+.0028),this.weaponKick=1,this.muzzleCooldown=.05;const t=.0026+Math.random()*.0024;this.pitch+=t,this.yaw+=(Math.random()-.5)*.0022,this.recoilRecover+=t*.55,this.fx.muzzle(this.muzzleWorldPosition()),this.audio.shot();const e=this.camera.getWorldPosition(new A),n=this.camera.getWorldDirection(new A),i=this.currentSpread;return n.x+=(Math.random()-.5)*i,n.y+=(Math.random()-.5)*i,n.z+=(Math.random()-.5)*i,n.normalize(),this.ammo===0&&(this.reloadQueued=!0),{origin:e,dir:n,ads:this.ads}}get currentSpread(){let e=.0028+Math.min(1,this.velocity.length()/6)*.009+this.bloom;return this.onGround||(e+=.018),this.ads&&(e*=.3),this.sprint&&(e+=.01),e}get crosshairSpread(){return kn.clamp(this.currentSpread*120,2,20)}takeDamage(t,e){!this.alive||this.invuln>0||(this.health-=t,this.damageTimer=0,this.invuln=.08,this.addShake(.35),this.audio.hurt(),this.hooks.onHurt&&this.hooks.onHurt(t,e),this.health<=0&&(this.health=0,this.alive=!1,this.hooks.onDeath&&this.hooks.onDeath()))}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}update(t,e,n){if(!this.alive){this.updateCamera(t,n);return}this.baseFov=this.camera.aspect<.9?83:74,this.invuln=Math.max(0,this.invuln-t),this.fireCooldown=Math.max(0,this.fireCooldown-t),this.muzzleCooldown=Math.max(0,this.muzzleCooldown-t),this.damageTimer+=t,this.bloom=Math.max(0,this.bloom-t*.05),this.shake=Math.max(0,this.shake-t*2.2),this.land=Math.max(0,this.land-t*4),this.damageTimer>5&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+t*7)),e.reload&&this.startReload(),this.reloadQueued&&this.fireCooldown<=0&&this.startReload(),this.reloading>0&&(this.reloading-=t,this.reloading<=0&&(this.reloading=0,this.ammo=this.magSize)),this.addLook(e.lookX||0,e.lookY||0,e.touch?.0032:.0022),this.ads=!!e.aim&&!this.sprint,this.sprint=!!e.sprint&&(e.forward||0)>.2&&!this.ads;const i=new A,r=e.forward||0,a=e.strafe||0;i.x=a,i.z=-r,i.lengthSq()>1&&i.normalize(),i.applyAxisAngle(new A(0,1,0),this.yaw);let o=this.sprint?8:5.2;this.ads&&(o*=.62),this.reloading>0&&(o*=.92);const l=this.onGround?55:15;if(this.velocity.x+=(i.x*o-this.velocity.x)*Math.min(1,l*t),this.velocity.z+=(i.z*o-this.velocity.z)*Math.min(1,l*t),this.onGround&&i.lengthSq()<.01){const u=Math.max(0,1-t*11);this.velocity.x*=u,this.velocity.z*=u}e.jump&&this.onGround&&(this.velocity.y=5.7,this.onGround=!1),this.velocity.y-=18*t,this.position.addScaledVector(this.velocity,t),this.position.y<=0&&(!this.onGround&&this.velocity.y<-4&&(this.land=Math.min(1,-this.velocity.y/9),this.addShake(.18)),this.position.y=0,this.velocity.y=0,this.onGround=!0),this.resolveCollisions();const c=Math.hypot(this.velocity.x,this.velocity.z);this.onGround&&(this.bobTime+=t*c*1.55),this.moveAmount=Math.min(1,c/5.2);const h=this.recoilRecover*Math.min(1,t*8);this.pitch-=h,this.recoilRecover-=h,this.targetFov=this.ads?this.camera.aspect<.9?64:56:this.sprint?79:this.baseFov,this.updateCamera(t,n),this.updateWeapon(t,c)}resolveCollisions(){const t=this.position;t.x=kn.clamp(t.x,-15.4+.7,Nt.halfX-.7),t.z=kn.clamp(t.z,Nt.minZ+.8,Nt.maxZ-.8);for(let e=0;e<2;e++)for(const n of this.world.colliders){if(n.high&&t.y>n.high)continue;const i=n.minX-this.radius,r=n.maxX+this.radius,a=n.minZ-this.radius,o=n.maxZ+this.radius;if(t.x>i&&t.x<r&&t.z>a&&t.z<o){const l=t.x-i,c=r-t.x,h=t.z-a,u=o-t.z,d=Math.min(l,c,h,u);d===l?t.x=i:d===c?t.x=r:d===h?t.z=a:t.z=o}}}updateCamera(t,e){const n=this.camera,i=.028*this.moveAmount*(this.sprint?1.5:1),r=Math.sin(this.bobTime*2)*i,a=Math.cos(this.bobTime)*i*.7,o=Math.sin(e*1.6)*.004,l=this.shake*this.shake,c=(Math.random()-.5)*.05*l,h=(Math.random()-.5)*.05*l;n.position.set(this.position.x+a+c,this.position.y+td+r+o-this.land*.11+h,this.position.z),n.rotation.order="YXZ",n.rotation.y=this.yaw,n.rotation.x=this.pitch+this.land*.05+(Math.random()-.5)*.02*l,n.rotation.z=Math.cos(this.bobTime*1.1)*.006*this.moveAmount;const u=kn.lerp(n.fov,this.targetFov,Math.min(1,t*9));Math.abs(u-n.fov)>.01&&(n.fov=u,n.updateProjectionMatrix())}updateWeapon(t,e){const n=this.gun,i=performance.now()/1e3,r=this.camera.aspect<.9,a=r?.05:.29,o=r?-.17:-.245,l=-.46,c=this.ads?0:r?.22:this.gunRotHome.y;n.scale.setScalar(r?this.ads?.55:.62:.94);const h=new A(a+Math.cos(this.bobTime)*.006*this.moveAmount,o+Math.sin(this.bobTime*2)*.007*this.moveAmount,l);this.ads&&h.set(0,r?-.072:-.112,r?-.55:-.4),n.position.lerp(h,Math.min(1,t*12)),this.weaponKick=Math.max(0,(this.weaponKick||0)-t*10);const u=this.weaponKick;if(n.position.z+=u*.055,n.position.y+=u*.012,n.rotation.x=this.gunRotHome.x-u*.07,this.reloading>0){const d=1-this.reloading/this.reloadTime,f=Math.sin(Math.min(1,d*1.2)*Math.PI);n.position.y-=f*.13,n.rotation.z+=f*.5,n.rotation.x+=f*.35}else n.rotation.z=this.gunRotHome.z+Math.cos(i*.9)*.005,n.rotation.y=c+Math.sin(i*.6)*.004;this.ammoLight&&this.ammoLight.material.color.setHex(this.ammo<=6?16723743:16747050)}}const NM={drone:{name:"SPECTER",hp:38,speed:4.5,score:100,radius:.62,bodyY:.05,headY:.05,coreDamage:3,playerDamage:8,attackRange:2,attackCooldown:.9},raider:{name:"BOARDER",hp:85,speed:2.55,score:220,radius:.55,bodyY:1.05,headY:1.72,coreDamage:4,playerDamage:7,attackRange:15,attackCooldown:2.3},brute:{name:"BREACHER",hp:300,speed:1.7,score:500,radius:.95,bodyY:1.45,headY:2.3,coreDamage:9,playerDamage:17,attackRange:2.8,attackCooldown:1.35}};function FM(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ss(s)}const Mc=FM();function Ga(s,t=.7,e=.4,n=0){return new Se({color:s,metalness:t,roughness:e,emissive:n,emissiveIntensity:.6})}class OM{constructor({type:t,position:e,lane:n,scene:i,fx:r,world:a,audio:o,callbacks:l,wave:c=1}){this.type=t,this.def=NM[t],this.scene=i,this.fx=r,this.world=a,this.audio=o,this.callbacks=l,this.maxHp=this.def.hp*(1+(c-1)*.06),this.hp=this.maxHp,this.speed=this.def.speed*(1+(c-1)*.025),this.radius=this.def.radius,this.alive=!0,this.dying=0,this.state="spawning",this.spawnTimer=.35,this.spawnScale=.01,this.attackTimer=.6+Math.random()*.5,this.hitFlash=0,this.bob=Math.random()*Math.PI*2,this.strafeDir=Math.random()>.5?1:-1,this.lane=n.map(h=>h.clone()),this.laneIndex=0,this.velocity=new A,this.lastCoreHit=0,this.group=new ke,this.group.position.copy(e),this.group.position.y=0,this.group.scale.setScalar(.01),i.add(this.group),this.build(),this.buildHealthBar()}build(){this.flashMats=[];const t=(a,o=!0)=>(this.group.add(a),o&&a.material&&a.material.emissive&&this.flashMats.push(a.material),a),e=(a,o,l,c,h,u=.6)=>{const d=new Un(new bn({map:Mc,color:h,transparent:!0,opacity:u,blending:Ue,depthWrite:!1,toneMapped:!1}));return d.position.set(a,o,l),d.scale.set(c,c,1),this.group.add(d),d},n=Ga(3423295,.45,.5),i=Ga(5661030,.35,.56,1574404),r=Ga(2238764,.6,.4);if(Ga(7016971,.3,.5,9377034),this.type==="drone"){this.group.position.y=1.15;const a=new K(new Wr(.48,0),n);a.scale.set(1,.8,1.15),t(a);for(let u=0;u<4;u++){const d=new K(new It(.72,.055,.18),r);d.position.y=.05,d.rotation.y=u/4*Math.PI*2,d.rotation.z=.18,d.position.x=Math.cos(u/4*Math.PI*2)*.44,d.position.z=Math.sin(u/4*Math.PI*2)*.44,t(d);const f=new K(new wn(.045,6,6),new Qt({color:16722450,toneMapped:!1}));f.position.set(Math.cos(u/4*Math.PI*2)*.8,.08,Math.sin(u/4*Math.PI*2)*.8),this.group.add(f)}const o=new K(new It(.34,.18,.2),r);o.position.set(0,.02,-.4),t(o);const l=new K(new wn(.14,12,8),new Qt({color:16726556,toneMapped:!1}));l.position.set(0,.02,-.5),t(l,!1);const c=new Un(new bn({map:Mc,color:16726556,transparent:!0,opacity:.85,blending:Ue,depthWrite:!1,toneMapped:!1}));c.scale.set(1.6,1.6,1),c.position.copy(l.position),this.group.add(c),this.eyeGlow=c,e(0,-.5,.1,3,16722450,.28),this.spinner=new ke,this.group.add(this.spinner);const h=new K(new as(.56,.022,6,24),r);h.rotation.x=Math.PI/2,this.spinner.add(h),this.barY=1.05}else if(this.type==="raider"){this.legs=[];for(const f of[-1,1]){const m=new ke;m.position.set(f*.17,.82,0);const x=new K(new It(.19,.5,.22),i);x.position.y=-.22,m.add(x);const g=new K(new It(.16,.44,.19),n);g.position.y=-.62,m.add(g);const p=new K(new It(.2,.16,.3),r);p.position.set(0,-.85,-.05),m.add(p),this.group.add(m),this.legs.push(m)}const a=new K(new It(.74,.76,.42),i);a.position.y=1.22,t(a);for(const f of[-1,1]){const m=new K(new It(.28,.22,.4),r);m.position.set(f*.42,1.5,0),m.rotation.z=-f*.2,t(m)}const o=new K(new It(.5,.32,.1),r);o.position.set(0,1.34,-.24),t(o);const l=new K(new It(.3,.04,.02),new Qt({color:16730658,toneMapped:!1}));l.position.set(0,1.34,-.3),this.group.add(l);const c=new K(new wn(.22,12,10),n);c.position.y=1.73,t(c);const h=new K(new It(.34,.09,.1),new Qt({color:16730660,toneMapped:!1}));h.position.set(0,1.75,-.2),this.group.add(h),e(0,1.75,-.26,1.3,16722450,.7),e(0,1.34,-.31,2,16726556,.32);const u=new K(new It(.42,.42,.2),r);u.position.set(0,1.25,.26),t(u);const d=new K(new It(.06,.06,.02),new Qt({color:16726556}));d.position.set(0,1.35,.37),this.group.add(d),this.arms=[];for(const f of[-1,1]){const m=new ke;m.position.set(f*.38,1.44,0);const x=new K(new It(.15,.4,.17),n);x.position.y=-.16,m.add(x);const g=new K(new It(.13,.36,.15),i);if(g.position.set(0,-.48,-.04),m.add(g),this.group.add(m),this.arms.push(m),f>0){const p=new K(new It(.12,.14,.55),r);p.position.set(0,-.62,-.28),m.add(p);const v=new K(new je(.028,.028,.3,8),n);v.rotation.x=Math.PI/2,v.position.set(0,-.6,-.62),m.add(v);const y=new K(new wn(.05,8,6),new Qt({color:16734762}));y.position.set(0,-.6,-.78),m.add(y),this.gunTip=y}}this.barY=2.25}else{this.group.position.y=0,this.legs=[];for(const u of[-1,1]){const d=new ke;d.position.set(u*.28,.95,0);const f=new K(new It(.32,.6,.34),n);f.position.y=-.28,d.add(f);const m=new K(new It(.28,.55,.3),i);m.position.y=-.82,d.add(m);const x=new K(new It(.34,.2,.46),r);x.position.set(0,-1.1,-.08),d.add(x),this.group.add(d),this.legs.push(d)}const a=new K(new It(1,1,.6),i);a.position.y=1.62,t(a);const o=new K(new It(.78,.45,.55),n);o.position.y=1.05,t(o);for(const u of[-1,1]){const d=new K(new It(.34,.4,.52),r);d.position.set(u*.58,1.98,0),d.rotation.z=u*.18,t(d)}const l=new K(new It(.34,.32,.34),n);l.position.y=2.36,t(l);const c=new K(new It(.26,.08,.04),new Qt({color:16722452,toneMapped:!1}));c.position.set(0,2.38,-.18),this.group.add(c),e(0,2.38,-.22,1.15,16722450,.5),e(0,1.68,.34,1.8,16722450,.28);const h=new K(new It(.08,.7,.03),new Qt({color:16722452,toneMapped:!1}));h.position.set(0,1.68,.31),this.group.add(h),this.arms=[];for(const u of[-1,1]){const d=new ke;d.position.set(u*.62,2,0);const f=new K(new It(.28,.55,.3),n);f.position.y=-.24,d.add(f);const m=new K(new It(.26,.55,.28),i);m.position.set(0,-.7,-.04),d.add(m);const x=new K(new It(.34,.32,.36),r);x.position.set(0,-1.02,-.06),d.add(x);const g=new K(new It(.36,.08,.05),new Qt({color:16722452}));g.position.set(0,-.96,-.24),d.add(g),this.group.add(d),this.arms.push(d)}this.barY=2.95}this.group.traverse(a=>{a.isMesh&&(a.castShadow=!1)})}buildHealthBar(){const t=new ke,e=new K(new Re(.9,.09),new Qt({color:1312261,transparent:!0,opacity:.75,depthWrite:!1})),n=new K(new Re(.86,.05),new Qt({color:16734778,transparent:!0,opacity:.9,depthWrite:!1}));n.position.z=.001,t.add(e,n),t.position.set(0,this.barY,0),t.visible=!1,this.group.add(t),this.healthBar={group:t,fill:n}}get bodyCenter(){return new A(this.group.position.x,this.group.position.y+this.def.bodyY,this.group.position.z)}get headCenter(){return new A(this.group.position.x,this.group.position.y+this.def.headY,this.group.position.z)}takeDamage(t,e,n){return this.alive?(this.hp-=t,this.hitFlash=1,this.healthBar.group.visible=!0,this.healthBar.fill.scale.x=Math.max(.01,this.hp/this.maxHp),this.healthBar.fill.position.x=-(1-this.healthBar.fill.scale.x)*.43,this.healthBar.fill.material.color.setHex(e?16765286:16734778),this.audio.hit(),e&&this.audio.headshot(),this.hp<=0?(this.die(n),!0):!1):!1}die(t){this.alive=!1,this.dying=.85,this.healthBar.group.visible=!1,this.audio.kill();const e=this.bodyCenter;this.fx.spawn(e,{count:this.type==="brute"?34:18,speed:this.type==="brute"?8:5.5,color:this.type==="drone"?6488032:16747066,size:4,life:.85,gravity:9,lift:1.5}),this.fx.shockwave(e,this.type==="drone"?4714703:16742970),this.type==="brute"&&(this.audio.explosion(),this.fx.spawn(e,{count:26,speed:11,color:16761962,size:6,life:.6,gravity:5})),this.callbacks.onDeath&&this.callbacks.onDeath(this,t)}update(t,e,n,i){if(this.dying>0){this.dying-=t;const R=Math.max(0,this.dying/.85);this.group.position.y=-(1-R)*1.9,this.group.rotation.z=(1-R)*(this.type==="drone"?2.6:1.2),this.group.rotation.x=(1-R)*.6,this.group.scale.setScalar(Math.max(.01,R)),this.dying<=0&&this.remove();return}if(!this.alive)return;if(this.state==="spawning"){this.spawnTimer-=t;const R=1-Math.max(0,this.spawnTimer)/.35;this.spawnScale=Math.max(.01,1-(1-R)*(1-R)),this.group.scale.setScalar(this.spawnScale),this.spawnTimer<=0&&(this.state="active",this.group.scale.setScalar(1));return}this.hitFlash=Math.max(0,this.hitFlash-t*6);for(const R of this.flashMats)R.emissive.setRGB(this.hitFlash*.9,this.hitFlash*.25,this.hitFlash*.1);this.healthBar.group&&this.healthBar.group.quaternion.copy(this.scene.userData.cameraQuat||new sn);const r=this.group.position,a=n.position,o=Math.hypot(a.x-r.x,a.z-r.z),l=this.type==="brute",c=this.type==="raider";let h,u=!1;if(l?u=o<3.6:c?u=o<16:u=o<9.5,u)h=a;else{if(this.laneIndex<this.lane.length){const R=this.lane[this.laneIndex];Math.hypot(R.x-r.x,R.z-r.z)<1.7&&this.laneIndex++,h=this.lane[Math.min(this.laneIndex,this.lane.length-1)]||ve}h=h||ve,Math.hypot(h.x-r.x,h.z-r.z)<1.6&&(h=ve)}let d=h.x-r.x,f=h.z-r.z,m=Math.hypot(d,f)||1;d/=m,f/=m;let x=this.speed;if(c&&u){if(m<7)d=-d,f=-f;else if(m<12){const T=-f*this.strafeDir,E=d*this.strafeDir;d=T*.75,f=E*.75,x*=.55}if(this.attackTimer<=0&&m<16&&(this.attackTimer=this.def.attackCooldown,this.burstLeft=3,this.burstTimer=0),this.burstLeft>0&&(this.burstTimer-=t,this.burstTimer<=0)){this.burstTimer=.16,this.burstLeft--;const T=this.gunTip?this.gunTip.getWorldPosition(new A):this.bodyCenter,E=new A(a.x,a.y+1.2,a.z);i&&i.spawn(T,E,{damage:this.def.playerDamage,color:16742954}),this.audio.enemyShot(),this.muzzleFlash=.06}}else if(c&&(this.attackTimer<=0&&m<18&&(this.attackTimer=this.def.attackCooldown,this.burstLeft=2,this.burstTimer=0),this.burstLeft>0&&(this.burstTimer-=t,this.burstTimer<=0))){this.burstTimer=.18,this.burstLeft--;const R=this.gunTip?this.gunTip.getWorldPosition(new A):this.bodyCenter,T=new A(ve.x,2.2,ve.z);i&&i.spawn(R,T,{damage:3,color:16753706,core:!0}),this.audio.enemyShot()}if(this.attackTimer>0&&(this.attackTimer-=t),c)m<3.2&&!u&&this.attackTimer<=0&&(this.attackTimer=1.6,this.callbacks.onCoreDamage&&this.callbacks.onCoreDamage(this,2));else{const R=u?a:ve,T=Math.hypot(R.x-r.x,R.z-r.z),E=this.def.attackRange+(u?.4:2.6);T<E&&(x=0,this.attackTimer<=0&&(this.attackTimer=this.def.attackCooldown,u?(n.takeDamage(this.def.playerDamage,r.clone()),this.callbacks.onMelee&&this.callbacks.onMelee(this,this.def.playerDamage,!1),this.fx.spawn(n.eyePosition,{count:6,speed:3,color:16726832,size:2.5,life:.3})):(this.callbacks.onCoreDamage&&this.callbacks.onCoreDamage(this,this.def.coreDamage),this.fx.spawn(new A(ve.x,2.2,ve.z+2.2),{count:12,speed:5,color:16738874,size:4,life:.5}))))}let g=0,p=0;if(this.scene.userData.enemies)for(const R of this.scene.userData.enemies){if(R===this||!R.alive||R.state!=="active")continue;const T=r.x-R.group.position.x,E=r.z-R.group.position.z,P=T*T+E*E,b=(this.radius+R.radius)*1.15;if(P>1e-4&&P<b*b){const S=Math.sqrt(P);g+=T/S*(b-S),p+=E/S*(b-S)}}const v=d*x+g*3,y=f*x+p*3;if(r.x+=v*t,r.z+=y*t,this.type!=="drone")for(const R of this.world.colliders){const T=R.minX-this.radius,E=R.maxX+this.radius,P=R.minZ-this.radius,b=R.maxZ+this.radius;if(r.x>T&&r.x<E&&r.z>P&&r.z<b){const S=r.x-T,L=E-r.x,W=r.z-P,G=b-r.z,O=Math.min(S,L,W,G);O===S?r.x=T:O===L?r.x=E:O===W?r.z=P:r.z=b}}r.x=kn.clamp(r.x,-15.4+.5,Nt.halfX-.5),r.z=kn.clamp(r.z,Nt.minZ+.6,Nt.maxZ-.6);const _=x>.1;if(this.type==="drone")this.bob+=t*4,r.y=1.15+Math.sin(this.bob)*.12,this.group.rotation.y=Math.atan2(-d,-f),this.spinner.rotation.y+=t*9,this.eyeGlow&&(this.eyeGlow.material.opacity=.55+Math.sin(e*6+this.bob)*.2);else{if(this.bob+=t*(_?this.speed*3.4:2),this.legs){const E=_?Math.sin(this.bob)*.55:0;this.legs[0].rotation.x=E,this.legs[1].rotation.x=-E}if(this.arms){const E=_?Math.sin(this.bob)*.22:Math.sin(e*1.8)*.03;this.arms[0].rotation.x=-E,this.arms[1].rotation.x=E}this.type==="brute"&&(this.group.position.y=Math.abs(Math.sin(this.bob))*.06);let T=Math.atan2(-d,-f)-this.group.rotation.y;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;this.group.rotation.y+=T*Math.min(1,t*6)}this.muzzleFlash>0&&(this.muzzleFlash-=t,this.gunTip&&this.gunTip.material.color.setHex(this.muzzleFlash>0?16761962:16734762))}remove(){var e;this.group.removeFromParent();const t=(e=this.scene.userData.enemies)==null?void 0:e.indexOf(this);t!==void 0&&t>=0&&this.scene.userData.enemies.splice(t,1)}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.remove()}}class BM{constructor({scene:t,world:e,fx:n,audio:i}){this.scene=t,this.world=e,this.fx=n,this.audio=i,this.list=[];const r=new wn(.13,10,8);for(let a=0;a<48;a++){const o=new K(r,new Qt({color:16742954,transparent:!0,opacity:1})),l=new Un(new bn({map:Mc,color:16742954,transparent:!0,opacity:.85,blending:Ue,depthWrite:!1}));l.scale.set(.9,.9,1),o.add(l),o.visible=!1,t.add(o),this.list.push({mesh:o,active:!1,dir:new A,speed:0,damage:0,life:0,core:!1,glow:l})}}spawn(t,e,{speed:n=18,damage:i=7,color:r=16742954,core:a=!1}={}){const o=this.list.find(l=>!l.active);o&&(o.active=!0,o.mesh.visible=!0,o.mesh.position.copy(t),o.dir.copy(e).sub(t).normalize(),o.speed=n,o.damage=i,o.life=3.2,o.core=a,o.mesh.material.color.setHex(r),o.glow.material.color.setHex(r))}update(t,e,n,i){for(const r of this.list){if(!r.active)continue;r.life-=t,r.mesh.position.addScaledVector(r.dir,r.speed*t);const a=r.mesh.position;if(Math.random()>.55&&this.fx.spawn(a,{count:1,speed:.4,color:r.mesh.material.color.getHex(),size:2.4,life:.22,gravity:0}),r.life<=0||a.y<.05||Math.abs(a.x)>Nt.halfX||a.z<Nt.minZ||a.z>Nt.maxZ){this.burst(r);continue}if(r.core){if(Math.hypot(a.x-ve.x,a.z-ve.z)<2.4&&a.y<4.8){i&&i(r.damage),this.burst(r);continue}continue}const o=e.position.x,l=e.position.z,c=e.position.y+1;if(e.alive&&Math.hypot(a.x-o,a.z-l)<.62&&Math.abs(a.y-c)<1.1){n&&n(r.damage),this.burst(r);continue}for(const h of this.world.colliders)if(a.x>h.minX&&a.x<h.maxX&&a.z>h.minZ&&a.z<h.maxZ&&a.y<3.6){this.burst(r);break}}}burst(t){t.active=!1,t.mesh.visible=!1;const e=t.mesh.material.color.getHex();this.fx.spawn(t.mesh.position,{count:6,speed:2.5,color:e,size:3,life:.3,gravity:4}),this.fx.impact(t.mesh.position,new A(0,1,0),e)}clear(){for(const t of this.list)t.active=!1,t.mesh.visible=!1}}const Xt=s=>document.getElementById(s);function zM(s={}){const t={menu:Xt("menu"),hud:Xt("hud"),pause:Xt("pause"),end:Xt("end"),start:Xt("start-btn"),resume:Xt("resume-btn"),restart:Xt("restart-btn"),redeploy:Xt("redeploy-btn"),menuBtn:Xt("menu-btn"),mute:Xt("mute-btn"),waveNum:Xt("wave-num"),score:Xt("score"),coreFill:Xt("core-fill"),coreNum:Xt("core-num"),objective:Xt("objective-text"),healthFill:Xt("health-fill"),healthNum:Xt("health-num"),healthState:Xt("health-state"),ammoMag:Xt("ammo-mag"),ammoRes:Xt("ammo-res"),ammoPips:Xt("ammo-pips"),reloadHint:Xt("reload-hint"),weaponName:Xt("weapon-name"),feed:Xt("killfeed"),threat:Xt("threat"),crosshair:Xt("crosshair"),hitmarker:Xt("hitmarker"),damage:Xt("damage-indicator"),banner:Xt("banner"),bannerTitle:Xt("banner-title"),bannerSub:Xt("banner-sub"),toast:Xt("toast"),pointerHint:Xt("pointer-hint"),minimap:Xt("minimap"),touch:Xt("touch"),stickZone:Xt("stick-zone"),stickKnob:Xt("stick-knob"),fire:Xt("btn-fire"),aim:Xt("btn-aim"),reload:Xt("btn-reload"),jump:Xt("btn-jump"),best:Xt("best-score"),danger:Xt("danger-flash"),rotate:Xt("rotate-hint"),endEyebrow:Xt("end-eyebrow"),endTitle:Xt("end-title"),endCopy:Xt("end-copy"),endStats:Xt("end-stats"),menuHostiles:Xt("menu-hostiles")},e=t.minimap.getContext("2d"),n=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||window.innerWidth<760;document.body.classList.toggle("touch-mode",n);let i=null,r=null,a=null,o=-1;const l=[];for(let N=0;N<30;N++){const _t=document.createElement("i");t.ammoPips.appendChild(_t),l.push(_t)}const c=Number(localStorage.getItem("bulwark-best")||0);t.best.textContent=String(c).padStart(6,"0"),t.start.addEventListener("click",()=>{var N;return(N=s.onStart)==null?void 0:N.call(s)}),t.resume.addEventListener("click",()=>{var N;return(N=s.onResume)==null?void 0:N.call(s)}),t.restart.addEventListener("click",()=>{var N;return(N=s.onRestart)==null?void 0:N.call(s)}),t.redeploy.addEventListener("click",()=>{var N;return(N=s.onRedeploy)==null?void 0:N.call(s)}),t.menuBtn.addEventListener("click",()=>{var N;return(N=s.onMenu)==null?void 0:N.call(s)}),t.mute.addEventListener("click",()=>{var N;return(N=s.onMute)==null?void 0:N.call(s)});function h(N){t.menu.classList.toggle("hidden",!N)}function u(N){t.hud.classList.toggle("hidden",!N)}function d(N){t.pause.classList.toggle("hidden",!N)}function f(N){t.touch.classList.toggle("hidden",!N||!n)}function m(N){t.pointerHint.classList.toggle("hidden",!N)}function x(N){t.waveNum.textContent=String(N).padStart(2,"0")}function g(N){t.score.textContent=String(Math.floor(N)).padStart(6,"0")}function p(N,_t){t.coreFill.style.width=`${Math.max(0,N)*100}%`,t.coreFill.classList.toggle("warn",N<=.6&&N>.3),t.coreFill.classList.toggle("critical",N<=.3),t.coreNum.textContent=String(Math.max(0,Math.ceil(_t)))}function v(N,_t){const q=Math.max(0,N/_t);t.healthFill.style.width=`${q*100}%`,t.healthFill.classList.toggle("low",q<=.32),t.healthNum.textContent=String(Math.max(0,Math.ceil(N))),t.healthState.textContent=q<=.32?"CRITICAL":q<=.65?"WOUNDED":"STABLE"}function y(N,_t){t.ammoMag.textContent=String(N).padStart(2,"0"),t.ammoMag.classList.toggle("low",N<=6),t.ammoRes.textContent="∞",t.reloadHint.classList.toggle("hidden",!_t),N!==o&&(l.forEach((q,j)=>q.classList.toggle("spent",j>=N)),o=N)}function _(N){t.objective.textContent=N}function R(N){N<=0?(t.threat.textContent="CLEAR",t.threat.classList.remove("hot")):(t.threat.textContent=`${String(N).padStart(2,"0")} HOSTILE${N>1?"S":""}`,t.threat.classList.add("hot"))}function T(N,_t,{danger:q=!1,duration:j=2400}={}){clearTimeout(i),t.bannerTitle.textContent=N,t.bannerSub.textContent=_t,t.banner.classList.toggle("danger",q),t.banner.classList.add("show"),i=setTimeout(()=>t.banner.classList.remove("show"),j)}function E(){clearTimeout(i),t.banner.classList.remove("show")}function P(N,_t=1700){clearTimeout(r),t.toast.textContent=N,t.toast.classList.add("show"),r=setTimeout(()=>t.toast.classList.remove("show"),_t)}function b(N,_t=""){const q=document.createElement("div");for(q.className=`feed-item ${_t}`,q.innerHTML=N,t.feed.appendChild(q);t.feed.children.length>4;)t.feed.firstChild.remove();setTimeout(()=>q.remove(),4200)}function S(N=!1){t.hitmarker.classList.remove("show","kill"),t.hitmarker.offsetWidth,t.hitmarker.classList.toggle("kill",N),t.hitmarker.classList.add("show")}function L(N,_t,q){const j=N.x-_t.x,I=N.z-_t.z,Lt=-Math.sin(q),ht=-Math.cos(q),pt=Math.cos(q),ct=-Math.sin(q),Ot=j*Lt+I*ht,St=j*pt+I*ct,C=Math.atan2(St,Ot)*180/Math.PI;t.damage.style.transform=`rotate(${C}deg)`,t.damage.classList.add("show"),clearTimeout(a),a=setTimeout(()=>t.damage.classList.remove("show"),520),t.danger.classList.add("hit"),setTimeout(()=>t.danger.classList.remove("hit"),90)}function W(N,_t,q){t.crosshair.style.setProperty("--spread",`${N.toFixed(1)}px`),t.crosshair.classList.toggle("enemy",!!_t),t.crosshair.style.opacity=q?"0.25":"0.92"}function G(N){const I=Math.min(188/(Nt.halfX*2),188/(Nt.maxZ-Nt.minZ)),Lt=220/2,ht=220/2,pt=k=>Lt+k*I,ct=k=>ht+k*I;e.clearRect(0,0,220,220),e.fillStyle="#04090b",e.fillRect(0,0,220,220),e.strokeStyle="rgba(90,140,150,0.11)",e.lineWidth=1;for(let k=-15;k<=15;k+=5)e.beginPath(),e.moveTo(pt(k),ct(Nt.minZ)),e.lineTo(pt(k),ct(Nt.maxZ)),e.stroke();for(let k=-20;k<=20;k+=5)e.beginPath(),e.moveTo(pt(-15.4),ct(k)),e.lineTo(pt(Nt.halfX),ct(k)),e.stroke();e.strokeStyle="rgba(130,190,200,0.45)",e.lineWidth=2,e.strokeRect(pt(-15.4),ct(Nt.minZ),Nt.halfX*2*I,(Nt.maxZ-Nt.minZ)*I),e.fillStyle="rgba(90,130,140,0.18)",e.fillRect(pt(-15.4+1.1),ct(Nt.minZ),2.4*I,(Nt.maxZ-Nt.minZ)*I),e.fillRect(pt(Nt.halfX-3.5),ct(Nt.minZ),2.4*I,(Nt.maxZ-Nt.minZ)*I);for(const k of N.colliders)k.tag!=="core"&&(e.fillStyle=k.tag==="crate"?"rgba(160,175,170,0.22)":"rgba(120,140,145,0.15)",e.strokeStyle="rgba(160,200,205,0.3)",e.lineWidth=1,e.fillRect(pt(k.minX),ct(k.minZ),(k.maxX-k.minX)*I,(k.maxZ-k.minZ)*I),e.strokeRect(pt(k.minX),ct(k.minZ),(k.maxX-k.minX)*I,(k.maxZ-k.minZ)*I));const Ot=N.coreRatio;e.beginPath(),e.arc(pt(ve.x),ct(ve.z),Math.max(5,ve.radius*I),0,Math.PI*2),e.fillStyle=Ot>.3?"rgba(71,240,207,0.22)":"rgba(255,59,48,0.3)",e.fill(),e.strokeStyle=Ot>.3?"rgba(71,240,207,0.95)":"rgba(255,59,48,1)",e.lineWidth=2,e.stroke(),e.fillStyle=Ot>.3?"#47f0cf":"#ff3b30",e.font="bold 8px monospace",e.textAlign="center",e.fillText("CORE",pt(ve.x),ct(ve.z)+2.5);for(const k of N.spawns)e.save(),e.translate(pt(k.position.x),ct(k.position.z)),e.rotate(Math.atan2(ve.z-k.position.z,ve.x-k.position.x)+Math.PI/2),e.fillStyle="rgba(255,59,48,0.55)",e.beginPath(),e.moveTo(0,-4),e.lineTo(3,3),e.lineTo(-3,3),e.closePath(),e.fill(),e.restore();const St=N.player,C=N.yaw,M=Math.atan2(-Math.cos(C),-Math.sin(C));e.save(),e.translate(pt(St.x),ct(St.z)),e.rotate(M+Math.PI/2);const H=e.createLinearGradient(0,0,0,-34);H.addColorStop(0,"rgba(121,242,154,0.28)"),H.addColorStop(1,"rgba(121,242,154,0)"),e.fillStyle=H,e.beginPath(),e.moveTo(0,0),e.lineTo(19,-34),e.lineTo(-19,-34),e.closePath(),e.fill(),e.restore();for(const k of N.enemies){if(!k.alive)continue;const st=pt(k.group.position.x),tt=ct(k.group.position.z),Dt=k.type==="brute"?3.6:k.type==="raider"?2.6:2;e.beginPath(),e.arc(st,tt,Dt,0,Math.PI*2),e.fillStyle=k.type==="brute"?"#ff3b30":k.type==="raider"?"#ff8a3a":"#ffb347",e.fill()}e.save(),e.translate(pt(St.x),ct(St.z)),e.rotate(M+Math.PI/2),e.fillStyle="#d9ffed",e.beginPath(),e.moveTo(0,-5),e.lineTo(4,4),e.lineTo(0,2),e.lineTo(-4,4),e.closePath(),e.fill(),e.restore(),e.fillStyle="rgba(160,200,210,0.5)",e.font="8px monospace",e.textAlign="left",e.fillText("N",6,12)}function O(N,_t){t.end.classList.toggle("win",N),t.end.classList.remove("hidden"),t.endEyebrow.textContent=N?"TRANSMISSION RESTORED":"TRANSMISSION ENDED",t.endTitle.textContent=N?"BAY HELD":"CORE LOST",t.endCopy.textContent=N?"Transport 09 is still breathing. Command is calling it a miracle. You call it a Tuesday.":"The reactor is dark. Boarders own the cargo bay, and the manifest is now theirs.",t.endStats.innerHTML=[["SCORE",String(_t.score).padStart(6,"0")],["KILLS",_t.kills],["ACCURACY",`${_t.accuracy}%`],["WAVES",`${_t.waves}/5`],["HEADSHOTS",_t.headshots],["TIME",_t.time]].map(([q,j])=>`<div class="stat"><b>${j}</b><span>${q}</span></div>`).join("")}function U(){t.end.classList.add("hidden")}function F(N){t.mute.textContent=`SOUND: ${N?"OFF":"ON"}`}function Y(N){N>Number(localStorage.getItem("bulwark-best")||0)&&(localStorage.setItem("bulwark-best",String(N)),t.best.textContent=String(Math.floor(N)).padStart(6,"0"))}function X(N){t.menuHostiles.textContent=N>0?`${String(N).padStart(2,"0")} BOARDERS`:"UNKNOWN"}const it={moveX:0,moveY:0,lookX:0,lookY:0,fire:!1,aim:!1,jump:!1,reload:!1};let Mt=null,Et=null,Vt=null;const Kt={x:0,y:0};function Q(N){let q=N.clientX-Kt.x,j=N.clientY-Kt.y;const I=Math.hypot(q,j)||1,Lt=Math.min(I,46);q=q/I*Lt,j=j/I*Lt,t.stickKnob.style.transform=`translate(${q}px, ${j}px)`,it.moveX=q/46,it.moveY=-j/46}function lt(){Mt=null,it.moveX=0,it.moveY=0,t.stickKnob.style.transform="translate(0px, 0px)"}t.stickZone.addEventListener("pointerdown",N=>{if(Mt!==null)return;Mt=N.pointerId,t.stickZone.setPointerCapture(N.pointerId);const _t=t.stickZone.getBoundingClientRect();Kt.x=_t.left+_t.width/2,Kt.y=_t.top+_t.height/2,Q(N),N.preventDefault()}),t.stickZone.addEventListener("pointermove",N=>{N.pointerId===Mt&&(Q(N),N.preventDefault())});const mt=N=>{N.pointerId===Mt&&lt()};t.stickZone.addEventListener("pointerup",mt),t.stickZone.addEventListener("pointercancel",mt);function dt(N,_t){N.addEventListener("pointerdown",j=>{N.classList.add("active"),N.setPointerCapture(j.pointerId),it[_t]=!0,j.preventDefault()});const q=()=>{N.classList.remove("active"),_t!=="jump"&&(it[_t]=!1)};N.addEventListener("pointerup",q),N.addEventListener("pointercancel",q),N.addEventListener("pointerleave",()=>{_t!=="jump"&&q()})}dt(t.fire,"fire"),dt(t.aim,"aim"),dt(t.jump,"jump"),t.reload.addEventListener("pointerdown",N=>{it.reload=!0,t.reload.classList.add("active"),setTimeout(()=>t.reload.classList.remove("active"),120),N.preventDefault()});const Pt=Xt("scene");Pt.addEventListener("pointerdown",N=>{!n||Et!==null||N.clientX<window.innerWidth*.35||(Et=N.pointerId,Vt={x:N.clientX,y:N.clientY},Pt.setPointerCapture(N.pointerId))}),Pt.addEventListener("pointermove",N=>{if(!n||N.pointerId!==Et||!Vt)return;const _t=N.clientX-Vt.x,q=N.clientY-Vt.y;Vt={x:N.clientX,y:N.clientY},it.lookX+=_t*1.15,it.lookY+=q*1.15});const Ht=N=>{N.pointerId===Et&&(Et=null,Vt=null)};return Pt.addEventListener("pointerup",Ht),Pt.addEventListener("pointercancel",Ht),{el:t,touchMode:n,input:it,showMenu:h,showHud:u,showPause:d,showTouch:f,showPointerHint:m,setWave:x,setScore:g,setCore:p,setHealth:v,setAmmo:y,setObjective:_,setThreat:R,banner:T,hideBanner:E,toast:P,feed:b,hitmarker:S,damageFrom:L,setSpread:W,drawMinimap:G,showEnd:O,hideEnd:U,setMuted:F,setBest:Y,setMenuHostiles:X,resetTouch(){it.moveX=0,it.moveY=0,it.lookX=0,it.lookY=0,it.fire=!1,it.aim=!1,it.jump=!1,it.reload=!1,lt(),t.stickKnob.style.transform="translate(0px, 0px)"}}}const si=document.getElementById("scene"),ed=new ah,tp={1:{drone:7,raider:0,brute:0,sub:"BOARDING PARTY INBOUND"},2:{drone:8,raider:4,brute:0,sub:"ARMED BOARDERS DETECTED"},3:{drone:9,raider:5,brute:1,sub:"HEAVY BREACH UNIT ON DECK"},4:{drone:10,raider:6,brute:2,sub:"MULTIPLE HULL BREACHES"},5:{drone:12,raider:8,brute:3,sub:"FINAL ASSAULT // HOLD THE LINE"}};let xn,Pe,Le,nn,En,un,Jt,ft,Fo;const Tn=[],nt={state:"menu",phase:"idle",wave:0,score:0,kills:0,headshots:0,shots:0,hits:0,coreHealth:120,maxCore:120,queue:[],spawnTimer:0,spawnInterval:.8,intermission:0,elapsed:0,active:!1,best:0},$t={forward:0,strafe:0,jump:!1,sprint:!1,fire:!1,aim:!1,reload:!1,lookX:0,lookY:0};let Ps=!1,rc=0;function ep(s,t){try{return localStorage.getItem(s)??t}catch{return t}}function kM(){xn=new uf({canvas:si,antialias:!0,powerPreference:"high-performance"}),xn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),xn.setSize(window.innerWidth,window.innerHeight),xn.outputColorSpace=Ne,xn.toneMapping=wc,xn.toneMappingExposure=1.3,Pe=new jo,Pe.background=new Tt(330252),Pe.fog=new Hr(660504,.017),Pe.userData.enemies=Tn,Le=new He(74,window.innerWidth/window.innerHeight,.05,140),Le.position.set(6,3.2,17),Pe.add(Le);const s=new Po(xn);Pe.environment=s.fromScene(new bM,.04).texture,Pe.environmentIntensity=.2,s.dispose(),Pe.add(new nh(8299442,1054233,.8)),Pe.add(new sh(3360076,.45));const t=new No(16758903,.85);t.position.set(7,12,9),Pe.add(t);const e=new No(7911112,.48);e.position.set(-9,7,-8),Pe.add(e),nn=RM(Pe),En=PM(Pe),un=LM(),Fo=new BM({scene:Pe,world:nn,fx:En,audio:un}),ft=zM({onStart:qa,onResume:ap,onRestart:qa,onRedeploy:qa,onMenu:ZM,onMute:op}),Jt=new UM({camera:Le,world:nn,fx:En,audio:un,hooks:{onHurt:(n,i)=>{ft.setHealth(Jt.health,Jt.maxHealth),ft.damageFrom(i,Jt.position,Jt.yaw),Jt.health<=0},onDeath:()=>fh("operator")}}),Jt.gun.visible=!1,ft.setHealth(Jt.health,Jt.maxHealth),ft.setAmmo(Jt.ammo,!1),ft.setCore(1,nt.coreHealth),ft.setMenuHostiles(0),ft.showHud(!1),ft.showTouch(!1),VM(),window.addEventListener("resize",JM),document.addEventListener("visibilitychange",()=>{document.hidden&&nt.state==="playing"&&Ya()}),nt.best=Number(ep("bulwark-best",0)),ft.setBest(nt.best),HM()&&requestAnimationFrame(hp)}function HM(){try{return!!xn}catch(s){return console.error(s),!1}}function VM(){window.addEventListener("keydown",s=>{if(!s.repeat)switch(s.code){case"KeyW":case"ArrowUp":$t.forward=1;break;case"KeyS":case"ArrowDown":$t.forward=-1;break;case"KeyA":case"ArrowLeft":$t.strafe=-1;break;case"KeyD":case"ArrowRight":$t.strafe=1;break;case"ShiftLeft":case"ShiftRight":$t.sprint=!0;break;case"Space":$t.jump=!0,s.preventDefault();break;case"KeyR":$t.reload=!0;break;case"Escape":nt.state==="playing"?Ya():nt.state==="paused"&&ap();break;case"KeyM":op();break}}),window.addEventListener("keyup",s=>{switch(s.code){case"KeyW":case"ArrowUp":$t.forward>0&&($t.forward=0);break;case"KeyS":case"ArrowDown":$t.forward<0&&($t.forward=0);break;case"KeyA":case"ArrowLeft":$t.strafe<0&&($t.strafe=0);break;case"KeyD":case"ArrowRight":$t.strafe>0&&($t.strafe=0);break;case"ShiftLeft":case"ShiftRight":$t.sprint=!1;break;case"Space":$t.jump=!1;break}}),window.addEventListener("blur",()=>{$t.forward=$t.strafe=0,$t.fire=$t.aim=!1,nt.state==="playing"&&Ya()}),si.addEventListener("mousedown",s=>{nt.state==="playing"&&(ft.touchMode||(Ps||Oo(),s.button===0&&($t.fire=!0),s.button===2&&($t.aim=!0)))}),window.addEventListener("mouseup",s=>{s.button===0&&($t.fire=!1),s.button===2&&($t.aim=!1)}),window.addEventListener("contextmenu",s=>s.preventDefault()),document.addEventListener("mousemove",s=>{nt.state==="playing"&&document.pointerLockElement===si&&($t.lookX+=s.movementX||0,$t.lookY+=s.movementY||0)}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===si?(Ps=!0,ft.showPointerHint(!1)):Ps&&nt.state==="playing"&&!ft.touchMode&&(Ps=!1,Ya())}),document.addEventListener("pointerlockerror",()=>{nt.state==="playing"&&!ft.touchMode&&ft.showPointerHint(!0)}),si.addEventListener("click",()=>{nt.state==="playing"&&!ft.touchMode&&!Ps&&Oo()})}function Oo(){var s;if(!ft.touchMode)try{const t=(s=si.requestPointerLock)==null?void 0:s.call(si);t&&t.catch&&t.catch(()=>{})}catch{}}function nd(){const s=ft.input;let t=$t.forward+s.moveY,e=$t.strafe+s.moveX;const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{forward:t,strafe:e,jump:$t.jump||s.jump,sprint:$t.sprint,fire:$t.fire||s.fire,aim:$t.aim||s.aim,reload:$t.reload||s.reload,lookX:$t.lookX+s.lookX,lookY:$t.lookY+s.lookY,touch:ft.touchMode}}function id(){$t.lookX=0,$t.lookY=0,$t.reload=!1,ft.input.lookX=0,ft.input.lookY=0,ft.input.reload=!1,ft.input.jump=!1}function qa(){un.init(),np(),ft.showMenu(!1),ft.hideEnd(),ft.showPause(!1),ft.showHud(!0),ft.showTouch(!0),ft.showPointerHint(!1),ft.el.feed.innerHTML="",Jt.gun.visible=!0,nt.state="playing",nt.phase="active",Oo(),uh(1,.05)}function np(){for(const s of[...Tn])s.dispose();Tn.length=0,Fo.clear(),Jt.reset(),$t.forward=$t.strafe=0,$t.fire=$t.aim=!1,$t.reload=!1,ft.resetTouch(),ft.hideBanner(),nt.wave=0,nt.score=0,nt.kills=0,nt.headshots=0,nt.shots=0,nt.hits=0,nt.coreHealth=nt.maxCore,nt.queue=[],nt.waveSpawned=0,nt.spawnTimer=0,nt.intermission=0,nt.elapsed=0,nt.phase="active",nn.setCoreHealth(1),ft.setWave(0),ft.setScore(0),ft.setCore(1,nt.coreHealth),ft.setHealth(Jt.health,Jt.maxHealth),ft.setAmmo(Jt.ammo,!1),ft.setThreat(0),ft.setMenuHostiles(0)}function uh(s,t=1.4){nt.wave=s,nt.phase="active",nt.waveSpawned=0,nt.queue=GM(s),nt.spawnInterval=Math.max(.34,.78-s*.07),nt.spawnTimer=t,ft.setWave(s),ft.setObjective("DEFEND THE REACTOR CORE");const e=tp[s];ft.banner(`WAVE ${String(s).padStart(2,"0")}`,e.sub,{danger:s>=4,duration:s===1?4200:2500}),ft.setThreat(nt.queue.length),un.wave()}function GM(s){const t=tp[s],e=[];for(let n=0;n<t.drone;n++)e.push("drone");for(let n=0;n<t.raider;n++)e.push("raider");for(let n=0;n<t.brute;n++)e.push("brute");for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}for(let n=0;n<3;n++)if(e[n]==="brute"){const i=e.findIndex((r,a)=>a>4&&r!=="brute");i>0&&([e[n],e[i]]=[e[i],e[n]])}return e}function ip(s){const t=nt.waveSpawned===0?0:nt.waveSpawned===1?1:Math.floor(Math.random()*nn.spawns.length),e=nn.spawns[t],r=(nt.waveSpawned<2?e.lane[Math.min(1,e.lane.length-1)]:e.position).clone();r.x+=(Math.random()-.5)*1.1,r.z+=(Math.random()-.5)*1.1,nt.waveSpawned++;const a=e.lane.map(c=>c.clone());a.forEach(c=>{c.x+=(Math.random()-.5)*1.4,c.z+=(Math.random()-.5)*1.4});const o=new OM({type:s,position:r,lane:a,scene:Pe,fx:En,world:nn,audio:un,wave:nt.wave,callbacks:{onDeath:qM,onCoreDamage:dh,onMelee:()=>{}}});Tn.push(o);const l=r.clone().setY(1.6);En.spawn(l,{count:10,speed:5,color:16726556,size:3.4,life:.55,gravity:2}),En.shockwave(r.clone().setY(.06),16726556),un.spawn()}function WM(s){if(nt.phase==="intermission"){nt.intermission-=s;const e=Math.max(0,Math.ceil(nt.intermission));ft.setObjective(`REACTOR REPAIRS // NEXT WAVE IN ${e}`),nt.intermission<=0&&uh(nt.wave+1,.2);return}if(nt.phase!=="active")return;nt.queue.length>0&&(nt.spawnTimer-=s,nt.spawnTimer<=0&&(ip(nt.queue.shift()),nt.spawnTimer=nt.spawnInterval*(.7+Math.random()*.7)));const t=nt.queue.length+Tn.filter(e=>e.alive).length;ft.setThreat(t),t===0&&nt.phase==="active"&&XM()}function XM(){const s=1e3*nt.wave;if(nt.score+=s,ft.setScore(nt.score),nt.coreHealth=Math.min(nt.maxCore,nt.coreHealth+12),nn.setCoreHealth(nt.coreHealth/nt.maxCore),ft.setCore(nt.coreHealth/nt.maxCore,nt.coreHealth),Jt.heal(25),ft.setHealth(Jt.health,Jt.maxHealth),un.clear(),nt.wave>=5){sp();return}nt.phase="intermission",nt.intermission=5,nt.spawnTimer=0,ft.banner("WAVE CLEARED",`+${s} PTS // REACTOR PATCHED`,{duration:2400}),ft.toast("AMMO RESUPPLIED — CORE REPAIRED +12")}function qM(s){nt.kills++;const t=s.headshotKill,e=s.def.score+(t?100:0);nt.score+=e,ft.setScore(nt.score),ft.hitmarker(!0),ft.feed(`<b>${s.def.name}</b> ${t?"HEADSHOT":"ELIMINATED"} <span class="dim">+${e}</span>`,t?"head":""),s.headshotKill=!1}function dh(s,t){if(nt.state!=="playing"||nt.phase!=="active")return;nt.coreHealth-=t;const e=Math.max(0,nt.coreHealth/nt.maxCore);nn.setCoreHealth(e),ft.setCore(e,nt.coreHealth),ft.feed(`CORE HIT <span class="dim">-${t}</span>`,"core"),un.coreHit(),Jt.addShake(.22),nt.coreHealth<=0&&fh("core")}function sp(){nt.state="over",nt.phase="won",ft.setThreat(0),ft.showTouch(!1),un.win(),rp(),ft.banner("BAY HELD","ALL BOARDING WAVES REPELLED",{duration:2600}),setTimeout(()=>{ft.showEnd(!0,ph()),ft.showHud(!1)},650),gl()}function fh(s){if(nt.state==="over")return;nt.state="over",nt.phase="lost",ft.showTouch(!1),un.lose(),rp();const t=s==="core"?"The reactor went critical.":"Operator down.";ft.banner(s==="core"?"CORE LOST":"OPERATOR DOWN",t,{danger:!0,duration:2600}),setTimeout(()=>{ft.showEnd(!1,ph()),ft.showHud(!1)},900),gl()}function ph(){return{score:nt.score,kills:nt.kills,headshots:nt.headshots,accuracy:nt.shots?Math.round(nt.hits/nt.shots*100):0,waves:nt.wave,time:YM(nt.elapsed)}}function YM(s){const t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${String(e).padStart(2,"0")}`}function rp(){if(nt.score>Number(ep("bulwark-best",0))){try{localStorage.setItem("bulwark-best",String(nt.score))}catch{}ft.setBest(nt.score)}}function Ya(){nt.state==="playing"&&(nt.state="paused",$t.fire=$t.aim=!1,ft.input.fire=ft.input.aim=!1,ft.showPause(!0),ft.showPointerHint(!1),gl())}function ap(){nt.state==="paused"&&(nt.state="playing",ft.showPause(!1),Oo())}function ZM(){nt.state="menu",nt.phase="idle",np(),ft.hideEnd(),ft.showPause(!1),ft.showHud(!1),ft.showTouch(!1),ft.showMenu(!0),ft.setMenuHostiles(0),ft.showPointerHint(!1),Jt.gun.visible=!1,gl(),Le.fov=74,Le.updateProjectionMatrix()}function gl(){var s;Ps=!1,document.pointerLockElement===si&&((s=document.exitPointerLock)==null||s.call(document))}function op(){const s=!un.muted;un.setMuted(s),ft.setMuted(s)}const ac=new Qf;function sd(s,t,e,n){const i=e.x-s.x,r=e.y-s.y,a=e.z-s.z,o=i*t.x+r*t.y+a*t.z;if(o<0)return null;const l=i*i+r*r+a*a-o*o,c=n*n;return l>c?null:o-Math.sqrt(c-l)}function lp(s,t){ac.set(s,t),ac.far=80;const e=ac.intersectObjects(nn.solids,!1);return e.length?e[0]:null}function Sc(s,t){const e=lp(s,t),n=e?e.distance:1/0;let i=null;for(const r of Tn){if(!r.alive||r.state!=="active")continue;const a=r.radius*(r.type==="drone"?1:.95),o=sd(s,t,r.bodyCenter,a),l=sd(s,t,r.headCenter,r.type==="brute"?.46:.34);o!==null&&o<n&&(!i||o<i.t)&&(i={enemy:r,t:o,head:!1,point:s.clone().addScaledVector(t,o)}),l!==null&&l<n&&(!i||l<i.t)&&(i={enemy:r,t:l,head:!0,point:s.clone().addScaledVector(t,l)})}return{hit:i,wall:e,wallT:n}}function cp(s){nt.shots++;const t=s.origin,e=s.dir;let n=Sc(t,e);if(!n.hit&&ft.touchMode){let o=null,l=.05;for(const c of Tn){if(!c.alive||c.state!=="active")continue;const h=c.bodyCenter.clone().sub(t),u=h.length();if(u>30)continue;h.normalize();const d=Math.acos(kn.clamp(h.dot(e),-1,1));if(d<l){const f=lp(t,h);(!f||f.distance>u)&&(l=d,o=c)}}if(o){const c=o.bodyCenter.clone().sub(t).normalize();n=Sc(t,c),n.hit||(n={hit:{enemy:o,head:!1,t:0,point:o.bodyCenter.clone()},wall:n.wall,wallT:n.wallT})}}const i=Jt.muzzleWorldPosition();let r,a=!1;if(n.hit){const{enemy:o,head:l,point:c}=n.hit,h=l?62:26;o.headshotKill=l;const u=o.takeDamage(h,l,e);nt.hits++,a=!0,r=c,En.impact(c,e.clone().negate(),l?16765286:16742970),ft.hitmarker(u),l&&nt.headshots++,ft.setScore(nt.score)}else if(n.wall){r=n.wall.point;let o=e.clone().negate();n.wall.face&&(o=n.wall.face.normal.clone().transformDirection(n.wall.object.matrixWorld)),En.impact(r,o,16760944)}else r=t.clone().addScaledVector(e,60);En.tracer(i,r,a?16767392:16756838,.055),ft.setSpread(Jt.crosshairSpread,!!n.hit,Jt.ads)}function hp(){requestAnimationFrame(hp);const s=Math.min(.05,ed.getDelta()),t=ed.elapsedTime;if(nt.state==="menu"){$M(t),nn.update(s,t),En.update(s),Pe.userData.cameraQuat=Le.quaternion,xn.render(Pe,Le);return}if(nt.state==="playing"){nt.elapsed+=s;const e=nd();if(Jt.update(s,e,t),e.fire){const a=Jt.fire();a?cp(a):Jt.ammo===0&&!Jt.reloading?Jt.startReload():Jt.ammo===0&&un.empty()}id(),WM(s);for(let a=Tn.length-1;a>=0;a--)Tn[a]&&Tn[a].update(s,t,Jt,Fo);Fo.update(s,Jt,a=>{Jt.alive&&Jt.takeDamage(a,Jt.position.clone())},a=>{dh(null,a)}),ft.setHealth(Jt.health,Jt.maxHealth),ft.setAmmo(Jt.ammo,Jt.reloading>0&&Jt.ammo<Jt.magSize);const n=Le.getWorldDirection(new A),i=Le.getWorldPosition(new A),r=Sc(i,n);ft.setSpread(Jt.crosshairSpread,!!r.hit,Jt.ads),rc+=s,rc>.08&&(rc=0,ft.drawMinimap({player:Jt.position,yaw:Jt.yaw,enemies:Tn,colliders:nn.colliders,spawns:nn.spawns,coreRatio:nt.coreHealth/nt.maxCore}))}else Jt.update(s*0,nd(),t),id();nn.update(s,t),En.update(s),Pe.userData.cameraQuat=Le.quaternion,xn.render(Pe,Le)}function $M(s){const t=Math.sin(s*.11);Le.position.set(4.9+t*1,2.55+Math.sin(s*.07)*.18,4.2-t*.7),Le.lookAt(-.4+t*.3,2.5,-13.6),Le.fov!==70&&(Le.fov=70,Le.updateProjectionMatrix())}function JM(){if(!xn)return;Le.aspect=window.innerWidth/window.innerHeight,Le.updateProjectionMatrix(),xn.setSize(window.innerWidth,window.innerHeight);const s=Math.min(window.devicePixelRatio||1,1.75);xn.setPixelRatio(s),En.setPixelRatio(s)}window.addEventListener("error",s=>{const t=document.getElementById("boot-error");!t||nt.state!=="menu"||(t.classList.remove("hidden"),t.textContent=`SYSTEM FAULT — ${s.message||"unable to start renderer"}`)});try{kM()}catch(s){console.error(s);const t=document.getElementById("boot-error");t&&(t.classList.remove("hidden"),t.textContent="SYSTEM FAULT — WebGL could not start on this device.")}new URLSearchParams(location.search).has("debug")&&(window.__bulwark={game:nt,enemies:Tn,player:Jt,world:nn,camera:Le,scene:Pe,ui:ft,startGame:qa,beginWave:uh,spawnEnemy:ip,handleShot:cp,handleCoreDamage:dh,winGame:sp,loseGame:fh,stats:ph,THREE:SM});
