/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: urlAlphabet, random, customRandom, customAlphabet, nanoid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: movieTitles, PossibleDescriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieTitles", function() { return movieTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleDescriptions", function() { return PossibleDescriptions; });

const movieTitles = ['Santa Claus Conquers the Martians','Made for Each Other','The Great Flamarion', 'The Man with the Golden Arm', 'Popeye Meets Sinbad', 'Sagebrush Trail'];

const PossibleDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];


 

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/user.js */ "./src/view/user.js");
/* harmony import */ var _mock_movie_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/movie-data.js */ "./src/mock/movie-data.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _presenters_movies_list_presenter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenters/movies-list-presenter.js */ "./src/presenters/movies-list-presenter.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");







const createIdList = ()=>{
  const FILMS_NUMBER = 20;
  const idList = [];
  for(let i = 0; i<FILMS_NUMBER;i++){
    idList.push(Object(nanoid__WEBPACK_IMPORTED_MODULE_5__["nanoid"])());
  }
  return idList;
}
const IDs = createIdList();

const movies = IDs.map((id)=>Object(_mock_movie_data_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id));
console.log(movies);
const header = document.querySelector('.header');
const main = document.querySelector('.main');
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["render"])(header, new _view_user_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["render"])(main, new _view_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFOREEND);

const movieListPresenter = new _presenters_movies_list_presenter_js__WEBPACK_IMPORTED_MODULE_4__["default"](main);
movieListPresenter.init(movies);





/***/ }),

/***/ "./src/mock/comments-data.js":
/*!***********************************!*\
  !*** ./src/mock/comments-data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");




const COMMENTS_NUMBER = 5;
const Emotions = ["smile", "sleeping", "puke", "angry"];
const Authors =  ["John Doe", "Julia", "Alexey", "Maksim"];

const createCommentText = ()=>{
  let text = '';
  for (let i = 0; i < Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, _consts_js__WEBPACK_IMPORTED_MODULE_1__["PossibleDescriptions"].length - 1); i++) {
    text += _consts_js__WEBPACK_IMPORTED_MODULE_1__["PossibleDescriptions"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, _consts_js__WEBPACK_IMPORTED_MODULE_1__["PossibleDescriptions"].length - 1)];
  }
  return text;
};

const createComment = ()=>{
  const comment ={
    
    author: Authors[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, Authors.length - 1)],
    comment: createCommentText(),
    emotion:Emotions[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, Emotions.length - 1)],
    date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, 10),'day')
  };
return comment;
};

const createComments = (id) => {
  const comments = {};
  comments.comment = [];
  comments.id = id;
  for (let i = 0; i < Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(1, COMMENTS_NUMBER); i++) {
    comments.comment.push(createComment());
  }
  return comments;
};

/* harmony default export */ __webpack_exports__["default"] = (createComments);

/***/ }),

/***/ "./src/mock/movie-data.js":
/*!********************************!*\
  !*** ./src/mock/movie-data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _comments_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-data.js */ "./src/mock/comments-data.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");








const Genres = [
  'Drama', 'Comedy', 'Western', 'Fantesy', 'Musical', 'Cartoon'
];

const alternativeTitles = ['Hello', 'Computer', 'Lamp'];

const directors = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Writers = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Actors = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Countries = ['USA', 'Russia','France', 'China'];

// const createCommentsIds = (comments)=>{
//   const commentsIds = comments.map(({id})=> id);
//   return commentsIds;
// };

const createCountry = ()=>{
  const country = Countries[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, Countries.length - 1)];
  return country;
};

const createActors = () => {
  const actors = [];
  for (let i = 0; i <= Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(1, Actors.length - 1); i++) {
    actors.push(Actors[i]);
  }
  return actors;
};

const createWriters = () => {
  const writers = [];
  for (let i = 0; i <= Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, Writers.length - 1); i++) {
    writers.push(Writers[i]);
  }
  return writers;
};

const createAlternativeTitle = () => {
  const alternativeTitle = alternativeTitles[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, alternativeTitles.length - 1)];
  return alternativeTitle;
};

const createGenre = () => {
  const genresSet = new Set();
   for (let i = 1; i <=Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(2, Genres.length - 1); i++) {
    genresSet.add(Genres[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, Genres.length - 1)]);
   }
  const genres = Array.from(genresSet);
  return genres;
};

const createDescription = (text) => {
  let description = '';
  for (let i = 0; i < Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, _consts__WEBPACK_IMPORTED_MODULE_0__["PossibleDescriptions"].length - 1); i++) {
    description += _consts__WEBPACK_IMPORTED_MODULE_0__["PossibleDescriptions"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, _consts__WEBPACK_IMPORTED_MODULE_0__["PossibleDescriptions"].length - 1)];
  }
  return description;
};

const createPoster = (title) => {
  const poster = title.toLowerCase().split(' ').join('-');
  return poster;
};

const createRuntime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time < 60 ? time + 'm' : time % 60 + 'm';
  return hours > 0 ? hours + 'h ' + minutes : minutes;
};

const createMovieData = (id) => {
  const title = _consts__WEBPACK_IMPORTED_MODULE_0__["movieTitles"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, _consts__WEBPACK_IMPORTED_MODULE_0__["movieTitles"].length - 1)];

  const movieData = {
    id:id,
    comments:Object(_comments_data_js__WEBPACK_IMPORTED_MODULE_3__["default"])(id),
    title:title,
    age_rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, 18),
    director: directors[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, directors.length - 1)],
    alternative_title: createAlternativeTitle(),
    poster: `./images/posters/${createPoster(title)}.jpg`,
    genres: createGenre(),
    writers: createWriters(),
    actors: createActors(),
    description: createDescription(),
    total_rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createFloatRandomNumber"])(0, 10),
    isFavorite:false,
    already_watched: false,
    watchlist: false,
    release: {
      date: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().subtract(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(0, 10), 'year'),
      country:createCountry()
    },
    runtime: createRuntime(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["createRandomNumber"])(40, 200)),
    user_details: {
      watchlist: false,
      already_watched: true,
      
      isFavorite: false,
    }
  };
  return movieData;

};

/* harmony default export */ __webpack_exports__["default"] = (createMovieData);

/***/ }),

/***/ "./src/presenters/movie-presenter.js":
/*!*******************************************!*\
  !*** ./src/presenters/movie-presenter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviePresenter; });
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/popup */ "./src/view/popup.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");




const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP',
};
class MoviePresenter{
  constructor(container, changeMovieData, changeMode){
    this._filmCard = null;
    this._popup = null;
    this._changeMode = changeMode;
    this._mode = Mode.DEFAULT;
    this._body = document.querySelector('body');
    this._movieListContainer = container;
    this._openPopup = this._openPopup.bind(this);
    this._removePopup = this._removePopup.bind(this);
    this._onEscPressDownClosePopup = this._onEscPressDownClosePopup.bind(this);
    this._changeMovieData = changeMovieData;
    this._changeFavoriteStatus = this._changeFavoriteStatus.bind(this);
    this._changeWatchedStatus = this._changeWatchedStatus.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
  } ;

  init(movie){
    this._movie = movie;

    const prevMovieComponent = this._filmCard;
    const prevPopup = this._popup;
    this._filmCard = new _view_film_card__WEBPACK_IMPORTED_MODULE_0__["default"](movie);
    this._popup = new _view_popup__WEBPACK_IMPORTED_MODULE_1__["default"](movie);

    this._popup.setClickPopup(this._removePopup);
    
    this._popup.setAddToWatchListHandler(this._addToWatchList);
    this._popup.setAddToFavoriteHandler(this._changeFavoriteStatus);
    this._popup.setMarkAsWatchHandler(this._changeWatchedStatus);
    
   
    this._filmCard.setClickListener(this._openPopup);
    this._filmCard.setAddToFavoriteHandler(this._changeFavoriteStatus);
    this._filmCard.setMarkAsWatchHandler(this._changeWatchedStatus);
    this._filmCard.setAddToWatchListHandler(this._addToWatchList);
   
    if(prevMovieComponent ===null|| prevPopup === null){
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._movieListContainer, this._filmCard);
      return;
    }
 
    if(this._mode === Mode.DEFAULT){
      // console.log(prevMovieComponent);
      // console.log(this._filmCard);
      // console.log(movie);
     Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmCard, prevMovieComponent);
     Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevMovieComponent);
    }
    if(this._mode === Mode.POPUP){
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._popup, prevPopup);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmCard, prevMovieComponent);

     }
    
    //remove(prevPopup);
  };
  resetView(){
    
    if(this._mode !==Mode.DEFAULT){
   
      this._popup.getElement().remove();
    }
  };

  _changeFavoriteStatus() {
    this._changeMovieData(
      Object.assign({}, this._movie, { isFavorite: !this._movie.isFavorite }),
    );
   this._checkingStatus();
  }
  _changeWatchedStatus() {
    this._changeMovieData(
      Object.assign({}, this._movie, { already_watched : !this._movie.already_watched }),
    );
 this._checkingStatus();
  }
  _addToWatchList() {
    this._changeMovieData(
      Object.assign({}, this._movie, { watchlist: !this._movie.watchlist }),
    );
    this._checkingStatus();
    
  }
  _removePopup(evt){
    //evt.preventDefault();
   //remove(this._popup);
  this._popup.getElement().remove();
   //document.querySelector('body').removeChild(this._popup.getElement());
    document.querySelector('body').classList.remove('hide-overflow');
    document.removeEventListener('keydown', this._onEscPressDownClosePopup);
    this._mode = Mode.DEFAULT;
  };

  _onEscPressDownClosePopup(evt){
    if(evt.key === 'Escape' || evt.key === 'Esc'){
      evt.preventDefault();
      this._removePopup();
    }
  };

  destroy(){
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmCard);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._popup);
  }
  _openPopup(){
     this._body.appendChild(this._popup.getElement());
    this._body.classList.add('hide-overflow');
    document.addEventListener('keydown', this._onEscPressDownClosePopup);
    this._changeMode();
    this._mode = Mode.POPUP;
  };

_checkingStatus(){
  
  if(this._movie.watchlist){
    console.log(this._movie);
    console.log(this._movie.watchlist);
    this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
  }
  if(this._movie.already_watched){
    this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
  }
  if(this._movie.isFavorite){
    this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
  }
}
}

/***/ }),

/***/ "./src/presenters/movies-list-presenter.js":
/*!*************************************************!*\
  !*** ./src/presenters/movies-list-presenter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieListPresenter; });
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_film_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-section */ "./src/view/film-section.js");
/* harmony import */ var _view_films_list_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-list-container */ "./src/view/films-list-container.js");
/* harmony import */ var _view_films_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list */ "./src/view/films-list.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_empty_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/empty-list */ "./src/view/empty-list.js");
/* harmony import */ var _utils_most_films_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/most-films-list */ "./src/utils/most-films-list.js");
/* harmony import */ var _view_button_show_more_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/button-show-more.js */ "./src/view/button-show-more.js");
/* harmony import */ var _movie_presenter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-presenter */ "./src/presenters/movie-presenter.js");
/* harmony import */ var _view_films_list_top_rated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/films-list-top-rated */ "./src/view/films-list-top-rated.js");
/* harmony import */ var _view_films_list_most_commented__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view/films-list-most-commented */ "./src/view/films-list-most-commented.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");













const FILMS_STEP = 5;
const MOST_MOVIES = 2;
class MovieListPresenter {
  constructor(mainContainer){
    this._moviePresenter = {};
    this._sortType = _utils_const__WEBPACK_IMPORTED_MODULE_12__["SortType"].DEFAULT;
    this._renderedFilms = FILMS_STEP;
    this._mainContainer = mainContainer;
    this._sortComponent = new _view_sort__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._filmsSectionComponent = new _view_film_section__WEBPACK_IMPORTED_MODULE_1__["default"](); 
    this._emptyListComponent = new _view_empty_list__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._filmsListComponent = new _view_films_list__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._filmsListContainerComponent = new _view_films_list_container__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._showMoreButtonComponent = null;
    this._topRatedFilmsList = new _view_films_list_top_rated__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this._topRatedFilmsListContainer = new _view_films_list_container__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._mostCommentedFilmsList = new _view_films_list_most_commented__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this._mostommentedFilmsListContainer = new _view_films_list_container__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._renderMoreFilmsCards = this._renderMoreFilmsCards.bind(this);
    this._updateFilmCardData = this._updateFilmCardData.bind(this);
    this._changeMode = this._changeMode.bind(this);
    this._sortTypeHandler = this._sortTypeHandler.bind(this);
   
  }
  init(movies){
    this._movies = movies.slice();
    this._updatedMovies = movies.slice();
    this._renderSortComponent();
    this._renderFilmsSection();
    this._renderFilmsCards();
   this._renderMostMovies();
  }

  _changeMode(){
    Object.values(this._moviePresenter).forEach((presenter)=>presenter.resetView());
  }

  _sortTypeHandler(sortType){
    if(this._sortType === sortType){
      return;
    }
    this._sortMovies(sortType);
    this._clearMovieList();
    this._renderFilmsCards();
  }
  _sortMovies(sortType){
    switch(sortType){
      case _utils_const__WEBPACK_IMPORTED_MODULE_12__["SortType"].DEFAULT:
        this._movies = this._updatedMovies.slice();
        break;
      case _utils_const__WEBPACK_IMPORTED_MODULE_12__["SortType"].BY_DATE:
        this._movies.sort(_utils_common__WEBPACK_IMPORTED_MODULE_11__["sortDate"]);
        break;
      case _utils_const__WEBPACK_IMPORTED_MODULE_12__["SortType"].BY_RATING:
        this._movies.sort(_utils_common__WEBPACK_IMPORTED_MODULE_11__["sortRating"]);
        break;
      default:
        "there is no other type"
    }
    this._sortType = sortType;
  }

  _renderSortComponent(){
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._mainContainer, this._sortComponent);
    this._sortComponent.setHandleSortType(this._sortTypeHandler);
  };

  _updateFilmCardData(updatedMovie){
   // console.log(this._movies.find((prevMovie)=>prevMovie.id===updatedMovie.id))
    this._movies = Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["updateItem"])(this._movies, updatedMovie);
    this._updatedMovies = Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["updateItem"])(this._updatedMovies, updatedMovie);
//console.log(updatedMovie);
    this._moviePresenter[updatedMovie.id].init(updatedMovie);
  }

  _renderFilmCard(movie){
    const moviePresenter = new _movie_presenter__WEBPACK_IMPORTED_MODULE_8__["default"](this._filmsListContainerComponent, this._updateFilmCardData,this._changeMode);
    moviePresenter.init(movie);
    this._moviePresenter[movie.id] = moviePresenter;
  }

  _renderFilmsCards(){
    for (let i = 0; i < FILMS_STEP; i++) {
      this._renderFilmCard(this._movies[i]);
    };
    if (this._movies.length > FILMS_STEP) {
      this._showMoreButtonComponent = new _view_button_show_more_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
      //console.log(this._showMoreButtonComponent);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsListContainerComponent, this._showMoreButtonComponent);
      this._showMoreButtonComponent.setClickListener(this._renderMoreFilmsCards);
     
    }
   
  }

  _renderMoreFilmsCards(){
    this._movies.slice(this._renderedFilms, this._renderedFilms + FILMS_STEP).forEach((film) => {
      this._renderFilmCard(film);
    });

    this._renderedFilms += FILMS_STEP;
    if (this._renderedFilms >= this._movies.length ) {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._showMoreButtonComponent);    
    }
  }

  _renderFilmsSection(){
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._mainContainer, this._filmsSectionComponent);
    if(this._movies.length===0){
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsSectionComponent, this._emptyListComponent);
    }else{
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsSectionComponent, this._filmsListComponent);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsSectionComponent, this._filmsListContainerComponent);
 
    }
  };

  _renderMostMovies(){
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsSectionComponent, this._topRatedFilmsList);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._topRatedFilmsList, this._topRatedFilmsListContainer);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmsSectionComponent, this._mostCommentedFilmsList);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["render"])(this._mostCommentedFilmsList, this._mostommentedFilmsListContainer);

    for(let i = 0; i < MOST_MOVIES; i++){
      const topRatedMovie = new _movie_presenter__WEBPACK_IMPORTED_MODULE_8__["default"](this._topRatedFilmsListContainer);
      topRatedMovie.init(Object(_utils_most_films_list__WEBPACK_IMPORTED_MODULE_6__["findMostFilms"])(this._movies, 'TopRatedFilmsList')[i]);
      const mostCommentedMovie = new _movie_presenter__WEBPACK_IMPORTED_MODULE_8__["default"](this._mostommentedFilmsListContainer);
      mostCommentedMovie.init(Object(_utils_most_films_list__WEBPACK_IMPORTED_MODULE_6__["findMostFilms"])(this._movies, 'MostCommentedFilmsList')[i]);
    }
  }
  _clearMovieList() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.destroy());
      this._moviePresenter = {};
    this._renderedFilms = FILMS_STEP;
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._showMoreButtonComponent);
  }
}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: createRandomNumber, createFloatRandomNumber, isEsc, updateItem, sortDate, sortRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRandomNumber", function() { return createRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFloatRandomNumber", function() { return createFloatRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEsc", function() { return isEsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDate", function() { return sortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRating", function() { return sortRating; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const createRandomNumber = (min = 0, max = 10) => {
  const rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return rundomNumber;
};

const createFloatRandomNumber = (min, max)=>{
  return (Math.random() * (max - min) + min).toFixed(2);
 
};

const isEsc = (evt)=>{
  return evt.key === ('Esc'||false);
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];

};

const sortDate = (dateA, dateB)=>{
return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateA.release.date).diff(dateB.release.date);
};

const sortRating = (ratingA, ratingB)=>{
  if(ratingA.total_rating === ratingB.total_rating){
    return 0;
  }
  if(ratingA.total_rating > ratingB.total_rating){
    return 1;
  }
  if(ratingA.total_rating < ratingB.total_rating){
    return -1;
  }
}



/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const SortType= {
DEFAULT:'DEFAULT',
BY_DATE:'BY_DATE',
BY_RATING:'BY_RATING'
}

/***/ }),

/***/ "./src/utils/most-films-list.js":
/*!**************************************!*\
  !*** ./src/utils/most-films-list.js ***!
  \**************************************/
/*! exports provided: findMostFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMostFilms", function() { return findMostFilms; });
const findMostFilms = (movies, mostList)=>{
  let mostMovies = [];
  if(mostList === 'TopRatedFilmsList'){
    mostMovies = movies.slice().sort(function (aComparedData, bComparedData) {
      if (aComparedData.total_rating< bComparedData.total_rating) {
        return 1;
      }
      if (aComparedData.total_rating> bComparedData.total_rating) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }else{
    mostMovies = movies.slice().sort(function (aComparedData, bComparedData) {
      if (aComparedData.comments.length< bComparedData.comments.length) {
        return 1;
      }
      if (aComparedData.comments.length> bComparedData.comments.length) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }

  const mostMoviesList = mostMovies.slice(0,2);
  return mostMoviesList;
}



/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: createElement, RenderPosition, render, isEsc, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/utils/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEsc", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["isEsc"]; });





const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const render = (container, element, place = RenderPosition.BEFOREEND) => {
  if (element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]){
    element = element.getElement();
  }
  if(container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]){
    container = container.getElement();
  }
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


const createElement = (element)=>{
  const newElement = document.createElement('div');
  newElement.innerHTML = element;
  return newElement.firstElementChild;
};
const replace = (newComponent, prevComponent)=>{
  if(newComponent instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]){
    newComponent = newComponent.getElement();
  }
  if(prevComponent instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]){
    prevComponent = prevComponent.getElement();
  }
  const prevComponentParent = prevComponent.parentElement;
  if (prevComponentParent === null || newComponent === null || prevComponent === null) {
    throw new Error('Can\'t replace unexisting elements');
  }
  prevComponentParent.replaceChild(newComponent, prevComponent);
}

const remove = (component)=>{
  if(!(component instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])){
    throw new Error('can remove only component')
  }
  component.getElement().remove();
  component.removeElement();
  }


/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class AbstractView{
  constructor(){
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate Abstract class, only concrete one.');
    }
    this._element = null;
    this._callback = {};
  }
  getTemplate(){
    throw new Error('you can\'t initiate Abstract.getTemplate');
  }
  getElement(){
    if(!this._element){
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate())
    }
    return this._element;
  }
  removeElement(){
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/button-show-more.js":
/*!**************************************!*\
  !*** ./src/view/button-show-more.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonShowMore; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


const createButtonShowMore = ()=>{
  return `
    <button class="films-list__show-more">Show more</button>
  `;
};

class ButtonShowMore extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
    this._onClickButtonHandler = this._onClickButtonHandler.bind(this);
  }
  getTemplate(){
    return createButtonShowMore();
  }
  _onClickButtonHandler(){
    this._callback.onClickButtonHandler();
  }
  setClickListener(callback){
    this._callback.onClickButtonHandler = callback;
    this.getElement().addEventListener('click', this._onClickButtonHandler);
  }
};

/***/ }),

/***/ "./src/view/empty-list.js":
/*!********************************!*\
  !*** ./src/view/empty-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmptyList; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createEmptyList = ()=>{
return `
  <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>

      <!--
        Значение отображаемого текста зависит от выбранного фильтра:
          * All movies – 'There are no movies in our database'
          * Watchlist — 'There are no movies to watch now';
          * History — 'There are no watched movies now';
          * Favorites — 'There are no favorite movies now'.
      -->
  </section>
  `;
};

class EmptyList extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate(){
    return createEmptyList();
  }
}

/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");



const createFilmCard = (movie)=>{
  const {title, total_rating, poster, description, comments,release, runtime, genres} = movie;
  const commentsNumber = comments.length;
  const releaseYear = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(release.date).format('YYYY');
  const genre = genres[0];
  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${total_rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseYear}</span>
        <span class="film-card__duration">${runtime}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${commentsNumber} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
  `;
};

class FilmCard extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"]{
  constructor(film){
    super();
    this._film = film;
    
    this._openPopup = this._openPopup.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
    this._markAsWatch = this._markAsWatch.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
    //this._checkingStatus();
  };
  getTemplate(){
    return createFilmCard(this._film);
  };
  _openPopup(){
    this._callback.openPopup();
  };
  _addToWatchList(){
    console.log('1111111111111111111111');
    this._callback.addToWatchList();  
   // this._checkingStatus();
  };
  _markAsWatch(){
   
    this._callback.markAsWatch();   
   // this._checkingStatus();
  };
  _addToFavorite(){
   
   // this._checkingStatus();
    this._callback.addToFavorite();
    
  };
  setAddToWatchListHandler(callback){
    this._callback.addToWatchList = callback;
    this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click',this._addToWatchList);
  };
  setMarkAsWatchHandler(callback){
    this._callback.markAsWatch = callback;
    this.getElement().querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click',this._markAsWatch);
    
  };
  setAddToFavoriteHandler(callback){
    this._callback.addToFavorite = callback;
    this.getElement().querySelector('.film-card__controls-item--favorite').addEventListener('click',this._addToFavorite);
  };

  setClickListener(callback){
    this._callback.openPopup = callback;
    this.getElement().querySelector('.film-card__title').addEventListener('click',this._openPopup);
    this.getElement().querySelector('.film-card__comments').addEventListener('click',this._openPopup);
    this.getElement().querySelector('.film-card__poster').addEventListener('click',this._openPopup);
  };
  // _checkingStatus(){
  //   console.log('hello');
  //   if(this._film.watchlist){
  //     this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
  //   }
  //   if(this._film.already_watched){
  //     this.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
  //   }
  //   if(this._film.isFavorite){
  //     this.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
  //   }
  // }
}

/***/ }),

/***/ "./src/view/film-section.js":
/*!**********************************!*\
  !*** ./src/view/film-section.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmSection; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");

const createFilmSection= ()=>{
  return `
  <section class="films">
 
    </section>
  `;
}

class FilmSection extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate(){
    return createFilmSection();
  }
}

/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListContainer; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");

const createFilmsListContainer = ()=>{
  return `
    <div class="films-list__container">

  </div>
   `;
}

class FilmListContainer extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate(){
    return createFilmsListContainer();
  }
}

/***/ }),

/***/ "./src/view/films-list-most-commented.js":
/*!***********************************************!*\
  !*** ./src/view/films-list-most-commented.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostCommentedFilmsList; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createMostCommentedFilmsList = ()=>{
   return `
    <section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    
    </section>
  `;
};

class MostCommentedFilmsList extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{

  getTemplate(){
    return createMostCommentedFilmsList(this._mostCommentedList);
  }
}

/***/ }),

/***/ "./src/view/films-list-top-rated.js":
/*!******************************************!*\
  !*** ./src/view/films-list-top-rated.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopRatedFilmsList; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createTopRatedFilmsList = ()=>{
  return `
  <section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  </section>
  `;
};

class TopRatedFilmsList extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate(){
    return createTopRatedFilmsList(this._topRatedList);
  }
}

/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");

const createFilmsList = ()=>{
  return `
    <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  
    </section>
  `;
}

class FilmList extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate(){
    return createFilmsList();
  }
}

/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");

const createMenu = (favoriteMovie)=>{
  return `
  <nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteMovie}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `;
};

class Menu extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
 
  getTemplate(){
  return createMenu();
  }

}

/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _smart_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-view */ "./src/view/smart-view.js");



const createGenresTemplate = (genres)=>{
  //console.log(genres.length);
  return genres.length>1?`
    <td class="film-details__term">Genres</td>
      <td class="film-details__cell">
        <span class="film-details__genre">${genres.join(", ")}</span>
      </td>`:`
    <td class="film-details__term">Genre</td>
      <td class="film-details__cell">
        <span class="film-details__genre">${genres[0]}</span>
      </td>`
   
};
const createCommentsList = (comments)=>{
 // console.log(comments.comment[0].emotion,'comment');
 return comments.comment.map(({emotion, author, comment, date})=>{
    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY-MM-DD HH:mm')}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  }).join('');
  
}
const createPopup= (film)=>{
  const {title, age_rating, director, alternative_title, poster, genres, writers, actors, description, total_rating, release, runtime, comments} = film;

  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${poster}" alt="">
              <p class="film-details__age">${age_rating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${alternative_title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${total_rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${release.date.format('DD MMMM YYYY')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${runtime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${release.country}</td>
                </tr>
                <tr class="film-details__row">
                  ${createGenresTemplate(genres)}
                </tr>
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
            <button type="button" class="film-details__control-button film-details__control-button--watched" id="watched" name="watched">Already watched</button>
            <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count"> ${comments.comment.length}</span></h3>

            <ul class="film-details__comments-list">
             ${createCommentsList(comments)}
              
            </ul>

            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>
  `;
};

class Popup extends _smart_view__WEBPACK_IMPORTED_MODULE_2__["default"]{
  constructor(filmCard){
    super();
    this._filmCard = Popup.parsePointToData(filmCard);
    this._openPopup = this._openPopup.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
    this._markAsWatch = this._markAsWatch.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
    this._emojiHandler = this._emojiHandler.bind(this);
    this._setInnerHandlers();
    //this._checkingStatus();
  }
  static parsePointToData(filmCard){
    return Object.assign({}, filmCard);
  }
  static parseDataToPoint(data){
    return Object.assign({},data);
  }
  _openPopup(){
    this._callback.openPopup();
  }
  restoreHandlers(){
    this._setInnerHandlers();
    this._openPopup();
    this.setAddToWatchListHandler(this._callback.addToWatchList);
    this.setMarkAsWatchHandler(this._callback.markAsWatch);
    this.setAddToFavoriteHandler(this._callback.addToFavorite);
  }
  setClickPopup(callback){
    this._callback.openPopup = callback;
    this.getElement().querySelector('.film-details__close-btn').addEventListener('click', this._openPopup);
  }
  _setInnerHandlers(){
   // console.log(this._filmCard,'before');
    this.getElement().querySelectorAll('.film-details__emoji-item').forEach((inputEmoji)=>{
      inputEmoji.addEventListener('change',this._emojiHandler);
    });
  }
  _emojiHandler(evt){
    evt.preventDefault();
    console.log(this._filmCard,'fffffffffffffffffffffffffffffffff');
   // console.log(evt.target.value,'target');
    this._filmCard.comments.comment.push({emotion:evt.target.value, author:evt.target.value});
  //   this.getElement().querySelector('.film-details__add-emoji-label').insertAdjacentHTML('afterbegin',`<span class="film-details__comment-emoji">
  //   <img src="./images/emoji/${evt.target.value}.png" width="55" height="55" alt="emoji-${evt.target.value}">
  // </span>`);
   // console.log(this._filmCard,'after');
    this.updateData(this._filmCard.comments.comment);
  }

  getTemplate(){
 
    return createPopup(this._filmCard);
  }
  _addToWatchList(evt){
    //evt.preventDefault();
    this._callback.addToWatchList();  
  };
  _markAsWatch(evt){
    //evt.preventDefault();
    this._callback.markAsWatch();   
  };
  _addToFavorite(evt){
    //evt.preventDefault();
    this._callback.addToFavorite();
  };
  setAddToWatchListHandler(callback){
    this._callback.addToWatchList = callback;
    this.getElement().querySelector('.film-details__control-button--watchlist').addEventListener('click',this._addToWatchList);
  };
  setMarkAsWatchHandler(callback){
    this._callback.markAsWatch = callback;
    this.getElement().querySelector('.film-details__control-button--watched').addEventListener('click',this._markAsWatch);
  };
  setAddToFavoriteHandler(callback){
    this._callback.addToFavorite = callback;
    this.getElement().querySelector('.film-details__control-button--favorite').addEventListener('click',this._addToFavorite);
  };
  _checkingStatus(){
    console.log('hello');
    if(this._filmCard.watchlist){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
    }
    if(this._filmCard.already_watched){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
    }
    if(this._filmCard.isFavorite){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
    }
  }
}

/***/ }),

/***/ "./src/view/smart-view.js":
/*!********************************!*\
  !*** ./src/view/smart-view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


class SmartView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
    this._filmCard = {};
  }
  restoreHandlers(){
    throw new Error('can\'t implement method');
  }
  updateData(updated,flag){
    // if(!updated){
    //   return;
    // }
 
    this._filmCard = Object.assign(
      {},
      this._filmCard,
      updated
      )
      // if(flag){
      //   return;
      // }
    this.updateElement();
  }
  updateElement(){
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();

    parent.replaceChild(newElement,oldElement);
    this.restoreHandlers();
  }
} 

/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");


const createSortElement = ()=>{
  return `
    <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active" data-sort-type='${_utils_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}'>Sort by default</a></li>
    <li><a href="#" class="sort__button" data-sort-type='${_utils_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].BY_DATE}'>Sort by date</a></li>
    <li><a href="#" class="sort__button" data-sort-type='${_utils_const__WEBPACK_IMPORTED_MODULE_1__["SortType"].BY_RATING}'>Sort by rating</a></li>
    </ul>
  `;
};

class SortView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }
  getTemplate(){
    return createSortElement();
  }
  _sortTypeChangeHandler(evt){
    if(evt.target.tagName !=='A'){
      return;
    }
    console.log(evt.target.dataset.sortType);
    this._callback.handleSortType(evt.target.dataset.sortType);
  }
  setHandleSortType(callback){
    this._callback.handleSortType = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }
}

/***/ }),

/***/ "./src/view/user.js":
/*!**************************!*\
  !*** ./src/view/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");

const createUser = ()=>{
  return `
  <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `;
};

class User extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]{
   getTemplate(){
    return createUser();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map