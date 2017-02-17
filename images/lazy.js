(function(){$("#lazystyles,#lazymore").remove(),function(e,t){var n=t(e,e.document);e.lazySizes=n,typeof module=="object"&&module.exports&&(module.exports=n)}(window,function(t,n){"use strict";if(!n.getElementsByClassName)return;var r,i=n.documentElement,s=t.Date,o=t.HTMLPictureElement,u="addEventListener",a="getAttribute",f=t[u],l=t.setTimeout,c=t.requestAnimationFrame||l,h=t.requestIdleCallback,p=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],v={},m=Array.prototype.forEach,g=function(e,t){return v[t]||(v[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),v[t].test(e[a]("class")||"")&&v[t]},y=function(e,t){g(e,t)||e.setAttribute("class",(e[a]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[a]("class")||"").replace(n," "))},w=function(e,t,n){var r=n?u:"removeEventListener";n&&w(e,t),d.forEach(function(n){e[r](n,t)})},E=function(e,t,r,i,s){var o=n.createEvent("CustomEvent");return o.initCustomEvent(t,!i,!s,r||{}),e.dispatchEvent(o),o},S=function(e,n){var i;!o&&(i=t.picturefill||r.pf)?i({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},x=function(e,t){return(getComputedStyle(e,null)||{})[t]},T=function(e,t,n){n=n||e.offsetWidth;while(n<r.minSize&&t&&!e._lazysizesWidth)n=t.offsetWidth,t=t.parentNode;return n},N=function(){var e,t,r=[],i=function(){var n;e=!0,t=!1;while(r.length)n=r.shift(),n[0].apply(n[1],n[2]);e=!1};return function(s){e?s.apply(this,arguments):(r.push([s,this,arguments]),t||(t=!0,(n.hidden?l:c)(i)))}}(),C=function(e,t){return t?function(){N(e)}:function(){var t=this,n=arguments;N(function(){e.apply(t,n)})}},k=function(e){var t,n=0,r=125,i=999,o=i,u=function(){t=!1,n=s.now(),e()},a=h?function(){h(u,{timeout:o}),o!==i&&(o=i)}:C(function(){l(u)},!0);return function(e){var i;if(e=e===!0)o=66;if(t)return;t=!0,i=r-(s.now()-n),i<0&&(i=0),e||i<9&&h?a():l(a,i)}},L=function(e){var t,n,r=99,i=function(){t=null,e()},o=function(){var e=s.now()-n;e<r?l(o,r-e):(h||i)(i)};return function(){n=s.now(),t||(t=l(o,r))}},A=function(){var e,o,c,h,d,v,T,A,M,_,D,P,H,B,j,F=/^img$/i,I=/^iframe$/i,q="onscroll"in t&&!/glebot/.test(navigator.userAgent),R=0,U=0,z=0,W=-1,X=function(e){z--,e&&e.target&&w(e.target,X);if(!e||z<0||!e.target)z=0},V=function(e,t){var r,s=e,o=x(n.body,"visibility")=="hidden"||x(e,"visibility")!="hidden";M-=t,P+=t,_-=t,D+=t;while(o&&(s=s.offsetParent)&&s!=n.body&&s!=i)o=(x(s,"opacity")||1)>0,o&&x(s,"overflow")!="visible"&&(r=s.getBoundingClientRect(),o=D>r.left&&_<r.right&&P>r.top-1&&M<r.bottom+1);return o},$=function(){var t,s,u,f,l,h,p,v,m;if((d=r.loadMode)&&z<8&&(t=e.length)){s=0,W++,B==null&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),H=r.expand,B=H*r.expFactor),U<B&&z<1&&W>2&&d>2&&!n.hidden?(U=B,W=0):d>1&&W>1&&z<6?U=H:U=R;for(;s<t;s++){if(!e[s]||e[s]._lazyRace)continue;if(!q){tt(e[s]);continue}if(!(v=e[s][a]("data-expand"))||!(h=v*1))h=U;m!==h&&(T=innerWidth+h*j,A=innerHeight+h,p=h*-1,m=h),u=e[s].getBoundingClientRect();if((P=u.bottom)>=p&&(M=u.top)<=A&&(D=u.right)>=p*j&&(_=u.left)<=T&&(P||D||_||M)&&(c&&z<3&&!v&&(d<3||W<4)||V(e[s],h))){tt(e[s]),l=!0;if(z>9)break}else!l&&c&&!f&&z<4&&W<4&&d>2&&(o[0]||r.preloadAfterLoad)&&(o[0]||!v&&(P||D||_||M||e[s][a](r.sizesAttr)!="auto"))&&(f=o[0]||e[s])}f&&!l&&tt(f)}},J=k($),K=function(e){y(e.target,r.loadedClass),b(e.target,r.loadingClass),w(e.target,G)},Q=C(K),G=function(e){Q({target:e.target})},Y=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Z=function(e){var t,n,i=e[a](r.srcsetAttr);(t=r.customMedia[e[a]("data-media")||e[a]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e))},et=C(function(e,t,n,i,s){var o,u,f,c,d,v;(d=E(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,r.autosizesClass):e.setAttribute("sizes",i)),u=e[a](r.srcsetAttr),o=e[a](r.srcAttr),s&&(f=e.parentNode,c=f&&p.test(f.nodeName||"")),v=t.firesLoad||"src"in e&&(u||o||c),d={target:e},v&&(w(e,X,!0),clearTimeout(h),h=l(X,2500),y(e,r.loadingClass),w(e,G,!0)),c&&m.call(f.getElementsByTagName("source"),Z),u?e.setAttribute("srcset",u):o&&!c&&(I.test(e.nodeName)?Y(e,o):e.src=o),(u||c)&&S(e,{src:o})),N(function(){e._lazyRace&&delete e._lazyRace,b(e,r.lazyClass);if(!v||e.complete)v?X(d):z--,K(d)})}),tt=function(e){var t,n=F.test(e.nodeName),i=n&&(e[a](r.sizesAttr)||e[a]("sizes")),s=i=="auto";if((s||!c)&&n&&(e.src||e.srcset)&&!e.complete&&!g(e,r.errorClass))return;t=E(e,"lazyunveilread").detail,s&&O.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,z++,et(e,t,s,i,n)},nt=function(){if(c)return;if(s.now()-v<999){l(nt,999);return}var e=L(function(){r.loadMode=3,J()});c=!0,r.loadMode=3,J(),f("scroll",function(){r.loadMode==3&&(r.loadMode=2),e()},!0)};return{_:function(){v=s.now(),e=n.getElementsByClassName(r.lazyClass),o=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass),j=r.hFac,f("scroll",J,!0),f("resize",J,!0),t.MutationObserver?(new MutationObserver(J)).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[u]("DOMNodeInserted",J,!0),i[u]("DOMAttrModified",J,!0),setInterval(J,999)),f("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){n[u](e,J,!0)}),/d$|^c/.test(n.readyState)?nt():(f("load",nt),n[u]("DOMContentLoaded",J),l(nt,2e4)),J(e.length>0)},checkElems:J,unveil:tt}}(),O=function(){var e,t=C(function(e,t,n,r){var i,s,o;e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r);if(p.test(t.nodeName||"")){i=t.getElementsByTagName("source");for(s=0,o=i.length;s<o;s++)i[s].setAttribute("sizes",r)}n.detail.dataAttr||S(e,n.detail)}),i=function(e,n,r){var i,s=e.parentNode;s&&(r=T(e,s,r),i=E(e,"lazybeforesizes",{width:r,dataAttr:!!n}),i.defaultPrevented||(r=i.detail.width,r&&r!==e._lazysizesWidth&&t(e,s,i,r)))},s=function(){var t,n=e.length;if(n){t=0;for(;t<n;t++)i(e[t])}},o=L(s);return{_:function(){e=n.getElementsByClassName(r.autosizesClass),f("resize",o)},checkElems:o,updateElem:i}}(),M=function(){M.i||(M.i=!0,O._(),A._())};return function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in r||(r[e]=n[e]);t.lazySizesConfig=r,l(function(){r.init&&M()})}(),{cfg:r,autoSizer:O,loader:A,init:M,uP:S,aC:y,rC:b,hC:g,fire:E,gW:T,rAF:N}})}).call(this);