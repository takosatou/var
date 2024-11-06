var Ty=Object.defineProperty;var qy=(o,t,i)=>t in o?Ty(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var ct=(o,t,i)=>qy(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))E(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&E(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function E(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="170",_y=0,Ll=1,Wy=2,Ld=1,Py=2,jB=3,FC=0,ri=1,yB=2,SC=0,wQ=1,xl=2,Jl=3,bl=4,Oy=5,lE=100,Vy=101,Zy=102,Xy=103,zy=104,jy=200,$y=201,AM=202,gM=203,dr=204,ur=205,tM=206,IM=207,eM=208,iM=209,BM=210,CM=211,EM=212,QM=213,nM=214,Dr=0,fr=1,wr=2,MQ=3,pr=4,yr=5,Mr=6,Rr=7,xd=0,oM=1,sM=2,GC=0,aM=1,rM=2,hM=3,cM=4,lM=5,dM=6,uM=7,Jd=300,RQ=301,mQ=302,mr=303,Sr=304,Us=306,Gr=1e3,uE=1001,Fr=1002,BB=1003,DM=1004,gs=1005,MB=1006,Ha=1007,DE=1008,tC=1009,bd=1010,Kd=1011,vn=1012,Bh=1013,fE=1014,$B=1015,Tn=1016,Ch=1017,Eh=1018,SQ=1020,Yd=35902,vd=1021,Hd=1022,eB=1023,Td=1024,qd=1025,pQ=1026,GQ=1027,_d=1028,Qh=1029,Wd=1030,nh=1031,oh=1033,ys=33776,Ms=33777,Rs=33778,ms=33779,Nr=35840,Ur=35841,kr=35842,Lr=35843,xr=36196,Jr=37492,br=37496,Kr=37808,Yr=37809,vr=37810,Hr=37811,Tr=37812,qr=37813,_r=37814,Wr=37815,Pr=37816,Or=37817,Vr=37818,Zr=37819,Xr=37820,zr=37821,Ss=36492,jr=36494,$r=36495,Pd=36283,Ah=36284,gh=36285,th=36286,fM=3200,wM=3201,Od=0,pM=1,RC="",Ji="srgb",NQ="srgb-linear",ks="linear",_I="srgb",CQ=7680,Kl=519,yM=512,MM=513,RM=514,Vd=515,mM=516,SM=517,GM=518,FM=519,Yl=35044,vl="300 es",AC=2e3,Fs=2001;class UQ{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const E=this._listeners;E[t]===void 0&&(E[t]=[]),E[t].indexOf(i)===-1&&E[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const E=this._listeners;return E[t]!==void 0&&E[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const c=s.indexOf(i);c!==-1&&s.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const E=this._listeners[t.type];if(E!==void 0){t.target=this;const s=E.slice(0);for(let c=0,p=s.length;c<p;c++)s[c].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,Ih=180/Math.PI;function qn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,E=Math.random()*4294967295|0;return(Oe[o&255]+Oe[o>>8&255]+Oe[o>>16&255]+Oe[o>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[i&63|128]+Oe[i>>8&255]+"-"+Oe[i>>16&255]+Oe[i>>24&255]+Oe[E&255]+Oe[E>>8&255]+Oe[E>>16&255]+Oe[E>>24&255]).toLowerCase()}function ai(o,t,i){return Math.max(t,Math.min(i,o))}function NM(o,t){return(o%t+t)%t}function qa(o,t,i){return(1-i)*o+i*t}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function si(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class WI{constructor(t=0,i=0){WI.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,E=this.y,s=t.elements;return this.x=s[0]*i+s[3]*E+s[6],this.y=s[1]*i+s[4]*E+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const E=this.length();return this.divideScalar(E||1).multiplyScalar(Math.max(t,Math.min(i,E)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const E=this.dot(t)/i;return Math.acos(ai(E,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,E=this.y-t.y;return i*i+E*E}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,E){return this.x=t.x+(i.x-t.x)*E,this.y=t.y+(i.y-t.y)*E,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const E=Math.cos(i),s=Math.sin(i),c=this.x-t.x,p=this.y-t.y;return this.x=c*E-p*s+t.x,this.y=c*s+p*E+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nI{constructor(t,i,E,s,c,p,f,G,N){nI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,E,s,c,p,f,G,N)}set(t,i,E,s,c,p,f,G,N){const k=this.elements;return k[0]=t,k[1]=s,k[2]=f,k[3]=i,k[4]=c,k[5]=G,k[6]=E,k[7]=p,k[8]=N,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,E=t.elements;return i[0]=E[0],i[1]=E[1],i[2]=E[2],i[3]=E[3],i[4]=E[4],i[5]=E[5],i[6]=E[6],i[7]=E[7],i[8]=E[8],this}extractBasis(t,i,E){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),E.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const E=t.elements,s=i.elements,c=this.elements,p=E[0],f=E[3],G=E[6],N=E[1],k=E[4],J=E[7],x=E[2],Y=E[5],z=E[8],Z=s[0],L=s[3],F=s[6],hA=s[1],rA=s[4],tA=s[7],TA=s[2],mA=s[5],pA=s[8];return c[0]=p*Z+f*hA+G*TA,c[3]=p*L+f*rA+G*mA,c[6]=p*F+f*tA+G*pA,c[1]=N*Z+k*hA+J*TA,c[4]=N*L+k*rA+J*mA,c[7]=N*F+k*tA+J*pA,c[2]=x*Z+Y*hA+z*TA,c[5]=x*L+Y*rA+z*mA,c[8]=x*F+Y*tA+z*pA,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],E=t[1],s=t[2],c=t[3],p=t[4],f=t[5],G=t[6],N=t[7],k=t[8];return i*p*k-i*f*N-E*c*k+E*f*G+s*c*N-s*p*G}invert(){const t=this.elements,i=t[0],E=t[1],s=t[2],c=t[3],p=t[4],f=t[5],G=t[6],N=t[7],k=t[8],J=k*p-f*N,x=f*G-k*c,Y=N*c-p*G,z=i*J+E*x+s*Y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0);const Z=1/z;return t[0]=J*Z,t[1]=(s*N-k*E)*Z,t[2]=(f*E-s*p)*Z,t[3]=x*Z,t[4]=(k*i-s*G)*Z,t[5]=(s*c-f*i)*Z,t[6]=Y*Z,t[7]=(E*G-N*i)*Z,t[8]=(p*i-E*c)*Z,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,E,s,c,p,f){const G=Math.cos(c),N=Math.sin(c);return this.set(E*G,E*N,-E*(G*p+N*f)+p+t,-s*N,s*G,-s*(-N*p+G*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(_a.makeScale(t,i)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,i){return this.premultiply(_a.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),E=Math.sin(t);return this.set(i,-E,0,E,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,E=t.elements;for(let s=0;s<9;s++)if(i[s]!==E[s])return!1;return!0}fromArray(t,i=0){for(let E=0;E<9;E++)this.elements[E]=t[E+i];return this}toArray(t=[],i=0){const E=this.elements;return t[i]=E[0],t[i+1]=E[1],t[i+2]=E[2],t[i+3]=E[3],t[i+4]=E[4],t[i+5]=E[5],t[i+6]=E[6],t[i+7]=E[7],t[i+8]=E[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new nI;function Zd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ns(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function UM(){const o=Ns("canvas");return o.style.display="block",o}const Hl={};function Kn(o){o in Hl||(Hl[o]=!0,console.warn(o))}function kM(o,t,i){return new Promise(function(E,s){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:E()}}setTimeout(c,i)})}function LM(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xM(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const LI={enabled:!0,workingColorSpace:NQ,spaces:{},convert:function(o,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===_I&&(o.r=gC(o.r),o.g=gC(o.g),o.b=gC(o.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===_I&&(o.r=yQ(o.r),o.g=yQ(o.g),o.b=yQ(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===RC?ks:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,i){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function gC(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yQ(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Tl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],_l=[.3127,.329],Wl=new nI().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new nI().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);LI.define({[NQ]:{primaries:Tl,whitePoint:_l,transfer:ks,toXYZ:Wl,fromXYZ:Pl,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:Ji},outputColorSpaceConfig:{drawingBufferColorSpace:Ji}},[Ji]:{primaries:Tl,whitePoint:_l,transfer:_I,toXYZ:Wl,fromXYZ:Pl,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:Ji}}});let EQ;class JM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{EQ===void 0&&(EQ=Ns("canvas")),EQ.width=t.width,EQ.height=t.height;const E=EQ.getContext("2d");t instanceof ImageData?E.putImageData(t,0,0):E.drawImage(t,0,0,t.width,t.height),i=EQ}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ns("canvas");i.width=t.width,i.height=t.height;const E=i.getContext("2d");E.drawImage(t,0,0,t.width,t.height);const s=E.getImageData(0,0,t.width,t.height),c=s.data;for(let p=0;p<c.length;p++)c[p]=gC(c[p]/255)*255;return E.putImageData(s,0,0),i}else if(t.data){const i=t.data.slice(0);for(let E=0;E<i.length;E++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[E]=Math.floor(gC(i[E]/255)*255):i[E]=gC(i[E]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bM=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const E={uuid:this.uuid,url:""},s=this.data;if(s!==null){let c;if(Array.isArray(s)){c=[];for(let p=0,f=s.length;p<f;p++)s[p].isDataTexture?c.push(Wa(s[p].image)):c.push(Wa(s[p]))}else c=Wa(s);E.url=c}return i||(t.images[this.uuid]=E),E}}function Wa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class hi extends UQ{constructor(t=hi.DEFAULT_IMAGE,i=hi.DEFAULT_MAPPING,E=uE,s=uE,c=MB,p=DE,f=eB,G=tC,N=hi.DEFAULT_ANISOTROPY,k=RC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=qn(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=E,this.wrapT=s,this.magFilter=c,this.minFilter=p,this.anisotropy=N,this.format=f,this.internalFormat=null,this.type=G,this.offset=new WI(0,0),this.repeat=new WI(1,1),this.center=new WI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=k,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const E={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(E.userData=this.userData),i||(t.textures[this.uuid]=E),E}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case uE:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case uE:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Jd;hi.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,i=0,E=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=E,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,E,s){return this.x=t,this.y=i,this.z=E,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,E=this.y,s=this.z,c=this.w,p=t.elements;return this.x=p[0]*i+p[4]*E+p[8]*s+p[12]*c,this.y=p[1]*i+p[5]*E+p[9]*s+p[13]*c,this.z=p[2]*i+p[6]*E+p[10]*s+p[14]*c,this.w=p[3]*i+p[7]*E+p[11]*s+p[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,E,s,c;const G=t.elements,N=G[0],k=G[4],J=G[8],x=G[1],Y=G[5],z=G[9],Z=G[2],L=G[6],F=G[10];if(Math.abs(k-x)<.01&&Math.abs(J-Z)<.01&&Math.abs(z-L)<.01){if(Math.abs(k+x)<.1&&Math.abs(J+Z)<.1&&Math.abs(z+L)<.1&&Math.abs(N+Y+F-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const rA=(N+1)/2,tA=(Y+1)/2,TA=(F+1)/2,mA=(k+x)/4,pA=(J+Z)/4,MA=(z+L)/4;return rA>tA&&rA>TA?rA<.01?(E=0,s=.707106781,c=.707106781):(E=Math.sqrt(rA),s=mA/E,c=pA/E):tA>TA?tA<.01?(E=.707106781,s=0,c=.707106781):(s=Math.sqrt(tA),E=mA/s,c=MA/s):TA<.01?(E=.707106781,s=.707106781,c=0):(c=Math.sqrt(TA),E=pA/c,s=MA/c),this.set(E,s,c,i),this}let hA=Math.sqrt((L-z)*(L-z)+(J-Z)*(J-Z)+(x-k)*(x-k));return Math.abs(hA)<.001&&(hA=1),this.x=(L-z)/hA,this.y=(J-Z)/hA,this.z=(x-k)/hA,this.w=Math.acos((N+Y+F-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const E=this.length();return this.divideScalar(E||1).multiplyScalar(Math.max(t,Math.min(i,E)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,E){return this.x=t.x+(i.x-t.x)*E,this.y=t.y+(i.y-t.y)*E,this.z=t.z+(i.z-t.z)*E,this.w=t.w+(i.w-t.w)*E,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YM extends UQ{constructor(t=1,i=1,E={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new oe(0,0,t,i),this.scissorTest=!1,this.viewport=new oe(0,0,t,i);const s={width:t,height:i,depth:1};E=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:MB,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},E);const c=new hi(s,E.mapping,E.wrapS,E.wrapT,E.magFilter,E.minFilter,E.format,E.type,E.anisotropy,E.colorSpace);c.flipY=!1,c.generateMipmaps=E.generateMipmaps,c.internalFormat=E.internalFormat,this.textures=[];const p=E.count;for(let f=0;f<p;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=E.depthBuffer,this.stencilBuffer=E.stencilBuffer,this.resolveDepthBuffer=E.resolveDepthBuffer,this.resolveStencilBuffer=E.resolveStencilBuffer,this.depthTexture=E.depthTexture,this.samples=E.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,E=1){if(this.width!==t||this.height!==i||this.depth!==E){this.width=t,this.height=i,this.depth=E;for(let s=0,c=this.textures.length;s<c;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=E;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let E=0,s=t.textures.length;E<s;E++)this.textures[E]=t.textures[E].clone(),this.textures[E].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Xd(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wE extends YM{constructor(t=1,i=1,E={}){super(t,i,E),this.isWebGLRenderTarget=!0}}class zd extends hi{constructor(t=null,i=1,E=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:E,depth:s},this.magFilter=BB,this.minFilter=BB,this.wrapR=uE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends hi{constructor(t=null,i=1,E=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:E,depth:s},this.magFilter=BB,this.minFilter=BB,this.wrapR=uE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,i=0,E=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=E,this._w=s}static slerpFlat(t,i,E,s,c,p,f){let G=E[s+0],N=E[s+1],k=E[s+2],J=E[s+3];const x=c[p+0],Y=c[p+1],z=c[p+2],Z=c[p+3];if(f===0){t[i+0]=G,t[i+1]=N,t[i+2]=k,t[i+3]=J;return}if(f===1){t[i+0]=x,t[i+1]=Y,t[i+2]=z,t[i+3]=Z;return}if(J!==Z||G!==x||N!==Y||k!==z){let L=1-f;const F=G*x+N*Y+k*z+J*Z,hA=F>=0?1:-1,rA=1-F*F;if(rA>Number.EPSILON){const TA=Math.sqrt(rA),mA=Math.atan2(TA,F*hA);L=Math.sin(L*mA)/TA,f=Math.sin(f*mA)/TA}const tA=f*hA;if(G=G*L+x*tA,N=N*L+Y*tA,k=k*L+z*tA,J=J*L+Z*tA,L===1-f){const TA=1/Math.sqrt(G*G+N*N+k*k+J*J);G*=TA,N*=TA,k*=TA,J*=TA}}t[i]=G,t[i+1]=N,t[i+2]=k,t[i+3]=J}static multiplyQuaternionsFlat(t,i,E,s,c,p){const f=E[s],G=E[s+1],N=E[s+2],k=E[s+3],J=c[p],x=c[p+1],Y=c[p+2],z=c[p+3];return t[i]=f*z+k*J+G*Y-N*x,t[i+1]=G*z+k*x+N*J-f*Y,t[i+2]=N*z+k*Y+f*x-G*J,t[i+3]=k*z-f*J-G*x-N*Y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,E,s){return this._x=t,this._y=i,this._z=E,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const E=t._x,s=t._y,c=t._z,p=t._order,f=Math.cos,G=Math.sin,N=f(E/2),k=f(s/2),J=f(c/2),x=G(E/2),Y=G(s/2),z=G(c/2);switch(p){case"XYZ":this._x=x*k*J+N*Y*z,this._y=N*Y*J-x*k*z,this._z=N*k*z+x*Y*J,this._w=N*k*J-x*Y*z;break;case"YXZ":this._x=x*k*J+N*Y*z,this._y=N*Y*J-x*k*z,this._z=N*k*z-x*Y*J,this._w=N*k*J+x*Y*z;break;case"ZXY":this._x=x*k*J-N*Y*z,this._y=N*Y*J+x*k*z,this._z=N*k*z+x*Y*J,this._w=N*k*J-x*Y*z;break;case"ZYX":this._x=x*k*J-N*Y*z,this._y=N*Y*J+x*k*z,this._z=N*k*z-x*Y*J,this._w=N*k*J+x*Y*z;break;case"YZX":this._x=x*k*J+N*Y*z,this._y=N*Y*J+x*k*z,this._z=N*k*z-x*Y*J,this._w=N*k*J-x*Y*z;break;case"XZY":this._x=x*k*J-N*Y*z,this._y=N*Y*J-x*k*z,this._z=N*k*z+x*Y*J,this._w=N*k*J+x*Y*z;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const E=i/2,s=Math.sin(E);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(E),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,E=i[0],s=i[4],c=i[8],p=i[1],f=i[5],G=i[9],N=i[2],k=i[6],J=i[10],x=E+f+J;if(x>0){const Y=.5/Math.sqrt(x+1);this._w=.25/Y,this._x=(k-G)*Y,this._y=(c-N)*Y,this._z=(p-s)*Y}else if(E>f&&E>J){const Y=2*Math.sqrt(1+E-f-J);this._w=(k-G)/Y,this._x=.25*Y,this._y=(s+p)/Y,this._z=(c+N)/Y}else if(f>J){const Y=2*Math.sqrt(1+f-E-J);this._w=(c-N)/Y,this._x=(s+p)/Y,this._y=.25*Y,this._z=(G+k)/Y}else{const Y=2*Math.sqrt(1+J-E-f);this._w=(p-s)/Y,this._x=(c+N)/Y,this._y=(G+k)/Y,this._z=.25*Y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let E=t.dot(i)+1;return E<Number.EPSILON?(E=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=E):(this._x=0,this._y=-t.z,this._z=t.y,this._w=E)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=E),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ai(this.dot(t),-1,1)))}rotateTowards(t,i){const E=this.angleTo(t);if(E===0)return this;const s=Math.min(1,i/E);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const E=t._x,s=t._y,c=t._z,p=t._w,f=i._x,G=i._y,N=i._z,k=i._w;return this._x=E*k+p*f+s*N-c*G,this._y=s*k+p*G+c*f-E*N,this._z=c*k+p*N+E*G-s*f,this._w=p*k-E*f-s*G-c*N,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const E=this._x,s=this._y,c=this._z,p=this._w;let f=p*t._w+E*t._x+s*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=p,this._x=E,this._y=s,this._z=c,this;const G=1-f*f;if(G<=Number.EPSILON){const Y=1-i;return this._w=Y*p+i*this._w,this._x=Y*E+i*this._x,this._y=Y*s+i*this._y,this._z=Y*c+i*this._z,this.normalize(),this}const N=Math.sqrt(G),k=Math.atan2(N,f),J=Math.sin((1-i)*k)/N,x=Math.sin(i*k)/N;return this._w=p*J+this._w*x,this._x=E*J+this._x*x,this._y=s*J+this._y*x,this._z=c*J+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,E){return this.copy(t).slerp(i,E)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),E=Math.random(),s=Math.sqrt(1-E),c=Math.sqrt(E);return this.set(s*Math.sin(t),s*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class zA{constructor(t=0,i=0,E=0){zA.prototype.isVector3=!0,this.x=t,this.y=i,this.z=E}set(t,i,E){return E===void 0&&(E=this.z),this.x=t,this.y=i,this.z=E,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ol.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,E=this.y,s=this.z,c=t.elements;return this.x=c[0]*i+c[3]*E+c[6]*s,this.y=c[1]*i+c[4]*E+c[7]*s,this.z=c[2]*i+c[5]*E+c[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,E=this.y,s=this.z,c=t.elements,p=1/(c[3]*i+c[7]*E+c[11]*s+c[15]);return this.x=(c[0]*i+c[4]*E+c[8]*s+c[12])*p,this.y=(c[1]*i+c[5]*E+c[9]*s+c[13])*p,this.z=(c[2]*i+c[6]*E+c[10]*s+c[14])*p,this}applyQuaternion(t){const i=this.x,E=this.y,s=this.z,c=t.x,p=t.y,f=t.z,G=t.w,N=2*(p*s-f*E),k=2*(f*i-c*s),J=2*(c*E-p*i);return this.x=i+G*N+p*J-f*k,this.y=E+G*k+f*N-c*J,this.z=s+G*J+c*k-p*N,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,E=this.y,s=this.z,c=t.elements;return this.x=c[0]*i+c[4]*E+c[8]*s,this.y=c[1]*i+c[5]*E+c[9]*s,this.z=c[2]*i+c[6]*E+c[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const E=this.length();return this.divideScalar(E||1).multiplyScalar(Math.max(t,Math.min(i,E)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,E){return this.x=t.x+(i.x-t.x)*E,this.y=t.y+(i.y-t.y)*E,this.z=t.z+(i.z-t.z)*E,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const E=t.x,s=t.y,c=t.z,p=i.x,f=i.y,G=i.z;return this.x=s*G-c*f,this.y=c*p-E*G,this.z=E*f-s*p,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const E=t.dot(this)/i;return this.copy(t).multiplyScalar(E)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const E=this.dot(t)/i;return Math.acos(ai(E,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,E=this.y-t.y,s=this.z-t.z;return i*i+E*E+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,E){const s=Math.sin(i)*t;return this.x=s*Math.sin(E),this.y=Math.cos(i)*t,this.z=s*Math.cos(E),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,E){return this.x=t*Math.sin(i),this.y=E,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),E=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=E,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,E=Math.sqrt(1-i*i);return this.x=E*Math.cos(t),this.y=i,this.z=E*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new zA,Ol=new _n;class Wn{constructor(t=new zA(1/0,1/0,1/0),i=new zA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,E=t.length;i<E;i+=3)this.expandByPoint(AB.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,E=t.count;i<E;i++)this.expandByPoint(AB.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,E=t.length;i<E;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const E=AB.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(E),this.max.copy(t).add(E),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const E=t.geometry;if(E!==void 0){const c=E.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let p=0,f=c.count;p<f;p++)t.isMesh===!0?t.getVertexPosition(p,AB):AB.fromBufferAttribute(c,p),AB.applyMatrix4(t.matrixWorld),this.expandByPoint(AB);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(E.boundingBox===null&&E.computeBoundingBox(),ts.copy(E.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const s=t.children;for(let c=0,p=s.length;c<p;c++)this.expandByObject(s[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,AB),AB.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,E;return t.normal.x>0?(i=t.normal.x*this.min.x,E=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,E=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,E+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,E+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,E+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,E+=t.normal.z*this.min.z),i<=-t.constant&&E>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ln),Is.subVectors(this.max,Ln),QQ.subVectors(t.a,Ln),nQ.subVectors(t.b,Ln),oQ.subVectors(t.c,Ln),DC.subVectors(nQ,QQ),fC.subVectors(oQ,nQ),QE.subVectors(QQ,oQ);let i=[0,-DC.z,DC.y,0,-fC.z,fC.y,0,-QE.z,QE.y,DC.z,0,-DC.x,fC.z,0,-fC.x,QE.z,0,-QE.x,-DC.y,DC.x,0,-fC.y,fC.x,0,-QE.y,QE.x,0];return!Oa(i,QQ,nQ,oQ,Is)||(i=[1,0,0,0,1,0,0,0,1],!Oa(i,QQ,nQ,oQ,Is))?!1:(es.crossVectors(DC,fC),i=[es.x,es.y,es.z],Oa(i,QQ,nQ,oQ,Is))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,AB).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(AB).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(OB[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),OB[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),OB[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),OB[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),OB[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),OB[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),OB[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),OB[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(OB),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const OB=[new zA,new zA,new zA,new zA,new zA,new zA,new zA,new zA],AB=new zA,ts=new Wn,QQ=new zA,nQ=new zA,oQ=new zA,DC=new zA,fC=new zA,QE=new zA,Ln=new zA,Is=new zA,es=new zA,nE=new zA;function Oa(o,t,i,E,s){for(let c=0,p=o.length-3;c<=p;c+=3){nE.fromArray(o,c);const f=s.x*Math.abs(nE.x)+s.y*Math.abs(nE.y)+s.z*Math.abs(nE.z),G=t.dot(nE),N=i.dot(nE),k=E.dot(nE);if(Math.max(-Math.max(G,N,k),Math.min(G,N,k))>f)return!1}return!0}const HM=new Wn,xn=new zA,Va=new zA;class sh{constructor(t=new zA,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const E=this.center;i!==void 0?E.copy(i):HM.setFromPoints(t).getCenter(E);let s=0;for(let c=0,p=t.length;c<p;c++)s=Math.max(s,E.distanceToSquared(t[c]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const E=this.center.distanceToSquared(t);return i.copy(t),E>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xn.subVectors(t,this.center);const i=xn.lengthSq();if(i>this.radius*this.radius){const E=Math.sqrt(i),s=(E-this.radius)*.5;this.center.addScaledVector(xn,s/E),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xn.copy(t.center).add(Va)),this.expandByPoint(xn.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const VB=new zA,Za=new zA,is=new zA,wC=new zA,Xa=new zA,Bs=new zA,za=new zA;class TM{constructor(t=new zA,i=new zA(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,VB)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const E=i.dot(this.direction);return E<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,E)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=VB.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(VB.copy(this.origin).addScaledVector(this.direction,i),VB.distanceToSquared(t))}distanceSqToSegment(t,i,E,s){Za.copy(t).add(i).multiplyScalar(.5),is.copy(i).sub(t).normalize(),wC.copy(this.origin).sub(Za);const c=t.distanceTo(i)*.5,p=-this.direction.dot(is),f=wC.dot(this.direction),G=-wC.dot(is),N=wC.lengthSq(),k=Math.abs(1-p*p);let J,x,Y,z;if(k>0)if(J=p*G-f,x=p*f-G,z=c*k,J>=0)if(x>=-z)if(x<=z){const Z=1/k;J*=Z,x*=Z,Y=J*(J+p*x+2*f)+x*(p*J+x+2*G)+N}else x=c,J=Math.max(0,-(p*x+f)),Y=-J*J+x*(x+2*G)+N;else x=-c,J=Math.max(0,-(p*x+f)),Y=-J*J+x*(x+2*G)+N;else x<=-z?(J=Math.max(0,-(-p*c+f)),x=J>0?-c:Math.min(Math.max(-c,-G),c),Y=-J*J+x*(x+2*G)+N):x<=z?(J=0,x=Math.min(Math.max(-c,-G),c),Y=x*(x+2*G)+N):(J=Math.max(0,-(p*c+f)),x=J>0?c:Math.min(Math.max(-c,-G),c),Y=-J*J+x*(x+2*G)+N);else x=p>0?-c:c,J=Math.max(0,-(p*x+f)),Y=-J*J+x*(x+2*G)+N;return E&&E.copy(this.origin).addScaledVector(this.direction,J),s&&s.copy(Za).addScaledVector(is,x),Y}intersectSphere(t,i){VB.subVectors(t.center,this.origin);const E=VB.dot(this.direction),s=VB.dot(VB)-E*E,c=t.radius*t.radius;if(s>c)return null;const p=Math.sqrt(c-s),f=E-p,G=E+p;return G<0?null:f<0?this.at(G,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const E=-(this.origin.dot(t.normal)+t.constant)/i;return E>=0?E:null}intersectPlane(t,i){const E=this.distanceToPlane(t);return E===null?null:this.at(E,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let E,s,c,p,f,G;const N=1/this.direction.x,k=1/this.direction.y,J=1/this.direction.z,x=this.origin;return N>=0?(E=(t.min.x-x.x)*N,s=(t.max.x-x.x)*N):(E=(t.max.x-x.x)*N,s=(t.min.x-x.x)*N),k>=0?(c=(t.min.y-x.y)*k,p=(t.max.y-x.y)*k):(c=(t.max.y-x.y)*k,p=(t.min.y-x.y)*k),E>p||c>s||((c>E||isNaN(E))&&(E=c),(p<s||isNaN(s))&&(s=p),J>=0?(f=(t.min.z-x.z)*J,G=(t.max.z-x.z)*J):(f=(t.max.z-x.z)*J,G=(t.min.z-x.z)*J),E>G||f>s)||((f>E||E!==E)&&(E=f),(G<s||s!==s)&&(s=G),s<0)?null:this.at(E>=0?E:s,i)}intersectsBox(t){return this.intersectBox(t,VB)!==null}intersectTriangle(t,i,E,s,c){Xa.subVectors(i,t),Bs.subVectors(E,t),za.crossVectors(Xa,Bs);let p=this.direction.dot(za),f;if(p>0){if(s)return null;f=1}else if(p<0)f=-1,p=-p;else return null;wC.subVectors(this.origin,t);const G=f*this.direction.dot(Bs.crossVectors(wC,Bs));if(G<0)return null;const N=f*this.direction.dot(Xa.cross(wC));if(N<0||G+N>p)return null;const k=-f*wC.dot(za);return k<0?null:this.at(k/p,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,i,E,s,c,p,f,G,N,k,J,x,Y,z,Z,L){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,E,s,c,p,f,G,N,k,J,x,Y,z,Z,L)}set(t,i,E,s,c,p,f,G,N,k,J,x,Y,z,Z,L){const F=this.elements;return F[0]=t,F[4]=i,F[8]=E,F[12]=s,F[1]=c,F[5]=p,F[9]=f,F[13]=G,F[2]=N,F[6]=k,F[10]=J,F[14]=x,F[3]=Y,F[7]=z,F[11]=Z,F[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const i=this.elements,E=t.elements;return i[0]=E[0],i[1]=E[1],i[2]=E[2],i[3]=E[3],i[4]=E[4],i[5]=E[5],i[6]=E[6],i[7]=E[7],i[8]=E[8],i[9]=E[9],i[10]=E[10],i[11]=E[11],i[12]=E[12],i[13]=E[13],i[14]=E[14],i[15]=E[15],this}copyPosition(t){const i=this.elements,E=t.elements;return i[12]=E[12],i[13]=E[13],i[14]=E[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,E){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),E.setFromMatrixColumn(this,2),this}makeBasis(t,i,E){return this.set(t.x,i.x,E.x,0,t.y,i.y,E.y,0,t.z,i.z,E.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,E=t.elements,s=1/sQ.setFromMatrixColumn(t,0).length(),c=1/sQ.setFromMatrixColumn(t,1).length(),p=1/sQ.setFromMatrixColumn(t,2).length();return i[0]=E[0]*s,i[1]=E[1]*s,i[2]=E[2]*s,i[3]=0,i[4]=E[4]*c,i[5]=E[5]*c,i[6]=E[6]*c,i[7]=0,i[8]=E[8]*p,i[9]=E[9]*p,i[10]=E[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,E=t.x,s=t.y,c=t.z,p=Math.cos(E),f=Math.sin(E),G=Math.cos(s),N=Math.sin(s),k=Math.cos(c),J=Math.sin(c);if(t.order==="XYZ"){const x=p*k,Y=p*J,z=f*k,Z=f*J;i[0]=G*k,i[4]=-G*J,i[8]=N,i[1]=Y+z*N,i[5]=x-Z*N,i[9]=-f*G,i[2]=Z-x*N,i[6]=z+Y*N,i[10]=p*G}else if(t.order==="YXZ"){const x=G*k,Y=G*J,z=N*k,Z=N*J;i[0]=x+Z*f,i[4]=z*f-Y,i[8]=p*N,i[1]=p*J,i[5]=p*k,i[9]=-f,i[2]=Y*f-z,i[6]=Z+x*f,i[10]=p*G}else if(t.order==="ZXY"){const x=G*k,Y=G*J,z=N*k,Z=N*J;i[0]=x-Z*f,i[4]=-p*J,i[8]=z+Y*f,i[1]=Y+z*f,i[5]=p*k,i[9]=Z-x*f,i[2]=-p*N,i[6]=f,i[10]=p*G}else if(t.order==="ZYX"){const x=p*k,Y=p*J,z=f*k,Z=f*J;i[0]=G*k,i[4]=z*N-Y,i[8]=x*N+Z,i[1]=G*J,i[5]=Z*N+x,i[9]=Y*N-z,i[2]=-N,i[6]=f*G,i[10]=p*G}else if(t.order==="YZX"){const x=p*G,Y=p*N,z=f*G,Z=f*N;i[0]=G*k,i[4]=Z-x*J,i[8]=z*J+Y,i[1]=J,i[5]=p*k,i[9]=-f*k,i[2]=-N*k,i[6]=Y*J+z,i[10]=x-Z*J}else if(t.order==="XZY"){const x=p*G,Y=p*N,z=f*G,Z=f*N;i[0]=G*k,i[4]=-J,i[8]=N*k,i[1]=x*J+Z,i[5]=p*k,i[9]=Y*J-z,i[2]=z*J-Y,i[6]=f*k,i[10]=Z*J+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qM,t,_M)}lookAt(t,i,E){const s=this.elements;return Ri.subVectors(t,i),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),pC.crossVectors(E,Ri),pC.lengthSq()===0&&(Math.abs(E.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),pC.crossVectors(E,Ri)),pC.normalize(),Cs.crossVectors(Ri,pC),s[0]=pC.x,s[4]=Cs.x,s[8]=Ri.x,s[1]=pC.y,s[5]=Cs.y,s[9]=Ri.y,s[2]=pC.z,s[6]=Cs.z,s[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const E=t.elements,s=i.elements,c=this.elements,p=E[0],f=E[4],G=E[8],N=E[12],k=E[1],J=E[5],x=E[9],Y=E[13],z=E[2],Z=E[6],L=E[10],F=E[14],hA=E[3],rA=E[7],tA=E[11],TA=E[15],mA=s[0],pA=s[4],MA=s[8],eA=s[12],$=s[1],RA=s[5],tg=s[9],Ag=s[13],lg=s[2],ag=s[6],Bg=s[10],fg=s[14],ZA=s[3],Wg=s[7],Et=s[11],dt=s[15];return c[0]=p*mA+f*$+G*lg+N*ZA,c[4]=p*pA+f*RA+G*ag+N*Wg,c[8]=p*MA+f*tg+G*Bg+N*Et,c[12]=p*eA+f*Ag+G*fg+N*dt,c[1]=k*mA+J*$+x*lg+Y*ZA,c[5]=k*pA+J*RA+x*ag+Y*Wg,c[9]=k*MA+J*tg+x*Bg+Y*Et,c[13]=k*eA+J*Ag+x*fg+Y*dt,c[2]=z*mA+Z*$+L*lg+F*ZA,c[6]=z*pA+Z*RA+L*ag+F*Wg,c[10]=z*MA+Z*tg+L*Bg+F*Et,c[14]=z*eA+Z*Ag+L*fg+F*dt,c[3]=hA*mA+rA*$+tA*lg+TA*ZA,c[7]=hA*pA+rA*RA+tA*ag+TA*Wg,c[11]=hA*MA+rA*tg+tA*Bg+TA*Et,c[15]=hA*eA+rA*Ag+tA*fg+TA*dt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],E=t[4],s=t[8],c=t[12],p=t[1],f=t[5],G=t[9],N=t[13],k=t[2],J=t[6],x=t[10],Y=t[14],z=t[3],Z=t[7],L=t[11],F=t[15];return z*(+c*G*J-s*N*J-c*f*x+E*N*x+s*f*Y-E*G*Y)+Z*(+i*G*Y-i*N*x+c*p*x-s*p*Y+s*N*k-c*G*k)+L*(+i*N*J-i*f*Y-c*p*J+E*p*Y+c*f*k-E*N*k)+F*(-s*f*k-i*G*J+i*f*x+s*p*J-E*p*x+E*G*k)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,E){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=E),this}invert(){const t=this.elements,i=t[0],E=t[1],s=t[2],c=t[3],p=t[4],f=t[5],G=t[6],N=t[7],k=t[8],J=t[9],x=t[10],Y=t[11],z=t[12],Z=t[13],L=t[14],F=t[15],hA=J*L*N-Z*x*N+Z*G*Y-f*L*Y-J*G*F+f*x*F,rA=z*x*N-k*L*N-z*G*Y+p*L*Y+k*G*F-p*x*F,tA=k*Z*N-z*J*N+z*f*Y-p*Z*Y-k*f*F+p*J*F,TA=z*J*G-k*Z*G-z*f*x+p*Z*x+k*f*L-p*J*L,mA=i*hA+E*rA+s*tA+c*TA;if(mA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const pA=1/mA;return t[0]=hA*pA,t[1]=(Z*x*c-J*L*c-Z*s*Y+E*L*Y+J*s*F-E*x*F)*pA,t[2]=(f*L*c-Z*G*c+Z*s*N-E*L*N-f*s*F+E*G*F)*pA,t[3]=(J*G*c-f*x*c-J*s*N+E*x*N+f*s*Y-E*G*Y)*pA,t[4]=rA*pA,t[5]=(k*L*c-z*x*c+z*s*Y-i*L*Y-k*s*F+i*x*F)*pA,t[6]=(z*G*c-p*L*c-z*s*N+i*L*N+p*s*F-i*G*F)*pA,t[7]=(p*x*c-k*G*c+k*s*N-i*x*N-p*s*Y+i*G*Y)*pA,t[8]=tA*pA,t[9]=(z*J*c-k*Z*c-z*E*Y+i*Z*Y+k*E*F-i*J*F)*pA,t[10]=(p*Z*c-z*f*c+z*E*N-i*Z*N-p*E*F+i*f*F)*pA,t[11]=(k*f*c-p*J*c-k*E*N+i*J*N+p*E*Y-i*f*Y)*pA,t[12]=TA*pA,t[13]=(k*Z*s-z*J*s+z*E*x-i*Z*x-k*E*L+i*J*L)*pA,t[14]=(z*f*s-p*Z*s-z*E*G+i*Z*G+p*E*L-i*f*L)*pA,t[15]=(p*J*s-k*f*s+k*E*G-i*J*G-p*E*x+i*f*x)*pA,this}scale(t){const i=this.elements,E=t.x,s=t.y,c=t.z;return i[0]*=E,i[4]*=s,i[8]*=c,i[1]*=E,i[5]*=s,i[9]*=c,i[2]*=E,i[6]*=s,i[10]*=c,i[3]*=E,i[7]*=s,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],E=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,E,s))}makeTranslation(t,i,E){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,E,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),E=Math.sin(t);return this.set(1,0,0,0,0,i,-E,0,0,E,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),E=Math.sin(t);return this.set(i,0,E,0,0,1,0,0,-E,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),E=Math.sin(t);return this.set(i,-E,0,0,E,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const E=Math.cos(i),s=Math.sin(i),c=1-E,p=t.x,f=t.y,G=t.z,N=c*p,k=c*f;return this.set(N*p+E,N*f-s*G,N*G+s*f,0,N*f+s*G,k*f+E,k*G-s*p,0,N*G-s*f,k*G+s*p,c*G*G+E,0,0,0,0,1),this}makeScale(t,i,E){return this.set(t,0,0,0,0,i,0,0,0,0,E,0,0,0,0,1),this}makeShear(t,i,E,s,c,p){return this.set(1,E,c,0,t,1,p,0,i,s,1,0,0,0,0,1),this}compose(t,i,E){const s=this.elements,c=i._x,p=i._y,f=i._z,G=i._w,N=c+c,k=p+p,J=f+f,x=c*N,Y=c*k,z=c*J,Z=p*k,L=p*J,F=f*J,hA=G*N,rA=G*k,tA=G*J,TA=E.x,mA=E.y,pA=E.z;return s[0]=(1-(Z+F))*TA,s[1]=(Y+tA)*TA,s[2]=(z-rA)*TA,s[3]=0,s[4]=(Y-tA)*mA,s[5]=(1-(x+F))*mA,s[6]=(L+hA)*mA,s[7]=0,s[8]=(z+rA)*pA,s[9]=(L-hA)*pA,s[10]=(1-(x+Z))*pA,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,E){const s=this.elements;let c=sQ.set(s[0],s[1],s[2]).length();const p=sQ.set(s[4],s[5],s[6]).length(),f=sQ.set(s[8],s[9],s[10]).length();this.determinant()<0&&(c=-c),t.x=s[12],t.y=s[13],t.z=s[14],gB.copy(this);const N=1/c,k=1/p,J=1/f;return gB.elements[0]*=N,gB.elements[1]*=N,gB.elements[2]*=N,gB.elements[4]*=k,gB.elements[5]*=k,gB.elements[6]*=k,gB.elements[8]*=J,gB.elements[9]*=J,gB.elements[10]*=J,i.setFromRotationMatrix(gB),E.x=c,E.y=p,E.z=f,this}makePerspective(t,i,E,s,c,p,f=AC){const G=this.elements,N=2*c/(i-t),k=2*c/(E-s),J=(i+t)/(i-t),x=(E+s)/(E-s);let Y,z;if(f===AC)Y=-(p+c)/(p-c),z=-2*p*c/(p-c);else if(f===Fs)Y=-p/(p-c),z=-p*c/(p-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return G[0]=N,G[4]=0,G[8]=J,G[12]=0,G[1]=0,G[5]=k,G[9]=x,G[13]=0,G[2]=0,G[6]=0,G[10]=Y,G[14]=z,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(t,i,E,s,c,p,f=AC){const G=this.elements,N=1/(i-t),k=1/(E-s),J=1/(p-c),x=(i+t)*N,Y=(E+s)*k;let z,Z;if(f===AC)z=(p+c)*J,Z=-2*J;else if(f===Fs)z=c*J,Z=-1*J;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return G[0]=2*N,G[4]=0,G[8]=0,G[12]=-x,G[1]=0,G[5]=2*k,G[9]=0,G[13]=-Y,G[2]=0,G[6]=0,G[10]=Z,G[14]=-z,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(t){const i=this.elements,E=t.elements;for(let s=0;s<16;s++)if(i[s]!==E[s])return!1;return!0}fromArray(t,i=0){for(let E=0;E<16;E++)this.elements[E]=t[E+i];return this}toArray(t=[],i=0){const E=this.elements;return t[i]=E[0],t[i+1]=E[1],t[i+2]=E[2],t[i+3]=E[3],t[i+4]=E[4],t[i+5]=E[5],t[i+6]=E[6],t[i+7]=E[7],t[i+8]=E[8],t[i+9]=E[9],t[i+10]=E[10],t[i+11]=E[11],t[i+12]=E[12],t[i+13]=E[13],t[i+14]=E[14],t[i+15]=E[15],t}}const sQ=new zA,gB=new de,qM=new zA(0,0,0),_M=new zA(1,1,1),pC=new zA,Cs=new zA,Ri=new zA,Vl=new de,Zl=new _n;class IC{constructor(t=0,i=0,E=0,s=IC.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=E,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,E,s=this._order){return this._x=t,this._y=i,this._z=E,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,E=!0){const s=t.elements,c=s[0],p=s[4],f=s[8],G=s[1],N=s[5],k=s[9],J=s[2],x=s[6],Y=s[10];switch(i){case"XYZ":this._y=Math.asin(ai(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-k,Y),this._z=Math.atan2(-p,c)):(this._x=Math.atan2(x,N),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(k,-1,1)),Math.abs(k)<.9999999?(this._y=Math.atan2(f,Y),this._z=Math.atan2(G,N)):(this._y=Math.atan2(-J,c),this._z=0);break;case"ZXY":this._x=Math.asin(ai(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-J,Y),this._z=Math.atan2(-p,N)):(this._y=0,this._z=Math.atan2(G,c));break;case"ZYX":this._y=Math.asin(-ai(J,-1,1)),Math.abs(J)<.9999999?(this._x=Math.atan2(x,Y),this._z=Math.atan2(G,c)):(this._x=0,this._z=Math.atan2(-p,N));break;case"YZX":this._z=Math.asin(ai(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(-k,N),this._y=Math.atan2(-J,c)):(this._x=0,this._y=Math.atan2(f,Y));break;case"XZY":this._z=Math.asin(-ai(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,N),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-k,Y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,E===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,E){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,i,E)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}IC.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WM=0;const Xl=new zA,aQ=new _n,ZB=new de,Es=new zA,Jn=new zA,PM=new zA,OM=new _n,zl=new zA(1,0,0),jl=new zA(0,1,0),$l=new zA(0,0,1),Ad={type:"added"},VM={type:"removed"},rQ={type:"childadded",child:null},ja={type:"childremoved",child:null};class Si extends UQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Si.DEFAULT_UP.clone();const t=new zA,i=new IC,E=new _n,s=new zA(1,1,1);function c(){E.setFromEuler(i,!1)}function p(){i.setFromQuaternion(E,void 0,!1)}i._onChange(c),E._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:E},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new nI}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return aQ.setFromAxisAngle(t,i),this.quaternion.multiply(aQ),this}rotateOnWorldAxis(t,i){return aQ.setFromAxisAngle(t,i),this.quaternion.premultiply(aQ),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,i){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ZB.copy(this.matrixWorld).invert())}lookAt(t,i,E){t.isVector3?Es.copy(t):Es.set(t,i,E);const s=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ZB.lookAt(Jn,Es,this.up):ZB.lookAt(Es,Jn,this.up),this.quaternion.setFromRotationMatrix(ZB),s&&(ZB.extractRotation(s.matrixWorld),aQ.setFromRotationMatrix(ZB),this.quaternion.premultiply(aQ.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),rQ.child=t,this.dispatchEvent(rQ),rQ.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let E=0;E<arguments.length;E++)this.remove(arguments[E]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VM),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ZB.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ZB.multiply(t.parent.matrixWorld)),t.applyMatrix4(ZB),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),rQ.child=t,this.dispatchEvent(rQ),rQ.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let E=0,s=this.children.length;E<s;E++){const p=this.children[E].getObjectByProperty(t,i);if(p!==void 0)return p}}getObjectsByProperty(t,i,E=[]){this[t]===i&&E.push(this);const s=this.children;for(let c=0,p=s.length;c<p;c++)s[c].getObjectsByProperty(t,i,E);return E}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,OM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let E=0,s=i.length;E<s;E++)i[E].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let E=0,s=i.length;E<s;E++)i[E].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let E=0,s=i.length;E<s;E++)i[E].updateMatrixWorld(t)}updateWorldMatrix(t,i){const E=this.parent;if(t===!0&&E!==null&&E.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let c=0,p=s.length;c<p;c++)s[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",E={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},E.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function c(f,G){return f[G.uuid]===void 0&&(f[G.uuid]=G.toJSON(t)),G.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const G=f.shapes;if(Array.isArray(G))for(let N=0,k=G.length;N<k;N++){const J=G[N];c(t.shapes,J)}else c(t.shapes,G)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let G=0,N=this.material.length;G<N;G++)f.push(c(t.materials,this.material[G]));s.material=f}else s.material=c(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const G=this.animations[f];s.animations.push(c(t.animations,G))}}if(i){const f=p(t.geometries),G=p(t.materials),N=p(t.textures),k=p(t.images),J=p(t.shapes),x=p(t.skeletons),Y=p(t.animations),z=p(t.nodes);f.length>0&&(E.geometries=f),G.length>0&&(E.materials=G),N.length>0&&(E.textures=N),k.length>0&&(E.images=k),J.length>0&&(E.shapes=J),x.length>0&&(E.skeletons=x),Y.length>0&&(E.animations=Y),z.length>0&&(E.nodes=z)}return E.object=s,E;function p(f){const G=[];for(const N in f){const k=f[N];delete k.metadata,G.push(k)}return G}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let E=0;E<t.children.length;E++){const s=t.children[E];this.add(s.clone())}return this}}Si.DEFAULT_UP=new zA(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tB=new zA,XB=new zA,$a=new zA,zB=new zA,hQ=new zA,cQ=new zA,gd=new zA,Ar=new zA,gr=new zA,tr=new zA,Ir=new oe,er=new oe,ir=new oe;class IB{constructor(t=new zA,i=new zA,E=new zA){this.a=t,this.b=i,this.c=E}static getNormal(t,i,E,s){s.subVectors(E,i),tB.subVectors(t,i),s.cross(tB);const c=s.lengthSq();return c>0?s.multiplyScalar(1/Math.sqrt(c)):s.set(0,0,0)}static getBarycoord(t,i,E,s,c){tB.subVectors(s,i),XB.subVectors(E,i),$a.subVectors(t,i);const p=tB.dot(tB),f=tB.dot(XB),G=tB.dot($a),N=XB.dot(XB),k=XB.dot($a),J=p*N-f*f;if(J===0)return c.set(0,0,0),null;const x=1/J,Y=(N*G-f*k)*x,z=(p*k-f*G)*x;return c.set(1-Y-z,z,Y)}static containsPoint(t,i,E,s){return this.getBarycoord(t,i,E,s,zB)===null?!1:zB.x>=0&&zB.y>=0&&zB.x+zB.y<=1}static getInterpolation(t,i,E,s,c,p,f,G){return this.getBarycoord(t,i,E,s,zB)===null?(G.x=0,G.y=0,"z"in G&&(G.z=0),"w"in G&&(G.w=0),null):(G.setScalar(0),G.addScaledVector(c,zB.x),G.addScaledVector(p,zB.y),G.addScaledVector(f,zB.z),G)}static getInterpolatedAttribute(t,i,E,s,c,p){return Ir.setScalar(0),er.setScalar(0),ir.setScalar(0),Ir.fromBufferAttribute(t,i),er.fromBufferAttribute(t,E),ir.fromBufferAttribute(t,s),p.setScalar(0),p.addScaledVector(Ir,c.x),p.addScaledVector(er,c.y),p.addScaledVector(ir,c.z),p}static isFrontFacing(t,i,E,s){return tB.subVectors(E,i),XB.subVectors(t,i),tB.cross(XB).dot(s)<0}set(t,i,E){return this.a.copy(t),this.b.copy(i),this.c.copy(E),this}setFromPointsAndIndices(t,i,E,s){return this.a.copy(t[i]),this.b.copy(t[E]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,E,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,E),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tB.subVectors(this.c,this.b),XB.subVectors(this.a,this.b),tB.cross(XB).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return IB.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return IB.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,E,s,c){return IB.getInterpolation(t,this.a,this.b,this.c,i,E,s,c)}containsPoint(t){return IB.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return IB.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const E=this.a,s=this.b,c=this.c;let p,f;hQ.subVectors(s,E),cQ.subVectors(c,E),Ar.subVectors(t,E);const G=hQ.dot(Ar),N=cQ.dot(Ar);if(G<=0&&N<=0)return i.copy(E);gr.subVectors(t,s);const k=hQ.dot(gr),J=cQ.dot(gr);if(k>=0&&J<=k)return i.copy(s);const x=G*J-k*N;if(x<=0&&G>=0&&k<=0)return p=G/(G-k),i.copy(E).addScaledVector(hQ,p);tr.subVectors(t,c);const Y=hQ.dot(tr),z=cQ.dot(tr);if(z>=0&&Y<=z)return i.copy(c);const Z=Y*N-G*z;if(Z<=0&&N>=0&&z<=0)return f=N/(N-z),i.copy(E).addScaledVector(cQ,f);const L=k*z-Y*J;if(L<=0&&J-k>=0&&Y-z>=0)return gd.subVectors(c,s),f=(J-k)/(J-k+(Y-z)),i.copy(s).addScaledVector(gd,f);const F=1/(L+Z+x);return p=Z*F,f=x*F,i.copy(E).addScaledVector(hQ,p).addScaledVector(cQ,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yC={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Br(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class qI{constructor(t,i,E){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,E)}set(t,i,E){if(i===void 0&&E===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,E);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,LI.toWorkingColorSpace(this,i),this}setRGB(t,i,E,s=LI.workingColorSpace){return this.r=t,this.g=i,this.b=E,LI.toWorkingColorSpace(this,s),this}setHSL(t,i,E,s=LI.workingColorSpace){if(t=NM(t,1),i=ai(i,0,1),E=ai(E,0,1),i===0)this.r=this.g=this.b=E;else{const c=E<=.5?E*(1+i):E+i-E*i,p=2*E-c;this.r=Br(p,c,t+1/3),this.g=Br(p,c,t),this.b=Br(p,c,t-1/3)}return LI.toWorkingColorSpace(this,s),this}setStyle(t,i=Ji){function E(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const p=s[1],f=s[2];switch(p){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return E(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return E(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return E(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=s[1],p=c.length;if(p===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ji){const E=$d[t.toLowerCase()];return E!==void 0?this.setHex(E,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gC(t.r),this.g=gC(t.g),this.b=gC(t.b),this}copyLinearToSRGB(t){return this.r=yQ(t.r),this.g=yQ(t.g),this.b=yQ(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ji){return LI.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ai(Ve.r*255,0,255))*65536+Math.round(ai(Ve.g*255,0,255))*256+Math.round(ai(Ve.b*255,0,255))}getHexString(t=Ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=LI.workingColorSpace){LI.fromWorkingColorSpace(Ve.copy(this),i);const E=Ve.r,s=Ve.g,c=Ve.b,p=Math.max(E,s,c),f=Math.min(E,s,c);let G,N;const k=(f+p)/2;if(f===p)G=0,N=0;else{const J=p-f;switch(N=k<=.5?J/(p+f):J/(2-p-f),p){case E:G=(s-c)/J+(s<c?6:0);break;case s:G=(c-E)/J+2;break;case c:G=(E-s)/J+4;break}G/=6}return t.h=G,t.s=N,t.l=k,t}getRGB(t,i=LI.workingColorSpace){return LI.fromWorkingColorSpace(Ve.copy(this),i),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ji){LI.fromWorkingColorSpace(Ve.copy(this),t);const i=Ve.r,E=Ve.g,s=Ve.b;return t!==Ji?`color(${t} ${i.toFixed(3)} ${E.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(E*255)},${Math.round(s*255)})`}offsetHSL(t,i,E){return this.getHSL(yC),this.setHSL(yC.h+t,yC.s+i,yC.l+E)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,E){return this.r=t.r+(i.r-t.r)*E,this.g=t.g+(i.g-t.g)*E,this.b=t.b+(i.b-t.b)*E,this}lerpHSL(t,i){this.getHSL(yC),t.getHSL(Qs);const E=qa(yC.h,Qs.h,i),s=qa(yC.s,Qs.s,i),c=qa(yC.l,Qs.l,i);return this.setHSL(E,s,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,E=this.g,s=this.b,c=t.elements;return this.r=c[0]*i+c[3]*E+c[6]*s,this.g=c[1]*i+c[4]*E+c[7]*s,this.b=c[2]*i+c[5]*E+c[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new qI;qI.NAMES=$d;let ZM=0;class Pn extends UQ{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=qn(),this.name="",this.blending=wQ,this.side=FC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=ur,this.blendEquation=lE,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qI(0,0,0),this.blendAlpha=0,this.depthFunc=MQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=CQ,this.stencilZFail=CQ,this.stencilZPass=CQ,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const E=t[i];if(E===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(E):s&&s.isVector3&&E&&E.isVector3?s.copy(E):this[i]=E}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const E={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};E.uuid=this.uuid,E.type=this.type,this.name!==""&&(E.name=this.name),this.color&&this.color.isColor&&(E.color=this.color.getHex()),this.roughness!==void 0&&(E.roughness=this.roughness),this.metalness!==void 0&&(E.metalness=this.metalness),this.sheen!==void 0&&(E.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(E.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(E.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(E.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(E.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(E.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(E.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(E.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(E.shininess=this.shininess),this.clearcoat!==void 0&&(E.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(E.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(E.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(E.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(E.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,E.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(E.dispersion=this.dispersion),this.iridescence!==void 0&&(E.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(E.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(E.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(E.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(E.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(E.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(E.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(E.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(E.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(E.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(E.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(E.lightMap=this.lightMap.toJSON(t).uuid,E.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(E.aoMap=this.aoMap.toJSON(t).uuid,E.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(E.bumpMap=this.bumpMap.toJSON(t).uuid,E.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(E.normalMap=this.normalMap.toJSON(t).uuid,E.normalMapType=this.normalMapType,E.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(E.displacementMap=this.displacementMap.toJSON(t).uuid,E.displacementScale=this.displacementScale,E.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(E.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(E.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(E.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(E.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(E.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(E.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(E.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(E.combine=this.combine)),this.envMapRotation!==void 0&&(E.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(E.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(E.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(E.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(E.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(E.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(E.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(E.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(E.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(E.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(E.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(E.size=this.size),this.shadowSide!==null&&(E.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(E.sizeAttenuation=this.sizeAttenuation),this.blending!==wQ&&(E.blending=this.blending),this.side!==FC&&(E.side=this.side),this.vertexColors===!0&&(E.vertexColors=!0),this.opacity<1&&(E.opacity=this.opacity),this.transparent===!0&&(E.transparent=!0),this.blendSrc!==dr&&(E.blendSrc=this.blendSrc),this.blendDst!==ur&&(E.blendDst=this.blendDst),this.blendEquation!==lE&&(E.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(E.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(E.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(E.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(E.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(E.blendAlpha=this.blendAlpha),this.depthFunc!==MQ&&(E.depthFunc=this.depthFunc),this.depthTest===!1&&(E.depthTest=this.depthTest),this.depthWrite===!1&&(E.depthWrite=this.depthWrite),this.colorWrite===!1&&(E.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(E.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(E.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(E.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(E.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==CQ&&(E.stencilFail=this.stencilFail),this.stencilZFail!==CQ&&(E.stencilZFail=this.stencilZFail),this.stencilZPass!==CQ&&(E.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(E.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(E.rotation=this.rotation),this.polygonOffset===!0&&(E.polygonOffset=!0),this.polygonOffsetFactor!==0&&(E.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(E.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(E.linewidth=this.linewidth),this.dashSize!==void 0&&(E.dashSize=this.dashSize),this.gapSize!==void 0&&(E.gapSize=this.gapSize),this.scale!==void 0&&(E.scale=this.scale),this.dithering===!0&&(E.dithering=!0),this.alphaTest>0&&(E.alphaTest=this.alphaTest),this.alphaHash===!0&&(E.alphaHash=!0),this.alphaToCoverage===!0&&(E.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(E.premultipliedAlpha=!0),this.forceSinglePass===!0&&(E.forceSinglePass=!0),this.wireframe===!0&&(E.wireframe=!0),this.wireframeLinewidth>1&&(E.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(E.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(E.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(E.flatShading=!0),this.visible===!1&&(E.visible=!1),this.toneMapped===!1&&(E.toneMapped=!1),this.fog===!1&&(E.fog=!1),Object.keys(this.userData).length>0&&(E.userData=this.userData);function s(c){const p=[];for(const f in c){const G=c[f];delete G.metadata,p.push(G)}return p}if(i){const c=s(t.textures),p=s(t.images);c.length>0&&(E.textures=c),p.length>0&&(E.images=p)}return E}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let E=null;if(i!==null){const s=i.length;E=new Array(s);for(let c=0;c!==s;++c)E[c]=i[c].clone()}return this.clippingPlanes=E,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Au extends Pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IC,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new zA,ns=new WI;class RB{constructor(t,i,E=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=E,this.usage=Yl,this.updateRanges=[],this.gpuType=$B,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,E){t*=this.itemSize,E*=i.itemSize;for(let s=0,c=this.itemSize;s<c;s++)this.array[t+s]=i.array[E+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,E=this.count;i<E;i++)ns.fromBufferAttribute(this,i),ns.applyMatrix3(t),this.setXY(i,ns.x,ns.y);else if(this.itemSize===3)for(let i=0,E=this.count;i<E;i++)le.fromBufferAttribute(this,i),le.applyMatrix3(t),this.setXYZ(i,le.x,le.y,le.z);return this}applyMatrix4(t){for(let i=0,E=this.count;i<E;i++)le.fromBufferAttribute(this,i),le.applyMatrix4(t),this.setXYZ(i,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let i=0,E=this.count;i<E;i++)le.fromBufferAttribute(this,i),le.applyNormalMatrix(t),this.setXYZ(i,le.x,le.y,le.z);return this}transformDirection(t){for(let i=0,E=this.count;i<E;i++)le.fromBufferAttribute(this,i),le.transformDirection(t),this.setXYZ(i,le.x,le.y,le.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let E=this.array[t*this.itemSize+i];return this.normalized&&(E=kn(E,this.array)),E}setComponent(t,i,E){return this.normalized&&(E=si(E,this.array)),this.array[t*this.itemSize+i]=E,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=kn(i,this.array)),i}setX(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=kn(i,this.array)),i}setY(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=kn(i,this.array)),i}setZ(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=kn(i,this.array)),i}setW(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,E){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),E=si(E,this.array)),this.array[t+0]=i,this.array[t+1]=E,this}setXYZ(t,i,E,s){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),E=si(E,this.array),s=si(s,this.array)),this.array[t+0]=i,this.array[t+1]=E,this.array[t+2]=s,this}setXYZW(t,i,E,s,c){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),E=si(E,this.array),s=si(s,this.array),c=si(c,this.array)),this.array[t+0]=i,this.array[t+1]=E,this.array[t+2]=s,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}}class gu extends RB{constructor(t,i,E){super(new Uint16Array(t),i,E)}}class tu extends RB{constructor(t,i,E){super(new Uint32Array(t),i,E)}}class mB extends RB{constructor(t,i,E){super(new Float32Array(t),i,E)}}let XM=0;const xi=new de,Cr=new Si,lQ=new zA,mi=new Wn,bn=new Wn,Le=new zA;class UC extends UQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?tu:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,E=0){this.groups.push({start:t,count:i,materialIndex:E})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const E=this.attributes.normal;if(E!==void 0){const c=new nI().getNormalMatrix(t);E.applyNormalMatrix(c),E.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,E){return xi.makeTranslation(t,i,E),this.applyMatrix4(xi),this}scale(t,i,E){return xi.makeScale(t,i,E),this.applyMatrix4(xi),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lQ).negate(),this.translate(lQ.x,lQ.y,lQ.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const E=[];for(let s=0,c=t.length;s<c;s++){const p=t[s];E.push(p.x,p.y,p.z||0)}this.setAttribute("position",new mB(E,3))}else{for(let E=0,s=i.count;E<s;E++){const c=t[E];i.setXYZ(E,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new zA(-1/0,-1/0,-1/0),new zA(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let E=0,s=i.length;E<s;E++){const c=i[E];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new zA,1/0);return}if(t){const E=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),i)for(let c=0,p=i.length;c<p;c++){const f=i[c];bn.setFromBufferAttribute(f),this.morphTargetsRelative?(Le.addVectors(mi.min,bn.min),mi.expandByPoint(Le),Le.addVectors(mi.max,bn.max),mi.expandByPoint(Le)):(mi.expandByPoint(bn.min),mi.expandByPoint(bn.max))}mi.getCenter(E);let s=0;for(let c=0,p=t.count;c<p;c++)Le.fromBufferAttribute(t,c),s=Math.max(s,E.distanceToSquared(Le));if(i)for(let c=0,p=i.length;c<p;c++){const f=i[c],G=this.morphTargetsRelative;for(let N=0,k=f.count;N<k;N++)Le.fromBufferAttribute(f,N),G&&(lQ.fromBufferAttribute(t,N),Le.add(lQ)),s=Math.max(s,E.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const E=i.position,s=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new RB(new Float32Array(4*E.count),4));const p=this.getAttribute("tangent"),f=[],G=[];for(let MA=0;MA<E.count;MA++)f[MA]=new zA,G[MA]=new zA;const N=new zA,k=new zA,J=new zA,x=new WI,Y=new WI,z=new WI,Z=new zA,L=new zA;function F(MA,eA,$){N.fromBufferAttribute(E,MA),k.fromBufferAttribute(E,eA),J.fromBufferAttribute(E,$),x.fromBufferAttribute(c,MA),Y.fromBufferAttribute(c,eA),z.fromBufferAttribute(c,$),k.sub(N),J.sub(N),Y.sub(x),z.sub(x);const RA=1/(Y.x*z.y-z.x*Y.y);isFinite(RA)&&(Z.copy(k).multiplyScalar(z.y).addScaledVector(J,-Y.y).multiplyScalar(RA),L.copy(J).multiplyScalar(Y.x).addScaledVector(k,-z.x).multiplyScalar(RA),f[MA].add(Z),f[eA].add(Z),f[$].add(Z),G[MA].add(L),G[eA].add(L),G[$].add(L))}let hA=this.groups;hA.length===0&&(hA=[{start:0,count:t.count}]);for(let MA=0,eA=hA.length;MA<eA;++MA){const $=hA[MA],RA=$.start,tg=$.count;for(let Ag=RA,lg=RA+tg;Ag<lg;Ag+=3)F(t.getX(Ag+0),t.getX(Ag+1),t.getX(Ag+2))}const rA=new zA,tA=new zA,TA=new zA,mA=new zA;function pA(MA){TA.fromBufferAttribute(s,MA),mA.copy(TA);const eA=f[MA];rA.copy(eA),rA.sub(TA.multiplyScalar(TA.dot(eA))).normalize(),tA.crossVectors(mA,eA);const RA=tA.dot(G[MA])<0?-1:1;p.setXYZW(MA,rA.x,rA.y,rA.z,RA)}for(let MA=0,eA=hA.length;MA<eA;++MA){const $=hA[MA],RA=$.start,tg=$.count;for(let Ag=RA,lg=RA+tg;Ag<lg;Ag+=3)pA(t.getX(Ag+0)),pA(t.getX(Ag+1)),pA(t.getX(Ag+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let E=this.getAttribute("normal");if(E===void 0)E=new RB(new Float32Array(i.count*3),3),this.setAttribute("normal",E);else for(let x=0,Y=E.count;x<Y;x++)E.setXYZ(x,0,0,0);const s=new zA,c=new zA,p=new zA,f=new zA,G=new zA,N=new zA,k=new zA,J=new zA;if(t)for(let x=0,Y=t.count;x<Y;x+=3){const z=t.getX(x+0),Z=t.getX(x+1),L=t.getX(x+2);s.fromBufferAttribute(i,z),c.fromBufferAttribute(i,Z),p.fromBufferAttribute(i,L),k.subVectors(p,c),J.subVectors(s,c),k.cross(J),f.fromBufferAttribute(E,z),G.fromBufferAttribute(E,Z),N.fromBufferAttribute(E,L),f.add(k),G.add(k),N.add(k),E.setXYZ(z,f.x,f.y,f.z),E.setXYZ(Z,G.x,G.y,G.z),E.setXYZ(L,N.x,N.y,N.z)}else for(let x=0,Y=i.count;x<Y;x+=3)s.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),p.fromBufferAttribute(i,x+2),k.subVectors(p,c),J.subVectors(s,c),k.cross(J),E.setXYZ(x+0,k.x,k.y,k.z),E.setXYZ(x+1,k.x,k.y,k.z),E.setXYZ(x+2,k.x,k.y,k.z);this.normalizeNormals(),E.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,E=t.count;i<E;i++)Le.fromBufferAttribute(t,i),Le.normalize(),t.setXYZ(i,Le.x,Le.y,Le.z)}toNonIndexed(){function t(f,G){const N=f.array,k=f.itemSize,J=f.normalized,x=new N.constructor(G.length*k);let Y=0,z=0;for(let Z=0,L=G.length;Z<L;Z++){f.isInterleavedBufferAttribute?Y=G[Z]*f.data.stride+f.offset:Y=G[Z]*k;for(let F=0;F<k;F++)x[z++]=N[Y++]}return new RB(x,k,J)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new UC,E=this.index.array,s=this.attributes;for(const f in s){const G=s[f],N=t(G,E);i.setAttribute(f,N)}const c=this.morphAttributes;for(const f in c){const G=[],N=c[f];for(let k=0,J=N.length;k<J;k++){const x=N[k],Y=t(x,E);G.push(Y)}i.morphAttributes[f]=G}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let f=0,G=p.length;f<G;f++){const N=p[f];i.addGroup(N.start,N.count,N.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const G=this.parameters;for(const N in G)G[N]!==void 0&&(t[N]=G[N]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const E=this.attributes;for(const G in E){const N=E[G];t.data.attributes[G]=N.toJSON(t.data)}const s={};let c=!1;for(const G in this.morphAttributes){const N=this.morphAttributes[G],k=[];for(let J=0,x=N.length;J<x;J++){const Y=N[J];k.push(Y.toJSON(t.data))}k.length>0&&(s[G]=k,c=!0)}c&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(t.data.groups=JSON.parse(JSON.stringify(p)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const E=t.index;E!==null&&this.setIndex(E.clone(i));const s=t.attributes;for(const N in s){const k=s[N];this.setAttribute(N,k.clone(i))}const c=t.morphAttributes;for(const N in c){const k=[],J=c[N];for(let x=0,Y=J.length;x<Y;x++)k.push(J[x].clone(i));this.morphAttributes[N]=k}this.morphTargetsRelative=t.morphTargetsRelative;const p=t.groups;for(let N=0,k=p.length;N<k;N++){const J=p[N];this.addGroup(J.start,J.count,J.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const G=t.boundingSphere;return G!==null&&(this.boundingSphere=G.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new de,oE=new TM,os=new sh,Id=new zA,ss=new zA,as=new zA,rs=new zA,Er=new zA,hs=new zA,ed=new zA,cs=new zA;class iB extends Si{constructor(t=new UC,i=new Au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,E=Object.keys(i);if(E.length>0){const s=i[E[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,p=s.length;c<p;c++){const f=s[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const E=this.geometry,s=E.attributes.position,c=E.morphAttributes.position,p=E.morphTargetsRelative;i.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(c&&f){hs.set(0,0,0);for(let G=0,N=c.length;G<N;G++){const k=f[G],J=c[G];k!==0&&(Er.fromBufferAttribute(J,t),p?hs.addScaledVector(Er,k):hs.addScaledVector(Er.sub(i),k))}i.add(hs)}return i}raycast(t,i){const E=this.geometry,s=this.material,c=this.matrixWorld;s!==void 0&&(E.boundingSphere===null&&E.computeBoundingSphere(),os.copy(E.boundingSphere),os.applyMatrix4(c),oE.copy(t.ray).recast(t.near),!(os.containsPoint(oE.origin)===!1&&(oE.intersectSphere(os,Id)===null||oE.origin.distanceToSquared(Id)>(t.far-t.near)**2))&&(td.copy(c).invert(),oE.copy(t.ray).applyMatrix4(td),!(E.boundingBox!==null&&oE.intersectsBox(E.boundingBox)===!1)&&this._computeIntersections(t,i,oE)))}_computeIntersections(t,i,E){let s;const c=this.geometry,p=this.material,f=c.index,G=c.attributes.position,N=c.attributes.uv,k=c.attributes.uv1,J=c.attributes.normal,x=c.groups,Y=c.drawRange;if(f!==null)if(Array.isArray(p))for(let z=0,Z=x.length;z<Z;z++){const L=x[z],F=p[L.materialIndex],hA=Math.max(L.start,Y.start),rA=Math.min(f.count,Math.min(L.start+L.count,Y.start+Y.count));for(let tA=hA,TA=rA;tA<TA;tA+=3){const mA=f.getX(tA),pA=f.getX(tA+1),MA=f.getX(tA+2);s=ls(this,F,t,E,N,k,J,mA,pA,MA),s&&(s.faceIndex=Math.floor(tA/3),s.face.materialIndex=L.materialIndex,i.push(s))}}else{const z=Math.max(0,Y.start),Z=Math.min(f.count,Y.start+Y.count);for(let L=z,F=Z;L<F;L+=3){const hA=f.getX(L),rA=f.getX(L+1),tA=f.getX(L+2);s=ls(this,p,t,E,N,k,J,hA,rA,tA),s&&(s.faceIndex=Math.floor(L/3),i.push(s))}}else if(G!==void 0)if(Array.isArray(p))for(let z=0,Z=x.length;z<Z;z++){const L=x[z],F=p[L.materialIndex],hA=Math.max(L.start,Y.start),rA=Math.min(G.count,Math.min(L.start+L.count,Y.start+Y.count));for(let tA=hA,TA=rA;tA<TA;tA+=3){const mA=tA,pA=tA+1,MA=tA+2;s=ls(this,F,t,E,N,k,J,mA,pA,MA),s&&(s.faceIndex=Math.floor(tA/3),s.face.materialIndex=L.materialIndex,i.push(s))}}else{const z=Math.max(0,Y.start),Z=Math.min(G.count,Y.start+Y.count);for(let L=z,F=Z;L<F;L+=3){const hA=L,rA=L+1,tA=L+2;s=ls(this,p,t,E,N,k,J,hA,rA,tA),s&&(s.faceIndex=Math.floor(L/3),i.push(s))}}}}function zM(o,t,i,E,s,c,p,f){let G;if(t.side===ri?G=E.intersectTriangle(p,c,s,!0,f):G=E.intersectTriangle(s,c,p,t.side===FC,f),G===null)return null;cs.copy(f),cs.applyMatrix4(o.matrixWorld);const N=i.ray.origin.distanceTo(cs);return N<i.near||N>i.far?null:{distance:N,point:cs.clone(),object:o}}function ls(o,t,i,E,s,c,p,f,G,N){o.getVertexPosition(f,ss),o.getVertexPosition(G,as),o.getVertexPosition(N,rs);const k=zM(o,t,i,E,ss,as,rs,ed);if(k){const J=new zA;IB.getBarycoord(ed,ss,as,rs,J),s&&(k.uv=IB.getInterpolatedAttribute(s,f,G,N,J,new WI)),c&&(k.uv1=IB.getInterpolatedAttribute(c,f,G,N,J,new WI)),p&&(k.normal=IB.getInterpolatedAttribute(p,f,G,N,J,new zA),k.normal.dot(E.direction)>0&&k.normal.multiplyScalar(-1));const x={a:f,b:G,c:N,normal:new zA,materialIndex:0};IB.getNormal(ss,as,rs,x.normal),k.face=x,k.barycoord=J}return k}class kQ extends UC{constructor(t=1,i=1,E=1,s=1,c=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:E,widthSegments:s,heightSegments:c,depthSegments:p};const f=this;s=Math.floor(s),c=Math.floor(c),p=Math.floor(p);const G=[],N=[],k=[],J=[];let x=0,Y=0;z("z","y","x",-1,-1,E,i,t,p,c,0),z("z","y","x",1,-1,E,i,-t,p,c,1),z("x","z","y",1,1,t,E,i,s,p,2),z("x","z","y",1,-1,t,E,-i,s,p,3),z("x","y","z",1,-1,t,i,E,s,c,4),z("x","y","z",-1,-1,t,i,-E,s,c,5),this.setIndex(G),this.setAttribute("position",new mB(N,3)),this.setAttribute("normal",new mB(k,3)),this.setAttribute("uv",new mB(J,2));function z(Z,L,F,hA,rA,tA,TA,mA,pA,MA,eA){const $=tA/pA,RA=TA/MA,tg=tA/2,Ag=TA/2,lg=mA/2,ag=pA+1,Bg=MA+1;let fg=0,ZA=0;const Wg=new zA;for(let Et=0;Et<Bg;Et++){const dt=Et*RA-Ag;for(let xt=0;xt<ag;xt++){const QI=xt*$-tg;Wg[Z]=QI*hA,Wg[L]=dt*rA,Wg[F]=lg,N.push(Wg.x,Wg.y,Wg.z),Wg[Z]=0,Wg[L]=0,Wg[F]=mA>0?1:-1,k.push(Wg.x,Wg.y,Wg.z),J.push(xt/pA),J.push(1-Et/MA),fg+=1}}for(let Et=0;Et<MA;Et++)for(let dt=0;dt<pA;dt++){const xt=x+dt+ag*Et,QI=x+dt+ag*(Et+1),Ig=x+(dt+1)+ag*(Et+1),mg=x+(dt+1)+ag*Et;G.push(xt,QI,mg),G.push(QI,Ig,mg),ZA+=6}f.addGroup(Y,ZA,eA),Y+=ZA,x+=fg}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kQ(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function FQ(o){const t={};for(const i in o){t[i]={};for(const E in o[i]){const s=o[i][E];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][E]=null):t[i][E]=s.clone():Array.isArray(s)?t[i][E]=s.slice():t[i][E]=s}}return t}function Ci(o){const t={};for(let i=0;i<o.length;i++){const E=FQ(o[i]);for(const s in E)t[s]=E[s]}return t}function jM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Iu(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:LI.workingColorSpace}const $M={clone:FQ,merge:Ci};var AR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class NC extends Pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AR,this.fragmentShader=gR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=FQ(t.uniforms),this.uniformsGroups=jM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const p=this.uniforms[s].value;p&&p.isTexture?i.uniforms[s]={type:"t",value:p.toJSON(t).uuid}:p&&p.isColor?i.uniforms[s]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[s]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[s]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[s]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[s]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[s]={type:"m4",value:p.toArray()}:i.uniforms[s]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const E={};for(const s in this.extensions)this.extensions[s]===!0&&(E[s]=!0);return Object.keys(E).length>0&&(i.extensions=E),i}}class eu extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=AC}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const MC=new zA,id=new WI,Bd=new WI;class bi extends eu{constructor(t=50,i=1,E=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=E,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ih*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ih*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,E){MC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(MC.x,MC.y).multiplyScalar(-t/MC.z),MC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),E.set(MC.x,MC.y).multiplyScalar(-t/MC.z)}getViewSize(t,i){return this.getViewBounds(t,id,Bd),i.subVectors(Bd,id)}setViewOffset(t,i,E,s,c,p){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=E,this.view.offsetY=s,this.view.width=c,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ta*.5*this.fov)/this.zoom,E=2*i,s=this.aspect*E,c=-.5*s;const p=this.view;if(this.view!==null&&this.view.enabled){const G=p.fullWidth,N=p.fullHeight;c+=p.offsetX*s/G,i-=p.offsetY*E/N,s*=p.width/G,E*=p.height/N}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+s,i,i-E,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const dQ=-90,uQ=1;class tR extends Si{constructor(t,i,E){super(),this.type="CubeCamera",this.renderTarget=E,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bi(dQ,uQ,t,i);s.layers=this.layers,this.add(s);const c=new bi(dQ,uQ,t,i);c.layers=this.layers,this.add(c);const p=new bi(dQ,uQ,t,i);p.layers=this.layers,this.add(p);const f=new bi(dQ,uQ,t,i);f.layers=this.layers,this.add(f);const G=new bi(dQ,uQ,t,i);G.layers=this.layers,this.add(G);const N=new bi(dQ,uQ,t,i);N.layers=this.layers,this.add(N)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[E,s,c,p,f,G]=i;for(const N of i)this.remove(N);if(t===AC)E.up.set(0,1,0),E.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),G.up.set(0,1,0),G.lookAt(0,0,-1);else if(t===Fs)E.up.set(0,-1,0),E.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),G.up.set(0,-1,0),G.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const N of i)this.add(N),N.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:E,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,p,f,G,N,k]=this.children,J=t.getRenderTarget(),x=t.getActiveCubeFace(),Y=t.getActiveMipmapLevel(),z=t.xr.enabled;t.xr.enabled=!1;const Z=E.texture.generateMipmaps;E.texture.generateMipmaps=!1,t.setRenderTarget(E,0,s),t.render(i,c),t.setRenderTarget(E,1,s),t.render(i,p),t.setRenderTarget(E,2,s),t.render(i,f),t.setRenderTarget(E,3,s),t.render(i,G),t.setRenderTarget(E,4,s),t.render(i,N),E.texture.generateMipmaps=Z,t.setRenderTarget(E,5,s),t.render(i,k),t.setRenderTarget(J,x,Y),t.xr.enabled=z,E.texture.needsPMREMUpdate=!0}}class iu extends hi{constructor(t,i,E,s,c,p,f,G,N,k){t=t!==void 0?t:[],i=i!==void 0?i:RQ,super(t,i,E,s,c,p,f,G,N,k),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IR extends wE{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const E={width:t,height:t,depth:1},s=[E,E,E,E,E,E];this.texture=new iu(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:MB}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const E={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kQ(5,5,5),c=new NC({name:"CubemapFromEquirect",uniforms:FQ(E.uniforms),vertexShader:E.vertexShader,fragmentShader:E.fragmentShader,side:ri,blending:SC});c.uniforms.tEquirect.value=i;const p=new iB(s,c),f=i.minFilter;return i.minFilter===DE&&(i.minFilter=MB),new tR(1,10,this).update(t,p),i.minFilter=f,p.geometry.dispose(),p.material.dispose(),this}clear(t,i,E,s){const c=t.getRenderTarget();for(let p=0;p<6;p++)t.setRenderTarget(this,p),t.clear(i,E,s);t.setRenderTarget(c)}}const Qr=new zA,eR=new zA,iR=new nI;class hE{constructor(t=new zA(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,E,s){return this.normal.set(t,i,E),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,E){const s=Qr.subVectors(E,i).cross(eR.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const E=t.delta(Qr),s=this.normal.dot(E);if(s===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/s;return c<0||c>1?null:i.copy(t.start).addScaledVector(E,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),E=this.distanceToPoint(t.end);return i<0&&E>0||E<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const E=i||iR.getNormalMatrix(t),s=this.coplanarPoint(Qr).applyMatrix4(t),c=this.normal.applyMatrix3(E).normalize();return this.constant=-s.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sE=new sh,ds=new zA;class Bu{constructor(t=new hE,i=new hE,E=new hE,s=new hE,c=new hE,p=new hE){this.planes=[t,i,E,s,c,p]}set(t,i,E,s,c,p){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(E),f[3].copy(s),f[4].copy(c),f[5].copy(p),this}copy(t){const i=this.planes;for(let E=0;E<6;E++)i[E].copy(t.planes[E]);return this}setFromProjectionMatrix(t,i=AC){const E=this.planes,s=t.elements,c=s[0],p=s[1],f=s[2],G=s[3],N=s[4],k=s[5],J=s[6],x=s[7],Y=s[8],z=s[9],Z=s[10],L=s[11],F=s[12],hA=s[13],rA=s[14],tA=s[15];if(E[0].setComponents(G-c,x-N,L-Y,tA-F).normalize(),E[1].setComponents(G+c,x+N,L+Y,tA+F).normalize(),E[2].setComponents(G+p,x+k,L+z,tA+hA).normalize(),E[3].setComponents(G-p,x-k,L-z,tA-hA).normalize(),E[4].setComponents(G-f,x-J,L-Z,tA-rA).normalize(),i===AC)E[5].setComponents(G+f,x+J,L+Z,tA+rA).normalize();else if(i===Fs)E[5].setComponents(f,J,Z,rA).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sE.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sE.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sE)}intersectsSprite(t){return sE.center.set(0,0,0),sE.radius=.7071067811865476,sE.applyMatrix4(t.matrixWorld),this.intersectsSphere(sE)}intersectsSphere(t){const i=this.planes,E=t.center,s=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(E)<s)return!1;return!0}intersectsBox(t){const i=this.planes;for(let E=0;E<6;E++){const s=i[E];if(ds.x=s.normal.x>0?t.max.x:t.min.x,ds.y=s.normal.y>0?t.max.y:t.min.y,ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let E=0;E<6;E++)if(i[E].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let o=null,t=!1,i=null,E=null;function s(c,p){i(c,p),E=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&(E=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(E),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function BR(o){const t=new WeakMap;function i(f,G){const N=f.array,k=f.usage,J=N.byteLength,x=o.createBuffer();o.bindBuffer(G,x),o.bufferData(G,N,k),f.onUploadCallback();let Y;if(N instanceof Float32Array)Y=o.FLOAT;else if(N instanceof Uint16Array)f.isFloat16BufferAttribute?Y=o.HALF_FLOAT:Y=o.UNSIGNED_SHORT;else if(N instanceof Int16Array)Y=o.SHORT;else if(N instanceof Uint32Array)Y=o.UNSIGNED_INT;else if(N instanceof Int32Array)Y=o.INT;else if(N instanceof Int8Array)Y=o.BYTE;else if(N instanceof Uint8Array)Y=o.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)Y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:x,type:Y,bytesPerElement:N.BYTES_PER_ELEMENT,version:f.version,size:J}}function E(f,G,N){const k=G.array,J=G.updateRanges;if(o.bindBuffer(N,f),J.length===0)o.bufferSubData(N,0,k);else{J.sort((Y,z)=>Y.start-z.start);let x=0;for(let Y=1;Y<J.length;Y++){const z=J[x],Z=J[Y];Z.start<=z.start+z.count+1?z.count=Math.max(z.count,Z.start+Z.count-z.start):(++x,J[x]=Z)}J.length=x+1;for(let Y=0,z=J.length;Y<z;Y++){const Z=J[Y];o.bufferSubData(N,Z.start*k.BYTES_PER_ELEMENT,k,Z.start,Z.count)}G.clearUpdateRanges()}G.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const G=t.get(f);G&&(o.deleteBuffer(G.buffer),t.delete(f))}function p(f,G){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const k=t.get(f);(!k||k.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const N=t.get(f);if(N===void 0)t.set(f,i(f,G));else if(N.version<f.version){if(N.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");E(N.buffer,f,G),N.version=f.version}}return{get:s,remove:c,update:p}}class Ls extends UC{constructor(t=1,i=1,E=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:E,heightSegments:s};const c=t/2,p=i/2,f=Math.floor(E),G=Math.floor(s),N=f+1,k=G+1,J=t/f,x=i/G,Y=[],z=[],Z=[],L=[];for(let F=0;F<k;F++){const hA=F*x-p;for(let rA=0;rA<N;rA++){const tA=rA*J-c;z.push(tA,-hA,0),Z.push(0,0,1),L.push(rA/f),L.push(1-F/G)}}for(let F=0;F<G;F++)for(let hA=0;hA<f;hA++){const rA=hA+N*F,tA=hA+N*(F+1),TA=hA+1+N*(F+1),mA=hA+1+N*F;Y.push(rA,tA,mA),Y.push(tA,TA,mA)}this.setIndex(Y),this.setAttribute("position",new mB(z,3)),this.setAttribute("normal",new mB(Z,3)),this.setAttribute("uv",new mB(L,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}var CR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ER=`#ifdef USE_ALPHAHASH
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
#endif`,QR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aR=`#ifdef USE_AOMAP
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
#endif`,rR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hR=`#ifdef USE_BATCHING
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
#endif`,cR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DR=`#ifdef USE_IRIDESCENCE
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
#endif`,fR=`#ifdef USE_BUMPMAP
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
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FR=`#define PI 3.141592653589793
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
} // validated`,NR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UR=`vec3 transformedNormal = objectNormal;
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
#endif`,kR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bR="gl_FragColor = linearToOutputTexel( gl_FragColor );",KR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YR=`#ifdef USE_ENVMAP
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
#endif`,vR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,TR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VR=`#ifdef USE_GRADIENTMAP
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
}`,ZR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jR=`uniform bool receiveShadow;
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
#endif`,$R=`#ifdef USE_ENVMAP
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
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,aS=`#if DEPTH_PACKING == 3200
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
}`,rS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
}`,uS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
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
}`,yS=`#define MATCAP
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
}`,MS=`#define MATCAP
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
}`,RS=`#define NORMAL
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
}`,mS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,GS=`#define PHONG
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
}`,FS=`#define STANDARD
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
}`,NS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,kS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,xS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,KS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,rI={alphahash_fragment:CR,alphahash_pars_fragment:ER,alphamap_fragment:QR,alphamap_pars_fragment:nR,alphatest_fragment:oR,alphatest_pars_fragment:sR,aomap_fragment:aR,aomap_pars_fragment:rR,batching_pars_vertex:hR,batching_vertex:cR,begin_vertex:lR,beginnormal_vertex:dR,bsdfs:uR,iridescence_fragment:DR,bumpmap_pars_fragment:fR,clipping_planes_fragment:wR,clipping_planes_pars_fragment:pR,clipping_planes_pars_vertex:yR,clipping_planes_vertex:MR,color_fragment:RR,color_pars_fragment:mR,color_pars_vertex:SR,color_vertex:GR,common:FR,cube_uv_reflection_fragment:NR,defaultnormal_vertex:UR,displacementmap_pars_vertex:kR,displacementmap_vertex:LR,emissivemap_fragment:xR,emissivemap_pars_fragment:JR,colorspace_fragment:bR,colorspace_pars_fragment:KR,envmap_fragment:YR,envmap_common_pars_fragment:vR,envmap_pars_fragment:HR,envmap_pars_vertex:TR,envmap_physical_pars_fragment:$R,envmap_vertex:qR,fog_vertex:_R,fog_pars_vertex:WR,fog_fragment:PR,fog_pars_fragment:OR,gradientmap_pars_fragment:VR,lightmap_pars_fragment:ZR,lights_lambert_fragment:XR,lights_lambert_pars_fragment:zR,lights_pars_begin:jR,lights_toon_fragment:Am,lights_toon_pars_fragment:gm,lights_phong_fragment:tm,lights_phong_pars_fragment:Im,lights_physical_fragment:em,lights_physical_pars_fragment:im,lights_fragment_begin:Bm,lights_fragment_maps:Cm,lights_fragment_end:Em,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:sm,map_fragment:am,map_pars_fragment:rm,map_particle_fragment:hm,map_particle_pars_fragment:cm,metalnessmap_fragment:lm,metalnessmap_pars_fragment:dm,morphinstance_vertex:um,morphcolor_vertex:Dm,morphnormal_vertex:fm,morphtarget_pars_vertex:wm,morphtarget_vertex:pm,normal_fragment_begin:ym,normal_fragment_maps:Mm,normal_pars_fragment:Rm,normal_pars_vertex:mm,normal_vertex:Sm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:km,opaque_fragment:Lm,packing:xm,premultiplied_alpha_fragment:Jm,project_vertex:bm,dithering_fragment:Km,dithering_pars_fragment:Ym,roughnessmap_fragment:vm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:qm,shadowmap_vertex:_m,shadowmask_pars_fragment:Wm,skinbase_vertex:Pm,skinning_pars_vertex:Om,skinning_vertex:Vm,skinnormal_vertex:Zm,specularmap_fragment:Xm,specularmap_pars_fragment:zm,tonemapping_fragment:jm,tonemapping_pars_fragment:$m,transmission_fragment:AS,transmission_pars_fragment:gS,uv_pars_fragment:tS,uv_pars_vertex:IS,uv_vertex:eS,worldpos_vertex:iS,background_vert:BS,background_frag:CS,backgroundCube_vert:ES,backgroundCube_frag:QS,cube_vert:nS,cube_frag:oS,depth_vert:sS,depth_frag:aS,distanceRGBA_vert:rS,distanceRGBA_frag:hS,equirect_vert:cS,equirect_frag:lS,linedashed_vert:dS,linedashed_frag:uS,meshbasic_vert:DS,meshbasic_frag:fS,meshlambert_vert:wS,meshlambert_frag:pS,meshmatcap_vert:yS,meshmatcap_frag:MS,meshnormal_vert:RS,meshnormal_frag:mS,meshphong_vert:SS,meshphong_frag:GS,meshphysical_vert:FS,meshphysical_frag:NS,meshtoon_vert:US,meshtoon_frag:kS,points_vert:LS,points_frag:xS,shadow_vert:JS,shadow_frag:bS,sprite_vert:KS,sprite_frag:YS},nt={common:{diffuse:{value:new qI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nI},alphaMap:{value:null},alphaMapTransform:{value:new nI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nI}},envmap:{envMap:{value:null},envMapRotation:{value:new nI},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nI},normalScale:{value:new WI(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nI},alphaTest:{value:0},uvTransform:{value:new nI}},sprite:{diffuse:{value:new qI(16777215)},opacity:{value:1},center:{value:new WI(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nI},alphaMap:{value:null},alphaMapTransform:{value:new nI},alphaTest:{value:0}}},pB={basic:{uniforms:Ci([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:rI.meshbasic_vert,fragmentShader:rI.meshbasic_frag},lambert:{uniforms:Ci([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qI(0)}}]),vertexShader:rI.meshlambert_vert,fragmentShader:rI.meshlambert_frag},phong:{uniforms:Ci([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qI(0)},specular:{value:new qI(1118481)},shininess:{value:30}}]),vertexShader:rI.meshphong_vert,fragmentShader:rI.meshphong_frag},standard:{uniforms:Ci([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new qI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rI.meshphysical_vert,fragmentShader:rI.meshphysical_frag},toon:{uniforms:Ci([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new qI(0)}}]),vertexShader:rI.meshtoon_vert,fragmentShader:rI.meshtoon_frag},matcap:{uniforms:Ci([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:rI.meshmatcap_vert,fragmentShader:rI.meshmatcap_frag},points:{uniforms:Ci([nt.points,nt.fog]),vertexShader:rI.points_vert,fragmentShader:rI.points_frag},dashed:{uniforms:Ci([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rI.linedashed_vert,fragmentShader:rI.linedashed_frag},depth:{uniforms:Ci([nt.common,nt.displacementmap]),vertexShader:rI.depth_vert,fragmentShader:rI.depth_frag},normal:{uniforms:Ci([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:rI.meshnormal_vert,fragmentShader:rI.meshnormal_frag},sprite:{uniforms:Ci([nt.sprite,nt.fog]),vertexShader:rI.sprite_vert,fragmentShader:rI.sprite_frag},background:{uniforms:{uvTransform:{value:new nI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rI.background_vert,fragmentShader:rI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nI}},vertexShader:rI.backgroundCube_vert,fragmentShader:rI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rI.cube_vert,fragmentShader:rI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rI.equirect_vert,fragmentShader:rI.equirect_frag},distanceRGBA:{uniforms:Ci([nt.common,nt.displacementmap,{referencePosition:{value:new zA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rI.distanceRGBA_vert,fragmentShader:rI.distanceRGBA_frag},shadow:{uniforms:Ci([nt.lights,nt.fog,{color:{value:new qI(0)},opacity:{value:1}}]),vertexShader:rI.shadow_vert,fragmentShader:rI.shadow_frag}};pB.physical={uniforms:Ci([pB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nI},clearcoatNormalScale:{value:new WI(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nI},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nI},sheen:{value:0},sheenColor:{value:new qI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nI},transmissionSamplerSize:{value:new WI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nI},attenuationDistance:{value:0},attenuationColor:{value:new qI(0)},specularColor:{value:new qI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nI},anisotropyVector:{value:new WI},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nI}}]),vertexShader:rI.meshphysical_vert,fragmentShader:rI.meshphysical_frag};const us={r:0,b:0,g:0},aE=new IC,vS=new de;function HS(o,t,i,E,s,c,p){const f=new qI(0);let G=c===!0?0:1,N,k,J=null,x=0,Y=null;function z(hA){let rA=hA.isScene===!0?hA.background:null;return rA&&rA.isTexture&&(rA=(hA.backgroundBlurriness>0?i:t).get(rA)),rA}function Z(hA){let rA=!1;const tA=z(hA);tA===null?F(f,G):tA&&tA.isColor&&(F(tA,1),rA=!0);const TA=o.xr.getEnvironmentBlendMode();TA==="additive"?E.buffers.color.setClear(0,0,0,1,p):TA==="alpha-blend"&&E.buffers.color.setClear(0,0,0,0,p),(o.autoClear||rA)&&(E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function L(hA,rA){const tA=z(rA);tA&&(tA.isCubeTexture||tA.mapping===Us)?(k===void 0&&(k=new iB(new kQ(1,1,1),new NC({name:"BackgroundCubeMaterial",uniforms:FQ(pB.backgroundCube.uniforms),vertexShader:pB.backgroundCube.vertexShader,fragmentShader:pB.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),k.geometry.deleteAttribute("normal"),k.geometry.deleteAttribute("uv"),k.onBeforeRender=function(TA,mA,pA){this.matrixWorld.copyPosition(pA.matrixWorld)},Object.defineProperty(k.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(k)),aE.copy(rA.backgroundRotation),aE.x*=-1,aE.y*=-1,aE.z*=-1,tA.isCubeTexture&&tA.isRenderTargetTexture===!1&&(aE.y*=-1,aE.z*=-1),k.material.uniforms.envMap.value=tA,k.material.uniforms.flipEnvMap.value=tA.isCubeTexture&&tA.isRenderTargetTexture===!1?-1:1,k.material.uniforms.backgroundBlurriness.value=rA.backgroundBlurriness,k.material.uniforms.backgroundIntensity.value=rA.backgroundIntensity,k.material.uniforms.backgroundRotation.value.setFromMatrix4(vS.makeRotationFromEuler(aE)),k.material.toneMapped=LI.getTransfer(tA.colorSpace)!==_I,(J!==tA||x!==tA.version||Y!==o.toneMapping)&&(k.material.needsUpdate=!0,J=tA,x=tA.version,Y=o.toneMapping),k.layers.enableAll(),hA.unshift(k,k.geometry,k.material,0,0,null)):tA&&tA.isTexture&&(N===void 0&&(N=new iB(new Ls(2,2),new NC({name:"BackgroundMaterial",uniforms:FQ(pB.background.uniforms),vertexShader:pB.background.vertexShader,fragmentShader:pB.background.fragmentShader,side:FC,depthTest:!1,depthWrite:!1,fog:!1})),N.geometry.deleteAttribute("normal"),Object.defineProperty(N.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(N)),N.material.uniforms.t2D.value=tA,N.material.uniforms.backgroundIntensity.value=rA.backgroundIntensity,N.material.toneMapped=LI.getTransfer(tA.colorSpace)!==_I,tA.matrixAutoUpdate===!0&&tA.updateMatrix(),N.material.uniforms.uvTransform.value.copy(tA.matrix),(J!==tA||x!==tA.version||Y!==o.toneMapping)&&(N.material.needsUpdate=!0,J=tA,x=tA.version,Y=o.toneMapping),N.layers.enableAll(),hA.unshift(N,N.geometry,N.material,0,0,null))}function F(hA,rA){hA.getRGB(us,Iu(o)),E.buffers.color.setClear(us.r,us.g,us.b,rA,p)}return{getClearColor:function(){return f},setClearColor:function(hA,rA=1){f.set(hA),G=rA,F(f,G)},getClearAlpha:function(){return G},setClearAlpha:function(hA){G=hA,F(f,G)},render:Z,addToRenderList:L}}function TS(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),E={},s=x(null);let c=s,p=!1;function f($,RA,tg,Ag,lg){let ag=!1;const Bg=J(Ag,tg,RA);c!==Bg&&(c=Bg,N(c.object)),ag=Y($,Ag,tg,lg),ag&&z($,Ag,tg,lg),lg!==null&&t.update(lg,o.ELEMENT_ARRAY_BUFFER),(ag||p)&&(p=!1,tA($,RA,tg,Ag),lg!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lg).buffer))}function G(){return o.createVertexArray()}function N($){return o.bindVertexArray($)}function k($){return o.deleteVertexArray($)}function J($,RA,tg){const Ag=tg.wireframe===!0;let lg=E[$.id];lg===void 0&&(lg={},E[$.id]=lg);let ag=lg[RA.id];ag===void 0&&(ag={},lg[RA.id]=ag);let Bg=ag[Ag];return Bg===void 0&&(Bg=x(G()),ag[Ag]=Bg),Bg}function x($){const RA=[],tg=[],Ag=[];for(let lg=0;lg<i;lg++)RA[lg]=0,tg[lg]=0,Ag[lg]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:RA,enabledAttributes:tg,attributeDivisors:Ag,object:$,attributes:{},index:null}}function Y($,RA,tg,Ag){const lg=c.attributes,ag=RA.attributes;let Bg=0;const fg=tg.getAttributes();for(const ZA in fg)if(fg[ZA].location>=0){const Et=lg[ZA];let dt=ag[ZA];if(dt===void 0&&(ZA==="instanceMatrix"&&$.instanceMatrix&&(dt=$.instanceMatrix),ZA==="instanceColor"&&$.instanceColor&&(dt=$.instanceColor)),Et===void 0||Et.attribute!==dt||dt&&Et.data!==dt.data)return!0;Bg++}return c.attributesNum!==Bg||c.index!==Ag}function z($,RA,tg,Ag){const lg={},ag=RA.attributes;let Bg=0;const fg=tg.getAttributes();for(const ZA in fg)if(fg[ZA].location>=0){let Et=ag[ZA];Et===void 0&&(ZA==="instanceMatrix"&&$.instanceMatrix&&(Et=$.instanceMatrix),ZA==="instanceColor"&&$.instanceColor&&(Et=$.instanceColor));const dt={};dt.attribute=Et,Et&&Et.data&&(dt.data=Et.data),lg[ZA]=dt,Bg++}c.attributes=lg,c.attributesNum=Bg,c.index=Ag}function Z(){const $=c.newAttributes;for(let RA=0,tg=$.length;RA<tg;RA++)$[RA]=0}function L($){F($,0)}function F($,RA){const tg=c.newAttributes,Ag=c.enabledAttributes,lg=c.attributeDivisors;tg[$]=1,Ag[$]===0&&(o.enableVertexAttribArray($),Ag[$]=1),lg[$]!==RA&&(o.vertexAttribDivisor($,RA),lg[$]=RA)}function hA(){const $=c.newAttributes,RA=c.enabledAttributes;for(let tg=0,Ag=RA.length;tg<Ag;tg++)RA[tg]!==$[tg]&&(o.disableVertexAttribArray(tg),RA[tg]=0)}function rA($,RA,tg,Ag,lg,ag,Bg){Bg===!0?o.vertexAttribIPointer($,RA,tg,lg,ag):o.vertexAttribPointer($,RA,tg,Ag,lg,ag)}function tA($,RA,tg,Ag){Z();const lg=Ag.attributes,ag=tg.getAttributes(),Bg=RA.defaultAttributeValues;for(const fg in ag){const ZA=ag[fg];if(ZA.location>=0){let Wg=lg[fg];if(Wg===void 0&&(fg==="instanceMatrix"&&$.instanceMatrix&&(Wg=$.instanceMatrix),fg==="instanceColor"&&$.instanceColor&&(Wg=$.instanceColor)),Wg!==void 0){const Et=Wg.normalized,dt=Wg.itemSize,xt=t.get(Wg);if(xt===void 0)continue;const QI=xt.buffer,Ig=xt.type,mg=xt.bytesPerElement,at=Ig===o.INT||Ig===o.UNSIGNED_INT||Wg.gpuType===Bh;if(Wg.isInterleavedBufferAttribute){const dg=Wg.data,dA=dg.stride,oA=Wg.offset;if(dg.isInstancedInterleavedBuffer){for(let lA=0;lA<ZA.locationSize;lA++)F(ZA.location+lA,dg.meshPerAttribute);$.isInstancedMesh!==!0&&Ag._maxInstanceCount===void 0&&(Ag._maxInstanceCount=dg.meshPerAttribute*dg.count)}else for(let lA=0;lA<ZA.locationSize;lA++)L(ZA.location+lA);o.bindBuffer(o.ARRAY_BUFFER,QI);for(let lA=0;lA<ZA.locationSize;lA++)rA(ZA.location+lA,dt/ZA.locationSize,Ig,Et,dA*mg,(oA+dt/ZA.locationSize*lA)*mg,at)}else{if(Wg.isInstancedBufferAttribute){for(let dg=0;dg<ZA.locationSize;dg++)F(ZA.location+dg,Wg.meshPerAttribute);$.isInstancedMesh!==!0&&Ag._maxInstanceCount===void 0&&(Ag._maxInstanceCount=Wg.meshPerAttribute*Wg.count)}else for(let dg=0;dg<ZA.locationSize;dg++)L(ZA.location+dg);o.bindBuffer(o.ARRAY_BUFFER,QI);for(let dg=0;dg<ZA.locationSize;dg++)rA(ZA.location+dg,dt/ZA.locationSize,Ig,Et,dt*mg,dt/ZA.locationSize*dg*mg,at)}}else if(Bg!==void 0){const Et=Bg[fg];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(ZA.location,Et);break;case 3:o.vertexAttrib3fv(ZA.location,Et);break;case 4:o.vertexAttrib4fv(ZA.location,Et);break;default:o.vertexAttrib1fv(ZA.location,Et)}}}}hA()}function TA(){MA();for(const $ in E){const RA=E[$];for(const tg in RA){const Ag=RA[tg];for(const lg in Ag)k(Ag[lg].object),delete Ag[lg];delete RA[tg]}delete E[$]}}function mA($){if(E[$.id]===void 0)return;const RA=E[$.id];for(const tg in RA){const Ag=RA[tg];for(const lg in Ag)k(Ag[lg].object),delete Ag[lg];delete RA[tg]}delete E[$.id]}function pA($){for(const RA in E){const tg=E[RA];if(tg[$.id]===void 0)continue;const Ag=tg[$.id];for(const lg in Ag)k(Ag[lg].object),delete Ag[lg];delete tg[$.id]}}function MA(){eA(),p=!0,c!==s&&(c=s,N(c.object))}function eA(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:MA,resetDefaultState:eA,dispose:TA,releaseStatesOfGeometry:mA,releaseStatesOfProgram:pA,initAttributes:Z,enableAttribute:L,disableUnusedAttributes:hA}}function qS(o,t,i){let E;function s(N){E=N}function c(N,k){o.drawArrays(E,N,k),i.update(k,E,1)}function p(N,k,J){J!==0&&(o.drawArraysInstanced(E,N,k,J),i.update(k,E,J))}function f(N,k,J){if(J===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(E,N,0,k,0,J);let Y=0;for(let z=0;z<J;z++)Y+=k[z];i.update(Y,E,1)}function G(N,k,J,x){if(J===0)return;const Y=t.get("WEBGL_multi_draw");if(Y===null)for(let z=0;z<N.length;z++)p(N[z],k[z],x[z]);else{Y.multiDrawArraysInstancedWEBGL(E,N,0,k,0,x,0,J);let z=0;for(let Z=0;Z<J;Z++)z+=k[Z]*x[Z];i.update(z,E,1)}}this.setMode=s,this.render=c,this.renderInstances=p,this.renderMultiDraw=f,this.renderMultiDrawInstances=G}function _S(o,t,i,E){let s;function c(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const pA=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(pA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function p(pA){return!(pA!==eB&&E.convert(pA)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(pA){const MA=pA===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(pA!==tC&&E.convert(pA)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&pA!==$B&&!MA)}function G(pA){if(pA==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";pA="mediump"}return pA==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let N=i.precision!==void 0?i.precision:"highp";const k=G(N);k!==N&&(console.warn("THREE.WebGLRenderer:",N,"not supported, using",k,"instead."),N=k);const J=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),Y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),z=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Z=o.getParameter(o.MAX_TEXTURE_SIZE),L=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),F=o.getParameter(o.MAX_VERTEX_ATTRIBS),hA=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),rA=o.getParameter(o.MAX_VARYING_VECTORS),tA=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),TA=z>0,mA=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:G,textureFormatReadable:p,textureTypeReadable:f,precision:N,logarithmicDepthBuffer:J,reverseDepthBuffer:x,maxTextures:Y,maxVertexTextures:z,maxTextureSize:Z,maxCubemapSize:L,maxAttributes:F,maxVertexUniforms:hA,maxVaryings:rA,maxFragmentUniforms:tA,vertexTextures:TA,maxSamples:mA}}function WS(o){const t=this;let i=null,E=0,s=!1,c=!1;const p=new hE,f=new nI,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(J,x){const Y=J.length!==0||x||E!==0||s;return s=x,E=J.length,Y},this.beginShadows=function(){c=!0,k(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(J,x){i=k(J,x,0)},this.setState=function(J,x,Y){const z=J.clippingPlanes,Z=J.clipIntersection,L=J.clipShadows,F=o.get(J);if(!s||z===null||z.length===0||c&&!L)c?k(null):N();else{const hA=c?0:E,rA=hA*4;let tA=F.clippingState||null;G.value=tA,tA=k(z,x,rA,Y);for(let TA=0;TA!==rA;++TA)tA[TA]=i[TA];F.clippingState=tA,this.numIntersection=Z?this.numPlanes:0,this.numPlanes+=hA}};function N(){G.value!==i&&(G.value=i,G.needsUpdate=E>0),t.numPlanes=E,t.numIntersection=0}function k(J,x,Y,z){const Z=J!==null?J.length:0;let L=null;if(Z!==0){if(L=G.value,z!==!0||L===null){const F=Y+Z*4,hA=x.matrixWorldInverse;f.getNormalMatrix(hA),(L===null||L.length<F)&&(L=new Float32Array(F));for(let rA=0,tA=Y;rA!==Z;++rA,tA+=4)p.copy(J[rA]).applyMatrix4(hA,f),p.normal.toArray(L,tA),L[tA+3]=p.constant}G.value=L,G.needsUpdate=!0}return t.numPlanes=Z,t.numIntersection=0,L}}function PS(o){let t=new WeakMap;function i(p,f){return f===mr?p.mapping=RQ:f===Sr&&(p.mapping=mQ),p}function E(p){if(p&&p.isTexture){const f=p.mapping;if(f===mr||f===Sr)if(t.has(p)){const G=t.get(p).texture;return i(G,p.mapping)}else{const G=p.image;if(G&&G.height>0){const N=new IR(G.height);return N.fromEquirectangularTexture(o,p),t.set(p,N),p.addEventListener("dispose",s),i(N.texture,p.mapping)}else return null}}return p}function s(p){const f=p.target;f.removeEventListener("dispose",s);const G=t.get(f);G!==void 0&&(t.delete(f),G.dispose())}function c(){t=new WeakMap}return{get:E,dispose:c}}class OS extends eu{constructor(t=-1,i=1,E=1,s=-1,c=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=E,this.bottom=s,this.near=c,this.far=p,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,E,s,c,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=E,this.view.offsetY=s,this.view.width=c,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),E=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let c=E-t,p=E+t,f=s+i,G=s-i;if(this.view!==null&&this.view.enabled){const N=(this.right-this.left)/this.view.fullWidth/this.zoom,k=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=N*this.view.offsetX,p=c+N*this.view.width,f-=k*this.view.offsetY,G=f-k*this.view.height}this.projectionMatrix.makeOrthographic(c,p,f,G,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const fQ=4,Cd=[.125,.215,.35,.446,.526,.582],dE=20,nr=new OS,Ed=new qI;let or=null,sr=0,ar=0,rr=!1;const cE=(1+Math.sqrt(5))/2,DQ=1/cE,Qd=[new zA(-cE,DQ,0),new zA(cE,DQ,0),new zA(-DQ,0,cE),new zA(DQ,0,cE),new zA(0,cE,-DQ),new zA(0,cE,DQ),new zA(-1,1,-1),new zA(1,1,-1),new zA(-1,1,1),new zA(1,1,1)];class nd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,E=.1,s=100){or=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,E,s,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(or,sr,ar),this._renderer.xr.enabled=rr,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===RQ||t.mapping===mQ?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const E=i||this._allocateTargets();return this._textureToCubeUV(t,E),this._applyPMREM(E),this._cleanup(E),E}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,E={magFilter:MB,minFilter:MB,generateMipmaps:!1,type:Tn,format:eB,colorSpace:NQ,depthBuffer:!1},s=od(t,i,E);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,i,E);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(c)),this._blurMaterial=ZS(c,t,i)}return s}_compileMaterial(t){const i=new iB(this._lodPlanes[0],t);this._renderer.compile(i,nr)}_sceneToCubeUV(t,i,E,s){const f=new bi(90,1,i,E),G=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],k=this._renderer,J=k.autoClear,x=k.toneMapping;k.getClearColor(Ed),k.toneMapping=GC,k.autoClear=!1;const Y=new Au({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),z=new iB(new kQ,Y);let Z=!1;const L=t.background;L?L.isColor&&(Y.color.copy(L),t.background=null,Z=!0):(Y.color.copy(Ed),Z=!0);for(let F=0;F<6;F++){const hA=F%3;hA===0?(f.up.set(0,G[F],0),f.lookAt(N[F],0,0)):hA===1?(f.up.set(0,0,G[F]),f.lookAt(0,N[F],0)):(f.up.set(0,G[F],0),f.lookAt(0,0,N[F]));const rA=this._cubeSize;Ds(s,hA*rA,F>2?rA:0,rA,rA),k.setRenderTarget(s),Z&&k.render(z,f),k.render(t,f)}z.geometry.dispose(),z.material.dispose(),k.toneMapping=x,k.autoClear=J,t.background=L}_textureToCubeUV(t,i){const E=this._renderer,s=t.mapping===RQ||t.mapping===mQ;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const c=s?this._cubemapMaterial:this._equirectMaterial,p=new iB(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const G=this._cubeSize;Ds(i,0,0,3*G,2*G),E.setRenderTarget(i),E.render(p,nr)}_applyPMREM(t){const i=this._renderer,E=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let c=1;c<s;c++){const p=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Qd[(s-c-1)%Qd.length];this._blur(t,c-1,c,p,f)}i.autoClear=E}_blur(t,i,E,s,c){const p=this._pingPongRenderTarget;this._halfBlur(t,p,i,E,s,"latitudinal",c),this._halfBlur(p,t,E,E,s,"longitudinal",c)}_halfBlur(t,i,E,s,c,p,f){const G=this._renderer,N=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const k=3,J=new iB(this._lodPlanes[s],N),x=N.uniforms,Y=this._sizeLods[E]-1,z=isFinite(c)?Math.PI/(2*Y):2*Math.PI/(2*dE-1),Z=c/z,L=isFinite(c)?1+Math.floor(k*Z):dE;L>dE&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${dE}`);const F=[];let hA=0;for(let pA=0;pA<dE;++pA){const MA=pA/Z,eA=Math.exp(-MA*MA/2);F.push(eA),pA===0?hA+=eA:pA<L&&(hA+=2*eA)}for(let pA=0;pA<F.length;pA++)F[pA]=F[pA]/hA;x.envMap.value=t.texture,x.samples.value=L,x.weights.value=F,x.latitudinal.value=p==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:rA}=this;x.dTheta.value=z,x.mipInt.value=rA-E;const tA=this._sizeLods[s],TA=3*tA*(s>rA-fQ?s-rA+fQ:0),mA=4*(this._cubeSize-tA);Ds(i,TA,mA,3*tA,2*tA),G.setRenderTarget(i),G.render(J,nr)}}function VS(o){const t=[],i=[],E=[];let s=o;const c=o-fQ+1+Cd.length;for(let p=0;p<c;p++){const f=Math.pow(2,s);i.push(f);let G=1/f;p>o-fQ?G=Cd[p-o+fQ-1]:p===0&&(G=0),E.push(G);const N=1/(f-2),k=-N,J=1+N,x=[k,k,J,k,J,J,k,k,J,J,k,J],Y=6,z=6,Z=3,L=2,F=1,hA=new Float32Array(Z*z*Y),rA=new Float32Array(L*z*Y),tA=new Float32Array(F*z*Y);for(let mA=0;mA<Y;mA++){const pA=mA%3*2/3-1,MA=mA>2?0:-1,eA=[pA,MA,0,pA+2/3,MA,0,pA+2/3,MA+1,0,pA,MA,0,pA+2/3,MA+1,0,pA,MA+1,0];hA.set(eA,Z*z*mA),rA.set(x,L*z*mA);const $=[mA,mA,mA,mA,mA,mA];tA.set($,F*z*mA)}const TA=new UC;TA.setAttribute("position",new RB(hA,Z)),TA.setAttribute("uv",new RB(rA,L)),TA.setAttribute("faceIndex",new RB(tA,F)),t.push(TA),s>fQ&&s--}return{lodPlanes:t,sizeLods:i,sigmas:E}}function od(o,t,i){const E=new wE(o,t,i);return E.texture.mapping=Us,E.texture.name="PMREM.cubeUv",E.scissorTest=!0,E}function Ds(o,t,i,E,s){o.viewport.set(t,i,E,s),o.scissor.set(t,i,E,s)}function ZS(o,t,i){const E=new Float32Array(dE),s=new zA(0,1,0);return new NC({name:"SphericalGaussianBlur",defines:{n:dE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:E},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:SC,depthTest:!1,depthWrite:!1})}function sd(){return new NC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:SC,depthTest:!1,depthWrite:!1})}function ad(){return new NC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:SC,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function XS(o){let t=new WeakMap,i=null;function E(f){if(f&&f.isTexture){const G=f.mapping,N=G===mr||G===Sr,k=G===RQ||G===mQ;if(N||k){let J=t.get(f);const x=J!==void 0?J.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return i===null&&(i=new nd(o)),J=N?i.fromEquirectangular(f,J):i.fromCubemap(f,J),J.texture.pmremVersion=f.pmremVersion,t.set(f,J),J.texture;if(J!==void 0)return J.texture;{const Y=f.image;return N&&Y&&Y.height>0||k&&Y&&s(Y)?(i===null&&(i=new nd(o)),J=N?i.fromEquirectangular(f):i.fromCubemap(f),J.texture.pmremVersion=f.pmremVersion,t.set(f,J),f.addEventListener("dispose",c),J.texture):null}}}return f}function s(f){let G=0;const N=6;for(let k=0;k<N;k++)f[k]!==void 0&&G++;return G===N}function c(f){const G=f.target;G.removeEventListener("dispose",c);const N=t.get(G);N!==void 0&&(t.delete(G),N.dispose())}function p(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:E,dispose:p}}function zS(o){const t={};function i(E){if(t[E]!==void 0)return t[E];let s;switch(E){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(E)}return t[E]=s,s}return{has:function(E){return i(E)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(E){const s=i(E);return s===null&&Kn("THREE.WebGLRenderer: "+E+" extension not supported."),s}}}function jS(o,t,i,E){const s={},c=new WeakMap;function p(J){const x=J.target;x.index!==null&&t.remove(x.index);for(const z in x.attributes)t.remove(x.attributes[z]);for(const z in x.morphAttributes){const Z=x.morphAttributes[z];for(let L=0,F=Z.length;L<F;L++)t.remove(Z[L])}x.removeEventListener("dispose",p),delete s[x.id];const Y=c.get(x);Y&&(t.remove(Y),c.delete(x)),E.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function f(J,x){return s[x.id]===!0||(x.addEventListener("dispose",p),s[x.id]=!0,i.memory.geometries++),x}function G(J){const x=J.attributes;for(const z in x)t.update(x[z],o.ARRAY_BUFFER);const Y=J.morphAttributes;for(const z in Y){const Z=Y[z];for(let L=0,F=Z.length;L<F;L++)t.update(Z[L],o.ARRAY_BUFFER)}}function N(J){const x=[],Y=J.index,z=J.attributes.position;let Z=0;if(Y!==null){const hA=Y.array;Z=Y.version;for(let rA=0,tA=hA.length;rA<tA;rA+=3){const TA=hA[rA+0],mA=hA[rA+1],pA=hA[rA+2];x.push(TA,mA,mA,pA,pA,TA)}}else if(z!==void 0){const hA=z.array;Z=z.version;for(let rA=0,tA=hA.length/3-1;rA<tA;rA+=3){const TA=rA+0,mA=rA+1,pA=rA+2;x.push(TA,mA,mA,pA,pA,TA)}}else return;const L=new(Zd(x)?tu:gu)(x,1);L.version=Z;const F=c.get(J);F&&t.remove(F),c.set(J,L)}function k(J){const x=c.get(J);if(x){const Y=J.index;Y!==null&&x.version<Y.version&&N(J)}else N(J);return c.get(J)}return{get:f,update:G,getWireframeAttribute:k}}function $S(o,t,i){let E;function s(x){E=x}let c,p;function f(x){c=x.type,p=x.bytesPerElement}function G(x,Y){o.drawElements(E,Y,c,x*p),i.update(Y,E,1)}function N(x,Y,z){z!==0&&(o.drawElementsInstanced(E,Y,c,x*p,z),i.update(Y,E,z))}function k(x,Y,z){if(z===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(E,Y,0,c,x,0,z);let L=0;for(let F=0;F<z;F++)L+=Y[F];i.update(L,E,1)}function J(x,Y,z,Z){if(z===0)return;const L=t.get("WEBGL_multi_draw");if(L===null)for(let F=0;F<x.length;F++)N(x[F]/p,Y[F],Z[F]);else{L.multiDrawElementsInstancedWEBGL(E,Y,0,c,x,0,Z,0,z);let F=0;for(let hA=0;hA<z;hA++)F+=Y[hA]*Z[hA];i.update(F,E,1)}}this.setMode=s,this.setIndex=f,this.render=G,this.renderInstances=N,this.renderMultiDraw=k,this.renderMultiDrawInstances=J}function AG(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function E(c,p,f){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=f*(c/3);break;case o.LINES:i.lines+=f*(c/2);break;case o.LINE_STRIP:i.lines+=f*(c-1);break;case o.LINE_LOOP:i.lines+=f*c;break;case o.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:E}}function gG(o,t,i){const E=new WeakMap,s=new oe;function c(p,f,G){const N=p.morphTargetInfluences,k=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,J=k!==void 0?k.length:0;let x=E.get(f);if(x===void 0||x.count!==J){let $=function(){MA.dispose(),E.delete(f),f.removeEventListener("dispose",$)};var Y=$;x!==void 0&&x.texture.dispose();const z=f.morphAttributes.position!==void 0,Z=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,F=f.morphAttributes.position||[],hA=f.morphAttributes.normal||[],rA=f.morphAttributes.color||[];let tA=0;z===!0&&(tA=1),Z===!0&&(tA=2),L===!0&&(tA=3);let TA=f.attributes.position.count*tA,mA=1;TA>t.maxTextureSize&&(mA=Math.ceil(TA/t.maxTextureSize),TA=t.maxTextureSize);const pA=new Float32Array(TA*mA*4*J),MA=new zd(pA,TA,mA,J);MA.type=$B,MA.needsUpdate=!0;const eA=tA*4;for(let RA=0;RA<J;RA++){const tg=F[RA],Ag=hA[RA],lg=rA[RA],ag=TA*mA*4*RA;for(let Bg=0;Bg<tg.count;Bg++){const fg=Bg*eA;z===!0&&(s.fromBufferAttribute(tg,Bg),pA[ag+fg+0]=s.x,pA[ag+fg+1]=s.y,pA[ag+fg+2]=s.z,pA[ag+fg+3]=0),Z===!0&&(s.fromBufferAttribute(Ag,Bg),pA[ag+fg+4]=s.x,pA[ag+fg+5]=s.y,pA[ag+fg+6]=s.z,pA[ag+fg+7]=0),L===!0&&(s.fromBufferAttribute(lg,Bg),pA[ag+fg+8]=s.x,pA[ag+fg+9]=s.y,pA[ag+fg+10]=s.z,pA[ag+fg+11]=lg.itemSize===4?s.w:1)}}x={count:J,texture:MA,size:new WI(TA,mA)},E.set(f,x),f.addEventListener("dispose",$)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)G.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let z=0;for(let L=0;L<N.length;L++)z+=N[L];const Z=f.morphTargetsRelative?1:1-z;G.getUniforms().setValue(o,"morphTargetBaseInfluence",Z),G.getUniforms().setValue(o,"morphTargetInfluences",N)}G.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),G.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function tG(o,t,i,E){let s=new WeakMap;function c(G){const N=E.render.frame,k=G.geometry,J=t.get(G,k);if(s.get(J)!==N&&(t.update(J),s.set(J,N)),G.isInstancedMesh&&(G.hasEventListener("dispose",f)===!1&&G.addEventListener("dispose",f),s.get(G)!==N&&(i.update(G.instanceMatrix,o.ARRAY_BUFFER),G.instanceColor!==null&&i.update(G.instanceColor,o.ARRAY_BUFFER),s.set(G,N))),G.isSkinnedMesh){const x=G.skeleton;s.get(x)!==N&&(x.update(),s.set(x,N))}return J}function p(){s=new WeakMap}function f(G){const N=G.target;N.removeEventListener("dispose",f),i.remove(N.instanceMatrix),N.instanceColor!==null&&i.remove(N.instanceColor)}return{update:c,dispose:p}}class Eu extends hi{constructor(t,i,E,s,c,p,f,G,N,k=pQ){if(k!==pQ&&k!==GQ)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");E===void 0&&k===pQ&&(E=fE),E===void 0&&k===GQ&&(E=SQ),super(null,s,c,p,f,G,k,E,N),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=f!==void 0?f:BB,this.minFilter=G!==void 0?G:BB,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Qu=new hi,rd=new Eu(1,1),nu=new zd,ou=new vM,su=new iu,hd=[],cd=[],ld=new Float32Array(16),dd=new Float32Array(9),ud=new Float32Array(4);function LQ(o,t,i){const E=o[0];if(E<=0||E>0)return o;const s=t*i;let c=hd[s];if(c===void 0&&(c=new Float32Array(s),hd[s]=c),t!==0){E.toArray(c,0);for(let p=1,f=0;p!==t;++p)f+=i,o[p].toArray(c,f)}return c}function Me(o,t){if(o.length!==t.length)return!1;for(let i=0,E=o.length;i<E;i++)if(o[i]!==t[i])return!1;return!0}function Re(o,t){for(let i=0,E=t.length;i<E;i++)o[i]=t[i]}function xs(o,t){let i=cd[t];i===void 0&&(i=new Int32Array(t),cd[t]=i);for(let E=0;E!==t;++E)i[E]=o.allocateTextureUnit();return i}function IG(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function eG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;o.uniform2fv(this.addr,t),Re(i,t)}}function iG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Me(i,t))return;o.uniform3fv(this.addr,t),Re(i,t)}}function BG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;o.uniform4fv(this.addr,t),Re(i,t)}}function CG(o,t){const i=this.cache,E=t.elements;if(E===void 0){if(Me(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Re(i,t)}else{if(Me(i,E))return;ud.set(E),o.uniformMatrix2fv(this.addr,!1,ud),Re(i,E)}}function EG(o,t){const i=this.cache,E=t.elements;if(E===void 0){if(Me(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Re(i,t)}else{if(Me(i,E))return;dd.set(E),o.uniformMatrix3fv(this.addr,!1,dd),Re(i,E)}}function QG(o,t){const i=this.cache,E=t.elements;if(E===void 0){if(Me(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Re(i,t)}else{if(Me(i,E))return;ld.set(E),o.uniformMatrix4fv(this.addr,!1,ld),Re(i,E)}}function nG(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function oG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;o.uniform2iv(this.addr,t),Re(i,t)}}function sG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Me(i,t))return;o.uniform3iv(this.addr,t),Re(i,t)}}function aG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;o.uniform4iv(this.addr,t),Re(i,t)}}function rG(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function hG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Me(i,t))return;o.uniform2uiv(this.addr,t),Re(i,t)}}function cG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Me(i,t))return;o.uniform3uiv(this.addr,t),Re(i,t)}}function lG(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Me(i,t))return;o.uniform4uiv(this.addr,t),Re(i,t)}}function dG(o,t,i){const E=this.cache,s=i.allocateTextureUnit();E[0]!==s&&(o.uniform1i(this.addr,s),E[0]=s);let c;this.type===o.SAMPLER_2D_SHADOW?(rd.compareFunction=Vd,c=rd):c=Qu,i.setTexture2D(t||c,s)}function uG(o,t,i){const E=this.cache,s=i.allocateTextureUnit();E[0]!==s&&(o.uniform1i(this.addr,s),E[0]=s),i.setTexture3D(t||ou,s)}function DG(o,t,i){const E=this.cache,s=i.allocateTextureUnit();E[0]!==s&&(o.uniform1i(this.addr,s),E[0]=s),i.setTextureCube(t||su,s)}function fG(o,t,i){const E=this.cache,s=i.allocateTextureUnit();E[0]!==s&&(o.uniform1i(this.addr,s),E[0]=s),i.setTexture2DArray(t||nu,s)}function wG(o){switch(o){case 5126:return IG;case 35664:return eG;case 35665:return iG;case 35666:return BG;case 35674:return CG;case 35675:return EG;case 35676:return QG;case 5124:case 35670:return nG;case 35667:case 35671:return oG;case 35668:case 35672:return sG;case 35669:case 35673:return aG;case 5125:return rG;case 36294:return hG;case 36295:return cG;case 36296:return lG;case 35678:case 36198:case 36298:case 36306:case 35682:return dG;case 35679:case 36299:case 36307:return uG;case 35680:case 36300:case 36308:case 36293:return DG;case 36289:case 36303:case 36311:case 36292:return fG}}function pG(o,t){o.uniform1fv(this.addr,t)}function yG(o,t){const i=LQ(t,this.size,2);o.uniform2fv(this.addr,i)}function MG(o,t){const i=LQ(t,this.size,3);o.uniform3fv(this.addr,i)}function RG(o,t){const i=LQ(t,this.size,4);o.uniform4fv(this.addr,i)}function mG(o,t){const i=LQ(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function SG(o,t){const i=LQ(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GG(o,t){const i=LQ(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function FG(o,t){o.uniform1iv(this.addr,t)}function NG(o,t){o.uniform2iv(this.addr,t)}function UG(o,t){o.uniform3iv(this.addr,t)}function kG(o,t){o.uniform4iv(this.addr,t)}function LG(o,t){o.uniform1uiv(this.addr,t)}function xG(o,t){o.uniform2uiv(this.addr,t)}function JG(o,t){o.uniform3uiv(this.addr,t)}function bG(o,t){o.uniform4uiv(this.addr,t)}function KG(o,t,i){const E=this.cache,s=t.length,c=xs(i,s);Me(E,c)||(o.uniform1iv(this.addr,c),Re(E,c));for(let p=0;p!==s;++p)i.setTexture2D(t[p]||Qu,c[p])}function YG(o,t,i){const E=this.cache,s=t.length,c=xs(i,s);Me(E,c)||(o.uniform1iv(this.addr,c),Re(E,c));for(let p=0;p!==s;++p)i.setTexture3D(t[p]||ou,c[p])}function vG(o,t,i){const E=this.cache,s=t.length,c=xs(i,s);Me(E,c)||(o.uniform1iv(this.addr,c),Re(E,c));for(let p=0;p!==s;++p)i.setTextureCube(t[p]||su,c[p])}function HG(o,t,i){const E=this.cache,s=t.length,c=xs(i,s);Me(E,c)||(o.uniform1iv(this.addr,c),Re(E,c));for(let p=0;p!==s;++p)i.setTexture2DArray(t[p]||nu,c[p])}function TG(o){switch(o){case 5126:return pG;case 35664:return yG;case 35665:return MG;case 35666:return RG;case 35674:return mG;case 35675:return SG;case 35676:return GG;case 5124:case 35670:return FG;case 35667:case 35671:return NG;case 35668:case 35672:return UG;case 35669:case 35673:return kG;case 5125:return LG;case 36294:return xG;case 36295:return JG;case 36296:return bG;case 35678:case 36198:case 36298:case 36306:case 35682:return KG;case 35679:case 36299:case 36307:return YG;case 35680:case 36300:case 36308:case 36293:return vG;case 36289:case 36303:case 36311:case 36292:return HG}}class qG{constructor(t,i,E){this.id=t,this.addr=E,this.cache=[],this.type=i.type,this.setValue=wG(i.type)}}class _G{constructor(t,i,E){this.id=t,this.addr=E,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TG(i.type)}}class WG{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,E){const s=this.seq;for(let c=0,p=s.length;c!==p;++c){const f=s[c];f.setValue(t,i[f.id],E)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Dd(o,t){o.seq.push(t),o.map[t.id]=t}function PG(o,t,i){const E=o.name,s=E.length;for(hr.lastIndex=0;;){const c=hr.exec(E),p=hr.lastIndex;let f=c[1];const G=c[2]==="]",N=c[3];if(G&&(f=f|0),N===void 0||N==="["&&p+2===s){Dd(i,N===void 0?new qG(f,o,t):new _G(f,o,t));break}else{let J=i.map[f];J===void 0&&(J=new WG(f),Dd(i,J)),i=J}}}class Gs{constructor(t,i){this.seq=[],this.map={};const E=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let s=0;s<E;++s){const c=t.getActiveUniform(i,s),p=t.getUniformLocation(i,c.name);PG(c,p,this)}}setValue(t,i,E,s){const c=this.map[i];c!==void 0&&c.setValue(t,E,s)}setOptional(t,i,E){const s=i[E];s!==void 0&&this.setValue(t,E,s)}static upload(t,i,E,s){for(let c=0,p=i.length;c!==p;++c){const f=i[c],G=E[f.id];G.needsUpdate!==!1&&f.setValue(t,G.value,s)}}static seqWithValue(t,i){const E=[];for(let s=0,c=t.length;s!==c;++s){const p=t[s];p.id in i&&E.push(p)}return E}}function fd(o,t,i){const E=o.createShader(t);return o.shaderSource(E,i),o.compileShader(E),E}const OG=37297;let VG=0;function ZG(o,t){const i=o.split(`
`),E=[],s=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let p=s;p<c;p++){const f=p+1;E.push(`${f===t?">":" "} ${f}: ${i[p]}`)}return E.join(`
`)}const wd=new nI;function XG(o){LI._getMatrix(wd,LI.workingColorSpace,o);const t=`mat3( ${wd.elements.map(i=>i.toFixed(4))} )`;switch(LI.getTransfer(o)){case ks:return[t,"LinearTransferOETF"];case _I:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function pd(o,t,i){const E=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(E&&s==="")return"";const c=/ERROR: 0:(\d+)/.exec(s);if(c){const p=parseInt(c[1]);return i.toUpperCase()+`

`+s+`

`+ZG(o.getShaderSource(t),p)}else return s}function zG(o,t){const i=XG(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jG(o,t){let i;switch(t){case aM:i="Linear";break;case rM:i="Reinhard";break;case hM:i="Cineon";break;case cM:i="ACESFilmic";break;case dM:i="AgX";break;case uM:i="Neutral";break;case lM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fs=new zA;function $G(){LI.getLuminanceCoefficients(fs);const o=fs.x.toFixed(4),t=fs.y.toFixed(4),i=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AF(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yn).join(`
`)}function gF(o){const t=[];for(const i in o){const E=o[i];E!==!1&&t.push("#define "+i+" "+E)}return t.join(`
`)}function tF(o,t){const i={},E=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<E;s++){const c=o.getActiveAttrib(t,s),p=c.name;let f=1;c.type===o.FLOAT_MAT2&&(f=2),c.type===o.FLOAT_MAT3&&(f=3),c.type===o.FLOAT_MAT4&&(f=4),i[p]={type:c.type,location:o.getAttribLocation(t,p),locationSize:f}}return i}function Yn(o){return o!==""}function yd(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IF=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(o){return o.replace(IF,iF)}const eF=new Map;function iF(o,t){let i=rI[t];if(i===void 0){const E=eF.get(t);if(E!==void 0)i=rI[E],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,E);else throw new Error("Can not resolve #include <"+t+">")}return eh(i)}const BF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(o){return o.replace(BF,CF)}function CF(o,t,i,E){let s="";for(let c=parseInt(t);c<parseInt(i);c++)s+=E.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return s}function md(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function EF(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Py?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===jB&&(t="SHADOWMAP_TYPE_VSM"),t}function QF(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case RQ:case mQ:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nF(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case mQ:t="ENVMAP_MODE_REFRACTION";break}return t}function oF(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xd:t="ENVMAP_BLENDING_MULTIPLY";break;case oM:t="ENVMAP_BLENDING_MIX";break;case sM:t="ENVMAP_BLENDING_ADD";break}return t}function sF(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,E=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:E,maxMip:i}}function aF(o,t,i,E){const s=o.getContext(),c=i.defines;let p=i.vertexShader,f=i.fragmentShader;const G=EF(i),N=QF(i),k=nF(i),J=oF(i),x=sF(i),Y=AF(i),z=gF(c),Z=s.createProgram();let L,F,hA=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(L=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,z].filter(Yn).join(`
`),L.length>0&&(L+=`
`),F=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,z].filter(Yn).join(`
`),F.length>0&&(F+=`
`)):(L=[md(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,z,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+k:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+G:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),F=[md(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,z,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+N:"",i.envMap?"#define "+k:"",i.envMap?"#define "+J:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+G:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==GC?"#define TONE_MAPPING":"",i.toneMapping!==GC?rI.tonemapping_pars_fragment:"",i.toneMapping!==GC?jG("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",rI.colorspace_pars_fragment,zG("linearToOutputTexel",i.outputColorSpace),$G(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yn).join(`
`)),p=eh(p),p=yd(p,i),p=Md(p,i),f=eh(f),f=yd(f,i),f=Md(f,i),p=Rd(p),f=Rd(f),i.isRawShaderMaterial!==!0&&(hA=`#version 300 es
`,L=[Y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,F=["#define varying in",i.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F);const rA=hA+L+p,tA=hA+F+f,TA=fd(s,s.VERTEX_SHADER,rA),mA=fd(s,s.FRAGMENT_SHADER,tA);s.attachShader(Z,TA),s.attachShader(Z,mA),i.index0AttributeName!==void 0?s.bindAttribLocation(Z,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(Z,0,"position"),s.linkProgram(Z);function pA(RA){if(o.debug.checkShaderErrors){const tg=s.getProgramInfoLog(Z).trim(),Ag=s.getShaderInfoLog(TA).trim(),lg=s.getShaderInfoLog(mA).trim();let ag=!0,Bg=!0;if(s.getProgramParameter(Z,s.LINK_STATUS)===!1)if(ag=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,Z,TA,mA);else{const fg=pd(s,TA,"vertex"),ZA=pd(s,mA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(Z,s.VALIDATE_STATUS)+`

Material Name: `+RA.name+`
Material Type: `+RA.type+`

Program Info Log: `+tg+`
`+fg+`
`+ZA)}else tg!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tg):(Ag===""||lg==="")&&(Bg=!1);Bg&&(RA.diagnostics={runnable:ag,programLog:tg,vertexShader:{log:Ag,prefix:L},fragmentShader:{log:lg,prefix:F}})}s.deleteShader(TA),s.deleteShader(mA),MA=new Gs(s,Z),eA=tF(s,Z)}let MA;this.getUniforms=function(){return MA===void 0&&pA(this),MA};let eA;this.getAttributes=function(){return eA===void 0&&pA(this),eA};let $=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(Z,OG)),$},this.destroy=function(){E.releaseStatesOfProgram(this),s.deleteProgram(Z),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VG++,this.cacheKey=t,this.usedTimes=1,this.program=Z,this.vertexShader=TA,this.fragmentShader=mA,this}let rF=0;class hF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,E=t.fragmentShader,s=this._getShaderStage(i),c=this._getShaderStage(E),p=this._getShaderCacheForMaterial(t);return p.has(s)===!1&&(p.add(s),s.usedTimes++),p.has(c)===!1&&(p.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const E of i)E.usedTimes--,E.usedTimes===0&&this.shaderCache.delete(E.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let E=i.get(t);return E===void 0&&(E=new Set,i.set(t,E)),E}_getShaderStage(t){const i=this.shaderCache;let E=i.get(t);return E===void 0&&(E=new cF(t),i.set(t,E)),E}}class cF{constructor(t){this.id=rF++,this.code=t,this.usedTimes=0}}function lF(o,t,i,E,s,c,p){const f=new jd,G=new hF,N=new Set,k=[],J=s.logarithmicDepthBuffer,x=s.vertexTextures;let Y=s.precision;const z={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Z(eA){return N.add(eA),eA===0?"uv":`uv${eA}`}function L(eA,$,RA,tg,Ag){const lg=tg.fog,ag=Ag.geometry,Bg=eA.isMeshStandardMaterial?tg.environment:null,fg=(eA.isMeshStandardMaterial?i:t).get(eA.envMap||Bg),ZA=fg&&fg.mapping===Us?fg.image.height:null,Wg=z[eA.type];eA.precision!==null&&(Y=s.getMaxPrecision(eA.precision),Y!==eA.precision&&console.warn("THREE.WebGLProgram.getParameters:",eA.precision,"not supported, using",Y,"instead."));const Et=ag.morphAttributes.position||ag.morphAttributes.normal||ag.morphAttributes.color,dt=Et!==void 0?Et.length:0;let xt=0;ag.morphAttributes.position!==void 0&&(xt=1),ag.morphAttributes.normal!==void 0&&(xt=2),ag.morphAttributes.color!==void 0&&(xt=3);let QI,Ig,mg,at;if(Wg){const pI=pB[Wg];QI=pI.vertexShader,Ig=pI.fragmentShader}else QI=eA.vertexShader,Ig=eA.fragmentShader,G.update(eA),mg=G.getVertexShaderID(eA),at=G.getFragmentShaderID(eA);const dg=o.getRenderTarget(),dA=o.state.buffers.depth.getReversed(),oA=Ag.isInstancedMesh===!0,lA=Ag.isBatchedMesh===!0,XA=!!eA.map,fA=!!eA.matcap,KA=!!fg,gA=!!eA.aoMap,Jg=!!eA.lightMap,Dg=!!eA.bumpMap,tt=!!eA.normalMap,Og=!!eA.displacementMap,vt=!!eA.emissiveMap,gt=!!eA.metalnessMap,q=!!eA.roughnessMap,P=eA.anisotropy>0,YA=eA.clearcoat>0,Qg=eA.dispersion>0,_A=eA.iridescence>0,og=eA.sheen>0,Vg=eA.transmission>0,Zg=P&&!!eA.anisotropyMap,Pg=YA&&!!eA.clearcoatMap,eI=YA&&!!eA.clearcoatNormalMap,kg=YA&&!!eA.clearcoatRoughnessMap,Fg=_A&&!!eA.iridescenceMap,Nt=_A&&!!eA.iridescenceThicknessMap,Yt=og&&!!eA.sheenColorMap,It=og&&!!eA.sheenRoughnessMap,oI=!!eA.specularMap,Ht=!!eA.specularColorMap,hI=!!eA.specularIntensityMap,UA=Vg&&!!eA.transmissionMap,zg=Vg&&!!eA.thicknessMap,gg=!!eA.gradientMap,cg=!!eA.alphaMap,At=eA.alphaTest>0,Hg=!!eA.alphaHash,zt=!!eA.extensions;let PI=GC;eA.toneMapped&&(dg===null||dg.isXRRenderTarget===!0)&&(PI=o.toneMapping);const vI={shaderID:Wg,shaderType:eA.type,shaderName:eA.name,vertexShader:QI,fragmentShader:Ig,defines:eA.defines,customVertexShaderID:mg,customFragmentShaderID:at,isRawShaderMaterial:eA.isRawShaderMaterial===!0,glslVersion:eA.glslVersion,precision:Y,batching:lA,batchingColor:lA&&Ag._colorsTexture!==null,instancing:oA,instancingColor:oA&&Ag.instanceColor!==null,instancingMorph:oA&&Ag.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:dg===null?o.outputColorSpace:dg.isXRRenderTarget===!0?dg.texture.colorSpace:NQ,alphaToCoverage:!!eA.alphaToCoverage,map:XA,matcap:fA,envMap:KA,envMapMode:KA&&fg.mapping,envMapCubeUVHeight:ZA,aoMap:gA,lightMap:Jg,bumpMap:Dg,normalMap:tt,displacementMap:x&&Og,emissiveMap:vt,normalMapObjectSpace:tt&&eA.normalMapType===pM,normalMapTangentSpace:tt&&eA.normalMapType===Od,metalnessMap:gt,roughnessMap:q,anisotropy:P,anisotropyMap:Zg,clearcoat:YA,clearcoatMap:Pg,clearcoatNormalMap:eI,clearcoatRoughnessMap:kg,dispersion:Qg,iridescence:_A,iridescenceMap:Fg,iridescenceThicknessMap:Nt,sheen:og,sheenColorMap:Yt,sheenRoughnessMap:It,specularMap:oI,specularColorMap:Ht,specularIntensityMap:hI,transmission:Vg,transmissionMap:UA,thicknessMap:zg,gradientMap:gg,opaque:eA.transparent===!1&&eA.blending===wQ&&eA.alphaToCoverage===!1,alphaMap:cg,alphaTest:At,alphaHash:Hg,combine:eA.combine,mapUv:XA&&Z(eA.map.channel),aoMapUv:gA&&Z(eA.aoMap.channel),lightMapUv:Jg&&Z(eA.lightMap.channel),bumpMapUv:Dg&&Z(eA.bumpMap.channel),normalMapUv:tt&&Z(eA.normalMap.channel),displacementMapUv:Og&&Z(eA.displacementMap.channel),emissiveMapUv:vt&&Z(eA.emissiveMap.channel),metalnessMapUv:gt&&Z(eA.metalnessMap.channel),roughnessMapUv:q&&Z(eA.roughnessMap.channel),anisotropyMapUv:Zg&&Z(eA.anisotropyMap.channel),clearcoatMapUv:Pg&&Z(eA.clearcoatMap.channel),clearcoatNormalMapUv:eI&&Z(eA.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kg&&Z(eA.clearcoatRoughnessMap.channel),iridescenceMapUv:Fg&&Z(eA.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&Z(eA.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&Z(eA.sheenColorMap.channel),sheenRoughnessMapUv:It&&Z(eA.sheenRoughnessMap.channel),specularMapUv:oI&&Z(eA.specularMap.channel),specularColorMapUv:Ht&&Z(eA.specularColorMap.channel),specularIntensityMapUv:hI&&Z(eA.specularIntensityMap.channel),transmissionMapUv:UA&&Z(eA.transmissionMap.channel),thicknessMapUv:zg&&Z(eA.thicknessMap.channel),alphaMapUv:cg&&Z(eA.alphaMap.channel),vertexTangents:!!ag.attributes.tangent&&(tt||P),vertexColors:eA.vertexColors,vertexAlphas:eA.vertexColors===!0&&!!ag.attributes.color&&ag.attributes.color.itemSize===4,pointsUvs:Ag.isPoints===!0&&!!ag.attributes.uv&&(XA||cg),fog:!!lg,useFog:eA.fog===!0,fogExp2:!!lg&&lg.isFogExp2,flatShading:eA.flatShading===!0,sizeAttenuation:eA.sizeAttenuation===!0,logarithmicDepthBuffer:J,reverseDepthBuffer:dA,skinning:Ag.isSkinnedMesh===!0,morphTargets:ag.morphAttributes.position!==void 0,morphNormals:ag.morphAttributes.normal!==void 0,morphColors:ag.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:xt,numDirLights:$.directional.length,numPointLights:$.point.length,numSpotLights:$.spot.length,numSpotLightMaps:$.spotLightMap.length,numRectAreaLights:$.rectArea.length,numHemiLights:$.hemi.length,numDirLightShadows:$.directionalShadowMap.length,numPointLightShadows:$.pointShadowMap.length,numSpotLightShadows:$.spotShadowMap.length,numSpotLightShadowsWithMaps:$.numSpotLightShadowsWithMaps,numLightProbes:$.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:eA.dithering,shadowMapEnabled:o.shadowMap.enabled&&RA.length>0,shadowMapType:o.shadowMap.type,toneMapping:PI,decodeVideoTexture:XA&&eA.map.isVideoTexture===!0&&LI.getTransfer(eA.map.colorSpace)===_I,decodeVideoTextureEmissive:vt&&eA.emissiveMap.isVideoTexture===!0&&LI.getTransfer(eA.emissiveMap.colorSpace)===_I,premultipliedAlpha:eA.premultipliedAlpha,doubleSided:eA.side===yB,flipSided:eA.side===ri,useDepthPacking:eA.depthPacking>=0,depthPacking:eA.depthPacking||0,index0AttributeName:eA.index0AttributeName,extensionClipCullDistance:zt&&eA.extensions.clipCullDistance===!0&&E.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&eA.extensions.multiDraw===!0||lA)&&E.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:E.has("KHR_parallel_shader_compile"),customProgramCacheKey:eA.customProgramCacheKey()};return vI.vertexUv1s=N.has(1),vI.vertexUv2s=N.has(2),vI.vertexUv3s=N.has(3),N.clear(),vI}function F(eA){const $=[];if(eA.shaderID?$.push(eA.shaderID):($.push(eA.customVertexShaderID),$.push(eA.customFragmentShaderID)),eA.defines!==void 0)for(const RA in eA.defines)$.push(RA),$.push(eA.defines[RA]);return eA.isRawShaderMaterial===!1&&(hA($,eA),rA($,eA),$.push(o.outputColorSpace)),$.push(eA.customProgramCacheKey),$.join()}function hA(eA,$){eA.push($.precision),eA.push($.outputColorSpace),eA.push($.envMapMode),eA.push($.envMapCubeUVHeight),eA.push($.mapUv),eA.push($.alphaMapUv),eA.push($.lightMapUv),eA.push($.aoMapUv),eA.push($.bumpMapUv),eA.push($.normalMapUv),eA.push($.displacementMapUv),eA.push($.emissiveMapUv),eA.push($.metalnessMapUv),eA.push($.roughnessMapUv),eA.push($.anisotropyMapUv),eA.push($.clearcoatMapUv),eA.push($.clearcoatNormalMapUv),eA.push($.clearcoatRoughnessMapUv),eA.push($.iridescenceMapUv),eA.push($.iridescenceThicknessMapUv),eA.push($.sheenColorMapUv),eA.push($.sheenRoughnessMapUv),eA.push($.specularMapUv),eA.push($.specularColorMapUv),eA.push($.specularIntensityMapUv),eA.push($.transmissionMapUv),eA.push($.thicknessMapUv),eA.push($.combine),eA.push($.fogExp2),eA.push($.sizeAttenuation),eA.push($.morphTargetsCount),eA.push($.morphAttributeCount),eA.push($.numDirLights),eA.push($.numPointLights),eA.push($.numSpotLights),eA.push($.numSpotLightMaps),eA.push($.numHemiLights),eA.push($.numRectAreaLights),eA.push($.numDirLightShadows),eA.push($.numPointLightShadows),eA.push($.numSpotLightShadows),eA.push($.numSpotLightShadowsWithMaps),eA.push($.numLightProbes),eA.push($.shadowMapType),eA.push($.toneMapping),eA.push($.numClippingPlanes),eA.push($.numClipIntersection),eA.push($.depthPacking)}function rA(eA,$){f.disableAll(),$.supportsVertexTextures&&f.enable(0),$.instancing&&f.enable(1),$.instancingColor&&f.enable(2),$.instancingMorph&&f.enable(3),$.matcap&&f.enable(4),$.envMap&&f.enable(5),$.normalMapObjectSpace&&f.enable(6),$.normalMapTangentSpace&&f.enable(7),$.clearcoat&&f.enable(8),$.iridescence&&f.enable(9),$.alphaTest&&f.enable(10),$.vertexColors&&f.enable(11),$.vertexAlphas&&f.enable(12),$.vertexUv1s&&f.enable(13),$.vertexUv2s&&f.enable(14),$.vertexUv3s&&f.enable(15),$.vertexTangents&&f.enable(16),$.anisotropy&&f.enable(17),$.alphaHash&&f.enable(18),$.batching&&f.enable(19),$.dispersion&&f.enable(20),$.batchingColor&&f.enable(21),eA.push(f.mask),f.disableAll(),$.fog&&f.enable(0),$.useFog&&f.enable(1),$.flatShading&&f.enable(2),$.logarithmicDepthBuffer&&f.enable(3),$.reverseDepthBuffer&&f.enable(4),$.skinning&&f.enable(5),$.morphTargets&&f.enable(6),$.morphNormals&&f.enable(7),$.morphColors&&f.enable(8),$.premultipliedAlpha&&f.enable(9),$.shadowMapEnabled&&f.enable(10),$.doubleSided&&f.enable(11),$.flipSided&&f.enable(12),$.useDepthPacking&&f.enable(13),$.dithering&&f.enable(14),$.transmission&&f.enable(15),$.sheen&&f.enable(16),$.opaque&&f.enable(17),$.pointsUvs&&f.enable(18),$.decodeVideoTexture&&f.enable(19),$.decodeVideoTextureEmissive&&f.enable(20),$.alphaToCoverage&&f.enable(21),eA.push(f.mask)}function tA(eA){const $=z[eA.type];let RA;if($){const tg=pB[$];RA=$M.clone(tg.uniforms)}else RA=eA.uniforms;return RA}function TA(eA,$){let RA;for(let tg=0,Ag=k.length;tg<Ag;tg++){const lg=k[tg];if(lg.cacheKey===$){RA=lg,++RA.usedTimes;break}}return RA===void 0&&(RA=new aF(o,$,eA,c),k.push(RA)),RA}function mA(eA){if(--eA.usedTimes===0){const $=k.indexOf(eA);k[$]=k[k.length-1],k.pop(),eA.destroy()}}function pA(eA){G.remove(eA)}function MA(){G.dispose()}return{getParameters:L,getProgramCacheKey:F,getUniforms:tA,acquireProgram:TA,releaseProgram:mA,releaseShaderCache:pA,programs:k,dispose:MA}}function dF(){let o=new WeakMap;function t(p){return o.has(p)}function i(p){let f=o.get(p);return f===void 0&&(f={},o.set(p,f)),f}function E(p){o.delete(p)}function s(p,f,G){o.get(p)[f]=G}function c(){o=new WeakMap}return{has:t,get:i,remove:E,update:s,dispose:c}}function uF(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sd(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Gd(){const o=[];let t=0;const i=[],E=[],s=[];function c(){t=0,i.length=0,E.length=0,s.length=0}function p(J,x,Y,z,Z,L){let F=o[t];return F===void 0?(F={id:J.id,object:J,geometry:x,material:Y,groupOrder:z,renderOrder:J.renderOrder,z:Z,group:L},o[t]=F):(F.id=J.id,F.object=J,F.geometry=x,F.material=Y,F.groupOrder=z,F.renderOrder=J.renderOrder,F.z=Z,F.group=L),t++,F}function f(J,x,Y,z,Z,L){const F=p(J,x,Y,z,Z,L);Y.transmission>0?E.push(F):Y.transparent===!0?s.push(F):i.push(F)}function G(J,x,Y,z,Z,L){const F=p(J,x,Y,z,Z,L);Y.transmission>0?E.unshift(F):Y.transparent===!0?s.unshift(F):i.unshift(F)}function N(J,x){i.length>1&&i.sort(J||uF),E.length>1&&E.sort(x||Sd),s.length>1&&s.sort(x||Sd)}function k(){for(let J=t,x=o.length;J<x;J++){const Y=o[J];if(Y.id===null)break;Y.id=null,Y.object=null,Y.geometry=null,Y.material=null,Y.group=null}}return{opaque:i,transmissive:E,transparent:s,init:c,push:f,unshift:G,finish:k,sort:N}}function DF(){let o=new WeakMap;function t(E,s){const c=o.get(E);let p;return c===void 0?(p=new Gd,o.set(E,[p])):s>=c.length?(p=new Gd,c.push(p)):p=c[s],p}function i(){o=new WeakMap}return{get:t,dispose:i}}function fF(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new zA,color:new qI};break;case"SpotLight":i={position:new zA,direction:new zA,color:new qI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new zA,color:new qI,distance:0,decay:0};break;case"HemisphereLight":i={direction:new zA,skyColor:new qI,groundColor:new qI};break;case"RectAreaLight":i={color:new qI,position:new zA,halfWidth:new zA,halfHeight:new zA};break}return o[t.id]=i,i}}}function wF(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new WI};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new WI};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new WI,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let pF=0;function yF(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function MF(o){const t=new fF,i=wF(),E={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)E.probe.push(new zA);const s=new zA,c=new de,p=new de;function f(N){let k=0,J=0,x=0;for(let eA=0;eA<9;eA++)E.probe[eA].set(0,0,0);let Y=0,z=0,Z=0,L=0,F=0,hA=0,rA=0,tA=0,TA=0,mA=0,pA=0;N.sort(yF);for(let eA=0,$=N.length;eA<$;eA++){const RA=N[eA],tg=RA.color,Ag=RA.intensity,lg=RA.distance,ag=RA.shadow&&RA.shadow.map?RA.shadow.map.texture:null;if(RA.isAmbientLight)k+=tg.r*Ag,J+=tg.g*Ag,x+=tg.b*Ag;else if(RA.isLightProbe){for(let Bg=0;Bg<9;Bg++)E.probe[Bg].addScaledVector(RA.sh.coefficients[Bg],Ag);pA++}else if(RA.isDirectionalLight){const Bg=t.get(RA);if(Bg.color.copy(RA.color).multiplyScalar(RA.intensity),RA.castShadow){const fg=RA.shadow,ZA=i.get(RA);ZA.shadowIntensity=fg.intensity,ZA.shadowBias=fg.bias,ZA.shadowNormalBias=fg.normalBias,ZA.shadowRadius=fg.radius,ZA.shadowMapSize=fg.mapSize,E.directionalShadow[Y]=ZA,E.directionalShadowMap[Y]=ag,E.directionalShadowMatrix[Y]=RA.shadow.matrix,hA++}E.directional[Y]=Bg,Y++}else if(RA.isSpotLight){const Bg=t.get(RA);Bg.position.setFromMatrixPosition(RA.matrixWorld),Bg.color.copy(tg).multiplyScalar(Ag),Bg.distance=lg,Bg.coneCos=Math.cos(RA.angle),Bg.penumbraCos=Math.cos(RA.angle*(1-RA.penumbra)),Bg.decay=RA.decay,E.spot[Z]=Bg;const fg=RA.shadow;if(RA.map&&(E.spotLightMap[TA]=RA.map,TA++,fg.updateMatrices(RA),RA.castShadow&&mA++),E.spotLightMatrix[Z]=fg.matrix,RA.castShadow){const ZA=i.get(RA);ZA.shadowIntensity=fg.intensity,ZA.shadowBias=fg.bias,ZA.shadowNormalBias=fg.normalBias,ZA.shadowRadius=fg.radius,ZA.shadowMapSize=fg.mapSize,E.spotShadow[Z]=ZA,E.spotShadowMap[Z]=ag,tA++}Z++}else if(RA.isRectAreaLight){const Bg=t.get(RA);Bg.color.copy(tg).multiplyScalar(Ag),Bg.halfWidth.set(RA.width*.5,0,0),Bg.halfHeight.set(0,RA.height*.5,0),E.rectArea[L]=Bg,L++}else if(RA.isPointLight){const Bg=t.get(RA);if(Bg.color.copy(RA.color).multiplyScalar(RA.intensity),Bg.distance=RA.distance,Bg.decay=RA.decay,RA.castShadow){const fg=RA.shadow,ZA=i.get(RA);ZA.shadowIntensity=fg.intensity,ZA.shadowBias=fg.bias,ZA.shadowNormalBias=fg.normalBias,ZA.shadowRadius=fg.radius,ZA.shadowMapSize=fg.mapSize,ZA.shadowCameraNear=fg.camera.near,ZA.shadowCameraFar=fg.camera.far,E.pointShadow[z]=ZA,E.pointShadowMap[z]=ag,E.pointShadowMatrix[z]=RA.shadow.matrix,rA++}E.point[z]=Bg,z++}else if(RA.isHemisphereLight){const Bg=t.get(RA);Bg.skyColor.copy(RA.color).multiplyScalar(Ag),Bg.groundColor.copy(RA.groundColor).multiplyScalar(Ag),E.hemi[F]=Bg,F++}}L>0&&(o.has("OES_texture_float_linear")===!0?(E.rectAreaLTC1=nt.LTC_FLOAT_1,E.rectAreaLTC2=nt.LTC_FLOAT_2):(E.rectAreaLTC1=nt.LTC_HALF_1,E.rectAreaLTC2=nt.LTC_HALF_2)),E.ambient[0]=k,E.ambient[1]=J,E.ambient[2]=x;const MA=E.hash;(MA.directionalLength!==Y||MA.pointLength!==z||MA.spotLength!==Z||MA.rectAreaLength!==L||MA.hemiLength!==F||MA.numDirectionalShadows!==hA||MA.numPointShadows!==rA||MA.numSpotShadows!==tA||MA.numSpotMaps!==TA||MA.numLightProbes!==pA)&&(E.directional.length=Y,E.spot.length=Z,E.rectArea.length=L,E.point.length=z,E.hemi.length=F,E.directionalShadow.length=hA,E.directionalShadowMap.length=hA,E.pointShadow.length=rA,E.pointShadowMap.length=rA,E.spotShadow.length=tA,E.spotShadowMap.length=tA,E.directionalShadowMatrix.length=hA,E.pointShadowMatrix.length=rA,E.spotLightMatrix.length=tA+TA-mA,E.spotLightMap.length=TA,E.numSpotLightShadowsWithMaps=mA,E.numLightProbes=pA,MA.directionalLength=Y,MA.pointLength=z,MA.spotLength=Z,MA.rectAreaLength=L,MA.hemiLength=F,MA.numDirectionalShadows=hA,MA.numPointShadows=rA,MA.numSpotShadows=tA,MA.numSpotMaps=TA,MA.numLightProbes=pA,E.version=pF++)}function G(N,k){let J=0,x=0,Y=0,z=0,Z=0;const L=k.matrixWorldInverse;for(let F=0,hA=N.length;F<hA;F++){const rA=N[F];if(rA.isDirectionalLight){const tA=E.directional[J];tA.direction.setFromMatrixPosition(rA.matrixWorld),s.setFromMatrixPosition(rA.target.matrixWorld),tA.direction.sub(s),tA.direction.transformDirection(L),J++}else if(rA.isSpotLight){const tA=E.spot[Y];tA.position.setFromMatrixPosition(rA.matrixWorld),tA.position.applyMatrix4(L),tA.direction.setFromMatrixPosition(rA.matrixWorld),s.setFromMatrixPosition(rA.target.matrixWorld),tA.direction.sub(s),tA.direction.transformDirection(L),Y++}else if(rA.isRectAreaLight){const tA=E.rectArea[z];tA.position.setFromMatrixPosition(rA.matrixWorld),tA.position.applyMatrix4(L),p.identity(),c.copy(rA.matrixWorld),c.premultiply(L),p.extractRotation(c),tA.halfWidth.set(rA.width*.5,0,0),tA.halfHeight.set(0,rA.height*.5,0),tA.halfWidth.applyMatrix4(p),tA.halfHeight.applyMatrix4(p),z++}else if(rA.isPointLight){const tA=E.point[x];tA.position.setFromMatrixPosition(rA.matrixWorld),tA.position.applyMatrix4(L),x++}else if(rA.isHemisphereLight){const tA=E.hemi[Z];tA.direction.setFromMatrixPosition(rA.matrixWorld),tA.direction.transformDirection(L),Z++}}}return{setup:f,setupView:G,state:E}}function Fd(o){const t=new MF(o),i=[],E=[];function s(k){N.camera=k,i.length=0,E.length=0}function c(k){i.push(k)}function p(k){E.push(k)}function f(){t.setup(i)}function G(k){t.setupView(i,k)}const N={lightsArray:i,shadowsArray:E,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:N,setupLights:f,setupLightsView:G,pushLight:c,pushShadow:p}}function RF(o){let t=new WeakMap;function i(s,c=0){const p=t.get(s);let f;return p===void 0?(f=new Fd(o),t.set(s,[f])):c>=p.length?(f=new Fd(o),p.push(f)):f=p[c],f}function E(){t=new WeakMap}return{get:i,dispose:E}}class mF extends Pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SF extends Pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FF=`uniform sampler2D shadow_pass;
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
}`;function NF(o,t,i){let E=new Bu;const s=new WI,c=new WI,p=new oe,f=new mF({depthPacking:wM}),G=new SF,N={},k=i.maxTextureSize,J={[FC]:ri,[ri]:FC,[yB]:yB},x=new NC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new WI},radius:{value:4}},vertexShader:GF,fragmentShader:FF}),Y=x.clone();Y.defines.HORIZONTAL_PASS=1;const z=new UC;z.setAttribute("position",new RB(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const Z=new iB(z,x),L=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let F=this.type;this.render=function(mA,pA,MA){if(L.enabled===!1||L.autoUpdate===!1&&L.needsUpdate===!1||mA.length===0)return;const eA=o.getRenderTarget(),$=o.getActiveCubeFace(),RA=o.getActiveMipmapLevel(),tg=o.state;tg.setBlending(SC),tg.buffers.color.setClear(1,1,1,1),tg.buffers.depth.setTest(!0),tg.setScissorTest(!1);const Ag=F!==jB&&this.type===jB,lg=F===jB&&this.type!==jB;for(let ag=0,Bg=mA.length;ag<Bg;ag++){const fg=mA[ag],ZA=fg.shadow;if(ZA===void 0){console.warn("THREE.WebGLShadowMap:",fg,"has no shadow.");continue}if(ZA.autoUpdate===!1&&ZA.needsUpdate===!1)continue;s.copy(ZA.mapSize);const Wg=ZA.getFrameExtents();if(s.multiply(Wg),c.copy(ZA.mapSize),(s.x>k||s.y>k)&&(s.x>k&&(c.x=Math.floor(k/Wg.x),s.x=c.x*Wg.x,ZA.mapSize.x=c.x),s.y>k&&(c.y=Math.floor(k/Wg.y),s.y=c.y*Wg.y,ZA.mapSize.y=c.y)),ZA.map===null||Ag===!0||lg===!0){const dt=this.type!==jB?{minFilter:BB,magFilter:BB}:{};ZA.map!==null&&ZA.map.dispose(),ZA.map=new wE(s.x,s.y,dt),ZA.map.texture.name=fg.name+".shadowMap",ZA.camera.updateProjectionMatrix()}o.setRenderTarget(ZA.map),o.clear();const Et=ZA.getViewportCount();for(let dt=0;dt<Et;dt++){const xt=ZA.getViewport(dt);p.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),tg.viewport(p),ZA.updateMatrices(fg,dt),E=ZA.getFrustum(),tA(pA,MA,ZA.camera,fg,this.type)}ZA.isPointLightShadow!==!0&&this.type===jB&&hA(ZA,MA),ZA.needsUpdate=!1}F=this.type,L.needsUpdate=!1,o.setRenderTarget(eA,$,RA)};function hA(mA,pA){const MA=t.update(Z);x.defines.VSM_SAMPLES!==mA.blurSamples&&(x.defines.VSM_SAMPLES=mA.blurSamples,Y.defines.VSM_SAMPLES=mA.blurSamples,x.needsUpdate=!0,Y.needsUpdate=!0),mA.mapPass===null&&(mA.mapPass=new wE(s.x,s.y)),x.uniforms.shadow_pass.value=mA.map.texture,x.uniforms.resolution.value=mA.mapSize,x.uniforms.radius.value=mA.radius,o.setRenderTarget(mA.mapPass),o.clear(),o.renderBufferDirect(pA,null,MA,x,Z,null),Y.uniforms.shadow_pass.value=mA.mapPass.texture,Y.uniforms.resolution.value=mA.mapSize,Y.uniforms.radius.value=mA.radius,o.setRenderTarget(mA.map),o.clear(),o.renderBufferDirect(pA,null,MA,Y,Z,null)}function rA(mA,pA,MA,eA){let $=null;const RA=MA.isPointLight===!0?mA.customDistanceMaterial:mA.customDepthMaterial;if(RA!==void 0)$=RA;else if($=MA.isPointLight===!0?G:f,o.localClippingEnabled&&pA.clipShadows===!0&&Array.isArray(pA.clippingPlanes)&&pA.clippingPlanes.length!==0||pA.displacementMap&&pA.displacementScale!==0||pA.alphaMap&&pA.alphaTest>0||pA.map&&pA.alphaTest>0){const tg=$.uuid,Ag=pA.uuid;let lg=N[tg];lg===void 0&&(lg={},N[tg]=lg);let ag=lg[Ag];ag===void 0&&(ag=$.clone(),lg[Ag]=ag,pA.addEventListener("dispose",TA)),$=ag}if($.visible=pA.visible,$.wireframe=pA.wireframe,eA===jB?$.side=pA.shadowSide!==null?pA.shadowSide:pA.side:$.side=pA.shadowSide!==null?pA.shadowSide:J[pA.side],$.alphaMap=pA.alphaMap,$.alphaTest=pA.alphaTest,$.map=pA.map,$.clipShadows=pA.clipShadows,$.clippingPlanes=pA.clippingPlanes,$.clipIntersection=pA.clipIntersection,$.displacementMap=pA.displacementMap,$.displacementScale=pA.displacementScale,$.displacementBias=pA.displacementBias,$.wireframeLinewidth=pA.wireframeLinewidth,$.linewidth=pA.linewidth,MA.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const tg=o.properties.get($);tg.light=MA}return $}function tA(mA,pA,MA,eA,$){if(mA.visible===!1)return;if(mA.layers.test(pA.layers)&&(mA.isMesh||mA.isLine||mA.isPoints)&&(mA.castShadow||mA.receiveShadow&&$===jB)&&(!mA.frustumCulled||E.intersectsObject(mA))){mA.modelViewMatrix.multiplyMatrices(MA.matrixWorldInverse,mA.matrixWorld);const Ag=t.update(mA),lg=mA.material;if(Array.isArray(lg)){const ag=Ag.groups;for(let Bg=0,fg=ag.length;Bg<fg;Bg++){const ZA=ag[Bg],Wg=lg[ZA.materialIndex];if(Wg&&Wg.visible){const Et=rA(mA,Wg,eA,$);mA.onBeforeShadow(o,mA,pA,MA,Ag,Et,ZA),o.renderBufferDirect(MA,null,Ag,Et,mA,ZA),mA.onAfterShadow(o,mA,pA,MA,Ag,Et,ZA)}}}else if(lg.visible){const ag=rA(mA,lg,eA,$);mA.onBeforeShadow(o,mA,pA,MA,Ag,ag,null),o.renderBufferDirect(MA,null,Ag,ag,mA,null),mA.onAfterShadow(o,mA,pA,MA,Ag,ag,null)}}const tg=mA.children;for(let Ag=0,lg=tg.length;Ag<lg;Ag++)tA(tg[Ag],pA,MA,eA,$)}function TA(mA){mA.target.removeEventListener("dispose",TA);for(const MA in N){const eA=N[MA],$=mA.target.uuid;$ in eA&&(eA[$].dispose(),delete eA[$])}}}const UF={[Dr]:fr,[wr]:Mr,[pr]:Rr,[MQ]:yr,[fr]:Dr,[Mr]:wr,[Rr]:pr,[yr]:MQ};function kF(o,t){function i(){let UA=!1;const zg=new oe;let gg=null;const cg=new oe(0,0,0,0);return{setMask:function(At){gg!==At&&!UA&&(o.colorMask(At,At,At,At),gg=At)},setLocked:function(At){UA=At},setClear:function(At,Hg,zt,PI,vI){vI===!0&&(At*=PI,Hg*=PI,zt*=PI),zg.set(At,Hg,zt,PI),cg.equals(zg)===!1&&(o.clearColor(At,Hg,zt,PI),cg.copy(zg))},reset:function(){UA=!1,gg=null,cg.set(-1,0,0,0)}}}function E(){let UA=!1,zg=!1,gg=null,cg=null,At=null;return{setReversed:function(Hg){if(zg!==Hg){const zt=t.get("EXT_clip_control");zg?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const PI=At;At=null,this.setClear(PI)}zg=Hg},getReversed:function(){return zg},setTest:function(Hg){Hg?dg(o.DEPTH_TEST):dA(o.DEPTH_TEST)},setMask:function(Hg){gg!==Hg&&!UA&&(o.depthMask(Hg),gg=Hg)},setFunc:function(Hg){if(zg&&(Hg=UF[Hg]),cg!==Hg){switch(Hg){case Dr:o.depthFunc(o.NEVER);break;case fr:o.depthFunc(o.ALWAYS);break;case wr:o.depthFunc(o.LESS);break;case MQ:o.depthFunc(o.LEQUAL);break;case pr:o.depthFunc(o.EQUAL);break;case yr:o.depthFunc(o.GEQUAL);break;case Mr:o.depthFunc(o.GREATER);break;case Rr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}cg=Hg}},setLocked:function(Hg){UA=Hg},setClear:function(Hg){At!==Hg&&(zg&&(Hg=1-Hg),o.clearDepth(Hg),At=Hg)},reset:function(){UA=!1,gg=null,cg=null,At=null,zg=!1}}}function s(){let UA=!1,zg=null,gg=null,cg=null,At=null,Hg=null,zt=null,PI=null,vI=null;return{setTest:function(pI){UA||(pI?dg(o.STENCIL_TEST):dA(o.STENCIL_TEST))},setMask:function(pI){zg!==pI&&!UA&&(o.stencilMask(pI),zg=pI)},setFunc:function(pI,OI,Xe){(gg!==pI||cg!==OI||At!==Xe)&&(o.stencilFunc(pI,OI,Xe),gg=pI,cg=OI,At=Xe)},setOp:function(pI,OI,Xe){(Hg!==pI||zt!==OI||PI!==Xe)&&(o.stencilOp(pI,OI,Xe),Hg=pI,zt=OI,PI=Xe)},setLocked:function(pI){UA=pI},setClear:function(pI){vI!==pI&&(o.clearStencil(pI),vI=pI)},reset:function(){UA=!1,zg=null,gg=null,cg=null,At=null,Hg=null,zt=null,PI=null,vI=null}}}const c=new i,p=new E,f=new s,G=new WeakMap,N=new WeakMap;let k={},J={},x=new WeakMap,Y=[],z=null,Z=!1,L=null,F=null,hA=null,rA=null,tA=null,TA=null,mA=null,pA=new qI(0,0,0),MA=0,eA=!1,$=null,RA=null,tg=null,Ag=null,lg=null;const ag=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Bg=!1,fg=0;const ZA=o.getParameter(o.VERSION);ZA.indexOf("WebGL")!==-1?(fg=parseFloat(/^WebGL (\d)/.exec(ZA)[1]),Bg=fg>=1):ZA.indexOf("OpenGL ES")!==-1&&(fg=parseFloat(/^OpenGL ES (\d)/.exec(ZA)[1]),Bg=fg>=2);let Wg=null,Et={};const dt=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),QI=new oe().fromArray(dt),Ig=new oe().fromArray(xt);function mg(UA,zg,gg,cg){const At=new Uint8Array(4),Hg=o.createTexture();o.bindTexture(UA,Hg),o.texParameteri(UA,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(UA,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<gg;zt++)UA===o.TEXTURE_3D||UA===o.TEXTURE_2D_ARRAY?o.texImage3D(zg,0,o.RGBA,1,1,cg,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(zg+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return Hg}const at={};at[o.TEXTURE_2D]=mg(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=mg(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=mg(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=mg(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),p.setClear(1),f.setClear(0),dg(o.DEPTH_TEST),p.setFunc(MQ),Dg(!1),tt(Ll),dg(o.CULL_FACE),gA(SC);function dg(UA){k[UA]!==!0&&(o.enable(UA),k[UA]=!0)}function dA(UA){k[UA]!==!1&&(o.disable(UA),k[UA]=!1)}function oA(UA,zg){return J[UA]!==zg?(o.bindFramebuffer(UA,zg),J[UA]=zg,UA===o.DRAW_FRAMEBUFFER&&(J[o.FRAMEBUFFER]=zg),UA===o.FRAMEBUFFER&&(J[o.DRAW_FRAMEBUFFER]=zg),!0):!1}function lA(UA,zg){let gg=Y,cg=!1;if(UA){gg=x.get(zg),gg===void 0&&(gg=[],x.set(zg,gg));const At=UA.textures;if(gg.length!==At.length||gg[0]!==o.COLOR_ATTACHMENT0){for(let Hg=0,zt=At.length;Hg<zt;Hg++)gg[Hg]=o.COLOR_ATTACHMENT0+Hg;gg.length=At.length,cg=!0}}else gg[0]!==o.BACK&&(gg[0]=o.BACK,cg=!0);cg&&o.drawBuffers(gg)}function XA(UA){return z!==UA?(o.useProgram(UA),z=UA,!0):!1}const fA={[lE]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[Zy]:o.FUNC_REVERSE_SUBTRACT};fA[Xy]=o.MIN,fA[zy]=o.MAX;const KA={[jy]:o.ZERO,[$y]:o.ONE,[AM]:o.SRC_COLOR,[dr]:o.SRC_ALPHA,[BM]:o.SRC_ALPHA_SATURATE,[eM]:o.DST_COLOR,[tM]:o.DST_ALPHA,[gM]:o.ONE_MINUS_SRC_COLOR,[ur]:o.ONE_MINUS_SRC_ALPHA,[iM]:o.ONE_MINUS_DST_COLOR,[IM]:o.ONE_MINUS_DST_ALPHA,[CM]:o.CONSTANT_COLOR,[EM]:o.ONE_MINUS_CONSTANT_COLOR,[QM]:o.CONSTANT_ALPHA,[nM]:o.ONE_MINUS_CONSTANT_ALPHA};function gA(UA,zg,gg,cg,At,Hg,zt,PI,vI,pI){if(UA===SC){Z===!0&&(dA(o.BLEND),Z=!1);return}if(Z===!1&&(dg(o.BLEND),Z=!0),UA!==Oy){if(UA!==L||pI!==eA){if((F!==lE||tA!==lE)&&(o.blendEquation(o.FUNC_ADD),F=lE,tA=lE),pI)switch(UA){case wQ:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xl:o.blendFunc(o.ONE,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",UA);break}else switch(UA){case wQ:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xl:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Jl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",UA);break}hA=null,rA=null,TA=null,mA=null,pA.set(0,0,0),MA=0,L=UA,eA=pI}return}At=At||zg,Hg=Hg||gg,zt=zt||cg,(zg!==F||At!==tA)&&(o.blendEquationSeparate(fA[zg],fA[At]),F=zg,tA=At),(gg!==hA||cg!==rA||Hg!==TA||zt!==mA)&&(o.blendFuncSeparate(KA[gg],KA[cg],KA[Hg],KA[zt]),hA=gg,rA=cg,TA=Hg,mA=zt),(PI.equals(pA)===!1||vI!==MA)&&(o.blendColor(PI.r,PI.g,PI.b,vI),pA.copy(PI),MA=vI),L=UA,eA=!1}function Jg(UA,zg){UA.side===yB?dA(o.CULL_FACE):dg(o.CULL_FACE);let gg=UA.side===ri;zg&&(gg=!gg),Dg(gg),UA.blending===wQ&&UA.transparent===!1?gA(SC):gA(UA.blending,UA.blendEquation,UA.blendSrc,UA.blendDst,UA.blendEquationAlpha,UA.blendSrcAlpha,UA.blendDstAlpha,UA.blendColor,UA.blendAlpha,UA.premultipliedAlpha),p.setFunc(UA.depthFunc),p.setTest(UA.depthTest),p.setMask(UA.depthWrite),c.setMask(UA.colorWrite);const cg=UA.stencilWrite;f.setTest(cg),cg&&(f.setMask(UA.stencilWriteMask),f.setFunc(UA.stencilFunc,UA.stencilRef,UA.stencilFuncMask),f.setOp(UA.stencilFail,UA.stencilZFail,UA.stencilZPass)),vt(UA.polygonOffset,UA.polygonOffsetFactor,UA.polygonOffsetUnits),UA.alphaToCoverage===!0?dg(o.SAMPLE_ALPHA_TO_COVERAGE):dA(o.SAMPLE_ALPHA_TO_COVERAGE)}function Dg(UA){$!==UA&&(UA?o.frontFace(o.CW):o.frontFace(o.CCW),$=UA)}function tt(UA){UA!==_y?(dg(o.CULL_FACE),UA!==RA&&(UA===Ll?o.cullFace(o.BACK):UA===Wy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):dA(o.CULL_FACE),RA=UA}function Og(UA){UA!==tg&&(Bg&&o.lineWidth(UA),tg=UA)}function vt(UA,zg,gg){UA?(dg(o.POLYGON_OFFSET_FILL),(Ag!==zg||lg!==gg)&&(o.polygonOffset(zg,gg),Ag=zg,lg=gg)):dA(o.POLYGON_OFFSET_FILL)}function gt(UA){UA?dg(o.SCISSOR_TEST):dA(o.SCISSOR_TEST)}function q(UA){UA===void 0&&(UA=o.TEXTURE0+ag-1),Wg!==UA&&(o.activeTexture(UA),Wg=UA)}function P(UA,zg,gg){gg===void 0&&(Wg===null?gg=o.TEXTURE0+ag-1:gg=Wg);let cg=Et[gg];cg===void 0&&(cg={type:void 0,texture:void 0},Et[gg]=cg),(cg.type!==UA||cg.texture!==zg)&&(Wg!==gg&&(o.activeTexture(gg),Wg=gg),o.bindTexture(UA,zg||at[UA]),cg.type=UA,cg.texture=zg)}function YA(){const UA=Et[Wg];UA!==void 0&&UA.type!==void 0&&(o.bindTexture(UA.type,null),UA.type=void 0,UA.texture=void 0)}function Qg(){try{o.compressedTexImage2D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function _A(){try{o.compressedTexImage3D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function og(){try{o.texSubImage2D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Vg(){try{o.texSubImage3D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Zg(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Pg(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function eI(){try{o.texStorage2D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function kg(){try{o.texStorage3D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Fg(){try{o.texImage2D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Nt(){try{o.texImage3D.apply(o,arguments)}catch(UA){console.error("THREE.WebGLState:",UA)}}function Yt(UA){QI.equals(UA)===!1&&(o.scissor(UA.x,UA.y,UA.z,UA.w),QI.copy(UA))}function It(UA){Ig.equals(UA)===!1&&(o.viewport(UA.x,UA.y,UA.z,UA.w),Ig.copy(UA))}function oI(UA,zg){let gg=N.get(zg);gg===void 0&&(gg=new WeakMap,N.set(zg,gg));let cg=gg.get(UA);cg===void 0&&(cg=o.getUniformBlockIndex(zg,UA.name),gg.set(UA,cg))}function Ht(UA,zg){const cg=N.get(zg).get(UA);G.get(zg)!==cg&&(o.uniformBlockBinding(zg,cg,UA.__bindingPointIndex),G.set(zg,cg))}function hI(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),k={},Wg=null,Et={},J={},x=new WeakMap,Y=[],z=null,Z=!1,L=null,F=null,hA=null,rA=null,tA=null,TA=null,mA=null,pA=new qI(0,0,0),MA=0,eA=!1,$=null,RA=null,tg=null,Ag=null,lg=null,QI.set(0,0,o.canvas.width,o.canvas.height),Ig.set(0,0,o.canvas.width,o.canvas.height),c.reset(),p.reset(),f.reset()}return{buffers:{color:c,depth:p,stencil:f},enable:dg,disable:dA,bindFramebuffer:oA,drawBuffers:lA,useProgram:XA,setBlending:gA,setMaterial:Jg,setFlipSided:Dg,setCullFace:tt,setLineWidth:Og,setPolygonOffset:vt,setScissorTest:gt,activeTexture:q,bindTexture:P,unbindTexture:YA,compressedTexImage2D:Qg,compressedTexImage3D:_A,texImage2D:Fg,texImage3D:Nt,updateUBOMapping:oI,uniformBlockBinding:Ht,texStorage2D:eI,texStorage3D:kg,texSubImage2D:og,texSubImage3D:Vg,compressedTexSubImage2D:Zg,compressedTexSubImage3D:Pg,scissor:Yt,viewport:It,reset:hI}}function Nd(o,t,i,E){const s=LF(E);switch(i){case vd:return o*t;case Td:return o*t;case qd:return o*t*2;case _d:return o*t/s.components*s.byteLength;case Qh:return o*t/s.components*s.byteLength;case Wd:return o*t*2/s.components*s.byteLength;case nh:return o*t*2/s.components*s.byteLength;case Hd:return o*t*3/s.components*s.byteLength;case eB:return o*t*4/s.components*s.byteLength;case oh:return o*t*4/s.components*s.byteLength;case ys:case Ms:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Rs:case ms:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ur:case Lr:return Math.max(o,16)*Math.max(t,8)/4;case Nr:case kr:return Math.max(o,8)*Math.max(t,8)/2;case xr:case Jr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case br:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case vr:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case qr:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _r:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pr:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Or:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case zr:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ss:case jr:case $r:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Pd:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*8;case gh:case th:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LF(o){switch(o){case tC:case bd:return{byteLength:1,components:1};case vn:case Kd:case Tn:return{byteLength:2,components:1};case Ch:case Eh:return{byteLength:2,components:4};case fE:case Bh:case $B:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function xF(o,t,i,E,s,c,p){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new WI,k=new WeakMap;let J;const x=new WeakMap;let Y=!1;try{Y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(q,P){return Y?new OffscreenCanvas(q,P):Ns("canvas")}function Z(q,P,YA){let Qg=1;const _A=gt(q);if((_A.width>YA||_A.height>YA)&&(Qg=YA/Math.max(_A.width,_A.height)),Qg<1)if(typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&q instanceof ImageBitmap||typeof VideoFrame<"u"&&q instanceof VideoFrame){const og=Math.floor(Qg*_A.width),Vg=Math.floor(Qg*_A.height);J===void 0&&(J=z(og,Vg));const Zg=P?z(og,Vg):J;return Zg.width=og,Zg.height=Vg,Zg.getContext("2d").drawImage(q,0,0,og,Vg),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_A.width+"x"+_A.height+") to ("+og+"x"+Vg+")."),Zg}else return"data"in q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_A.width+"x"+_A.height+")."),q;return q}function L(q){return q.generateMipmaps}function F(q){o.generateMipmap(q)}function hA(q){return q.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:q.isWebGL3DRenderTarget?o.TEXTURE_3D:q.isWebGLArrayRenderTarget||q.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function rA(q,P,YA,Qg,_A=!1){if(q!==null){if(o[q]!==void 0)return o[q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+q+"'")}let og=P;if(P===o.RED&&(YA===o.FLOAT&&(og=o.R32F),YA===o.HALF_FLOAT&&(og=o.R16F),YA===o.UNSIGNED_BYTE&&(og=o.R8)),P===o.RED_INTEGER&&(YA===o.UNSIGNED_BYTE&&(og=o.R8UI),YA===o.UNSIGNED_SHORT&&(og=o.R16UI),YA===o.UNSIGNED_INT&&(og=o.R32UI),YA===o.BYTE&&(og=o.R8I),YA===o.SHORT&&(og=o.R16I),YA===o.INT&&(og=o.R32I)),P===o.RG&&(YA===o.FLOAT&&(og=o.RG32F),YA===o.HALF_FLOAT&&(og=o.RG16F),YA===o.UNSIGNED_BYTE&&(og=o.RG8)),P===o.RG_INTEGER&&(YA===o.UNSIGNED_BYTE&&(og=o.RG8UI),YA===o.UNSIGNED_SHORT&&(og=o.RG16UI),YA===o.UNSIGNED_INT&&(og=o.RG32UI),YA===o.BYTE&&(og=o.RG8I),YA===o.SHORT&&(og=o.RG16I),YA===o.INT&&(og=o.RG32I)),P===o.RGB_INTEGER&&(YA===o.UNSIGNED_BYTE&&(og=o.RGB8UI),YA===o.UNSIGNED_SHORT&&(og=o.RGB16UI),YA===o.UNSIGNED_INT&&(og=o.RGB32UI),YA===o.BYTE&&(og=o.RGB8I),YA===o.SHORT&&(og=o.RGB16I),YA===o.INT&&(og=o.RGB32I)),P===o.RGBA_INTEGER&&(YA===o.UNSIGNED_BYTE&&(og=o.RGBA8UI),YA===o.UNSIGNED_SHORT&&(og=o.RGBA16UI),YA===o.UNSIGNED_INT&&(og=o.RGBA32UI),YA===o.BYTE&&(og=o.RGBA8I),YA===o.SHORT&&(og=o.RGBA16I),YA===o.INT&&(og=o.RGBA32I)),P===o.RGB&&YA===o.UNSIGNED_INT_5_9_9_9_REV&&(og=o.RGB9_E5),P===o.RGBA){const Vg=_A?ks:LI.getTransfer(Qg);YA===o.FLOAT&&(og=o.RGBA32F),YA===o.HALF_FLOAT&&(og=o.RGBA16F),YA===o.UNSIGNED_BYTE&&(og=Vg===_I?o.SRGB8_ALPHA8:o.RGBA8),YA===o.UNSIGNED_SHORT_4_4_4_4&&(og=o.RGBA4),YA===o.UNSIGNED_SHORT_5_5_5_1&&(og=o.RGB5_A1)}return(og===o.R16F||og===o.R32F||og===o.RG16F||og===o.RG32F||og===o.RGBA16F||og===o.RGBA32F)&&t.get("EXT_color_buffer_float"),og}function tA(q,P){let YA;return q?P===null||P===fE||P===SQ?YA=o.DEPTH24_STENCIL8:P===$B?YA=o.DEPTH32F_STENCIL8:P===vn&&(YA=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===fE||P===SQ?YA=o.DEPTH_COMPONENT24:P===$B?YA=o.DEPTH_COMPONENT32F:P===vn&&(YA=o.DEPTH_COMPONENT16),YA}function TA(q,P){return L(q)===!0||q.isFramebufferTexture&&q.minFilter!==BB&&q.minFilter!==MB?Math.log2(Math.max(P.width,P.height))+1:q.mipmaps!==void 0&&q.mipmaps.length>0?q.mipmaps.length:q.isCompressedTexture&&Array.isArray(q.image)?P.mipmaps.length:1}function mA(q){const P=q.target;P.removeEventListener("dispose",mA),MA(P),P.isVideoTexture&&k.delete(P)}function pA(q){const P=q.target;P.removeEventListener("dispose",pA),$(P)}function MA(q){const P=E.get(q);if(P.__webglInit===void 0)return;const YA=q.source,Qg=x.get(YA);if(Qg){const _A=Qg[P.__cacheKey];_A.usedTimes--,_A.usedTimes===0&&eA(q),Object.keys(Qg).length===0&&x.delete(YA)}E.remove(q)}function eA(q){const P=E.get(q);o.deleteTexture(P.__webglTexture);const YA=q.source,Qg=x.get(YA);delete Qg[P.__cacheKey],p.memory.textures--}function $(q){const P=E.get(q);if(q.depthTexture&&(q.depthTexture.dispose(),E.remove(q.depthTexture)),q.isWebGLCubeRenderTarget)for(let Qg=0;Qg<6;Qg++){if(Array.isArray(P.__webglFramebuffer[Qg]))for(let _A=0;_A<P.__webglFramebuffer[Qg].length;_A++)o.deleteFramebuffer(P.__webglFramebuffer[Qg][_A]);else o.deleteFramebuffer(P.__webglFramebuffer[Qg]);P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer[Qg])}else{if(Array.isArray(P.__webglFramebuffer))for(let Qg=0;Qg<P.__webglFramebuffer.length;Qg++)o.deleteFramebuffer(P.__webglFramebuffer[Qg]);else o.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&o.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Qg=0;Qg<P.__webglColorRenderbuffer.length;Qg++)P.__webglColorRenderbuffer[Qg]&&o.deleteRenderbuffer(P.__webglColorRenderbuffer[Qg]);P.__webglDepthRenderbuffer&&o.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const YA=q.textures;for(let Qg=0,_A=YA.length;Qg<_A;Qg++){const og=E.get(YA[Qg]);og.__webglTexture&&(o.deleteTexture(og.__webglTexture),p.memory.textures--),E.remove(YA[Qg])}E.remove(q)}let RA=0;function tg(){RA=0}function Ag(){const q=RA;return q>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+q+" texture units while this GPU supports only "+s.maxTextures),RA+=1,q}function lg(q){const P=[];return P.push(q.wrapS),P.push(q.wrapT),P.push(q.wrapR||0),P.push(q.magFilter),P.push(q.minFilter),P.push(q.anisotropy),P.push(q.internalFormat),P.push(q.format),P.push(q.type),P.push(q.generateMipmaps),P.push(q.premultiplyAlpha),P.push(q.flipY),P.push(q.unpackAlignment),P.push(q.colorSpace),P.join()}function ag(q,P){const YA=E.get(q);if(q.isVideoTexture&&Og(q),q.isRenderTargetTexture===!1&&q.version>0&&YA.__version!==q.version){const Qg=q.image;if(Qg===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Qg.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ig(YA,q,P);return}}i.bindTexture(o.TEXTURE_2D,YA.__webglTexture,o.TEXTURE0+P)}function Bg(q,P){const YA=E.get(q);if(q.version>0&&YA.__version!==q.version){Ig(YA,q,P);return}i.bindTexture(o.TEXTURE_2D_ARRAY,YA.__webglTexture,o.TEXTURE0+P)}function fg(q,P){const YA=E.get(q);if(q.version>0&&YA.__version!==q.version){Ig(YA,q,P);return}i.bindTexture(o.TEXTURE_3D,YA.__webglTexture,o.TEXTURE0+P)}function ZA(q,P){const YA=E.get(q);if(q.version>0&&YA.__version!==q.version){mg(YA,q,P);return}i.bindTexture(o.TEXTURE_CUBE_MAP,YA.__webglTexture,o.TEXTURE0+P)}const Wg={[Gr]:o.REPEAT,[uE]:o.CLAMP_TO_EDGE,[Fr]:o.MIRRORED_REPEAT},Et={[BB]:o.NEAREST,[DM]:o.NEAREST_MIPMAP_NEAREST,[gs]:o.NEAREST_MIPMAP_LINEAR,[MB]:o.LINEAR,[Ha]:o.LINEAR_MIPMAP_NEAREST,[DE]:o.LINEAR_MIPMAP_LINEAR},dt={[yM]:o.NEVER,[FM]:o.ALWAYS,[MM]:o.LESS,[Vd]:o.LEQUAL,[RM]:o.EQUAL,[GM]:o.GEQUAL,[mM]:o.GREATER,[SM]:o.NOTEQUAL};function xt(q,P){if(P.type===$B&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===MB||P.magFilter===Ha||P.magFilter===gs||P.magFilter===DE||P.minFilter===MB||P.minFilter===Ha||P.minFilter===gs||P.minFilter===DE)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(q,o.TEXTURE_WRAP_S,Wg[P.wrapS]),o.texParameteri(q,o.TEXTURE_WRAP_T,Wg[P.wrapT]),(q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY)&&o.texParameteri(q,o.TEXTURE_WRAP_R,Wg[P.wrapR]),o.texParameteri(q,o.TEXTURE_MAG_FILTER,Et[P.magFilter]),o.texParameteri(q,o.TEXTURE_MIN_FILTER,Et[P.minFilter]),P.compareFunction&&(o.texParameteri(q,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(q,o.TEXTURE_COMPARE_FUNC,dt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===BB||P.minFilter!==gs&&P.minFilter!==DE||P.type===$B&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||E.get(P).__currentAnisotropy){const YA=t.get("EXT_texture_filter_anisotropic");o.texParameterf(q,YA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),E.get(P).__currentAnisotropy=P.anisotropy}}}function QI(q,P){let YA=!1;q.__webglInit===void 0&&(q.__webglInit=!0,P.addEventListener("dispose",mA));const Qg=P.source;let _A=x.get(Qg);_A===void 0&&(_A={},x.set(Qg,_A));const og=lg(P);if(og!==q.__cacheKey){_A[og]===void 0&&(_A[og]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,YA=!0),_A[og].usedTimes++;const Vg=_A[q.__cacheKey];Vg!==void 0&&(_A[q.__cacheKey].usedTimes--,Vg.usedTimes===0&&eA(P)),q.__cacheKey=og,q.__webglTexture=_A[og].texture}return YA}function Ig(q,P,YA){let Qg=o.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Qg=o.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Qg=o.TEXTURE_3D);const _A=QI(q,P),og=P.source;i.bindTexture(Qg,q.__webglTexture,o.TEXTURE0+YA);const Vg=E.get(og);if(og.version!==Vg.__version||_A===!0){i.activeTexture(o.TEXTURE0+YA);const Zg=LI.getPrimaries(LI.workingColorSpace),Pg=P.colorSpace===RC?null:LI.getPrimaries(P.colorSpace),eI=P.colorSpace===RC||Zg===Pg?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,eI);let kg=Z(P.image,!1,s.maxTextureSize);kg=vt(P,kg);const Fg=c.convert(P.format,P.colorSpace),Nt=c.convert(P.type);let Yt=rA(P.internalFormat,Fg,Nt,P.colorSpace,P.isVideoTexture);xt(Qg,P);let It;const oI=P.mipmaps,Ht=P.isVideoTexture!==!0,hI=Vg.__version===void 0||_A===!0,UA=og.dataReady,zg=TA(P,kg);if(P.isDepthTexture)Yt=tA(P.format===GQ,P.type),hI&&(Ht?i.texStorage2D(o.TEXTURE_2D,1,Yt,kg.width,kg.height):i.texImage2D(o.TEXTURE_2D,0,Yt,kg.width,kg.height,0,Fg,Nt,null));else if(P.isDataTexture)if(oI.length>0){Ht&&hI&&i.texStorage2D(o.TEXTURE_2D,zg,Yt,oI[0].width,oI[0].height);for(let gg=0,cg=oI.length;gg<cg;gg++)It=oI[gg],Ht?UA&&i.texSubImage2D(o.TEXTURE_2D,gg,0,0,It.width,It.height,Fg,Nt,It.data):i.texImage2D(o.TEXTURE_2D,gg,Yt,It.width,It.height,0,Fg,Nt,It.data);P.generateMipmaps=!1}else Ht?(hI&&i.texStorage2D(o.TEXTURE_2D,zg,Yt,kg.width,kg.height),UA&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kg.width,kg.height,Fg,Nt,kg.data)):i.texImage2D(o.TEXTURE_2D,0,Yt,kg.width,kg.height,0,Fg,Nt,kg.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ht&&hI&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zg,Yt,oI[0].width,oI[0].height,kg.depth);for(let gg=0,cg=oI.length;gg<cg;gg++)if(It=oI[gg],P.format!==eB)if(Fg!==null)if(Ht){if(UA)if(P.layerUpdates.size>0){const At=Nd(It.width,It.height,P.format,P.type);for(const Hg of P.layerUpdates){const zt=It.data.subarray(Hg*At/It.data.BYTES_PER_ELEMENT,(Hg+1)*At/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,gg,0,0,Hg,It.width,It.height,1,Fg,zt)}P.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,gg,0,0,0,It.width,It.height,kg.depth,Fg,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,gg,Yt,It.width,It.height,kg.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?UA&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,gg,0,0,0,It.width,It.height,kg.depth,Fg,Nt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,gg,Yt,It.width,It.height,kg.depth,0,Fg,Nt,It.data)}else{Ht&&hI&&i.texStorage2D(o.TEXTURE_2D,zg,Yt,oI[0].width,oI[0].height);for(let gg=0,cg=oI.length;gg<cg;gg++)It=oI[gg],P.format!==eB?Fg!==null?Ht?UA&&i.compressedTexSubImage2D(o.TEXTURE_2D,gg,0,0,It.width,It.height,Fg,It.data):i.compressedTexImage2D(o.TEXTURE_2D,gg,Yt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?UA&&i.texSubImage2D(o.TEXTURE_2D,gg,0,0,It.width,It.height,Fg,Nt,It.data):i.texImage2D(o.TEXTURE_2D,gg,Yt,It.width,It.height,0,Fg,Nt,It.data)}else if(P.isDataArrayTexture)if(Ht){if(hI&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zg,Yt,kg.width,kg.height,kg.depth),UA)if(P.layerUpdates.size>0){const gg=Nd(kg.width,kg.height,P.format,P.type);for(const cg of P.layerUpdates){const At=kg.data.subarray(cg*gg/kg.data.BYTES_PER_ELEMENT,(cg+1)*gg/kg.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,cg,kg.width,kg.height,1,Fg,Nt,At)}P.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,kg.width,kg.height,kg.depth,Fg,Nt,kg.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,kg.width,kg.height,kg.depth,0,Fg,Nt,kg.data);else if(P.isData3DTexture)Ht?(hI&&i.texStorage3D(o.TEXTURE_3D,zg,Yt,kg.width,kg.height,kg.depth),UA&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,kg.width,kg.height,kg.depth,Fg,Nt,kg.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,kg.width,kg.height,kg.depth,0,Fg,Nt,kg.data);else if(P.isFramebufferTexture){if(hI)if(Ht)i.texStorage2D(o.TEXTURE_2D,zg,Yt,kg.width,kg.height);else{let gg=kg.width,cg=kg.height;for(let At=0;At<zg;At++)i.texImage2D(o.TEXTURE_2D,At,Yt,gg,cg,0,Fg,Nt,null),gg>>=1,cg>>=1}}else if(oI.length>0){if(Ht&&hI){const gg=gt(oI[0]);i.texStorage2D(o.TEXTURE_2D,zg,Yt,gg.width,gg.height)}for(let gg=0,cg=oI.length;gg<cg;gg++)It=oI[gg],Ht?UA&&i.texSubImage2D(o.TEXTURE_2D,gg,0,0,Fg,Nt,It):i.texImage2D(o.TEXTURE_2D,gg,Yt,Fg,Nt,It);P.generateMipmaps=!1}else if(Ht){if(hI){const gg=gt(kg);i.texStorage2D(o.TEXTURE_2D,zg,Yt,gg.width,gg.height)}UA&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Fg,Nt,kg)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Fg,Nt,kg);L(P)&&F(Qg),Vg.__version=og.version,P.onUpdate&&P.onUpdate(P)}q.__version=P.version}function mg(q,P,YA){if(P.image.length!==6)return;const Qg=QI(q,P),_A=P.source;i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+YA);const og=E.get(_A);if(_A.version!==og.__version||Qg===!0){i.activeTexture(o.TEXTURE0+YA);const Vg=LI.getPrimaries(LI.workingColorSpace),Zg=P.colorSpace===RC?null:LI.getPrimaries(P.colorSpace),Pg=P.colorSpace===RC||Vg===Zg?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pg);const eI=P.isCompressedTexture||P.image[0].isCompressedTexture,kg=P.image[0]&&P.image[0].isDataTexture,Fg=[];for(let cg=0;cg<6;cg++)!eI&&!kg?Fg[cg]=Z(P.image[cg],!0,s.maxCubemapSize):Fg[cg]=kg?P.image[cg].image:P.image[cg],Fg[cg]=vt(P,Fg[cg]);const Nt=Fg[0],Yt=c.convert(P.format,P.colorSpace),It=c.convert(P.type),oI=rA(P.internalFormat,Yt,It,P.colorSpace),Ht=P.isVideoTexture!==!0,hI=og.__version===void 0||Qg===!0,UA=_A.dataReady;let zg=TA(P,Nt);xt(o.TEXTURE_CUBE_MAP,P);let gg;if(eI){Ht&&hI&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zg,oI,Nt.width,Nt.height);for(let cg=0;cg<6;cg++){gg=Fg[cg].mipmaps;for(let At=0;At<gg.length;At++){const Hg=gg[At];P.format!==eB?Yt!==null?Ht?UA&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At,0,0,Hg.width,Hg.height,Yt,Hg.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At,oI,Hg.width,Hg.height,0,Hg.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?UA&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At,0,0,Hg.width,Hg.height,Yt,It,Hg.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At,oI,Hg.width,Hg.height,0,Yt,It,Hg.data)}}}else{if(gg=P.mipmaps,Ht&&hI){gg.length>0&&zg++;const cg=gt(Fg[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zg,oI,cg.width,cg.height)}for(let cg=0;cg<6;cg++)if(kg){Ht?UA&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,0,0,0,Fg[cg].width,Fg[cg].height,Yt,It,Fg[cg].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,0,oI,Fg[cg].width,Fg[cg].height,0,Yt,It,Fg[cg].data);for(let At=0;At<gg.length;At++){const zt=gg[At].image[cg].image;Ht?UA&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At+1,0,0,zt.width,zt.height,Yt,It,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At+1,oI,zt.width,zt.height,0,Yt,It,zt.data)}}else{Ht?UA&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,0,0,0,Yt,It,Fg[cg]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,0,oI,Yt,It,Fg[cg]);for(let At=0;At<gg.length;At++){const Hg=gg[At];Ht?UA&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At+1,0,0,Yt,It,Hg.image[cg]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+cg,At+1,oI,Yt,It,Hg.image[cg])}}}L(P)&&F(o.TEXTURE_CUBE_MAP),og.__version=_A.version,P.onUpdate&&P.onUpdate(P)}q.__version=P.version}function at(q,P,YA,Qg,_A,og){const Vg=c.convert(YA.format,YA.colorSpace),Zg=c.convert(YA.type),Pg=rA(YA.internalFormat,Vg,Zg,YA.colorSpace),eI=E.get(P),kg=E.get(YA);if(kg.__renderTarget=P,!eI.__hasExternalTextures){const Fg=Math.max(1,P.width>>og),Nt=Math.max(1,P.height>>og);_A===o.TEXTURE_3D||_A===o.TEXTURE_2D_ARRAY?i.texImage3D(_A,og,Pg,Fg,Nt,P.depth,0,Vg,Zg,null):i.texImage2D(_A,og,Pg,Fg,Nt,0,Vg,Zg,null)}i.bindFramebuffer(o.FRAMEBUFFER,q),tt(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Qg,_A,kg.__webglTexture,0,Dg(P)):(_A===o.TEXTURE_2D||_A>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_A<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Qg,_A,kg.__webglTexture,og),i.bindFramebuffer(o.FRAMEBUFFER,null)}function dg(q,P,YA){if(o.bindRenderbuffer(o.RENDERBUFFER,q),P.depthBuffer){const Qg=P.depthTexture,_A=Qg&&Qg.isDepthTexture?Qg.type:null,og=tA(P.stencilBuffer,_A),Vg=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zg=Dg(P);tt(P)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zg,og,P.width,P.height):YA?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zg,og,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,og,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vg,o.RENDERBUFFER,q)}else{const Qg=P.textures;for(let _A=0;_A<Qg.length;_A++){const og=Qg[_A],Vg=c.convert(og.format,og.colorSpace),Zg=c.convert(og.type),Pg=rA(og.internalFormat,Vg,Zg,og.colorSpace),eI=Dg(P);YA&&tt(P)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,eI,Pg,P.width,P.height):tt(P)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,eI,Pg,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,Pg,P.width,P.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function dA(q,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,q),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Qg=E.get(P.depthTexture);Qg.__renderTarget=P,(!Qg.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ag(P.depthTexture,0);const _A=Qg.__webglTexture,og=Dg(P);if(P.depthTexture.format===pQ)tt(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_A,0,og):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_A,0);else if(P.depthTexture.format===GQ)tt(P)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_A,0,og):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_A,0);else throw new Error("Unknown depthTexture format")}function oA(q){const P=E.get(q),YA=q.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==q.depthTexture){const Qg=q.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Qg){const _A=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Qg.removeEventListener("dispose",_A)};Qg.addEventListener("dispose",_A),P.__depthDisposeCallback=_A}P.__boundDepthTexture=Qg}if(q.depthTexture&&!P.__autoAllocateDepthBuffer){if(YA)throw new Error("target.depthTexture not supported in Cube render targets");dA(P.__webglFramebuffer,q)}else if(YA){P.__webglDepthbuffer=[];for(let Qg=0;Qg<6;Qg++)if(i.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer[Qg]),P.__webglDepthbuffer[Qg]===void 0)P.__webglDepthbuffer[Qg]=o.createRenderbuffer(),dg(P.__webglDepthbuffer[Qg],q,!1);else{const _A=q.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,og=P.__webglDepthbuffer[Qg];o.bindRenderbuffer(o.RENDERBUFFER,og),o.framebufferRenderbuffer(o.FRAMEBUFFER,_A,o.RENDERBUFFER,og)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=o.createRenderbuffer(),dg(P.__webglDepthbuffer,q,!1);else{const Qg=q.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_A=P.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_A),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qg,o.RENDERBUFFER,_A)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function lA(q,P,YA){const Qg=E.get(q);P!==void 0&&at(Qg.__webglFramebuffer,q,q.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),YA!==void 0&&oA(q)}function XA(q){const P=q.texture,YA=E.get(q),Qg=E.get(P);q.addEventListener("dispose",pA);const _A=q.textures,og=q.isWebGLCubeRenderTarget===!0,Vg=_A.length>1;if(Vg||(Qg.__webglTexture===void 0&&(Qg.__webglTexture=o.createTexture()),Qg.__version=P.version,p.memory.textures++),og){YA.__webglFramebuffer=[];for(let Zg=0;Zg<6;Zg++)if(P.mipmaps&&P.mipmaps.length>0){YA.__webglFramebuffer[Zg]=[];for(let Pg=0;Pg<P.mipmaps.length;Pg++)YA.__webglFramebuffer[Zg][Pg]=o.createFramebuffer()}else YA.__webglFramebuffer[Zg]=o.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){YA.__webglFramebuffer=[];for(let Zg=0;Zg<P.mipmaps.length;Zg++)YA.__webglFramebuffer[Zg]=o.createFramebuffer()}else YA.__webglFramebuffer=o.createFramebuffer();if(Vg)for(let Zg=0,Pg=_A.length;Zg<Pg;Zg++){const eI=E.get(_A[Zg]);eI.__webglTexture===void 0&&(eI.__webglTexture=o.createTexture(),p.memory.textures++)}if(q.samples>0&&tt(q)===!1){YA.__webglMultisampledFramebuffer=o.createFramebuffer(),YA.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,YA.__webglMultisampledFramebuffer);for(let Zg=0;Zg<_A.length;Zg++){const Pg=_A[Zg];YA.__webglColorRenderbuffer[Zg]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,YA.__webglColorRenderbuffer[Zg]);const eI=c.convert(Pg.format,Pg.colorSpace),kg=c.convert(Pg.type),Fg=rA(Pg.internalFormat,eI,kg,Pg.colorSpace,q.isXRRenderTarget===!0),Nt=Dg(q);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,Fg,q.width,q.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zg,o.RENDERBUFFER,YA.__webglColorRenderbuffer[Zg])}o.bindRenderbuffer(o.RENDERBUFFER,null),q.depthBuffer&&(YA.__webglDepthRenderbuffer=o.createRenderbuffer(),dg(YA.__webglDepthRenderbuffer,q,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(og){i.bindTexture(o.TEXTURE_CUBE_MAP,Qg.__webglTexture),xt(o.TEXTURE_CUBE_MAP,P);for(let Zg=0;Zg<6;Zg++)if(P.mipmaps&&P.mipmaps.length>0)for(let Pg=0;Pg<P.mipmaps.length;Pg++)at(YA.__webglFramebuffer[Zg][Pg],q,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Zg,Pg);else at(YA.__webglFramebuffer[Zg],q,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Zg,0);L(P)&&F(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vg){for(let Zg=0,Pg=_A.length;Zg<Pg;Zg++){const eI=_A[Zg],kg=E.get(eI);i.bindTexture(o.TEXTURE_2D,kg.__webglTexture),xt(o.TEXTURE_2D,eI),at(YA.__webglFramebuffer,q,eI,o.COLOR_ATTACHMENT0+Zg,o.TEXTURE_2D,0),L(eI)&&F(o.TEXTURE_2D)}i.unbindTexture()}else{let Zg=o.TEXTURE_2D;if((q.isWebGL3DRenderTarget||q.isWebGLArrayRenderTarget)&&(Zg=q.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Zg,Qg.__webglTexture),xt(Zg,P),P.mipmaps&&P.mipmaps.length>0)for(let Pg=0;Pg<P.mipmaps.length;Pg++)at(YA.__webglFramebuffer[Pg],q,P,o.COLOR_ATTACHMENT0,Zg,Pg);else at(YA.__webglFramebuffer,q,P,o.COLOR_ATTACHMENT0,Zg,0);L(P)&&F(Zg),i.unbindTexture()}q.depthBuffer&&oA(q)}function fA(q){const P=q.textures;for(let YA=0,Qg=P.length;YA<Qg;YA++){const _A=P[YA];if(L(_A)){const og=hA(q),Vg=E.get(_A).__webglTexture;i.bindTexture(og,Vg),F(og),i.unbindTexture()}}}const KA=[],gA=[];function Jg(q){if(q.samples>0){if(tt(q)===!1){const P=q.textures,YA=q.width,Qg=q.height;let _A=o.COLOR_BUFFER_BIT;const og=q.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vg=E.get(q),Zg=P.length>1;if(Zg)for(let Pg=0;Pg<P.length;Pg++)i.bindFramebuffer(o.FRAMEBUFFER,Vg.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pg,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vg.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pg,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vg.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vg.__webglFramebuffer);for(let Pg=0;Pg<P.length;Pg++){if(q.resolveDepthBuffer&&(q.depthBuffer&&(_A|=o.DEPTH_BUFFER_BIT),q.stencilBuffer&&q.resolveStencilBuffer&&(_A|=o.STENCIL_BUFFER_BIT)),Zg){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vg.__webglColorRenderbuffer[Pg]);const eI=E.get(P[Pg]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,eI,0)}o.blitFramebuffer(0,0,YA,Qg,0,0,YA,Qg,_A,o.NEAREST),G===!0&&(KA.length=0,gA.length=0,KA.push(o.COLOR_ATTACHMENT0+Pg),q.depthBuffer&&q.resolveDepthBuffer===!1&&(KA.push(og),gA.push(og),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,gA)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,KA))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Zg)for(let Pg=0;Pg<P.length;Pg++){i.bindFramebuffer(o.FRAMEBUFFER,Vg.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pg,o.RENDERBUFFER,Vg.__webglColorRenderbuffer[Pg]);const eI=E.get(P[Pg]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vg.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pg,o.TEXTURE_2D,eI,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vg.__webglMultisampledFramebuffer)}else if(q.depthBuffer&&q.resolveDepthBuffer===!1&&G){const P=q.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[P])}}}function Dg(q){return Math.min(s.maxSamples,q.samples)}function tt(q){const P=E.get(q);return q.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Og(q){const P=p.render.frame;k.get(q)!==P&&(k.set(q,P),q.update())}function vt(q,P){const YA=q.colorSpace,Qg=q.format,_A=q.type;return q.isCompressedTexture===!0||q.isVideoTexture===!0||YA!==NQ&&YA!==RC&&(LI.getTransfer(YA)===_I?(Qg!==eB||_A!==tC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",YA)),P}function gt(q){return typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement?(N.width=q.naturalWidth||q.width,N.height=q.naturalHeight||q.height):typeof VideoFrame<"u"&&q instanceof VideoFrame?(N.width=q.displayWidth,N.height=q.displayHeight):(N.width=q.width,N.height=q.height),N}this.allocateTextureUnit=Ag,this.resetTextureUnits=tg,this.setTexture2D=ag,this.setTexture2DArray=Bg,this.setTexture3D=fg,this.setTextureCube=ZA,this.rebindTextures=lA,this.setupRenderTarget=XA,this.updateRenderTargetMipmap=fA,this.updateMultisampleRenderTarget=Jg,this.setupDepthRenderbuffer=oA,this.setupFrameBufferTexture=at,this.useMultisampledRTT=tt}function JF(o,t){function i(E,s=RC){let c;const p=LI.getTransfer(s);if(E===tC)return o.UNSIGNED_BYTE;if(E===Ch)return o.UNSIGNED_SHORT_4_4_4_4;if(E===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(E===Yd)return o.UNSIGNED_INT_5_9_9_9_REV;if(E===bd)return o.BYTE;if(E===Kd)return o.SHORT;if(E===vn)return o.UNSIGNED_SHORT;if(E===Bh)return o.INT;if(E===fE)return o.UNSIGNED_INT;if(E===$B)return o.FLOAT;if(E===Tn)return o.HALF_FLOAT;if(E===vd)return o.ALPHA;if(E===Hd)return o.RGB;if(E===eB)return o.RGBA;if(E===Td)return o.LUMINANCE;if(E===qd)return o.LUMINANCE_ALPHA;if(E===pQ)return o.DEPTH_COMPONENT;if(E===GQ)return o.DEPTH_STENCIL;if(E===_d)return o.RED;if(E===Qh)return o.RED_INTEGER;if(E===Wd)return o.RG;if(E===nh)return o.RG_INTEGER;if(E===oh)return o.RGBA_INTEGER;if(E===ys||E===Ms||E===Rs||E===ms)if(p===_I)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(E===ys)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(E===Ms)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(E===Rs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(E===ms)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(E===ys)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(E===Ms)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(E===Rs)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(E===ms)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(E===Nr||E===Ur||E===kr||E===Lr)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(E===Nr)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(E===Ur)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(E===kr)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(E===Lr)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(E===xr||E===Jr||E===br)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(E===xr||E===Jr)return p===_I?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(E===br)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(E===Kr||E===Yr||E===vr||E===Hr||E===Tr||E===qr||E===_r||E===Wr||E===Pr||E===Or||E===Vr||E===Zr||E===Xr||E===zr)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(E===Kr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(E===Yr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(E===vr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(E===Hr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(E===Tr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(E===qr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(E===_r)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(E===Wr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(E===Pr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(E===Or)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(E===Vr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(E===Zr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(E===Xr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(E===zr)return p===_I?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(E===Ss||E===jr||E===$r)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(E===Ss)return p===_I?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(E===jr)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(E===$r)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(E===Pd||E===Ah||E===gh||E===th)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(E===Ss)return c.COMPRESSED_RED_RGTC1_EXT;if(E===Ah)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(E===gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(E===th)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return E===SQ?o.UNSIGNED_INT_24_8:o[E]!==void 0?o[E]:null}return{convert:i}}class bF extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ws extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KF={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new zA,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new zA),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new zA,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new zA),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const E of t.hand.values())this._getHandJoint(i,E)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,E){let s=null,c=null,p=null;const f=this._targetRay,G=this._grip,N=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(N&&t.hand){p=!0;for(const Z of t.hand.values()){const L=i.getJointPose(Z,E),F=this._getHandJoint(N,Z);L!==null&&(F.matrix.fromArray(L.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=L.radius),F.visible=L!==null}const k=N.joints["index-finger-tip"],J=N.joints["thumb-tip"],x=k.position.distanceTo(J.position),Y=.02,z=.005;N.inputState.pinching&&x>Y+z?(N.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!N.inputState.pinching&&x<=Y-z&&(N.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else G!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,E),c!==null&&(G.matrix.fromArray(c.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,c.linearVelocity?(G.hasLinearVelocity=!0,G.linearVelocity.copy(c.linearVelocity)):G.hasLinearVelocity=!1,c.angularVelocity?(G.hasAngularVelocity=!0,G.angularVelocity.copy(c.angularVelocity)):G.hasAngularVelocity=!1));f!==null&&(s=i.getPose(t.targetRaySpace,E),s===null&&c!==null&&(s=c),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(KF)))}return f!==null&&(f.visible=s!==null),G!==null&&(G.visible=c!==null),N!==null&&(N.visible=p!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const E=new ws;E.matrixAutoUpdate=!1,E.visible=!1,t.joints[i.jointName]=E,t.add(E)}return t.joints[i.jointName]}}const YF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vF=`
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

}`;class HF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,E){if(this.texture===null){const s=new hi,c=t.properties.get(s);c.__webglTexture=i.texture,(i.depthNear!=E.depthNear||i.depthFar!=E.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,E=new NC({vertexShader:YF,fragmentShader:vF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new iB(new Ls(20,20),E)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TF extends UQ{constructor(t,i){super();const E=this;let s=null,c=1,p=null,f="local-floor",G=1,N=null,k=null,J=null,x=null,Y=null,z=null;const Z=new HF,L=i.getContextAttributes();let F=null,hA=null;const rA=[],tA=[],TA=new WI;let mA=null;const pA=new bi;pA.viewport=new oe;const MA=new bi;MA.viewport=new oe;const eA=[pA,MA],$=new bF;let RA=null,tg=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Ig){let mg=rA[Ig];return mg===void 0&&(mg=new cr,rA[Ig]=mg),mg.getTargetRaySpace()},this.getControllerGrip=function(Ig){let mg=rA[Ig];return mg===void 0&&(mg=new cr,rA[Ig]=mg),mg.getGripSpace()},this.getHand=function(Ig){let mg=rA[Ig];return mg===void 0&&(mg=new cr,rA[Ig]=mg),mg.getHandSpace()};function Ag(Ig){const mg=tA.indexOf(Ig.inputSource);if(mg===-1)return;const at=rA[mg];at!==void 0&&(at.update(Ig.inputSource,Ig.frame,N||p),at.dispatchEvent({type:Ig.type,data:Ig.inputSource}))}function lg(){s.removeEventListener("select",Ag),s.removeEventListener("selectstart",Ag),s.removeEventListener("selectend",Ag),s.removeEventListener("squeeze",Ag),s.removeEventListener("squeezestart",Ag),s.removeEventListener("squeezeend",Ag),s.removeEventListener("end",lg),s.removeEventListener("inputsourceschange",ag);for(let Ig=0;Ig<rA.length;Ig++){const mg=tA[Ig];mg!==null&&(tA[Ig]=null,rA[Ig].disconnect(mg))}RA=null,tg=null,Z.reset(),t.setRenderTarget(F),Y=null,x=null,J=null,s=null,hA=null,QI.stop(),E.isPresenting=!1,t.setPixelRatio(mA),t.setSize(TA.width,TA.height,!1),E.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Ig){c=Ig,E.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Ig){f=Ig,E.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return N||p},this.setReferenceSpace=function(Ig){N=Ig},this.getBaseLayer=function(){return x!==null?x:Y},this.getBinding=function(){return J},this.getFrame=function(){return z},this.getSession=function(){return s},this.setSession=async function(Ig){if(s=Ig,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",Ag),s.addEventListener("selectstart",Ag),s.addEventListener("selectend",Ag),s.addEventListener("squeeze",Ag),s.addEventListener("squeezestart",Ag),s.addEventListener("squeezeend",Ag),s.addEventListener("end",lg),s.addEventListener("inputsourceschange",ag),L.xrCompatible!==!0&&await i.makeXRCompatible(),mA=t.getPixelRatio(),t.getSize(TA),s.renderState.layers===void 0){const mg={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};Y=new XRWebGLLayer(s,i,mg),s.updateRenderState({baseLayer:Y}),t.setPixelRatio(1),t.setSize(Y.framebufferWidth,Y.framebufferHeight,!1),hA=new wE(Y.framebufferWidth,Y.framebufferHeight,{format:eB,type:tC,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil})}else{let mg=null,at=null,dg=null;L.depth&&(dg=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mg=L.stencil?GQ:pQ,at=L.stencil?SQ:fE);const dA={colorFormat:i.RGBA8,depthFormat:dg,scaleFactor:c};J=new XRWebGLBinding(s,i),x=J.createProjectionLayer(dA),s.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),hA=new wE(x.textureWidth,x.textureHeight,{format:eB,type:tC,depthTexture:new Eu(x.textureWidth,x.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,mg),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}hA.isXRRenderTarget=!0,this.setFoveation(G),N=null,p=await s.requestReferenceSpace(f),QI.setContext(s),QI.start(),E.isPresenting=!0,E.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return Z.getDepthTexture()};function ag(Ig){for(let mg=0;mg<Ig.removed.length;mg++){const at=Ig.removed[mg],dg=tA.indexOf(at);dg>=0&&(tA[dg]=null,rA[dg].disconnect(at))}for(let mg=0;mg<Ig.added.length;mg++){const at=Ig.added[mg];let dg=tA.indexOf(at);if(dg===-1){for(let oA=0;oA<rA.length;oA++)if(oA>=tA.length){tA.push(at),dg=oA;break}else if(tA[oA]===null){tA[oA]=at,dg=oA;break}if(dg===-1)break}const dA=rA[dg];dA&&dA.connect(at)}}const Bg=new zA,fg=new zA;function ZA(Ig,mg,at){Bg.setFromMatrixPosition(mg.matrixWorld),fg.setFromMatrixPosition(at.matrixWorld);const dg=Bg.distanceTo(fg),dA=mg.projectionMatrix.elements,oA=at.projectionMatrix.elements,lA=dA[14]/(dA[10]-1),XA=dA[14]/(dA[10]+1),fA=(dA[9]+1)/dA[5],KA=(dA[9]-1)/dA[5],gA=(dA[8]-1)/dA[0],Jg=(oA[8]+1)/oA[0],Dg=lA*gA,tt=lA*Jg,Og=dg/(-gA+Jg),vt=Og*-gA;if(mg.matrixWorld.decompose(Ig.position,Ig.quaternion,Ig.scale),Ig.translateX(vt),Ig.translateZ(Og),Ig.matrixWorld.compose(Ig.position,Ig.quaternion,Ig.scale),Ig.matrixWorldInverse.copy(Ig.matrixWorld).invert(),dA[10]===-1)Ig.projectionMatrix.copy(mg.projectionMatrix),Ig.projectionMatrixInverse.copy(mg.projectionMatrixInverse);else{const gt=lA+Og,q=XA+Og,P=Dg-vt,YA=tt+(dg-vt),Qg=fA*XA/q*gt,_A=KA*XA/q*gt;Ig.projectionMatrix.makePerspective(P,YA,Qg,_A,gt,q),Ig.projectionMatrixInverse.copy(Ig.projectionMatrix).invert()}}function Wg(Ig,mg){mg===null?Ig.matrixWorld.copy(Ig.matrix):Ig.matrixWorld.multiplyMatrices(mg.matrixWorld,Ig.matrix),Ig.matrixWorldInverse.copy(Ig.matrixWorld).invert()}this.updateCamera=function(Ig){if(s===null)return;let mg=Ig.near,at=Ig.far;Z.texture!==null&&(Z.depthNear>0&&(mg=Z.depthNear),Z.depthFar>0&&(at=Z.depthFar)),$.near=MA.near=pA.near=mg,$.far=MA.far=pA.far=at,(RA!==$.near||tg!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),RA=$.near,tg=$.far),pA.layers.mask=Ig.layers.mask|2,MA.layers.mask=Ig.layers.mask|4,$.layers.mask=pA.layers.mask|MA.layers.mask;const dg=Ig.parent,dA=$.cameras;Wg($,dg);for(let oA=0;oA<dA.length;oA++)Wg(dA[oA],dg);dA.length===2?ZA($,pA,MA):$.projectionMatrix.copy(pA.projectionMatrix),Et(Ig,$,dg)};function Et(Ig,mg,at){at===null?Ig.matrix.copy(mg.matrixWorld):(Ig.matrix.copy(at.matrixWorld),Ig.matrix.invert(),Ig.matrix.multiply(mg.matrixWorld)),Ig.matrix.decompose(Ig.position,Ig.quaternion,Ig.scale),Ig.updateMatrixWorld(!0),Ig.projectionMatrix.copy(mg.projectionMatrix),Ig.projectionMatrixInverse.copy(mg.projectionMatrixInverse),Ig.isPerspectiveCamera&&(Ig.fov=Ih*2*Math.atan(1/Ig.projectionMatrix.elements[5]),Ig.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&Y===null))return G},this.setFoveation=function(Ig){G=Ig,x!==null&&(x.fixedFoveation=Ig),Y!==null&&Y.fixedFoveation!==void 0&&(Y.fixedFoveation=Ig)},this.hasDepthSensing=function(){return Z.texture!==null},this.getDepthSensingMesh=function(){return Z.getMesh($)};let dt=null;function xt(Ig,mg){if(k=mg.getViewerPose(N||p),z=mg,k!==null){const at=k.views;Y!==null&&(t.setRenderTargetFramebuffer(hA,Y.framebuffer),t.setRenderTarget(hA));let dg=!1;at.length!==$.cameras.length&&($.cameras.length=0,dg=!0);for(let oA=0;oA<at.length;oA++){const lA=at[oA];let XA=null;if(Y!==null)XA=Y.getViewport(lA);else{const KA=J.getViewSubImage(x,lA);XA=KA.viewport,oA===0&&(t.setRenderTargetTextures(hA,KA.colorTexture,x.ignoreDepthValues?void 0:KA.depthStencilTexture),t.setRenderTarget(hA))}let fA=eA[oA];fA===void 0&&(fA=new bi,fA.layers.enable(oA),fA.viewport=new oe,eA[oA]=fA),fA.matrix.fromArray(lA.transform.matrix),fA.matrix.decompose(fA.position,fA.quaternion,fA.scale),fA.projectionMatrix.fromArray(lA.projectionMatrix),fA.projectionMatrixInverse.copy(fA.projectionMatrix).invert(),fA.viewport.set(XA.x,XA.y,XA.width,XA.height),oA===0&&($.matrix.copy(fA.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),dg===!0&&$.cameras.push(fA)}const dA=s.enabledFeatures;if(dA&&dA.includes("depth-sensing")){const oA=J.getDepthInformation(at[0]);oA&&oA.isValid&&oA.texture&&Z.init(t,oA,s.renderState)}}for(let at=0;at<rA.length;at++){const dg=tA[at],dA=rA[at];dg!==null&&dA!==void 0&&dA.update(dg,mg,N||p)}dt&&dt(Ig,mg),mg.detectedPlanes&&E.dispatchEvent({type:"planesdetected",data:mg}),z=null}const QI=new Cu;QI.setAnimationLoop(xt),this.setAnimationLoop=function(Ig){dt=Ig},this.dispose=function(){}}}const rE=new IC,qF=new de;function _F(o,t){function i(L,F){L.matrixAutoUpdate===!0&&L.updateMatrix(),F.value.copy(L.matrix)}function E(L,F){F.color.getRGB(L.fogColor.value,Iu(o)),F.isFog?(L.fogNear.value=F.near,L.fogFar.value=F.far):F.isFogExp2&&(L.fogDensity.value=F.density)}function s(L,F,hA,rA,tA){F.isMeshBasicMaterial||F.isMeshLambertMaterial?c(L,F):F.isMeshToonMaterial?(c(L,F),J(L,F)):F.isMeshPhongMaterial?(c(L,F),k(L,F)):F.isMeshStandardMaterial?(c(L,F),x(L,F),F.isMeshPhysicalMaterial&&Y(L,F,tA)):F.isMeshMatcapMaterial?(c(L,F),z(L,F)):F.isMeshDepthMaterial?c(L,F):F.isMeshDistanceMaterial?(c(L,F),Z(L,F)):F.isMeshNormalMaterial?c(L,F):F.isLineBasicMaterial?(p(L,F),F.isLineDashedMaterial&&f(L,F)):F.isPointsMaterial?G(L,F,hA,rA):F.isSpriteMaterial?N(L,F):F.isShadowMaterial?(L.color.value.copy(F.color),L.opacity.value=F.opacity):F.isShaderMaterial&&(F.uniformsNeedUpdate=!1)}function c(L,F){L.opacity.value=F.opacity,F.color&&L.diffuse.value.copy(F.color),F.emissive&&L.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity),F.map&&(L.map.value=F.map,i(F.map,L.mapTransform)),F.alphaMap&&(L.alphaMap.value=F.alphaMap,i(F.alphaMap,L.alphaMapTransform)),F.bumpMap&&(L.bumpMap.value=F.bumpMap,i(F.bumpMap,L.bumpMapTransform),L.bumpScale.value=F.bumpScale,F.side===ri&&(L.bumpScale.value*=-1)),F.normalMap&&(L.normalMap.value=F.normalMap,i(F.normalMap,L.normalMapTransform),L.normalScale.value.copy(F.normalScale),F.side===ri&&L.normalScale.value.negate()),F.displacementMap&&(L.displacementMap.value=F.displacementMap,i(F.displacementMap,L.displacementMapTransform),L.displacementScale.value=F.displacementScale,L.displacementBias.value=F.displacementBias),F.emissiveMap&&(L.emissiveMap.value=F.emissiveMap,i(F.emissiveMap,L.emissiveMapTransform)),F.specularMap&&(L.specularMap.value=F.specularMap,i(F.specularMap,L.specularMapTransform)),F.alphaTest>0&&(L.alphaTest.value=F.alphaTest);const hA=t.get(F),rA=hA.envMap,tA=hA.envMapRotation;rA&&(L.envMap.value=rA,rE.copy(tA),rE.x*=-1,rE.y*=-1,rE.z*=-1,rA.isCubeTexture&&rA.isRenderTargetTexture===!1&&(rE.y*=-1,rE.z*=-1),L.envMapRotation.value.setFromMatrix4(qF.makeRotationFromEuler(rE)),L.flipEnvMap.value=rA.isCubeTexture&&rA.isRenderTargetTexture===!1?-1:1,L.reflectivity.value=F.reflectivity,L.ior.value=F.ior,L.refractionRatio.value=F.refractionRatio),F.lightMap&&(L.lightMap.value=F.lightMap,L.lightMapIntensity.value=F.lightMapIntensity,i(F.lightMap,L.lightMapTransform)),F.aoMap&&(L.aoMap.value=F.aoMap,L.aoMapIntensity.value=F.aoMapIntensity,i(F.aoMap,L.aoMapTransform))}function p(L,F){L.diffuse.value.copy(F.color),L.opacity.value=F.opacity,F.map&&(L.map.value=F.map,i(F.map,L.mapTransform))}function f(L,F){L.dashSize.value=F.dashSize,L.totalSize.value=F.dashSize+F.gapSize,L.scale.value=F.scale}function G(L,F,hA,rA){L.diffuse.value.copy(F.color),L.opacity.value=F.opacity,L.size.value=F.size*hA,L.scale.value=rA*.5,F.map&&(L.map.value=F.map,i(F.map,L.uvTransform)),F.alphaMap&&(L.alphaMap.value=F.alphaMap,i(F.alphaMap,L.alphaMapTransform)),F.alphaTest>0&&(L.alphaTest.value=F.alphaTest)}function N(L,F){L.diffuse.value.copy(F.color),L.opacity.value=F.opacity,L.rotation.value=F.rotation,F.map&&(L.map.value=F.map,i(F.map,L.mapTransform)),F.alphaMap&&(L.alphaMap.value=F.alphaMap,i(F.alphaMap,L.alphaMapTransform)),F.alphaTest>0&&(L.alphaTest.value=F.alphaTest)}function k(L,F){L.specular.value.copy(F.specular),L.shininess.value=Math.max(F.shininess,1e-4)}function J(L,F){F.gradientMap&&(L.gradientMap.value=F.gradientMap)}function x(L,F){L.metalness.value=F.metalness,F.metalnessMap&&(L.metalnessMap.value=F.metalnessMap,i(F.metalnessMap,L.metalnessMapTransform)),L.roughness.value=F.roughness,F.roughnessMap&&(L.roughnessMap.value=F.roughnessMap,i(F.roughnessMap,L.roughnessMapTransform)),F.envMap&&(L.envMapIntensity.value=F.envMapIntensity)}function Y(L,F,hA){L.ior.value=F.ior,F.sheen>0&&(L.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),L.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap&&(L.sheenColorMap.value=F.sheenColorMap,i(F.sheenColorMap,L.sheenColorMapTransform)),F.sheenRoughnessMap&&(L.sheenRoughnessMap.value=F.sheenRoughnessMap,i(F.sheenRoughnessMap,L.sheenRoughnessMapTransform))),F.clearcoat>0&&(L.clearcoat.value=F.clearcoat,L.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap&&(L.clearcoatMap.value=F.clearcoatMap,i(F.clearcoatMap,L.clearcoatMapTransform)),F.clearcoatRoughnessMap&&(L.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,i(F.clearcoatRoughnessMap,L.clearcoatRoughnessMapTransform)),F.clearcoatNormalMap&&(L.clearcoatNormalMap.value=F.clearcoatNormalMap,i(F.clearcoatNormalMap,L.clearcoatNormalMapTransform),L.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===ri&&L.clearcoatNormalScale.value.negate())),F.dispersion>0&&(L.dispersion.value=F.dispersion),F.iridescence>0&&(L.iridescence.value=F.iridescence,L.iridescenceIOR.value=F.iridescenceIOR,L.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],L.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap&&(L.iridescenceMap.value=F.iridescenceMap,i(F.iridescenceMap,L.iridescenceMapTransform)),F.iridescenceThicknessMap&&(L.iridescenceThicknessMap.value=F.iridescenceThicknessMap,i(F.iridescenceThicknessMap,L.iridescenceThicknessMapTransform))),F.transmission>0&&(L.transmission.value=F.transmission,L.transmissionSamplerMap.value=hA.texture,L.transmissionSamplerSize.value.set(hA.width,hA.height),F.transmissionMap&&(L.transmissionMap.value=F.transmissionMap,i(F.transmissionMap,L.transmissionMapTransform)),L.thickness.value=F.thickness,F.thicknessMap&&(L.thicknessMap.value=F.thicknessMap,i(F.thicknessMap,L.thicknessMapTransform)),L.attenuationDistance.value=F.attenuationDistance,L.attenuationColor.value.copy(F.attenuationColor)),F.anisotropy>0&&(L.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap&&(L.anisotropyMap.value=F.anisotropyMap,i(F.anisotropyMap,L.anisotropyMapTransform))),L.specularIntensity.value=F.specularIntensity,L.specularColor.value.copy(F.specularColor),F.specularColorMap&&(L.specularColorMap.value=F.specularColorMap,i(F.specularColorMap,L.specularColorMapTransform)),F.specularIntensityMap&&(L.specularIntensityMap.value=F.specularIntensityMap,i(F.specularIntensityMap,L.specularIntensityMapTransform))}function z(L,F){F.matcap&&(L.matcap.value=F.matcap)}function Z(L,F){const hA=t.get(F).light;L.referencePosition.value.setFromMatrixPosition(hA.matrixWorld),L.nearDistance.value=hA.shadow.camera.near,L.farDistance.value=hA.shadow.camera.far}return{refreshFogUniforms:E,refreshMaterialUniforms:s}}function WF(o,t,i,E){let s={},c={},p=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function G(hA,rA){const tA=rA.program;E.uniformBlockBinding(hA,tA)}function N(hA,rA){let tA=s[hA.id];tA===void 0&&(z(hA),tA=k(hA),s[hA.id]=tA,hA.addEventListener("dispose",L));const TA=rA.program;E.updateUBOMapping(hA,TA);const mA=t.render.frame;c[hA.id]!==mA&&(x(hA),c[hA.id]=mA)}function k(hA){const rA=J();hA.__bindingPointIndex=rA;const tA=o.createBuffer(),TA=hA.__size,mA=hA.usage;return o.bindBuffer(o.UNIFORM_BUFFER,tA),o.bufferData(o.UNIFORM_BUFFER,TA,mA),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,rA,tA),tA}function J(){for(let hA=0;hA<f;hA++)if(p.indexOf(hA)===-1)return p.push(hA),hA;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(hA){const rA=s[hA.id],tA=hA.uniforms,TA=hA.__cache;o.bindBuffer(o.UNIFORM_BUFFER,rA);for(let mA=0,pA=tA.length;mA<pA;mA++){const MA=Array.isArray(tA[mA])?tA[mA]:[tA[mA]];for(let eA=0,$=MA.length;eA<$;eA++){const RA=MA[eA];if(Y(RA,mA,eA,TA)===!0){const tg=RA.__offset,Ag=Array.isArray(RA.value)?RA.value:[RA.value];let lg=0;for(let ag=0;ag<Ag.length;ag++){const Bg=Ag[ag],fg=Z(Bg);typeof Bg=="number"||typeof Bg=="boolean"?(RA.__data[0]=Bg,o.bufferSubData(o.UNIFORM_BUFFER,tg+lg,RA.__data)):Bg.isMatrix3?(RA.__data[0]=Bg.elements[0],RA.__data[1]=Bg.elements[1],RA.__data[2]=Bg.elements[2],RA.__data[3]=0,RA.__data[4]=Bg.elements[3],RA.__data[5]=Bg.elements[4],RA.__data[6]=Bg.elements[5],RA.__data[7]=0,RA.__data[8]=Bg.elements[6],RA.__data[9]=Bg.elements[7],RA.__data[10]=Bg.elements[8],RA.__data[11]=0):(Bg.toArray(RA.__data,lg),lg+=fg.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tg,RA.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function Y(hA,rA,tA,TA){const mA=hA.value,pA=rA+"_"+tA;if(TA[pA]===void 0)return typeof mA=="number"||typeof mA=="boolean"?TA[pA]=mA:TA[pA]=mA.clone(),!0;{const MA=TA[pA];if(typeof mA=="number"||typeof mA=="boolean"){if(MA!==mA)return TA[pA]=mA,!0}else if(MA.equals(mA)===!1)return MA.copy(mA),!0}return!1}function z(hA){const rA=hA.uniforms;let tA=0;const TA=16;for(let pA=0,MA=rA.length;pA<MA;pA++){const eA=Array.isArray(rA[pA])?rA[pA]:[rA[pA]];for(let $=0,RA=eA.length;$<RA;$++){const tg=eA[$],Ag=Array.isArray(tg.value)?tg.value:[tg.value];for(let lg=0,ag=Ag.length;lg<ag;lg++){const Bg=Ag[lg],fg=Z(Bg),ZA=tA%TA,Wg=ZA%fg.boundary,Et=ZA+Wg;tA+=Wg,Et!==0&&TA-Et<fg.storage&&(tA+=TA-Et),tg.__data=new Float32Array(fg.storage/Float32Array.BYTES_PER_ELEMENT),tg.__offset=tA,tA+=fg.storage}}}const mA=tA%TA;return mA>0&&(tA+=TA-mA),hA.__size=tA,hA.__cache={},this}function Z(hA){const rA={boundary:0,storage:0};return typeof hA=="number"||typeof hA=="boolean"?(rA.boundary=4,rA.storage=4):hA.isVector2?(rA.boundary=8,rA.storage=8):hA.isVector3||hA.isColor?(rA.boundary=16,rA.storage=12):hA.isVector4?(rA.boundary=16,rA.storage=16):hA.isMatrix3?(rA.boundary=48,rA.storage=48):hA.isMatrix4?(rA.boundary=64,rA.storage=64):hA.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",hA),rA}function L(hA){const rA=hA.target;rA.removeEventListener("dispose",L);const tA=p.indexOf(rA.__bindingPointIndex);p.splice(tA,1),o.deleteBuffer(s[rA.id]),delete s[rA.id],delete c[rA.id]}function F(){for(const hA in s)o.deleteBuffer(s[hA]);p=[],s={},c={}}return{bind:G,update:N,dispose:F}}class PF{constructor(t={}){const{canvas:i=UM(),context:E=null,depth:s=!0,stencil:c=!1,alpha:p=!1,antialias:f=!1,premultipliedAlpha:G=!0,preserveDrawingBuffer:N=!1,powerPreference:k="default",failIfMajorPerformanceCaveat:J=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let Y;if(E!==null){if(typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");Y=E.getContextAttributes().alpha}else Y=p;const z=new Uint32Array(4),Z=new Int32Array(4);let L=null,F=null;const hA=[],rA=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ji,this.toneMapping=GC,this.toneMappingExposure=1;const tA=this;let TA=!1,mA=0,pA=0,MA=null,eA=-1,$=null;const RA=new oe,tg=new oe;let Ag=null;const lg=new qI(0);let ag=0,Bg=i.width,fg=i.height,ZA=1,Wg=null,Et=null;const dt=new oe(0,0,Bg,fg),xt=new oe(0,0,Bg,fg);let QI=!1;const Ig=new Bu;let mg=!1,at=!1;const dg=new de,dA=new de,oA=new zA,lA=new oe,XA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fA=!1;function KA(){return MA===null?ZA:1}let gA=E;function Jg(X,LA){return i.getContext(X,LA)}try{const X={alpha:!0,depth:s,stencil:c,antialias:f,premultipliedAlpha:G,preserveDrawingBuffer:N,powerPreference:k,failIfMajorPerformanceCaveat:J};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ih}`),i.addEventListener("webglcontextlost",cg,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",Hg,!1),gA===null){const LA="webgl2";if(gA=Jg(LA,X),gA===null)throw Jg(LA)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(X){throw console.error("THREE.WebGLRenderer: "+X.message),X}let Dg,tt,Og,vt,gt,q,P,YA,Qg,_A,og,Vg,Zg,Pg,eI,kg,Fg,Nt,Yt,It,oI,Ht,hI,UA;function zg(){Dg=new zS(gA),Dg.init(),Ht=new JF(gA,Dg),tt=new _S(gA,Dg,t,Ht),Og=new kF(gA,Dg),tt.reverseDepthBuffer&&x&&Og.buffers.depth.setReversed(!0),vt=new AG(gA),gt=new dF,q=new xF(gA,Dg,Og,gt,tt,Ht,vt),P=new PS(tA),YA=new XS(tA),Qg=new BR(gA),hI=new TS(gA,Qg),_A=new jS(gA,Qg,vt,hI),og=new tG(gA,_A,Qg,vt),Yt=new gG(gA,tt,q),kg=new WS(gt),Vg=new lF(tA,P,YA,Dg,tt,hI,kg),Zg=new _F(tA,gt),Pg=new DF,eI=new RF(Dg),Nt=new HS(tA,P,YA,Og,og,Y,G),Fg=new NF(tA,og,tt),UA=new WF(gA,vt,tt,Og),It=new qS(gA,Dg,vt),oI=new $S(gA,Dg,vt),vt.programs=Vg.programs,tA.capabilities=tt,tA.extensions=Dg,tA.properties=gt,tA.renderLists=Pg,tA.shadowMap=Fg,tA.state=Og,tA.info=vt}zg();const gg=new TF(tA,gA);this.xr=gg,this.getContext=function(){return gA},this.getContextAttributes=function(){return gA.getContextAttributes()},this.forceContextLoss=function(){const X=Dg.get("WEBGL_lose_context");X&&X.loseContext()},this.forceContextRestore=function(){const X=Dg.get("WEBGL_lose_context");X&&X.restoreContext()},this.getPixelRatio=function(){return ZA},this.setPixelRatio=function(X){X!==void 0&&(ZA=X,this.setSize(Bg,fg,!1))},this.getSize=function(X){return X.set(Bg,fg)},this.setSize=function(X,LA,PA=!0){if(gg.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Bg=X,fg=LA,i.width=Math.floor(X*ZA),i.height=Math.floor(LA*ZA),PA===!0&&(i.style.width=X+"px",i.style.height=LA+"px"),this.setViewport(0,0,X,LA)},this.getDrawingBufferSize=function(X){return X.set(Bg*ZA,fg*ZA).floor()},this.setDrawingBufferSize=function(X,LA,PA){Bg=X,fg=LA,ZA=PA,i.width=Math.floor(X*PA),i.height=Math.floor(LA*PA),this.setViewport(0,0,X,LA)},this.getCurrentViewport=function(X){return X.copy(RA)},this.getViewport=function(X){return X.copy(dt)},this.setViewport=function(X,LA,PA,WA){X.isVector4?dt.set(X.x,X.y,X.z,X.w):dt.set(X,LA,PA,WA),Og.viewport(RA.copy(dt).multiplyScalar(ZA).round())},this.getScissor=function(X){return X.copy(xt)},this.setScissor=function(X,LA,PA,WA){X.isVector4?xt.set(X.x,X.y,X.z,X.w):xt.set(X,LA,PA,WA),Og.scissor(tg.copy(xt).multiplyScalar(ZA).round())},this.getScissorTest=function(){return QI},this.setScissorTest=function(X){Og.setScissorTest(QI=X)},this.setOpaqueSort=function(X){Wg=X},this.setTransparentSort=function(X){Et=X},this.getClearColor=function(X){return X.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(X=!0,LA=!0,PA=!0){let WA=0;if(X){let xA=!1;if(MA!==null){const bg=MA.texture.format;xA=bg===oh||bg===nh||bg===Qh}if(xA){const bg=MA.texture.type,it=bg===tC||bg===fE||bg===vn||bg===SQ||bg===Ch||bg===Eh,st=Nt.getClearColor(),ut=Nt.getClearAlpha(),Tt=st.r,Vt=st.g,Mt=st.b;it?(z[0]=Tt,z[1]=Vt,z[2]=Mt,z[3]=ut,gA.clearBufferuiv(gA.COLOR,0,z)):(Z[0]=Tt,Z[1]=Vt,Z[2]=Mt,Z[3]=ut,gA.clearBufferiv(gA.COLOR,0,Z))}else WA|=gA.COLOR_BUFFER_BIT}LA&&(WA|=gA.DEPTH_BUFFER_BIT),PA&&(WA|=gA.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gA.clear(WA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",cg,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",Hg,!1),Pg.dispose(),eI.dispose(),gt.dispose(),P.dispose(),YA.dispose(),og.dispose(),hI.dispose(),UA.dispose(),Vg.dispose(),gg.dispose(),gg.removeEventListener("sessionstart",Ki),gg.removeEventListener("sessionend",_e),me.stop()};function cg(X){X.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),TA=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),TA=!1;const X=vt.autoReset,LA=Fg.enabled,PA=Fg.autoUpdate,WA=Fg.needsUpdate,xA=Fg.type;zg(),vt.autoReset=X,Fg.enabled=LA,Fg.autoUpdate=PA,Fg.needsUpdate=WA,Fg.type=xA}function Hg(X){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",X.statusMessage)}function zt(X){const LA=X.target;LA.removeEventListener("dispose",zt),PI(LA)}function PI(X){vI(X),gt.remove(X)}function vI(X){const LA=gt.get(X).programs;LA!==void 0&&(LA.forEach(function(PA){Vg.releaseProgram(PA)}),X.isShaderMaterial&&Vg.releaseShaderCache(X))}this.renderBufferDirect=function(X,LA,PA,WA,xA,bg){LA===null&&(LA=XA);const it=xA.isMesh&&xA.matrixWorld.determinant()<0,st=iC(X,LA,PA,WA,xA);Og.setMaterial(WA,it);let ut=PA.index,Tt=1;if(WA.wireframe===!0){if(ut=_A.getWireframeAttribute(PA),ut===void 0)return;Tt=2}const Vt=PA.drawRange,Mt=PA.attributes.position;let sI=Vt.start*Tt,xI=(Vt.start+Vt.count)*Tt;bg!==null&&(sI=Math.max(sI,bg.start*Tt),xI=Math.min(xI,(bg.start+bg.count)*Tt)),ut!==null?(sI=Math.max(sI,0),xI=Math.min(xI,ut.count)):Mt!=null&&(sI=Math.max(sI,0),xI=Math.min(xI,Mt.count));const Zt=xI-sI;if(Zt<0||Zt===1/0)return;hI.setup(xA,WA,st,PA,ut);let se,EI=It;if(ut!==null&&(se=Qg.get(ut),EI=oI,EI.setIndex(se)),xA.isMesh)WA.wireframe===!0?(Og.setLineWidth(WA.wireframeLinewidth*KA()),EI.setMode(gA.LINES)):EI.setMode(gA.TRIANGLES);else if(xA.isLine){let lt=WA.linewidth;lt===void 0&&(lt=1),Og.setLineWidth(lt*KA()),xA.isLineSegments?EI.setMode(gA.LINES):xA.isLineLoop?EI.setMode(gA.LINE_LOOP):EI.setMode(gA.LINE_STRIP)}else xA.isPoints?EI.setMode(gA.POINTS):xA.isSprite&&EI.setMode(gA.TRIANGLES);if(xA.isBatchedMesh)if(xA._multiDrawInstances!==null)EI.renderMultiDrawInstances(xA._multiDrawStarts,xA._multiDrawCounts,xA._multiDrawCount,xA._multiDrawInstances);else if(Dg.get("WEBGL_multi_draw"))EI.renderMultiDraw(xA._multiDrawStarts,xA._multiDrawCounts,xA._multiDrawCount);else{const lt=xA._multiDrawStarts,je=xA._multiDrawCounts,dI=xA._multiDrawCount,xe=ut?Qg.get(ut).bytesPerElement:1,Gi=gt.get(WA).currentProgram.getUniforms();for(let ue=0;ue<dI;ue++)Gi.setValue(gA,"_gl_DrawID",ue),EI.render(lt[ue]/xe,je[ue])}else if(xA.isInstancedMesh)EI.renderInstances(sI,Zt,xA.count);else if(PA.isInstancedBufferGeometry){const lt=PA._maxInstanceCount!==void 0?PA._maxInstanceCount:1/0,je=Math.min(PA.instanceCount,lt);EI.renderInstances(sI,Zt,je)}else EI.render(sI,Zt)};function pI(X,LA,PA){X.transparent===!0&&X.side===yB&&X.forceSinglePass===!1?(X.side=ri,X.needsUpdate=!0,Ei(X,LA,PA),X.side=FC,X.needsUpdate=!0,Ei(X,LA,PA),X.side=yB):Ei(X,LA,PA)}this.compile=function(X,LA,PA=null){PA===null&&(PA=X),F=eI.get(PA),F.init(LA),rA.push(F),PA.traverseVisible(function(xA){xA.isLight&&xA.layers.test(LA.layers)&&(F.pushLight(xA),xA.castShadow&&F.pushShadow(xA))}),X!==PA&&X.traverseVisible(function(xA){xA.isLight&&xA.layers.test(LA.layers)&&(F.pushLight(xA),xA.castShadow&&F.pushShadow(xA))}),F.setupLights();const WA=new Set;return X.traverse(function(xA){if(!(xA.isMesh||xA.isPoints||xA.isLine||xA.isSprite))return;const bg=xA.material;if(bg)if(Array.isArray(bg))for(let it=0;it<bg.length;it++){const st=bg[it];pI(st,PA,xA),WA.add(st)}else pI(bg,PA,xA),WA.add(bg)}),rA.pop(),F=null,WA},this.compileAsync=function(X,LA,PA=null){const WA=this.compile(X,LA,PA);return new Promise(xA=>{function bg(){if(WA.forEach(function(it){gt.get(it).currentProgram.isReady()&&WA.delete(it)}),WA.size===0){xA(X);return}setTimeout(bg,10)}Dg.get("KHR_parallel_shader_compile")!==null?bg():setTimeout(bg,10)})};let OI=null;function Xe(X){OI&&OI(X)}function Ki(){me.stop()}function _e(){me.start()}const me=new Cu;me.setAnimationLoop(Xe),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(X){OI=X,gg.setAnimationLoop(X),X===null?me.stop():me.start()},gg.addEventListener("sessionstart",Ki),gg.addEventListener("sessionend",_e),this.render=function(X,LA){if(LA!==void 0&&LA.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(TA===!0)return;if(X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),LA.parent===null&&LA.matrixWorldAutoUpdate===!0&&LA.updateMatrixWorld(),gg.enabled===!0&&gg.isPresenting===!0&&(gg.cameraAutoUpdate===!0&&gg.updateCamera(LA),LA=gg.getCamera()),X.isScene===!0&&X.onBeforeRender(tA,X,LA,MA),F=eI.get(X,rA.length),F.init(LA),rA.push(F),dA.multiplyMatrices(LA.projectionMatrix,LA.matrixWorldInverse),Ig.setFromProjectionMatrix(dA),at=this.localClippingEnabled,mg=kg.init(this.clippingPlanes,at),L=Pg.get(X,hA.length),L.init(),hA.push(L),gg.enabled===!0&&gg.isPresenting===!0){const bg=tA.xr.getDepthSensingMesh();bg!==null&&Yi(bg,LA,-1/0,tA.sortObjects)}Yi(X,LA,0,tA.sortObjects),L.finish(),tA.sortObjects===!0&&L.sort(Wg,Et),fA=gg.enabled===!1||gg.isPresenting===!1||gg.hasDepthSensing()===!1,fA&&Nt.addToRenderList(L,X),this.info.render.frame++,mg===!0&&kg.beginShadows();const PA=F.state.shadowsArray;Fg.render(PA,X,LA),mg===!0&&kg.endShadows(),this.info.autoReset===!0&&this.info.reset();const WA=L.opaque,xA=L.transmissive;if(F.setupLights(),LA.isArrayCamera){const bg=LA.cameras;if(xA.length>0)for(let it=0,st=bg.length;it<st;it++){const ut=bg[it];SB(WA,xA,X,ut)}fA&&Nt.render(X);for(let it=0,st=bg.length;it<st;it++){const ut=bg[it];ze(L,X,ut,ut.viewport)}}else xA.length>0&&SB(WA,xA,X,LA),fA&&Nt.render(X),ze(L,X,LA);MA!==null&&(q.updateMultisampleRenderTarget(MA),q.updateRenderTargetMipmap(MA)),X.isScene===!0&&X.onAfterRender(tA,X,LA),hI.resetDefaultState(),eA=-1,$=null,rA.pop(),rA.length>0?(F=rA[rA.length-1],mg===!0&&kg.setGlobalState(tA.clippingPlanes,F.state.camera)):F=null,hA.pop(),hA.length>0?L=hA[hA.length-1]:L=null};function Yi(X,LA,PA,WA){if(X.visible===!1)return;if(X.layers.test(LA.layers)){if(X.isGroup)PA=X.renderOrder;else if(X.isLOD)X.autoUpdate===!0&&X.update(LA);else if(X.isLight)F.pushLight(X),X.castShadow&&F.pushShadow(X);else if(X.isSprite){if(!X.frustumCulled||Ig.intersectsSprite(X)){WA&&lA.setFromMatrixPosition(X.matrixWorld).applyMatrix4(dA);const it=og.update(X),st=X.material;st.visible&&L.push(X,it,st,PA,lA.z,null)}}else if((X.isMesh||X.isLine||X.isPoints)&&(!X.frustumCulled||Ig.intersectsObject(X))){const it=og.update(X),st=X.material;if(WA&&(X.boundingSphere!==void 0?(X.boundingSphere===null&&X.computeBoundingSphere(),lA.copy(X.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),lA.copy(it.boundingSphere.center)),lA.applyMatrix4(X.matrixWorld).applyMatrix4(dA)),Array.isArray(st)){const ut=it.groups;for(let Tt=0,Vt=ut.length;Tt<Vt;Tt++){const Mt=ut[Tt],sI=st[Mt.materialIndex];sI&&sI.visible&&L.push(X,it,sI,PA,lA.z,Mt)}}else st.visible&&L.push(X,it,st,PA,lA.z,null)}}const bg=X.children;for(let it=0,st=bg.length;it<st;it++)Yi(bg[it],LA,PA,WA)}function ze(X,LA,PA,WA){const xA=X.opaque,bg=X.transmissive,it=X.transparent;F.setupLightsView(PA),mg===!0&&kg.setGlobalState(tA.clippingPlanes,PA),WA&&Og.viewport(RA.copy(WA)),xA.length>0&&CB(xA,LA,PA),bg.length>0&&CB(bg,LA,PA),it.length>0&&CB(it,LA,PA),Og.buffers.depth.setTest(!0),Og.buffers.depth.setMask(!0),Og.buffers.color.setMask(!0),Og.setPolygonOffset(!1)}function SB(X,LA,PA,WA){if((PA.isScene===!0?PA.overrideMaterial:null)!==null)return;F.state.transmissionRenderTarget[WA.id]===void 0&&(F.state.transmissionRenderTarget[WA.id]=new wE(1,1,{generateMipmaps:!0,type:Dg.has("EXT_color_buffer_half_float")||Dg.has("EXT_color_buffer_float")?Tn:tC,minFilter:DE,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:LI.workingColorSpace}));const bg=F.state.transmissionRenderTarget[WA.id],it=WA.viewport||RA;bg.setSize(it.z,it.w);const st=tA.getRenderTarget();tA.setRenderTarget(bg),tA.getClearColor(lg),ag=tA.getClearAlpha(),ag<1&&tA.setClearColor(16777215,.5),tA.clear(),fA&&Nt.render(PA);const ut=tA.toneMapping;tA.toneMapping=GC;const Tt=WA.viewport;if(WA.viewport!==void 0&&(WA.viewport=void 0),F.setupLightsView(WA),mg===!0&&kg.setGlobalState(tA.clippingPlanes,WA),CB(X,PA,WA),q.updateMultisampleRenderTarget(bg),q.updateRenderTargetMipmap(bg),Dg.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Mt=0,sI=LA.length;Mt<sI;Mt++){const xI=LA[Mt],Zt=xI.object,se=xI.geometry,EI=xI.material,lt=xI.group;if(EI.side===yB&&Zt.layers.test(WA.layers)){const je=EI.side;EI.side=ri,EI.needsUpdate=!0,eC(Zt,PA,WA,se,EI,lt),EI.side=je,EI.needsUpdate=!0,Vt=!0}}Vt===!0&&(q.updateMultisampleRenderTarget(bg),q.updateRenderTargetMipmap(bg))}tA.setRenderTarget(st),tA.setClearColor(lg,ag),Tt!==void 0&&(WA.viewport=Tt),tA.toneMapping=ut}function CB(X,LA,PA){const WA=LA.isScene===!0?LA.overrideMaterial:null;for(let xA=0,bg=X.length;xA<bg;xA++){const it=X[xA],st=it.object,ut=it.geometry,Tt=WA===null?it.material:WA,Vt=it.group;st.layers.test(PA.layers)&&eC(st,LA,PA,ut,Tt,Vt)}}function eC(X,LA,PA,WA,xA,bg){X.onBeforeRender(tA,LA,PA,WA,xA,bg),X.modelViewMatrix.multiplyMatrices(PA.matrixWorldInverse,X.matrixWorld),X.normalMatrix.getNormalMatrix(X.modelViewMatrix),xA.onBeforeRender(tA,LA,PA,WA,X,bg),xA.transparent===!0&&xA.side===yB&&xA.forceSinglePass===!1?(xA.side=ri,xA.needsUpdate=!0,tA.renderBufferDirect(PA,LA,WA,xA,X,bg),xA.side=FC,xA.needsUpdate=!0,tA.renderBufferDirect(PA,LA,WA,xA,X,bg),xA.side=yB):tA.renderBufferDirect(PA,LA,WA,xA,X,bg),X.onAfterRender(tA,LA,PA,WA,xA,bg)}function Ei(X,LA,PA){LA.isScene!==!0&&(LA=XA);const WA=gt.get(X),xA=F.state.lights,bg=F.state.shadowsArray,it=xA.state.version,st=Vg.getParameters(X,xA.state,bg,LA,PA),ut=Vg.getProgramCacheKey(st);let Tt=WA.programs;WA.environment=X.isMeshStandardMaterial?LA.environment:null,WA.fog=LA.fog,WA.envMap=(X.isMeshStandardMaterial?YA:P).get(X.envMap||WA.environment),WA.envMapRotation=WA.environment!==null&&X.envMap===null?LA.environmentRotation:X.envMapRotation,Tt===void 0&&(X.addEventListener("dispose",zt),Tt=new Map,WA.programs=Tt);let Vt=Tt.get(ut);if(Vt!==void 0){if(WA.currentProgram===Vt&&WA.lightsStateVersion===it)return EB(X,st),Vt}else st.uniforms=Vg.getUniforms(X),X.onBeforeCompile(st,tA),Vt=Vg.acquireProgram(st,ut),Tt.set(ut,Vt),WA.uniforms=st.uniforms;const Mt=WA.uniforms;return(!X.isShaderMaterial&&!X.isRawShaderMaterial||X.clipping===!0)&&(Mt.clippingPlanes=kg.uniform),EB(X,st),WA.needsLights=FB(X),WA.lightsStateVersion=it,WA.needsLights&&(Mt.ambientLightColor.value=xA.state.ambient,Mt.lightProbe.value=xA.state.probe,Mt.directionalLights.value=xA.state.directional,Mt.directionalLightShadows.value=xA.state.directionalShadow,Mt.spotLights.value=xA.state.spot,Mt.spotLightShadows.value=xA.state.spotShadow,Mt.rectAreaLights.value=xA.state.rectArea,Mt.ltc_1.value=xA.state.rectAreaLTC1,Mt.ltc_2.value=xA.state.rectAreaLTC2,Mt.pointLights.value=xA.state.point,Mt.pointLightShadows.value=xA.state.pointShadow,Mt.hemisphereLights.value=xA.state.hemi,Mt.directionalShadowMap.value=xA.state.directionalShadowMap,Mt.directionalShadowMatrix.value=xA.state.directionalShadowMatrix,Mt.spotShadowMap.value=xA.state.spotShadowMap,Mt.spotLightMatrix.value=xA.state.spotLightMatrix,Mt.spotLightMap.value=xA.state.spotLightMap,Mt.pointShadowMap.value=xA.state.pointShadowMap,Mt.pointShadowMatrix.value=xA.state.pointShadowMatrix),WA.currentProgram=Vt,WA.uniformsList=null,Vt}function GB(X){if(X.uniformsList===null){const LA=X.currentProgram.getUniforms();X.uniformsList=Gs.seqWithValue(LA.seq,X.uniforms)}return X.uniformsList}function EB(X,LA){const PA=gt.get(X);PA.outputColorSpace=LA.outputColorSpace,PA.batching=LA.batching,PA.batchingColor=LA.batchingColor,PA.instancing=LA.instancing,PA.instancingColor=LA.instancingColor,PA.instancingMorph=LA.instancingMorph,PA.skinning=LA.skinning,PA.morphTargets=LA.morphTargets,PA.morphNormals=LA.morphNormals,PA.morphColors=LA.morphColors,PA.morphTargetsCount=LA.morphTargetsCount,PA.numClippingPlanes=LA.numClippingPlanes,PA.numIntersection=LA.numClipIntersection,PA.vertexAlphas=LA.vertexAlphas,PA.vertexTangents=LA.vertexTangents,PA.toneMapping=LA.toneMapping}function iC(X,LA,PA,WA,xA){LA.isScene!==!0&&(LA=XA),q.resetTextureUnits();const bg=LA.fog,it=WA.isMeshStandardMaterial?LA.environment:null,st=MA===null?tA.outputColorSpace:MA.isXRRenderTarget===!0?MA.texture.colorSpace:NQ,ut=(WA.isMeshStandardMaterial?YA:P).get(WA.envMap||it),Tt=WA.vertexColors===!0&&!!PA.attributes.color&&PA.attributes.color.itemSize===4,Vt=!!PA.attributes.tangent&&(!!WA.normalMap||WA.anisotropy>0),Mt=!!PA.morphAttributes.position,sI=!!PA.morphAttributes.normal,xI=!!PA.morphAttributes.color;let Zt=GC;WA.toneMapped&&(MA===null||MA.isXRRenderTarget===!0)&&(Zt=tA.toneMapping);const se=PA.morphAttributes.position||PA.morphAttributes.normal||PA.morphAttributes.color,EI=se!==void 0?se.length:0,lt=gt.get(WA),je=F.state.lights;if(mg===!0&&(at===!0||X!==$)){const yA=X===$&&WA.id===eA;kg.setState(WA,X,yA)}let dI=!1;WA.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==je.state.version||lt.outputColorSpace!==st||xA.isBatchedMesh&&lt.batching===!1||!xA.isBatchedMesh&&lt.batching===!0||xA.isBatchedMesh&&lt.batchingColor===!0&&xA.colorTexture===null||xA.isBatchedMesh&&lt.batchingColor===!1&&xA.colorTexture!==null||xA.isInstancedMesh&&lt.instancing===!1||!xA.isInstancedMesh&&lt.instancing===!0||xA.isSkinnedMesh&&lt.skinning===!1||!xA.isSkinnedMesh&&lt.skinning===!0||xA.isInstancedMesh&&lt.instancingColor===!0&&xA.instanceColor===null||xA.isInstancedMesh&&lt.instancingColor===!1&&xA.instanceColor!==null||xA.isInstancedMesh&&lt.instancingMorph===!0&&xA.morphTexture===null||xA.isInstancedMesh&&lt.instancingMorph===!1&&xA.morphTexture!==null||lt.envMap!==ut||WA.fog===!0&&lt.fog!==bg||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==kg.numPlanes||lt.numIntersection!==kg.numIntersection)||lt.vertexAlphas!==Tt||lt.vertexTangents!==Vt||lt.morphTargets!==Mt||lt.morphNormals!==sI||lt.morphColors!==xI||lt.toneMapping!==Zt||lt.morphTargetsCount!==EI)&&(dI=!0):(dI=!0,lt.__version=WA.version);let xe=lt.currentProgram;dI===!0&&(xe=Ei(WA,LA,xA));let Gi=!1,ue=!1,R=!1;const V=xe.getUniforms(),CA=lt.uniforms;if(Og.useProgram(xe.program)&&(Gi=!0,ue=!0,R=!0),WA.id!==eA&&(eA=WA.id,ue=!0),Gi||$!==X){Og.buffers.depth.getReversed()?(dg.copy(X.projectionMatrix),LM(dg),xM(dg),V.setValue(gA,"projectionMatrix",dg)):V.setValue(gA,"projectionMatrix",X.projectionMatrix),V.setValue(gA,"viewMatrix",X.matrixWorldInverse);const JA=V.map.cameraPosition;JA!==void 0&&JA.setValue(gA,oA.setFromMatrixPosition(X.matrixWorld)),tt.logarithmicDepthBuffer&&V.setValue(gA,"logDepthBufFC",2/(Math.log(X.far+1)/Math.LN2)),(WA.isMeshPhongMaterial||WA.isMeshToonMaterial||WA.isMeshLambertMaterial||WA.isMeshBasicMaterial||WA.isMeshStandardMaterial||WA.isShaderMaterial)&&V.setValue(gA,"isOrthographic",X.isOrthographicCamera===!0),$!==X&&($=X,ue=!0,R=!0)}if(xA.isSkinnedMesh){V.setOptional(gA,xA,"bindMatrix"),V.setOptional(gA,xA,"bindMatrixInverse");const yA=xA.skeleton;yA&&(yA.boneTexture===null&&yA.computeBoneTexture(),V.setValue(gA,"boneTexture",yA.boneTexture,q))}xA.isBatchedMesh&&(V.setOptional(gA,xA,"batchingTexture"),V.setValue(gA,"batchingTexture",xA._matricesTexture,q),V.setOptional(gA,xA,"batchingIdTexture"),V.setValue(gA,"batchingIdTexture",xA._indirectTexture,q),V.setOptional(gA,xA,"batchingColorTexture"),xA._colorsTexture!==null&&V.setValue(gA,"batchingColorTexture",xA._colorsTexture,q));const DA=PA.morphAttributes;if((DA.position!==void 0||DA.normal!==void 0||DA.color!==void 0)&&Yt.update(xA,PA,xe),(ue||lt.receiveShadow!==xA.receiveShadow)&&(lt.receiveShadow=xA.receiveShadow,V.setValue(gA,"receiveShadow",xA.receiveShadow)),WA.isMeshGouraudMaterial&&WA.envMap!==null&&(CA.envMap.value=ut,CA.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),WA.isMeshStandardMaterial&&WA.envMap===null&&LA.environment!==null&&(CA.envMapIntensity.value=LA.environmentIntensity),ue&&(V.setValue(gA,"toneMappingExposure",tA.toneMappingExposure),lt.needsLights&&BC(CA,R),bg&&WA.fog===!0&&Zg.refreshFogUniforms(CA,bg),Zg.refreshMaterialUniforms(CA,WA,ZA,fg,F.state.transmissionRenderTarget[X.id]),Gs.upload(gA,GB(lt),CA,q)),WA.isShaderMaterial&&WA.uniformsNeedUpdate===!0&&(Gs.upload(gA,GB(lt),CA,q),WA.uniformsNeedUpdate=!1),WA.isSpriteMaterial&&V.setValue(gA,"center",xA.center),V.setValue(gA,"modelViewMatrix",xA.modelViewMatrix),V.setValue(gA,"normalMatrix",xA.normalMatrix),V.setValue(gA,"modelMatrix",xA.matrixWorld),WA.isShaderMaterial||WA.isRawShaderMaterial){const yA=WA.uniformsGroups;for(let JA=0,FA=yA.length;JA<FA;JA++){const cA=yA[JA];UA.update(cA,xe),UA.bind(cA,xe)}}return xe}function BC(X,LA){X.ambientLightColor.needsUpdate=LA,X.lightProbe.needsUpdate=LA,X.directionalLights.needsUpdate=LA,X.directionalLightShadows.needsUpdate=LA,X.pointLights.needsUpdate=LA,X.pointLightShadows.needsUpdate=LA,X.spotLights.needsUpdate=LA,X.spotLightShadows.needsUpdate=LA,X.rectAreaLights.needsUpdate=LA,X.hemisphereLights.needsUpdate=LA}function FB(X){return X.isMeshLambertMaterial||X.isMeshToonMaterial||X.isMeshPhongMaterial||X.isMeshStandardMaterial||X.isShadowMaterial||X.isShaderMaterial&&X.lights===!0}this.getActiveCubeFace=function(){return mA},this.getActiveMipmapLevel=function(){return pA},this.getRenderTarget=function(){return MA},this.setRenderTargetTextures=function(X,LA,PA){gt.get(X.texture).__webglTexture=LA,gt.get(X.depthTexture).__webglTexture=PA;const WA=gt.get(X);WA.__hasExternalTextures=!0,WA.__autoAllocateDepthBuffer=PA===void 0,WA.__autoAllocateDepthBuffer||Dg.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),WA.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(X,LA){const PA=gt.get(X);PA.__webglFramebuffer=LA,PA.__useDefaultFramebuffer=LA===void 0},this.setRenderTarget=function(X,LA=0,PA=0){MA=X,mA=LA,pA=PA;let WA=!0,xA=null,bg=!1,it=!1;if(X){const ut=gt.get(X);if(ut.__useDefaultFramebuffer!==void 0)Og.bindFramebuffer(gA.FRAMEBUFFER,null),WA=!1;else if(ut.__webglFramebuffer===void 0)q.setupRenderTarget(X);else if(ut.__hasExternalTextures)q.rebindTextures(X,gt.get(X.texture).__webglTexture,gt.get(X.depthTexture).__webglTexture);else if(X.depthBuffer){const Mt=X.depthTexture;if(ut.__boundDepthTexture!==Mt){if(Mt!==null&&gt.has(Mt)&&(X.width!==Mt.image.width||X.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(X)}}const Tt=X.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(it=!0);const Vt=gt.get(X).__webglFramebuffer;X.isWebGLCubeRenderTarget?(Array.isArray(Vt[LA])?xA=Vt[LA][PA]:xA=Vt[LA],bg=!0):X.samples>0&&q.useMultisampledRTT(X)===!1?xA=gt.get(X).__webglMultisampledFramebuffer:Array.isArray(Vt)?xA=Vt[PA]:xA=Vt,RA.copy(X.viewport),tg.copy(X.scissor),Ag=X.scissorTest}else RA.copy(dt).multiplyScalar(ZA).floor(),tg.copy(xt).multiplyScalar(ZA).floor(),Ag=QI;if(Og.bindFramebuffer(gA.FRAMEBUFFER,xA)&&WA&&Og.drawBuffers(X,xA),Og.viewport(RA),Og.scissor(tg),Og.setScissorTest(Ag),bg){const ut=gt.get(X.texture);gA.framebufferTexture2D(gA.FRAMEBUFFER,gA.COLOR_ATTACHMENT0,gA.TEXTURE_CUBE_MAP_POSITIVE_X+LA,ut.__webglTexture,PA)}else if(it){const ut=gt.get(X.texture),Tt=LA||0;gA.framebufferTextureLayer(gA.FRAMEBUFFER,gA.COLOR_ATTACHMENT0,ut.__webglTexture,PA||0,Tt)}eA=-1},this.readRenderTargetPixels=function(X,LA,PA,WA,xA,bg,it){if(!(X&&X.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=gt.get(X).__webglFramebuffer;if(X.isWebGLCubeRenderTarget&&it!==void 0&&(st=st[it]),st){Og.bindFramebuffer(gA.FRAMEBUFFER,st);try{const ut=X.texture,Tt=ut.format,Vt=ut.type;if(!tt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}LA>=0&&LA<=X.width-WA&&PA>=0&&PA<=X.height-xA&&gA.readPixels(LA,PA,WA,xA,Ht.convert(Tt),Ht.convert(Vt),bg)}finally{const ut=MA!==null?gt.get(MA).__webglFramebuffer:null;Og.bindFramebuffer(gA.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(X,LA,PA,WA,xA,bg,it){if(!(X&&X.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=gt.get(X).__webglFramebuffer;if(X.isWebGLCubeRenderTarget&&it!==void 0&&(st=st[it]),st){const ut=X.texture,Tt=ut.format,Vt=ut.type;if(!tt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(LA>=0&&LA<=X.width-WA&&PA>=0&&PA<=X.height-xA){Og.bindFramebuffer(gA.FRAMEBUFFER,st);const Mt=gA.createBuffer();gA.bindBuffer(gA.PIXEL_PACK_BUFFER,Mt),gA.bufferData(gA.PIXEL_PACK_BUFFER,bg.byteLength,gA.STREAM_READ),gA.readPixels(LA,PA,WA,xA,Ht.convert(Tt),Ht.convert(Vt),0);const sI=MA!==null?gt.get(MA).__webglFramebuffer:null;Og.bindFramebuffer(gA.FRAMEBUFFER,sI);const xI=gA.fenceSync(gA.SYNC_GPU_COMMANDS_COMPLETE,0);return gA.flush(),await kM(gA,xI,4),gA.bindBuffer(gA.PIXEL_PACK_BUFFER,Mt),gA.getBufferSubData(gA.PIXEL_PACK_BUFFER,0,bg),gA.deleteBuffer(Mt),gA.deleteSync(xI),bg}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(X,LA=null,PA=0){X.isTexture!==!0&&(Kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),LA=arguments[0]||null,X=arguments[1]);const WA=Math.pow(2,-PA),xA=Math.floor(X.image.width*WA),bg=Math.floor(X.image.height*WA),it=LA!==null?LA.x:0,st=LA!==null?LA.y:0;q.setTexture2D(X,0),gA.copyTexSubImage2D(gA.TEXTURE_2D,PA,0,0,it,st,xA,bg),Og.unbindTexture()},this.copyTextureToTexture=function(X,LA,PA=null,WA=null,xA=0){X.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture function signature has changed."),WA=arguments[0]||null,X=arguments[1],LA=arguments[2],xA=arguments[3]||0,PA=null);let bg,it,st,ut,Tt,Vt,Mt,sI,xI;const Zt=X.isCompressedTexture?X.mipmaps[xA]:X.image;PA!==null?(bg=PA.max.x-PA.min.x,it=PA.max.y-PA.min.y,st=PA.isBox3?PA.max.z-PA.min.z:1,ut=PA.min.x,Tt=PA.min.y,Vt=PA.isBox3?PA.min.z:0):(bg=Zt.width,it=Zt.height,st=Zt.depth||1,ut=0,Tt=0,Vt=0),WA!==null?(Mt=WA.x,sI=WA.y,xI=WA.z):(Mt=0,sI=0,xI=0);const se=Ht.convert(LA.format),EI=Ht.convert(LA.type);let lt;LA.isData3DTexture?(q.setTexture3D(LA,0),lt=gA.TEXTURE_3D):LA.isDataArrayTexture||LA.isCompressedArrayTexture?(q.setTexture2DArray(LA,0),lt=gA.TEXTURE_2D_ARRAY):(q.setTexture2D(LA,0),lt=gA.TEXTURE_2D),gA.pixelStorei(gA.UNPACK_FLIP_Y_WEBGL,LA.flipY),gA.pixelStorei(gA.UNPACK_PREMULTIPLY_ALPHA_WEBGL,LA.premultiplyAlpha),gA.pixelStorei(gA.UNPACK_ALIGNMENT,LA.unpackAlignment);const je=gA.getParameter(gA.UNPACK_ROW_LENGTH),dI=gA.getParameter(gA.UNPACK_IMAGE_HEIGHT),xe=gA.getParameter(gA.UNPACK_SKIP_PIXELS),Gi=gA.getParameter(gA.UNPACK_SKIP_ROWS),ue=gA.getParameter(gA.UNPACK_SKIP_IMAGES);gA.pixelStorei(gA.UNPACK_ROW_LENGTH,Zt.width),gA.pixelStorei(gA.UNPACK_IMAGE_HEIGHT,Zt.height),gA.pixelStorei(gA.UNPACK_SKIP_PIXELS,ut),gA.pixelStorei(gA.UNPACK_SKIP_ROWS,Tt),gA.pixelStorei(gA.UNPACK_SKIP_IMAGES,Vt);const R=X.isDataArrayTexture||X.isData3DTexture,V=LA.isDataArrayTexture||LA.isData3DTexture;if(X.isRenderTargetTexture||X.isDepthTexture){const CA=gt.get(X),DA=gt.get(LA),yA=gt.get(CA.__renderTarget),JA=gt.get(DA.__renderTarget);Og.bindFramebuffer(gA.READ_FRAMEBUFFER,yA.__webglFramebuffer),Og.bindFramebuffer(gA.DRAW_FRAMEBUFFER,JA.__webglFramebuffer);for(let FA=0;FA<st;FA++)R&&gA.framebufferTextureLayer(gA.READ_FRAMEBUFFER,gA.COLOR_ATTACHMENT0,gt.get(X).__webglTexture,xA,Vt+FA),X.isDepthTexture?(V&&gA.framebufferTextureLayer(gA.DRAW_FRAMEBUFFER,gA.COLOR_ATTACHMENT0,gt.get(LA).__webglTexture,xA,xI+FA),gA.blitFramebuffer(ut,Tt,bg,it,Mt,sI,bg,it,gA.DEPTH_BUFFER_BIT,gA.NEAREST)):V?gA.copyTexSubImage3D(lt,xA,Mt,sI,xI+FA,ut,Tt,bg,it):gA.copyTexSubImage2D(lt,xA,Mt,sI,xI+FA,ut,Tt,bg,it);Og.bindFramebuffer(gA.READ_FRAMEBUFFER,null),Og.bindFramebuffer(gA.DRAW_FRAMEBUFFER,null)}else V?X.isDataTexture||X.isData3DTexture?gA.texSubImage3D(lt,xA,Mt,sI,xI,bg,it,st,se,EI,Zt.data):LA.isCompressedArrayTexture?gA.compressedTexSubImage3D(lt,xA,Mt,sI,xI,bg,it,st,se,Zt.data):gA.texSubImage3D(lt,xA,Mt,sI,xI,bg,it,st,se,EI,Zt):X.isDataTexture?gA.texSubImage2D(gA.TEXTURE_2D,xA,Mt,sI,bg,it,se,EI,Zt.data):X.isCompressedTexture?gA.compressedTexSubImage2D(gA.TEXTURE_2D,xA,Mt,sI,Zt.width,Zt.height,se,Zt.data):gA.texSubImage2D(gA.TEXTURE_2D,xA,Mt,sI,bg,it,se,EI,Zt);gA.pixelStorei(gA.UNPACK_ROW_LENGTH,je),gA.pixelStorei(gA.UNPACK_IMAGE_HEIGHT,dI),gA.pixelStorei(gA.UNPACK_SKIP_PIXELS,xe),gA.pixelStorei(gA.UNPACK_SKIP_ROWS,Gi),gA.pixelStorei(gA.UNPACK_SKIP_IMAGES,ue),xA===0&&LA.generateMipmaps&&gA.generateMipmap(lt),Og.unbindTexture()},this.copyTextureToTexture3D=function(X,LA,PA=null,WA=null,xA=0){return X.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),PA=arguments[0]||null,WA=arguments[1]||null,X=arguments[2],LA=arguments[3],xA=arguments[4]||0),Kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(X,LA,PA,WA,xA)},this.initRenderTarget=function(X){gt.get(X).__webglFramebuffer===void 0&&q.setupRenderTarget(X)},this.initTexture=function(X){X.isCubeTexture?q.setTextureCube(X,0):X.isData3DTexture?q.setTexture3D(X,0):X.isDataArrayTexture||X.isCompressedArrayTexture?q.setTexture2DArray(X,0):q.setTexture2D(X,0),Og.unbindTexture()},this.resetState=function(){mA=0,pA=0,MA=null,Og.reset(),hI.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return AC}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=LI._getDrawingBufferColorSpace(t),i.unpackColorSpace=LI._getUnpackColorSpace()}}class OF extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new IC,this.environmentIntensity=1,this.environmentRotation=new IC,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class rh extends UC{constructor(t=1,i=.4,E=64,s=8,c=2,p=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:E,radialSegments:s,p:c,q:p},E=Math.floor(E),s=Math.floor(s);const f=[],G=[],N=[],k=[],J=new zA,x=new zA,Y=new zA,z=new zA,Z=new zA,L=new zA,F=new zA;for(let rA=0;rA<=E;++rA){const tA=rA/E*c*Math.PI*2;hA(tA,c,p,t,Y),hA(tA+.01,c,p,t,z),L.subVectors(z,Y),F.addVectors(z,Y),Z.crossVectors(L,F),F.crossVectors(Z,L),Z.normalize(),F.normalize();for(let TA=0;TA<=s;++TA){const mA=TA/s*Math.PI*2,pA=-i*Math.cos(mA),MA=i*Math.sin(mA);J.x=Y.x+(pA*F.x+MA*Z.x),J.y=Y.y+(pA*F.y+MA*Z.y),J.z=Y.z+(pA*F.z+MA*Z.z),G.push(J.x,J.y,J.z),x.subVectors(J,Y).normalize(),N.push(x.x,x.y,x.z),k.push(rA/E),k.push(TA/s)}}for(let rA=1;rA<=E;rA++)for(let tA=1;tA<=s;tA++){const TA=(s+1)*(rA-1)+(tA-1),mA=(s+1)*rA+(tA-1),pA=(s+1)*rA+tA,MA=(s+1)*(rA-1)+tA;f.push(TA,mA,MA),f.push(mA,pA,MA)}this.setIndex(f),this.setAttribute("position",new mB(G,3)),this.setAttribute("normal",new mB(N,3)),this.setAttribute("uv",new mB(k,2));function hA(rA,tA,TA,mA,pA){const MA=Math.cos(rA),eA=Math.sin(rA),$=TA/tA*rA,RA=Math.cos($);pA.x=mA*(2+RA)*.5*MA,pA.y=mA*(2+RA)*eA*.5,pA.z=mA*Math.sin($)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class au extends Pn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new WI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);var VF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ru={exports:{}},H={};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ud;function ZF(){if(Ud)return H;Ud=1;const o="150",t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E=0,s=1,c=2,p=3,f=0,G=1,N=2,k=3,J=0,x=1,Y=2,z=2,Z=0,L=1,F=2,hA=3,rA=4,tA=5,TA=100,mA=101,pA=102,MA=103,eA=104,$=200,RA=201,tg=202,Ag=203,lg=204,ag=205,Bg=206,fg=207,ZA=208,Wg=209,Et=210,dt=0,xt=1,QI=2,Ig=3,mg=4,at=5,dg=6,dA=7,oA=0,lA=1,XA=2,fA=0,KA=1,gA=2,Jg=3,Dg=4,tt=5,Og=300,vt=301,gt=302,q=303,P=304,YA=306,Qg=1e3,_A=1001,og=1002,Vg=1003,Zg=1004,Pg=1004,eI=1005,kg=1005,Fg=1006,Nt=1007,Yt=1007,It=1008,oI=1008,Ht=1009,hI=1010,UA=1011,zg=1012,gg=1013,cg=1014,At=1015,Hg=1016,zt=1017,PI=1018,vI=1020,pI=1021,OI=1023,Xe=1024,Ki=1025,_e=1026,me=1027,Yi=1028,ze=1029,SB=1030,CB=1031,eC=1033,Ei=33776,GB=33777,EB=33778,iC=33779,BC=35840,FB=35841,X=35842,LA=35843,PA=36196,WA=37492,xA=37496,bg=37808,it=37809,st=37810,ut=37811,Tt=37812,Vt=37813,Mt=37814,sI=37815,xI=37816,Zt=37817,se=37818,EI=37819,lt=37820,je=37821,dI=36492,xe=36283,Gi=36284,ue=36285,R=36286,V=2200,CA=2201,DA=2202,yA=2300,JA=2301,FA=2302,cA=2400,QA=2401,NA=2402,kA=2500,Tg=2501,Ct=0,Gg=1,jg=2,Rt=3e3,ft=3001,yI=3200,XI=3201,Ee=0,Je=1,QB="",HI="srgb",Qi="srgb-linear",$I="display-p3",ae=0,be=7680,NB=7681,St=7682,MI=7683,On=34055,JQ=34056,Vn=5386,CC=512,pE=513,yE=514,ME=515,Zn=516,Xn=517,zn=518,bQ=519,EC=35044,jn=35048,UB=35040,LC=35045,KQ=35049,RE=35041,kB=35046,$e=35050,YQ=35042,uI="100",Ie="300 es",xC=1035;class ci{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const I=this._listeners;I[A]===void 0&&(I[A]=[]),I[A].indexOf(g)===-1&&I[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const I=this._listeners;return I[A]!==void 0&&I[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const e=this._listeners[A];if(e!==void 0){const B=e.indexOf(g);B!==-1&&e.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const e=I.slice(0);for(let B=0,Q=e.length;B<Q;B++)e[B].call(this,A);A.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vQ=1234567;const LB=Math.PI/180,xB=180/Math.PI;function Ke(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,g=Math.random()*4294967295|0,I=Math.random()*4294967295|0;return(De[C&255]+De[C>>8&255]+De[C>>16&255]+De[C>>24&255]+"-"+De[A&255]+De[A>>8&255]+"-"+De[A>>16&15|64]+De[A>>24&255]+"-"+De[g&63|128]+De[g>>8&255]+"-"+De[g>>16&255]+De[g>>24&255]+De[I&255]+De[I>>8&255]+De[I>>16&255]+De[I>>24&255]).toLowerCase()}function Ae(C,A,g){return Math.max(A,Math.min(g,C))}function RI(C,A){return(C%A+A)%A}function vi(C,A,g,I,e){return I+(C-A)*(e-I)/(g-A)}function mE(C,A,g){return C!==A?(g-C)/(A-C):0}function li(C,A,g){return(1-g)*C+g*A}function $n(C,A,g,I){return li(C,A,1-Math.exp(-g*I))}function iI(C,A=1){return A-Math.abs(RI(C,A*2)-A)}function K(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A),C*C*(3-2*C))}function ee(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A),C*C*C*(C*(C*6-15)+10))}function SE(C,A){return C+Math.floor(Math.random()*(A-C+1))}function Ao(C,A){return C+Math.random()*(A-C)}function JC(C){return C*(.5-Math.random())}function QC(C){C!==void 0&&(vQ=C);let A=vQ+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function JB(C){return C*LB}function GE(C){return C*xB}function bC(C){return(C&C-1)===0&&C!==0}function FE(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function NE(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function go(C,A,g,I,e){const B=Math.cos,Q=Math.sin,n=B(g/2),a=Q(g/2),h=B((A+I)/2),d=Q((A+I)/2),D=B((A-I)/2),u=Q((A-I)/2),y=B((I-A)/2),S=Q((I-A)/2);switch(e){case"XYX":C.set(n*d,a*D,a*u,n*h);break;case"YZY":C.set(a*u,n*d,a*D,n*h);break;case"ZXZ":C.set(a*D,a*u,n*d,n*h);break;case"XZX":C.set(n*d,a*S,a*y,n*h);break;case"YXY":C.set(a*y,n*d,a*S,n*h);break;case"ZYZ":C.set(a*S,a*y,n*d,n*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}}function ni(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function mI(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}const HQ={DEG2RAD:LB,RAD2DEG:xB,generateUUID:Ke,clamp:Ae,euclideanModulo:RI,mapLinear:vi,inverseLerp:mE,lerp:li,damp:$n,pingpong:iI,smoothstep:K,smootherstep:ee,randInt:SE,randFloat:Ao,randFloatSpread:JC,seededRandom:QC,degToRad:JB,radToDeg:GE,isPowerOfTwo:bC,ceilPowerOfTwo:FE,floorPowerOfTwo:NE,setQuaternionFromProperEuler:go,normalize:mI,denormalize:ni};class yg{constructor(A=0,g=0){yg.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,I=this.y,e=A.elements;return this.x=e[0]*g+e[3]*I+e[6],this.y=e[1]*g+e[4]*I+e[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y;return g*g+I*I}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const I=Math.cos(g),e=Math.sin(g),B=this.x-A.x,Q=this.y-A.y;return this.x=B*I-Q*e+A.x,this.y=B*e+Q*I+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class GI{constructor(){GI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,g,I,e,B,Q,n,a,h){const d=this.elements;return d[0]=A,d[1]=e,d[2]=n,d[3]=g,d[4]=B,d[5]=a,d[6]=I,d[7]=Q,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],this}extractBasis(A,g,I){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),I.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,e=g.elements,B=this.elements,Q=I[0],n=I[3],a=I[6],h=I[1],d=I[4],D=I[7],u=I[2],y=I[5],S=I[8],M=e[0],m=e[3],v=e[6],W=e[1],b=e[4],T=e[7],IA=e[2],nA=e[5],wA=e[8];return B[0]=Q*M+n*W+a*IA,B[3]=Q*m+n*b+a*nA,B[6]=Q*v+n*T+a*wA,B[1]=h*M+d*W+D*IA,B[4]=h*m+d*b+D*nA,B[7]=h*v+d*T+D*wA,B[2]=u*M+y*W+S*IA,B[5]=u*m+y*b+S*nA,B[8]=u*v+y*T+S*wA,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],Q=A[4],n=A[5],a=A[6],h=A[7],d=A[8];return g*Q*d-g*n*h-I*B*d+I*n*a+e*B*h-e*Q*a}invert(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],Q=A[4],n=A[5],a=A[6],h=A[7],d=A[8],D=d*Q-n*h,u=n*a-d*B,y=h*B-Q*a,S=g*D+I*u+e*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return A[0]=D*M,A[1]=(e*h-d*I)*M,A[2]=(n*I-e*Q)*M,A[3]=u*M,A[4]=(d*g-e*a)*M,A[5]=(e*B-n*g)*M,A[6]=y*M,A[7]=(I*a-h*g)*M,A[8]=(Q*g-I*B)*M,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,I,e,B,Q,n){const a=Math.cos(B),h=Math.sin(B);return this.set(I*a,I*h,-I*(a*Q+h*n)+Q+A,-e*h,e*a,-e*(-h*Q+a*n)+n+g,0,0,1),this}scale(A,g){return this.premultiply(nB.makeScale(A,g)),this}rotate(A){return this.premultiply(nB.makeRotation(-A)),this}translate(A,g){return this.premultiply(nB.makeTranslation(A,g)),this}makeTranslation(A,g){return this.set(1,0,A,0,1,g,0,0,1),this}makeRotation(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,-I,0,I,g,0,0,0,1),this}makeScale(A,g){return this.set(A,0,0,0,g,0,0,0,1),this}equals(A){const g=this.elements,I=A.elements;for(let e=0;e<9;e++)if(g[e]!==I[e])return!1;return!0}fromArray(A,g=0){for(let I=0;I<9;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const nB=new GI;function SI(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}const Hi={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function oB(C,A){return new Hi[C](A)}function bB(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}class Ye{constructor(A=0,g=0,I=0,e=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=I,this._w=e}static slerpFlat(A,g,I,e,B,Q,n){let a=I[e+0],h=I[e+1],d=I[e+2],D=I[e+3];const u=B[Q+0],y=B[Q+1],S=B[Q+2],M=B[Q+3];if(n===0){A[g+0]=a,A[g+1]=h,A[g+2]=d,A[g+3]=D;return}if(n===1){A[g+0]=u,A[g+1]=y,A[g+2]=S,A[g+3]=M;return}if(D!==M||a!==u||h!==y||d!==S){let m=1-n;const v=a*u+h*y+d*S+D*M,W=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const IA=Math.sqrt(b),nA=Math.atan2(IA,v*W);m=Math.sin(m*nA)/IA,n=Math.sin(n*nA)/IA}const T=n*W;if(a=a*m+u*T,h=h*m+y*T,d=d*m+S*T,D=D*m+M*T,m===1-n){const IA=1/Math.sqrt(a*a+h*h+d*d+D*D);a*=IA,h*=IA,d*=IA,D*=IA}}A[g]=a,A[g+1]=h,A[g+2]=d,A[g+3]=D}static multiplyQuaternionsFlat(A,g,I,e,B,Q){const n=I[e],a=I[e+1],h=I[e+2],d=I[e+3],D=B[Q],u=B[Q+1],y=B[Q+2],S=B[Q+3];return A[g]=n*S+d*D+a*y-h*u,A[g+1]=a*S+d*u+h*D-n*y,A[g+2]=h*S+d*y+n*u-a*D,A[g+3]=d*S-n*D-a*u-h*y,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,I,e){return this._x=A,this._y=g,this._z=I,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g){const I=A._x,e=A._y,B=A._z,Q=A._order,n=Math.cos,a=Math.sin,h=n(I/2),d=n(e/2),D=n(B/2),u=a(I/2),y=a(e/2),S=a(B/2);switch(Q){case"XYZ":this._x=u*d*D+h*y*S,this._y=h*y*D-u*d*S,this._z=h*d*S+u*y*D,this._w=h*d*D-u*y*S;break;case"YXZ":this._x=u*d*D+h*y*S,this._y=h*y*D-u*d*S,this._z=h*d*S-u*y*D,this._w=h*d*D+u*y*S;break;case"ZXY":this._x=u*d*D-h*y*S,this._y=h*y*D+u*d*S,this._z=h*d*S+u*y*D,this._w=h*d*D-u*y*S;break;case"ZYX":this._x=u*d*D-h*y*S,this._y=h*y*D+u*d*S,this._z=h*d*S-u*y*D,this._w=h*d*D+u*y*S;break;case"YZX":this._x=u*d*D+h*y*S,this._y=h*y*D+u*d*S,this._z=h*d*S-u*y*D,this._w=h*d*D-u*y*S;break;case"XZY":this._x=u*d*D-h*y*S,this._y=h*y*D-u*d*S,this._z=h*d*S+u*y*D,this._w=h*d*D+u*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const I=g/2,e=Math.sin(I);return this._x=A.x*e,this._y=A.y*e,this._z=A.z*e,this._w=Math.cos(I),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,I=g[0],e=g[4],B=g[8],Q=g[1],n=g[5],a=g[9],h=g[2],d=g[6],D=g[10],u=I+n+D;if(u>0){const y=.5/Math.sqrt(u+1);this._w=.25/y,this._x=(d-a)*y,this._y=(B-h)*y,this._z=(Q-e)*y}else if(I>n&&I>D){const y=2*Math.sqrt(1+I-n-D);this._w=(d-a)/y,this._x=.25*y,this._y=(e+Q)/y,this._z=(B+h)/y}else if(n>D){const y=2*Math.sqrt(1+n-I-D);this._w=(B-h)/y,this._x=(e+Q)/y,this._y=.25*y,this._z=(a+d)/y}else{const y=2*Math.sqrt(1+D-I-n);this._w=(Q-e)/y,this._x=(B+h)/y,this._y=(a+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let I=A.dot(g)+1;return I<Number.EPSILON?(I=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=I):(this._x=0,this._y=-A.z,this._z=A.y,this._w=I)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=I),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Ae(this.dot(A),-1,1)))}rotateTowards(A,g){const I=this.angleTo(A);if(I===0)return this;const e=Math.min(1,g/I);return this.slerp(A,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const I=A._x,e=A._y,B=A._z,Q=A._w,n=g._x,a=g._y,h=g._z,d=g._w;return this._x=I*d+Q*n+e*h-B*a,this._y=e*d+Q*a+B*n-I*h,this._z=B*d+Q*h+I*a-e*n,this._w=Q*d-I*n-e*a-B*h,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const I=this._x,e=this._y,B=this._z,Q=this._w;let n=Q*A._w+I*A._x+e*A._y+B*A._z;if(n<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,n=-n):this.copy(A),n>=1)return this._w=Q,this._x=I,this._y=e,this._z=B,this;const a=1-n*n;if(a<=Number.EPSILON){const y=1-g;return this._w=y*Q+g*this._w,this._x=y*I+g*this._x,this._y=y*e+g*this._y,this._z=y*B+g*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(a),d=Math.atan2(h,n),D=Math.sin((1-g)*d)/h,u=Math.sin(g*d)/h;return this._w=Q*D+this._w*u,this._x=I*D+this._x*u,this._y=e*D+this._y*u,this._z=B*D+this._z*u,this._onChangeCallback(),this}slerpQuaternions(A,g,I){return this.copy(A).slerp(g,I)}random(){const A=Math.random(),g=Math.sqrt(1-A),I=Math.sqrt(A),e=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(g*Math.cos(e),I*Math.sin(B),I*Math.cos(B),g*Math.sin(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class EA{constructor(A=0,g=0,I=0){EA.prototype.isVector3=!0,this.x=A,this.y=g,this.z=I}set(A,g,I){return I===void 0&&(I=this.z),this.x=A,this.y=g,this.z=I,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(TQ.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(TQ.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,I=this.y,e=this.z,B=A.elements;return this.x=B[0]*g+B[3]*I+B[6]*e,this.y=B[1]*g+B[4]*I+B[7]*e,this.z=B[2]*g+B[5]*I+B[8]*e,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,I=this.y,e=this.z,B=A.elements,Q=1/(B[3]*g+B[7]*I+B[11]*e+B[15]);return this.x=(B[0]*g+B[4]*I+B[8]*e+B[12])*Q,this.y=(B[1]*g+B[5]*I+B[9]*e+B[13])*Q,this.z=(B[2]*g+B[6]*I+B[10]*e+B[14])*Q,this}applyQuaternion(A){const g=this.x,I=this.y,e=this.z,B=A.x,Q=A.y,n=A.z,a=A.w,h=a*g+Q*e-n*I,d=a*I+n*g-B*e,D=a*e+B*I-Q*g,u=-B*g-Q*I-n*e;return this.x=h*a+u*-B+d*-n-D*-Q,this.y=d*a+u*-Q+D*-B-h*-n,this.z=D*a+u*-n+h*-Q-d*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,I=this.y,e=this.z,B=A.elements;return this.x=B[0]*g+B[4]*I+B[8]*e,this.y=B[1]*g+B[5]*I+B[9]*e,this.z=B[2]*g+B[6]*I+B[10]*e,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const I=A.x,e=A.y,B=A.z,Q=g.x,n=g.y,a=g.z;return this.x=e*a-B*n,this.y=B*Q-I*a,this.z=I*n-e*Q,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const I=A.dot(this)/g;return this.copy(A).multiplyScalar(I)}projectOnPlane(A){return UE.copy(this).projectOnVector(A),this.sub(UE)}reflect(A){return this.sub(UE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const I=this.dot(A)/g;return Math.acos(Ae(I,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y,e=this.z-A.z;return g*g+I*I+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,I){const e=Math.sin(g)*A;return this.x=e*Math.sin(I),this.y=Math.cos(g)*A,this.z=e*Math.cos(I),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,I){return this.x=A*Math.sin(g),this.y=I,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),I=this.setFromMatrixColumn(A,1).length(),e=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=I,this.z=e,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,g*4)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,g*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,g=Math.random()*Math.PI*2,I=Math.sqrt(1-A**2);return this.x=I*Math.cos(g),this.y=I*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const UE=new EA,TQ=new Ye;function Fi(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function KC(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}const YC=new GI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vC=new GI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),di=new EA;function HC(C){return C.convertSRGBToLinear(),di.set(C.r,C.g,C.b).applyMatrix3(vC),C.setRGB(di.x,di.y,di.z)}function sB(C){return di.set(C.r,C.g,C.b).applyMatrix3(YC),C.setRGB(di.x,di.y,di.z).convertLinearToSRGB()}const to={[Qi]:C=>C,[HI]:C=>C.convertSRGBToLinear(),[$I]:HC},Io={[Qi]:C=>C,[HI]:C=>C.convertLinearToSRGB(),[$I]:sB},Se={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(C){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!C},get workingColorSpace(){return Qi},set workingColorSpace(C){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(C,A,g){if(this.enabled===!1||A===g||!A||!g)return C;const I=to[A],e=Io[g];if(I===void 0||e===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${g}".`);return e(I(C))},fromWorkingColorSpace:function(C,A){return this.convert(C,this.workingColorSpace,A)},toWorkingColorSpace:function(C,A){return this.convert(C,A,this.workingColorSpace)}};let aB;class qQ{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{aB===void 0&&(aB=bB("canvas")),aB.width=A.width,aB.height=A.height;const I=aB.getContext("2d");A instanceof ImageData?I.putImageData(A,0,0):I.drawImage(A,0,0,A.width,A.height),g=aB}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=bB("canvas");g.width=A.width,g.height=A.height;const I=g.getContext("2d");I.drawImage(A,0,0,A.width,A.height);const e=I.getImageData(0,0,A.width,A.height),B=e.data;for(let Q=0;Q<B.length;Q++)B[Q]=Fi(B[Q]/255)*255;return I.putImageData(e,0,0),g}else if(A.data){const g=A.data.slice(0);for(let I=0;I<g.length;I++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[I]=Math.floor(Fi(g[I]/255)*255):g[I]=Fi(g[I]);return{data:g,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class KB{constructor(A=null){this.isSource=!0,this.uuid=Ke(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const I={uuid:this.uuid,url:""},e=this.data;if(e!==null){let B;if(Array.isArray(e)){B=[];for(let Q=0,n=e.length;Q<n;Q++)e[Q].isDataTexture?B.push(_Q(e[Q].image)):B.push(_Q(e[Q]))}else B=_Q(e);I.url=B}return g||(A.images[this.uuid]=I),I}}function _Q(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?qQ.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ti=0;class jI extends ci{constructor(A=jI.DEFAULT_IMAGE,g=jI.DEFAULT_MAPPING,I=_A,e=_A,B=Fg,Q=It,n=OI,a=Ht,h=jI.DEFAULT_ANISOTROPY,d=Rt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=Ke(),this.name="",this.source=new KB(A),this.mipmaps=[],this.mapping=g,this.wrapS=I,this.wrapT=e,this.magFilter=B,this.minFilter=Q,this.anisotropy=h,this.format=n,this.internalFormat=null,this.type=a,this.offset=new yg(0,0),this.repeat=new yg(1,1),this.center=new yg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new GI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const I={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(I.userData=this.userData),g||(A.textures[this.uuid]=I),I}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Og)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Qg:A.x=A.x-Math.floor(A.x);break;case _A:A.x=A.x<0?0:1;break;case og:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Qg:A.y=A.y-Math.floor(A.y);break;case _A:A.y=A.y<0?0:1;break;case og:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}jI.DEFAULT_IMAGE=null,jI.DEFAULT_MAPPING=Og,jI.DEFAULT_ANISOTROPY=1;class cI{constructor(A=0,g=0,I=0,e=1){cI.prototype.isVector4=!0,this.x=A,this.y=g,this.z=I,this.w=e}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,I,e){return this.x=A,this.y=g,this.z=I,this.w=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,I=this.y,e=this.z,B=this.w,Q=A.elements;return this.x=Q[0]*g+Q[4]*I+Q[8]*e+Q[12]*B,this.y=Q[1]*g+Q[5]*I+Q[9]*e+Q[13]*B,this.z=Q[2]*g+Q[6]*I+Q[10]*e+Q[14]*B,this.w=Q[3]*g+Q[7]*I+Q[11]*e+Q[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,I,e,B;const a=A.elements,h=a[0],d=a[4],D=a[8],u=a[1],y=a[5],S=a[9],M=a[2],m=a[6],v=a[10];if(Math.abs(d-u)<.01&&Math.abs(D-M)<.01&&Math.abs(S-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(D+M)<.1&&Math.abs(S+m)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const b=(h+1)/2,T=(y+1)/2,IA=(v+1)/2,nA=(d+u)/4,wA=(D+M)/4,O=(S+m)/4;return b>T&&b>IA?b<.01?(I=0,e=.707106781,B=.707106781):(I=Math.sqrt(b),e=nA/I,B=wA/I):T>IA?T<.01?(I=.707106781,e=0,B=.707106781):(e=Math.sqrt(T),I=nA/e,B=O/e):IA<.01?(I=.707106781,e=.707106781,B=0):(B=Math.sqrt(IA),I=wA/B,e=O/B),this.set(I,e,B,g),this}let W=Math.sqrt((m-S)*(m-S)+(D-M)*(D-M)+(u-d)*(u-d));return Math.abs(W)<.001&&(W=1),this.x=(m-S)/W,this.y=(D-M)/W,this.z=(u-d)/W,this.w=Math.acos((h+y+v-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this.w=A.w+(g.w-A.w)*I,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends ci{constructor(A=1,g=1,I={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new cI(0,0,A,g),this.scissorTest=!1,this.viewport=new cI(0,0,A,g);const e={width:A,height:g,depth:1};this.texture=new jI(e,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.internalFormat=I.internalFormat!==void 0?I.internalFormat:null,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Fg,this.depthBuffer=I.depthBuffer!==void 0?I.depthBuffer:!0,this.stencilBuffer=I.stencilBuffer!==void 0?I.stencilBuffer:!1,this.depthTexture=I.depthTexture!==void 0?I.depthTexture:null,this.samples=I.samples!==void 0?I.samples:0}setSize(A,g,I=1){(this.width!==A||this.height!==g||this.depth!==I)&&(this.width=A,this.height=g,this.depth=I,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=I,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new KB(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends jI{constructor(A=null,g=1,I=1,e=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:I,depth:e},this.magFilter=Vg,this.minFilter=Vg,this.wrapR=_A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo extends ui{constructor(A=1,g=1,I=1){super(A,g),this.isWebGLArrayRenderTarget=!0,this.depth=I,this.texture=new We(null,A,g,I),this.texture.isRenderTargetTexture=!0}}class kE extends jI{constructor(A=null,g=1,I=1,e=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:I,depth:e},this.magFilter=Vg,this.minFilter=Vg,this.wrapR=_A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LE extends ui{constructor(A=1,g=1,I=1){super(A,g),this.isWebGL3DRenderTarget=!0,this.depth=I,this.texture=new kE(null,A,g,I),this.texture.isRenderTargetTexture=!0}}class WQ extends ui{constructor(A=1,g=1,I=1,e={}){super(A,g,e),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let Q=0;Q<I;Q++)this.texture[Q]=B.clone(),this.texture[Q].isRenderTargetTexture=!0}setSize(A,g,I=1){if(this.width!==A||this.height!==g||this.depth!==I){this.width=A,this.height=g,this.depth=I;for(let e=0,B=this.texture.length;e<B;e++)this.texture[e].image.width=A,this.texture[e].image.height=g,this.texture[e].image.depth=I;this.dispose()}return this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let g=0,I=A.texture.length;g<I;g++)this.texture[g]=A.texture[g].clone(),this.texture[g].isRenderTargetTexture=!0;return this}}class qi{constructor(A=new EA(1/0,1/0,1/0),g=new EA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){let g=1/0,I=1/0,e=1/0,B=-1/0,Q=-1/0,n=-1/0;for(let a=0,h=A.length;a<h;a+=3){const d=A[a],D=A[a+1],u=A[a+2];d<g&&(g=d),D<I&&(I=D),u<e&&(e=u),d>B&&(B=d),D>Q&&(Q=D),u>n&&(n=u)}return this.min.set(g,I,e),this.max.set(B,Q,n),this}setFromBufferAttribute(A){let g=1/0,I=1/0,e=1/0,B=-1/0,Q=-1/0,n=-1/0;for(let a=0,h=A.count;a<h;a++){const d=A.getX(a),D=A.getY(a),u=A.getZ(a);d<g&&(g=d),D<I&&(I=D),u<e&&(e=u),d>B&&(B=d),D>Q&&(Q=D),u>n&&(n=u)}return this.min.set(g,I,e),this.max.set(B,Q,n),this}setFromPoints(A){this.makeEmpty();for(let g=0,I=A.length;g<I;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const I=fe.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(I),this.max.copy(A).add(I),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){A.updateWorldMatrix(!1,!1);const I=A.geometry;if(I!==void 0)if(g&&I.attributes!=null&&I.attributes.position!==void 0){const B=I.attributes.position;for(let Q=0,n=B.count;Q<n;Q++)fe.fromBufferAttribute(B,Q).applyMatrix4(A.matrixWorld),this.expandByPoint(fe)}else I.boundingBox===null&&I.computeBoundingBox(),xE.copy(I.boundingBox),xE.applyMatrix4(A.matrixWorld),this.union(xE);const e=A.children;for(let B=0,Q=e.length;B<Q;B++)this.expandByObject(e[B],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,fe),fe.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,I;return A.normal.x>0?(g=A.normal.x*this.min.x,I=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,I=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,I+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,I+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,I+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,I+=A.normal.z*this.min.z),g<=-A.constant&&I>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(TC),JE.subVectors(this.max,TC),_i.subVectors(A.a,TC),rB.subVectors(A.b,TC),nC.subVectors(A.c,TC),hB.subVectors(rB,_i),Wi.subVectors(nC,rB),YB.subVectors(_i,nC);let g=[0,-hB.z,hB.y,0,-Wi.z,Wi.y,0,-YB.z,YB.y,hB.z,0,-hB.x,Wi.z,0,-Wi.x,YB.z,0,-YB.x,-hB.y,hB.x,0,-Wi.y,Wi.x,0,-YB.y,YB.x,0];return!PQ(g,_i,rB,nC,JE)||(g=[1,0,0,0,1,0,0,0,1],!PQ(g,_i,rB,nC,JE))?!1:(bE.crossVectors(hB,Wi),g=[bE.x,bE.y,bE.z],PQ(g,_i,rB,nC,JE))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,fe).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(fe).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Di),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Di=[new EA,new EA,new EA,new EA,new EA,new EA,new EA,new EA],fe=new EA,xE=new qi,_i=new EA,rB=new EA,nC=new EA,hB=new EA,Wi=new EA,YB=new EA,TC=new EA,JE=new EA,bE=new EA,vB=new EA;function PQ(C,A,g,I,e){for(let B=0,Q=C.length-3;B<=Q;B+=3){vB.fromArray(C,B);const n=e.x*Math.abs(vB.x)+e.y*Math.abs(vB.y)+e.z*Math.abs(vB.z),a=A.dot(vB),h=g.dot(vB),d=I.dot(vB);if(Math.max(-Math.max(a,h,d),Math.min(a,h,d))>n)return!1}return!0}const io=new qi,HB=new EA,OQ=new EA;class Pi{constructor(A=new EA,g=-1){this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const I=this.center;g!==void 0?I.copy(g):io.setFromPoints(A).getCenter(I);let e=0;for(let B=0,Q=A.length;B<Q;B++)e=Math.max(e,I.distanceToSquared(A[B]));return this.radius=Math.sqrt(e),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const I=this.center.distanceToSquared(A);return g.copy(A),I>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;HB.subVectors(A,this.center);const g=HB.lengthSq();if(g>this.radius*this.radius){const I=Math.sqrt(g),e=(I-this.radius)*.5;this.center.addScaledVector(HB,e/I),this.radius+=e}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(OQ.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(HB.copy(A.center).add(OQ)),this.expandByPoint(HB.copy(A.center).sub(OQ))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new EA,oC=new EA,qC=new EA,Oi=new EA,KE=new EA,_C=new EA,VQ=new EA;class Ni{constructor(A=new EA,g=new EA(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Ai)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const I=g.dot(this.direction);return I<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,I)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=Ai.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(Ai.copy(this.origin).addScaledVector(this.direction,g),Ai.distanceToSquared(A))}distanceSqToSegment(A,g,I,e){oC.copy(A).add(g).multiplyScalar(.5),qC.copy(g).sub(A).normalize(),Oi.copy(this.origin).sub(oC);const B=A.distanceTo(g)*.5,Q=-this.direction.dot(qC),n=Oi.dot(this.direction),a=-Oi.dot(qC),h=Oi.lengthSq(),d=Math.abs(1-Q*Q);let D,u,y,S;if(d>0)if(D=Q*a-n,u=Q*n-a,S=B*d,D>=0)if(u>=-S)if(u<=S){const M=1/d;D*=M,u*=M,y=D*(D+Q*u+2*n)+u*(Q*D+u+2*a)+h}else u=B,D=Math.max(0,-(Q*u+n)),y=-D*D+u*(u+2*a)+h;else u=-B,D=Math.max(0,-(Q*u+n)),y=-D*D+u*(u+2*a)+h;else u<=-S?(D=Math.max(0,-(-Q*B+n)),u=D>0?-B:Math.min(Math.max(-B,-a),B),y=-D*D+u*(u+2*a)+h):u<=S?(D=0,u=Math.min(Math.max(-B,-a),B),y=u*(u+2*a)+h):(D=Math.max(0,-(Q*B+n)),u=D>0?B:Math.min(Math.max(-B,-a),B),y=-D*D+u*(u+2*a)+h);else u=Q>0?-B:B,D=Math.max(0,-(Q*u+n)),y=-D*D+u*(u+2*a)+h;return I&&I.copy(this.origin).addScaledVector(this.direction,D),e&&e.copy(oC).addScaledVector(qC,u),y}intersectSphere(A,g){Ai.subVectors(A.center,this.origin);const I=Ai.dot(this.direction),e=Ai.dot(Ai)-I*I,B=A.radius*A.radius;if(e>B)return null;const Q=Math.sqrt(B-e),n=I-Q,a=I+Q;return a<0?null:n<0?this.at(a,g):this.at(n,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const I=-(this.origin.dot(A.normal)+A.constant)/g;return I>=0?I:null}intersectPlane(A,g){const I=this.distanceToPlane(A);return I===null?null:this.at(I,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0||A.normal.dot(this.direction)*g<0}intersectBox(A,g){let I,e,B,Q,n,a;const h=1/this.direction.x,d=1/this.direction.y,D=1/this.direction.z,u=this.origin;return h>=0?(I=(A.min.x-u.x)*h,e=(A.max.x-u.x)*h):(I=(A.max.x-u.x)*h,e=(A.min.x-u.x)*h),d>=0?(B=(A.min.y-u.y)*d,Q=(A.max.y-u.y)*d):(B=(A.max.y-u.y)*d,Q=(A.min.y-u.y)*d),I>Q||B>e||((B>I||isNaN(I))&&(I=B),(Q<e||isNaN(e))&&(e=Q),D>=0?(n=(A.min.z-u.z)*D,a=(A.max.z-u.z)*D):(n=(A.max.z-u.z)*D,a=(A.min.z-u.z)*D),I>a||n>e)||((n>I||I!==I)&&(I=n),(a<e||e!==e)&&(e=a),e<0)?null:this.at(I>=0?I:e,g)}intersectsBox(A){return this.intersectBox(A,Ai)!==null}intersectTriangle(A,g,I,e,B){KE.subVectors(g,A),_C.subVectors(I,A),VQ.crossVectors(KE,_C);let Q=this.direction.dot(VQ),n;if(Q>0){if(e)return null;n=1}else if(Q<0)n=-1,Q=-Q;else return null;Oi.subVectors(this.origin,A);const a=n*this.direction.dot(_C.crossVectors(Oi,_C));if(a<0)return null;const h=n*this.direction.dot(KE.cross(Oi));if(h<0||a+h>Q)return null;const d=-n*Oi.dot(VQ);return d<0?null:this.at(d/Q,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,g,I,e,B,Q,n,a,h,d,D,u,y,S,M,m){const v=this.elements;return v[0]=A,v[4]=g,v[8]=I,v[12]=e,v[1]=B,v[5]=Q,v[9]=n,v[13]=a,v[2]=h,v[6]=d,v[10]=D,v[14]=u,v[3]=y,v[7]=S,v[11]=M,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],g[9]=I[9],g[10]=I[10],g[11]=I[11],g[12]=I[12],g[13]=I[13],g[14]=I[14],g[15]=I[15],this}copyPosition(A){const g=this.elements,I=A.elements;return g[12]=I[12],g[13]=I[13],g[14]=I[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,I){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),I.setFromMatrixColumn(this,2),this}makeBasis(A,g,I){return this.set(A.x,g.x,I.x,0,A.y,g.y,I.y,0,A.z,g.z,I.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,I=A.elements,e=1/sC.setFromMatrixColumn(A,0).length(),B=1/sC.setFromMatrixColumn(A,1).length(),Q=1/sC.setFromMatrixColumn(A,2).length();return g[0]=I[0]*e,g[1]=I[1]*e,g[2]=I[2]*e,g[3]=0,g[4]=I[4]*B,g[5]=I[5]*B,g[6]=I[6]*B,g[7]=0,g[8]=I[8]*Q,g[9]=I[9]*Q,g[10]=I[10]*Q,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,I=A.x,e=A.y,B=A.z,Q=Math.cos(I),n=Math.sin(I),a=Math.cos(e),h=Math.sin(e),d=Math.cos(B),D=Math.sin(B);if(A.order==="XYZ"){const u=Q*d,y=Q*D,S=n*d,M=n*D;g[0]=a*d,g[4]=-a*D,g[8]=h,g[1]=y+S*h,g[5]=u-M*h,g[9]=-n*a,g[2]=M-u*h,g[6]=S+y*h,g[10]=Q*a}else if(A.order==="YXZ"){const u=a*d,y=a*D,S=h*d,M=h*D;g[0]=u+M*n,g[4]=S*n-y,g[8]=Q*h,g[1]=Q*D,g[5]=Q*d,g[9]=-n,g[2]=y*n-S,g[6]=M+u*n,g[10]=Q*a}else if(A.order==="ZXY"){const u=a*d,y=a*D,S=h*d,M=h*D;g[0]=u-M*n,g[4]=-Q*D,g[8]=S+y*n,g[1]=y+S*n,g[5]=Q*d,g[9]=M-u*n,g[2]=-Q*h,g[6]=n,g[10]=Q*a}else if(A.order==="ZYX"){const u=Q*d,y=Q*D,S=n*d,M=n*D;g[0]=a*d,g[4]=S*h-y,g[8]=u*h+M,g[1]=a*D,g[5]=M*h+u,g[9]=y*h-S,g[2]=-h,g[6]=n*a,g[10]=Q*a}else if(A.order==="YZX"){const u=Q*a,y=Q*h,S=n*a,M=n*h;g[0]=a*d,g[4]=M-u*D,g[8]=S*D+y,g[1]=D,g[5]=Q*d,g[9]=-n*d,g[2]=-h*d,g[6]=y*D+S,g[10]=u-M*D}else if(A.order==="XZY"){const u=Q*a,y=Q*h,S=n*a,M=n*h;g[0]=a*d,g[4]=-D,g[8]=h*d,g[1]=u*D+M,g[5]=Q*d,g[9]=y*D-S,g[2]=S*D-y,g[6]=n*d,g[10]=M*D+u}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Vi,A,Bo)}lookAt(A,g,I){const e=this.elements;return ie.subVectors(A,g),ie.lengthSq()===0&&(ie.z=1),ie.normalize(),Zi.crossVectors(I,ie),Zi.lengthSq()===0&&(Math.abs(I.z)===1?ie.x+=1e-4:ie.z+=1e-4,ie.normalize(),Zi.crossVectors(I,ie)),Zi.normalize(),fi.crossVectors(ie,Zi),e[0]=Zi.x,e[4]=fi.x,e[8]=ie.x,e[1]=Zi.y,e[5]=fi.y,e[9]=ie.y,e[2]=Zi.z,e[6]=fi.z,e[10]=ie.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,e=g.elements,B=this.elements,Q=I[0],n=I[4],a=I[8],h=I[12],d=I[1],D=I[5],u=I[9],y=I[13],S=I[2],M=I[6],m=I[10],v=I[14],W=I[3],b=I[7],T=I[11],IA=I[15],nA=e[0],wA=e[4],O=e[8],iA=e[12],SA=e[1],ig=e[5],rg=e[9],OA=e[13],HA=e[2],ng=e[6],Rg=e[10],qg=e[14],wg=e[3],_g=e[7],Lg=e[11],Ut=e[15];return B[0]=Q*nA+n*SA+a*HA+h*wg,B[4]=Q*wA+n*ig+a*ng+h*_g,B[8]=Q*O+n*rg+a*Rg+h*Lg,B[12]=Q*iA+n*OA+a*qg+h*Ut,B[1]=d*nA+D*SA+u*HA+y*wg,B[5]=d*wA+D*ig+u*ng+y*_g,B[9]=d*O+D*rg+u*Rg+y*Lg,B[13]=d*iA+D*OA+u*qg+y*Ut,B[2]=S*nA+M*SA+m*HA+v*wg,B[6]=S*wA+M*ig+m*ng+v*_g,B[10]=S*O+M*rg+m*Rg+v*Lg,B[14]=S*iA+M*OA+m*qg+v*Ut,B[3]=W*nA+b*SA+T*HA+IA*wg,B[7]=W*wA+b*ig+T*ng+IA*_g,B[11]=W*O+b*rg+T*Rg+IA*Lg,B[15]=W*iA+b*OA+T*qg+IA*Ut,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[4],e=A[8],B=A[12],Q=A[1],n=A[5],a=A[9],h=A[13],d=A[2],D=A[6],u=A[10],y=A[14],S=A[3],M=A[7],m=A[11],v=A[15];return S*(+B*a*D-e*h*D-B*n*u+I*h*u+e*n*y-I*a*y)+M*(+g*a*y-g*h*u+B*Q*u-e*Q*y+e*h*d-B*a*d)+m*(+g*h*D-g*n*y-B*Q*D+I*Q*y+B*n*d-I*h*d)+v*(-e*n*d-g*a*D+g*n*u+e*Q*D-I*Q*u+I*a*d)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,I){const e=this.elements;return A.isVector3?(e[12]=A.x,e[13]=A.y,e[14]=A.z):(e[12]=A,e[13]=g,e[14]=I),this}invert(){const A=this.elements,g=A[0],I=A[1],e=A[2],B=A[3],Q=A[4],n=A[5],a=A[6],h=A[7],d=A[8],D=A[9],u=A[10],y=A[11],S=A[12],M=A[13],m=A[14],v=A[15],W=D*m*h-M*u*h+M*a*y-n*m*y-D*a*v+n*u*v,b=S*u*h-d*m*h-S*a*y+Q*m*y+d*a*v-Q*u*v,T=d*M*h-S*D*h+S*n*y-Q*M*y-d*n*v+Q*D*v,IA=S*D*a-d*M*a-S*n*u+Q*M*u+d*n*m-Q*D*m,nA=g*W+I*b+e*T+B*IA;if(nA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const wA=1/nA;return A[0]=W*wA,A[1]=(M*u*B-D*m*B-M*e*y+I*m*y+D*e*v-I*u*v)*wA,A[2]=(n*m*B-M*a*B+M*e*h-I*m*h-n*e*v+I*a*v)*wA,A[3]=(D*a*B-n*u*B-D*e*h+I*u*h+n*e*y-I*a*y)*wA,A[4]=b*wA,A[5]=(d*m*B-S*u*B+S*e*y-g*m*y-d*e*v+g*u*v)*wA,A[6]=(S*a*B-Q*m*B-S*e*h+g*m*h+Q*e*v-g*a*v)*wA,A[7]=(Q*u*B-d*a*B+d*e*h-g*u*h-Q*e*y+g*a*y)*wA,A[8]=T*wA,A[9]=(S*D*B-d*M*B-S*I*y+g*M*y+d*I*v-g*D*v)*wA,A[10]=(Q*M*B-S*n*B+S*I*h-g*M*h-Q*I*v+g*n*v)*wA,A[11]=(d*n*B-Q*D*B-d*I*h+g*D*h+Q*I*y-g*n*y)*wA,A[12]=IA*wA,A[13]=(d*M*e-S*D*e+S*I*u-g*M*u-d*I*m+g*D*m)*wA,A[14]=(S*n*e-Q*M*e-S*I*a+g*M*a+Q*I*m-g*n*m)*wA,A[15]=(Q*D*e-d*n*e+d*I*a-g*D*a-Q*I*u+g*n*u)*wA,this}scale(A){const g=this.elements,I=A.x,e=A.y,B=A.z;return g[0]*=I,g[4]*=e,g[8]*=B,g[1]*=I,g[5]*=e,g[9]*=B,g[2]*=I,g[6]*=e,g[10]*=B,g[3]*=I,g[7]*=e,g[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],I=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],e=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,I,e))}makeTranslation(A,g,I){return this.set(1,0,0,A,0,1,0,g,0,0,1,I,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),I=Math.sin(A);return this.set(1,0,0,0,0,g,-I,0,0,I,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,0,I,0,0,1,0,0,-I,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,-I,0,0,I,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const I=Math.cos(g),e=Math.sin(g),B=1-I,Q=A.x,n=A.y,a=A.z,h=B*Q,d=B*n;return this.set(h*Q+I,h*n-e*a,h*a+e*n,0,h*n+e*a,d*n+I,d*a-e*Q,0,h*a-e*n,d*a+e*Q,B*a*a+I,0,0,0,0,1),this}makeScale(A,g,I){return this.set(A,0,0,0,0,g,0,0,0,0,I,0,0,0,0,1),this}makeShear(A,g,I,e,B,Q){return this.set(1,I,B,0,A,1,Q,0,g,e,1,0,0,0,0,1),this}compose(A,g,I){const e=this.elements,B=g._x,Q=g._y,n=g._z,a=g._w,h=B+B,d=Q+Q,D=n+n,u=B*h,y=B*d,S=B*D,M=Q*d,m=Q*D,v=n*D,W=a*h,b=a*d,T=a*D,IA=I.x,nA=I.y,wA=I.z;return e[0]=(1-(M+v))*IA,e[1]=(y+T)*IA,e[2]=(S-b)*IA,e[3]=0,e[4]=(y-T)*nA,e[5]=(1-(u+v))*nA,e[6]=(m+W)*nA,e[7]=0,e[8]=(S+b)*wA,e[9]=(m-W)*wA,e[10]=(1-(u+M))*wA,e[11]=0,e[12]=A.x,e[13]=A.y,e[14]=A.z,e[15]=1,this}decompose(A,g,I){const e=this.elements;let B=sC.set(e[0],e[1],e[2]).length();const Q=sC.set(e[4],e[5],e[6]).length(),n=sC.set(e[8],e[9],e[10]).length();this.determinant()<0&&(B=-B),A.x=e[12],A.y=e[13],A.z=e[14],ve.copy(this);const h=1/B,d=1/Q,D=1/n;return ve.elements[0]*=h,ve.elements[1]*=h,ve.elements[2]*=h,ve.elements[4]*=d,ve.elements[5]*=d,ve.elements[6]*=d,ve.elements[8]*=D,ve.elements[9]*=D,ve.elements[10]*=D,g.setFromRotationMatrix(ve),I.x=B,I.y=Q,I.z=n,this}makePerspective(A,g,I,e,B,Q){const n=this.elements,a=2*B/(g-A),h=2*B/(I-e),d=(g+A)/(g-A),D=(I+e)/(I-e),u=-(Q+B)/(Q-B),y=-2*Q*B/(Q-B);return n[0]=a,n[4]=0,n[8]=d,n[12]=0,n[1]=0,n[5]=h,n[9]=D,n[13]=0,n[2]=0,n[6]=0,n[10]=u,n[14]=y,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(A,g,I,e,B,Q){const n=this.elements,a=1/(g-A),h=1/(I-e),d=1/(Q-B),D=(g+A)*a,u=(I+e)*h,y=(Q+B)*d;return n[0]=2*a,n[4]=0,n[8]=0,n[12]=-D,n[1]=0,n[5]=2*h,n[9]=0,n[13]=-u,n[2]=0,n[6]=0,n[10]=-2*d,n[14]=-y,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(A){const g=this.elements,I=A.elements;for(let e=0;e<16;e++)if(g[e]!==I[e])return!1;return!0}fromArray(A,g=0){for(let I=0;I<16;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A[g+9]=I[9],A[g+10]=I[10],A[g+11]=I[11],A[g+12]=I[12],A[g+13]=I[13],A[g+14]=I[14],A[g+15]=I[15],A}}const sC=new EA,ve=new jt,Vi=new EA(0,0,0),Bo=new EA(1,1,1),Zi=new EA,fi=new EA,ie=new EA,Xi=new jt,ZQ=new Ye;class aC{constructor(A=0,g=0,I=0,e=aC.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=g,this._z=I,this._order=e}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,I,e=this._order){return this._x=A,this._y=g,this._z=I,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,I=!0){const e=A.elements,B=e[0],Q=e[4],n=e[8],a=e[1],h=e[5],d=e[9],D=e[2],u=e[6],y=e[10];switch(g){case"XYZ":this._y=Math.asin(Ae(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-Q,B)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(n,y),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-D,B),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-D,y),this._z=Math.atan2(-Q,h)):(this._y=0,this._z=Math.atan2(a,B));break;case"ZYX":this._y=Math.asin(-Ae(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(u,y),this._z=Math.atan2(a,B)):(this._x=0,this._z=Math.atan2(-Q,h));break;case"YZX":this._z=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-D,B)):(this._x=0,this._y=Math.atan2(n,y));break;case"XZY":this._z=Math.asin(-Ae(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(n,B)):(this._x=Math.atan2(-d,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,I===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,I){return Xi.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Xi,g,I)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return ZQ.setFromEuler(this),this.setFromQuaternion(ZQ,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aC.DEFAULT_ORDER="XYZ";class r{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let l=0;const w=new EA,U=new Ye,_=new jt,j=new EA,aA=new EA,uA=new EA,vA=new Ye,$A=new EA(1,0,0),Ng=new EA(0,1,0),xg=new EA(0,0,1),eg={type:"added"},Kg={type:"removed"};class Sg extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l++}),this.uuid=Ke(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sg.DEFAULT_UP.clone();const A=new EA,g=new aC,I=new Ye,e=new EA(1,1,1);function B(){I.setFromEuler(g,!1)}function Q(){g.setFromQuaternion(I,void 0,!1)}g._onChange(B),I._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:I},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new jt},normalMatrix:{value:new GI}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Sg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Sg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return U.setFromAxisAngle(A,g),this.quaternion.multiply(U),this}rotateOnWorldAxis(A,g){return U.setFromAxisAngle(A,g),this.quaternion.premultiply(U),this}rotateX(A){return this.rotateOnAxis($A,A)}rotateY(A){return this.rotateOnAxis(Ng,A)}rotateZ(A){return this.rotateOnAxis(xg,A)}translateOnAxis(A,g){return w.copy(A).applyQuaternion(this.quaternion),this.position.add(w.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis($A,A)}translateY(A){return this.translateOnAxis(Ng,A)}translateZ(A){return this.translateOnAxis(xg,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(_.copy(this.matrixWorld).invert())}lookAt(A,g,I){A.isVector3?j.copy(A):j.set(A,g,I);const e=this.parent;this.updateWorldMatrix(!0,!1),aA.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_.lookAt(aA,j,this.up):_.lookAt(j,aA,this.up),this.quaternion.setFromRotationMatrix(_),e&&(_.extractRotation(e.matrixWorld),U.setFromRotationMatrix(_),this.quaternion.premultiply(U.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(eg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.remove(arguments[I]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(Kg)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const g=this.children[A];g.parent=null,g.dispatchEvent(Kg)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),_.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),_.multiply(A.parent.matrixWorld)),A.applyMatrix4(_),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let I=0,e=this.children.length;I<e;I++){const Q=this.children[I].getObjectByProperty(A,g);if(Q!==void 0)return Q}}getObjectsByProperty(A,g){let I=[];this[A]===g&&I.push(this);for(let e=0,B=this.children.length;e<B;e++){const Q=this.children[e].getObjectsByProperty(A,g);Q.length>0&&(I=I.concat(Q))}return I}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aA,A,uA),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aA,vA,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let I=0,e=g.length;I<e;I++)g[I].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let I=0,e=g.length;I<e;I++)g[I].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let I=0,e=g.length;I<e;I++){const B=g[I];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const I=this.parent;if(A===!0&&I!==null&&I.matrixWorldAutoUpdate===!0&&I.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const e=this.children;for(let B=0,Q=e.length;B<Q;B++){const n=e[B];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",I={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},I.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const e={};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON()));function B(n,a){return n[a.uuid]===void 0&&(n[a.uuid]=a.toJSON(A)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(e.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=B(A.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const a=n.shapes;if(Array.isArray(a))for(let h=0,d=a.length;h<d;h++){const D=a[h];B(A.shapes,D)}else B(A.shapes,a)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let a=0,h=this.material.length;a<h;a++)n.push(B(A.materials,this.material[a]));e.material=n}else e.material=B(A.materials,this.material);if(this.children.length>0){e.children=[];for(let n=0;n<this.children.length;n++)e.children.push(this.children[n].toJSON(A).object)}if(this.animations.length>0){e.animations=[];for(let n=0;n<this.animations.length;n++){const a=this.animations[n];e.animations.push(B(A.animations,a))}}if(g){const n=Q(A.geometries),a=Q(A.materials),h=Q(A.textures),d=Q(A.images),D=Q(A.shapes),u=Q(A.skeletons),y=Q(A.animations),S=Q(A.nodes);n.length>0&&(I.geometries=n),a.length>0&&(I.materials=a),h.length>0&&(I.textures=h),d.length>0&&(I.images=d),D.length>0&&(I.shapes=D),u.length>0&&(I.skeletons=u),y.length>0&&(I.animations=y),S.length>0&&(I.nodes=S)}return I.object=e,I;function Q(n){const a=[];for(const h in n){const d=n[h];delete d.metadata,a.push(d)}return a}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let I=0;I<A.children.length;I++){const e=A.children[I];this.add(e.clone())}return this}}Sg.DEFAULT_UP=new EA(0,1,0),Sg.DEFAULT_MATRIX_AUTO_UPDATE=!0,Sg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const BI=new EA,$t=new EA,fI=new EA,Eg=new EA,wt=new EA,KI=new EA,YI=new EA,we=new EA,Be=new EA,XQ=new EA;class He{constructor(A=new EA,g=new EA,I=new EA){this.a=A,this.b=g,this.c=I}static getNormal(A,g,I,e){e.subVectors(I,g),BI.subVectors(A,g),e.cross(BI);const B=e.lengthSq();return B>0?e.multiplyScalar(1/Math.sqrt(B)):e.set(0,0,0)}static getBarycoord(A,g,I,e,B){BI.subVectors(e,g),$t.subVectors(I,g),fI.subVectors(A,g);const Q=BI.dot(BI),n=BI.dot($t),a=BI.dot(fI),h=$t.dot($t),d=$t.dot(fI),D=Q*h-n*n;if(D===0)return B.set(-2,-1,-1);const u=1/D,y=(h*a-n*d)*u,S=(Q*d-n*a)*u;return B.set(1-y-S,S,y)}static containsPoint(A,g,I,e){return this.getBarycoord(A,g,I,e,Eg),Eg.x>=0&&Eg.y>=0&&Eg.x+Eg.y<=1}static getUV(A,g,I,e,B,Q,n,a){return this.getBarycoord(A,g,I,e,Eg),a.set(0,0),a.addScaledVector(B,Eg.x),a.addScaledVector(Q,Eg.y),a.addScaledVector(n,Eg.z),a}static isFrontFacing(A,g,I,e){return BI.subVectors(I,g),$t.subVectors(A,g),BI.cross($t).dot(e)<0}set(A,g,I){return this.a.copy(A),this.b.copy(g),this.c.copy(I),this}setFromPointsAndIndices(A,g,I,e){return this.a.copy(A[g]),this.b.copy(A[I]),this.c.copy(A[e]),this}setFromAttributeAndIndices(A,g,I,e){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,I),this.c.fromBufferAttribute(A,e),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return BI.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),BI.cross($t).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return He.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return He.getBarycoord(A,this.a,this.b,this.c,g)}getUV(A,g,I,e,B){return He.getUV(A,this.a,this.b,this.c,g,I,e,B)}containsPoint(A){return He.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return He.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const I=this.a,e=this.b,B=this.c;let Q,n;wt.subVectors(e,I),KI.subVectors(B,I),we.subVectors(A,I);const a=wt.dot(we),h=KI.dot(we);if(a<=0&&h<=0)return g.copy(I);Be.subVectors(A,e);const d=wt.dot(Be),D=KI.dot(Be);if(d>=0&&D<=d)return g.copy(e);const u=a*D-d*h;if(u<=0&&a>=0&&d<=0)return Q=a/(a-d),g.copy(I).addScaledVector(wt,Q);XQ.subVectors(A,B);const y=wt.dot(XQ),S=KI.dot(XQ);if(S>=0&&y<=S)return g.copy(B);const M=y*h-a*S;if(M<=0&&h>=0&&S<=0)return n=h/(h-S),g.copy(I).addScaledVector(KI,n);const m=d*S-y*D;if(m<=0&&D-d>=0&&y-S>=0)return YI.subVectors(B,e),n=(D-d)/(D-d+(y-S)),g.copy(e).addScaledVector(YI,n);const v=1/(m+M+u);return Q=M*v,n=u*v,g.copy(I).addScaledVector(wt,Q).addScaledVector(KI,n)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let gi=0;class Ge extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gi++}),this.uuid=Ke(),this.name="",this.type="Material",this.blending=L,this.side=J,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lg,this.blendDst=ag,this.blendEquation=TA,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ig,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bQ,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=be,this.stencilZFail=be,this.stencilZPass=be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const I=A[g];if(I===void 0){console.warn("THREE.Material: '"+g+"' parameter is undefined.");continue}const e=this[g];if(e===void 0){console.warn("THREE."+this.type+": '"+g+"' is not a property of this material.");continue}e&&e.isColor?e.set(I):e&&e.isVector3&&I&&I.isVector3?e.copy(I):this[g]=I}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const I={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),this.color&&this.color.isColor&&(I.color=this.color.getHex()),this.roughness!==void 0&&(I.roughness=this.roughness),this.metalness!==void 0&&(I.metalness=this.metalness),this.sheen!==void 0&&(I.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(I.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(I.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(I.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(I.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(I.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(I.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(I.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(I.shininess=this.shininess),this.clearcoat!==void 0&&(I.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(I.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(I.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(I.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(I.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,I.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(I.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(I.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(I.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(I.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(I.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(I.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(I.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(I.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(I.lightMap=this.lightMap.toJSON(A).uuid,I.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(I.aoMap=this.aoMap.toJSON(A).uuid,I.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(I.bumpMap=this.bumpMap.toJSON(A).uuid,I.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(I.normalMap=this.normalMap.toJSON(A).uuid,I.normalMapType=this.normalMapType,I.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(I.displacementMap=this.displacementMap.toJSON(A).uuid,I.displacementScale=this.displacementScale,I.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(I.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(I.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(I.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(I.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(I.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(I.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(I.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(I.combine=this.combine)),this.envMapIntensity!==void 0&&(I.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(I.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(I.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(I.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(I.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(I.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(I.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(I.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(I.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(I.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(I.size=this.size),this.shadowSide!==null&&(I.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(I.sizeAttenuation=this.sizeAttenuation),this.blending!==L&&(I.blending=this.blending),this.side!==J&&(I.side=this.side),this.vertexColors&&(I.vertexColors=!0),this.opacity<1&&(I.opacity=this.opacity),this.transparent===!0&&(I.transparent=this.transparent),I.depthFunc=this.depthFunc,I.depthTest=this.depthTest,I.depthWrite=this.depthWrite,I.colorWrite=this.colorWrite,I.stencilWrite=this.stencilWrite,I.stencilWriteMask=this.stencilWriteMask,I.stencilFunc=this.stencilFunc,I.stencilRef=this.stencilRef,I.stencilFuncMask=this.stencilFuncMask,I.stencilFail=this.stencilFail,I.stencilZFail=this.stencilZFail,I.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(I.rotation=this.rotation),this.polygonOffset===!0&&(I.polygonOffset=!0),this.polygonOffsetFactor!==0&&(I.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(I.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(I.linewidth=this.linewidth),this.dashSize!==void 0&&(I.dashSize=this.dashSize),this.gapSize!==void 0&&(I.gapSize=this.gapSize),this.scale!==void 0&&(I.scale=this.scale),this.dithering===!0&&(I.dithering=!0),this.alphaTest>0&&(I.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(I.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(I.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(I.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(I.wireframe=this.wireframe),this.wireframeLinewidth>1&&(I.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(I.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(I.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(I.flatShading=this.flatShading),this.visible===!1&&(I.visible=!1),this.toneMapped===!1&&(I.toneMapped=!1),this.fog===!1&&(I.fog=!1),Object.keys(this.userData).length>0&&(I.userData=this.userData);function e(B){const Q=[];for(const n in B){const a=B[n];delete a.metadata,Q.push(a)}return Q}if(g){const B=e(A.textures),Q=e(A.images);B.length>0&&(I.textures=B),Q.length>0&&(I.images=Q)}return I}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let I=null;if(g!==null){const e=g.length;I=new Array(e);for(let B=0;B!==e;++B)I[B]=g[B].clone()}return this.clippingPlanes=I,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const YE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function bs(C,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?C+(A-C)*6*g:g<1/2?A:g<2/3?C+(A-C)*6*(2/3-g):C}class Dt{constructor(A,g,I){return this.isColor=!0,this.r=1,this.g=1,this.b=1,g===void 0&&I===void 0?this.set(A):this.setRGB(A,g,I)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=HI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,Se.toWorkingColorSpace(this,g),this}setRGB(A,g,I,e=Se.workingColorSpace){return this.r=A,this.g=g,this.b=I,Se.toWorkingColorSpace(this,e),this}setHSL(A,g,I,e=Se.workingColorSpace){if(A=RI(A,1),g=Ae(g,0,1),I=Ae(I,0,1),g===0)this.r=this.g=this.b=I;else{const B=I<=.5?I*(1+g):I+g-I*g,Q=2*I-B;this.r=bs(Q,B,A+1/3),this.g=bs(Q,B,A),this.b=bs(Q,B,A-1/3)}return Se.toWorkingColorSpace(this,e),this}setStyle(A,g=HI){function I(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let e;if(e=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const Q=e[1],n=e[2];switch(Q){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,Se.toWorkingColorSpace(this,g),I(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,Se.toWorkingColorSpace(this,g),I(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){const a=parseFloat(B[1])/360,h=parseFloat(B[2])/100,d=parseFloat(B[3])/100;return I(B[4]),this.setHSL(a,h,d,g)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(e=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=e[1],Q=B.length;if(Q===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,Se.toWorkingColorSpace(this,g),this;if(Q===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,Se.toWorkingColorSpace(this,g),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,g);return this}setColorName(A,g=HI){const I=YE[A.toLowerCase()];return I!==void 0?this.setHex(I,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Fi(A.r),this.g=Fi(A.g),this.b=Fi(A.b),this}copyLinearToSRGB(A){return this.r=KC(A.r),this.g=KC(A.g),this.b=KC(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=HI){return Se.fromWorkingColorSpace(Pe.copy(this),A),Ae(Pe.r*255,0,255)<<16^Ae(Pe.g*255,0,255)<<8^Ae(Pe.b*255,0,255)<<0}getHexString(A=HI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=Se.workingColorSpace){Se.fromWorkingColorSpace(Pe.copy(this),g);const I=Pe.r,e=Pe.g,B=Pe.b,Q=Math.max(I,e,B),n=Math.min(I,e,B);let a,h;const d=(n+Q)/2;if(n===Q)a=0,h=0;else{const D=Q-n;switch(h=d<=.5?D/(Q+n):D/(2-Q-n),Q){case I:a=(e-B)/D+(e<B?6:0);break;case e:a=(B-I)/D+2;break;case B:a=(I-e)/D+4;break}a/=6}return A.h=a,A.s=h,A.l=d,A}getRGB(A,g=Se.workingColorSpace){return Se.fromWorkingColorSpace(Pe.copy(this),g),A.r=Pe.r,A.g=Pe.g,A.b=Pe.b,A}getStyle(A=HI){Se.fromWorkingColorSpace(Pe.copy(this),A);const g=Pe.r,I=Pe.g,e=Pe.b;return A!==HI?`color(${A} ${g.toFixed(3)} ${I.toFixed(3)} ${e.toFixed(3)})`:`rgb(${g*255|0},${I*255|0},${e*255|0})`}offsetHSL(A,g,I){return this.getHSL(oi),oi.h+=A,oi.s+=g,oi.l+=I,this.setHSL(oi.h,oi.s,oi.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,I){return this.r=A.r+(g.r-A.r)*I,this.g=A.g+(g.g-A.g)*I,this.b=A.b+(g.b-A.b)*I,this}lerpHSL(A,g){this.getHSL(oi),A.getHSL(Co);const I=li(oi.h,Co.h,g),e=li(oi.s,Co.s,g),B=li(oi.l,Co.l,g);return this.setHSL(I,e,B),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Dt;Dt.NAMES=YE;class rC extends Ge{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const re=new EA,Eo=new yg;class VI{constructor(A,g,I=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=I,this.usage=EC,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,g,I){A*=this.itemSize,I*=g.itemSize;for(let e=0,B=this.itemSize;e<B;e++)this.array[A+e]=g.array[I+e];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,I=this.count;g<I;g++)Eo.fromBufferAttribute(this,g),Eo.applyMatrix3(A),this.setXY(g,Eo.x,Eo.y);else if(this.itemSize===3)for(let g=0,I=this.count;g<I;g++)re.fromBufferAttribute(this,g),re.applyMatrix3(A),this.setXYZ(g,re.x,re.y,re.z);return this}applyMatrix4(A){for(let g=0,I=this.count;g<I;g++)re.fromBufferAttribute(this,g),re.applyMatrix4(A),this.setXYZ(g,re.x,re.y,re.z);return this}applyNormalMatrix(A){for(let g=0,I=this.count;g<I;g++)re.fromBufferAttribute(this,g),re.applyNormalMatrix(A),this.setXYZ(g,re.x,re.y,re.z);return this}transformDirection(A){for(let g=0,I=this.count;g<I;g++)re.fromBufferAttribute(this,g),re.transformDirection(A),this.setXYZ(g,re.x,re.y,re.z);return this}set(A,g=0){return this.array.set(A,g),this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=ni(g,this.array)),g}setX(A,g){return this.normalized&&(g=mI(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=ni(g,this.array)),g}setY(A,g){return this.normalized&&(g=mI(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=ni(g,this.array)),g}setZ(A,g){return this.normalized&&(g=mI(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=ni(g,this.array)),g}setW(A,g){return this.normalized&&(g=mI(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,I){return A*=this.itemSize,this.normalized&&(g=mI(g,this.array),I=mI(I,this.array)),this.array[A+0]=g,this.array[A+1]=I,this}setXYZ(A,g,I,e){return A*=this.itemSize,this.normalized&&(g=mI(g,this.array),I=mI(I,this.array),e=mI(e,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=e,this}setXYZW(A,g,I,e,B){return A*=this.itemSize,this.normalized&&(g=mI(g,this.array),I=mI(I,this.array),e=mI(e,this.array),B=mI(B,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=e,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==EC&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class du extends VI{constructor(A,g,I){super(new Int8Array(A),g,I)}}class uu extends VI{constructor(A,g,I){super(new Uint8Array(A),g,I)}}class Du extends VI{constructor(A,g,I){super(new Uint8ClampedArray(A),g,I)}}class fu extends VI{constructor(A,g,I){super(new Int16Array(A),g,I)}}class Ks extends VI{constructor(A,g,I){super(new Uint16Array(A),g,I)}}class wu extends VI{constructor(A,g,I){super(new Int32Array(A),g,I)}}class Ys extends VI{constructor(A,g,I){super(new Uint32Array(A),g,I)}}class pu extends VI{constructor(A,g,I){super(new Uint16Array(A),g,I),this.isFloat16BufferAttribute=!0}}class Ft extends VI{constructor(A,g,I){super(new Float32Array(A),g,I)}}class yu extends VI{constructor(A,g,I){super(new Float64Array(A),g,I)}}let Mu=0;const Ui=new jt,vs=new Sg,vE=new EA,wi=new qi,zQ=new qi,Fe=new EA;class lI extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ke(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(SI(A)?Ys:Ks)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,I=0){this.groups.push({start:A,count:g,materialIndex:I})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const I=this.attributes.normal;if(I!==void 0){const B=new GI().getNormalMatrix(A);I.applyNormalMatrix(B),I.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(A),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Ui.makeRotationFromQuaternion(A),this.applyMatrix4(Ui),this}rotateX(A){return Ui.makeRotationX(A),this.applyMatrix4(Ui),this}rotateY(A){return Ui.makeRotationY(A),this.applyMatrix4(Ui),this}rotateZ(A){return Ui.makeRotationZ(A),this.applyMatrix4(Ui),this}translate(A,g,I){return Ui.makeTranslation(A,g,I),this.applyMatrix4(Ui),this}scale(A,g,I){return Ui.makeScale(A,g,I),this.applyMatrix4(Ui),this}lookAt(A){return vs.lookAt(A),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vE).negate(),this.translate(vE.x,vE.y,vE.z),this}setFromPoints(A){const g=[];for(let I=0,e=A.length;I<e;I++){const B=A[I];g.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new Ft(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new EA(-1/0,-1/0,-1/0),new EA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let I=0,e=g.length;I<e;I++){const B=g[I];wi.setFromBufferAttribute(B),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new EA,1/0);return}if(A){const I=this.boundingSphere.center;if(wi.setFromBufferAttribute(A),g)for(let B=0,Q=g.length;B<Q;B++){const n=g[B];zQ.setFromBufferAttribute(n),this.morphTargetsRelative?(Fe.addVectors(wi.min,zQ.min),wi.expandByPoint(Fe),Fe.addVectors(wi.max,zQ.max),wi.expandByPoint(Fe)):(wi.expandByPoint(zQ.min),wi.expandByPoint(zQ.max))}wi.getCenter(I);let e=0;for(let B=0,Q=A.count;B<Q;B++)Fe.fromBufferAttribute(A,B),e=Math.max(e,I.distanceToSquared(Fe));if(g)for(let B=0,Q=g.length;B<Q;B++){const n=g[B],a=this.morphTargetsRelative;for(let h=0,d=n.count;h<d;h++)Fe.fromBufferAttribute(n,h),a&&(vE.fromBufferAttribute(A,h),Fe.add(vE)),e=Math.max(e,I.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const I=A.array,e=g.position.array,B=g.normal.array,Q=g.uv.array,n=e.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new VI(new Float32Array(4*n),4));const a=this.getAttribute("tangent").array,h=[],d=[];for(let SA=0;SA<n;SA++)h[SA]=new EA,d[SA]=new EA;const D=new EA,u=new EA,y=new EA,S=new yg,M=new yg,m=new yg,v=new EA,W=new EA;function b(SA,ig,rg){D.fromArray(e,SA*3),u.fromArray(e,ig*3),y.fromArray(e,rg*3),S.fromArray(Q,SA*2),M.fromArray(Q,ig*2),m.fromArray(Q,rg*2),u.sub(D),y.sub(D),M.sub(S),m.sub(S);const OA=1/(M.x*m.y-m.x*M.y);isFinite(OA)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(y,-M.y).multiplyScalar(OA),W.copy(y).multiplyScalar(M.x).addScaledVector(u,-m.x).multiplyScalar(OA),h[SA].add(v),h[ig].add(v),h[rg].add(v),d[SA].add(W),d[ig].add(W),d[rg].add(W))}let T=this.groups;T.length===0&&(T=[{start:0,count:I.length}]);for(let SA=0,ig=T.length;SA<ig;++SA){const rg=T[SA],OA=rg.start,HA=rg.count;for(let ng=OA,Rg=OA+HA;ng<Rg;ng+=3)b(I[ng+0],I[ng+1],I[ng+2])}const IA=new EA,nA=new EA,wA=new EA,O=new EA;function iA(SA){wA.fromArray(B,SA*3),O.copy(wA);const ig=h[SA];IA.copy(ig),IA.sub(wA.multiplyScalar(wA.dot(ig))).normalize(),nA.crossVectors(O,ig);const OA=nA.dot(d[SA])<0?-1:1;a[SA*4]=IA.x,a[SA*4+1]=IA.y,a[SA*4+2]=IA.z,a[SA*4+3]=OA}for(let SA=0,ig=T.length;SA<ig;++SA){const rg=T[SA],OA=rg.start,HA=rg.count;for(let ng=OA,Rg=OA+HA;ng<Rg;ng+=3)iA(I[ng+0]),iA(I[ng+1]),iA(I[ng+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let I=this.getAttribute("normal");if(I===void 0)I=new VI(new Float32Array(g.count*3),3),this.setAttribute("normal",I);else for(let u=0,y=I.count;u<y;u++)I.setXYZ(u,0,0,0);const e=new EA,B=new EA,Q=new EA,n=new EA,a=new EA,h=new EA,d=new EA,D=new EA;if(A)for(let u=0,y=A.count;u<y;u+=3){const S=A.getX(u+0),M=A.getX(u+1),m=A.getX(u+2);e.fromBufferAttribute(g,S),B.fromBufferAttribute(g,M),Q.fromBufferAttribute(g,m),d.subVectors(Q,B),D.subVectors(e,B),d.cross(D),n.fromBufferAttribute(I,S),a.fromBufferAttribute(I,M),h.fromBufferAttribute(I,m),n.add(d),a.add(d),h.add(d),I.setXYZ(S,n.x,n.y,n.z),I.setXYZ(M,a.x,a.y,a.z),I.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,y=g.count;u<y;u+=3)e.fromBufferAttribute(g,u+0),B.fromBufferAttribute(g,u+1),Q.fromBufferAttribute(g,u+2),d.subVectors(Q,B),D.subVectors(e,B),d.cross(D),I.setXYZ(u+0,d.x,d.y,d.z),I.setXYZ(u+1,d.x,d.y,d.z),I.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),I.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let g=0,I=A.count;g<I;g++)Fe.fromBufferAttribute(A,g),Fe.normalize(),A.setXYZ(g,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function A(n,a){const h=n.array,d=n.itemSize,D=n.normalized,u=new h.constructor(a.length*d);let y=0,S=0;for(let M=0,m=a.length;M<m;M++){n.isInterleavedBufferAttribute?y=a[M]*n.data.stride+n.offset:y=a[M]*d;for(let v=0;v<d;v++)u[S++]=h[y++]}return new VI(u,d,D)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new lI,I=this.index.array,e=this.attributes;for(const n in e){const a=e[n],h=A(a,I);g.setAttribute(n,h)}const B=this.morphAttributes;for(const n in B){const a=[],h=B[n];for(let d=0,D=h.length;d<D;d++){const u=h[d],y=A(u,I);a.push(y)}g.morphAttributes[n]=a}g.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let n=0,a=Q.length;n<a;n++){const h=Q[n];g.addGroup(h.start,h.count,h.materialIndex)}return g}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(A[h]=a[h]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const I=this.attributes;for(const a in I){const h=I[a];A.data.attributes[a]=h.toJSON(A.data)}const e={};let B=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],d=[];for(let D=0,u=h.length;D<u;D++){const y=h[D];d.push(y.toJSON(A.data))}d.length>0&&(e[a]=d,B=!0)}B&&(A.data.morphAttributes=e,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const n=this.boundingSphere;return n!==null&&(A.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const I=A.index;I!==null&&this.setIndex(I.clone(g));const e=A.attributes;for(const h in e){const d=e[h];this.setAttribute(h,d.clone(g))}const B=A.morphAttributes;for(const h in B){const d=[],D=B[h];for(let u=0,y=D.length;u<y;u++)d.push(D[u].clone(g));this.morphAttributes[h]=d}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let h=0,d=Q.length;h<d;h++){const D=Q[h];this.addGroup(D.start,D.count,D.materialIndex)}const n=A.boundingBox;n!==null&&(this.boundingBox=n.clone());const a=A.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new jt,cB=new Ni,Qo=new Pi,dh=new EA,jQ=new EA,$Q=new EA,An=new EA,Hs=new EA,no=new EA,oo=new yg,so=new yg,ao=new yg,Ts=new EA,ro=new EA;class Te extends Sg{constructor(A=new lI,g=new rC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,I=Object.keys(g);if(I.length>0){const e=g[I[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=e.length;B<Q;B++){const n=e[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=B}}}}getVertexPosition(A,g){const I=this.geometry,e=I.attributes.position,B=I.morphAttributes.position,Q=I.morphTargetsRelative;g.fromBufferAttribute(e,A);const n=this.morphTargetInfluences;if(B&&n){no.set(0,0,0);for(let a=0,h=B.length;a<h;a++){const d=n[a],D=B[a];d!==0&&(Hs.fromBufferAttribute(D,A),Q?no.addScaledVector(Hs,d):no.addScaledVector(Hs.sub(g),d))}g.add(no)}return this.isSkinnedMesh&&this.boneTransform(A,g),g}raycast(A,g){const I=this.geometry,e=this.material,B=this.matrixWorld;if(e===void 0||(I.boundingSphere===null&&I.computeBoundingSphere(),Qo.copy(I.boundingSphere),Qo.applyMatrix4(B),cB.copy(A.ray).recast(A.near),Qo.containsPoint(cB.origin)===!1&&(cB.intersectSphere(Qo,dh)===null||cB.origin.distanceToSquared(dh)>(A.far-A.near)**2))||(lh.copy(B).invert(),cB.copy(A.ray).applyMatrix4(lh),I.boundingBox!==null&&cB.intersectsBox(I.boundingBox)===!1))return;let Q;const n=I.index,a=I.attributes.position,h=I.attributes.uv,d=I.attributes.uv2,D=I.groups,u=I.drawRange;if(n!==null)if(Array.isArray(e))for(let y=0,S=D.length;y<S;y++){const M=D[y],m=e[M.materialIndex],v=Math.max(M.start,u.start),W=Math.min(n.count,Math.min(M.start+M.count,u.start+u.count));for(let b=v,T=W;b<T;b+=3){const IA=n.getX(b),nA=n.getX(b+1),wA=n.getX(b+2);Q=ho(this,m,A,cB,h,d,IA,nA,wA),Q&&(Q.faceIndex=Math.floor(b/3),Q.face.materialIndex=M.materialIndex,g.push(Q))}}else{const y=Math.max(0,u.start),S=Math.min(n.count,u.start+u.count);for(let M=y,m=S;M<m;M+=3){const v=n.getX(M),W=n.getX(M+1),b=n.getX(M+2);Q=ho(this,e,A,cB,h,d,v,W,b),Q&&(Q.faceIndex=Math.floor(M/3),g.push(Q))}}else if(a!==void 0)if(Array.isArray(e))for(let y=0,S=D.length;y<S;y++){const M=D[y],m=e[M.materialIndex],v=Math.max(M.start,u.start),W=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));for(let b=v,T=W;b<T;b+=3){const IA=b,nA=b+1,wA=b+2;Q=ho(this,m,A,cB,h,d,IA,nA,wA),Q&&(Q.faceIndex=Math.floor(b/3),Q.face.materialIndex=M.materialIndex,g.push(Q))}}else{const y=Math.max(0,u.start),S=Math.min(a.count,u.start+u.count);for(let M=y,m=S;M<m;M+=3){const v=M,W=M+1,b=M+2;Q=ho(this,e,A,cB,h,d,v,W,b),Q&&(Q.faceIndex=Math.floor(M/3),g.push(Q))}}}}function Ru(C,A,g,I,e,B,Q,n){let a;if(A.side===x?a=I.intersectTriangle(Q,B,e,!0,n):a=I.intersectTriangle(e,B,Q,A.side===J,n),a===null)return null;ro.copy(n),ro.applyMatrix4(C.matrixWorld);const h=g.ray.origin.distanceTo(ro);return h<g.near||h>g.far?null:{distance:h,point:ro.clone(),object:C}}function ho(C,A,g,I,e,B,Q,n,a){C.getVertexPosition(Q,jQ),C.getVertexPosition(n,$Q),C.getVertexPosition(a,An);const h=Ru(C,A,g,I,jQ,$Q,An,Ts);if(h){e&&(oo.fromBufferAttribute(e,Q),so.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,a),h.uv=He.getUV(Ts,jQ,$Q,An,oo,so,ao,new yg)),B&&(oo.fromBufferAttribute(B,Q),so.fromBufferAttribute(B,n),ao.fromBufferAttribute(B,a),h.uv2=He.getUV(Ts,jQ,$Q,An,oo,so,ao,new yg));const d={a:Q,b:n,c:a,normal:new EA,materialIndex:0};He.getNormal(jQ,$Q,An,d.normal),h.face=d}return h}class hC extends lI{constructor(A=1,g=1,I=1,e=1,B=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:I,widthSegments:e,heightSegments:B,depthSegments:Q};const n=this;e=Math.floor(e),B=Math.floor(B),Q=Math.floor(Q);const a=[],h=[],d=[],D=[];let u=0,y=0;S("z","y","x",-1,-1,I,g,A,Q,B,0),S("z","y","x",1,-1,I,g,-A,Q,B,1),S("x","z","y",1,1,A,I,g,e,Q,2),S("x","z","y",1,-1,A,I,-g,e,Q,3),S("x","y","z",1,-1,A,g,I,e,B,4),S("x","y","z",-1,-1,A,g,-I,e,B,5),this.setIndex(a),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(D,2));function S(M,m,v,W,b,T,IA,nA,wA,O,iA){const SA=T/wA,ig=IA/O,rg=T/2,OA=IA/2,HA=nA/2,ng=wA+1,Rg=O+1;let qg=0,wg=0;const _g=new EA;for(let Lg=0;Lg<Rg;Lg++){const Ut=Lg*ig-OA;for(let jA=0;jA<ng;jA++){const Yg=jA*SA-rg;_g[M]=Yg*W,_g[m]=Ut*b,_g[v]=HA,h.push(_g.x,_g.y,_g.z),_g[M]=0,_g[m]=0,_g[v]=nA>0?1:-1,d.push(_g.x,_g.y,_g.z),D.push(jA/wA),D.push(1-Lg/O),qg+=1}}for(let Lg=0;Lg<O;Lg++)for(let Ut=0;Ut<wA;Ut++){const jA=u+Ut+ng*Lg,Yg=u+Ut+ng*(Lg+1),Qt=u+(Ut+1)+ng*(Lg+1),GA=u+(Ut+1)+ng*Lg;a.push(jA,Yg,GA),a.push(Yg,Qt,GA),wg+=6}n.addGroup(y,wg,iA),y+=wg,u+=qg}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new hC(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function HE(C){const A={};for(const g in C){A[g]={};for(const I in C[g]){const e=C[g][I];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?A[g][I]=e.clone():Array.isArray(e)?A[g][I]=e.slice():A[g][I]=e}}return A}function ti(C){const A={};for(let g=0;g<C.length;g++){const I=HE(C[g]);for(const e in I)A[e]=I[e]}return A}function mu(C){const A=[];for(let g=0;g<C.length;g++)A.push(C[g].clone());return A}function uh(C){return C.getRenderTarget()===null&&C.outputEncoding===ft?HI:Qi}const Dh={clone:HE,merge:ti};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lB extends Ge{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=HE(A.uniforms),this.uniformsGroups=mu(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const e in this.uniforms){const Q=this.uniforms[e].value;Q&&Q.isTexture?g.uniforms[e]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?g.uniforms[e]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?g.uniforms[e]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?g.uniforms[e]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?g.uniforms[e]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?g.uniforms[e]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?g.uniforms[e]={type:"m4",value:Q.toArray()}:g.uniforms[e]={value:Q}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader;const I={};for(const e in this.extensions)this.extensions[e]===!0&&(I[e]=!0);return Object.keys(I).length>0&&(g.extensions=I),g}}class co extends Sg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends co{constructor(A=50,g=1,I=.1,e=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=I,this.far=e,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=xB*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(LB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return xB*2*Math.atan(Math.tan(LB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,g,I,e,B,Q){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=e,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(LB*.5*this.fov)/this.zoom,I=2*g,e=this.aspect*I,B=-.5*e;const Q=this.view;if(this.view!==null&&this.view.enabled){const a=Q.fullWidth,h=Q.fullHeight;B+=Q.offsetX*e/a,g-=Q.offsetY*I/h,e*=Q.width/a,I*=Q.height/h}const n=this.filmOffset;n!==0&&(B+=A*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+e,g,g-I,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const TE=-90,qE=1;class fh extends Sg{constructor(A,g,I){super(),this.type="CubeCamera",this.renderTarget=I;const e=new qe(TE,qE,A,g);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(1,0,0),this.add(e);const B=new qe(TE,qE,A,g);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const Q=new qe(TE,qE,A,g);Q.layers=this.layers,Q.up.set(0,0,-1),Q.lookAt(0,1,0),this.add(Q);const n=new qe(TE,qE,A,g);n.layers=this.layers,n.up.set(0,0,1),n.lookAt(0,-1,0),this.add(n);const a=new qe(TE,qE,A,g);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const h=new qe(TE,qE,A,g);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(A,g){this.parent===null&&this.updateMatrixWorld();const I=this.renderTarget,[e,B,Q,n,a,h]=this.children,d=A.getRenderTarget(),D=A.toneMapping,u=A.xr.enabled;A.toneMapping=fA,A.xr.enabled=!1;const y=I.texture.generateMipmaps;I.texture.generateMipmaps=!1,A.setRenderTarget(I,0),A.render(g,e),A.setRenderTarget(I,1),A.render(g,B),A.setRenderTarget(I,2),A.render(g,Q),A.setRenderTarget(I,3),A.render(g,n),A.setRenderTarget(I,4),A.render(g,a),I.texture.generateMipmaps=y,A.setRenderTarget(I,5),A.render(g,h),A.setRenderTarget(d),A.toneMapping=D,A.xr.enabled=u,I.texture.needsPMREMUpdate=!0}}class gn extends jI{constructor(A,g,I,e,B,Q,n,a,h,d){A=A!==void 0?A:[],g=g!==void 0?g:vt,super(A,g,I,e,B,Q,n,a,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class wh extends ui{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const I={width:A,height:A,depth:1},e=[I,I,I,I,I,I];this.texture=new gn(e,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Fg}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.encoding=g.encoding,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const I={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},e=new hC(5,5,5),B=new lB({name:"CubemapFromEquirect",uniforms:HE(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,side:x,blending:Z});B.uniforms.tEquirect.value=g;const Q=new Te(e,B),n=g.minFilter;return g.minFilter===It&&(g.minFilter=Fg),new fh(1,10,this).update(A,Q),g.minFilter=n,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,g,I,e){const B=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(g,I,e);A.setRenderTarget(B)}}const qs=new EA,Fu=new EA,Nu=new GI;class cC{constructor(A=new EA(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,I,e){return this.normal.set(A,g,I),this.constant=e,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,I){const e=qs.subVectors(I,g).cross(Fu.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(e,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,g){const I=A.delta(qs),e=this.normal.dot(I);if(e===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/e;return B<0||B>1?null:g.copy(A.start).addScaledVector(I,B)}intersectsLine(A){const g=this.distanceToPoint(A.start),I=this.distanceToPoint(A.end);return g<0&&I>0||I<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const I=g||Nu.getNormalMatrix(A),e=this.coplanarPoint(qs).applyMatrix4(A),B=this.normal.applyMatrix3(I).normalize();return this.constant=-e.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _E=new Pi,lo=new EA;class uo{constructor(A=new cC,g=new cC,I=new cC,e=new cC,B=new cC,Q=new cC){this.planes=[A,g,I,e,B,Q]}set(A,g,I,e,B,Q){const n=this.planes;return n[0].copy(A),n[1].copy(g),n[2].copy(I),n[3].copy(e),n[4].copy(B),n[5].copy(Q),this}copy(A){const g=this.planes;for(let I=0;I<6;I++)g[I].copy(A.planes[I]);return this}setFromProjectionMatrix(A){const g=this.planes,I=A.elements,e=I[0],B=I[1],Q=I[2],n=I[3],a=I[4],h=I[5],d=I[6],D=I[7],u=I[8],y=I[9],S=I[10],M=I[11],m=I[12],v=I[13],W=I[14],b=I[15];return g[0].setComponents(n-e,D-a,M-u,b-m).normalize(),g[1].setComponents(n+e,D+a,M+u,b+m).normalize(),g[2].setComponents(n+B,D+h,M+y,b+v).normalize(),g[3].setComponents(n-B,D-h,M-y,b-v).normalize(),g[4].setComponents(n-Q,D-d,M-S,b-W).normalize(),g[5].setComponents(n+Q,D+d,M+S,b+W).normalize(),this}intersectsObject(A){const g=A.geometry;return g.boundingSphere===null&&g.computeBoundingSphere(),_E.copy(g.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(_E)}intersectsSprite(A){return _E.center.set(0,0,0),_E.radius=.7071067811865476,_E.applyMatrix4(A.matrixWorld),this.intersectsSphere(_E)}intersectsSphere(A){const g=this.planes,I=A.center,e=-A.radius;for(let B=0;B<6;B++)if(g[B].distanceToPoint(I)<e)return!1;return!0}intersectsBox(A){const g=this.planes;for(let I=0;I<6;I++){const e=g[I];if(lo.x=e.normal.x>0?A.max.x:A.min.x,lo.y=e.normal.y>0?A.max.y:A.min.y,lo.z=e.normal.z>0?A.max.z:A.min.z,e.distanceToPoint(lo)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let I=0;I<6;I++)if(g[I].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let C=null,A=!1,g=null,I=null;function e(B,Q){g(B,Q),I=C.requestAnimationFrame(e)}return{start:function(){A!==!0&&g!==null&&(I=C.requestAnimationFrame(e),A=!0)},stop:function(){C.cancelAnimationFrame(I),A=!1},setAnimationLoop:function(B){g=B},setContext:function(B){C=B}}}function Uu(C,A){const g=A.isWebGL2,I=new WeakMap;function e(h,d){const D=h.array,u=h.usage,y=C.createBuffer();C.bindBuffer(d,y),C.bufferData(d,D,u),h.onUploadCallback();let S;if(D instanceof Float32Array)S=C.FLOAT;else if(D instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(g)S=C.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=C.UNSIGNED_SHORT;else if(D instanceof Int16Array)S=C.SHORT;else if(D instanceof Uint32Array)S=C.UNSIGNED_INT;else if(D instanceof Int32Array)S=C.INT;else if(D instanceof Int8Array)S=C.BYTE;else if(D instanceof Uint8Array)S=C.UNSIGNED_BYTE;else if(D instanceof Uint8ClampedArray)S=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+D);return{buffer:y,type:S,bytesPerElement:D.BYTES_PER_ELEMENT,version:h.version}}function B(h,d,D){const u=d.array,y=d.updateRange;C.bindBuffer(D,h),y.count===-1?C.bufferSubData(D,0,u):(g?C.bufferSubData(D,y.offset*u.BYTES_PER_ELEMENT,u,y.offset,y.count):C.bufferSubData(D,y.offset*u.BYTES_PER_ELEMENT,u.subarray(y.offset,y.offset+y.count)),y.count=-1),d.onUploadCallback()}function Q(h){return h.isInterleavedBufferAttribute&&(h=h.data),I.get(h)}function n(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=I.get(h);d&&(C.deleteBuffer(d.buffer),I.delete(h))}function a(h,d){if(h.isGLBufferAttribute){const u=I.get(h);(!u||u.version<h.version)&&I.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const D=I.get(h);D===void 0?I.set(h,e(h,d)):D.version<h.version&&(B(D.buffer,h,d),D.version=h.version)}return{get:Q,remove:n,update:a}}class WE extends lI{constructor(A=1,g=1,I=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:I,heightSegments:e};const B=A/2,Q=g/2,n=Math.floor(I),a=Math.floor(e),h=n+1,d=a+1,D=A/n,u=g/a,y=[],S=[],M=[],m=[];for(let v=0;v<d;v++){const W=v*u-Q;for(let b=0;b<h;b++){const T=b*D-B;S.push(T,-W,0),M.push(0,0,1),m.push(b/n),m.push(1-v/a)}}for(let v=0;v<a;v++)for(let W=0;W<n;W++){const b=W+h*v,T=W+h*(v+1),IA=W+1+h*(v+1),nA=W+1+h*v;y.push(b,T,nA),y.push(T,IA,nA)}this.setIndex(y),this.setAttribute("position",new Ft(S,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(m,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new WE(A.width,A.height,A.widthSegments,A.heightSegments)}}var ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu="vec3 transformed = vec3( position );",vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Tu=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,AD=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ID=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iD="gl_FragColor = linearToOutputTexel( gl_FragColor );",BD=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CD=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ED=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QD=`#ifdef USE_ENVMAP
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
#endif`,nD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oD=`#ifdef USE_ENVMAP
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
#endif`,sD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cD=`#ifdef USE_GRADIENTMAP
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
}`,lD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,wD=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,SD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,GD=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ND=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,UD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_D=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,OD=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$D=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Mf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aI={alphamap_fragment:ku,alphamap_pars_fragment:Lu,alphatest_fragment:xu,alphatest_pars_fragment:Ju,aomap_fragment:bu,aomap_pars_fragment:Ku,begin_vertex:Yu,beginnormal_vertex:vu,bsdfs:Hu,iridescence_fragment:Tu,bumpmap_pars_fragment:qu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Ou,color_fragment:Vu,color_pars_fragment:Zu,color_pars_vertex:Xu,color_vertex:zu,common:ju,cube_uv_reflection_fragment:$u,defaultnormal_vertex:AD,displacementmap_pars_vertex:gD,displacementmap_vertex:tD,emissivemap_fragment:ID,emissivemap_pars_fragment:eD,encodings_fragment:iD,encodings_pars_fragment:BD,envmap_fragment:CD,envmap_common_pars_fragment:ED,envmap_pars_fragment:QD,envmap_pars_vertex:nD,envmap_physical_pars_fragment:wD,envmap_vertex:oD,fog_vertex:sD,fog_pars_vertex:aD,fog_fragment:rD,fog_pars_fragment:hD,gradientmap_pars_fragment:cD,lightmap_fragment:lD,lightmap_pars_fragment:dD,lights_lambert_fragment:uD,lights_lambert_pars_fragment:DD,lights_pars_begin:fD,lights_toon_fragment:pD,lights_toon_pars_fragment:yD,lights_phong_fragment:MD,lights_phong_pars_fragment:RD,lights_physical_fragment:mD,lights_physical_pars_fragment:SD,lights_fragment_begin:GD,lights_fragment_maps:FD,lights_fragment_end:ND,logdepthbuf_fragment:UD,logdepthbuf_pars_fragment:kD,logdepthbuf_pars_vertex:LD,logdepthbuf_vertex:xD,map_fragment:JD,map_pars_fragment:bD,map_particle_fragment:KD,map_particle_pars_fragment:YD,metalnessmap_fragment:vD,metalnessmap_pars_fragment:HD,morphcolor_vertex:TD,morphnormal_vertex:qD,morphtarget_pars_vertex:_D,morphtarget_vertex:WD,normal_fragment_begin:PD,normal_fragment_maps:OD,normal_pars_fragment:VD,normal_pars_vertex:ZD,normal_vertex:XD,normalmap_pars_fragment:zD,clearcoat_normal_fragment_begin:jD,clearcoat_normal_fragment_maps:$D,clearcoat_pars_fragment:Af,iridescence_pars_fragment:gf,output_fragment:tf,packing:If,premultiplied_alpha_fragment:ef,project_vertex:Bf,dithering_fragment:Cf,dithering_pars_fragment:Ef,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:sf,shadowmap_vertex:af,shadowmask_pars_fragment:rf,skinbase_vertex:hf,skinning_pars_vertex:cf,skinning_vertex:lf,skinnormal_vertex:df,specularmap_fragment:uf,specularmap_pars_fragment:Df,tonemapping_fragment:ff,tonemapping_pars_fragment:wf,transmission_fragment:pf,transmission_pars_fragment:yf,uv_pars_fragment:Mf,uv_pars_vertex:Rf,uv_vertex:mf,uv2_pars_fragment:Sf,uv2_pars_vertex:Gf,uv2_vertex:Ff,worldpos_vertex:Nf,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},Bt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new GI},uv2Transform:{value:new GI},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yg(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new GI}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new yg(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new GI}}},zi={basic:{uniforms:ti([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:aI.meshbasic_vert,fragmentShader:aI.meshbasic_frag},lambert:{uniforms:ti([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:aI.meshlambert_vert,fragmentShader:aI.meshlambert_frag},phong:{uniforms:ti([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:aI.meshphong_vert,fragmentShader:aI.meshphong_frag},standard:{uniforms:ti([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:aI.meshphysical_vert,fragmentShader:aI.meshphysical_frag},toon:{uniforms:ti([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:aI.meshtoon_vert,fragmentShader:aI.meshtoon_frag},matcap:{uniforms:ti([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:aI.meshmatcap_vert,fragmentShader:aI.meshmatcap_frag},points:{uniforms:ti([Bt.points,Bt.fog]),vertexShader:aI.points_vert,fragmentShader:aI.points_frag},dashed:{uniforms:ti([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:aI.linedashed_vert,fragmentShader:aI.linedashed_frag},depth:{uniforms:ti([Bt.common,Bt.displacementmap]),vertexShader:aI.depth_vert,fragmentShader:aI.depth_frag},normal:{uniforms:ti([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:aI.meshnormal_vert,fragmentShader:aI.meshnormal_frag},sprite:{uniforms:ti([Bt.sprite,Bt.fog]),vertexShader:aI.sprite_vert,fragmentShader:aI.sprite_frag},background:{uniforms:{uvTransform:{value:new GI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:aI.background_vert,fragmentShader:aI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:aI.backgroundCube_vert,fragmentShader:aI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:aI.cube_vert,fragmentShader:aI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:aI.equirect_vert,fragmentShader:aI.equirect_frag},distanceRGBA:{uniforms:ti([Bt.common,Bt.displacementmap,{referencePosition:{value:new EA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:aI.distanceRGBA_vert,fragmentShader:aI.distanceRGBA_frag},shadow:{uniforms:ti([Bt.lights,Bt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:aI.shadow_vert,fragmentShader:aI.shadow_frag}};zi.physical={uniforms:ti([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yg(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new yg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:aI.meshphysical_vert,fragmentShader:aI.meshphysical_frag};const Do={r:0,b:0,g:0};function Uf(C,A,g,I,e,B,Q){const n=new Dt(0);let a=B===!0?0:1,h,d,D=null,u=0,y=null;function S(m,v){let W=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?g:A).get(b));const T=C.xr,IA=T.getSession&&T.getSession();IA&&IA.environmentBlendMode==="additive"&&(b=null),b===null?M(n,a):b&&b.isColor&&(M(b,1),W=!0),(C.autoClear||W)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),b&&(b.isCubeTexture||b.mapping===YA)?(d===void 0&&(d=new Te(new hC(1,1,1),new lB({name:"BackgroundCubeMaterial",uniforms:HE(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:x,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(nA,wA,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),e.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=b.encoding!==ft,(D!==b||u!==b.version||y!==C.toneMapping)&&(d.material.needsUpdate=!0,D=b,u=b.version,y=C.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Te(new WE(2,2),new lB({name:"BackgroundMaterial",uniforms:HE(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:J,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),e.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=b.encoding!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(D!==b||u!==b.version||y!==C.toneMapping)&&(h.material.needsUpdate=!0,D=b,u=b.version,y=C.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function M(m,v){m.getRGB(Do,uh(C)),I.buffers.color.setClear(Do.r,Do.g,Do.b,v,Q)}return{getClearColor:function(){return n},setClearColor:function(m,v=1){n.set(m),a=v,M(n,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,M(n,a)},render:S}}function kf(C,A,g,I){const e=C.getParameter(C.MAX_VERTEX_ATTRIBS),B=I.isWebGL2?null:A.get("OES_vertex_array_object"),Q=I.isWebGL2||B!==null,n={},a=m(null);let h=a,d=!1;function D(HA,ng,Rg,qg,wg){let _g=!1;if(Q){const Lg=M(qg,Rg,ng);h!==Lg&&(h=Lg,y(h.object)),_g=v(HA,qg,Rg,wg),_g&&W(HA,qg,Rg,wg)}else{const Lg=ng.wireframe===!0;(h.geometry!==qg.id||h.program!==Rg.id||h.wireframe!==Lg)&&(h.geometry=qg.id,h.program=Rg.id,h.wireframe=Lg,_g=!0)}wg!==null&&g.update(wg,C.ELEMENT_ARRAY_BUFFER),(_g||d)&&(d=!1,O(HA,ng,Rg,qg),wg!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,g.get(wg).buffer))}function u(){return I.isWebGL2?C.createVertexArray():B.createVertexArrayOES()}function y(HA){return I.isWebGL2?C.bindVertexArray(HA):B.bindVertexArrayOES(HA)}function S(HA){return I.isWebGL2?C.deleteVertexArray(HA):B.deleteVertexArrayOES(HA)}function M(HA,ng,Rg){const qg=Rg.wireframe===!0;let wg=n[HA.id];wg===void 0&&(wg={},n[HA.id]=wg);let _g=wg[ng.id];_g===void 0&&(_g={},wg[ng.id]=_g);let Lg=_g[qg];return Lg===void 0&&(Lg=m(u()),_g[qg]=Lg),Lg}function m(HA){const ng=[],Rg=[],qg=[];for(let wg=0;wg<e;wg++)ng[wg]=0,Rg[wg]=0,qg[wg]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ng,enabledAttributes:Rg,attributeDivisors:qg,object:HA,attributes:{},index:null}}function v(HA,ng,Rg,qg){const wg=h.attributes,_g=ng.attributes;let Lg=0;const Ut=Rg.getAttributes();for(const jA in Ut)if(Ut[jA].location>=0){const Qt=wg[jA];let GA=_g[jA];if(GA===void 0&&(jA==="instanceMatrix"&&HA.instanceMatrix&&(GA=HA.instanceMatrix),jA==="instanceColor"&&HA.instanceColor&&(GA=HA.instanceColor)),Qt===void 0||Qt.attribute!==GA||GA&&Qt.data!==GA.data)return!0;Lg++}return h.attributesNum!==Lg||h.index!==qg}function W(HA,ng,Rg,qg){const wg={},_g=ng.attributes;let Lg=0;const Ut=Rg.getAttributes();for(const jA in Ut)if(Ut[jA].location>=0){let Qt=_g[jA];Qt===void 0&&(jA==="instanceMatrix"&&HA.instanceMatrix&&(Qt=HA.instanceMatrix),jA==="instanceColor"&&HA.instanceColor&&(Qt=HA.instanceColor));const GA={};GA.attribute=Qt,Qt&&Qt.data&&(GA.data=Qt.data),wg[jA]=GA,Lg++}h.attributes=wg,h.attributesNum=Lg,h.index=qg}function b(){const HA=h.newAttributes;for(let ng=0,Rg=HA.length;ng<Rg;ng++)HA[ng]=0}function T(HA){IA(HA,0)}function IA(HA,ng){const Rg=h.newAttributes,qg=h.enabledAttributes,wg=h.attributeDivisors;Rg[HA]=1,qg[HA]===0&&(C.enableVertexAttribArray(HA),qg[HA]=1),wg[HA]!==ng&&((I.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[I.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](HA,ng),wg[HA]=ng)}function nA(){const HA=h.newAttributes,ng=h.enabledAttributes;for(let Rg=0,qg=ng.length;Rg<qg;Rg++)ng[Rg]!==HA[Rg]&&(C.disableVertexAttribArray(Rg),ng[Rg]=0)}function wA(HA,ng,Rg,qg,wg,_g){I.isWebGL2===!0&&(Rg===C.INT||Rg===C.UNSIGNED_INT)?C.vertexAttribIPointer(HA,ng,Rg,wg,_g):C.vertexAttribPointer(HA,ng,Rg,qg,wg,_g)}function O(HA,ng,Rg,qg){if(I.isWebGL2===!1&&(HA.isInstancedMesh||qg.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;b();const wg=qg.attributes,_g=Rg.getAttributes(),Lg=ng.defaultAttributeValues;for(const Ut in _g){const jA=_g[Ut];if(jA.location>=0){let Yg=wg[Ut];if(Yg===void 0&&(Ut==="instanceMatrix"&&HA.instanceMatrix&&(Yg=HA.instanceMatrix),Ut==="instanceColor"&&HA.instanceColor&&(Yg=HA.instanceColor)),Yg!==void 0){const Qt=Yg.normalized,GA=Yg.itemSize,Gt=g.get(Yg);if(Gt===void 0)continue;const rt=Gt.buffer,mt=Gt.type,kt=Gt.bytesPerElement;if(Yg.isInterleavedBufferAttribute){const bt=Yg.data,AI=bt.stride,Mg=Yg.offset;if(bt.isInstancedInterleavedBuffer){for(let Ug=0;Ug<jA.locationSize;Ug++)IA(jA.location+Ug,bt.meshPerAttribute);HA.isInstancedMesh!==!0&&qg._maxInstanceCount===void 0&&(qg._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ug=0;Ug<jA.locationSize;Ug++)T(jA.location+Ug);C.bindBuffer(C.ARRAY_BUFFER,rt);for(let Ug=0;Ug<jA.locationSize;Ug++)wA(jA.location+Ug,GA/jA.locationSize,mt,Qt,AI*kt,(Mg+GA/jA.locationSize*Ug)*kt)}else{if(Yg.isInstancedBufferAttribute){for(let bt=0;bt<jA.locationSize;bt++)IA(jA.location+bt,Yg.meshPerAttribute);HA.isInstancedMesh!==!0&&qg._maxInstanceCount===void 0&&(qg._maxInstanceCount=Yg.meshPerAttribute*Yg.count)}else for(let bt=0;bt<jA.locationSize;bt++)T(jA.location+bt);C.bindBuffer(C.ARRAY_BUFFER,rt);for(let bt=0;bt<jA.locationSize;bt++)wA(jA.location+bt,GA/jA.locationSize,mt,Qt,GA*kt,GA/jA.locationSize*bt*kt)}}else if(Lg!==void 0){const Qt=Lg[Ut];if(Qt!==void 0)switch(Qt.length){case 2:C.vertexAttrib2fv(jA.location,Qt);break;case 3:C.vertexAttrib3fv(jA.location,Qt);break;case 4:C.vertexAttrib4fv(jA.location,Qt);break;default:C.vertexAttrib1fv(jA.location,Qt)}}}}nA()}function iA(){rg();for(const HA in n){const ng=n[HA];for(const Rg in ng){const qg=ng[Rg];for(const wg in qg)S(qg[wg].object),delete qg[wg];delete ng[Rg]}delete n[HA]}}function SA(HA){if(n[HA.id]===void 0)return;const ng=n[HA.id];for(const Rg in ng){const qg=ng[Rg];for(const wg in qg)S(qg[wg].object),delete qg[wg];delete ng[Rg]}delete n[HA.id]}function ig(HA){for(const ng in n){const Rg=n[ng];if(Rg[HA.id]===void 0)continue;const qg=Rg[HA.id];for(const wg in qg)S(qg[wg].object),delete qg[wg];delete Rg[HA.id]}}function rg(){OA(),d=!0,h!==a&&(h=a,y(h.object))}function OA(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:D,reset:rg,resetDefaultState:OA,dispose:iA,releaseStatesOfGeometry:SA,releaseStatesOfProgram:ig,initAttributes:b,enableAttribute:T,disableUnusedAttributes:nA}}function Lf(C,A,g,I){const e=I.isWebGL2;let B;function Q(h){B=h}function n(h,d){C.drawArrays(B,h,d),g.update(d,B,1)}function a(h,d,D){if(D===0)return;let u,y;if(e)u=C,y="drawArraysInstanced";else if(u=A.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](B,h,d,D),g.update(d,B,D)}this.setMode=Q,this.render=n,this.renderInstances=a}function xf(C,A,g){let I;function e(){if(I!==void 0)return I;if(A.has("EXT_texture_filter_anisotropic")===!0){const wA=A.get("EXT_texture_filter_anisotropic");I=C.getParameter(wA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else I=0;return I}function B(wA){if(wA==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";wA="mediump"}return wA==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const Q=typeof WebGL2RenderingContext<"u"&&C instanceof WebGL2RenderingContext;let n=g.precision!==void 0?g.precision:"highp";const a=B(n);a!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",a,"instead."),n=a);const h=Q||A.has("WEBGL_draw_buffers"),d=g.logarithmicDepthBuffer===!0,D=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),u=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=C.getParameter(C.MAX_TEXTURE_SIZE),S=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),M=C.getParameter(C.MAX_VERTEX_ATTRIBS),m=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),v=C.getParameter(C.MAX_VARYING_VECTORS),W=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,T=Q||A.has("OES_texture_float"),IA=b&&T,nA=Q?C.getParameter(C.MAX_SAMPLES):0;return{isWebGL2:Q,drawBuffers:h,getMaxAnisotropy:e,getMaxPrecision:B,precision:n,logarithmicDepthBuffer:d,maxTextures:D,maxVertexTextures:u,maxTextureSize:y,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:W,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:IA,maxSamples:nA}}function Jf(C){const A=this;let g=null,I=0,e=!1,B=!1;const Q=new cC,n=new GI,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(D,u){const y=D.length!==0||u||I!==0||e;return e=u,I=D.length,y},this.beginShadows=function(){B=!0,d(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(D,u){g=d(D,u,0)},this.setState=function(D,u,y){const S=D.clippingPlanes,M=D.clipIntersection,m=D.clipShadows,v=C.get(D);if(!e||S===null||S.length===0||B&&!m)B?d(null):h();else{const W=B?0:I,b=W*4;let T=v.clippingState||null;a.value=T,T=d(S,u,b,y);for(let IA=0;IA!==b;++IA)T[IA]=g[IA];v.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=W}};function h(){a.value!==g&&(a.value=g,a.needsUpdate=I>0),A.numPlanes=I,A.numIntersection=0}function d(D,u,y,S){const M=D!==null?D.length:0;let m=null;if(M!==0){if(m=a.value,S!==!0||m===null){const v=y+M*4,W=u.matrixWorldInverse;n.getNormalMatrix(W),(m===null||m.length<v)&&(m=new Float32Array(v));for(let b=0,T=y;b!==M;++b,T+=4)Q.copy(D[b]).applyMatrix4(W,n),Q.normal.toArray(m,T),m[T+3]=Q.constant}a.value=m,a.needsUpdate=!0}return A.numPlanes=M,A.numIntersection=0,m}}function bf(C){let A=new WeakMap;function g(Q,n){return n===q?Q.mapping=vt:n===P&&(Q.mapping=gt),Q}function I(Q){if(Q&&Q.isTexture&&Q.isRenderTargetTexture===!1){const n=Q.mapping;if(n===q||n===P)if(A.has(Q)){const a=A.get(Q).texture;return g(a,Q.mapping)}else{const a=Q.image;if(a&&a.height>0){const h=new wh(a.height/2);return h.fromEquirectangularTexture(C,Q),A.set(Q,h),Q.addEventListener("dispose",e),g(h.texture,Q.mapping)}else return null}}return Q}function e(Q){const n=Q.target;n.removeEventListener("dispose",e);const a=A.get(n);a!==void 0&&(A.delete(n),a.dispose())}function B(){A=new WeakMap}return{get:I,dispose:B}}class fo extends co{constructor(A=-1,g=1,I=1,e=-1,B=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=I,this.bottom=e,this.near=B,this.far=Q,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,I,e,B,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=e,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),I=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let B=I-A,Q=I+A,n=e+g,a=e-g;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=h*this.view.offsetX,Q=B+h*this.view.width,n-=d*this.view.offsetY,a=n-d*this.view.height}this.projectionMatrix.makeOrthographic(B,Q,n,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const PE=4,yh=[.125,.215,.35,.446,.526,.582],WC=20,_s=new fo,Mh=new Dt;let Ws=null;const PC=(1+Math.sqrt(5))/2,OE=1/PC,Rh=[new EA(1,1,1),new EA(-1,1,1),new EA(1,1,-1),new EA(-1,1,-1),new EA(0,PC,OE),new EA(0,PC,-OE),new EA(OE,0,PC),new EA(-OE,0,PC),new EA(PC,OE,0),new EA(-PC,OE,0)];class Ps{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,I=.1,e=100){Ws=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,I,e,B),g>0&&this._blur(B,0,0,g),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Ws),A.scissorTest=!1,wo(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===vt||A.mapping===gt?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Ws=this._renderer.getRenderTarget();const I=g||this._allocateTargets();return this._textureToCubeUV(A,I),this._applyPMREM(I),this._cleanup(I),I}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,I={magFilter:Fg,minFilter:Fg,generateMipmaps:!1,type:Hg,format:OI,encoding:Rt,depthBuffer:!1},e=mh(A,g,I);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(A,g,I);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(B)),this._blurMaterial=Yf(B,A,g)}return e}_compileMaterial(A){const g=new Te(this._lodPlanes[0],A);this._renderer.compile(g,_s)}_sceneToCubeUV(A,g,I,e){const n=new qe(90,1,g,I),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,D=d.autoClear,u=d.toneMapping;d.getClearColor(Mh),d.toneMapping=fA,d.autoClear=!1;const y=new rC({name:"PMREM.Background",side:x,depthWrite:!1,depthTest:!1}),S=new Te(new hC,y);let M=!1;const m=A.background;m?m.isColor&&(y.color.copy(m),A.background=null,M=!0):(y.color.copy(Mh),M=!0);for(let v=0;v<6;v++){const W=v%3;W===0?(n.up.set(0,a[v],0),n.lookAt(h[v],0,0)):W===1?(n.up.set(0,0,a[v]),n.lookAt(0,h[v],0)):(n.up.set(0,a[v],0),n.lookAt(0,0,h[v]));const b=this._cubeSize;wo(e,W*b,v>2?b:0,b,b),d.setRenderTarget(e),M&&d.render(S,n),d.render(A,n)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=u,d.autoClear=D,A.background=m}_textureToCubeUV(A,g){const I=this._renderer,e=A.mapping===vt||A.mapping===gt;e?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const B=e?this._cubemapMaterial:this._equirectMaterial,Q=new Te(this._lodPlanes[0],B),n=B.uniforms;n.envMap.value=A;const a=this._cubeSize;wo(g,0,0,3*a,2*a),I.setRenderTarget(g),I.render(Q,_s)}_applyPMREM(A){const g=this._renderer,I=g.autoClear;g.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const B=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),Q=Rh[(e-1)%Rh.length];this._blur(A,e-1,e,B,Q)}g.autoClear=I}_blur(A,g,I,e,B){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,g,I,e,"latitudinal",B),this._halfBlur(Q,A,I,I,e,"longitudinal",B)}_halfBlur(A,g,I,e,B,Q,n){const a=this._renderer,h=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,D=new Te(this._lodPlanes[e],h),u=h.uniforms,y=this._sizeLods[I]-1,S=isFinite(B)?Math.PI/(2*y):2*Math.PI/(2*WC-1),M=B/S,m=isFinite(B)?1+Math.floor(d*M):WC;m>WC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${WC}`);const v=[];let W=0;for(let wA=0;wA<WC;++wA){const O=wA/M,iA=Math.exp(-O*O/2);v.push(iA),wA===0?W+=iA:wA<m&&(W+=2*iA)}for(let wA=0;wA<v.length;wA++)v[wA]=v[wA]/W;u.envMap.value=A.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=Q==="latitudinal",n&&(u.poleAxis.value=n);const{_lodMax:b}=this;u.dTheta.value=S,u.mipInt.value=b-I;const T=this._sizeLods[e],IA=3*T*(e>b-PE?e-b+PE:0),nA=4*(this._cubeSize-T);wo(g,IA,nA,3*T,2*T),a.setRenderTarget(g),a.render(D,_s)}}function Kf(C){const A=[],g=[],I=[];let e=C;const B=C-PE+1+yh.length;for(let Q=0;Q<B;Q++){const n=Math.pow(2,e);g.push(n);let a=1/n;Q>C-PE?a=yh[Q-C+PE-1]:Q===0&&(a=0),I.push(a);const h=1/(n-2),d=-h,D=1+h,u=[d,d,D,d,D,D,d,d,D,D,d,D],y=6,S=6,M=3,m=2,v=1,W=new Float32Array(M*S*y),b=new Float32Array(m*S*y),T=new Float32Array(v*S*y);for(let nA=0;nA<y;nA++){const wA=nA%3*2/3-1,O=nA>2?0:-1,iA=[wA,O,0,wA+2/3,O,0,wA+2/3,O+1,0,wA,O,0,wA+2/3,O+1,0,wA,O+1,0];W.set(iA,M*S*nA),b.set(u,m*S*nA);const SA=[nA,nA,nA,nA,nA,nA];T.set(SA,v*S*nA)}const IA=new lI;IA.setAttribute("position",new VI(W,M)),IA.setAttribute("uv",new VI(b,m)),IA.setAttribute("faceIndex",new VI(T,v)),A.push(IA),e>PE&&e--}return{lodPlanes:A,sizeLods:g,sigmas:I}}function mh(C,A,g){const I=new ui(C,A,g);return I.texture.mapping=YA,I.texture.name="PMREM.cubeUv",I.scissorTest=!0,I}function wo(C,A,g,I,e){C.viewport.set(A,g,I,e),C.scissor.set(A,g,I,e)}function Yf(C,A,g){const I=new Float32Array(WC),e=new EA(0,1,0);return new lB({name:"SphericalGaussianBlur",defines:{n:WC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:I},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:Os(),fragmentShader:`

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
		`,blending:Z,depthTest:!1,depthWrite:!1})}function Sh(){return new lB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

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
		`,blending:Z,depthTest:!1,depthWrite:!1})}function Gh(){return new lB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Z,depthTest:!1,depthWrite:!1})}function Os(){return`

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
	`}function vf(C){let A=new WeakMap,g=null;function I(n){if(n&&n.isTexture){const a=n.mapping,h=a===q||a===P,d=a===vt||a===gt;if(h||d)if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let D=A.get(n);return g===null&&(g=new Ps(C)),D=h?g.fromEquirectangular(n,D):g.fromCubemap(n,D),A.set(n,D),D.texture}else{if(A.has(n))return A.get(n).texture;{const D=n.image;if(h&&D&&D.height>0||d&&D&&e(D)){g===null&&(g=new Ps(C));const u=h?g.fromEquirectangular(n):g.fromCubemap(n);return A.set(n,u),n.addEventListener("dispose",B),u.texture}else return null}}}return n}function e(n){let a=0;const h=6;for(let d=0;d<h;d++)n[d]!==void 0&&a++;return a===h}function B(n){const a=n.target;a.removeEventListener("dispose",B);const h=A.get(a);h!==void 0&&(A.delete(a),h.dispose())}function Q(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:I,dispose:Q}}function Hf(C){const A={};function g(I){if(A[I]!==void 0)return A[I];let e;switch(I){case"WEBGL_depth_texture":e=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=C.getExtension(I)}return A[I]=e,e}return{has:function(I){return g(I)!==null},init:function(I){I.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(I){const e=g(I);return e===null&&console.warn("THREE.WebGLRenderer: "+I+" extension not supported."),e}}}function Tf(C,A,g,I){const e={},B=new WeakMap;function Q(D){const u=D.target;u.index!==null&&A.remove(u.index);for(const S in u.attributes)A.remove(u.attributes[S]);u.removeEventListener("dispose",Q),delete e[u.id];const y=B.get(u);y&&(A.remove(y),B.delete(u)),I.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,g.memory.geometries--}function n(D,u){return e[u.id]===!0||(u.addEventListener("dispose",Q),e[u.id]=!0,g.memory.geometries++),u}function a(D){const u=D.attributes;for(const S in u)A.update(u[S],C.ARRAY_BUFFER);const y=D.morphAttributes;for(const S in y){const M=y[S];for(let m=0,v=M.length;m<v;m++)A.update(M[m],C.ARRAY_BUFFER)}}function h(D){const u=[],y=D.index,S=D.attributes.position;let M=0;if(y!==null){const W=y.array;M=y.version;for(let b=0,T=W.length;b<T;b+=3){const IA=W[b+0],nA=W[b+1],wA=W[b+2];u.push(IA,nA,nA,wA,wA,IA)}}else{const W=S.array;M=S.version;for(let b=0,T=W.length/3-1;b<T;b+=3){const IA=b+0,nA=b+1,wA=b+2;u.push(IA,nA,nA,wA,wA,IA)}}const m=new(SI(u)?Ys:Ks)(u,1);m.version=M;const v=B.get(D);v&&A.remove(v),B.set(D,m)}function d(D){const u=B.get(D);if(u){const y=D.index;y!==null&&u.version<y.version&&h(D)}else h(D);return B.get(D)}return{get:n,update:a,getWireframeAttribute:d}}function qf(C,A,g,I){const e=I.isWebGL2;let B;function Q(u){B=u}let n,a;function h(u){n=u.type,a=u.bytesPerElement}function d(u,y){C.drawElements(B,y,n,u*a),g.update(y,B,1)}function D(u,y,S){if(S===0)return;let M,m;if(e)M=C,m="drawElementsInstanced";else if(M=A.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[m](B,y,n,u*a,S),g.update(y,B,S)}this.setMode=Q,this.setIndex=h,this.render=d,this.renderInstances=D}function _f(C){const A={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function I(B,Q,n){switch(g.calls++,Q){case C.TRIANGLES:g.triangles+=n*(B/3);break;case C.LINES:g.lines+=n*(B/2);break;case C.LINE_STRIP:g.lines+=n*(B-1);break;case C.LINE_LOOP:g.lines+=n*B;break;case C.POINTS:g.points+=n*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function e(){g.frame++,g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:A,render:g,programs:null,autoReset:!0,reset:e,update:I}}function Wf(C,A){return C[0]-A[0]}function Pf(C,A){return Math.abs(A[1])-Math.abs(C[1])}function Of(C,A,g){const I={},e=new Float32Array(8),B=new WeakMap,Q=new cI,n=[];for(let h=0;h<8;h++)n[h]=[h,0];function a(h,d,D){const u=h.morphTargetInfluences;if(A.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=S!==void 0?S.length:0;let m=B.get(d);if(m===void 0||m.count!==M){let ng=function(){OA.dispose(),B.delete(d),d.removeEventListener("dispose",ng)};var y=ng;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,IA=d.morphAttributes.color!==void 0,nA=d.morphAttributes.position||[],wA=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let iA=0;b===!0&&(iA=1),T===!0&&(iA=2),IA===!0&&(iA=3);let SA=d.attributes.position.count*iA,ig=1;SA>A.maxTextureSize&&(ig=Math.ceil(SA/A.maxTextureSize),SA=A.maxTextureSize);const rg=new Float32Array(SA*ig*4*M),OA=new We(rg,SA,ig,M);OA.type=At,OA.needsUpdate=!0;const HA=iA*4;for(let Rg=0;Rg<M;Rg++){const qg=nA[Rg],wg=wA[Rg],_g=O[Rg],Lg=SA*ig*4*Rg;for(let Ut=0;Ut<qg.count;Ut++){const jA=Ut*HA;b===!0&&(Q.fromBufferAttribute(qg,Ut),rg[Lg+jA+0]=Q.x,rg[Lg+jA+1]=Q.y,rg[Lg+jA+2]=Q.z,rg[Lg+jA+3]=0),T===!0&&(Q.fromBufferAttribute(wg,Ut),rg[Lg+jA+4]=Q.x,rg[Lg+jA+5]=Q.y,rg[Lg+jA+6]=Q.z,rg[Lg+jA+7]=0),IA===!0&&(Q.fromBufferAttribute(_g,Ut),rg[Lg+jA+8]=Q.x,rg[Lg+jA+9]=Q.y,rg[Lg+jA+10]=Q.z,rg[Lg+jA+11]=_g.itemSize===4?Q.w:1)}}m={count:M,texture:OA,size:new yg(SA,ig)},B.set(d,m),d.addEventListener("dispose",ng)}let v=0;for(let b=0;b<u.length;b++)v+=u[b];const W=d.morphTargetsRelative?1:1-v;D.getUniforms().setValue(C,"morphTargetBaseInfluence",W),D.getUniforms().setValue(C,"morphTargetInfluences",u),D.getUniforms().setValue(C,"morphTargetsTexture",m.texture,g),D.getUniforms().setValue(C,"morphTargetsTextureSize",m.size)}else{const S=u===void 0?0:u.length;let M=I[d.id];if(M===void 0||M.length!==S){M=[];for(let T=0;T<S;T++)M[T]=[T,0];I[d.id]=M}for(let T=0;T<S;T++){const IA=M[T];IA[0]=T,IA[1]=u[T]}M.sort(Pf);for(let T=0;T<8;T++)T<S&&M[T][1]?(n[T][0]=M[T][0],n[T][1]=M[T][1]):(n[T][0]=Number.MAX_SAFE_INTEGER,n[T][1]=0);n.sort(Wf);const m=d.morphAttributes.position,v=d.morphAttributes.normal;let W=0;for(let T=0;T<8;T++){const IA=n[T],nA=IA[0],wA=IA[1];nA!==Number.MAX_SAFE_INTEGER&&wA?(m&&d.getAttribute("morphTarget"+T)!==m[nA]&&d.setAttribute("morphTarget"+T,m[nA]),v&&d.getAttribute("morphNormal"+T)!==v[nA]&&d.setAttribute("morphNormal"+T,v[nA]),e[T]=wA,W+=wA):(m&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),v&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),e[T]=0)}const b=d.morphTargetsRelative?1:1-W;D.getUniforms().setValue(C,"morphTargetBaseInfluence",b),D.getUniforms().setValue(C,"morphTargetInfluences",e)}}return{update:a}}function Vf(C,A,g,I){let e=new WeakMap;function B(a){const h=I.render.frame,d=a.geometry,D=A.get(a,d);return e.get(D)!==h&&(A.update(D),e.set(D,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",n)===!1&&a.addEventListener("dispose",n),g.update(a.instanceMatrix,C.ARRAY_BUFFER),a.instanceColor!==null&&g.update(a.instanceColor,C.ARRAY_BUFFER)),D}function Q(){e=new WeakMap}function n(a){const h=a.target;h.removeEventListener("dispose",n),g.remove(h.instanceMatrix),h.instanceColor!==null&&g.remove(h.instanceColor)}return{update:B,dispose:Q}}const Fh=new jI,Nh=new We,Uh=new kE,kh=new gn,Lh=[],xh=[],Jh=new Float32Array(16),bh=new Float32Array(9),Kh=new Float32Array(4);function VE(C,A,g){const I=C[0];if(I<=0||I>0)return C;const e=A*g;let B=Lh[e];if(B===void 0&&(B=new Float32Array(e),Lh[e]=B),A!==0){I.toArray(B,0);for(let Q=1,n=0;Q!==A;++Q)n+=g,C[Q].toArray(B,n)}return B}function pe(C,A){if(C.length!==A.length)return!1;for(let g=0,I=C.length;g<I;g++)if(C[g]!==A[g])return!1;return!0}function ye(C,A){for(let g=0,I=A.length;g<I;g++)C[g]=A[g]}function po(C,A){let g=xh[A];g===void 0&&(g=new Int32Array(A),xh[A]=g);for(let I=0;I!==A;++I)g[I]=C.allocateTextureUnit();return g}function Zf(C,A){const g=this.cache;g[0]!==A&&(C.uniform1f(this.addr,A),g[0]=A)}function Xf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(pe(g,A))return;C.uniform2fv(this.addr,A),ye(g,A)}}function zf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)(g[0]!==A.r||g[1]!==A.g||g[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(pe(g,A))return;C.uniform3fv(this.addr,A),ye(g,A)}}function jf(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(pe(g,A))return;C.uniform4fv(this.addr,A),ye(g,A)}}function $f(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(pe(g,A))return;C.uniformMatrix2fv(this.addr,!1,A),ye(g,A)}else{if(pe(g,I))return;Kh.set(I),C.uniformMatrix2fv(this.addr,!1,Kh),ye(g,I)}}function A0(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(pe(g,A))return;C.uniformMatrix3fv(this.addr,!1,A),ye(g,A)}else{if(pe(g,I))return;bh.set(I),C.uniformMatrix3fv(this.addr,!1,bh),ye(g,I)}}function g0(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(pe(g,A))return;C.uniformMatrix4fv(this.addr,!1,A),ye(g,A)}else{if(pe(g,I))return;Jh.set(I),C.uniformMatrix4fv(this.addr,!1,Jh),ye(g,I)}}function t0(C,A){const g=this.cache;g[0]!==A&&(C.uniform1i(this.addr,A),g[0]=A)}function I0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(pe(g,A))return;C.uniform2iv(this.addr,A),ye(g,A)}}function e0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(pe(g,A))return;C.uniform3iv(this.addr,A),ye(g,A)}}function i0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(pe(g,A))return;C.uniform4iv(this.addr,A),ye(g,A)}}function B0(C,A){const g=this.cache;g[0]!==A&&(C.uniform1ui(this.addr,A),g[0]=A)}function C0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(pe(g,A))return;C.uniform2uiv(this.addr,A),ye(g,A)}}function E0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(pe(g,A))return;C.uniform3uiv(this.addr,A),ye(g,A)}}function Q0(C,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(pe(g,A))return;C.uniform4uiv(this.addr,A),ye(g,A)}}function n0(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture2D(A||Fh,e)}function o0(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture3D(A||Uh,e)}function s0(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTextureCube(A||kh,e)}function a0(C,A,g){const I=this.cache,e=g.allocateTextureUnit();I[0]!==e&&(C.uniform1i(this.addr,e),I[0]=e),g.setTexture2DArray(A||Nh,e)}function r0(C){switch(C){case 5126:return Zf;case 35664:return Xf;case 35665:return zf;case 35666:return jf;case 35674:return $f;case 35675:return A0;case 35676:return g0;case 5124:case 35670:return t0;case 35667:case 35671:return I0;case 35668:case 35672:return e0;case 35669:case 35673:return i0;case 5125:return B0;case 36294:return C0;case 36295:return E0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function h0(C,A){C.uniform1fv(this.addr,A)}function c0(C,A){const g=VE(A,this.size,2);C.uniform2fv(this.addr,g)}function l0(C,A){const g=VE(A,this.size,3);C.uniform3fv(this.addr,g)}function d0(C,A){const g=VE(A,this.size,4);C.uniform4fv(this.addr,g)}function u0(C,A){const g=VE(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,g)}function D0(C,A){const g=VE(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,g)}function f0(C,A){const g=VE(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,g)}function w0(C,A){C.uniform1iv(this.addr,A)}function p0(C,A){C.uniform2iv(this.addr,A)}function y0(C,A){C.uniform3iv(this.addr,A)}function M0(C,A){C.uniform4iv(this.addr,A)}function R0(C,A){C.uniform1uiv(this.addr,A)}function m0(C,A){C.uniform2uiv(this.addr,A)}function S0(C,A){C.uniform3uiv(this.addr,A)}function G0(C,A){C.uniform4uiv(this.addr,A)}function F0(C,A,g){const I=this.cache,e=A.length,B=po(g,e);pe(I,B)||(C.uniform1iv(this.addr,B),ye(I,B));for(let Q=0;Q!==e;++Q)g.setTexture2D(A[Q]||Fh,B[Q])}function N0(C,A,g){const I=this.cache,e=A.length,B=po(g,e);pe(I,B)||(C.uniform1iv(this.addr,B),ye(I,B));for(let Q=0;Q!==e;++Q)g.setTexture3D(A[Q]||Uh,B[Q])}function U0(C,A,g){const I=this.cache,e=A.length,B=po(g,e);pe(I,B)||(C.uniform1iv(this.addr,B),ye(I,B));for(let Q=0;Q!==e;++Q)g.setTextureCube(A[Q]||kh,B[Q])}function k0(C,A,g){const I=this.cache,e=A.length,B=po(g,e);pe(I,B)||(C.uniform1iv(this.addr,B),ye(I,B));for(let Q=0;Q!==e;++Q)g.setTexture2DArray(A[Q]||Nh,B[Q])}function L0(C){switch(C){case 5126:return h0;case 35664:return c0;case 35665:return l0;case 35666:return d0;case 35674:return u0;case 35675:return D0;case 35676:return f0;case 5124:case 35670:return w0;case 35667:case 35671:return p0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return R0;case 36294:return m0;case 36295:return S0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return k0}}class x0{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.setValue=r0(g.type)}}class J0{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.size=g.size,this.setValue=L0(g.type)}}class b0{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,I){const e=this.seq;for(let B=0,Q=e.length;B!==Q;++B){const n=e[B];n.setValue(A,g[n.id],I)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function Yh(C,A){C.seq.push(A),C.map[A.id]=A}function K0(C,A,g){const I=C.name,e=I.length;for(Vs.lastIndex=0;;){const B=Vs.exec(I),Q=Vs.lastIndex;let n=B[1];const a=B[2]==="]",h=B[3];if(a&&(n=n|0),h===void 0||h==="["&&Q+2===e){Yh(g,h===void 0?new x0(n,C,A):new J0(n,C,A));break}else{let D=g.map[n];D===void 0&&(D=new b0(n),Yh(g,D)),g=D}}}class yo{constructor(A,g){this.seq=[],this.map={};const I=A.getProgramParameter(g,A.ACTIVE_UNIFORMS);for(let e=0;e<I;++e){const B=A.getActiveUniform(g,e),Q=A.getUniformLocation(g,B.name);K0(B,Q,this)}}setValue(A,g,I,e){const B=this.map[g];B!==void 0&&B.setValue(A,I,e)}setOptional(A,g,I){const e=g[I];e!==void 0&&this.setValue(A,I,e)}static upload(A,g,I,e){for(let B=0,Q=g.length;B!==Q;++B){const n=g[B],a=I[n.id];a.needsUpdate!==!1&&n.setValue(A,a.value,e)}}static seqWithValue(A,g){const I=[];for(let e=0,B=A.length;e!==B;++e){const Q=A[e];Q.id in g&&I.push(Q)}return I}}function vh(C,A,g){const I=C.createShader(A);return C.shaderSource(I,g),C.compileShader(I),I}let Y0=0;function v0(C,A){const g=C.split(`
`),I=[],e=Math.max(A-6,0),B=Math.min(A+6,g.length);for(let Q=e;Q<B;Q++){const n=Q+1;I.push(`${n===A?">":" "} ${n}: ${g[Q]}`)}return I.join(`
`)}function H0(C){switch(C){case Rt:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",C),["Linear","( value )"]}}function Hh(C,A,g){const I=C.getShaderParameter(A,C.COMPILE_STATUS),e=C.getShaderInfoLog(A).trim();if(I&&e==="")return"";const B=/ERROR: 0:(\d+)/.exec(e);if(B){const Q=parseInt(B[1]);return g.toUpperCase()+`

`+e+`

`+v0(C.getShaderSource(A),Q)}else return e}function T0(C,A){const g=H0(A);return"vec4 "+C+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function q0(C,A){let g;switch(A){case KA:g="Linear";break;case gA:g="Reinhard";break;case Jg:g="OptimizedCineon";break;case Dg:g="ACESFilmic";break;case tt:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+C+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function _0(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.tangentSpaceNormalMap||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tn).join(`
`)}function W0(C){const A=[];for(const g in C){const I=C[g];I!==!1&&A.push("#define "+g+" "+I)}return A.join(`
`)}function P0(C,A){const g={},I=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let e=0;e<I;e++){const B=C.getActiveAttrib(A,e),Q=B.name;let n=1;B.type===C.FLOAT_MAT2&&(n=2),B.type===C.FLOAT_MAT3&&(n=3),B.type===C.FLOAT_MAT4&&(n=4),g[Q]={type:B.type,location:C.getAttribLocation(A,Q),locationSize:n}}return g}function tn(C){return C!==""}function Th(C,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function qh(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(C){return C.replace(O0,V0)}function V0(C,A){const g=aI[A];if(g===void 0)throw new Error("Can not resolve #include <"+A+">");return Zs(g)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(C){return C.replace(Z0,X0)}function X0(C,A,g,I){let e="";for(let B=parseInt(A);B<parseInt(g);B++)e+=I.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return e}function Wh(C){let A="precision "+C.precision+` float;
precision `+C.precision+" int;";return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function z0(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===G?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===N?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===k&&(A="SHADOWMAP_TYPE_VSM"),A}function j0(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case vt:case gt:A="ENVMAP_TYPE_CUBE";break;case YA:A="ENVMAP_TYPE_CUBE_UV";break}return A}function $0(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case gt:A="ENVMAP_MODE_REFRACTION";break}return A}function Aw(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case oA:A="ENVMAP_BLENDING_MULTIPLY";break;case lA:A="ENVMAP_BLENDING_MIX";break;case XA:A="ENVMAP_BLENDING_ADD";break}return A}function gw(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const g=Math.log2(A)-2,I=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:I,maxMip:g}}function tw(C,A,g,I){const e=C.getContext(),B=g.defines;let Q=g.vertexShader,n=g.fragmentShader;const a=z0(g),h=j0(g),d=$0(g),D=Aw(g),u=gw(g),y=g.isWebGL2?"":_0(g),S=W0(B),M=e.createProgram();let m,v,W=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(m=[S].filter(tn).join(`
`),m.length>0&&(m+=`
`),v=[y,S].filter(tn).join(`
`),v.length>0&&(v+=`
`)):(m=[Wh(g),"#define SHADER_NAME "+g.shaderName,S,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.supportsVertexTextures?"#define VERTEX_TEXTURES":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+d:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.displacementMap&&g.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+a:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tn).join(`
`),v=[y,Wh(g),"#define SHADER_NAME "+g.shaderName,S,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+h:"",g.envMap?"#define "+d:"",g.envMap?"#define "+D:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+a:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==fA?"#define TONE_MAPPING":"",g.toneMapping!==fA?aI.tonemapping_pars_fragment:"",g.toneMapping!==fA?q0("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",aI.encodings_pars_fragment,T0("linearToOutputTexel",g.outputEncoding),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(tn).join(`
`)),Q=Zs(Q),Q=Th(Q,g),Q=qh(Q,g),n=Zs(n),n=Th(n,g),n=qh(n,g),Q=_h(Q),n=_h(n),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(W=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",g.glslVersion===Ie?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===Ie?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=W+m+Q,T=W+v+n,IA=vh(e,e.VERTEX_SHADER,b),nA=vh(e,e.FRAGMENT_SHADER,T);if(e.attachShader(M,IA),e.attachShader(M,nA),g.index0AttributeName!==void 0?e.bindAttribLocation(M,0,g.index0AttributeName):g.morphTargets===!0&&e.bindAttribLocation(M,0,"position"),e.linkProgram(M),C.debug.checkShaderErrors){const iA=e.getProgramInfoLog(M).trim(),SA=e.getShaderInfoLog(IA).trim(),ig=e.getShaderInfoLog(nA).trim();let rg=!0,OA=!0;if(e.getProgramParameter(M,e.LINK_STATUS)===!1){rg=!1;const HA=Hh(e,IA,"vertex"),ng=Hh(e,nA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(M,e.VALIDATE_STATUS)+`

Program Info Log: `+iA+`
`+HA+`
`+ng)}else iA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",iA):(SA===""||ig==="")&&(OA=!1);OA&&(this.diagnostics={runnable:rg,programLog:iA,vertexShader:{log:SA,prefix:m},fragmentShader:{log:ig,prefix:v}})}e.deleteShader(IA),e.deleteShader(nA);let wA;this.getUniforms=function(){return wA===void 0&&(wA=new yo(e,M)),wA};let O;return this.getAttributes=function(){return O===void 0&&(O=P0(e,M)),O},this.destroy=function(){I.releaseStatesOfProgram(this),e.deleteProgram(M),this.program=void 0},this.name=g.shaderName,this.id=Y0++,this.cacheKey=A,this.usedTimes=1,this.program=M,this.vertexShader=IA,this.fragmentShader=nA,this}let Iw=0;class ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,I=A.fragmentShader,e=this._getShaderStage(g),B=this._getShaderStage(I),Q=this._getShaderCacheForMaterial(A);return Q.has(e)===!1&&(Q.add(e),e.usedTimes++),Q.has(B)===!1&&(Q.add(B),B.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const I of g)I.usedTimes--,I.usedTimes===0&&this.shaderCache.delete(I.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let I=g.get(A);return I===void 0&&(I=new Set,g.set(A,I)),I}_getShaderStage(A){const g=this.shaderCache;let I=g.get(A);return I===void 0&&(I=new iw(A),g.set(A,I)),I}}class iw{constructor(A){this.id=Iw++,this.code=A,this.usedTimes=0}}function Bw(C,A,g,I,e,B,Q){const n=new r,a=new ew,h=[],d=e.isWebGL2,D=e.logarithmicDepthBuffer,u=e.vertexTextures;let y=e.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(O,iA,SA,ig,rg){const OA=ig.fog,HA=rg.geometry,ng=O.isMeshStandardMaterial?ig.environment:null,Rg=(O.isMeshStandardMaterial?g:A).get(O.envMap||ng),qg=Rg&&Rg.mapping===YA?Rg.image.height:null,wg=S[O.type];O.precision!==null&&(y=e.getMaxPrecision(O.precision),y!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",y,"instead."));const _g=HA.morphAttributes.position||HA.morphAttributes.normal||HA.morphAttributes.color,Lg=_g!==void 0?_g.length:0;let Ut=0;HA.morphAttributes.position!==void 0&&(Ut=1),HA.morphAttributes.normal!==void 0&&(Ut=2),HA.morphAttributes.color!==void 0&&(Ut=3);let jA,Yg,Qt,GA;if(wg){const AI=zi[wg];jA=AI.vertexShader,Yg=AI.fragmentShader}else jA=O.vertexShader,Yg=O.fragmentShader,a.update(O),Qt=a.getVertexShaderID(O),GA=a.getFragmentShaderID(O);const Gt=C.getRenderTarget(),rt=O.alphaTest>0,mt=O.clearcoat>0,kt=O.iridescence>0;return{isWebGL2:d,shaderID:wg,shaderName:O.type,vertexShader:jA,fragmentShader:Yg,defines:O.defines,customVertexShaderID:Qt,customFragmentShaderID:GA,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:y,instancing:rg.isInstancedMesh===!0,instancingColor:rg.isInstancedMesh===!0&&rg.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Gt===null?C.outputEncoding:Gt.isXRRenderTarget===!0?Gt.texture.encoding:Rt,map:!!O.map,matcap:!!O.matcap,envMap:!!Rg,envMapMode:Rg&&Rg.mapping,envMapCubeUVHeight:qg,lightMap:!!O.lightMap,aoMap:!!O.aoMap,emissiveMap:!!O.emissiveMap,bumpMap:!!O.bumpMap,normalMap:!!O.normalMap,objectSpaceNormalMap:O.normalMapType===Je,tangentSpaceNormalMap:O.normalMapType===Ee,decodeVideoTexture:!!O.map&&O.map.isVideoTexture===!0&&O.map.encoding===ft,clearcoat:mt,clearcoatMap:mt&&!!O.clearcoatMap,clearcoatRoughnessMap:mt&&!!O.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!O.clearcoatNormalMap,iridescence:kt,iridescenceMap:kt&&!!O.iridescenceMap,iridescenceThicknessMap:kt&&!!O.iridescenceThicknessMap,displacementMap:!!O.displacementMap,roughnessMap:!!O.roughnessMap,metalnessMap:!!O.metalnessMap,specularMap:!!O.specularMap,specularIntensityMap:!!O.specularIntensityMap,specularColorMap:!!O.specularColorMap,opaque:O.transparent===!1&&O.blending===L,alphaMap:!!O.alphaMap,alphaTest:rt,gradientMap:!!O.gradientMap,sheen:O.sheen>0,sheenColorMap:!!O.sheenColorMap,sheenRoughnessMap:!!O.sheenRoughnessMap,transmission:O.transmission>0,transmissionMap:!!O.transmissionMap,thicknessMap:!!O.thicknessMap,combine:O.combine,vertexTangents:!!O.normalMap&&!!HA.attributes.tangent,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!HA.attributes.color&&HA.attributes.color.itemSize===4,vertexUvs:!!O.map||!!O.bumpMap||!!O.normalMap||!!O.specularMap||!!O.alphaMap||!!O.emissiveMap||!!O.roughnessMap||!!O.metalnessMap||!!O.clearcoatMap||!!O.clearcoatRoughnessMap||!!O.clearcoatNormalMap||!!O.iridescenceMap||!!O.iridescenceThicknessMap||!!O.displacementMap||!!O.transmissionMap||!!O.thicknessMap||!!O.specularIntensityMap||!!O.specularColorMap||!!O.sheenColorMap||!!O.sheenRoughnessMap,uvsVertexOnly:!(O.map||O.bumpMap||O.normalMap||O.specularMap||O.alphaMap||O.emissiveMap||O.roughnessMap||O.metalnessMap||O.clearcoatNormalMap||O.iridescenceMap||O.iridescenceThicknessMap||O.transmission>0||O.transmissionMap||O.thicknessMap||O.specularIntensityMap||O.specularColorMap||O.sheen>0||O.sheenColorMap||O.sheenRoughnessMap)&&!!O.displacementMap,fog:!!OA,useFog:O.fog===!0,fogExp2:OA&&OA.isFogExp2,flatShading:!!O.flatShading,sizeAttenuation:O.sizeAttenuation,logarithmicDepthBuffer:D,skinning:rg.isSkinnedMesh===!0,morphTargets:HA.morphAttributes.position!==void 0,morphNormals:HA.morphAttributes.normal!==void 0,morphColors:HA.morphAttributes.color!==void 0,morphTargetsCount:Lg,morphTextureStride:Ut,numDirLights:iA.directional.length,numPointLights:iA.point.length,numSpotLights:iA.spot.length,numSpotLightMaps:iA.spotLightMap.length,numRectAreaLights:iA.rectArea.length,numHemiLights:iA.hemi.length,numDirLightShadows:iA.directionalShadowMap.length,numPointLightShadows:iA.pointShadowMap.length,numSpotLightShadows:iA.spotShadowMap.length,numSpotLightShadowsWithMaps:iA.numSpotLightShadowsWithMaps,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:O.dithering,shadowMapEnabled:C.shadowMap.enabled&&SA.length>0,shadowMapType:C.shadowMap.type,toneMapping:O.toneMapped?C.toneMapping:fA,useLegacyLights:C.useLegacyLights,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===Y,flipSided:O.side===x,useDepthPacking:!!O.depthPacking,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionDerivatives:O.extensions&&O.extensions.derivatives,extensionFragDepth:O.extensions&&O.extensions.fragDepth,extensionDrawBuffers:O.extensions&&O.extensions.drawBuffers,extensionShaderTextureLOD:O.extensions&&O.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||I.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||I.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||I.has("EXT_shader_texture_lod"),customProgramCacheKey:O.customProgramCacheKey()}}function m(O){const iA=[];if(O.shaderID?iA.push(O.shaderID):(iA.push(O.customVertexShaderID),iA.push(O.customFragmentShaderID)),O.defines!==void 0)for(const SA in O.defines)iA.push(SA),iA.push(O.defines[SA]);return O.isRawShaderMaterial===!1&&(v(iA,O),W(iA,O),iA.push(C.outputEncoding)),iA.push(O.customProgramCacheKey),iA.join()}function v(O,iA){O.push(iA.precision),O.push(iA.outputEncoding),O.push(iA.envMapMode),O.push(iA.envMapCubeUVHeight),O.push(iA.combine),O.push(iA.vertexUvs),O.push(iA.fogExp2),O.push(iA.sizeAttenuation),O.push(iA.morphTargetsCount),O.push(iA.morphAttributeCount),O.push(iA.numDirLights),O.push(iA.numPointLights),O.push(iA.numSpotLights),O.push(iA.numSpotLightMaps),O.push(iA.numHemiLights),O.push(iA.numRectAreaLights),O.push(iA.numDirLightShadows),O.push(iA.numPointLightShadows),O.push(iA.numSpotLightShadows),O.push(iA.numSpotLightShadowsWithMaps),O.push(iA.shadowMapType),O.push(iA.toneMapping),O.push(iA.numClippingPlanes),O.push(iA.numClipIntersection),O.push(iA.depthPacking)}function W(O,iA){n.disableAll(),iA.isWebGL2&&n.enable(0),iA.supportsVertexTextures&&n.enable(1),iA.instancing&&n.enable(2),iA.instancingColor&&n.enable(3),iA.map&&n.enable(4),iA.matcap&&n.enable(5),iA.envMap&&n.enable(6),iA.lightMap&&n.enable(7),iA.aoMap&&n.enable(8),iA.emissiveMap&&n.enable(9),iA.bumpMap&&n.enable(10),iA.normalMap&&n.enable(11),iA.objectSpaceNormalMap&&n.enable(12),iA.tangentSpaceNormalMap&&n.enable(13),iA.clearcoat&&n.enable(14),iA.clearcoatMap&&n.enable(15),iA.clearcoatRoughnessMap&&n.enable(16),iA.clearcoatNormalMap&&n.enable(17),iA.iridescence&&n.enable(18),iA.iridescenceMap&&n.enable(19),iA.iridescenceThicknessMap&&n.enable(20),iA.displacementMap&&n.enable(21),iA.specularMap&&n.enable(22),iA.roughnessMap&&n.enable(23),iA.metalnessMap&&n.enable(24),iA.gradientMap&&n.enable(25),iA.alphaMap&&n.enable(26),iA.alphaTest&&n.enable(27),iA.vertexColors&&n.enable(28),iA.vertexAlphas&&n.enable(29),iA.vertexUvs&&n.enable(30),iA.vertexTangents&&n.enable(31),iA.uvsVertexOnly&&n.enable(32),O.push(n.mask),n.disableAll(),iA.fog&&n.enable(0),iA.useFog&&n.enable(1),iA.flatShading&&n.enable(2),iA.logarithmicDepthBuffer&&n.enable(3),iA.skinning&&n.enable(4),iA.morphTargets&&n.enable(5),iA.morphNormals&&n.enable(6),iA.morphColors&&n.enable(7),iA.premultipliedAlpha&&n.enable(8),iA.shadowMapEnabled&&n.enable(9),iA.useLegacyLights&&n.enable(10),iA.doubleSided&&n.enable(11),iA.flipSided&&n.enable(12),iA.useDepthPacking&&n.enable(13),iA.dithering&&n.enable(14),iA.specularIntensityMap&&n.enable(15),iA.specularColorMap&&n.enable(16),iA.transmission&&n.enable(17),iA.transmissionMap&&n.enable(18),iA.thicknessMap&&n.enable(19),iA.sheen&&n.enable(20),iA.sheenColorMap&&n.enable(21),iA.sheenRoughnessMap&&n.enable(22),iA.decodeVideoTexture&&n.enable(23),iA.opaque&&n.enable(24),O.push(n.mask)}function b(O){const iA=S[O.type];let SA;if(iA){const ig=zi[iA];SA=Dh.clone(ig.uniforms)}else SA=O.uniforms;return SA}function T(O,iA){let SA;for(let ig=0,rg=h.length;ig<rg;ig++){const OA=h[ig];if(OA.cacheKey===iA){SA=OA,++SA.usedTimes;break}}return SA===void 0&&(SA=new tw(C,iA,O,B),h.push(SA)),SA}function IA(O){if(--O.usedTimes===0){const iA=h.indexOf(O);h[iA]=h[h.length-1],h.pop(),O.destroy()}}function nA(O){a.remove(O)}function wA(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:T,releaseProgram:IA,releaseShaderCache:nA,programs:h,dispose:wA}}function Cw(){let C=new WeakMap;function A(B){let Q=C.get(B);return Q===void 0&&(Q={},C.set(B,Q)),Q}function g(B){C.delete(B)}function I(B,Q,n){C.get(B)[Q]=n}function e(){C=new WeakMap}return{get:A,remove:g,update:I,dispose:e}}function Ew(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function Ph(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function Oh(){const C=[];let A=0;const g=[],I=[],e=[];function B(){A=0,g.length=0,I.length=0,e.length=0}function Q(D,u,y,S,M,m){let v=C[A];return v===void 0?(v={id:D.id,object:D,geometry:u,material:y,groupOrder:S,renderOrder:D.renderOrder,z:M,group:m},C[A]=v):(v.id=D.id,v.object=D,v.geometry=u,v.material=y,v.groupOrder=S,v.renderOrder=D.renderOrder,v.z=M,v.group=m),A++,v}function n(D,u,y,S,M,m){const v=Q(D,u,y,S,M,m);y.transmission>0?I.push(v):y.transparent===!0?e.push(v):g.push(v)}function a(D,u,y,S,M,m){const v=Q(D,u,y,S,M,m);y.transmission>0?I.unshift(v):y.transparent===!0?e.unshift(v):g.unshift(v)}function h(D,u){g.length>1&&g.sort(D||Ew),I.length>1&&I.sort(u||Ph),e.length>1&&e.sort(u||Ph)}function d(){for(let D=A,u=C.length;D<u;D++){const y=C[D];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:g,transmissive:I,transparent:e,init:B,push:n,unshift:a,finish:d,sort:h}}function Qw(){let C=new WeakMap;function A(I,e){const B=C.get(I);let Q;return B===void 0?(Q=new Oh,C.set(I,[Q])):e>=B.length?(Q=new Oh,B.push(Q)):Q=B[e],Q}function g(){C=new WeakMap}return{get:A,dispose:g}}function nw(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new EA,color:new Dt};break;case"SpotLight":g={position:new EA,direction:new EA,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new EA,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":g={direction:new EA,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":g={color:new Dt,position:new EA,halfWidth:new EA,halfHeight:new EA};break}return C[A.id]=g,g}}}function ow(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let g;switch(A.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yg};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yg};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yg,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=g,g}}}let sw=0;function aw(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function rw(C,A){const g=new nw,I=ow(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)e.probe.push(new EA);const B=new EA,Q=new jt,n=new jt;function a(d,D){let u=0,y=0,S=0;for(let ig=0;ig<9;ig++)e.probe[ig].set(0,0,0);let M=0,m=0,v=0,W=0,b=0,T=0,IA=0,nA=0,wA=0,O=0;d.sort(aw);const iA=D===!0?Math.PI:1;for(let ig=0,rg=d.length;ig<rg;ig++){const OA=d[ig],HA=OA.color,ng=OA.intensity,Rg=OA.distance,qg=OA.shadow&&OA.shadow.map?OA.shadow.map.texture:null;if(OA.isAmbientLight)u+=HA.r*ng*iA,y+=HA.g*ng*iA,S+=HA.b*ng*iA;else if(OA.isLightProbe)for(let wg=0;wg<9;wg++)e.probe[wg].addScaledVector(OA.sh.coefficients[wg],ng);else if(OA.isDirectionalLight){const wg=g.get(OA);if(wg.color.copy(OA.color).multiplyScalar(OA.intensity*iA),OA.castShadow){const _g=OA.shadow,Lg=I.get(OA);Lg.shadowBias=_g.bias,Lg.shadowNormalBias=_g.normalBias,Lg.shadowRadius=_g.radius,Lg.shadowMapSize=_g.mapSize,e.directionalShadow[M]=Lg,e.directionalShadowMap[M]=qg,e.directionalShadowMatrix[M]=OA.shadow.matrix,T++}e.directional[M]=wg,M++}else if(OA.isSpotLight){const wg=g.get(OA);wg.position.setFromMatrixPosition(OA.matrixWorld),wg.color.copy(HA).multiplyScalar(ng*iA),wg.distance=Rg,wg.coneCos=Math.cos(OA.angle),wg.penumbraCos=Math.cos(OA.angle*(1-OA.penumbra)),wg.decay=OA.decay,e.spot[v]=wg;const _g=OA.shadow;if(OA.map&&(e.spotLightMap[wA]=OA.map,wA++,_g.updateMatrices(OA),OA.castShadow&&O++),e.spotLightMatrix[v]=_g.matrix,OA.castShadow){const Lg=I.get(OA);Lg.shadowBias=_g.bias,Lg.shadowNormalBias=_g.normalBias,Lg.shadowRadius=_g.radius,Lg.shadowMapSize=_g.mapSize,e.spotShadow[v]=Lg,e.spotShadowMap[v]=qg,nA++}v++}else if(OA.isRectAreaLight){const wg=g.get(OA);wg.color.copy(HA).multiplyScalar(ng),wg.halfWidth.set(OA.width*.5,0,0),wg.halfHeight.set(0,OA.height*.5,0),e.rectArea[W]=wg,W++}else if(OA.isPointLight){const wg=g.get(OA);if(wg.color.copy(OA.color).multiplyScalar(OA.intensity*iA),wg.distance=OA.distance,wg.decay=OA.decay,OA.castShadow){const _g=OA.shadow,Lg=I.get(OA);Lg.shadowBias=_g.bias,Lg.shadowNormalBias=_g.normalBias,Lg.shadowRadius=_g.radius,Lg.shadowMapSize=_g.mapSize,Lg.shadowCameraNear=_g.camera.near,Lg.shadowCameraFar=_g.camera.far,e.pointShadow[m]=Lg,e.pointShadowMap[m]=qg,e.pointShadowMatrix[m]=OA.shadow.matrix,IA++}e.point[m]=wg,m++}else if(OA.isHemisphereLight){const wg=g.get(OA);wg.skyColor.copy(OA.color).multiplyScalar(ng*iA),wg.groundColor.copy(OA.groundColor).multiplyScalar(ng*iA),e.hemi[b]=wg,b++}}W>0&&(A.isWebGL2||C.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=Bt.LTC_FLOAT_1,e.rectAreaLTC2=Bt.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=Bt.LTC_HALF_1,e.rectAreaLTC2=Bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=u,e.ambient[1]=y,e.ambient[2]=S;const SA=e.hash;(SA.directionalLength!==M||SA.pointLength!==m||SA.spotLength!==v||SA.rectAreaLength!==W||SA.hemiLength!==b||SA.numDirectionalShadows!==T||SA.numPointShadows!==IA||SA.numSpotShadows!==nA||SA.numSpotMaps!==wA)&&(e.directional.length=M,e.spot.length=v,e.rectArea.length=W,e.point.length=m,e.hemi.length=b,e.directionalShadow.length=T,e.directionalShadowMap.length=T,e.pointShadow.length=IA,e.pointShadowMap.length=IA,e.spotShadow.length=nA,e.spotShadowMap.length=nA,e.directionalShadowMatrix.length=T,e.pointShadowMatrix.length=IA,e.spotLightMatrix.length=nA+wA-O,e.spotLightMap.length=wA,e.numSpotLightShadowsWithMaps=O,SA.directionalLength=M,SA.pointLength=m,SA.spotLength=v,SA.rectAreaLength=W,SA.hemiLength=b,SA.numDirectionalShadows=T,SA.numPointShadows=IA,SA.numSpotShadows=nA,SA.numSpotMaps=wA,e.version=sw++)}function h(d,D){let u=0,y=0,S=0,M=0,m=0;const v=D.matrixWorldInverse;for(let W=0,b=d.length;W<b;W++){const T=d[W];if(T.isDirectionalLight){const IA=e.directional[u];IA.direction.setFromMatrixPosition(T.matrixWorld),B.setFromMatrixPosition(T.target.matrixWorld),IA.direction.sub(B),IA.direction.transformDirection(v),u++}else if(T.isSpotLight){const IA=e.spot[S];IA.position.setFromMatrixPosition(T.matrixWorld),IA.position.applyMatrix4(v),IA.direction.setFromMatrixPosition(T.matrixWorld),B.setFromMatrixPosition(T.target.matrixWorld),IA.direction.sub(B),IA.direction.transformDirection(v),S++}else if(T.isRectAreaLight){const IA=e.rectArea[M];IA.position.setFromMatrixPosition(T.matrixWorld),IA.position.applyMatrix4(v),n.identity(),Q.copy(T.matrixWorld),Q.premultiply(v),n.extractRotation(Q),IA.halfWidth.set(T.width*.5,0,0),IA.halfHeight.set(0,T.height*.5,0),IA.halfWidth.applyMatrix4(n),IA.halfHeight.applyMatrix4(n),M++}else if(T.isPointLight){const IA=e.point[y];IA.position.setFromMatrixPosition(T.matrixWorld),IA.position.applyMatrix4(v),y++}else if(T.isHemisphereLight){const IA=e.hemi[m];IA.direction.setFromMatrixPosition(T.matrixWorld),IA.direction.transformDirection(v),m++}}}return{setup:a,setupView:h,state:e}}function Vh(C,A){const g=new rw(C,A),I=[],e=[];function B(){I.length=0,e.length=0}function Q(D){I.push(D)}function n(D){e.push(D)}function a(D){g.setup(I,D)}function h(D){g.setupView(I,D)}return{init:B,state:{lightsArray:I,shadowsArray:e,lights:g},setupLights:a,setupLightsView:h,pushLight:Q,pushShadow:n}}function hw(C,A){let g=new WeakMap;function I(B,Q=0){const n=g.get(B);let a;return n===void 0?(a=new Vh(C,A),g.set(B,[a])):Q>=n.length?(a=new Vh(C,A),n.push(a)):a=n[Q],a}function e(){g=new WeakMap}return{get:I,dispose:e}}class Xs extends Ge{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class zs extends Ge{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new EA,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
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
`):typeof readline=="function"&&(l=readline())!==null&&(l+=`
`);if(!l)return null;r.input=mE(l,!0)}return r.input.shift()},put_char:function(r,l){l===null||l===10?(yI(CC(r.output,0)),r.output=[]):l!=0&&r.output.push(l)},fsync:function(r){r.output&&r.output.length>0&&(yI(CC(r.output,0)),r.output=[])}},default_tty1_ops:{put_char:function(r,l){l===null||l===10?(XI(CC(r.output,0)),r.output=[]):l!=0&&r.output.push(l)},fsync:function(r){r.output&&r.output.length>0&&(XI(CC(r.output,0)),r.output=[])}}};function $n(r){kB()}var iI={ops_table:null,mount:function(r){return iI.createNode(null,"/",16895,0)},createNode:function(r,l,w,U){if(K.isBlkdev(w)||K.isFIFO(w))throw new K.ErrnoError(63);iI.ops_table||(iI.ops_table={dir:{node:{getattr:iI.node_ops.getattr,setattr:iI.node_ops.setattr,lookup:iI.node_ops.lookup,mknod:iI.node_ops.mknod,rename:iI.node_ops.rename,unlink:iI.node_ops.unlink,rmdir:iI.node_ops.rmdir,readdir:iI.node_ops.readdir,symlink:iI.node_ops.symlink},stream:{llseek:iI.stream_ops.llseek}},file:{node:{getattr:iI.node_ops.getattr,setattr:iI.node_ops.setattr},stream:{llseek:iI.stream_ops.llseek,read:iI.stream_ops.read,write:iI.stream_ops.write,allocate:iI.stream_ops.allocate,mmap:iI.stream_ops.mmap,msync:iI.stream_ops.msync}},link:{node:{getattr:iI.node_ops.getattr,setattr:iI.node_ops.setattr,readlink:iI.node_ops.readlink},stream:{}},chrdev:{node:{getattr:iI.node_ops.getattr,setattr:iI.node_ops.setattr},stream:K.chrdev_stream_ops}});var _=K.createNode(r,l,w,U);return K.isDir(_.mode)?(_.node_ops=iI.ops_table.dir.node,_.stream_ops=iI.ops_table.dir.stream,_.contents={}):K.isFile(_.mode)?(_.node_ops=iI.ops_table.file.node,_.stream_ops=iI.ops_table.file.stream,_.usedBytes=0,_.contents=null):K.isLink(_.mode)?(_.node_ops=iI.ops_table.link.node,_.stream_ops=iI.ops_table.link.stream):K.isChrdev(_.mode)&&(_.node_ops=iI.ops_table.chrdev.node,_.stream_ops=iI.ops_table.chrdev.stream),_.timestamp=Date.now(),r&&(r.contents[l]=_,r.timestamp=_.timestamp),_},getFileDataAsTypedArray:function(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage:function(r,l){var w=r.contents?r.contents.length:0;if(!(w>=l)){l=Math.max(l,w*(w<1048576?2:1.125)>>>0),w!=0&&(l=Math.max(l,256));var U=r.contents;r.contents=new Uint8Array(l),r.usedBytes>0&&r.contents.set(U.subarray(0,r.usedBytes),0)}},resizeFileStorage:function(r,l){if(r.usedBytes!=l)if(l==0)r.contents=null,r.usedBytes=0;else{var w=r.contents;r.contents=new Uint8Array(l),w&&r.contents.set(w.subarray(0,Math.min(l,r.usedBytes))),r.usedBytes=l}},node_ops:{getattr:function(r){var l={};return l.dev=K.isChrdev(r.mode)?r.id:1,l.ino=r.id,l.mode=r.mode,l.nlink=1,l.uid=0,l.gid=0,l.rdev=r.rdev,K.isDir(r.mode)?l.size=4096:K.isFile(r.mode)?l.size=r.usedBytes:K.isLink(r.mode)?l.size=r.link.length:l.size=0,l.atime=new Date(r.timestamp),l.mtime=new Date(r.timestamp),l.ctime=new Date(r.timestamp),l.blksize=4096,l.blocks=Math.ceil(l.size/l.blksize),l},setattr:function(r,l){l.mode!==void 0&&(r.mode=l.mode),l.timestamp!==void 0&&(r.timestamp=l.timestamp),l.size!==void 0&&iI.resizeFileStorage(r,l.size)},lookup:function(r,l){throw K.genericErrors[44]},mknod:function(r,l,w,U){return iI.createNode(r,l,w,U)},rename:function(r,l,w){if(K.isDir(r.mode)){var U;try{U=K.lookupNode(l,w)}catch{}if(U)for(var _ in U.contents)throw new K.ErrnoError(55)}delete r.parent.contents[r.name],r.parent.timestamp=Date.now(),r.name=w,l.contents[w]=r,l.timestamp=r.parent.timestamp,r.parent=l},unlink:function(r,l){delete r.contents[l],r.timestamp=Date.now()},rmdir:function(r,l){var w=K.lookupNode(r,l);for(var U in w.contents)throw new K.ErrnoError(55);delete r.contents[l],r.timestamp=Date.now()},readdir:function(r){var l=[".",".."];for(var w in r.contents)r.contents.hasOwnProperty(w)&&l.push(w);return l},symlink:function(r,l,w){var U=iI.createNode(r,l,41471,0);return U.link=w,U},readlink:function(r){if(!K.isLink(r.mode))throw new K.ErrnoError(28);return r.link}},stream_ops:{read:function(r,l,w,U,_){var j=r.node.contents;if(_>=r.node.usedBytes)return 0;var aA=Math.min(r.node.usedBytes-_,U);if(aA>8&&j.subarray)l.set(j.subarray(_,_+aA),w);else for(var uA=0;uA<aA;uA++)l[w+uA]=j[_+uA];return aA},write:function(r,l,w,U,_,j){if(l.buffer===$I.buffer&&(j=!1),!U)return 0;var aA=r.node;if(aA.timestamp=Date.now(),l.subarray&&(!aA.contents||aA.contents.subarray)){if(j)return aA.contents=l.subarray(w,w+U),aA.usedBytes=U,U;if(aA.usedBytes===0&&_===0)return aA.contents=l.slice(w,w+U),aA.usedBytes=U,U;if(_+U<=aA.usedBytes)return aA.contents.set(l.subarray(w,w+U),_),U}if(iI.expandFileStorage(aA,_+U),aA.contents.subarray&&l.subarray)aA.contents.set(l.subarray(w,w+U),_);else for(var uA=0;uA<U;uA++)aA.contents[_+uA]=l[w+uA];return aA.usedBytes=Math.max(aA.usedBytes,_+U),U},llseek:function(r,l,w){var U=l;if(w===1?U+=r.position:w===2&&K.isFile(r.node.mode)&&(U+=r.node.usedBytes),U<0)throw new K.ErrnoError(28);return U},allocate:function(r,l,w){iI.expandFileStorage(r.node,l+w),r.node.usedBytes=Math.max(r.node.usedBytes,l+w)},mmap:function(r,l,w,U,_){if(!K.isFile(r.node.mode))throw new K.ErrnoError(43);var j,aA,uA=r.node.contents;if(2&_||uA.buffer!==Qi){if((w>0||w+l<uA.length)&&(uA=uA.subarray?uA.subarray(w,w+l):Array.prototype.slice.call(uA,w,w+l)),aA=!0,!(j=$n()))throw new K.ErrnoError(48);$I.set(uA,j)}else aA=!1,j=uA.byteOffset;return{ptr:j,allocated:aA}},msync:function(r,l,w,U,_){if(!K.isFile(r.node.mode))throw new K.ErrnoError(43);return 2&_||iI.stream_ops.write(r,l,0,U,w,!1),0}}},K={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(r=vi.resolve(K.cwd(),r)))return{path:"",node:null};if((l=Object.assign({follow_mount:!0,recurse_count:0},l)).recurse_count>8)throw new K.ErrnoError(32);for(var w=RI.normalizeArray(r.split("/").filter(function($A){return!!$A}),!1),U=K.root,_="/",j=0;j<w.length;j++){var aA=j===w.length-1;if(aA&&l.parent)break;if(U=K.lookupNode(U,w[j]),_=RI.join2(_,w[j]),K.isMountpoint(U)&&(!aA||aA&&l.follow_mount)&&(U=U.mounted.root),!aA||l.follow)for(var uA=0;K.isLink(U.mode);){var vA=K.readlink(_);if(_=vi.resolve(RI.dirname(_),vA),U=K.lookupPath(_,{recurse_count:l.recurse_count+1}).node,uA++>40)throw new K.ErrnoError(32)}}return{path:_,node:U}},getPath:function(r){for(var l;;){if(K.isRoot(r)){var w=r.mount.mountpoint;return l?w[w.length-1]!=="/"?w+"/"+l:w+l:w}l=l?r.name+"/"+l:r.name,r=r.parent}},hashName:function(r,l){for(var w=0,U=0;U<l.length;U++)w=(w<<5)-w+l.charCodeAt(U)|0;return(r+w>>>0)%K.nameTable.length},hashAddNode:function(r){var l=K.hashName(r.parent.id,r.name);r.name_next=K.nameTable[l],K.nameTable[l]=r},hashRemoveNode:function(r){var l=K.hashName(r.parent.id,r.name);if(K.nameTable[l]===r)K.nameTable[l]=r.name_next;else for(var w=K.nameTable[l];w;){if(w.name_next===r){w.name_next=r.name_next;break}w=w.name_next}},lookupNode:function(r,l){var w=K.mayLookup(r);if(w)throw new K.ErrnoError(w,r);for(var U=K.hashName(r.id,l),_=K.nameTable[U];_;_=_.name_next){var j=_.name;if(_.parent.id===r.id&&j===l)return _}return K.lookup(r,l)},createNode:function(r,l,w,U){var _=new K.FSNode(r,l,w,U);return K.hashAddNode(_),_},destroyNode:function(r){K.hashRemoveNode(r)},isRoot:function(r){return r===r.parent},isMountpoint:function(r){return!!r.mounted},isFile:function(r){return(61440&r)==32768},isDir:function(r){return(61440&r)==16384},isLink:function(r){return(61440&r)==40960},isChrdev:function(r){return(61440&r)==8192},isBlkdev:function(r){return(61440&r)==24576},isFIFO:function(r){return(61440&r)==4096},isSocket:function(r){return!(49152&~r)},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(r){var l=K.flagModes[r];if(l===void 0)throw new Error("Unknown file open mode: "+r);return l},flagsToPermissionString:function(r){var l=["r","w","rw"][3&r];return 512&r&&(l+="w"),l},nodePermissions:function(r,l){return K.ignorePermissions||(!l.includes("r")||292&r.mode)&&(!l.includes("w")||146&r.mode)&&(!l.includes("x")||73&r.mode)?0:2},mayLookup:function(r){return K.nodePermissions(r,"x")||(r.node_ops.lookup?0:2)},mayCreate:function(r,l){try{return K.lookupNode(r,l),20}catch{}return K.nodePermissions(r,"wx")},mayDelete:function(r,l,w){var U;try{U=K.lookupNode(r,l)}catch(j){return j.errno}var _=K.nodePermissions(r,"wx");if(_)return _;if(w){if(!K.isDir(U.mode))return 54;if(K.isRoot(U)||K.getPath(U)===K.cwd())return 10}else if(K.isDir(U.mode))return 31;return 0},mayOpen:function(r,l){return r?K.isLink(r.mode)?32:K.isDir(r.mode)&&(K.flagsToPermissionString(l)!=="r"||512&l)?31:K.nodePermissions(r,K.flagsToPermissionString(l)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K.MAX_OPEN_FDS,w=r;w<=l;w++)if(!K.streams[w])return w;throw new K.ErrnoError(33)},getStream:function(r){return K.streams[r]},createStream:function(r,l,w){K.FSStream||(K.FSStream=function(){this.shared={}},K.FSStream.prototype={},Object.defineProperties(K.FSStream.prototype,{object:{get:function(){return this.node},set:function(_){this.node=_}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return!!(2097155&this.flags)}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(_){this.shared.flags=_}},position:{get:function(){return this.shared.position},set:function(_){this.shared.position=_}}})),r=Object.assign(new K.FSStream,r);var U=K.nextfd(l,w);return r.fd=U,K.streams[U]=r,r},closeStream:function(r){K.streams[r]=null},chrdev_stream_ops:{open:function(r){var l=K.getDevice(r.node.rdev);r.stream_ops=l.stream_ops,r.stream_ops.open&&r.stream_ops.open(r)},llseek:function(){throw new K.ErrnoError(70)}},major:function(r){return r>>8},minor:function(r){return 255&r},makedev:function(r,l){return r<<8|l},registerDevice:function(r,l){K.devices[r]={stream_ops:l}},getDevice:function(r){return K.devices[r]},getMounts:function(r){for(var l=[],w=[r];w.length;){var U=w.pop();l.push(U),w.push.apply(w,U.mounts)}return l},syncfs:function(r,l){typeof r=="function"&&(l=r,r=!1),K.syncFSRequests++,K.syncFSRequests>1&&XI("warning: "+K.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var w=K.getMounts(K.root.mount),U=0;function _(aA){return K.syncFSRequests--,l(aA)}function j(aA){if(aA)return j.errored?void 0:(j.errored=!0,_(aA));++U>=w.length&&_(null)}w.forEach(function(aA){if(!aA.type.syncfs)return j(null);aA.type.syncfs(aA,r,j)})},mount:function(r,l,w){var U,_=w==="/",j=!w;if(_&&K.root)throw new K.ErrnoError(10);if(!_&&!j){var aA=K.lookupPath(w,{follow_mount:!1});if(w=aA.path,U=aA.node,K.isMountpoint(U))throw new K.ErrnoError(10);if(!K.isDir(U.mode))throw new K.ErrnoError(54)}var uA={type:r,opts:l,mountpoint:w,mounts:[]},vA=r.mount(uA);return vA.mount=uA,uA.root=vA,_?K.root=vA:U&&(U.mounted=uA,U.mount&&U.mount.mounts.push(uA)),vA},unmount:function(r){var l=K.lookupPath(r,{follow_mount:!1});if(!K.isMountpoint(l.node))throw new K.ErrnoError(28);var w=l.node,U=w.mounted,_=K.getMounts(U);Object.keys(K.nameTable).forEach(function(aA){for(var uA=K.nameTable[aA];uA;){var vA=uA.name_next;_.includes(uA.mount)&&K.destroyNode(uA),uA=vA}}),w.mounted=null;var j=w.mount.mounts.indexOf(U);w.mount.mounts.splice(j,1)},lookup:function(r,l){return r.node_ops.lookup(r,l)},mknod:function(r,l,w){var U=K.lookupPath(r,{parent:!0}).node,_=RI.basename(r);if(!_||_==="."||_==="..")throw new K.ErrnoError(28);var j=K.mayCreate(U,_);if(j)throw new K.ErrnoError(j);if(!U.node_ops.mknod)throw new K.ErrnoError(63);return U.node_ops.mknod(U,_,l,w)},create:function(r,l){return l=l!==void 0?l:438,l&=4095,l|=32768,K.mknod(r,l,0)},mkdir:function(r,l){return l=l!==void 0?l:511,l&=1023,l|=16384,K.mknod(r,l,0)},mkdirTree:function(r,l){for(var w=r.split("/"),U="",_=0;_<w.length;++_)if(w[_]){U+="/"+w[_];try{K.mkdir(U,l)}catch(j){if(j.errno!=20)throw j}}},mkdev:function(r,l,w){return w===void 0&&(w=l,l=438),l|=8192,K.mknod(r,l,w)},symlink:function(r,l){if(!vi.resolve(r))throw new K.ErrnoError(44);var w=K.lookupPath(l,{parent:!0}).node;if(!w)throw new K.ErrnoError(44);var U=RI.basename(l),_=K.mayCreate(w,U);if(_)throw new K.ErrnoError(_);if(!w.node_ops.symlink)throw new K.ErrnoError(63);return w.node_ops.symlink(w,U,r)},rename:function(r,l){var w,U,_=RI.dirname(r),j=RI.dirname(l),aA=RI.basename(r),uA=RI.basename(l);if(w=K.lookupPath(r,{parent:!0}).node,U=K.lookupPath(l,{parent:!0}).node,!w||!U)throw new K.ErrnoError(44);if(w.mount!==U.mount)throw new K.ErrnoError(75);var vA,$A=K.lookupNode(w,aA),Ng=vi.relative(r,j);if(Ng.charAt(0)!==".")throw new K.ErrnoError(28);if((Ng=vi.relative(l,_)).charAt(0)!==".")throw new K.ErrnoError(55);try{vA=K.lookupNode(U,uA)}catch{}if($A!==vA){var xg=K.isDir($A.mode),eg=K.mayDelete(w,aA,xg);if(eg)throw new K.ErrnoError(eg);if(eg=vA?K.mayDelete(U,uA,xg):K.mayCreate(U,uA))throw new K.ErrnoError(eg);if(!w.node_ops.rename)throw new K.ErrnoError(63);if(K.isMountpoint($A)||vA&&K.isMountpoint(vA))throw new K.ErrnoError(10);if(U!==w&&(eg=K.nodePermissions(w,"w")))throw new K.ErrnoError(eg);K.hashRemoveNode($A);try{w.node_ops.rename($A,U,uA)}catch(Kg){throw Kg}finally{K.hashAddNode($A)}}},rmdir:function(r){var l=K.lookupPath(r,{parent:!0}).node,w=RI.basename(r),U=K.lookupNode(l,w),_=K.mayDelete(l,w,!0);if(_)throw new K.ErrnoError(_);if(!l.node_ops.rmdir)throw new K.ErrnoError(63);if(K.isMountpoint(U))throw new K.ErrnoError(10);l.node_ops.rmdir(l,w),K.destroyNode(U)},readdir:function(r){var l=K.lookupPath(r,{follow:!0}).node;if(!l.node_ops.readdir)throw new K.ErrnoError(54);return l.node_ops.readdir(l)},unlink:function(r){var l=K.lookupPath(r,{parent:!0}).node;if(!l)throw new K.ErrnoError(44);var w=RI.basename(r),U=K.lookupNode(l,w),_=K.mayDelete(l,w,!1);if(_)throw new K.ErrnoError(_);if(!l.node_ops.unlink)throw new K.ErrnoError(63);if(K.isMountpoint(U))throw new K.ErrnoError(10);l.node_ops.unlink(l,w),K.destroyNode(U)},readlink:function(r){var l=K.lookupPath(r).node;if(!l)throw new K.ErrnoError(44);if(!l.node_ops.readlink)throw new K.ErrnoError(28);return vi.resolve(K.getPath(l.parent),l.node_ops.readlink(l))},stat:function(r,l){var w=K.lookupPath(r,{follow:!l}).node;if(!w)throw new K.ErrnoError(44);if(!w.node_ops.getattr)throw new K.ErrnoError(63);return w.node_ops.getattr(w)},lstat:function(r){return K.stat(r,!0)},chmod:function(r,l,w){var U;if(!(U=typeof r=="string"?K.lookupPath(r,{follow:!w}).node:r).node_ops.setattr)throw new K.ErrnoError(63);U.node_ops.setattr(U,{mode:4095&l|-4096&U.mode,timestamp:Date.now()})},lchmod:function(r,l){K.chmod(r,l,!0)},fchmod:function(r,l){var w=K.getStream(r);if(!w)throw new K.ErrnoError(8);K.chmod(w.node,l)},chown:function(r,l,w,U){var _;if(!(_=typeof r=="string"?K.lookupPath(r,{follow:!U}).node:r).node_ops.setattr)throw new K.ErrnoError(63);_.node_ops.setattr(_,{timestamp:Date.now()})},lchown:function(r,l,w){K.chown(r,l,w,!0)},fchown:function(r,l,w){var U=K.getStream(r);if(!U)throw new K.ErrnoError(8);K.chown(U.node,l,w)},truncate:function(r,l){if(l<0)throw new K.ErrnoError(28);var w;if(!(w=typeof r=="string"?K.lookupPath(r,{follow:!0}).node:r).node_ops.setattr)throw new K.ErrnoError(63);if(K.isDir(w.mode))throw new K.ErrnoError(31);if(!K.isFile(w.mode))throw new K.ErrnoError(28);var U=K.nodePermissions(w,"w");if(U)throw new K.ErrnoError(U);w.node_ops.setattr(w,{size:l,timestamp:Date.now()})},ftruncate:function(r,l){var w=K.getStream(r);if(!w)throw new K.ErrnoError(8);if(!(2097155&w.flags))throw new K.ErrnoError(28);K.truncate(w.node,l)},utime:function(r,l,w){var U=K.lookupPath(r,{follow:!0}).node;U.node_ops.setattr(U,{timestamp:Math.max(l,w)})},open:function(r,l,w){if(r==="")throw new K.ErrnoError(44);var U;if(w=w===void 0?438:w,w=64&(l=typeof l=="string"?K.modeStringToFlags(l):l)?4095&w|32768:0,hA(r)=="object")U=r;else{r=RI.normalize(r);try{U=K.lookupPath(r,{follow:!(131072&l)}).node}catch{}}var _=!1;if(64&l)if(U){if(128&l)throw new K.ErrnoError(20)}else U=K.mknod(r,w,0),_=!0;if(!U)throw new K.ErrnoError(44);if(K.isChrdev(U.mode)&&(l&=-513),65536&l&&!K.isDir(U.mode))throw new K.ErrnoError(54);if(!_){var j=K.mayOpen(U,l);if(j)throw new K.ErrnoError(j)}512&l&&!_&&K.truncate(U,0),l&=-131713;var aA=K.createStream({node:U,path:K.getPath(U),flags:l,seekable:!0,position:0,stream_ops:U.stream_ops,ungotten:[],error:!1});return aA.stream_ops.open&&aA.stream_ops.open(aA),!R.logReadFiles||1&l||(K.readFiles||(K.readFiles={}),r in K.readFiles||(K.readFiles[r]=1)),aA},close:function(r){if(K.isClosed(r))throw new K.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(l){throw l}finally{K.closeStream(r.fd)}r.fd=null},isClosed:function(r){return r.fd===null},llseek:function(r,l,w){if(K.isClosed(r))throw new K.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new K.ErrnoError(70);if(w!=0&&w!=1&&w!=2)throw new K.ErrnoError(28);return r.position=r.stream_ops.llseek(r,l,w),r.ungotten=[],r.position},read:function(r,l,w,U,_){if(U<0||_<0)throw new K.ErrnoError(28);if(K.isClosed(r))throw new K.ErrnoError(8);if((2097155&r.flags)==1)throw new K.ErrnoError(8);if(K.isDir(r.node.mode))throw new K.ErrnoError(31);if(!r.stream_ops.read)throw new K.ErrnoError(28);var j=_!==void 0;if(j){if(!r.seekable)throw new K.ErrnoError(70)}else _=r.position;var aA=r.stream_ops.read(r,l,w,U,_);return j||(r.position+=aA),aA},write:function(r,l,w,U,_,j){if(U<0||_<0)throw new K.ErrnoError(28);if(K.isClosed(r))throw new K.ErrnoError(8);if(!(2097155&r.flags))throw new K.ErrnoError(8);if(K.isDir(r.node.mode))throw new K.ErrnoError(31);if(!r.stream_ops.write)throw new K.ErrnoError(28);r.seekable&&1024&r.flags&&K.llseek(r,0,2);var aA=_!==void 0;if(aA){if(!r.seekable)throw new K.ErrnoError(70)}else _=r.position;var uA=r.stream_ops.write(r,l,w,U,_,j);return aA||(r.position+=uA),uA},allocate:function(r,l,w){if(K.isClosed(r))throw new K.ErrnoError(8);if(l<0||w<=0)throw new K.ErrnoError(28);if(!(2097155&r.flags))throw new K.ErrnoError(8);if(!K.isFile(r.node.mode)&&!K.isDir(r.node.mode))throw new K.ErrnoError(43);if(!r.stream_ops.allocate)throw new K.ErrnoError(138);r.stream_ops.allocate(r,l,w)},mmap:function(r,l,w,U,_){if(2&U&&!(2&_)&&(2097155&r.flags)!=2)throw new K.ErrnoError(2);if((2097155&r.flags)==1)throw new K.ErrnoError(2);if(!r.stream_ops.mmap)throw new K.ErrnoError(43);return r.stream_ops.mmap(r,l,w,U,_)},msync:function(r,l,w,U,_){return r&&r.stream_ops.msync?r.stream_ops.msync(r,l,w,U,_):0},munmap:function(r){return 0},ioctl:function(r,l,w){if(!r.stream_ops.ioctl)throw new K.ErrnoError(59);return r.stream_ops.ioctl(r,l,w)},readFile:function(r){var l,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(w.flags=w.flags||0,w.encoding=w.encoding||"binary",w.encoding!=="utf8"&&w.encoding!=="binary")throw new Error('Invalid encoding type "'+w.encoding+'"');var U=K.open(r,w.flags),_=K.stat(r).size,j=new Uint8Array(_);return K.read(U,j,0,_,0),w.encoding==="utf8"?l=CC(j,0):w.encoding==="binary"&&(l=j),K.close(U),l},writeFile:function(r,l){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};w.flags=w.flags||577;var U=K.open(r,w.flags,w.mode);if(typeof l=="string"){var _=new Uint8Array(ME(l)+1),j=yE(l,_,0,_.length);K.write(U,_,0,j,void 0,w.canOwn)}else{if(!ArrayBuffer.isView(l))throw new Error("Unsupported data type");K.write(U,l,0,l.byteLength,void 0,w.canOwn)}K.close(U)},cwd:function(){return K.currentPath},chdir:function(r){var l=K.lookupPath(r,{follow:!0});if(l.node===null)throw new K.ErrnoError(44);if(!K.isDir(l.node.mode))throw new K.ErrnoError(54);var w=K.nodePermissions(l.node,"x");if(w)throw new K.ErrnoError(w);K.currentPath=l.path},createDefaultDirectories:function(){K.mkdir("/tmp"),K.mkdir("/home"),K.mkdir("/home/web_user")},createDefaultDevices:function(){K.mkdir("/dev"),K.registerDevice(K.makedev(1,3),{read:function(){return 0},write:function(l,w,U,_,j){return _}}),K.mkdev("/dev/null",K.makedev(1,3)),li.register(K.makedev(5,0),li.default_tty_ops),li.register(K.makedev(6,0),li.default_tty1_ops),K.mkdev("/dev/tty",K.makedev(5,0)),K.mkdev("/dev/tty1",K.makedev(6,0));var r=function(){if((typeof crypto>"u"?"undefined":hA(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var l=new Uint8Array(1);return function(){return crypto.getRandomValues(l),l[0]}}if(jg)try{var w=Y(654);return function(){return w.randomBytes(1)[0]}}catch{}return function(){return kB("randomDevice")}}();K.createDevice("/dev","random",r),K.createDevice("/dev","urandom",r),K.mkdir("/dev/shm"),K.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){K.mkdir("/proc");var r=K.mkdir("/proc/self");K.mkdir("/proc/self/fd"),K.mount({mount:function(){var l=K.createNode(r,"fd",16895,73);return l.node_ops={lookup:function(w,U){var _=+U,j=K.getStream(_);if(!j)throw new K.ErrnoError(8);var aA={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return j.path}}};return aA.parent=aA,aA}},l}},{},"/proc/self/fd")},createStandardStreams:function(){R.stdin?K.createDevice("/dev","stdin",R.stdin):K.symlink("/dev/tty","/dev/stdin"),R.stdout?K.createDevice("/dev","stdout",null,R.stdout):K.symlink("/dev/tty","/dev/stdout"),R.stderr?K.createDevice("/dev","stderr",null,R.stderr):K.symlink("/dev/tty1","/dev/stderr"),K.open("/dev/stdin",0),K.open("/dev/stdout",1),K.open("/dev/stderr",1)},ensureErrnoError:function(){K.ErrnoError||(K.ErrnoError=function(r,l){this.node=l,this.setErrno=function(w){this.errno=w},this.setErrno(r),this.message="FS error"},K.ErrnoError.prototype=new Error,K.ErrnoError.prototype.constructor=K.ErrnoError,[44].forEach(function(r){K.genericErrors[r]=new K.ErrnoError(r),K.genericErrors[r].stack="<generic error, no stack>"}))},staticInit:function(){K.ensureErrnoError(),K.nameTable=new Array(4096),K.mount(iI,{},"/"),K.createDefaultDirectories(),K.createDefaultDevices(),K.createSpecialDirectories(),K.filesystems={MEMFS:iI}},init:function(r,l,w){K.init.initialized=!0,K.ensureErrnoError(),R.stdin=r||R.stdin,R.stdout=l||R.stdout,R.stderr=w||R.stderr,K.createStandardStreams()},quit:function(){K.init.initialized=!1;for(var r=0;r<K.streams.length;r++){var l=K.streams[r];l&&K.close(l)}},getMode:function(r,l){var w=0;return r&&(w|=365),l&&(w|=146),w},findObject:function(r,l){var w=K.analyzePath(r,l);return w.exists?w.object:null},analyzePath:function(r,l){try{r=(U=K.lookupPath(r,{follow:!l})).path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var U=K.lookupPath(r,{parent:!0});w.parentExists=!0,w.parentPath=U.path,w.parentObject=U.node,w.name=RI.basename(r),U=K.lookupPath(r,{follow:!l}),w.exists=!0,w.path=U.path,w.object=U.node,w.name=U.node.name,w.isRoot=U.path==="/"}catch(_){w.error=_.errno}return w},createPath:function(r,l,w,U){r=typeof r=="string"?r:K.getPath(r);for(var _=l.split("/").reverse();_.length;){var j=_.pop();if(j){var aA=RI.join2(r,j);try{K.mkdir(aA)}catch{}r=aA}}return aA},createFile:function(r,l,w,U,_){var j=RI.join2(typeof r=="string"?r:K.getPath(r),l),aA=K.getMode(U,_);return K.create(j,aA)},createDataFile:function(r,l,w,U,_,j){var aA=l;r&&(r=typeof r=="string"?r:K.getPath(r),aA=l?RI.join2(r,l):r);var uA=K.getMode(U,_),vA=K.create(aA,uA);if(w){if(typeof w=="string"){for(var $A=new Array(w.length),Ng=0,xg=w.length;Ng<xg;++Ng)$A[Ng]=w.charCodeAt(Ng);w=$A}K.chmod(vA,146|uA);var eg=K.open(vA,577);K.write(eg,w,0,w.length,0,j),K.close(eg),K.chmod(vA,uA)}return vA},createDevice:function(r,l,w,U){var _=RI.join2(typeof r=="string"?r:K.getPath(r),l),j=K.getMode(!!w,!!U);K.createDevice.major||(K.createDevice.major=64);var aA=K.makedev(K.createDevice.major++,0);return K.registerDevice(aA,{open:function(uA){uA.seekable=!1},close:function(uA){U&&U.buffer&&U.buffer.length&&U(10)},read:function(uA,vA,$A,Ng,xg){for(var eg=0,Kg=0;Kg<Ng;Kg++){var Sg;try{Sg=w()}catch{throw new K.ErrnoError(29)}if(Sg===void 0&&eg===0)throw new K.ErrnoError(6);if(Sg==null)break;eg++,vA[$A+Kg]=Sg}return eg&&(uA.node.timestamp=Date.now()),eg},write:function(uA,vA,$A,Ng,xg){for(var eg=0;eg<Ng;eg++)try{U(vA[$A+eg])}catch{throw new K.ErrnoError(29)}return Ng&&(uA.node.timestamp=Date.now()),eg}}),K.mkdev(_,j,aA)},forceLoadFile:function(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!DA)throw new Error("Cannot load without read() or XMLHttpRequest.");try{r.contents=mE(DA(r.url),!0),r.usedBytes=r.contents.length}catch{throw new K.ErrnoError(29)}},createLazyFile:function(r,l,w,U,_){function j(){this.lengthKnown=!1,this.chunks=[]}if(j.prototype.get=function(xg){if(!(xg>this.length-1||xg<0)){var eg=xg%this.chunkSize,Kg=xg/this.chunkSize|0;return this.getter(Kg)[eg]}},j.prototype.setDataGetter=function(xg){this.getter=xg},j.prototype.cacheLength=function(){var xg=new XMLHttpRequest;if(xg.open("HEAD",w,!1),xg.send(null),!(xg.status>=200&&xg.status<300||xg.status===304))throw new Error("Couldn't load "+w+". Status: "+xg.status);var eg,Kg=Number(xg.getResponseHeader("Content-length")),Sg=(eg=xg.getResponseHeader("Accept-Ranges"))&&eg==="bytes",BI=(eg=xg.getResponseHeader("Content-Encoding"))&&eg==="gzip",$t=1048576;Sg||($t=Kg);var fI=this;fI.setDataGetter(function(Eg){var wt=Eg*$t,KI=(Eg+1)*$t-1;if(KI=Math.min(KI,Kg-1),fI.chunks[Eg]===void 0&&(fI.chunks[Eg]=function(YI,we){if(YI>we)throw new Error("invalid range ("+YI+", "+we+") or no bytes requested!");if(we>Kg-1)throw new Error("only "+Kg+" bytes available! programmer error!");var Be=new XMLHttpRequest;if(Be.open("GET",w,!1),Kg!==$t&&Be.setRequestHeader("Range","bytes="+YI+"-"+we),Be.responseType="arraybuffer",Be.overrideMimeType&&Be.overrideMimeType("text/plain; charset=x-user-defined"),Be.send(null),!(Be.status>=200&&Be.status<300||Be.status===304))throw new Error("Couldn't load "+w+". Status: "+Be.status);return Be.response!==void 0?new Uint8Array(Be.response||[]):mE(Be.responseText||"",!0)}(wt,KI)),fI.chunks[Eg]===void 0)throw new Error("doXHR failed!");return fI.chunks[Eg]}),!BI&&Kg||($t=Kg=1,Kg=this.getter(0).length,$t=Kg,yI("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Kg,this._chunkSize=$t,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!Gg)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var aA=new j;Object.defineProperties(aA,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var uA={isDevice:!1,contents:aA}}else uA={isDevice:!1,url:w};var vA=K.createFile(r,l,uA,U,_);uA.contents?vA.contents=uA.contents:uA.url&&(vA.contents=null,vA.url=uA.url),Object.defineProperties(vA,{usedBytes:{get:function(){return this.contents.length}}});var $A={};function Ng(xg,eg,Kg,Sg,BI){var $t=xg.node.contents;if(BI>=$t.length)return 0;var fI=Math.min($t.length-BI,Sg);if($t.slice)for(var Eg=0;Eg<fI;Eg++)eg[Kg+Eg]=$t[BI+Eg];else for(Eg=0;Eg<fI;Eg++)eg[Kg+Eg]=$t.get(BI+Eg);return fI}return Object.keys(vA.stream_ops).forEach(function(xg){var eg=vA.stream_ops[xg];$A[xg]=function(){return K.forceLoadFile(vA),eg.apply(null,arguments)}}),$A.read=function(xg,eg,Kg,Sg,BI){return K.forceLoadFile(vA),Ng(xg,eg,Kg,Sg,BI)},$A.mmap=function(xg,eg,Kg,Sg,BI){K.forceLoadFile(vA);var $t=$n();if(!$t)throw new K.ErrnoError(48);return Ng(xg,$I,$t,eg,Kg),{ptr:$t,allocated:!0}},vA.stream_ops=$A,vA},createPreloadedFile:function(r,l,w,U,_,j,aA,uA,vA,$A){var Ng=l?vi.resolve(RI.join2(r,l)):r;function xg(eg){function Kg(Sg){$A&&$A(),uA||K.createDataFile(r,l,Sg,U,_,vA),j&&j(),RE()}Browser.handledByPreloadPlugin(eg,Ng,Kg,function(){aA&&aA(),RE()})||Kg(eg)}KQ(),typeof w=="string"?function(eg,Kg,Sg,BI){var $t="al "+eg;yA(eg,function(fI){HI(fI,'Loading data file "'+eg+'" failed (no arrayBuffer).'),xg(new Uint8Array(fI)),$t&&RE()},function(fI){if(!Sg)throw'Loading data file "'+eg+'" failed.';Sg()}),$t&&KQ()}(w,0,aA):xg(w)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(r,l,w){l=l||function(){},w=w||function(){};var U=K.indexedDB();try{var _=U.open(K.DB_NAME(),K.DB_VERSION)}catch(j){return w(j)}_.onupgradeneeded=function(){yI("creating db"),_.result.createObjectStore(K.DB_STORE_NAME)},_.onsuccess=function(){var j=_.result.transaction([K.DB_STORE_NAME],"readwrite"),aA=j.objectStore(K.DB_STORE_NAME),uA=0,vA=0,$A=r.length;function Ng(){vA==0?l():w()}r.forEach(function(xg){var eg=aA.put(K.analyzePath(xg).object.contents,xg);eg.onsuccess=function(){++uA+vA==$A&&Ng()},eg.onerror=function(){vA++,uA+vA==$A&&Ng()}}),j.onerror=w},_.onerror=w},loadFilesFromDB:function(r,l,w){l=l||function(){},w=w||function(){};var U=K.indexedDB();try{var _=U.open(K.DB_NAME(),K.DB_VERSION)}catch(j){return w(j)}_.onupgradeneeded=w,_.onsuccess=function(){var j=_.result;try{var aA=j.transaction([K.DB_STORE_NAME],"readonly")}catch(eg){return void w(eg)}var uA=aA.objectStore(K.DB_STORE_NAME),vA=0,$A=0,Ng=r.length;function xg(){$A==0?l():w()}r.forEach(function(eg){var Kg=uA.get(eg);Kg.onsuccess=function(){K.analyzePath(eg).exists&&K.unlink(eg),K.createDataFile(RI.dirname(eg),RI.basename(eg),Kg.result,!0,!0,!0),++vA+$A==Ng&&xg()},Kg.onerror=function(){$A++,vA+$A==Ng&&xg()}}),aA.onerror=w},_.onerror=w}},ee={DEFAULT_POLLMASK:5,calculateAt:function(r,l,w){if(RI.isAbs(l))return l;var U;if(U=r===-100?K.cwd():ee.getStreamFromFD(r).path,l.length==0){if(!w)throw new K.ErrnoError(44);return U}return RI.join2(U,l)},doStat:function(r,l,w){try{var U=r(l)}catch(_){if(_&&_.node&&RI.normalize(l)!==RI.normalize(K.getPath(_.node)))return-54;throw _}return St[w>>2]=U.dev,St[w+8>>2]=U.ino,St[w+12>>2]=U.mode,MI[w+16>>2]=U.nlink,St[w+20>>2]=U.uid,St[w+24>>2]=U.gid,St[w+28>>2]=U.rdev,Ie=[U.size>>>0,(uI=U.size,+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[w+40>>2]=Ie[0],St[w+44>>2]=Ie[1],St[w+48>>2]=4096,St[w+52>>2]=U.blocks,Ie=[Math.floor(U.atime.getTime()/1e3)>>>0,(uI=Math.floor(U.atime.getTime()/1e3),+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[w+56>>2]=Ie[0],St[w+60>>2]=Ie[1],MI[w+64>>2]=0,Ie=[Math.floor(U.mtime.getTime()/1e3)>>>0,(uI=Math.floor(U.mtime.getTime()/1e3),+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[w+72>>2]=Ie[0],St[w+76>>2]=Ie[1],MI[w+80>>2]=0,Ie=[Math.floor(U.ctime.getTime()/1e3)>>>0,(uI=Math.floor(U.ctime.getTime()/1e3),+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[w+88>>2]=Ie[0],St[w+92>>2]=Ie[1],MI[w+96>>2]=0,Ie=[U.ino>>>0,(uI=U.ino,+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[w+104>>2]=Ie[0],St[w+108>>2]=Ie[1],0},doMsync:function(r,l,w,U,_){var j=ae.slice(r,r+w);K.msync(l,j,_,w,U)},varargs:void 0,get:function(){return ee.varargs+=4,St[ee.varargs-4>>2]},getStr:function(r){return pE(r)},getStreamFromFD:function(r){var l=K.getStream(r);if(!l)throw new K.ErrnoError(8);return l}},SE={};function Ao(r){for(;r.length;){var l=r.pop();r.pop()(l)}}function JC(r){return this.fromWireType(St[r>>2])}var QC={},JB={},GE={};function bC(r){if(r===void 0)return"_unknown";var l=(r=r.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return l>=48&&l<=57?"_"+r:r}function FE(r,l){return r=bC(r),new Function("body","return function "+r+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(l)}function NE(r,l){var w=FE(l,function(U){this.name=l,this.message=U;var _=new Error(U).stack;_!==void 0&&(this.stack=this.toString()+`
`+_.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(r.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},w}var go=void 0;function ni(r){throw new go(r)}function mI(r,l,w){function U(uA){var vA=w(uA);vA.length!==r.length&&ni("Mismatched type converter count");for(var $A=0;$A<r.length;++$A)Hi(r[$A],vA[$A])}r.forEach(function(uA){GE[uA]=l});var _=new Array(l.length),j=[],aA=0;l.forEach(function(uA,vA){JB.hasOwnProperty(uA)?_[vA]=JB[uA]:(j.push(uA),QC.hasOwnProperty(uA)||(QC[uA]=[]),QC[uA].push(function(){_[vA]=JB[uA],++aA===j.length&&U(_)}))}),j.length===0&&U(_)}function HQ(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}var yg=void 0;function GI(r){for(var l="",w=r;ae[w];)l+=yg[ae[w++]];return l}var nB=void 0;function SI(r){throw new nB(r)}function Hi(r,l){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in l))throw new TypeError("registerType registeredInstance requires argPackAdvance");var U=l.name;if(r||SI('type "'+U+'" must have a positive integer typeid pointer'),JB.hasOwnProperty(r)){if(w.ignoreDuplicateRegistrations)return;SI("Cannot register type '"+U+"' twice")}if(JB[r]=l,delete GE[r],QC.hasOwnProperty(r)){var _=QC[r];delete QC[r],_.forEach(function(j){return j()})}}function oB(r){SI(r.$$.ptrType.registeredClass.name+" instance already deleted")}var bB=!1;function Ye(r){}function EA(r){r.count.value-=1,r.count.value===0&&function(l){l.smartPtr?l.smartPtrType.rawDestructor(l.smartPtr):l.ptrType.registeredClass.rawDestructor(l.ptr)}(r)}function UE(r,l,w){if(l===w)return r;if(w.baseClass===void 0)return null;var U=UE(r,l,w.baseClass);return U===null?null:w.downcast(U)}var TQ={},Fi=[];function KC(){for(;Fi.length;){var r=Fi.pop();r.$$.deleteScheduled=!1,r.delete()}}var YC=void 0,vC={};function di(r,l){return l.ptrType&&l.ptr||ni("makeClassHandle requires ptr and ptrType"),!!l.smartPtrType!=!!l.smartPtr&&ni("Both smartPtrType and smartPtr must be specified"),l.count={value:1},HC(Object.create(r,{$$:{value:l}}))}function HC(r){return typeof FinalizationRegistry>"u"?(HC=function(l){return l},r):(bB=new FinalizationRegistry(function(l){EA(l.$$)}),HC=function(l){var w=l.$$;if(w.smartPtr){var U={$$:w};bB.register(l,U,l)}return l},Ye=function(l){return bB.unregister(l)},HC(r))}function sB(){}function to(r,l,w){if(r[l].overloadTable===void 0){var U=r[l];r[l]=function(){return r[l].overloadTable.hasOwnProperty(arguments.length)||SI("Function '"+w+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[l].overloadTable+")!"),r[l].overloadTable[arguments.length].apply(this,arguments)},r[l].overloadTable=[],r[l].overloadTable[U.argCount]=U}}function Io(r,l,w){R.hasOwnProperty(r)?((w===void 0||R[r].overloadTable!==void 0&&R[r].overloadTable[w]!==void 0)&&SI("Cannot register public name '"+r+"' twice"),to(R,r,r),R.hasOwnProperty(w)&&SI("Cannot register multiple overloads of a function with the same number of arguments ("+w+")!"),R[r].overloadTable[w]=l):(R[r]=l,w!==void 0&&(R[r].numArguments=w))}function Se(r,l,w,U,_,j,aA,uA){this.name=r,this.constructor=l,this.instancePrototype=w,this.rawDestructor=U,this.baseClass=_,this.getActualType=j,this.upcast=aA,this.downcast=uA,this.pureVirtualFunctions=[]}function aB(r,l,w){for(;l!==w;)l.upcast||SI("Expected null or instance of "+w.name+", got an instance of "+l.name),r=l.upcast(r),l=l.baseClass;return r}function qQ(r,l){if(l===null)return this.isReference&&SI("null is not a valid "+this.name),0;l.$$||SI('Cannot pass "'+rB(l)+'" as a '+this.name),l.$$.ptr||SI("Cannot pass deleted object as a pointer of type "+this.name);var w=l.$$.ptrType.registeredClass;return aB(l.$$.ptr,w,this.registeredClass)}function KB(r,l){var w;if(l===null)return this.isReference&&SI("null is not a valid "+this.name),this.isSmartPointer?(w=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,w),w):0;l.$$||SI('Cannot pass "'+rB(l)+'" as a '+this.name),l.$$.ptr||SI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&l.$$.ptrType.isConst&&SI("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);var U=l.$$.ptrType.registeredClass;if(w=aB(l.$$.ptr,U,this.registeredClass),this.isSmartPointer)switch(l.$$.smartPtr===void 0&&SI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:l.$$.smartPtrType===this?w=l.$$.smartPtr:SI("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:w=l.$$.smartPtr;break;case 2:if(l.$$.smartPtrType===this)w=l.$$.smartPtr;else{var _=l.clone();w=this.rawShare(w,_i.toHandle(function(){_.delete()})),r!==null&&r.push(this.rawDestructor,w)}break;default:SI("Unsupporting sharing policy")}return w}function _Q(r,l){if(l===null)return this.isReference&&SI("null is not a valid "+this.name),0;l.$$||SI('Cannot pass "'+rB(l)+'" as a '+this.name),l.$$.ptr||SI("Cannot pass deleted object as a pointer of type "+this.name),l.$$.ptrType.isConst&&SI("Cannot convert argument of type "+l.$$.ptrType.name+" to parameter type "+this.name);var w=l.$$.ptrType.registeredClass;return aB(l.$$.ptr,w,this.registeredClass)}function Ti(r,l,w,U,_,j,aA,uA,vA,$A,Ng){this.name=r,this.registeredClass=l,this.isReference=w,this.isConst=U,this.isSmartPointer=_,this.pointeeType=j,this.sharingPolicy=aA,this.rawGetPointee=uA,this.rawConstructor=vA,this.rawShare=$A,this.rawDestructor=Ng,_||l.baseClass!==void 0?this.toWireType=KB:U?(this.toWireType=qQ,this.destructorFunction=null):(this.toWireType=_Q,this.destructorFunction=null)}function jI(r,l,w){R.hasOwnProperty(r)||ni("Replacing nonexistant public symbol"),R[r].overloadTable!==void 0&&w!==void 0?R[r].overloadTable[w]=l:(R[r]=l,R[r].argCount=w)}function cI(r){return Xn.get(r)}function ui(r,l,w){return r.includes("j")?function(U,_,j){var aA=R["dynCall_"+U];return j&&j.length?aA.apply(null,[_].concat(j)):aA.call(null,_)}(r,l,w):cI(l).apply(null,w)}function We(r,l){var w,U,_,j=(r=GI(r)).includes("j")?(w=r,U=l,_=[],function(){return _.length=0,Object.assign(_,arguments),ui(w,U,_)}):cI(l);return typeof j!="function"&&SI("unknown function pointer with signature "+r+": "+l),j}var eo=void 0;function kE(r){var l=Zi(r),w=GI(l);return Vi(l),w}function LE(r,l){var w=[],U={};throw l.forEach(function _(j){U[j]||JB[j]||(GE[j]?GE[j].forEach(_):(w.push(j),U[j]=!0))}),new eo(r+": "+w.map(kE).join([", "]))}function WQ(r,l){for(var w=[],U=0;U<r;U++)w.push(MI[l+4*U>>2]);return w}function qi(r,l,w,U,_){var j=l.length;j<2&&SI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var aA=l[1]!==null&&w!==null,uA=!1,vA=1;vA<l.length;++vA)if(l[vA]!==null&&l[vA].destructorFunction===void 0){uA=!0;break}var $A=l[0].name!=="void",Ng="",xg="";for(vA=0;vA<j-2;++vA)Ng+=(vA!==0?", ":"")+"arg"+vA,xg+=(vA!==0?", ":"")+"arg"+vA+"Wired";var eg="return function "+bC(r)+"("+Ng+`) {
if (arguments.length !== `+(j-2)+`) {
throwBindingError('function `+r+" called with ' + arguments.length + ' arguments, expected "+(j-2)+` args!');
}
`;uA&&(eg+=`var destructors = [];
`);var Kg=uA?"destructors":"null",Sg=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],BI=[SI,U,_,Ao,l[0],l[1]];for(aA&&(eg+="var thisWired = classParam.toWireType("+Kg+`, this);
`),vA=0;vA<j-2;++vA)eg+="var arg"+vA+"Wired = argType"+vA+".toWireType("+Kg+", arg"+vA+"); // "+l[vA+2].name+`
`,Sg.push("argType"+vA),BI.push(l[vA+2]);if(aA&&(xg="thisWired"+(xg.length>0?", ":"")+xg),eg+=($A?"var rv = ":"")+"invoker(fn"+(xg.length>0?", ":"")+xg+`);
`,uA)eg+=`runDestructors(destructors);
`;else for(vA=aA?1:2;vA<l.length;++vA){var $t=vA===1?"thisWired":"arg"+(vA-2)+"Wired";l[vA].destructorFunction!==null&&(eg+=$t+"_dtor("+$t+"); // "+l[vA].name+`
`,Sg.push($t+"_dtor"),BI.push(l[vA].destructorFunction))}return $A&&(eg+=`var ret = retType.fromWireType(rv);
return ret;
`),eg+=`}
`,Sg.push(eg),function(fI,Eg){if(!(fI instanceof Function))throw new TypeError("new_ called with constructor type "+hA(fI)+" which is not a function");var wt=FE(fI.name||"unknownFunctionName",function(){});wt.prototype=fI.prototype;var KI=new wt,YI=fI.apply(KI,Eg);return YI instanceof Object?YI:KI}(Function,Sg).apply(null,BI)}var Di=[],fe=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function xE(r){r>4&&--fe[r].refcount==0&&(fe[r]=void 0,Di.push(r))}var _i={toValue:function(r){return r||SI("Cannot use deleted val. handle = "+r),fe[r].value},toHandle:function(r){switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var l=Di.length?Di.pop():fe.length;return fe[l]={refcount:1,value:r},l}}};function rB(r){if(r===null)return"null";var l=hA(r);return l==="object"||l==="array"||l==="function"?r.toString():""+r}function nC(r,l){switch(l){case 2:return function(w){return this.fromWireType(On[w>>2])};case 3:return function(w){return this.fromWireType(JQ[w>>3])};default:throw new TypeError("Unknown float type: "+r)}}function hB(r,l,w){switch(l){case 0:return w?function(U){return $I[U]}:function(U){return ae[U]};case 1:return w?function(U){return be[U>>1]}:function(U){return NB[U>>1]};case 2:return w?function(U){return St[U>>2]}:function(U){return MI[U>>2]};default:throw new TypeError("Unknown integer type: "+r)}}var Wi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function YB(r,l){for(var w=r,U=w>>1,_=U+l/2;!(U>=_)&&NB[U];)++U;if((w=U<<1)-r>32&&Wi)return Wi.decode(ae.subarray(r,w));for(var j="",aA=0;!(aA>=l/2);++aA){var uA=be[r+2*aA>>1];if(uA==0)break;j+=String.fromCharCode(uA)}return j}function TC(r,l,w){if(w===void 0&&(w=2147483647),w<2)return 0;for(var U=l,_=(w-=2)<2*r.length?w/2:r.length,j=0;j<_;++j){var aA=r.charCodeAt(j);be[l>>1]=aA,l+=2}return be[l>>1]=0,l-U}function JE(r){return 2*r.length}function bE(r,l){for(var w=0,U="";!(w>=l/4);){var _=St[r+4*w>>2];if(_==0)break;if(++w,_>=65536){var j=_-65536;U+=String.fromCharCode(55296|j>>10,56320|1023&j)}else U+=String.fromCharCode(_)}return U}function vB(r,l,w){if(w===void 0&&(w=2147483647),w<4)return 0;for(var U=l,_=U+w-4,j=0;j<r.length;++j){var aA=r.charCodeAt(j);if(aA>=55296&&aA<=57343&&(aA=65536+((1023&aA)<<10)|1023&r.charCodeAt(++j)),St[l>>2]=aA,(l+=4)+4>_)break}return St[l>>2]=0,l-U}function PQ(r){for(var l=0,w=0;w<r.length;++w){var U=r.charCodeAt(w);U>=55296&&U<=57343&&++w,l+=4}return l}function io(r){var l=ME(r)+1,w=ve(l);return w&&yE(r,$I,w,l),w}var HB=[];function OQ(r){try{return Ee.grow(r-Qi.byteLength+65535>>>16),Zn(Ee.buffer),1}catch{}}var Pi={};function Ai(){if(!Ai.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":hA(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:kA||"./this.program"};for(var l in Pi)Pi[l]===void 0?delete r[l]:r[l]=Pi[l];var w=[];for(var l in r)w.push(l+"="+r[l]);Ai.strings=w}return Ai.strings}function oC(r){return r%4==0&&(r%100!=0||r%400==0)}var qC=[31,29,31,30,31,30,31,31,30,31,30,31],Oi=[31,28,31,30,31,30,31,31,30,31,30,31];function KE(r,l,w,U){var _=St[U+40>>2],j={tm_sec:St[U>>2],tm_min:St[U+4>>2],tm_hour:St[U+8>>2],tm_mday:St[U+12>>2],tm_mon:St[U+16>>2],tm_year:St[U+20>>2],tm_wday:St[U+24>>2],tm_yday:St[U+28>>2],tm_isdst:St[U+32>>2],tm_gmtoff:St[U+36>>2],tm_zone:_?pE(_):""},aA=pE(w),uA={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var vA in uA)aA=aA.replace(new RegExp(vA,"g"),uA[vA]);var $A=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ng=["January","February","March","April","May","June","July","August","September","October","November","December"];function xg(Eg,wt,KI){for(var YI=typeof Eg=="number"?Eg.toString():Eg||"";YI.length<wt;)YI=KI[0]+YI;return YI}function eg(Eg,wt){return xg(Eg,wt,"0")}function Kg(Eg,wt){function KI(we){return we<0?-1:we>0?1:0}var YI;return(YI=KI(Eg.getFullYear()-wt.getFullYear()))===0&&(YI=KI(Eg.getMonth()-wt.getMonth()))===0&&(YI=KI(Eg.getDate()-wt.getDate())),YI}function Sg(Eg){switch(Eg.getDay()){case 0:return new Date(Eg.getFullYear()-1,11,29);case 1:return Eg;case 2:return new Date(Eg.getFullYear(),0,3);case 3:return new Date(Eg.getFullYear(),0,2);case 4:return new Date(Eg.getFullYear(),0,1);case 5:return new Date(Eg.getFullYear()-1,11,31);case 6:return new Date(Eg.getFullYear()-1,11,30)}}function BI(Eg){var wt=function(XQ,He){for(var gi=new Date(XQ.getTime());He>0;){var Ge=oC(gi.getFullYear()),YE=gi.getMonth(),oi=(Ge?qC:Oi)[YE];if(!(He>oi-gi.getDate()))return gi.setDate(gi.getDate()+He),gi;He-=oi-gi.getDate()+1,gi.setDate(1),YE<11?gi.setMonth(YE+1):(gi.setMonth(0),gi.setFullYear(gi.getFullYear()+1))}return gi}(new Date(Eg.tm_year+1900,0,1),Eg.tm_yday),KI=new Date(wt.getFullYear(),0,4),YI=new Date(wt.getFullYear()+1,0,4),we=Sg(KI),Be=Sg(YI);return Kg(we,wt)<=0?Kg(Be,wt)<=0?wt.getFullYear()+1:wt.getFullYear():wt.getFullYear()-1}var $t={"%a":function(Eg){return $A[Eg.tm_wday].substring(0,3)},"%A":function(Eg){return $A[Eg.tm_wday]},"%b":function(Eg){return Ng[Eg.tm_mon].substring(0,3)},"%B":function(Eg){return Ng[Eg.tm_mon]},"%C":function(Eg){return eg((Eg.tm_year+1900)/100|0,2)},"%d":function(Eg){return eg(Eg.tm_mday,2)},"%e":function(Eg){return xg(Eg.tm_mday,2," ")},"%g":function(Eg){return BI(Eg).toString().substring(2)},"%G":function(Eg){return BI(Eg)},"%H":function(Eg){return eg(Eg.tm_hour,2)},"%I":function(Eg){var wt=Eg.tm_hour;return wt==0?wt=12:wt>12&&(wt-=12),eg(wt,2)},"%j":function(Eg){return eg(Eg.tm_mday+function(wt,KI){for(var YI=0,we=0;we<=KI;YI+=wt[we++]);return YI}(oC(Eg.tm_year+1900)?qC:Oi,Eg.tm_mon-1),3)},"%m":function(Eg){return eg(Eg.tm_mon+1,2)},"%M":function(Eg){return eg(Eg.tm_min,2)},"%n":function(){return`
`},"%p":function(Eg){return Eg.tm_hour>=0&&Eg.tm_hour<12?"AM":"PM"},"%S":function(Eg){return eg(Eg.tm_sec,2)},"%t":function(){return"	"},"%u":function(Eg){return Eg.tm_wday||7},"%U":function(Eg){var wt=Eg.tm_yday+7-Eg.tm_wday;return eg(Math.floor(wt/7),2)},"%V":function(Eg){var wt=Math.floor((Eg.tm_yday+7-(Eg.tm_wday+6)%7)/7);if((Eg.tm_wday+371-Eg.tm_yday-2)%7<=2&&wt++,wt){if(wt==53){var KI=(Eg.tm_wday+371-Eg.tm_yday)%7;KI==4||KI==3&&oC(Eg.tm_year)||(wt=1)}}else{wt=52;var YI=(Eg.tm_wday+7-Eg.tm_yday-1)%7;(YI==4||YI==5&&oC(Eg.tm_year%400-1))&&wt++}return eg(wt,2)},"%w":function(Eg){return Eg.tm_wday},"%W":function(Eg){var wt=Eg.tm_yday+7-(Eg.tm_wday+6)%7;return eg(Math.floor(wt/7),2)},"%y":function(Eg){return(Eg.tm_year+1900).toString().substring(2)},"%Y":function(Eg){return Eg.tm_year+1900},"%z":function(Eg){var wt=Eg.tm_gmtoff,KI=wt>=0;return wt=(wt=Math.abs(wt)/60)/60*100+wt%60,(KI?"+":"-")+("0000"+wt).slice(-4)},"%Z":function(Eg){return Eg.tm_zone},"%%":function(){return"%"}};for(var vA in aA=aA.replace(/%%/g,"\0\0"),$t)aA.includes(vA)&&(aA=aA.replace(new RegExp(vA,"g"),$t[vA](j)));var fI=mE(aA=aA.replace(/\0\0/g,"%"),!1);return fI.length>l?0:(function(Eg,wt){$I.set(Eg,wt)}(fI,r),fI.length-1)}var _C=function(r,l,w,U){r||(r=this),this.parent=r,this.mount=r.mount,this.mounted=null,this.id=K.nextInode++,this.name=l,this.mode=w,this.node_ops={},this.stream_ops={},this.rdev=U};Object.defineProperties(_C.prototype,{read:{get:function(){return!(365&~this.mode)},set:function(r){r?this.mode|=365:this.mode&=-366}},write:{get:function(){return!(146&~this.mode)},set:function(r){r?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return K.isDir(this.mode)}},isDevice:{get:function(){return K.isChrdev(this.mode)}}}),K.FSNode=_C,K.staticInit(),go=R.InternalError=NE(Error,"InternalError"),function(){for(var r=new Array(256),l=0;l<256;++l)r[l]=String.fromCharCode(l);yg=r}(),nB=R.BindingError=NE(Error,"BindingError"),sB.prototype.isAliasOf=function(r){if(!(this instanceof sB)||!(r instanceof sB))return!1;for(var l=this.$$.ptrType.registeredClass,w=this.$$.ptr,U=r.$$.ptrType.registeredClass,_=r.$$.ptr;l.baseClass;)w=l.upcast(w),l=l.baseClass;for(;U.baseClass;)_=U.upcast(_),U=U.baseClass;return l===U&&w===_},sB.prototype.clone=function(){if(this.$$.ptr||oB(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var r,l=HC(Object.create(Object.getPrototypeOf(this),{$$:{value:(r=this.$$,{count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType})}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},sB.prototype.delete=function(){this.$$.ptr||oB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&SI("Object already scheduled for deletion"),Ye(this),EA(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},sB.prototype.isDeleted=function(){return!this.$$.ptr},sB.prototype.deleteLater=function(){return this.$$.ptr||oB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&SI("Object already scheduled for deletion"),Fi.push(this),Fi.length===1&&YC&&YC(KC),this.$$.deleteScheduled=!0,this},R.getInheritedInstanceCount=function(){return Object.keys(vC).length},R.getLiveInheritedInstances=function(){var r=[];for(var l in vC)vC.hasOwnProperty(l)&&r.push(vC[l]);return r},R.flushPendingDeletes=KC,R.setDelayFunction=function(r){YC=r,Fi.length&&YC&&YC(KC)},Ti.prototype.getPointee=function(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},Ti.prototype.destructor=function(r){this.rawDestructor&&this.rawDestructor(r)},Ti.prototype.argPackAdvance=8,Ti.prototype.readValueFromPointer=JC,Ti.prototype.deleteObject=function(r){r!==null&&r.delete()},Ti.prototype.fromWireType=function(r){var l=this.getPointee(r);if(!l)return this.destructor(r),null;var w=function($A,Ng){return Ng=function(xg,eg){for(eg===void 0&&SI("ptr should not be undefined");xg.baseClass;)eg=xg.upcast(eg),xg=xg.baseClass;return eg}($A,Ng),vC[Ng]}(this.registeredClass,l);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=l,w.$$.smartPtr=r,w.clone();var U=w.clone();return this.destructor(r),U}function _(){return this.isSmartPointer?di(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:l,smartPtrType:this,smartPtr:r}):di(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var j,aA=this.registeredClass.getActualType(l),uA=TQ[aA];if(!uA)return _.call(this);j=this.isConst?uA.constPointerType:uA.pointerType;var vA=UE(l,this.registeredClass,j.registeredClass);return vA===null?_.call(this):this.isSmartPointer?di(j.registeredClass.instancePrototype,{ptrType:j,ptr:vA,smartPtrType:this,smartPtr:r}):di(j.registeredClass.instancePrototype,{ptrType:j,ptr:vA})},eo=R.UnboundTypeError=NE(Error,"UnboundTypeError"),R.count_emval_handles=function(){for(var r=0,l=5;l<fe.length;++l)fe[l]!==void 0&&++r;return r},R.get_first_emval=function(){for(var r=5;r<fe.length;++r)if(fe[r]!==void 0)return fe[r];return null};var VQ=typeof atob=="function"?atob:function(r){var l,w,U,_,j,aA,uA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",vA="",$A=0;r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");do l=uA.indexOf(r.charAt($A++))<<2|(_=uA.indexOf(r.charAt($A++)))>>4,w=(15&_)<<4|(j=uA.indexOf(r.charAt($A++)))>>2,U=(3&j)<<6|(aA=uA.indexOf(r.charAt($A++))),vA+=String.fromCharCode(l),j!==64&&(vA+=String.fromCharCode(w)),aA!==64&&(vA+=String.fromCharCode(U));while($A<r.length);return vA};function Ni(r){if(ci(r))return function(l){if(typeof jg=="boolean"&&jg){var w=Buffer.from(l,"base64");return new Uint8Array(w.buffer,w.byteOffset,w.byteLength)}try{for(var U=VQ(l),_=new Uint8Array(U.length),j=0;j<U.length;++j)_[j]=U.charCodeAt(j);return _}catch{throw new Error("Converting base64 string to bytes failed.")}}(r.slice(xC.length))}var jt,sC={g:function(r){return ve(r+24)+24},f:function(r,l,w){throw new Ae(r).init(l,w),r},o:function(r,l,w){ee.varargs=w;try{var U=ee.getStreamFromFD(r);switch(l){case 0:return(_=ee.get())<0?-28:K.createStream(U,_).fd;case 1:case 2:case 6:case 7:return 0;case 3:return U.flags;case 4:var _=ee.get();return U.flags|=_,0;case 5:return _=ee.get(),be[_+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return St[Bo()>>2]=28,-1}}catch(j){if(K===void 0||!(j instanceof K.ErrnoError))throw j;return-j.errno}},G:function(r,l,w){ee.varargs=w;try{var U=ee.getStreamFromFD(r);switch(l){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return U.tty?0:-59;case 21519:if(!U.tty)return-59;var _=ee.get();return St[_>>2]=0,0;case 21520:return U.tty?-28:-59;case 21531:return _=ee.get(),K.ioctl(U,l,_);default:return-28}}catch(j){if(K===void 0||!(j instanceof K.ErrnoError))throw j;return-j.errno}},H:function(r,l,w,U){ee.varargs=U;try{l=ee.getStr(l),l=ee.calculateAt(r,l);var _=U?ee.get():0;return K.open(l,w,_).fd}catch(j){if(K===void 0||!(j instanceof K.ErrnoError))throw j;return-j.errno}},R:function(r){var l=SE[r];delete SE[r];var w=l.rawConstructor,U=l.rawDestructor,_=l.fields;mI([r],_.map(function(j){return j.getterReturnType}).concat(_.map(function(j){return j.setterArgumentType})),function(j){var aA={};return _.forEach(function(uA,vA){var $A=uA.fieldName,Ng=j[vA],xg=uA.getter,eg=uA.getterContext,Kg=j[vA+_.length],Sg=uA.setter,BI=uA.setterContext;aA[$A]={read:function($t){return Ng.fromWireType(xg(eg,$t))},write:function($t,fI){var Eg=[];Sg(BI,$t,Kg.toWireType(Eg,fI)),Ao(Eg)}}}),[{name:l.name,fromWireType:function(uA){var vA={};for(var $A in aA)vA[$A]=aA[$A].read(uA);return U(uA),vA},toWireType:function(uA,vA){for(var $A in aA)if(!($A in vA))throw new TypeError('Missing field:  "'+$A+'"');var Ng=w();for($A in aA)aA[$A].write(Ng,vA[$A]);return uA!==null&&uA.push(U,Ng),Ng},argPackAdvance:8,readValueFromPointer:JC,destructorFunction:U}]})},y:function(r,l,w,U,_){},L:function(r,l,w,U,_){var j=HQ(w);Hi(r,{name:l=GI(l),fromWireType:function(aA){return!!aA},toWireType:function(aA,uA){return uA?U:_},argPackAdvance:8,readValueFromPointer:function(aA){var uA;if(w===1)uA=$I;else if(w===2)uA=be;else{if(w!==4)throw new TypeError("Unknown boolean type size: "+l);uA=St}return this.fromWireType(uA[aA>>j])},destructorFunction:null})},U:function(r,l,w,U,_,j,aA,uA,vA,$A,Ng,xg,eg){Ng=GI(Ng),j=We(_,j),uA&&(uA=We(aA,uA)),$A&&($A=We(vA,$A)),eg=We(xg,eg);var Kg=bC(Ng);Io(Kg,function(){LE("Cannot construct "+Ng+" due to unbound types",[U])}),mI([r,l,w],U?[U]:[],function(Sg){var BI,$t;Sg=Sg[0],$t=U?(BI=Sg.registeredClass).instancePrototype:sB.prototype;var fI=FE(Kg,function(){if(Object.getPrototypeOf(this)!==Eg)throw new nB("Use 'new' to construct "+Ng);if(wt.constructor_body===void 0)throw new nB(Ng+" has no accessible constructor");var Be=wt.constructor_body[arguments.length];if(Be===void 0)throw new nB("Tried to invoke ctor of "+Ng+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(wt.constructor_body).toString()+") parameters instead!");return Be.apply(this,arguments)}),Eg=Object.create($t,{constructor:{value:fI}});fI.prototype=Eg;var wt=new Se(Ng,fI,Eg,eg,BI,j,uA,$A),KI=new Ti(Ng,wt,!0,!1,!1),YI=new Ti(Ng+"*",wt,!1,!1,!1),we=new Ti(Ng+" const*",wt,!1,!0,!1);return TQ[r]={pointerType:YI,constPointerType:we},jI(Kg,fI),[KI,YI,we]})},Q:function(r,l,w,U,_,j){HI(l>0);var aA=WQ(l,w);_=We(U,_),mI([],[r],function(uA){var vA="constructor "+(uA=uA[0]).name;if(uA.registeredClass.constructor_body===void 0&&(uA.registeredClass.constructor_body=[]),uA.registeredClass.constructor_body[l-1]!==void 0)throw new nB("Cannot register multiple constructors with identical number of parameters ("+(l-1)+") for class '"+uA.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return uA.registeredClass.constructor_body[l-1]=function(){LE("Cannot construct "+uA.name+" due to unbound types",aA)},mI([],aA,function($A){return $A.splice(1,0,null),uA.registeredClass.constructor_body[l-1]=qi(vA,$A,null,_,j),[]}),[]})},h:function(r,l,w,U,_,j,aA,uA){var vA=WQ(w,U);l=GI(l),j=We(_,j),mI([],[r],function($A){var Ng=($A=$A[0]).name+"."+l;function xg(){LE("Cannot call "+Ng+" due to unbound types",vA)}l.startsWith("@@")&&(l=Symbol[l.substring(2)]),uA&&$A.registeredClass.pureVirtualFunctions.push(l);var eg=$A.registeredClass.instancePrototype,Kg=eg[l];return Kg===void 0||Kg.overloadTable===void 0&&Kg.className!==$A.name&&Kg.argCount===w-2?(xg.argCount=w-2,xg.className=$A.name,eg[l]=xg):(to(eg,l,Ng),eg[l].overloadTable[w-2]=xg),mI([],vA,function(Sg){var BI=qi(Ng,Sg,$A,j,aA);return eg[l].overloadTable===void 0?(BI.argCount=w-2,eg[l]=BI):eg[l].overloadTable[w-2]=BI,[]}),[]})},s:function(r,l,w){r=GI(r),mI([],[l],function(U){return U=U[0],R[r]=U.fromWireType(w),[]})},K:function(r,l){Hi(r,{name:l=GI(l),fromWireType:function(w){var U=_i.toValue(w);return xE(w),U},toWireType:function(w,U){return _i.toHandle(U)},argPackAdvance:8,readValueFromPointer:JC,destructorFunction:null})},r:function(r,l,w){var U=HQ(w);Hi(r,{name:l=GI(l),fromWireType:function(_){return _},toWireType:function(_,j){return j},argPackAdvance:8,readValueFromPointer:nC(l,U),destructorFunction:null})},d:function(r,l,w,U,_,j){var aA=WQ(l,w);r=GI(r),_=We(U,_),Io(r,function(){LE("Cannot call "+r+" due to unbound types",aA)},l-1),mI([],aA,function(uA){var vA=[uA[0],null].concat(uA.slice(1));return jI(r,qi(r,vA,null,_,j),l-1),[]})},e:function(r,l,w,U,_){l=GI(l);var j=HQ(w),aA=function($A){return $A};if(U===0){var uA=32-8*w;aA=function($A){return $A<<uA>>>uA}}var vA=l.includes("unsigned");Hi(r,{name:l,fromWireType:aA,toWireType:vA?function($A,Ng){return this.name,Ng>>>0}:function($A,Ng){return this.name,Ng},argPackAdvance:8,readValueFromPointer:hB(l,j,U!==0),destructorFunction:null})},c:function(r,l,w){var U=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][l];function _(j){var aA=MI,uA=aA[j>>=2],vA=aA[j+1];return new U(Qi,vA,uA)}Hi(r,{name:w=GI(w),fromWireType:_,argPackAdvance:8,readValueFromPointer:_},{ignoreDuplicateRegistrations:!0})},q:function(r,l){var w=(l=GI(l))==="std::string";Hi(r,{name:l,fromWireType:function(U){var _,j=MI[U>>2],aA=U+4;if(w)for(var uA=aA,vA=0;vA<=j;++vA){var $A=aA+vA;if(vA==j||ae[$A]==0){var Ng=pE(uA,$A-uA);_===void 0?_=Ng:(_+="\0",_+=Ng),uA=$A+1}}else{var xg=new Array(j);for(vA=0;vA<j;++vA)xg[vA]=String.fromCharCode(ae[aA+vA]);_=xg.join("")}return Vi(U),_},toWireType:function(U,_){var j;_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var aA=typeof _=="string";aA||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array||SI("Cannot pass non-string to std::string"),j=w&&aA?ME(_):_.length;var uA=ve(4+j+1),vA=uA+4;if(MI[uA>>2]=j,w&&aA)yE(_,ae,vA,j+1);else if(aA)for(var $A=0;$A<j;++$A){var Ng=_.charCodeAt($A);Ng>255&&(Vi(vA),SI("String has UTF-16 code units that do not fit in 8 bits")),ae[vA+$A]=Ng}else for($A=0;$A<j;++$A)ae[vA+$A]=_[$A];return U!==null&&U.push(Vi,uA),uA},argPackAdvance:8,readValueFromPointer:JC,destructorFunction:function(U){Vi(U)}})},l:function(r,l,w){var U,_,j,aA,uA;w=GI(w),l===2?(U=YB,_=TC,aA=JE,j=function(){return NB},uA=1):l===4&&(U=bE,_=vB,aA=PQ,j=function(){return MI},uA=2),Hi(r,{name:w,fromWireType:function(vA){for(var $A,Ng=MI[vA>>2],xg=j(),eg=vA+4,Kg=0;Kg<=Ng;++Kg){var Sg=vA+4+Kg*l;if(Kg==Ng||xg[Sg>>uA]==0){var BI=U(eg,Sg-eg);$A===void 0?$A=BI:($A+="\0",$A+=BI),eg=Sg+l}}return Vi(vA),$A},toWireType:function(vA,$A){typeof $A!="string"&&SI("Cannot pass non-string to C++ string type "+w);var Ng=aA($A),xg=ve(4+Ng+l);return MI[xg>>2]=Ng>>uA,_($A,xg+4,Ng+l),vA!==null&&vA.push(Vi,xg),xg},argPackAdvance:8,readValueFromPointer:JC,destructorFunction:function(vA){Vi(vA)}})},T:function(r,l,w,U,_,j){SE[r]={name:GI(l),rawConstructor:We(w,U),rawDestructor:We(_,j),fields:[]}},S:function(r,l,w,U,_,j,aA,uA,vA,$A){SE[r].fields.push({fieldName:GI(l),getterReturnType:w,getter:We(U,_),getterContext:j,setterArgumentType:aA,setter:We(uA,vA),setterContext:$A})},M:function(r,l){Hi(r,{isVoid:!0,name:l=GI(l),argPackAdvance:0,fromWireType:function(){},toWireType:function(w,U){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:xE,P:function(r){r>4&&(fe[r].refcount+=1)},N:function(r,l){var w,U;(U=JB[w=r])===void 0&&SI("_emval_take_value has unknown type "+kE(w));var _=(r=U).readValueFromPointer(l);return _i.toHandle(_)},I:function(r,l){var w,U=new Date(1e3*(MI[(w=r)>>2]+4294967296*St[w+4>>2]));St[l>>2]=U.getSeconds(),St[l+4>>2]=U.getMinutes(),St[l+8>>2]=U.getHours(),St[l+12>>2]=U.getDate(),St[l+16>>2]=U.getMonth(),St[l+20>>2]=U.getFullYear()-1900,St[l+24>>2]=U.getDay();var _=new Date(U.getFullYear(),0,1),j=(U.getTime()-_.getTime())/864e5|0;St[l+28>>2]=j,St[l+36>>2]=-60*U.getTimezoneOffset();var aA=new Date(U.getFullYear(),6,1).getTimezoneOffset(),uA=_.getTimezoneOffset(),vA=0|(aA!=uA&&U.getTimezoneOffset()==Math.min(uA,aA));St[l+32>>2]=vA},J:function r(l,w,U){r.called||(r.called=!0,function(_,j,aA){var uA=new Date().getFullYear(),vA=new Date(uA,0,1),$A=new Date(uA,6,1),Ng=vA.getTimezoneOffset(),xg=$A.getTimezoneOffset(),eg=Math.max(Ng,xg);function Kg(Eg){var wt=Eg.toTimeString().match(/\(([A-Za-z ]+)\)$/);return wt?wt[1]:"GMT"}St[_>>2]=60*eg,St[j>>2]=+(Ng!=xg);var Sg=Kg(vA),BI=Kg($A),$t=io(Sg),fI=io(BI);xg<Ng?(MI[aA>>2]=$t,MI[aA+4>>2]=fI):(MI[aA>>2]=fI,MI[aA+4>>2]=$t)}(l,w,U))},a:function(){kB("")},i:function(r,l,w){var U=function(_,j){var aA;for(HB.length=0,j>>=2;aA=ae[_++];)j+=aA!=105&j,HB.push(aA==105?St[j]:JQ[j++>>1]),++j;return HB}(l,w);return LB[r].apply(null,U)},B:function(r){var l=ae.length,w=2147483648;if((r>>>=0)>w)return!1;for(var U,_=1;_<=4;_*=2){var j=l*(1+.2/_);if(j=Math.min(j,r+100663296),OQ(Math.min(w,(U=Math.max(r,j))+(65536-U%65536)%65536)))return!0}return!1},C:function(r,l){var w=0;return Ai().forEach(function(U,_){var j=l+w;MI[r+4*_>>2]=j,function(aA,uA,vA){for(var $A=0;$A<aA.length;++$A)$I[0|uA++]=aA.charCodeAt($A);$I[0|uA]=0}(U,j),w+=U.length+1}),0},D:function(r,l){var w=Ai();MI[r>>2]=w.length;var U=0;return w.forEach(function(_){U+=_.length+1}),MI[l>>2]=U,0},b:function(r,l){var w;w=r,jn()||(R.onExit&&R.onExit(w),QB=!0),Tg(w,new xB(w))},m:function(r){try{var l=ee.getStreamFromFD(r);return K.close(l),0}catch(w){if(K===void 0||!(w instanceof K.ErrnoError))throw w;return w.errno}},F:function(r,l,w,U){try{var _=function(j,aA,uA,vA){for(var $A=0,Ng=0;Ng<uA;Ng++){var xg=MI[aA>>2],eg=MI[aA+4>>2];aA+=8;var Kg=K.read(j,$I,xg,eg,void 0);if(Kg<0)return-1;if($A+=Kg,Kg<eg)break}return $A}(ee.getStreamFromFD(r),l,w);return MI[U>>2]=_,0}catch(j){if(K===void 0||!(j instanceof K.ErrnoError))throw j;return j.errno}},x:function(r,l,w,U,_){try{var j=(vA=w)+2097152>>>0<4194305-!!(uA=l)?(uA>>>0)+4294967296*vA:NaN;if(isNaN(j))return 61;var aA=ee.getStreamFromFD(r);return K.llseek(aA,j,U),Ie=[aA.position>>>0,(uI=aA.position,+Math.abs(uI)>=1?uI>0?(0|Math.min(+Math.floor(uI/4294967296),4294967295))>>>0:~~+Math.ceil((uI-+(~~uI>>>0))/4294967296)>>>0:0)],St[_>>2]=Ie[0],St[_+4>>2]=Ie[1],aA.getdents&&j===0&&U===0&&(aA.getdents=null),0}catch($A){if(K===void 0||!($A instanceof K.ErrnoError))throw $A;return $A.errno}var uA,vA},n:function(r,l,w,U){try{var _=function(j,aA,uA,vA){for(var $A=0,Ng=0;Ng<uA;Ng++){var xg=MI[aA>>2],eg=MI[aA+4>>2];aA+=8;var Kg=K.write(j,$I,xg,eg,void 0);if(Kg<0)return-1;$A+=Kg}return $A}(ee.getStreamFromFD(r),l,w);return MI[U>>2]=_,0}catch(j){if(K===void 0||!(j instanceof K.ErrnoError))throw j;return j.errno}},t:function(r,l){var w=ie();try{return cI(r)(l)}catch(U){if(Xi(w),U!==U+0)throw U;fi(1,0)}},v:function(r,l,w){var U=ie();try{return cI(r)(l,w)}catch(_){if(Xi(U),_!==_+0)throw _;fi(1,0)}},u:function(r,l,w,U){var _=ie();try{return cI(r)(l,w,U)}catch(j){if(Xi(_),j!==j+0)throw j;fi(1,0)}},j:function(r,l){var w=ie();try{cI(r)(l)}catch(U){if(Xi(w),U!==U+0)throw U;fi(1,0)}},w:function(r,l,w){var U=ie();try{cI(r)(l,w)}catch(_){if(Xi(U),_!==_+0)throw _;fi(1,0)}},E:function(r,l,w,U){var _=ie();try{cI(r)(l,w,U)}catch(j){if(Xi(_),j!==j+0)throw j;fi(1,0)}},k:function(r,l,w,U,_){var j=ie();try{cI(r)(l,w,U,_)}catch(aA){if(Xi(j),aA!==aA+0)throw aA;fi(1,0)}},V:KE,z:function(r,l,w,U){return KE(r,l,w,U)}},ve=(function(){var r={a:sC};function l(_,j){var aA,uA=_.exports;R.asm=uA,Zn((Ee=R.asm.W).buffer),Xn=R.asm.$,aA=R.asm.X,bQ.unshift(aA),RE()}function w(_){l(_.instance)}function U(_){return function(){if(!ft&&(Ct||Gg)){if(typeof fetch=="function"&&!De($e))return fetch($e,{credentials:"same-origin"}).then(function(j){if(!j.ok)throw"failed to load wasm binary file at '"+$e+"'";return j.arrayBuffer()}).catch(function(){return vQ($e)});if(yA)return new Promise(function(j,aA){yA($e,function(uA){j(new Uint8Array(uA))},aA)})}return Promise.resolve().then(function(){return vQ($e)})}().then(function(j){return WebAssembly.instantiate(j,r)}).then(function(j){return j}).then(_,function(j){XI("failed to asynchronously prepare wasm: "+j),kB(j)})}if(KQ(),R.instantiateWasm)try{return R.instantiateWasm(r,l)}catch(_){return XI("Module.instantiateWasm callback failed with error: "+_),!1}(ft||typeof WebAssembly.instantiateStreaming!="function"||ci($e)||De($e)||jg||typeof fetch!="function"?U(w):fetch($e,{credentials:"same-origin"}).then(function(_){return WebAssembly.instantiateStreaming(_,r).then(w,function(j){return XI("wasm streaming compile failed: "+j),XI("falling back to ArrayBuffer instantiation"),U(w)})})).catch(CA)}(),R.___wasm_call_ctors=function(){return(R.___wasm_call_ctors=R.asm.X).apply(null,arguments)},R._malloc=function(){return(ve=R._malloc=R.asm.Y).apply(null,arguments)}),Vi=R._free=function(){return(Vi=R._free=R.asm.Z).apply(null,arguments)},Bo=R.___errno_location=function(){return(Bo=R.___errno_location=R.asm._).apply(null,arguments)},Zi=R.___getTypeName=function(){return(Zi=R.___getTypeName=R.asm.aa).apply(null,arguments)},fi=(R.__embind_initialize_bindings=function(){return(R.__embind_initialize_bindings=R.asm.ba).apply(null,arguments)},R._setThrew=function(){return(fi=R._setThrew=R.asm.ca).apply(null,arguments)}),ie=R.stackSave=function(){return(ie=R.stackSave=R.asm.da).apply(null,arguments)},Xi=R.stackRestore=function(){return(Xi=R.stackRestore=R.asm.ea).apply(null,arguments)},ZQ=R.___cxa_is_pointer_type=function(){return(ZQ=R.___cxa_is_pointer_type=R.asm.fa).apply(null,arguments)};function aC(r){function l(){jt||(jt=!0,R.calledRun=!0,QB||(R.noFSInit||K.init.initialized||K.init(),K.ignorePermissions=!1,Ke(bQ),V(R),R.onRuntimeInitialized&&R.onRuntimeInitialized(),function(){if(R.postRun)for(typeof R.postRun=="function"&&(R.postRun=[R.postRun]);R.postRun.length;)w=R.postRun.shift(),EC.unshift(w);var w;Ke(EC)}()))}UB>0||(function(){if(R.preRun)for(typeof R.preRun=="function"&&(R.preRun=[R.preRun]);R.preRun.length;)w=R.preRun.shift(),zn.unshift(w);var w;Ke(zn)}(),UB>0||(R.setStatus?(R.setStatus("Running..."),setTimeout(function(){setTimeout(function(){R.setStatus("")},1),l()},1)):l()))}if(R.dynCall_jiji=function(){return(R.dynCall_jiji=R.asm.ga).apply(null,arguments)},R.dynCall_viijii=function(){return(R.dynCall_viijii=R.asm.ha).apply(null,arguments)},R.dynCall_iiiiij=function(){return(R.dynCall_iiiiij=R.asm.ia).apply(null,arguments)},R.dynCall_iiiiijj=function(){return(R.dynCall_iiiiijj=R.asm.ja).apply(null,arguments)},R.dynCall_iiiiiijj=function(){return(R.dynCall_iiiiiijj=R.asm.ka).apply(null,arguments)},R.FS=K,LC=function r(){jt||aC(),jt||(LC=r)},R.preInit)for(typeof R.preInit=="function"&&(R.preInit=[R.preInit]);R.preInit.length>0;)R.preInit.pop()();return aC(),R.ready});const $=eA;function RA(R,V){return function(){return R.apply(V,arguments)}}const{toString:tg}=Object.prototype,{getPrototypeOf:Ag}=Object,lg=(ag=Object.create(null),R=>{const V=tg.call(R);return ag[V]||(ag[V]=V.slice(8,-1).toLowerCase())});var ag;const Bg=R=>(R=R.toLowerCase(),V=>lg(V)===R),fg=R=>V=>typeof V===R,{isArray:ZA}=Array,Wg=fg("undefined"),Et=Bg("ArrayBuffer"),dt=fg("string"),xt=fg("function"),QI=fg("number"),Ig=R=>R!==null&&typeof R=="object",mg=R=>{if(lg(R)!=="object")return!1;const V=Ag(R);return!(V!==null&&V!==Object.prototype&&Object.getPrototypeOf(V)!==null||Symbol.toStringTag in R||Symbol.iterator in R)},at=Bg("Date"),dg=Bg("File"),dA=Bg("Blob"),oA=Bg("FileList"),lA=Bg("URLSearchParams");function XA(R,V,{allOwnKeys:CA=!1}={}){if(R==null)return;let DA,yA;if(typeof R!="object"&&(R=[R]),ZA(R))for(DA=0,yA=R.length;DA<yA;DA++)V.call(null,R[DA],DA,R);else{const JA=CA?Object.getOwnPropertyNames(R):Object.keys(R),FA=JA.length;let cA;for(DA=0;DA<FA;DA++)cA=JA[DA],V.call(null,R[cA],cA,R)}}function fA(R,V){V=V.toLowerCase();const CA=Object.keys(R);let DA,yA=CA.length;for(;yA-- >0;)if(DA=CA[yA],V===DA.toLowerCase())return DA;return null}const KA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:N.g,gA=R=>!Wg(R)&&R!==KA,Jg=(Dg=typeof Uint8Array<"u"&&Ag(Uint8Array),R=>Dg&&R instanceof Dg);var Dg;const tt=Bg("HTMLFormElement"),Og=(({hasOwnProperty:R})=>(V,CA)=>R.call(V,CA))(Object.prototype),vt=Bg("RegExp"),gt=(R,V)=>{const CA=Object.getOwnPropertyDescriptors(R),DA={};XA(CA,(yA,JA)=>{V(yA,JA,R)!==!1&&(DA[JA]=yA)}),Object.defineProperties(R,DA)},q={isArray:ZA,isArrayBuffer:Et,isBuffer:function(R){return R!==null&&!Wg(R)&&R.constructor!==null&&!Wg(R.constructor)&&xt(R.constructor.isBuffer)&&R.constructor.isBuffer(R)},isFormData:R=>{const V="[object FormData]";return R&&(typeof FormData=="function"&&R instanceof FormData||tg.call(R)===V||xt(R.toString)&&R.toString()===V)},isArrayBufferView:function(R){let V;return V=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(R):R&&R.buffer&&Et(R.buffer),V},isString:dt,isNumber:QI,isBoolean:R=>R===!0||R===!1,isObject:Ig,isPlainObject:mg,isUndefined:Wg,isDate:at,isFile:dg,isBlob:dA,isRegExp:vt,isFunction:xt,isStream:R=>Ig(R)&&xt(R.pipe),isURLSearchParams:lA,isTypedArray:Jg,isFileList:oA,forEach:XA,merge:function R(){const{caseless:V}=gA(this)&&this||{},CA={},DA=(yA,JA)=>{const FA=V&&fA(CA,JA)||JA;mg(CA[FA])&&mg(yA)?CA[FA]=R(CA[FA],yA):mg(yA)?CA[FA]=R({},yA):ZA(yA)?CA[FA]=yA.slice():CA[FA]=yA};for(let yA=0,JA=arguments.length;yA<JA;yA++)arguments[yA]&&XA(arguments[yA],DA);return CA},extend:(R,V,CA,{allOwnKeys:DA}={})=>(XA(V,(yA,JA)=>{CA&&xt(yA)?R[JA]=RA(yA,CA):R[JA]=yA},{allOwnKeys:DA}),R),trim:R=>R.trim?R.trim():R.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:R=>(R.charCodeAt(0)===65279&&(R=R.slice(1)),R),inherits:(R,V,CA,DA)=>{R.prototype=Object.create(V.prototype,DA),R.prototype.constructor=R,Object.defineProperty(R,"super",{value:V.prototype}),CA&&Object.assign(R.prototype,CA)},toFlatObject:(R,V,CA,DA)=>{let yA,JA,FA;const cA={};if(V=V||{},R==null)return V;do{for(yA=Object.getOwnPropertyNames(R),JA=yA.length;JA-- >0;)FA=yA[JA],DA&&!DA(FA,R,V)||cA[FA]||(V[FA]=R[FA],cA[FA]=!0);R=CA!==!1&&Ag(R)}while(R&&(!CA||CA(R,V))&&R!==Object.prototype);return V},kindOf:lg,kindOfTest:Bg,endsWith:(R,V,CA)=>{R=String(R),(CA===void 0||CA>R.length)&&(CA=R.length),CA-=V.length;const DA=R.indexOf(V,CA);return DA!==-1&&DA===CA},toArray:R=>{if(!R)return null;if(ZA(R))return R;let V=R.length;if(!QI(V))return null;const CA=new Array(V);for(;V-- >0;)CA[V]=R[V];return CA},forEachEntry:(R,V)=>{const CA=(R&&R[Symbol.iterator]).call(R);let DA;for(;(DA=CA.next())&&!DA.done;){const yA=DA.value;V.call(R,yA[0],yA[1])}},matchAll:(R,V)=>{let CA;const DA=[];for(;(CA=R.exec(V))!==null;)DA.push(CA);return DA},isHTMLForm:tt,hasOwnProperty:Og,hasOwnProp:Og,reduceDescriptors:gt,freezeMethods:R=>{gt(R,(V,CA)=>{if(xt(R)&&["arguments","caller","callee"].indexOf(CA)!==-1)return!1;const DA=R[CA];xt(DA)&&(V.enumerable=!1,"writable"in V?V.writable=!1:V.set||(V.set=()=>{throw Error("Can not rewrite read-only method '"+CA+"'")}))})},toObjectSet:(R,V)=>{const CA={},DA=yA=>{yA.forEach(JA=>{CA[JA]=!0})};return ZA(R)?DA(R):DA(String(R).split(V)),CA},toCamelCase:R=>R.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(V,CA,DA){return CA.toUpperCase()+DA}),noop:()=>{},toFiniteNumber:(R,V)=>(R=+R,Number.isFinite(R)?R:V),findKey:fA,global:KA,isContextDefined:gA,toJSONObject:R=>{const V=new Array(10),CA=(DA,yA)=>{if(Ig(DA)){if(V.indexOf(DA)>=0)return;if(!("toJSON"in DA)){V[yA]=DA;const JA=ZA(DA)?[]:{};return XA(DA,(FA,cA)=>{const QA=CA(FA,yA+1);!Wg(QA)&&(JA[cA]=QA)}),V[yA]=void 0,JA}}return DA};return CA(R,0)}};function P(R,V,CA,DA,yA){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=R,this.name="AxiosError",V&&(this.code=V),CA&&(this.config=CA),DA&&(this.request=DA),yA&&(this.response=yA)}q.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const YA=P.prototype,Qg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(R=>{Qg[R]={value:R}}),Object.defineProperties(P,Qg),Object.defineProperty(YA,"isAxiosError",{value:!0}),P.from=(R,V,CA,DA,yA,JA)=>{const FA=Object.create(YA);return q.toFlatObject(R,FA,function(cA){return cA!==Error.prototype},cA=>cA!=="isAxiosError"),P.call(FA,R.message,V,CA,DA,yA),FA.cause=R,FA.name=R.name,JA&&Object.assign(FA,JA),FA};const _A=P,og=Y(230);function Vg(R){return q.isPlainObject(R)||q.isArray(R)}function Zg(R){return q.endsWith(R,"[]")?R.slice(0,-2):R}function Pg(R,V,CA){return R?R.concat(V).map(function(DA,yA){return DA=Zg(DA),!CA&&yA?"["+DA+"]":DA}).join(CA?".":""):V}const eI=q.toFlatObject(q,{},null,function(R){return/^is[A-Z]/.test(R)}),kg=function(R,V,CA){if(!q.isObject(R))throw new TypeError("target must be an object");V=V||new(og||FormData);const DA=(CA=q.toFlatObject(CA,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Gg,jg){return!q.isUndefined(jg[Gg])})).metaTokens,yA=CA.visitor||kA,JA=CA.dots,FA=CA.indexes,cA=(CA.Blob||typeof Blob<"u"&&Blob)&&(QA=V)&&q.isFunction(QA.append)&&QA[Symbol.toStringTag]==="FormData"&&QA[Symbol.iterator];var QA;if(!q.isFunction(yA))throw new TypeError("visitor must be a function");function NA(Gg){if(Gg===null)return"";if(q.isDate(Gg))return Gg.toISOString();if(!cA&&q.isBlob(Gg))throw new _A("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(Gg)||q.isTypedArray(Gg)?cA&&typeof Blob=="function"?new Blob([Gg]):Buffer.from(Gg):Gg}function kA(Gg,jg,Rt){let ft=Gg;if(Gg&&!Rt&&typeof Gg=="object"){if(q.endsWith(jg,"{}"))jg=DA?jg:jg.slice(0,-2),Gg=JSON.stringify(Gg);else if(q.isArray(Gg)&&function(yI){return q.isArray(yI)&&!yI.some(Vg)}(Gg)||q.isFileList(Gg)||q.endsWith(jg,"[]")&&(ft=q.toArray(Gg)))return jg=Zg(jg),ft.forEach(function(yI,XI){!q.isUndefined(yI)&&yI!==null&&V.append(FA===!0?Pg([jg],XI,JA):FA===null?jg:jg+"[]",NA(yI))}),!1}return!!Vg(Gg)||(V.append(Pg(Rt,jg,JA),NA(Gg)),!1)}const Tg=[],Ct=Object.assign(eI,{defaultVisitor:kA,convertValue:NA,isVisitable:Vg});if(!q.isObject(R))throw new TypeError("data must be an object");return function Gg(jg,Rt){if(!q.isUndefined(jg)){if(Tg.indexOf(jg)!==-1)throw Error("Circular reference detected in "+Rt.join("."));Tg.push(jg),q.forEach(jg,function(ft,yI){(!(q.isUndefined(ft)||ft===null)&&yA.call(V,ft,q.isString(yI)?yI.trim():yI,Rt,Ct))===!0&&Gg(ft,Rt?Rt.concat(yI):[yI])}),Tg.pop()}}(R),V};function Fg(R){const V={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(R).replace(/[!'()~]|%20|%00/g,function(CA){return V[CA]})}function Nt(R,V){this._pairs=[],R&&kg(R,this,V)}const Yt=Nt.prototype;Yt.append=function(R,V){this._pairs.push([R,V])},Yt.toString=function(R){const V=R?function(CA){return R.call(this,CA,Fg)}:Fg;return this._pairs.map(function(CA){return V(CA[0])+"="+V(CA[1])},"").join("&")};const It=Nt;function oI(R){return encodeURIComponent(R).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ht(R,V,CA){if(!V)return R;const DA=CA&&CA.encode||oI,yA=CA&&CA.serialize;let JA;if(JA=yA?yA(V,CA):q.isURLSearchParams(V)?V.toString():new It(V,CA).toString(DA),JA){const FA=R.indexOf("#");FA!==-1&&(R=R.slice(0,FA)),R+=(R.indexOf("?")===-1?"?":"&")+JA}return R}const hI=class{constructor(){this.handlers=[]}use(R,V,CA){return this.handlers.push({fulfilled:R,rejected:V,synchronous:!!CA&&CA.synchronous,runWhen:CA?CA.runWhen:null}),this.handlers.length-1}eject(R){this.handlers[R]&&(this.handlers[R]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(R){q.forEach(this.handlers,function(V){V!==null&&R(V)})}},UA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zg=typeof URLSearchParams<"u"?URLSearchParams:It,gg=FormData,cg=(()=>{let R;return(typeof navigator>"u"||(R=navigator.product)!=="ReactNative"&&R!=="NativeScript"&&R!=="NS")&&typeof window<"u"&&typeof document<"u"})(),At=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Hg={isBrowser:!0,classes:{URLSearchParams:zg,FormData:gg,Blob},isStandardBrowserEnv:cg,isStandardBrowserWebWorkerEnv:At,protocols:["http","https","file","blob","url","data"]},zt=function(R){function V(CA,DA,yA,JA){let FA=CA[JA++];const cA=Number.isFinite(+FA),QA=JA>=CA.length;return FA=!FA&&q.isArray(yA)?yA.length:FA,QA?(q.hasOwnProp(yA,FA)?yA[FA]=[yA[FA],DA]:yA[FA]=DA,!cA):(yA[FA]&&q.isObject(yA[FA])||(yA[FA]=[]),V(CA,DA,yA[FA],JA)&&q.isArray(yA[FA])&&(yA[FA]=function(NA){const kA={},Tg=Object.keys(NA);let Ct;const Gg=Tg.length;let jg;for(Ct=0;Ct<Gg;Ct++)jg=Tg[Ct],kA[jg]=NA[jg];return kA}(yA[FA])),!cA)}if(q.isFormData(R)&&q.isFunction(R.entries)){const CA={};return q.forEachEntry(R,(DA,yA)=>{V(function(JA){return q.matchAll(/\w+|\[(\w*)]/g,JA).map(FA=>FA[0]==="[]"?"":FA[1]||FA[0])}(DA),yA,CA,0)}),CA}return null},PI={"Content-Type":void 0},vI={transitional:UA,adapter:["xhr","http"],transformRequest:[function(R,V){const CA=V.getContentType()||"",DA=CA.indexOf("application/json")>-1,yA=q.isObject(R);if(yA&&q.isHTMLForm(R)&&(R=new FormData(R)),q.isFormData(R))return DA&&DA?JSON.stringify(zt(R)):R;if(q.isArrayBuffer(R)||q.isBuffer(R)||q.isStream(R)||q.isFile(R)||q.isBlob(R))return R;if(q.isArrayBufferView(R))return R.buffer;if(q.isURLSearchParams(R))return V.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),R.toString();let JA;if(yA){if(CA.indexOf("application/x-www-form-urlencoded")>-1)return function(FA,cA){return kg(FA,new Hg.classes.URLSearchParams,Object.assign({visitor:function(QA,NA,kA,Tg){return Hg.isNode&&q.isBuffer(QA)?(this.append(NA,QA.toString("base64")),!1):Tg.defaultVisitor.apply(this,arguments)}},cA))}(R,this.formSerializer).toString();if((JA=q.isFileList(R))||CA.indexOf("multipart/form-data")>-1){const FA=this.env&&this.env.FormData;return kg(JA?{"files[]":R}:R,FA&&new FA,this.formSerializer)}}return yA||DA?(V.setContentType("application/json",!1),function(FA,cA,QA){if(q.isString(FA))try{return(0,JSON.parse)(FA),q.trim(FA)}catch(NA){if(NA.name!=="SyntaxError")throw NA}return(0,JSON.stringify)(FA)}(R)):R}],transformResponse:[function(R){const V=this.transitional||vI.transitional,CA=V&&V.forcedJSONParsing,DA=this.responseType==="json";if(R&&q.isString(R)&&(CA&&!this.responseType||DA)){const yA=!(V&&V.silentJSONParsing)&&DA;try{return JSON.parse(R)}catch(JA){if(yA)throw JA.name==="SyntaxError"?_A.from(JA,_A.ERR_BAD_RESPONSE,this,null,this.response):JA}}return R}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hg.classes.FormData,Blob:Hg.classes.Blob},validateStatus:function(R){return R>=200&&R<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(R){vI.headers[R]={}}),q.forEach(["post","put","patch"],function(R){vI.headers[R]=q.merge(PI)});const pI=vI,OI=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xe=Symbol("internals");function Ki(R){return R&&String(R).trim().toLowerCase()}function _e(R){return R===!1||R==null?R:q.isArray(R)?R.map(_e):String(R)}function me(R,V,CA,DA){return q.isFunction(DA)?DA.call(this,V,CA):q.isString(V)?q.isString(DA)?V.indexOf(DA)!==-1:q.isRegExp(DA)?DA.test(V):void 0:void 0}class Yi{constructor(V){V&&this.set(V)}set(V,CA,DA){const yA=this;function JA(cA,QA,NA){const kA=Ki(QA);if(!kA)throw new Error("header name must be a non-empty string");const Tg=q.findKey(yA,kA);(!Tg||yA[Tg]===void 0||NA===!0||NA===void 0&&yA[Tg]!==!1)&&(yA[Tg||QA]=_e(cA))}const FA=(cA,QA)=>q.forEach(cA,(NA,kA)=>JA(NA,kA,QA));return q.isPlainObject(V)||V instanceof this.constructor?FA(V,CA):q.isString(V)&&(V=V.trim())&&!/^[-_a-zA-Z]+$/.test(V.trim())?FA((cA=>{const QA={};let NA,kA,Tg;return cA&&cA.split(`
`).forEach(function(Ct){Tg=Ct.indexOf(":"),NA=Ct.substring(0,Tg).trim().toLowerCase(),kA=Ct.substring(Tg+1).trim(),!NA||QA[NA]&&OI[NA]||(NA==="set-cookie"?QA[NA]?QA[NA].push(kA):QA[NA]=[kA]:QA[NA]=QA[NA]?QA[NA]+", "+kA:kA)}),QA})(V),CA):V!=null&&JA(CA,V,DA),this}get(V,CA){if(V=Ki(V)){const DA=q.findKey(this,V);if(DA){const yA=this[DA];if(!CA)return yA;if(CA===!0)return function(JA){const FA=Object.create(null),cA=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let QA;for(;QA=cA.exec(JA);)FA[QA[1]]=QA[2];return FA}(yA);if(q.isFunction(CA))return CA.call(this,yA,DA);if(q.isRegExp(CA))return CA.exec(yA);throw new TypeError("parser must be boolean|regexp|function")}}}has(V,CA){if(V=Ki(V)){const DA=q.findKey(this,V);return!(!DA||CA&&!me(0,this[DA],DA,CA))}return!1}delete(V,CA){const DA=this;let yA=!1;function JA(FA){if(FA=Ki(FA)){const cA=q.findKey(DA,FA);!cA||CA&&!me(0,DA[cA],cA,CA)||(delete DA[cA],yA=!0)}}return q.isArray(V)?V.forEach(JA):JA(V),yA}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(V){const CA=this,DA={};return q.forEach(this,(yA,JA)=>{const FA=q.findKey(DA,JA);if(FA)return CA[FA]=_e(yA),void delete CA[JA];const cA=V?function(QA){return QA.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(NA,kA,Tg)=>kA.toUpperCase()+Tg)}(JA):String(JA).trim();cA!==JA&&delete CA[JA],CA[cA]=_e(yA),DA[cA]=!0}),this}concat(...V){return this.constructor.concat(this,...V)}toJSON(V){const CA=Object.create(null);return q.forEach(this,(DA,yA)=>{DA!=null&&DA!==!1&&(CA[yA]=V&&q.isArray(DA)?DA.join(", "):DA)}),CA}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([V,CA])=>V+": "+CA).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(V){return V instanceof this?V:new this(V)}static concat(V,...CA){const DA=new this(V);return CA.forEach(yA=>DA.set(yA)),DA}static accessor(V){const CA=(this[Xe]=this[Xe]={accessors:{}}).accessors,DA=this.prototype;function yA(JA){const FA=Ki(JA);CA[FA]||(function(cA,QA){const NA=q.toCamelCase(" "+QA);["get","set","has"].forEach(kA=>{Object.defineProperty(cA,kA+NA,{value:function(Tg,Ct,Gg){return this[kA].call(this,QA,Tg,Ct,Gg)},configurable:!0})})}(DA,JA),CA[FA]=!0)}return q.isArray(V)?V.forEach(yA):yA(V),this}}Yi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),q.freezeMethods(Yi.prototype),q.freezeMethods(Yi);const ze=Yi;function SB(R,V){const CA=this||pI,DA=V||CA,yA=ze.from(DA.headers);let JA=DA.data;return q.forEach(R,function(FA){JA=FA.call(CA,JA,yA.normalize(),V?V.status:void 0)}),yA.normalize(),JA}function CB(R){return!(!R||!R.__CANCEL__)}function eC(R,V,CA){_A.call(this,R??"canceled",_A.ERR_CANCELED,V,CA),this.name="CanceledError"}q.inherits(eC,_A,{__CANCEL__:!0});const Ei=eC,GB=Hg.isStandardBrowserEnv?{write:function(R,V,CA,DA,yA,JA){const FA=[];FA.push(R+"="+encodeURIComponent(V)),q.isNumber(CA)&&FA.push("expires="+new Date(CA).toGMTString()),q.isString(DA)&&FA.push("path="+DA),q.isString(yA)&&FA.push("domain="+yA),JA===!0&&FA.push("secure"),document.cookie=FA.join("; ")},read:function(R){const V=document.cookie.match(new RegExp("(^|;\\s*)("+R+")=([^;]*)"));return V?decodeURIComponent(V[3]):null},remove:function(R){this.write(R,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function EB(R,V){return R&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(V)?function(CA,DA){return DA?CA.replace(/\/+$/,"")+"/"+DA.replace(/^\/+/,""):CA}(R,V):V}const iC=Hg.isStandardBrowserEnv?function(){const R=/(msie|trident)/i.test(navigator.userAgent),V=document.createElement("a");let CA;function DA(yA){let JA=yA;return R&&(V.setAttribute("href",JA),JA=V.href),V.setAttribute("href",JA),{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:V.pathname.charAt(0)==="/"?V.pathname:"/"+V.pathname}}return CA=DA(window.location.href),function(yA){const JA=q.isString(yA)?DA(yA):yA;return JA.protocol===CA.protocol&&JA.host===CA.host}}():function(){return!0};function BC(R,V){let CA=0;const DA=function(yA,JA){yA=yA||10;const FA=new Array(yA),cA=new Array(yA);let QA,NA=0,kA=0;return JA=JA!==void 0?JA:1e3,function(Tg){const Ct=Date.now(),Gg=cA[kA];QA||(QA=Ct),FA[NA]=Tg,cA[NA]=Ct;let jg=kA,Rt=0;for(;jg!==NA;)Rt+=FA[jg++],jg%=yA;if(NA=(NA+1)%yA,NA===kA&&(kA=(kA+1)%yA),Ct-QA<JA)return;const ft=Gg&&Ct-Gg;return ft?Math.round(1e3*Rt/ft):void 0}}(50,250);return yA=>{const JA=yA.loaded,FA=yA.lengthComputable?yA.total:void 0,cA=JA-CA,QA=DA(cA);CA=JA;const NA={loaded:JA,total:FA,progress:FA?JA/FA:void 0,bytes:cA,rate:QA||void 0,estimated:QA&&FA&&JA<=FA?(FA-JA)/QA:void 0,event:yA};NA[V?"download":"upload"]=!0,R(NA)}}const FB={http:null,xhr:typeof XMLHttpRequest<"u"&&function(R){return new Promise(function(V,CA){let DA=R.data;const yA=ze.from(R.headers).normalize(),JA=R.responseType;let FA;function cA(){R.cancelToken&&R.cancelToken.unsubscribe(FA),R.signal&&R.signal.removeEventListener("abort",FA)}q.isFormData(DA)&&(Hg.isStandardBrowserEnv||Hg.isStandardBrowserWebWorkerEnv)&&yA.setContentType(!1);let QA=new XMLHttpRequest;if(R.auth){const Ct=R.auth.username||"",Gg=R.auth.password?unescape(encodeURIComponent(R.auth.password)):"";yA.set("Authorization","Basic "+btoa(Ct+":"+Gg))}const NA=EB(R.baseURL,R.url);function kA(){if(!QA)return;const Ct=ze.from("getAllResponseHeaders"in QA&&QA.getAllResponseHeaders());(function(Gg,jg,Rt){const ft=Rt.config.validateStatus;Rt.status&&ft&&!ft(Rt.status)?jg(new _A("Request failed with status code "+Rt.status,[_A.ERR_BAD_REQUEST,_A.ERR_BAD_RESPONSE][Math.floor(Rt.status/100)-4],Rt.config,Rt.request,Rt)):Gg(Rt)})(function(Gg){V(Gg),cA()},function(Gg){CA(Gg),cA()},{data:JA&&JA!=="text"&&JA!=="json"?QA.response:QA.responseText,status:QA.status,statusText:QA.statusText,headers:Ct,config:R,request:QA}),QA=null}if(QA.open(R.method.toUpperCase(),Ht(NA,R.params,R.paramsSerializer),!0),QA.timeout=R.timeout,"onloadend"in QA?QA.onloadend=kA:QA.onreadystatechange=function(){QA&&QA.readyState===4&&(QA.status!==0||QA.responseURL&&QA.responseURL.indexOf("file:")===0)&&setTimeout(kA)},QA.onabort=function(){QA&&(CA(new _A("Request aborted",_A.ECONNABORTED,R,QA)),QA=null)},QA.onerror=function(){CA(new _A("Network Error",_A.ERR_NETWORK,R,QA)),QA=null},QA.ontimeout=function(){let Ct=R.timeout?"timeout of "+R.timeout+"ms exceeded":"timeout exceeded";const Gg=R.transitional||UA;R.timeoutErrorMessage&&(Ct=R.timeoutErrorMessage),CA(new _A(Ct,Gg.clarifyTimeoutError?_A.ETIMEDOUT:_A.ECONNABORTED,R,QA)),QA=null},Hg.isStandardBrowserEnv){const Ct=(R.withCredentials||iC(NA))&&R.xsrfCookieName&&GB.read(R.xsrfCookieName);Ct&&yA.set(R.xsrfHeaderName,Ct)}DA===void 0&&yA.setContentType(null),"setRequestHeader"in QA&&q.forEach(yA.toJSON(),function(Ct,Gg){QA.setRequestHeader(Gg,Ct)}),q.isUndefined(R.withCredentials)||(QA.withCredentials=!!R.withCredentials),JA&&JA!=="json"&&(QA.responseType=R.responseType),typeof R.onDownloadProgress=="function"&&QA.addEventListener("progress",BC(R.onDownloadProgress,!0)),typeof R.onUploadProgress=="function"&&QA.upload&&QA.upload.addEventListener("progress",BC(R.onUploadProgress)),(R.cancelToken||R.signal)&&(FA=Ct=>{QA&&(CA(!Ct||Ct.type?new Ei(null,R,QA):Ct),QA.abort(),QA=null)},R.cancelToken&&R.cancelToken.subscribe(FA),R.signal&&(R.signal.aborted?FA():R.signal.addEventListener("abort",FA)));const Tg=function(Ct){const Gg=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Ct);return Gg&&Gg[1]||""}(NA);Tg&&Hg.protocols.indexOf(Tg)===-1?CA(new _A("Unsupported protocol "+Tg+":",_A.ERR_BAD_REQUEST,R)):QA.send(DA||null)})}};function X(R){if(R.cancelToken&&R.cancelToken.throwIfRequested(),R.signal&&R.signal.aborted)throw new Ei(null,R)}function LA(R){return X(R),R.headers=ze.from(R.headers),R.data=SB.call(R,R.transformRequest),["post","put","patch"].indexOf(R.method)!==-1&&R.headers.setContentType("application/x-www-form-urlencoded",!1),(V=>{V=q.isArray(V)?V:[V];const{length:CA}=V;let DA,yA;for(let JA=0;JA<CA&&(DA=V[JA],!(yA=q.isString(DA)?FB[DA.toLowerCase()]:DA));JA++);if(!yA)throw yA===!1?new _A(`Adapter ${DA} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(FB,DA)?`Adapter '${DA}' is not available in the build`:`Unknown adapter '${DA}'`);if(!q.isFunction(yA))throw new TypeError("adapter is not a function");return yA})(R.adapter||pI.adapter)(R).then(function(V){return X(R),V.data=SB.call(R,R.transformResponse,V),V.headers=ze.from(V.headers),V},function(V){return CB(V)||(X(R),V&&V.response&&(V.response.data=SB.call(R,R.transformResponse,V.response),V.response.headers=ze.from(V.response.headers))),Promise.reject(V)})}q.forEach(FB,(R,V)=>{if(R){try{Object.defineProperty(R,"name",{value:V})}catch{}Object.defineProperty(R,"adapterName",{value:V})}});const PA=R=>R instanceof ze?R.toJSON():R;function WA(R,V){V=V||{};const CA={};function DA(NA,kA,Tg){return q.isPlainObject(NA)&&q.isPlainObject(kA)?q.merge.call({caseless:Tg},NA,kA):q.isPlainObject(kA)?q.merge({},kA):q.isArray(kA)?kA.slice():kA}function yA(NA,kA,Tg){return q.isUndefined(kA)?q.isUndefined(NA)?void 0:DA(void 0,NA,Tg):DA(NA,kA,Tg)}function JA(NA,kA){if(!q.isUndefined(kA))return DA(void 0,kA)}function FA(NA,kA){return q.isUndefined(kA)?q.isUndefined(NA)?void 0:DA(void 0,NA):DA(void 0,kA)}function cA(NA,kA,Tg){return Tg in V?DA(NA,kA):Tg in R?DA(void 0,NA):void 0}const QA={url:JA,method:JA,data:JA,baseURL:FA,transformRequest:FA,transformResponse:FA,paramsSerializer:FA,timeout:FA,timeoutMessage:FA,withCredentials:FA,adapter:FA,responseType:FA,xsrfCookieName:FA,xsrfHeaderName:FA,onUploadProgress:FA,onDownloadProgress:FA,decompress:FA,maxContentLength:FA,maxBodyLength:FA,beforeRedirect:FA,transport:FA,httpAgent:FA,httpsAgent:FA,cancelToken:FA,socketPath:FA,responseEncoding:FA,validateStatus:cA,headers:(NA,kA)=>yA(PA(NA),PA(kA),!0)};return q.forEach(Object.keys(R).concat(Object.keys(V)),function(NA){const kA=QA[NA]||yA,Tg=kA(R[NA],V[NA],NA);q.isUndefined(Tg)&&kA!==cA||(CA[NA]=Tg)}),CA}const xA={};["object","boolean","number","function","string","symbol"].forEach((R,V)=>{xA[R]=function(CA){return typeof CA===R||"a"+(V<1?"n ":" ")+R}});const bg={};xA.transitional=function(R,V,CA){function DA(yA,JA){return"[Axios v1.2.4] Transitional option '"+yA+"'"+JA+(CA?". "+CA:"")}return(yA,JA,FA)=>{if(R===!1)throw new _A(DA(JA," has been removed"+(V?" in "+V:"")),_A.ERR_DEPRECATED);return V&&!bg[JA]&&(bg[JA]=!0,console.warn(DA(JA," has been deprecated since v"+V+" and will be removed in the near future"))),!R||R(yA,JA,FA)}};const it={assertOptions:function(R,V,CA){if(typeof R!="object")throw new _A("options must be an object",_A.ERR_BAD_OPTION_VALUE);const DA=Object.keys(R);let yA=DA.length;for(;yA-- >0;){const JA=DA[yA],FA=V[JA];if(FA){const cA=R[JA],QA=cA===void 0||FA(cA,JA,R);if(QA!==!0)throw new _A("option "+JA+" must be "+QA,_A.ERR_BAD_OPTION_VALUE)}else if(CA!==!0)throw new _A("Unknown option "+JA,_A.ERR_BAD_OPTION)}},validators:xA},st=it.validators;class ut{constructor(V){this.defaults=V,this.interceptors={request:new hI,response:new hI}}request(V,CA){typeof V=="string"?(CA=CA||{}).url=V:CA=V||{},CA=WA(this.defaults,CA);const{transitional:DA,paramsSerializer:yA,headers:JA}=CA;let FA;DA!==void 0&&it.assertOptions(DA,{silentJSONParsing:st.transitional(st.boolean),forcedJSONParsing:st.transitional(st.boolean),clarifyTimeoutError:st.transitional(st.boolean)},!1),yA!==void 0&&it.assertOptions(yA,{encode:st.function,serialize:st.function},!0),CA.method=(CA.method||this.defaults.method||"get").toLowerCase(),FA=JA&&q.merge(JA.common,JA[CA.method]),FA&&q.forEach(["delete","get","head","post","put","patch","common"],jg=>{delete JA[jg]}),CA.headers=ze.concat(FA,JA);const cA=[];let QA=!0;this.interceptors.request.forEach(function(jg){typeof jg.runWhen=="function"&&jg.runWhen(CA)===!1||(QA=QA&&jg.synchronous,cA.unshift(jg.fulfilled,jg.rejected))});const NA=[];let kA;this.interceptors.response.forEach(function(jg){NA.push(jg.fulfilled,jg.rejected)});let Tg,Ct=0;if(!QA){const jg=[LA.bind(this),void 0];for(jg.unshift.apply(jg,cA),jg.push.apply(jg,NA),Tg=jg.length,kA=Promise.resolve(CA);Ct<Tg;)kA=kA.then(jg[Ct++],jg[Ct++]);return kA}Tg=cA.length;let Gg=CA;for(Ct=0;Ct<Tg;){const jg=cA[Ct++],Rt=cA[Ct++];try{Gg=jg(Gg)}catch(ft){Rt.call(this,ft);break}}try{kA=LA.call(this,Gg)}catch(jg){return Promise.reject(jg)}for(Ct=0,Tg=NA.length;Ct<Tg;)kA=kA.then(NA[Ct++],NA[Ct++]);return kA}getUri(V){return Ht(EB((V=WA(this.defaults,V)).baseURL,V.url),V.params,V.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(R){ut.prototype[R]=function(V,CA){return this.request(WA(CA||{},{method:R,url:V,data:(CA||{}).data}))}}),q.forEach(["post","put","patch"],function(R){function V(CA){return function(DA,yA,JA){return this.request(WA(JA||{},{method:R,headers:CA?{"Content-Type":"multipart/form-data"}:{},url:DA,data:yA}))}}ut.prototype[R]=V(),ut.prototype[R+"Form"]=V(!0)});const Tt=ut;class Vt{constructor(V){if(typeof V!="function")throw new TypeError("executor must be a function.");let CA;this.promise=new Promise(function(yA){CA=yA});const DA=this;this.promise.then(yA=>{if(!DA._listeners)return;let JA=DA._listeners.length;for(;JA-- >0;)DA._listeners[JA](yA);DA._listeners=null}),this.promise.then=yA=>{let JA;const FA=new Promise(cA=>{DA.subscribe(cA),JA=cA}).then(yA);return FA.cancel=function(){DA.unsubscribe(JA)},FA},V(function(yA,JA,FA){DA.reason||(DA.reason=new Ei(yA,JA,FA),CA(DA.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(V){this.reason?V(this.reason):this._listeners?this._listeners.push(V):this._listeners=[V]}unsubscribe(V){if(!this._listeners)return;const CA=this._listeners.indexOf(V);CA!==-1&&this._listeners.splice(CA,1)}static source(){let V;return{token:new Vt(function(CA){V=CA}),cancel:V}}}const Mt=Vt,sI={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sI).forEach(([R,V])=>{sI[V]=R});const xI=sI,Zt=function R(V){const CA=new Tt(V),DA=RA(Tt.prototype.request,CA);return q.extend(DA,Tt.prototype,CA,{allOwnKeys:!0}),q.extend(DA,CA,null,{allOwnKeys:!0}),DA.create=function(yA){return R(WA(V,yA))},DA}(pI);Zt.Axios=Tt,Zt.CanceledError=Ei,Zt.CancelToken=Mt,Zt.isCancel=CB,Zt.VERSION="1.2.4",Zt.toFormData=kg,Zt.AxiosError=_A,Zt.Cancel=Zt.CanceledError,Zt.all=function(R){return Promise.all(R)},Zt.spread=function(R){return function(V){return R.apply(null,V)}},Zt.isAxiosError=function(R){return q.isObject(R)&&R.isAxiosError===!0},Zt.mergeConfig=WA,Zt.AxiosHeaders=ze,Zt.formToJSON=R=>zt(q.isHTMLForm(R)?new FormData(R):R),Zt.HttpStatusCode=xI,Zt.default=Zt;const se=Zt;var EI=function(){function R(){F(this,R)}var V;return TA(R,null,[{key:"fetchRemoteData",value:(V=L(MA().mark(function CA(DA){var yA;return MA().wrap(function(JA){for(;;)switch(JA.prev=JA.next){case 0:return JA.prev=0,JA.next=3,se.get(DA,{responseType:"arraybuffer"});case 3:return yA=JA.sent,JA.abrupt("return",new Uint8Array(yA.data));case 7:throw JA.prev=7,JA.t0=JA.catch(0),JA.t0;case 10:case"end":return JA.stop()}},CA,null,[[0,7]])})),function(CA){return V.apply(this,arguments)})},{key:"string2Uint8Data",value:function(CA){for(var DA=new Uint8Array(CA.length),yA=0;yA<DA.length;yA++)DA[yA]=255&CA.charCodeAt(yA);return DA}},{key:"uint8Data2String",value:function(CA){return String.fromCharCode.apply(String,CA)}},{key:"parseMultiFile",value:function(CA){var DA=R.uint8Data2String(CA).split(`
`),yA=[],JA=0;return DA.forEach(function(FA){if((FA=FA.trim())&&!FA.startsWith("#"))switch(JA){case 0:return void(JA=1);case 1:FA.match(/^\d+$/)||yA.push(FA);case 2:case 3:case 4:return void JA++;case 5:return void(JA=1)}}),yA}}]),R}(),lt=function(){function R(){F(this,R),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var V,CA,DA,yA,JA;return TA(R,[{key:"init",value:(JA=L(MA().mark(function FA(){var cA;return MA().wrap(function(QA){for(;;)switch(QA.prev=QA.next){case 0:return QA.next=2,new Promise(function(NA){$({onRuntimeInitialized:function(){NA({instance:this})}})});case 2:return cA=QA.sent,this.instance=cA.instance,this._decorate(),(typeof window<"u"?window:Y.g).artoolkit=this,QA.abrupt("return",this);case 8:case"end":return QA.stop()}},FA,this)})),function(){return JA.apply(this,arguments)})},{key:"_decorate",value:function(){var FA=this;for(var cA in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(QA){FA[QA]=FA.instance[QA]}),this.instance)cA.match(/^AR/)&&(this[cA]=this.instance[cA])}},{key:"loadCamera",value:(yA=L(MA().mark(function FA(cA){var QA,NA;return MA().wrap(function(kA){for(;;)switch(kA.prev=kA.next){case 0:if(QA="/camera_param_"+this.cameraCount++,!(cA instanceof Uint8Array)){kA.next=5;break}NA=cA,kA.next=14;break;case 5:return kA.prev=5,kA.next=8,EI.fetchRemoteData(cA);case 8:NA=kA.sent,kA.next=14;break;case 11:throw kA.prev=11,kA.t0=kA.catch(5),kA.t0;case 14:return this._storeDataFile(NA,QA),kA.abrupt("return",this.instance._loadCamera(QA));case 16:case"end":return kA.stop()}},FA,this,[[5,11]])})),function(FA){return yA.apply(this,arguments)})},{key:"addMarker",value:(DA=L(MA().mark(function FA(cA,QA){var NA,kA;return MA().wrap(function(Tg){for(;;)switch(Tg.prev=Tg.next){case 0:if(NA="/marker_"+this.markerCount++,QA.indexOf(`
Name: `+KA.name+`
Message: `+KA.message,Jg.setAttribute("id","error-popup"),document.body.appendChild(Jg)}},1e3)};var XA=document.createElement("video");if(XA.setAttribute("autoplay",""),XA.setAttribute("muted",""),XA.setAttribute("playsinline",""),XA.style.width=this.parameters.displayWidth+"px",XA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var fA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?fA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?fA="navigator.mediaDevices.getUserMedia":console.assert(!1);return oA({name:"",message:"WebRTC issue-! "+fA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(KA){var gA={audio:!1,video:{facingMode:"environment",width:{ideal:lA.parameters.sourceWidth},height:{ideal:lA.parameters.sourceHeight}}};lA.parameters.deviceId&&(gA.video.deviceId.exact=lA.parameters.deviceId),navigator.mediaDevices.getUserMedia(gA).then(Jg=>{XA.srcObject=Jg;var Dg=new CustomEvent("camera-init",{detail:{stream:Jg}});window.dispatchEvent(Dg),document.body.addEventListener("click",lA.onInitialClick,{once:!0}),dA()}).catch(function(Jg){oA({name:Jg.name,message:Jg.message})})}).catch(function(KA){oA({message:KA.message})}),XA}}const mg=class mg{constructor(dA){ct(this,"object3d");ct(this,"orthoMesh");ct(this,"cloakMesh");ct(this,"originalsFaceVertexUvs");ct(this,"originalOrthoVertices");ct(this,"updateInShaderEnabled");this.updateInShaderEnabled=!0,mg.markerSpaceShaderFunction=`
        vec2 transformUvToMarkerSpace(vec2 originalUv){
                vec3 transformedUv;
                // set transformedUv - from UV coord to clip coord
                transformedUv.x = originalUv.x * 2.0 - 1.0;
                transformedUv.y = originalUv.y * 2.0 - 1.0;
                transformedUv.z = 0.0;

		// apply modelViewMatrix and projectionMatrix
                transformedUv = (projectionMatrix * modelViewMatrix * vec4( transformedUv, 1.0 ) ).xyz;

		// apply perspective
		transformedUv.x /= transformedUv.z;
		transformedUv.y /= transformedUv.z;

                // set back from clip coord to Uv coord
                transformedUv.x = transformedUv.x / 2.0 + 0.5;
                transformedUv.y = transformedUv.y / 2.0 + 0.5;

                // return the result
                return transformedUv.xy;
        }`,mg.vertexShader=mg.markerSpaceShaderFunction+`	varying vec2 vUv;

	void main(){
                // pass the UV to the fragment
                #if (updateInShaderEnabled == 1)
		        vUv = transformUvToMarkerSpace(uv);
                #else
		        vUv = uv;
                #endif

                // compute gl_Position
		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		gl_Position = projectionMatrix * mvPosition;
	}`,mg.fragmentShader=`
	varying vec2 vUv;
	uniform sampler2D texture;
	uniform float opacity;

	void main(void){
		vec3 color = texture2D( texture, vUv ).rgb;

		gl_FragColor = vec4( color, opacity);
	}`;var oA=new f.PlaneGeometry(1.55,2.1,1,8).translate(0,-.3,0),lA=new f.ShaderMaterial({vertexShader:mg.vertexShader,fragmentShader:mg.fragmentShader,transparent:!0,uniforms:{texture:{value:dA},opacity:{value:.5}},defines:{updateInShaderEnabled:this.updateInShaderEnabled?1:0}});this.cloakMesh=new f.Mesh(oA,lA),this.cloakMesh.rotation.x=-Math.PI/2,this.object3d=this.cloakMesh,this.originalsFaceVertexUvs=[[]];for(var XA=0;XA<this.cloakMesh.geometry.faces.length;XA++)this.originalsFaceVertexUvs[0][XA]=[],this.originalsFaceVertexUvs[0][XA][0]=new f.Vector2,this.originalsFaceVertexUvs[0][XA][1]=new f.Vector2,this.originalsFaceVertexUvs[0][XA][2]=new f.Vector2;for(var fA=0;fA<this.cloakMesh.geometry.parameters.heightSegments/2;fA++)this.originalsFaceVertexUvs[0][4*fA+0][0].set(.175,1.025),this.originalsFaceVertexUvs[0][4*fA+0][1].set(.175,.875),this.originalsFaceVertexUvs[0][4*fA+0][2].set(.825,1.025),this.originalsFaceVertexUvs[0][4*fA+1][0].set(.175,.875),this.originalsFaceVertexUvs[0][4*fA+1][1].set(.825,.875),this.originalsFaceVertexUvs[0][4*fA+1][2].set(.825,1.025),this.originalsFaceVertexUvs[0][4*fA+2][0].set(.175,.875),this.originalsFaceVertexUvs[0][4*fA+2][1].set(.175,1.025),this.originalsFaceVertexUvs[0][4*fA+2][2].set(.825,.875),this.originalsFaceVertexUvs[0][4*fA+3][0].set(.175,1.025),this.originalsFaceVertexUvs[0][4*fA+3][1].set(.825,1.025),this.originalsFaceVertexUvs[0][4*fA+3][2].set(.825,.875);this.updateInShaderEnabled===!0&&(this.cloakMesh.geometry.faceVertexUvs=this.originalsFaceVertexUvs,this.cloakMesh.geometry.uvsNeedUpdate=!0),this.originalOrthoVertices=[],this.originalOrthoVertices.push(new f.Vector3(-.65,1.05,0)),this.originalOrthoVertices.push(new f.Vector3(.65,1.05,0)),this.originalOrthoVertices.push(new f.Vector3(-.65,.75,0)),this.originalOrthoVertices.push(new f.Vector3(.65,.75,0));var KA=new f.MeshNormalMaterial({transparent:!0,opacity:.5,side:f.DoubleSide}),gA=new f.PlaneGeometry(1,1),Jg=new f.Mesh(gA,KA);this.orthoMesh=Jg}updateUvs(dA,oA){var lA=new f.Vector3;this.originalsFaceVertexUvs[0].forEach((XA,fA)=>{XA.forEach((KA,gA)=>{lA.x=2*KA.x-1,lA.y=2*KA.y-1,lA.z=0,lA.applyMatrix4(dA),lA.applyMatrix4(oA),lA.x/=lA.z,lA.y/=lA.z,lA.x=lA.x/2+.5,lA.y=lA.y/2+.5,this.cloakMesh.geometry.faceVertexUvs[0][fA][gA].set(lA.x,lA.y)})}),this.cloakMesh.geometry.uvsNeedUpdate=!0}updateOrtho(dA,oA){var lA=[];this.originalOrthoVertices.forEach((fA,KA)=>{var gA=fA.clone();gA.applyMatrix4(dA),gA.applyMatrix4(oA),gA.x/=gA.z,gA.y/=gA.z,lA.push(gA)});for(var XA=0;XA<lA.length;XA++)this.orthoMesh.geometry.vertices[XA].copy(lA[XA]);this.orthoMesh.geometry.computeBoundingSphere(),this.orthoMesh.geometry.verticesNeedUpdate=!0}update(dA,oA){this.updateOrtho(dA,oA),this.updateInShaderEnabled===!1&&this.updateUvs(dA,oA)}};ct(mg,"vertexShader"),ct(mg,"fragmentShader"),ct(mg,"markerSpaceShaderFunction");let MA=mg;class eA{constructor(dA){ct(this,"object3d");this.object3d=new f.Group;var oA=new f.AxesHelper;this.object3d.add(oA);var lA=dA.id,XA=document.createElement("canvas");XA.width=64,XA.height=64;var fA=XA.getContext("2d"),KA=new f.CanvasTexture(XA);fA.font="48px monospace",fA.fillStyle="rgba(192,192,255, 0.5)",fA.fillRect(0,0,XA.width,XA.height),fA.fillStyle="darkblue",fA.fillText(lA,XA.width/4,3*XA.height/4),KA.needsUpdate=!0;var gA=new f.PlaneGeometry(1,1),Jg=new f.MeshBasicMaterial({map:KA,transparent:!0}),Dg=new f.Mesh(gA,Jg);Dg.rotation.x=-Math.PI/2,this.object3d.add(Dg)}}class ${constructor(dA){ct(this,"object3d");ct(this,"seethruPlane");var oA=new f.PlaneGeometry(2,2),lA=new f.MeshBasicMaterial({map:dA});this.seethruPlane=new f.Mesh(oA,lA),this.object3d=this.seethruPlane}update(dA){dA.updateMatrixWorld(!0);var oA=new f.Vector3(-0,0,-20);oA=new f.Vector3(-0,0,-20),this.seethruPlane.position.copy(oA),dA.localToWorld(this.seethruPlane.position),dA.matrixWorld.decompose(dA.position,dA.quaternion,dA.scale),this.seethruPlane.quaternion.copy(dA.quaternion);var lA=2*f.MathUtils.radToDeg(Math.atan(1/dA.projectionMatrix.elements[5])),XA=parseFloat(arToolkitSource.domElement.style.width.replace(/px$/,"")).toFixed(10)/parseFloat(arToolkitSource.domElement.style.height.replace(/px$/,"")).toFixed(10);this.seethruPlane.scale.y=Math.tan(f.MathUtils.DEG2RAD*lA/2)*oA.length(),this.seethruPlane.scale.x=this.seethruPlane.scale.y*XA}}class RA{constructor(dA){ct(this,"_sourceElement");ct(this,"_pickingScene");ct(this,"_pickingPlane");ct(this,"_pickingCamera");this._sourceElement=dA,this._pickingScene=new f.Scene;var oA=new f.PlaneGeometry(20,20,19,19).rotateX(-Math.PI/2),lA=new f.MeshBasicMaterial({wireframe:!0});this._pickingPlane=new f.Mesh(oA,lA),this._pickingScene.add(this._pickingPlane);var XA=parseInt(dA.style.width),fA=parseInt(dA.style.height);this._pickingCamera=new f.PerspectiveCamera(42,XA/fA,.1,30)}update(dA,oA,lA){if(this.onResize(),lA==="modelViewMatrix"){var XA=this._pickingPlane;oA.parent.updateMatrixWorld(),XA.matrix.copy(oA.parent.matrixWorld),XA.matrix.decompose(XA.position,XA.quaternion,XA.scale)}else if(lA==="cameraTransformMatrix"){var fA=this._pickingCamera;dA.updateMatrixWorld(),fA.matrix.copy(dA.matrixWorld),fA.matrix.decompose(fA.position,fA.quaternion,fA.scale)}else console.assert(!1)}onResize(){var dA=this._sourceElement,oA=this._pickingCamera,lA=parseInt(dA.style.width),XA=parseInt(dA.style.height);oA.aspect=lA/XA,oA.updateProjectionMatrix()}test(dA,oA){dA=2*(dA-.5),oA=2*-(oA-.5),this._pickingScene.updateMatrixWorld(!0);var lA=new f.Raycaster,XA=new f.Vector2(dA,oA);lA.setFromCamera(XA,this._pickingCamera);var fA=lA.intersectObjects([this._pickingPlane]);return fA.length===0?null:{position:this._pickingPlane.worldToLocal(fA[0].point.clone()),quaternion:new f.Quaternion,scale:new f.Vector3(1,1,1)}}renderDebug(dA){dA.render(this._pickingScene,this._pickingCamera)}}const tg=tA,Ag=mA,lg=pA;class ag{constructor(dA,oA){ct(this,"arSession");ct(this,"parameters");ct(this,"controls");ct(this,"object3d");ct(this,"smoothedControls");ct(this,"markerRoot");var lA,XA=dA.arContext,fA=dA.parameters.scene,KA=dA.parameters.camera;if(this.arSession=dA,this.parameters=oA,console.log("ARjs.Anchor -","changeMatrixMode:",this.parameters.changeMatrixMode,"/ markersAreaEnabled:",oA.markersAreaEnabled),this.markerRoot=new f.Group,fA.add(this.markerRoot),oA.changeMatrixMode==="modelViewMatrix"?lA=this.markerRoot:oA.changeMatrixMode==="cameraTransformMatrix"?lA=KA:console.assert(!1),oA.markersAreaEnabled===!1){var gA=new hA(XA,lA,oA);this.controls=gA}else{if(console.assert(XA.parameters.trackingBackend==="artoolkit"),console.log(XA.parameters.trackingBackend),location.hash.substring(1).startsWith("markers-page-resolution=")===!0){var Jg=location.hash.substring(1).match(/markers-page-resolution=(\d+)x(\d+)/);console.assert(Jg.length===3),XA=dA.arContext}var Dg;oA.changeMatrixMode==="modelViewMatrix"?Dg=this.markerRoot:oA.changeMatrixMode==="cameraTransformMatrix"?Dg=KA:console.assert(!1),gA=new hA(XA,Dg,oA),this.controls=gA}this.object3d=new f.Group;var tt=new f.Group;fA.add(tt),this.smoothedControls=new J(tt),tt.add(this.object3d)}update(){this.object3d.visible=this.object3d.parent.visible,this.smoothedControls!==void 0&&this.smoothedControls.update(this.markerRoot)}}class Bg{constructor(dA){ct(this,"parameters");ct(this,"arSource");ct(this,"arContext");var oA=this;this.parameters={renderer:null,camera:null,scene:null,sourceParameters:{},contextParameters:{}},k(dA,this),console.assert(this.parameters.renderer instanceof f.WebGLRenderer),console.assert(this.parameters.camera instanceof f.Camera),console.assert(this.parameters.scene instanceof f.Scene),Object.defineProperty(this,"renderer",{get:function(){return console.warn("use .parameters.renderer renderer"),this.parameters.renderer}}),Object.defineProperty(this,"camera",{get:function(){return console.warn("use .parameters.camera instead"),this.parameters.camera}}),Object.defineProperty(this,"scene",{get:function(){return console.warn("use .parameters.scene instead"),this.parameters.scene}}),console.log("AR.js",tg.REVISION,"- trackingBackend:",dA.contextParameters.trackingBackend);var lA=oA.arSource=new lg(dA.sourceParameters);lA.init(()=>{lA.onResize(XA,oA.parameters.renderer,oA.parameters.camera)},()=>{console.log("arSource init failed")}),window.addEventListener("resize",function(){lA.onResize(XA,oA.parameters.renderer,oA.parameters.camera)});var XA=oA.arContext=new tg(dA.contextParameters);function fA(){return oA?(console.log("actual source dimensions",lA.domElement.clientWidth,lA.domElement.clientHeight),lA.domElement.clientWidth>lA.domElement.clientHeight?(console.log("source orientation","landscape"),"landscape"):(console.log("source orientation","portrait"),"portrait")):null}window.addEventListener("arjs-video-loaded",function(){oA.arContext.init(()=>{oA.arContext.arController.orientation=fA(),oA.arContext.arController.options.orientation=fA()})}),XA.addEventListener("initialized",function(KA){lA.onResize(XA,oA.parameters.renderer,oA.parameters.camera)})}update(){this.arSource.ready!==!1&&this.arContext.update(this.arSource.domElement)}onResize(){this.arSource.onResize(this.arContext,this.parameters.renderer,this.parameters.camera)}}class fg{constructor(dA){ct(this,"domElement");var oA=dA.arContext.parameters.trackingBackend;this.domElement=document.createElement("div"),this.domElement.style.color="rgba(0,0,0,0.9)",this.domElement.style.backgroundColor="rgba(127,127,127,0.5)",this.domElement.style.display="block",this.domElement.style.padding="0.5em",this.domElement.style.position="fixed",this.domElement.style.left="5px",this.domElement.style.bottom="10px",this.domElement.style.textAlign="right";var lA=document.createElement("span");lA.style.display="block",lA.innerHTML="<b>trackingBackend</b> : "+oA,this.domElement.appendChild(lA)}}ct(fg,"AugmentedWebsiteURL","https://webxr.io/augmented-website");const at=class at{constructor(dA){ct(this,"domElement");dA.arSession.arContext.parameters.trackingBackend,this.domElement=document.createElement("div"),this.domElement.style.color="rgba(0,0,0,0.9)",this.domElement.style.backgroundColor="rgba(127,127,127,0.5)",this.domElement.style.display="inline-block",this.domElement.style.padding="0.5em",this.domElement.style.margin="0.5em",this.domElement.style.textAlign="left";var oA=document.createElement("span");if(oA.style.display="block",oA.style.padding="0.5em",oA.style.color="rgba(0,0,0,0.9)",oA.style.backgroundColor="rgba(127,127,127,0.5)",oA.style.position="fixed",oA.style.left="5px",oA.style.bottom="40px",this.domElement.appendChild(oA),oA.innerHTML="<b>markersAreaEnabled</b> :"+dA.parameters.markersAreaEnabled,dA.parameters.markersAreaEnabled){var lA=document.createElement("button");lA.style.display="block",this.domElement.style.padding="0.5em",this.domElement.style.position="fixed",this.domElement.style.textAlign="left",this.domElement.appendChild(lA),lA.id="buttonToggleMarkerHelpers",lA.innerHTML="toggle-marker-helper",lA.addEventListener("click",function(){})}if(dA.parameters.markersAreaEnabled){var XA=document.createElement("button");XA.style.display="block",this.domElement.appendChild(XA),XA.id="buttonMarkersAreaLearner",XA.innerHTML="Learn-new-marker-area",XA.addEventListener("click",function(){at.MarkersAreaLearnerURL!==null||tg.baseURL})}if(dA.parameters.markersAreaEnabled){var fA=document.createElement("button");fA.style.display="block",this.domElement.appendChild(fA),fA.id="buttonMarkersAreaReset",fA.innerHTML="Reset-marker-area",fA.addEventListener("click",function(){location.reload()})}}};ct(at,"MarkersAreaLearnerURL",null);let ZA=at;class Wg{constructor(dA){ct(this,"enabled");ct(this,"_arSession");ct(this,"_hitTestingPlane");dA.arContext.parameters.trackingBackend,this.enabled=!0,this._arSession=dA,this._hitTestingPlane=null,this._hitTestingPlane=new RA(dA.arSource.domElement)}update(dA,oA,lA){this.enabled!==!1&&(this._hitTestingPlane!==null?this._hitTestingPlane.update(dA,oA,lA):console.assert(!1))}testDomEvent(dA){this._arSession.arContext.parameters.trackingBackend;var oA=this._arSession.arSource;if(this.enabled===!1)return[];var lA=dA.clientX/oA.domElementWidth(),XA=dA.clientY/oA.domElementHeight();return this.test(lA,XA)}test(dA,oA){this._arSession.arContext.parameters.trackingBackend;var lA=[];if(this.enabled===!1)return[];var XA=this._hitTestingPlane.test(dA,oA);if(XA===null)return lA;var fA=new Et(XA.position,XA.quaternion,XA.scale);return lA.push(fA),lA}}class Et{constructor(dA,oA,lA){ct(this,"position");ct(this,"scale");ct(this,"quaternion");this.position=dA,this.quaternion=oA,this.scale=lA}apply(dA){dA.position.copy(this.position),dA.quaternion.copy(this.quaternion),dA.scale.copy(this.scale),dA.updateMatrix()}applyPosition(dA){return dA.position.copy(this.position),dA.updateMatrix(),this}applyQuaternion(dA){return dA.quaternion.copy(this.quaternion),dA.updateMatrix(),this}}var dt,xt;(function(dg){dg.ArClickability=G,dg.ArSmoothedControls=J,dg.ArToolkitContext=tA,dg.ArToolkitProfile=mA,dg.ArToolkitSource=pA,dg.ArMarkerCloak=MA,dg.ArMarkerControls=hA,dg.ArMarkerHelper=eA,dg.ArVideoInWebgl=$,dg.HitTestingPlane=RA})(dt||(dt={})),function(dg){dg.Anchor=ag,dg.Context=tg,dg.Profile=Ag,dg.Session=Bg,dg.SessionDebugUI=fg,dg.AnchorDebugUI=ZA,dg.Source=lg,dg.Utils=TA,dg.HitTesting=Wg}(xt||(xt={}))})(),p})())})(ru);var mC=ru.exports;mC.THREEx.ArToolkitContext.baseURL="./";console.log(mC.THREEx);console.log(mC.ARjs);var kC=new PF({antialias:!0,alpha:!0});kC.setClearColor(new qI("lightgrey"),0);kC.setSize(640,480);kC.domElement.style.position="absolute";kC.domElement.style.top="0px";kC.domElement.style.left="0px";document.body.appendChild(kC.domElement);var Js=[],wB,lr,xQ=new OF,Hn=new bi;xQ.add(Hn);var Ze=new mC.THREEx.ArToolkitSource({sourceType:"webcam",sourceWidth:480,sourceHeight:640});Ze.init(function(){Ze.domElement.addEventListener("canplay",()=>{console.log("canplay","actual source dimensions",Ze.domElement.videoWidth,Ze.domElement.videoHeight),XF()}),window.arToolkitSource=Ze,setTimeout(()=>{hu()},2e3)},function(){});window.addEventListener("resize",function(){hu()});function hu(){Ze.onResizeElement(),Ze.copyElementSizeTo(kC.domElement),window.arToolkitContext.arController!==null&&Ze.copyElementSizeTo(window.arToolkitContext.arController.canvas)}function XF(){wB=new mC.THREEx.ArToolkitContext({cameraParametersUrl:mC.THREEx.ArToolkitContext.baseURL+"./data/camera_para.dat",detectionMode:"mono"}),wB.init(()=>{Hn.projectionMatrix.copy(wB.getProjectionMatrix()),wB.arController.orientatio=kd(),wB.arController.options.orientation=kd(),console.log("arToolkitContext",wB),window.arToolkitContext=wB}),lr=new mC.THREEx.ArMarkerControls(wB,Hn,{type:"barcode",patternUrl:mC.THREEx.ArToolkitContext.baseURL+"./data/multi-barcode-4x3.dat",changeMatrixMode:"cameraTransformMatrix"}),xQ.visible=!1,console.log("ArMarkerControls",lr),window.arMarkerControls=lr}function kd(){return Ze?(console.log("actual source dimensions",Ze.domElement.videoWidth,Ze.domElement.videoHeight),Ze.domElement.videoWidth>Ze.domElement.videoHeight?(console.log("source orientation","landscape"),"landscape"):(console.log("source orientation","portrait"),"portrait")):""}window.addEventListener("markerFound",function(o){console.log("marker found!",o)});Js.push(function(){!wB||!Ze||!Ze.ready||(wB.update(Ze.domElement),xQ.visible=Hn.visible)});var cu=new kQ(1,1,1),hh=new au({transparent:!0,opacity:.5,side:yB}),lu=new iB(cu,hh);lu.position.y=cu.parameters.height/2;xQ.add(lu);var zF=new rh(.3,.1,64,16),hh=new au,ch=new iB(zF,hh);ch.position.y=.5;xQ.add(ch);Js.push(function(o){ch.rotation.x+=Math.PI*o});Js.push(function(){kC.render(xQ,Hn)});var ps;requestAnimationFrame(function o(t){requestAnimationFrame(o),ps=ps||t-1e3/60;var i=Math.min(200,t-ps);ps=t,Js.forEach(function(E){E(i/1e3,t/1e3)})});