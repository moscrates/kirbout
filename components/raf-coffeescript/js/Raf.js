// Generated by CoffeeScript 1.4.0

/*
 * 
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

 * requestAnimationFrame polyfill by Erik Möller
 * fixes from Paul Irish and Tino Zijdel
 *
 * @refactoring to CofeeScript by Alfredo Llanos <alfredo@tallerdelsoho.es> || @biojazzard
*/


(function() {
  var _this = this;

  (function() {
    var lastTime, vendor, vendors, _i, _len;
    lastTime = 0;
    vendors = ['ms', 'moz', 'webkit', 'o'];
    _this.raf = function(_v) {
      window.requestAnimationFrame = window[_v + 'RequestAnimationFrame'];
      return window.cancelAnimationFrame = window[_v + 'cancelAnimationFrame'] || window[_v + 'cancelAnimationFrame'];
    };
    for (_i = 0, _len = vendors.length; _i < _len; _i++) {
      vendor = vendors[_i];
      _this.raf(vendor);
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime, id, timeToCall;
        currTime = Date();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      return window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
  })();

}).call(this);
