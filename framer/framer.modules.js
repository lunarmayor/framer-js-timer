require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var GoogleFonts,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

GoogleFonts = (function(superClass) {
  extend(GoogleFonts, superClass);

  function GoogleFonts() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    Utils.domLoadScriptSync("//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js");
    if (args.length) {
      this.load.apply(this, args);
    }
  }

  GoogleFonts.prototype.load = function() {
    var args, families, firstArg, weights;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    firstArg = args[0];
    families = [];
    if (typeof firstArg === "string") {
      weights = args.slice(1).join();
      families.push(firstArg + ":" + weights + ":latin");
    } else {
      (Array.isArray(firstArg) ? firstArg : [firstArg]).forEach(function(family) {
        weights = family.weights || [];
        return families.push(family.font + ":" + weights + ":latin");
      });
    }
    return window.WebFont.load({
      google: {
        families: families
      },
      classes: false,
      loading: (function(_this) {
        return function() {
          return _this.emit("loading");
        };
      })(this),
      active: (function(_this) {
        return function() {
          return _this.emit("active");
        };
      })(this),
      inactive: (function(_this) {
        return function() {
          return _this.emit("inactive");
        };
      })(this),
      fontloading: (function(_this) {
        return function(familyName, fvd) {
          return _this.emit("fontloading", familyName, fvd);
        };
      })(this),
      fontactive: (function(_this) {
        return function(familyName, fvd) {
          return _this.emit("fontactive", familyName, fvd);
        };
      })(this),
      fontinactive: (function(_this) {
        return function(familyName, fvd) {
          return _this.emit("fontinactive", familyName, fvd);
        };
      })(this)
    });
  };

  return GoogleFonts;

})(Framer.BaseClass);

if (typeof module !== "undefined" && module !== null) {
  module.exports = GoogleFonts;
}


},{}],"myModule":[function(require,module,exports){
exports.GoogleFonts = require("framer-googlefonts");


},{"framer-googlefonts":1}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9Nb3JyaXNzZXkvbm9kZV9tb2R1bGVzL2ZyYW1lci1nb29nbGVmb250cy9hcHAuY29mZmVlIiwiL1VzZXJzL01vcnJpc3NleS9jb2RlL3RpbWVyLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLE9BQUEsQ0FBUSxvQkFBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgR29vZ2xlRm9udHMsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBzbGljZSA9IFtdLnNsaWNlO1xuXG5Hb29nbGVGb250cyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChHb29nbGVGb250cywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gR29vZ2xlRm9udHMoKSB7XG4gICAgdmFyIGFyZ3M7XG4gICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgIFV0aWxzLmRvbUxvYWRTY3JpcHRTeW5jKFwiLy9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy93ZWJmb250LzEvd2ViZm9udC5qc1wiKTtcbiAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9hZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICBHb29nbGVGb250cy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBmYW1pbGllcywgZmlyc3RBcmcsIHdlaWdodHM7XG4gICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgIGZpcnN0QXJnID0gYXJnc1swXTtcbiAgICBmYW1pbGllcyA9IFtdO1xuICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHdlaWdodHMgPSBhcmdzLnNsaWNlKDEpLmpvaW4oKTtcbiAgICAgIGZhbWlsaWVzLnB1c2goZmlyc3RBcmcgKyBcIjpcIiArIHdlaWdodHMgKyBcIjpsYXRpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKEFycmF5LmlzQXJyYXkoZmlyc3RBcmcpID8gZmlyc3RBcmcgOiBbZmlyc3RBcmddKS5mb3JFYWNoKGZ1bmN0aW9uKGZhbWlseSkge1xuICAgICAgICB3ZWlnaHRzID0gZmFtaWx5LndlaWdodHMgfHwgW107XG4gICAgICAgIHJldHVybiBmYW1pbGllcy5wdXNoKGZhbWlseS5mb250ICsgXCI6XCIgKyB3ZWlnaHRzICsgXCI6bGF0aW5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5XZWJGb250LmxvYWQoe1xuICAgICAgZ29vZ2xlOiB7XG4gICAgICAgIGZhbWlsaWVzOiBmYW1pbGllc1xuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IGZhbHNlLFxuICAgICAgbG9hZGluZzogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChcImxvYWRpbmdcIik7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSxcbiAgICAgIGFjdGl2ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChcImFjdGl2ZVwiKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLFxuICAgICAgaW5hY3RpdmU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmVtaXQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLFxuICAgICAgZm9udGxvYWRpbmc6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZmFtaWx5TmFtZSwgZnZkKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmVtaXQoXCJmb250bG9hZGluZ1wiLCBmYW1pbHlOYW1lLCBmdmQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksXG4gICAgICBmb250YWN0aXZlOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZhbWlseU5hbWUsIGZ2ZCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5lbWl0KFwiZm9udGFjdGl2ZVwiLCBmYW1pbHlOYW1lLCBmdmQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksXG4gICAgICBmb250aW5hY3RpdmU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZmFtaWx5TmFtZSwgZnZkKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmVtaXQoXCJmb250aW5hY3RpdmVcIiwgZmFtaWx5TmFtZSwgZnZkKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEdvb2dsZUZvbnRzO1xuXG59KShGcmFtZXIuQmFzZUNsYXNzKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gR29vZ2xlRm9udHM7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDAxdmNuSnBjM05sZVM5dWIyUmxYMjF2WkhWc1pYTXZabkpoYldWeUxXZHZiMmRzWldadmJuUnpMMkZ3Y0M1amIyWm1aV1VpTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdlZYTmxjbk12VFc5eWNtbHpjMlY1TDI1dlpHVmZiVzlrZFd4bGN5OW1jbUZ0WlhJdFoyOXZaMnhsWm05dWRITXZZWEJ3TG1OdlptWmxaU0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4SlFVRkJMRmRCUVVFN1JVRkJRVHM3T3p0QlFVRk5PenM3UlVGRFVTeHhRa0ZCUVR0QlFVTmFMRkZCUVVFN1NVRkVZVHRKUVVOaUxFdEJRVXNzUTBGQlF5eHBRa0ZCVGl4RFFVRjNRaXh6UkVGQmVFSTdTVUZGUVN4SlFVRjFRaXhKUVVGSkxFTkJRVU1zVFVGQk5VSTdUVUZCUVN4SlFVRkRMRU5CUVVFc1NVRkJTU3hEUVVGRExFdEJRVTRzUTBGQldTeEpRVUZhTEVWQlFXVXNTVUZCWml4RlFVRkJPenRGUVVoWk96dDNRa0ZMWWl4SlFVRkJMRWRCUVUwc1UwRkJRVHRCUVVOTUxGRkJRVUU3U1VGRVRUdEpRVU5PTEZGQlFVRXNSMEZCVnl4SlFVRkxMRU5CUVVFc1EwRkJRVHRKUVVOb1FpeFJRVUZCTEVkQlFWYzdTVUZIV0N4SlFVRkhMRTlCUVU4c1VVRkJVQ3hMUVVGdFFpeFJRVUYwUWp0TlFVTkRMRTlCUVVFc1IwRkJWU3hKUVVGTExGTkJRVWtzUTBGQlF5eEpRVUZXTEVOQlFVRTdUVUZEVml4UlFVRlJMRU5CUVVNc1NVRkJWQ3hEUVVGcFFpeFJRVUZFTEVkQlFWVXNSMEZCVml4SFFVRmhMRTlCUVdJc1IwRkJjVUlzVVVGQmNrTXNSVUZHUkR0TFFVRkJMRTFCUVVFN1RVRkpReXhEUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZPTEVOQlFXTXNVVUZCWkN4RFFVRklMRWRCUVN0Q0xGRkJRUzlDTEVkQlFUWkRMRU5CUVVNc1VVRkJSQ3hEUVVFNVF5eERRVU5ETEVOQlFVTXNUMEZFUml4RFFVTlZMRk5CUVVNc1RVRkJSRHRSUVVOU0xFOUJRVUVzUjBGQlZTeE5RVUZOTEVOQlFVTXNUMEZCVUN4SlFVRnJRanRsUVVNMVFpeFJRVUZSTEVOQlFVTXNTVUZCVkN4RFFVRnBRaXhOUVVGTkxFTkJRVU1zU1VGQlVpeEhRVUZoTEVkQlFXSXNSMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNVVUZCZUVNN1RVRkdVU3hEUVVSV0xFVkJTa1E3TzFkQlUwRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGbUxFTkJRME03VFVGQlFTeE5RVUZCTEVWQlFWRTdVVUZCUVN4UlFVRkJMRVZCUVZVc1VVRkJWanRQUVVGU08wMUJRMEVzVDBGQlFTeEZRVUZUTEV0QlJGUTdUVUZKUVN4UFFVRkJMRVZCUVZNc1EwRkJRU3hUUVVGQkxFdEJRVUU3WlVGQlFTeFRRVUZCTzJsQ1FVRkhMRXRCUVVNc1EwRkJRU3hKUVVGRUxFTkJRVTBzVTBGQlRqdFJRVUZJTzAxQlFVRXNRMEZCUVN4RFFVRkJMRU5CUVVFc1NVRkJRU3hEUVVwVU8wMUJTMEVzVFVGQlFTeEZRVUZSTEVOQlFVRXNVMEZCUVN4TFFVRkJPMlZCUVVFc1UwRkJRVHRwUWtGQlJ5eExRVUZETEVOQlFVRXNTVUZCUkN4RFFVRk5MRkZCUVU0N1VVRkJTRHROUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTEVsQlFVRXNRMEZNVWp0TlFVMUJMRkZCUVVFc1JVRkJWU3hEUVVGQkxGTkJRVUVzUzBGQlFUdGxRVUZCTEZOQlFVRTdhVUpCUVVjc1MwRkJReXhEUVVGQkxFbEJRVVFzUTBGQlRTeFZRVUZPTzFGQlFVZzdUVUZCUVN4RFFVRkJMRU5CUVVFc1EwRkJRU3hKUVVGQkxFTkJUbFk3VFVGUFFTeFhRVUZCTEVWQlFXRXNRMEZCUVN4VFFVRkJMRXRCUVVFN1pVRkJRU3hUUVVGRExGVkJRVVFzUlVGQllTeEhRVUZpTzJsQ1FVTmFMRXRCUVVNc1EwRkJRU3hKUVVGRUxFTkJRVTBzWVVGQlRpeEZRVUZ4UWl4VlFVRnlRaXhGUVVGcFF5eEhRVUZxUXp0UlFVUlpPMDFCUVVFc1EwRkJRU3hEUVVGQkxFTkJRVUVzU1VGQlFTeERRVkJpTzAxQlUwRXNWVUZCUVN4RlFVRlpMRU5CUVVFc1UwRkJRU3hMUVVGQk8yVkJRVUVzVTBGQlF5eFZRVUZFTEVWQlFXRXNSMEZCWWp0cFFrRkRXQ3hMUVVGRExFTkJRVUVzU1VGQlJDeERRVUZOTEZsQlFVNHNSVUZCYjBJc1ZVRkJjRUlzUlVGQlowTXNSMEZCYUVNN1VVRkVWenROUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTEVsQlFVRXNRMEZVV2p0TlFWZEJMRmxCUVVFc1JVRkJZeXhEUVVGQkxGTkJRVUVzUzBGQlFUdGxRVUZCTEZOQlFVTXNWVUZCUkN4RlFVRmhMRWRCUVdJN2FVSkJRMklzUzBGQlF5eERRVUZCTEVsQlFVUXNRMEZCVFN4alFVRk9MRVZCUVhOQ0xGVkJRWFJDTEVWQlFXdERMRWRCUVd4RE8xRkJSR0U3VFVGQlFTeERRVUZCTEVOQlFVRXNRMEZCUVN4SlFVRkJMRU5CV0dRN1MwRkVSRHRGUVdSTE96czdPMGRCVG0xQ0xFMUJRVTBzUTBGQlF6czdPMFZCYlVOcVF5eE5RVUZOTEVOQlFVVXNUMEZCVWl4SFFVRnJRaUo5XG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuZXhwb3J0cy5Hb29nbGVGb250cyA9IHJlcXVpcmUgXCJmcmFtZXItZ29vZ2xlZm9udHNcIlxuIl19
