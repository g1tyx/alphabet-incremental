(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/alphabet/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"0461":function(e,t,n){"use strict";var s=n("4e33"),a=n.n(s);a.a},"0f65":function(e,t,n){"use strict";var s=n("34bc"),a=n.n(s);a.a},"1bd3":function(e,t,n){},"1f37":function(e,t,n){"use strict";var s=n("1bd3"),a=n.n(s);a.a},2114:function(e,t,n){},"34bc":function(e,t,n){},"4ce7":function(e,t,n){"use strict";var s=n("a6fa"),a=n.n(s);a.a},"4e33":function(e,t,n){},"4f66":function(e,t,n){"use strict";var s=n("940d"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"title"},[n("strong",[e._v("alphabet")]),n("span",{staticClass:"thin"},[e._v("incremental")]),n("small",[e._v(" beta v"+e._s(e.version))])]),n("Nav"),e.hasUpgrade("dotbutton")?n("DotButton"):e._e(),"achievements"===e.section?n("SectionAchievements"):e._e(),"alphabet"===e.section?n("ul",[n("div",{staticClass:"stats"},[n("p",[e._v("Available dots: "),n("strong",[e._v(e._s(e.formatDots(e.dots)))])]),n("p",[e._v("Dots per second (dps): "),n("strong",[e._v(e._s(e.formatDots(e.getDotsPerSecond()))+"/s")])]),n("p",[e._v("Playtime: "),n("strong",[e._v(e._s(e.timeFormat(Date.now()-e.startPlayingTime)))])])]),e._l(e.alphabet,(function(e,t){return n("Letter",{key:t,attrs:{index:t,letter:e}})}))],2):e._e(),"upgrades"===e.section?n("SectionUpgrades"):e._e(),"options"===e.section?n("SectionOptions",{on:{hardReset:e.hardReset}}):e._e()],1)},i=[],r=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.letter.unlocked?n("li",{staticClass:"letter",class:{owned:e.letter.level,disabled:!e.canBuy,maxed:e.isMaxed}},[n("div",{staticClass:"letter-content"},[n("div",{staticClass:"name"},[e._v(e._s(e.name))]),e.isMaxed?n("div",[e._v("MAXED")]):e._e(),!e.isMaxed&&e.letter.level?n("small",{staticClass:"letter-level"},[e._v(e._s(e.letter.level)+"/"+e._s(e.isSuper?e.letter.maxLevel:e.letter.superLevel))]):e._e(),e.letter.level?n("small",{staticClass:"letter-increment"},[e._v("Dots: "+e._s(e.formatDots(e.actualIncrementWithAll))+"/s")]):e._e(),n("div",[e.isSuper&&!e.isMaxed?n("small",{staticClass:"letter-increment"},[e._v("("+e._s(e.formatDots(e.actualIncrement))+"/s x2)")]):e._e(),e.isMaxed?n("small",{staticClass:"letter-increment"},[e._v("("+e._s(e.formatDots(e.actualIncrement))+"/s x3)")]):e._e()])]),e.isMaxed?e._e():n("div",{staticClass:"letter-cost",on:{click:e.buy}},[n("small",[e._v("Next lvl: "+e._s(e.formatDots(e.incrementNextLevel))+"/s")]),n("small",[e._v("Cost: "+e._s(this.formatDots(e.cost)))])]),e.isMaxed?e._e():n("div",{staticClass:"fill",style:"height: "+e.percent+"%"})]):e._e()},l=[];const c={methods:{formatDots(e){let t="0";e<1e3?t=parseFloat(e).toFixed(2):e>=1e21?t=parseFloat(e/1e21).toFixed(2)+" Se":e>=1e18?t=parseFloat(e/1e18).toFixed(2)+" qi":e>=1e15?t=parseFloat(e/1e15).toFixed(2)+" qu":e>=1e12?t=parseFloat(e/1e12).toFixed(2)+" t":e>=1e9?t=parseFloat(e/1e9).toFixed(2)+" b":e>=1e6?t=parseFloat(e/1e6).toFixed(2)+" m":e>=1e3&&(t=parseFloat(e/1e3).toFixed(2)+" k");const n=t.split(".");let s=n[0],a=n.length>1?"."+n[1]:"";const i=/(\d+)(\d{3})/;while(i.test(s))s=s.replace(i,"$1.$2");return s+a},timeFormat(e,t=!1){var n=e%1e3;e=(e-n)/1e3;var s=e%60;e=(e-s)/60;var a=e%60,i=(e-a)/60;if(t)return{h:i,m:a,s:s};var r="";return i&&(r+=i+"h"),(i||a)&&(r+=" "+a+"m"),(a||s)&&(r+=" "+s+"s"),r},hasUpgrade(e){return!!this.upgrades.find(t=>t.id===e).owned},changeSection(e){this.showing=e},calcPercent(e,t){let n=100*e/t;return n>100&&(n=100),n.toFixed(2)},getDotsPerSecond(){let e=0;return e=this.alphabet.reduce((e,t)=>{if(!t.level)return e;let n=e+t.inc;return t.level>=t.maxLevel?n*=3:t.level>=t.superLevel&&(n*=2),n*=this.allLettersMultiplier,e+=n,e},e),e}}};var u=c,d={name:"Letter",mixins:[u],props:{letter:Object,index:Number},computed:{...Object(r["b"])(["letterBaseCost","dots","alphabet"]),name(){return this.isSuper?this.letter.super:this.letter.name},cost(){return this.letter.cost},canBuy(){return this.cost<=this.dots&&!this.isMaxed},isSuper(){return this.letter.level>=this.letter.superLevel},isMaxed(){return this.letter.level>=this.letter.maxLevel},percent(){return this.calcPercent(this.dots,this.cost)},actualIncrement(){return this.letter.inc},actualIncrementWithAll(){let e=this.actualIncrement;return this.isMaxed?e*=3:this.isSuper&&(e*=2),e},incrementNextLevel(){let e=1.1*this.actualIncrement;return this.isMaxed?e*=3:this.isSuper&&(e*=2),e}},methods:{buy(){if(!this.canBuy)return!1;this.$store.commit("buy",{index:this.index,cost:this.cost})}}},h=d,p=(n("0461"),n("2877")),f=Object(p["a"])(h,o,l,!1,null,"287a2e2c",null),m=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dot-button",on:{click:e.addDots}},[e._v("+"+e._s(e.formatDots(e.calcInc))+" dots")])},b=[],g={name:"DotButton",mixins:[u],computed:{...Object(r["b"])(["upgrades","dotButtonMultiplier"]),calcInc(){let e=5;return e*=this.dotButtonMultiplier,e}},methods:{addDots(){this.$store.commit("incDots",this.calcInc)}}},_=g,x=(n("791d"),Object(p["a"])(_,v,b,!1,null,"303d2e83",null)),y=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Available upgrades")]),n("ul",e._l(e.upgradesNotOwned,(function(e,t){return n("Upgrade",{key:t,attrs:{data:e}})})),1),e.upgradesOwned.length?[n("h2",[e._v("Upgrades owned")]),n("ul",e._l(e.upgradesOwned,(function(e,t){return n("Upgrade",{key:t,attrs:{data:e}})})),1)]:e._e()],2)},w=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isNear?n("li",{staticClass:"upgrade",class:{owned:e.data.owned}},[n("div",{staticClass:"title"},[e._v(e._s(e.data.title))]),e.data.owned?e._e():n("div",{staticClass:"buy-upgrade",class:{"can-buy":e.canBuy},on:{click:e.buy}},[e._v(" Buy for "+e._s(e.formatDots(e.data.cost))+" "),n("div",{staticClass:"buy-upgrade-fill",style:"width: "+e.percent+"%"})])]):e._e()},S=[],O={name:"Upgrade",props:["data"],mixins:[u],computed:{...Object(r["b"])(["dots","higherDots"]),percent(){return this.calcPercent(this.dots,this.data.cost)},isNear(){return this.higherDots>=this.data.near},canBuy(){return this.dots>=this.data.cost}},methods:{buy(){if(!this.canBuy)return!1;this.$store.commit("buyUpgrade",this.data)}}},M=O,A=(n("9791"),Object(p["a"])(M,D,S,!1,null,"2d1aeb0e",null)),C=A.exports,j={name:"SectionUpgrades",components:{Upgrade:C},computed:{...Object(r["b"])(["upgrades"]),upgradesOwned(){return this.upgrades.filter(e=>e.owned)},upgradesNotOwned(){return this.upgrades.filter(e=>!e.owned).splice(0,4)}}},L=j,F=(n("4ce7"),Object(p["a"])(L,k,w,!1,null,"6d18ea14",null)),B=F.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Achievements "),n("small",{staticClass:"extra-small-muted"},[e._v("Completed "+e._s(e.countAchieved)+"/"+e._s(e.totalAchievements))])]),n("ul",{staticClass:"achievements"},e._l(e.achievements,(function(e,t){return n("Achievement",{key:t,attrs:{data:e}})})),1)])},$=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"achievement",class:{done:e.data.done}},[e._v(e._s(e.data.title)+" "),n("span",{staticClass:"progress"},[e._v(e._s(e.progress))])])},U=[],E={name:"Achievement",props:["data"],mixins:[u],computed:{...Object(r["b"])(["achievements","alphabet","upgrades","higherDots"]),progress(){return"function"===typeof this.data.progress?this.data.progress.bind(this)().join("/"):""}}},I=E,N=(n("0f65"),Object(p["a"])(I,T,U,!1,null,"7e8f528f",null)),R=N.exports,K={name:"SectionAchievements",components:{Achievement:R},computed:{...Object(r["b"])(["achievements","higherDots"]),totalAchievements(){return Object.keys(this.achievements).length},countAchieved(){let e=0;for(let t in this.achievements)this.achievements[t].done&&e++;return e}}},q=K,G=(n("4f66"),Object(p["a"])(q,P,$,!1,null,"c177b656",null)),J=G.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"options-content"},[n("button",{staticClass:"hard-reset",on:{click:function(t){return e.$emit("hardReset")}}},[n("span",{staticClass:"name"},[e._v("! Hard reset")]),n("small",[e._v("You'll loose all your progress!")])])])},H=[],X={name:"Achievement",props:["data"],computed:{...Object(r["b"])(["section","upgradesAvailable"])}},Y=X,z=(n("f023"),Object(p["a"])(Y,W,H,!1,null,"72dac5d6",null)),Q=z.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav"},[n("li",{class:{active:"alphabet"===e.section},on:{click:function(t){return e.changeSection("alphabet")}}},[e._v("Alphabet")]),n("li",{class:{active:"upgrades"===e.section},on:{click:function(t){return e.changeSection("upgrades")}}},[e._v("Upgrades "),e.upgradesAvailable?n("span",[e._v(e._s(e.upgradesAvailable))]):e._e()]),n("li",{class:{active:"achievements"===e.section},on:{click:function(t){return e.changeSection("achievements")}}},[e._v("Achievements")]),n("li",{class:{active:"options"===e.section},on:{click:function(t){return e.changeSection("options")}}},[e._v("Options")])])},Z=[],ee={name:"Achievement",props:["data"],computed:{...Object(r["b"])(["section","upgradesAvailable"])},methods:{changeSection(e){this.$store.commit("changeSection",e)}}},te=ee,ne=(n("1f37"),Object(p["a"])(te,V,Z,!1,null,"48c07b86",null)),se=ne.exports,ae={name:"App",mixins:[u],components:{Letter:m,Nav:se,DotButton:y,SectionUpgrades:B,SectionAchievements:J,SectionOptions:Q},computed:{...Object(r["b"])(["alphabet","achievements","section","upgrades","dots","version","storageKey","allLettersMultiplier","dotButtonMultiplier","startPlayingTime","higherDots"]),upgradesNotOwned(){return this.upgrades.filter(e=>!e.owned)}},data(){return{timer:null,timerStartTick:null,showing:"alphabet"}},methods:{startTimer(){if(this.timer)return!1;this.timer=setInterval(this.tick.bind(this),1),this.timerStartTick=Date.now()},tick(){const e=Date.now()-this.timerStartTick;let t=this.getDotsPerSecond();t=t*e/1e3,this.$store.commit("incDots",t),this.timerStartTick=Date.now(),this.checkAchievements()},checkAchievements(){for(let e in this.achievements)!this.achievements[e].done&&this.achievements[e].check.bind(this)()&&(this.achievements[e].done=!0)},stopTimer(){clearInterval(this.timer),this.timerStartTick=null},hardReset(){this.stopTimer(),localStorage.removeItem(this.storageKey),location.reload()}},mounted(){this.startTimer()}},ie=ae,re=(n("034f"),Object(p["a"])(ie,a,i,!1,null,null,null)),oe=re.exports;const le=[];for(let ye=97;ye<=122;ye++){const e=ye-96;le.push({name:String.fromCharCode(ye),super:String.fromCharCode(ye-32),unlocked:!1,level:0,inc:Math.pow(e,1.15),cost:Math.pow(e,4),maxLevel:50,superLevel:25})}le[0].unlocked=!0;var ce=le;const ue={getstarted:{title:"Get started",check:function(){return this.alphabet[0].level},done:!1},buyfirstupgrade:{title:"Buy your first upgrade",check:function(){return this.upgrades.filter(e=>e.owned).length>0},done:!1},getdotbutton:{title:"Unlock the Dot button",check:function(){return this.hasUpgrade("dotbutton")},done:!1},play666:{title:"Play for 666 hours",check:function(){return this.timeFormat(Date.now()-this.startPlayingTime,!0).h>=666},done:!1},unlockall:{title:"Unlock the complete alphabet",check:function(){return!this.alphabet.filter(e=>e.unlocked).length},progress:function(){return[this.alphabet.filter(e=>e.unlocked).length,this.alphabet.length]},done:!1},getupper:{title:"Get one letter upercased",check:function(){let e=!1;return this.alphabet.forEach(t=>{t.level>=t.superLevel&&(e=!0)}),e},done:!1},maxone:{title:"Max one letter",check:function(){let e=!1;return this.alphabet.forEach(t=>{t.level>=t.maxLevel&&(e=!0)}),e},done:!1},reach100:{title:"Reach 100 dots",check:function(){return this.higherDots>=100},done:!1},reach1k:{title:"Reach 1k dots",check:function(){return this.higherDots>=1e3},done:!1},reach1m:{title:"Reach 1m dots",check:function(){return this.higherDots>=1e6},done:!1},reach1b:{title:"Reach 1b dots",check:function(){return this.higherDots>=1e9},done:!1},maxall:{title:"Max all letters",check:function(){let e=!0;return this.alphabet.forEach(t=>{t.level<t.maxLevel&&(e=!1)}),e},progress:function(){return[this.alphabet.filter(e=>e.level>=e.maxLevel).length,this.alphabet.length]},done:!1},buyallupgrades:{title:"Buy all upgrades",check:function(){let e=!0;return this.upgrades.forEach(t=>{t.owned||(e=!1)}),e},progress:function(){return[this.upgrades.filter(e=>e.owned).length,this.upgrades.length]},done:!1}};var de=ue;const he=function(e){return function(){this.allLettersMultiplier*=1+e/100}},pe=function(){this.dotButtonMultiplier*=2},fe=[{id:"+2%i",title:"All letters increment +2%",cost:500,near:2,effect:he(2)},{id:"+2%ii",title:"All letters increment +2%",cost:1e3,near:400,effect:he(2)},{id:"dotbutton",title:"Button for manual dots",cost:2e3,near:500},{id:"dotbuttonx2",title:"Manual dots x2",cost:4e3,near:2e3,effect:pe},{id:"dotbuttonx2ii",title:"Manual dots x2",cost:6e3,near:4500,effect:pe},{id:"+2%iii",title:"All letters increment +2%",cost:1e4,near:1200,effect:he(2)},{id:"+5%",title:"All letters increment +5%",cost:15e3,near:9e3,effect:he(5)},{id:"dotbuttonx2iii",title:"Manual dots x2",cost:12e3,near:2e3,effect:pe},{id:"dotbuttonx2i4",title:"Manual dots x2",cost:12e3,near:2500,effect:pe}];for(let ye=1e3;ye<=1e6;ye+=1e5)fe.push({id:"dotbuttonx2i"+ye/1e5,title:"Manual dots x2",cost:ye,near:ye/2,effect:pe});for(let ye=2e3;ye<=2e6;ye+=2e5)fe.push({id:"+5%i"+ye/2e5,title:"All letters increment +5%",cost:ye,near:ye/2,effect:he(5)});var me=fe,ve=n("bfa9");const be=.2,ge="alphabet-incremental-"+be,_e=new ve["a"]({key:ge,storage:localStorage});s["a"].use(r["a"]);var xe=new r["a"].Store({state:{version:be,storageKey:ge,alphabet:ce,achievements:de,upgrades:me,dots:1,section:"alphabet",higherDots:3,startPlayingTime:Date.now(),upgradesAvailable:0,allLettersMultiplier:1,dotButtonMultiplier:1},mutations:{buy(e,t){e.dots-=t.cost,e.alphabet[t.index].level++,e.alphabet[t.index].inc*=1.1,e.alphabet[t.index].cost*=2.25,7===e.alphabet[t.index].level&&e.alphabet[t.index+1]&&(e.alphabet[t.index+1].unlocked=!0),e.alphabet=e.alphabet.slice()},incDots(e,t){e.dots+=t,e.dots>e.higherDots&&(e.higherDots=e.dots)},changeSection(e,t){e.section=t},buyUpgrade(e,t){let n=!1;e.upgrades=e.upgrades.map(e=>(e.id===t.id&&(e.owned=!0,n=!0),e)),n&&(e.dots-=t.cost),t.effect&&"function"===typeof t.effect&&t.effect.bind(e)()}},actions:{},modules:{},plugins:[_e.plugin]});s["a"].config.productionTip=!1,new s["a"]({mixins:[u],store:xe,render:function(e){return e(oe)}}).$mount("#app")},"791d":function(e,t,n){"use strict";var s=n("2114"),a=n.n(s);a.a},"7a18":function(e,t,n){},"85ec":function(e,t,n){},"940d":function(e,t,n){},9791:function(e,t,n){"use strict";var s=n("7a18"),a=n.n(s);a.a},a6fa:function(e,t,n){},e082:function(e,t,n){},f023:function(e,t,n){"use strict";var s=n("e082"),a=n.n(s);a.a}});
//# sourceMappingURL=app.e8067645.js.map