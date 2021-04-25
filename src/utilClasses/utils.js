/* eslint-disable*/




export default class utils {
  static isObjectLike(obj) {
    return (typeof obj === "object" && obj !== null);
  }
  static isFunction(varia) {
    return utils.toType(varia) === "function";
  }
  static isEmail(email) {
    var re = /^(?:[a-zA-Z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (utils.isStringLike(email) && re.test(email)) {
      return true;
    }
    return false;
  }

static isPhone(phone){
  var re = /^(\+|)(234|0)(7|8|9)(0|1)\d{8}$/;
    if(utils.isStringLike(phone)  && re.test(phone)){
      return true
    } 

    return false 
}

static isValidlong(long){
  var  re = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
    var fmt = (Math.round(long * 100) / 100).toFixed(3)
      if(re.test(fmt)){
        return true
      }
      return false
}

static isValidDateFormat(date){
    var  re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(re.test(date)){
      return true
    }
    return false
}

static isValidlat(lat){
  var  re = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
    var fmt = (Math.round(lat * 100) / 100).toFixed(3)
      if(re.test(fmt)){
        return true
      }
      return false
}

  static hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }
  // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
  static stripAndCollapse(value) {
    var tokens = value.match(utils.rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  static isStringNull(input) {
    return input == "null" || input == "NULL";
  }
  //Turn element classes to arrays
  static classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (utils.isStringLike(value)) {
      return value.match(utils.rnothtmlwhite) || [];
    }
    return [];
  }
  /**
   * @function
   * This searches an array containing objects, these objects have keys that contain
   * String values, and we want to filter this array  and return those that
   * THe object keys contains string that match the search string
   * @params list: Array; The array to be searched
   * @params value:string; The string used to search the array of objects
   * @params key:string; The object key that is to be searched against
   */
  static searchAnArray(list, value, key) {
    return list.filter(function(item) {
      if (item[key]) {
        return item[key].toLowerCase().indexOf(value.toLowerCase()) > -1;
      }
      return false;
    });
  }


  /**
   * @function
   * Searches an array containing objects, these objects have keys that uniquely identify
   * The object. We use this key to match the input value.
   * If a match is found, return the object
   * @params list: Array; The array to be searched
   * @params value:string; The string used to search the array of objects
   * @params key:string; The object key that is to be searched against
   * Return: Object|undefined
   */
  static searchAnArrayReturnObj(list, value, key) {

    if (!utils.isArrayLike(list)) return undefined;

    return list.find((obj) => {
      return obj[key] == value;
    })
    
  }
  /**
   * @function
   * This searches a string and returns a true of the search key is found,
   * or a false of otherwise
   * @params str: string; The string to be searched
   * @params search:string; The word to be searched against the sentence
   */
  static searchString(str, search) {
    if (utils.isStringLike(str) && utils.isStringLike(search)) {
      return str.toLowerCase().search(search.toLowerCase()) > -1;
    }
    return false;
  }
  static getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  //I borrowed this from Jquery
  static removeClass(element, value) {
    var classes, cur, curValue, clazz, j, finalValue, i = 0;
    //Turn the class I want to remove to array
    classes = utils.classesToArray(value);
    //If any class is returned
    if (classes.length) {
      //Get the classes this element has
      curValue = utils.getClass(element);
      // This expression is here for better compressibility
      //I also follow this documentation https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      //To ensire that its an Element Node been processed
      // Then I strip off all excessive spaces between classes
      cur = element.nodeType === 1 && (" " + utils.stripAndCollapse(curValue) + " ");
      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          //The real removing of the class happens here
          // Remove *all* instances, since a single class might appear multiple times
          while (cur.indexOf(" " + clazz + " ") > -1) {
            cur = cur.replace(" " + clazz + " ", " ");
          }
        }
        // Only assign if different to avoid unneeded rendering.
        finalValue = utils.stripAndCollapse(cur);
        if (curValue !== finalValue) {
          element.setAttribute("class", finalValue);
        }
      }
    }
    return element;
  }
  //I borrowed this from Jquery
  static addClass(element, value) {
    var classes, cur, curValue, clazz, j, finalValue, i = 0;
    //Turn the class I want to add to array
    classes = utils.classesToArray(value);
    //If any class is returned
    if (classes.length) {
      //Get the classes this element has
      curValue = utils.getClass(element);
      // This expression is here for better compressibility
      //I also follow this documentation https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      //To ensire that its an Element Node been processed
      // Then I strip off all excessive spaces between classes
      cur = element.nodeType === 1 && (" " + utils.stripAndCollapse(curValue) + " ");
      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          //Here is where the main addition of the class to the
          //Former class pool happens
          if (cur.indexOf(" " + clazz + " ") < 0) {
            cur += clazz + " ";
          }
        }
        // Only assign if different to avoid unneeded rendering.
        finalValue = utils.stripAndCollapse(cur);
        if (curValue !== finalValue) {
          element.setAttribute("class", finalValue);
        }
      }
    }
    return element;
  }
  /**
   * Determines if an element has a child element that has the class or ID selector
   * Passed into the function
   */
  static parentMatchSelector(target, selector) {
    var NodelistArray = [].slice.call(document.querySelectorAll(selector));
    return [...NodelistArray].some(el => el !== target && el.contains(target));
  }
  //Copied from Jquery, then made some edits
  static toType(obj) {
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    if (obj == null) {
      return obj + "";
    }
    //isNumeric toType
    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" ?
      class2type[toString.call(obj)] || "object" :
      typeof obj;
  }

  static unwindObject(obj, field){
    //The fields passed in might be "." delimmeted, so i 
    //Use a loop to enter the object and get out the final needed value
    //e,g {player:{me:{she:"woman"}}}
    //To get the value woman, the field should be 
    //"player.me.she"
    var fields = field.split('.');
    var field_length = fields.length;
    if (field_length <= 1) {
        return obj[field];
    }
    var recuObje = Object.assign({}, obj);
    var rolled_time = 0;
    while (rolled_time < field_length) {
        recuObje = recuObje[fields[rolled_time]];
        rolled_time++;
    }
    /*
    to understand this while loop
    assume a length of array is called things with three elements
    things 3 (0,1,2)
    n = 0
    i) things[0]  n=1
    ii) things[1]  n=2
    ii) things[2]  n=3
    */
    return recuObje;
}

  //Copied from Jquery
  static isNumeric(obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = utils.toType(obj);
    return (type === "number" || type === "string") &&
      // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(obj - parseFloat(obj));
  };
  
  static inArray(arr, elem) {
    if (arr == null || !utils.isArrayLike(arr))
      throw "{arr} is not an Array";
    if (arr.indexOf(elem) === -1)
      return false;
    return true;
  }
  static immutableSplice(arr, start, deleteCount, ...items) {
    return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
  }
  static generateCSV(heads, item) {
    //Heads is the array of object containing the title of the table formated Data
    /**
          *-------------------Its something like this ------------*
            [
                {key: 'Site Name'},
                {key: 'Tank Name'},
                {key: 'Delivery'},
                {key: 'Opening Stock'},
                {key: 'Closing Stock'},
                
                
                {key: 'Date'}
            ]
    
        */
    // item is the array of objects representing the body of the table
    /*
          *--------------- Its represented Thus ----------*
            [
    
              {
                'Site Name': "Memei ",
                'Tank Name' : "Hello ",
                'Delivery' :: 1234
              }
    
            ]
        */
    let header = '',
      headerArray = [],
      bodyArray = [];
    var csv = '';
    heads.forEach(function(row) {
      headerArray.push(row.key);
    });
    header = headerArray.join(',') + '\n';
    item.forEach(function(row) {
      let rowArray = [];
      headerArray.forEach(function(HeadRow) {
        rowArray.push(row[HeadRow]);
      });
      bodyArray.push(rowArray);
    });
    bodyArray.forEach(function(eachItem) {
      header += eachItem.join(',');
      header += "\n";
    });
    csv = 'data:text/csv;charset=utf-8,' + encodeURI(header);
    return csv;
  }
  static TurnObjectToArray(CollectObject) {
    var FinalArray = [];
    Object.keys(CollectObject).forEach(key => {
      let value = CollectObject[key];
      FinalArray = [...FinalArray, ...value];
      //use key and value here
    });
    return FinalArray;
  }
  static givemedate(time) {
    var now;
    if (time) {
      now = new Date(time);
    } else {
      now = new Date();
    }
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }
  static getStationIDS(array) {
    var sitearray = [];
    array.forEach(function(element) {
      sitearray.push(element.Site_id);
    });
    return sitearray;
  }
  static getTankgroupIDS(array) {
    var tgarray = [];
    array.forEach(function(element) {
      tgarray.push(element.Group_id);
    });
    return tgarray;
  }
  //Got this from https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places/22977058#answer-15762794
  static RoundUp(n, digits) {
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(digits);
    if (negative) {
      n = (n * -1).toFixed(digits);
    }
    return n;
  }
  static SlashDate(dateString, dateOnly = false) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if (dateOnly) {
      return year + "-" + month + "-" + day;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }
  static GetISODate(days) {
    var today = new Date();
    if (days) {
      today.setDate(today.getDate() + days);
      return today.toISOString();
    }
    return new Date().toISOString();
  }

  //Note,date2 should be bigger date1 instance
  static DifferencebtwDates(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);

    return { days, hours, seconds, minutes };
  }

  static isArrayEmpty(array) {
    if (!array || array === void(0) || array.length == 0) {
      return true;
    }
    return false;
  }
  static RandomString() {
    var randNo = Math.floor(Math.random() * 100) + 2 + "" + new Date().getTime() + Math.floor(Math.random() * 100) + 2 + (Math.random().toString(36).replace(/[^a-zA-Z]+/g, '').substr(0, 5));
    return randNo;
  }
  static hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  static onSpinner(element) {
    if (!element)
      return;
    var x = document.querySelectorAll(element);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("cover-roll");
    }
    return true;
  }
  static printRules(styleSheet) {
    const rootEl = document.getElementById("fool");
    const preEl = rootEl.appendChild(document.createElement("pre"));
    preEl.innerHTML = JSON.stringify([...styleSheet.cssRules].map(rule => rule.cssText), null, 2);
  }
  static chunkString(str, len) {
    const size = Math.ceil(str.length / len);
    const r = Array(size);
    let offset = 0;
    for (let i = 0; i < size; i++) {
      r[i] = str.substr(offset, len);
      offset += len;
    }
    return r;
  }
  static randomNumber() {
    let r = Math.random().toString(36).substring(8);
    return Date.now() + r;
  }
  static randomStringsOnly(length = 11) {
    var text = "";
    var possible = "stuvwxyzRSTUABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzRSTUVWXYZabcdefghijk";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  static Setcss(dom, selector = null, styleString = null) {
    //The selector can be null when its not a styling related to a div or class: Like keyframe
    const sheet = dom.sheet;
    const rule = selector ? `${selector} { ${styleString} }` : `${styleString}`;
    const index = sheet.cssRules.length;
    sheet.insertRule(rule, index);
    return dom;
  }
  static css(selector, styleString) {
    const rule = `${selector} { ${styleString} }`;
    const index = sheet.cssRules.length;
    sheet.insertRule(rule, index);
  }
  static offSpinner(element) {
    if (!element)
      return;
    var x = document.querySelectorAll(element);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("cover-roll");
    }
    return true;
  }
  static stringifyRecordValues(row) {
    /* istanbul ignore else */
    if (row instanceof Object) {
      return (0, utils.stringifyObjectValues)(row);
    } else {
      /* istanbul ignore next */
      return '';
    }
  }
  /**
   * Function to sort alphabetically an array of objects by some specific key.
   *
   * @param {array} array: Array To be sorted
   * @param {String} property:  Key name of the object to be used in sorting.
   */
  static alphaSort(array, property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    array.sort((a, b) => {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    });
    return array;
  }
  /**
     * Recursively stringifies the values of an object, space separated, in an
     * SSR safe deterministic way (keys are storted before stringification)
    
     *   ex:
     *     { b: 3, c: { z: 'zzz', d: null, e: 2 }, d: [10, 12, 11], a: 'one' }
     *   becomes
     *     'one 3 2 zzz 10 12 11'
    
     * Primatives (numbers/strings) are returned as-is
     * Null and undefined values are filtered out
     * Dates are converted to their native string format
  */
  static stringifyObjectValues(val) {
    if (typeof val === 'undefined' || val === null) {
      /* istanbul ignore next */
      return '';
    }
    if (val instanceof Object && !(val instanceof Date)) {
      // Arrays are also object, and keys just returns the array indexes
      // Date objects we convert to strings
      return (0, Object.keys)(val).sort()
        /* sort to prevent SSR issues on pre-rendered sorted tables */
        .filter(function(v) {
          return v !== undefined && v !== null;
        })
        /* ignore undefined/null values */
        .map(function(k) {
          return utils.stringifyObjectValues(val[k]);
        }).join(' ');
    }
    return String(val);
  }
  static SerachArrayofObjs(array, key, value) {
    var found = array.find(function(element) {
      return element[key] == value;
    });
    if (found) {
      return found;
    } else {
      return false;
    }
  }
  static getObjectFromArray(array, key, value) {
    var returned = {};
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] == value)
        return array[i];
    }
    return returned;
  }
  static RandomItemFromArray(array) {
    var arrayCopy = array;
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[j];
      arrayCopy[j] = temp;
    }
    return arrayCopy[0];
  }
  static isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }
  static toogleFullscreen(htmlelement) {
    // if (!utils.isFullscreenEnabled()) {
    //   Notify.error("Full Screen is not enabled on your browser");
    //   throw "Full Screen is not enabled on your browser";
   is // }
    if (utils.isElementOnFullScreen()) {
      utils.exitFullScreen(htmlelement);
    } else {
      utils.EnterFullScreen(htmlelement);
    }
  }
  static isArrayLike(string) {
    return (string.constructor == Array || string instanceof Array);
  }
  static isStringLike(str) {
    if (str && typeof str.valueOf() === "string") {    
        return true;
      }
    return false;
    // console.log(false)

  }
  static isEmptyorNullString(string){
    let re = new RegExp('[a-zA-Z0-9_]', 'g');
    return (!re.test(string)) || utils.isStringNull(string);
  }

  static isValidString(string){
    return utils.isStringLike(string) && !utils.isEmptyorNullString(string)  ;
    
  }
  //Make an element enter into full screen mode
  static EnterFullScreen(htmlelement) {
    let requestMethod = // for newer Webkit and Firefox browsers
      htmlelement.requestFullscreen ||
      htmlelement.mozRequestFullScreen ||
      htmlelement.msRequestFullScreen ||
      htmlelement.webkitRequestFullscreen || //small letter screen
      htmlelement.msRequestFullscreen;
    if (typeof requestMethod != "undefined" && requestMethod) {
      requestMethod.call(htmlelement);
    } else if (typeof window.ActiveXObject != "undefined") {
      // for old Internet Explorer
      // Trigger the f11 key automatically
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript != null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
  static exitFullScreen(htmlelement) {
    var requestMethod = htmlelement.cancelFullScreen ||
      htmlelement.exitFullscreen ||
      htmlelement.webkitCancelFullScreen ||
      htmlelement.mozCancelFullScreen ||
      htmlelement.webkitExitFullscreen ||
      htmlelement.msExitFullscreen;
    if (requestMethod) { // cancel full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
  static isElementOnFullScreen() {
    // fullscreenElement webkitFullscreenElement   mozFullScreenElement   msFullscreenElement
    let isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement !== null);
    return isInFullScreen;
  }
  static isFullscreenEnabled() {
    let isenabled = Document.fullscreenEnabled ||
      Document.webkitFullscreenEnabled ||
      Document.mozFullScreenEnabled ||
      Document.msFullscreenEnabled;
    return isenabled;
  }
  static pmsColor() {
    return "#1d8a99";
  }
  static agoColor() {
    return "#c5b451";
  }
  static dpkColor() {
    return "#360568";
  }
  static getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  static isEmptyObject(obj) {
    if(!obj) return true;
    /* eslint-disable no-unused-vars */
    // See https://github.com/eslint/eslint/issues/6125
    var name;
    for (name in obj) {
      return false;
    }
    return true;
  }
  static ShiftFirst(arr) {
    for (let i in arr) {
      // return the first element
      return arr[i];
    }
    return;
  }
  static DaysBetween(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);
    return { days, hours, seconds, minutes };
  }
  static pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }
  // 26 Feb 16:19:34
  static timestamp() {
    var d = new Date();
    var time = [utils.pad(d.getHours()),
      utils.pad(d.getMinutes()),
      utils.pad(d.getSeconds())
    ].join(':');
    return [d.getDate(), utils.months[d.getMonth()], time].join(' ');
  }
  /**
   * This function allow you to modify a JS Promise by adding some status properties.
   * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
   * But modified according to the specs of promises : https://promisesaplus.com/
   * copied from https://ourcodeworld.com/articles/read/317/how-to-check-if-a-javascript-promise-has-been-fulfilled-rejected-or-resolved
   */
  static MakeQuerablePromise(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.isResolved)
      return promise;
    // Set initial state
    var isPending = true;
    var isRejected = false;
    var isFulfilled = false;
    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(function(v) {
      isFulfilled = true;
      isPending = false;
      return v;
    }, function(e) {
      // console.log("Failed")
      isRejected = true;
      isPending = false;
      throw e;
    });
    result.isFulfilled = function() { return isFulfilled; };
    result.isPending = function() { return isPending; };
    result.isRejected = function() { return isRejected; };
    return result;
  }

  /**
   * This promise resolves, if the response input exists, else 
   * It is rejected
   */
  static finalPromise(response, myError) {
    return new Promise((resolve, reject) => {
      if (response) {
        resolve(response);
      } else {
        reject(myError);
      }
    });
  }

  static truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}


static throttle(func, limit){
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}




}
//regular expression showing a whitespace
utils.rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
utils.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'
];
