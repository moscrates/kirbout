// Generated by CoffeeScript 1.4.0

/*
  QuoJS 2.1
  (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
  http://quojs.tapquo.com
*/


(function() {

  (function($$) {
    var EMPTY_ARRAY, HTML_CONTAINERS, IS_HTML_FRAGMENT, OBJECT_PROTOTYPE, TABLE, TABLE_ROW, _compact, _flatten;
    EMPTY_ARRAY = [];
    OBJECT_PROTOTYPE = Object.prototype;
    IS_HTML_FRAGMENT = /^\s*<(\w+|!)[^>]*>/;
    TABLE = document.createElement('table');
    TABLE_ROW = document.createElement('tr');
    HTML_CONTAINERS = {
      "tr": document.createElement("tbody"),
      "tbody": TABLE,
      "thead": TABLE,
      "tfoot": TABLE,
      "td": TABLE_ROW,
      "th": TABLE_ROW,
      "*": document.createElement("div")
    };
    $$.toType = function(obj) {
      return OBJECT_PROTOTYPE.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    };
    $$.isOwnProperty = function(object, property) {
      return OBJECT_PROTOTYPE.hasOwnProperty.call(object, property);
    };
    $$.getDOMObject = function(selector, children) {
      var domain, elementTypes, type;
      domain = null;
      elementTypes = [1, 9, 11];
      type = $$.toType(selector);
      if (type === "array") {
        domain = _compact(selector);
      } else if (type === "string" && IS_HTML_FRAGMENT.test(selector)) {
        domain = $$.fragment(selector.trim(), RegExp.$1);
        selector = null;
      } else if (type === "string") {
        domain = $$.query(document, selector);
        if (children) {
          if (domain.length === 1) {
            domain = $$.query(domain[0], children);
          } else {
            domain = $$.map(function() {
              return $$.query(domain, children);
            });
          }
        }
      } else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window) {
        domain = [selector];
        selector = null;
      }
      return domain;
    };
    $$.map = function(elements, callback) {
      var i, key, value, values;
      values = [];
      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        i = 0;
        while (i < elements.length) {
          value = callback(elements[i], i);
          if (value != null) {
            values.push(value);
          }
          i++;
        }
      } else {
        for (key in elements) {
          value = callback(elements[key], key);
          if (value != null) {
            values.push(value);
          }
        }
      }
      return _flatten(values);
    };
    $$.each = function(elements, callback) {
      var i, key;
      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        i = 0;
        while (i < elements.length) {
          if (callback.call(elements[i], i, elements[i]) === false) {
            return elements;
          }
          i++;
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) {
            return elements;
          }
        }
      }
      return elements;
    };
    $$.mix = function() {
      var arg, argument, child, len, prop;
      child = {};
      arg = 0;
      len = arguments.length;
      while (arg < len) {
        argument = arguments[arg];
        for (prop in argument) {
          if ($$.isOwnProperty(argument, prop) && argument[prop] !== undefined) {
            child[prop] = argument[prop];
          }
        }
        arg++;
      }
      return child;
    };
    $$.fragment = function(markup, tag) {
      var container;
      if (tag == null) {
        tag = "*";
      }
      if (!(tag in HTML_CONTAINERS)) {
        tag = "*";
      }
      container = HTML_CONTAINERS[tag];
      container.innerHTML = "" + markup;
      return $$.each(Array.prototype.slice.call(container.childNodes), function() {
        return container.removeChild(this);
      });
    };
    $$.fn.map = function(fn) {
      return $$.map(this, function(el, i) {
        return fn.call(el, i, el);
      });
    };
    $$.fn.instance = function(property) {
      return this.map(function() {
        return this[property];
      });
    };
    $$.fn.filter = function(selector) {
      return $$([].filter.call(this, function(element) {
        return element.parentNode && $$.query(element.parentNode, selector).indexOf(element) >= 0;
      }));
    };
    $$.fn.forEach = EMPTY_ARRAY.forEach;
    $$.fn.indexOf = EMPTY_ARRAY.indexOf;
    _compact = function(array) {
      return array.filter(function(item) {
        return item !== void 0 && item !== null;
      });
    };
    _flatten = function(array) {
      if (array.length > 0) {
        return [].concat.apply([], array);
      } else {
        return array;
      }
    };
  })(Quo);

}).call(this);
