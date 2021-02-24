/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],e=["ﻵ","ﻷ","ﻹ","ﻻ"],n=["ﻶ","ﻸ","ﻺ","ﻼ"],o=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],i=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],u=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],s=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],a=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],c=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],l=["ء","ف"],h=["غ","ي"],T=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],A=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],L=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],g=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],d=[[18,18,18,18,18,18,18,18,18,6,5,6,8,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,5,5,5,6,8,4,4,11,11,11,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,18,18,18,18,18,18,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,9,4,11,11,11,11,4,4,4,4,0,4,4,18,4,4,11,11,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,12,1,12,12,1,12,12,1,12,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,11,11,7,9,7,4,4,12,12,12,12,12,12,12,12,12,12,12,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,3,3,3,3,3,3,3,3,3,3,11,3,3,7,7,7,12,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,3,4,12,12,12,12,12,12,7,7,12,12,4,12,12,12,12,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,12,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,12,12,12,12,12,12,12,12,12,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,18,18,18,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,18,18,18,18,18,4,4,4,4,4,18,18,18,18,18,18,2,0,4,4,2,2,2,2,2,2,10,10,4,4,4,0,2,2,2,2,2,2,2,2,2,2,10,10,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,12,1,1,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,11,4,4,10,10,4,4,4,4,4,11,11,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,18],[4,4,4,11,11,11,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,11,11,4,4,4,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class B{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,o,s){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,r,e){P=[],M=[];for(let n=0;n<e;n++)t[n]=n,r[n]=n,P[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(o,s))return t;o=this.inputFormat,s=this.outputFormat;let f=t;const l=z,h=j(o.charAt(1)),T=j(s.charAt(1)),A=("I"===o.charAt(0)?"L":o.charAt(0))+h,L=("I"===s.charAt(0)?"L":s.charAt(0))+T,g=o.charAt(2)+s.charAt(2);l.defInFormat=A,l.defOutFormat=L,l.defSwap=g;const d=U(t,A,L,g,l);let B=!1;return"R"===s.charAt(1)?B=!0:"C"!==s.charAt(1)&&"D"!==s.charAt(1)||(B="rtl"===this.checkContextual(d)),this.sourceToTarget=P,this.targetToSource=function(t){const r=new Array(t.length);for(let e=0;e<t.length;e++)r[t[e]]=e;return r}(this.sourceToTarget),Y=this.targetToSource,f=o.charAt(3)===s.charAt(3)?d:"S"===s.charAt(3)?function(t,r,o){if(0===r.length)return"";void 0===t&&(t=!0);void 0===o&&(o=!0);const s=(r=String(r)).split("");let f=0,c=1,l=s.length;t||(f=s.length-1,c=-1,l=1);const h=function(t,r,o,s,f){let c=0;const l=[];let h=0;for(let T=r;T*o<s;T+=o)if(S(t[T])||x(t[T])){if("ل"===t[T]&&N(t,T+o,o,s)){t[T]=D(t[T+o],0===c?e:n),T+=o,k(t,T,o,s),f&&(l[h]=T,h++),c=0;continue}const r=t[T];1===c?t[T]=w(t,T+o,o,s)?O(t[T]):I(t[T],u):!0===w(t,T+o,o,s)?t[T]=I(t[T],a):t[T]=I(t[T],i),x(r)||(c=1),!0===E(r)&&(c=0)}else c=0;return l}(s,f,c,l,o);let T="";for(let r=0;r<s.length;r++)o&&_(h,h.length,r)>-1?(y(Y,r,!t,-1),P.splice(r,1)):T+=s[r];return T}(B,d,!0):function(t,e,n){if(0===t.length)return"";void 0===n&&(n=!0);void 0===e&&(e=!0);t=String(t);let o="";const i=t.split("");for(let u=0;u<t.length;u++){let s=!1;if(i[u]>="ﹰ"&&i[u]<"\ufeff"){const a=t.charCodeAt(u);i[u]>="ﻵ"&&i[u]<="ﻼ"?(e?(u>0&&n&&" "===i[u-1]?o=o.substring(0,o.length-1)+"ل":(o+="ل",s=!0),o+=r[(a-65269)/2]):(o+=r[(a-65269)/2],o+="ل",u+1<t.length&&n&&" "===i[u+1]?u++:s=!0),s&&(y(Y,u,!0,1),P.splice(u,0,P[u]))):o+=c[a-65136]}else o+=i[u]}return o}(d,B,!0),this.sourceToTarget=P,this.targetToSource=Y,this.levels=M,f}_inputFormatSetter(t){if(!G.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!G.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r}checkContextual(t){let r=m(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(t){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r}hasBidiChar(t){return H.test(t)}}function U(t,r,e,n,o){const i=function(t,r,e){void 0===r.inFormat&&(r.inFormat=e.defInFormat);void 0===r.outFormat&&(r.outFormat=e.defOutFormat);void 0===r.swap&&(r.swap=e.defSwap);if(r.inFormat===r.outFormat)return r;const n=r.inFormat.substring(0,1),o=r.outFormat.substring(0,1);let i,u=r.inFormat.substring(1,4),s=r.outFormat.substring(1,4);"C"===u.charAt(0)&&(i=m(t),u="ltr"===i||"rtl"===i?i.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=n+u);"C"===s.charAt(0)&&(i=m(t),"rtl"===i?s="RTL":"ltr"===i?(i=function(t){const r=t.split("");return r.reverse(),m(r.join(""))}(t),s=i.toUpperCase()):s="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=o+s);return r}(t,{inFormat:r,outFormat:e,swap:n},o);if(i.inFormat===i.outFormat)return t;r=i.inFormat,e=i.outFormat,n=i.swap;const u=r.substring(0,1),s=r.substring(1,4),a=e.substring(0,1),f=e.substring(1,4);if(o.inFormat=r,o.outFormat=e,o.swap=n,"L"===u&&"VLTR"===e){if("LTR"===s)return o.dir=$,R(t,o);if("RTL"===s)return o.dir=q,R(t,o)}if("V"===u&&"V"===a)return o.dir="RTL"===s?q:$,p(t,o);if("L"===u&&"VRTL"===e)return"LTR"===s?(o.dir=$,t=R(t,o)):(o.dir=q,t=R(t,o)),p(t);if("VLTR"===r&&"LLTR"===e)return o.dir=$,R(t,o);if("V"===u&&"L"===a&&s!==f)return t=p(t),"RTL"===s?U(t,"LLTR","VLTR",n,o):U(t,"LRTL","VRTL",n,o);if("VRTL"===r&&"LRTL"===e)return U(t,"LRTL","VRTL",n,o);if("L"===u&&"L"===a){const r=o.swap;return o.swap=r.substr(0,1)+"N","RTL"===s?(o.dir=q,t=R(t,o),o.swap="N"+r.substr(1,2),o.dir=$,t=R(t,o)):(o.dir=$,t=R(t,o),o.swap="N"+r.substr(1,2),t=U(t,"VLTR","LRTL",o.swap,o)),t}return t}function m(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function R(t,r){const e=t.split(""),n=[];return F(e,n,r),function(t,r,e){if(0===e.hiLevel||e.swap.substr(0,1)===e.swap.substr(1,2))return;for(let e=0;e<t.length;e++)1===r[e]&&(t[e]=V(t[e]))}(e,n,r),v(2,e,n,r),v(1,e,n,r),M=n,e.join("")}function F(t,r,e){const n=t.length,o=e.dir?A:T;let i=0,u=-1;const s=[],a=[];e.hiLevel=e.dir,e.lastArabic=!1,e.hasUbatAl=!1,e.hasUbatB=!1,e.hasUbatS=!1;for(let r=0;r<n;r++)s[r]=b(t[r]);for(let f=0;f<n;f++){const n=i,c=C(t,s,a,f,e);a[f]=c,i=o[n][c];const l=240&i;i&=15;const h=o[i][W];if(r[f]=h,l>0)if(16===l){for(let t=u;t<f;t++)r[t]=1;u=-1}else u=-1;if(o[i][Z])-1===u&&(u=f);else if(u>-1){for(let t=u;t<f;t++)r[t]=h;u=-1}5===s[f]&&(r[f]=0),e.hiLevel|=h}e.hasUbatS&&function(t,r,e,n){for(let o=0;o<e;o++)if(6===t[o]){r[o]=n.dir;for(let e=o-1;e>=0&&8===t[e];e--)r[e]=n.dir}}(s,r,n,e)}function b(t){const r=t.charCodeAt(0),e=g[r>>8];return e<100?e:d[e-100][255&r]}function p(t,r){const e=t.split("");if(r){const t=[];F(e,t,r),M=t}return e.reverse(),P.reverse(),e.join("")}function _(t,r,e){for(let n=0;n<r;n++)if(t[n]===e)return n;return-1}function S(t){for(let r=0;r<l.length;r++)if(t>=l[r]&&t<=h[r])return!0;return!1}function w(t,r,e,n){for(;r*e<n&&x(t[r]);)r+=e;return!!(r*e<n&&S(t[r]))}function N(t,e,n,o){for(;e*n<o&&x(t[e]);)e+=n;let i=" ";if(!(e*n<o))return!1;i=t[e];for(let t=0;t<r.length;t++)if(r[t]===i)return!0;return!1}function v(t,r,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===q&&!n.hasUbatB)return r.reverse(),void P.reverse();const o=r.length;let i,u,s,a,f,c=0;for(;c<o;){if(e[c]>=t){for(i=c+1;i<o&&e[i]>=t;)i++;for(u=c,s=i-1;u<s;u++,s--)a=r[u],r[u]=r[s],r[s]=a,f=P[u],P[u]=P[s],P[s]=f;c=i}c++}}function C(t,r,e,n,o){const i=r[n];return{UBAT_L:()=>(o.lastArabic=!1,0),UBAT_R:()=>(o.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>o.lastArabic?3:2,UBAT_AL:()=>(o.lastArabic=!0,o.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,i;return n<1||n+1>=r.length||2!==(t=e[n-1])&&3!==t||2!==(i=r[n+1])&&3!==i?4:(o.lastArabic&&(i=3),i===t?i:4)},UBAT_ES:()=>2===(n>0?e[n-1]:5)&&n+1<r.length&&2===r[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===e[n-1])return 2;if(o.lastArabic)return 4;let t=n+1;const i=r.length;for(;t<i&&11===r[t];)t++;return t<i&&2===r[t]?2:4},UBAT_NSM:()=>{if("VLTR"===o.inFormat){const e=r.length;let o=n+1;for(;o<e&&12===r[o];)o++;if(o<e){const e=t[n].charCodeAt[0],i=e>=1425&&e<=2303||64286===e,u=r[o];if(i&&(1===u||7===u))return 1}}return n<1||5===r[n-1]?4:e[n-1]},UBAT_B:()=>(o.lastArabic=!0,o.hasUbatB=!0,o.dir),UBAT_S:()=>(o.hasUbatS=!0,4),UBAT_LRE:()=>(o.lastArabic=!1,4),UBAT_RLE:()=>(o.lastArabic=!1,4),UBAT_LRO:()=>(o.lastArabic=!1,4),UBAT_RLO:()=>(o.lastArabic=!1,4),UBAT_PDF:()=>(o.lastArabic=!1,4),UBAT_BN:()=>4}[L[i]]()}function V(r){let e,n=0,o=t.length-1;for(;n<=o;)if(e=Math.floor((n+o)/2),r<t[e][0])o=e-1;else{if(!(r>t[e][0]))return t[e][1];n=e+1}return r}function E(t){for(let r=0;r<f.length;r++)if(f[r]===t)return!0;return!1}function O(t){for(let r=0;r<o.length;r++)if(t===o[r])return s[r];return t}function I(t,r){for(let e=0;e<o.length;e++)if(t===o[e])return r[e];return t}function x(t){return t>="ً"&&t<="ٕ"}function j(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function k(t,r,e,n){for(;r*e<n&&x(t[r]);)r+=e;return r*e<n&&(t[r]=" ",!0)}function D(t,e){for(let n=0;n<r.length;n++)if(t===r[n])return e[n];return t}function y(t,r,e,n){for(let o=0;o<t.length;o++)(t[o]>r||!e&&t[o]===r)&&(t[o]+=n)}let P=[],Y=[],M=[];const z={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},W=5,Z=6,$=0,q=1,G=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,H=/[\u0591-\u06ff\ufb1d-\ufefc]/;export{B};
