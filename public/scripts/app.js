"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// var Person = function () {
// }
var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guess";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    console.log('constructer çalıştı');
  }

  _createClass(Person, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.age;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ",my name is ").concat(this.name);
    }
  }]);

  return Person;
}();

var p1 = new Person("Onur", 22);
var p2 = new Person("Emine", 28);
var p3 = new Person();
console.log(p1.greeting('Hello'));
console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p2);
console.log(p1);
console.log(p3);
