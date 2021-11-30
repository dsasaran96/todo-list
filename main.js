(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\ninput {\n    text-decoration: none;\n    background-color: none;\n    outline: none;\n    border: none;\n}\n\nbody {\n    font-family:'Poppins', sans-serif;\n}\n\n/* hdear */\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1.5rem;\n    background-color: crimson;\n    color: white;\n    align-items: center;\n}\n\n.header h1 {\n    font-family: 'Poppins', sans-serif;\n    font-size: 2rem;\n    font-weight: 300;\n    user-select: none;\n}\n\n.fa-chess-rook {\n    font-size: 2rem;\n}\n\n.fa-plus {\n    color: crimson;\n    font-size: 1.125rem;\n}\n\n.add-btn {\n    background: white;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    transition: all 0.4s;\n    cursor: pointer;\n}\n\n.add-btn:hover {\n    transform: rotate(360deg);\n}\n\n/* sidebar */\n\n.side-bar {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 200px;\n    background-color: #f1f1f1;\n    position: fixed;\n    overflow: hidden;\n}\n\n.side-bar-btn {\n    display: block;\n    color: #4d4d4d;\n    padding: 8px;\n    text-decoration: none;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 300;\n    text-align: left;\n    transition: all 0.4s;\n    cursor: pointer;\n}\n\n.side-bar-btn_big {\n    display: flex;\n    color: #4d4d4d;\n    padding: 8px;\n    text-decoration: none;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 800;\n    text-align: left;\n    transition: all 0.4s;\n    cursor: pointer;\n    align-items: center;\n}\n\n.side-bar-btn_big:not(.no-hover):hover {\n    background-color: #b8b8b8;\n    color: rgb(92, 5, 23);\n}\n\n.side-bar-btn:not(.no-hover):hover {\n    background-color: #b8b8b8;\n}\n\n.fa-inbox {\n    padding-right: 8px;\n    color: rgb(0, 140, 255);\n}\n\n.fa-calendar-day {\n    padding-right: 8px;\n    color: rgb(11, 179, 11);\n}\n\n.fa-calendar-week {\n    padding-right: 8px;\n    color: purple;\n}\n\n.active {\n    background-color: crimson;\n    color: white;\n}\n\n/* main */\n\n.main {\n    margin-left: 250px;\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-task {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    bottom: 10px;\n    position: fixed;\n    padding-left: 24px;\n    height: 2rem;\n    transition: 0.4s;\n}\n\n.task-input-bottom {\n    font-size: 1.5rem;\n    text-align: left;\n    width: 300px;\n}\n\n.add-btn-bottom {\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.add-btn-bottom .fa-plus {\n    font-size: 1.5rem;\n}\n\n.add-btn-bottom:hover {\n    transform: scale(1.4) rotate(-360deg);\n}\n\n/* task styling */\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 62.5vw;\n    gap: 8px;\n    border-bottom: 1px lightgrey solid;\n    padding-bottom: 20px;\n    transition: 0.4s;\n    list-style: none;\n}\n\n.task-content {\n    width: 62.5vw;\n}\n\n.actions {\n    display: flex;\n    gap: 12px;\n    padding-left: 8px;\n}\n\n.delete {\n    color: crimson;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\n.delete:hover {\n    transform: scale(1.2);\n}\n\n.edit {\n    color: purple;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\n.edit:hover {\n    transform: scale(1.2);\n}\n\n.date {\n    font-style: italic;\n    color: crimson;\n    font-size: 80%;\n    cursor: pointer;\n}\n\n.priority-flag-low {\n    color:rgb(0, 140, 255);\n    transition: all 0.3s;\n    background-image: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.priority-flag-low:hover {\n    transform: scale(1.2);\n}\n\n.priority-flag-medium {\n    color:rgb(255, 196, 0);\n    transition: all 0.3s;\n    background-image: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.priority-flag-medium:hover {\n    transform: scale(1.2);\n}\n\n.priority-flag-high {\n    color:crimson;\n    transition: all 0.3s;\n    background-image: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.priority-flag-high:hover {\n    transform: scale(1.2);\n}\n\n/* modal */\n\n.modal-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n    width: 600px;\n    height: 400px;\n    margin: 10% auto;\n    padding: 20px;\n    border-radius: 20px;\n}\n\n.close {\n    position: relative;\n    margin-left: auto;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.4s;\n}\n\n.close:hover {\n    transform: scale(1.4);\n}\n\n.modal-title {\n    font-size: 2rem;\n    font-weight: lighter;\n}\n\n.input {\n    height: 40px;\n    width: 400px;\n    font-size: 1.5rem;\n}\n\n.modal-date {\n    font-size: 1.125rem;\n    color: crimson;\n    font-style: italic;\n}\n\n.submit {\n    outline: none;\n    border: none;\n    background-color: lightgrey;\n    border-radius: 20px;\n    padding: 8px;\n    font-size: 1rem;\n    font-family: 'Poppins', sans-serif;\n    transition: 0.4s;\n    cursor: pointer;\n}\n\n.submit:hover {\n    background-color: crimson;\n}\n/* added throguh function */\n\n.completed {\n    color: lightgrey;\n    transition: 0.4s;\n}\n\n/* media query sa vad cu vs-code side to side lmfao */\n\n@media screen and (max-width: 900px) {\n    .task-content {\n        width: 375px;\n    }\n\n    .task {\n        width: 375px;\n    }\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var d=t[s],c=r.base?d[0]+r.base:d[0],u=o[c]||0,l="".concat(c," ").concat(u);o[c]=u+1;var f=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var d=r(t,a),c=0;c<o.length;c++){var u=n(o[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),d=n.n(s),c=n(216),u=n.n(c),l=n(589),f=n.n(l),m=n(426),h={};function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){return g(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function v(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function w(t){if(g(1,arguments),!p(t)&&"number"!=typeof t)return!1;var e=v(t);return!isNaN(Number(e))}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const T={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,d=a.width?String(a.width):t.defaultWidth;r=t.values[d]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const C={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function M(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?D(d,(function(t){return t.test(s)})):E(d,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(s.length);return{value:i,rest:u}}}function E(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function D(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var L,S={ordinalNumber:(L={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(L.matchPattern);if(!n)return null;var r=n[0],a=t.match(L.parsePattern);if(!a)return null;var o=L.valueCallback?L.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const P={code:"en-US",formatDistance:function(t,e,n){var r,a=y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:T,formatRelative:function(t,e,n,r){return x[t]},localize:C,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};function U(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function W(t,e){g(2,arguments);var n=v(t).getTime(),r=U(e);return new Date(n+r)}function Y(t,e){g(2,arguments);var n=U(e);return W(t,-n)}function N(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const O=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return N("yy"===e?r%100:r,e.length)},q=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):N(n+1,2)},z=function(t,e){return N(t.getUTCDate(),e.length)},B=function(t,e){return N(t.getUTCHours()%12||12,e.length)},j=function(t,e){return N(t.getUTCHours(),e.length)},I=function(t,e){return N(t.getUTCMinutes(),e.length)},F=function(t,e){return N(t.getUTCSeconds(),e.length)},H=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return N(Math.floor(r*Math.pow(10,n-3)),e.length)};var A=864e5;function R(t){g(1,arguments);var e=1,n=v(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Q(t){g(1,arguments);var e=v(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=R(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=R(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function G(t){g(1,arguments);var e=Q(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=R(n);return r}var X=6048e5;function J(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:U(a),i=null==n.weekStartsOn?o:U(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=v(t),d=s.getUTCDay(),c=(d<i?7:0)+d-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function _(t,e){g(1,arguments);var n=v(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:U(i),d=null==a.firstWeekContainsDate?s:U(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,d),c.setUTCHours(0,0,0,0);var u=J(c,e),l=new Date(0);l.setUTCFullYear(r,0,d),l.setUTCHours(0,0,0,0);var f=J(l,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Z(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:U(a),i=null==n.firstWeekContainsDate?o:U(n.firstWeekContainsDate),s=_(t,e),d=new Date(0);d.setUTCFullYear(s,0,i),d.setUTCHours(0,0,0,0);var c=J(d,e);return c}var $=6048e5,V={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return O(t,e)},Y:function(t,e,n,r){var a=_(t,r),o=a>0?a:1-a;return"YY"===e?N(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):N(o,e.length)},R:function(t,e){return N(Q(t),e.length)},u:function(t,e){return N(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return N(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return N(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return q(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return N(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){g(1,arguments);var n=v(t),r=J(n,e).getTime()-Z(n,e).getTime();return Math.round(r/$)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):N(a,e.length)},I:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=R(e).getTime()-G(e).getTime();return Math.round(n/X)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):N(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):z(t,e)},D:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/A)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):N(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return N(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return N(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return N(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return B(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):I(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F(t,e)},S:function(t,e){return H(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return tt(a);case"XXXX":case"XX":return et(a);default:return et(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return tt(a);case"xxxx":case"xx":return et(a);default:return et(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+K(a,":");default:return"GMT"+et(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+K(a,":");default:return"GMT"+et(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return N(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return N((r._originalDate||t).getTime(),e.length)}};function K(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+N(o,2)}function tt(t,e){return t%60==0?(t>0?"-":"+")+N(Math.abs(t)/60,2):et(t,e)}function et(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+N(Math.floor(a/60),2)+n+N(a%60,2)}const nt=V;function rt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function at(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const ot={p:at,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return rt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",rt(a,e)).replace("{{time}}",at(o,e))}};function it(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var st=["D","DD"],dt=["YY","YYYY"];function ct(t){return-1!==st.indexOf(t)}function ut(t){return-1!==dt.indexOf(t)}function lt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ft=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ht=/^'([^]*?)'?$/,gt=/''/g,pt=/[a-zA-Z]/;function vt(t,e,n){g(2,arguments);var r=String(e),a=n||{},o=a.locale||P,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:U(i),d=null==a.firstWeekContainsDate?s:U(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,u=null==c?0:U(c),l=null==a.weekStartsOn?u:U(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var f=v(t);if(!w(f))throw new RangeError("Invalid time value");var m=it(f),h=Y(f,m),p={firstWeekContainsDate:d,weekStartsOn:l,locale:o,_originalDate:f},y=r.match(mt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ot[e])(t,o.formatLong,p):t})).join("").match(ft).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return wt(n);var i=nt[r];if(i)return!a.useAdditionalWeekYearTokens&&ut(n)&&lt(n,e,t),!a.useAdditionalDayOfYearTokens&&ct(n)&&lt(n,e,t),i(h,n,o.localize,p);if(r.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function wt(t){return t.match(ht)[1].replace(gt,"'")}function yt(t,e){g(2,arguments);var n=v(t),r=v(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function bt(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}var Tt=6e4,xt=1440,kt=43200,Ct=525600;function Mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};g(2,arguments);var r=n.locale||P;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var a=yt(t,e);if(isNaN(a))throw new RangeError("Invalid time value");var o,i,s=bt(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=a,a>0?(o=v(e),i=v(t)):(o=v(t),i=v(e));var d,c=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===c)d=Math.floor;else if("ceil"===c)d=Math.ceil;else{if("round"!==c)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");d=Math.round}var u,l=i.getTime()-o.getTime(),f=l/Tt,m=it(i)-it(o),h=(l-m)/Tt;if("second"===(u=null==n.unit?f<1?"second":f<60?"minute":f<xt?"hour":h<kt?"day":h<Ct?"month":"year":String(n.unit))){var p=d(l/1e3);return r.formatDistance("xSeconds",p,s)}if("minute"===u){var w=d(f);return r.formatDistance("xMinutes",w,s)}if("hour"===u){var y=d(f/60);return r.formatDistance("xHours",y,s)}if("day"===u){var b=d(h/xt);return r.formatDistance("xDays",b,s)}if("month"===u){var T=d(h/kt);return 12===T&&"month"!==n.unit?r.formatDistance("xYears",1,s):r.formatDistance("xMonths",T,s)}if("year"===u){var x=d(h/Ct);return r.formatDistance("xYears",x,s)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}document.getElementsByTagName("BODY")[0];const Et=document.getElementById("add"),Dt=document.getElementById("addTaskBtm"),Lt=document.getElementById("taskList"),St=document.querySelector(".close"),Pt=document.getElementById("modalContent"),Ut=document.getElementById("modalDate"),Wt=document.getElementById("Submit"),Yt=document.getElementById("Modal"),Nt=(document.getElementById("sideBar"),document.getElementById("inbox")),Ot=document.getElementById("thisDay"),qt=document.getElementById("week"),zt=document.getElementById("projects");qt.addEventListener("click",(()=>{jt.setActive(qt),jt.displayWeek()})),Ot.addEventListener("click",(t=>{jt.displayToday(),jt.setActive(Ot)})),Nt.addEventListener("click",(t=>{jt.setActive(Nt),jt.resetTaskList(),jt.displayTasks()})),Et.onclick=function(){Yt.style.display="block"},St.onclick=function(){Yt.style.display="none"},Wt.onclick=function(){Yt.style.display="none"},window.onclick=function(t){t.target==Yt&&(Yt.style.display="none")},Wt.addEventListener("click",(t=>{const e=document.querySelector('input[name="priority"]:checked').value,n=Pt.value,r=Ut.value;if(""===Pt)alert("Please fill the task");else{const t=new Bt(e,n,r);It.addTask(t),jt.addTaskToList(t),jt.clearFields(),jt.resetTaskList(),jt.displayTasks(),jt.setActive(Nt)}})),Dt.addEventListener("click",(()=>{const t=document.getElementById("taskInputBtm");if(""!=t.value){const e=document.createElement("div");e.classList.add("task");const n=document.createElement("div");n.classList.add("priority-flag-low");const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-flag"),n.appendChild(r);const a=document.createElement("div");a.innerText=t.value,a.classList.add("task-content");const o=document.createElement("div"),i=vt(new Date,"dd/MMM/yyyy");o.innerText=i,o.classList.add("date");const s=document.createElement("div");s.classList.add("actions");const d=document.createElement("div");d.classList.add("delete");const c=document.createElement("i");c.classList.add("fas"),c.classList.add("fa-trash-alt"),d.appendChild(c);const u=document.createElement("div");u.classList.add("edit");const l=document.createElement("i");l.classList.add("fas"),l.classList.add("fa-edit"),u.appendChild(l),s.appendChild(u),s.appendChild(d),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(s),Lt.appendChild(e);const f=new Bt("low",a.innerText,i);It.addTask(f),jt.clearFields(),t.value=""}else alert("Please fill the quick add section")}));class Bt{constructor(t,e,n){this.priority=t,this.content=e,this.date=n}}class jt{static displayTasks(){It.getTasks().forEach((t=>{jt.addTaskToList(t)}))}static displayToday(){const t=It.getTasks();jt.resetTaskList(),t.forEach((t=>{const e=vt(new Date,"yyyy-MM-dd");t.date==e&&jt.addTaskToList(t)}))}static displayWeek(){const t=It.getTasks();jt.resetTaskList(),t.forEach((t=>{const e=function(t,e){return g(1,arguments),Mt(t,Date.now(),e)}(new Date(t.date),{unit:"day",roundingMethod:"floor"}).split(" ")[0];e<=7&&jt.addTaskToList(t)}))}static resetTaskList=()=>{Lt.innerHTML=""};static updateTaskList=()=>{jt.resetTaskList(),It.getTasks().forEach((t=>{jt.addTaskToList(t)}))};static addTaskToList(t){const e=document.createElement("div");e.classList.add("task");const n=document.createElement("div");n.classList.add(`priority-flag-${t.priority}`);const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-flag"),n.appendChild(r);const a=document.createElement("div");a.innerText=t.content,a.classList.add("task-content");const o=document.createElement("div");o.innerText=vt(new Date(`${t.date}`),"dd/MMM/yyyy"),o.classList.add("date");const i=document.createElement("div");i.classList.add("actions");const s=document.createElement("div");s.classList.add("delete");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-trash-alt"),s.appendChild(d),s.addEventListener("click",(t=>{It.removeTask(t.target.parentElement.parentElement.parentElement.children[1].innerText),t.target.parentElement.parentElement.parentElement.remove()}));const c=document.createElement("div");c.classList.add("edit");const u=document.createElement("i");u.classList.add("fas"),u.classList.add("fa-edit"),c.appendChild(u),i.appendChild(c),i.appendChild(s),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(i),Lt.appendChild(e)}static setActive(t){Nt.classList.remove("active"),Nt.classList.remove("no-hover"),Ot.classList.remove("active"),Ot.classList.remove("no-hover"),qt.classList.remove("active"),qt.classList.remove("no-hover"),zt.classList.remove("active"),zt.classList.remove("no-hover"),t.classList.add("active"),t.classList.add("no-hover")}static clearFields(){Pt.value=""}}class It{static getTasks(){let t;return t=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks")),t}static addTask(t){const e=It.getTasks();e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}static removeTask(t){const e=It.getTasks();e.forEach(((n,r)=>{n.content===t&&e.splice(r,1)})),localStorage.setItem("tasks",JSON.stringify(e))}}document.addEventListener("DOMContentLoaded",jt.displayTasks)})()})();