'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppleMenu = function (_Component) {
    _inherits(AppleMenu, _Component);

    function AppleMenu() {
        var _ref;

        _classCallCheck(this, AppleMenu);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = AppleMenu.__proto__ || Object.getPrototypeOf(AppleMenu)).call.apply(_ref, [this].concat(props)));

        _this.getDistance = _this.getDistance.bind(_this);
        _this.mouseEnter = _this.mouseEnter.bind(_this);
        _this.easeOut = _this.easeOut.bind(_this);
        _this.mouseMove = _this.mouseMove.bind(_this);
        _this.mouseOut = _this.mouseOut.bind(_this);
        _this.filterImg = _this.filterImg.bind(_this);
        _this.inOut = true;
        _this.moveFlag = true;
        _this.mouseMoveBegin = false;
        _this.Changes = [];
        return _this;
    }

    _createClass(AppleMenu, [{
        key: 'mouseEnter',
        value: function mouseEnter(ev) {
            var _this2 = this;

            this.mouseMoveBegin = true;
            this.inOut = true;
            var oEvent = ev || event;
            var target = this.refs.target;
            var aImg = target.getElementsByTagName('img');
            var iMax = 200;

            var _loop = function _loop(i) {
                var d = _this2.getDistance(aImg[i], target, oEvent);
                d = Math.min(d, iMax);
                var changeNum = (iMax - d) / iMax * _this2.props.size * _this2.props.zoom;
                _this2.Changes[i] = changeNum;

                var t = 0;
                var during = 15;
                var step = function step() {
                    var value = _this2.easeOut(t, _this2.props.size, changeNum, during);
                    if (value - _this2.props.size >= _this2.Changes[i]) {
                        _this2.mouseMoveBegin = true;
                        return;
                    }
                    aImg[i].style.width = value + "px";
                    aImg[i].style.height = value + "px";
                    t++;
                    if (t <= during && _this2.inOut) {
                        requestAnimationFrame(step);
                    }
                };
                step();
            };

            for (var i = 0; i < aImg.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'mouseMove',
        value: function mouseMove(ev) {
            // if(!this.state.moveFlag) return;
            var oEvent = ev || event;
            var target = this.refs.target;
            var aImg = target.getElementsByTagName('img');
            var d = 0;
            var iMax = 200;

            for (var i = 0; i < aImg.length; i++) {
                d = this.getDistance(aImg[i], target, oEvent);
                d = Math.min(d, iMax);
                this.Changes[i] = (iMax - d) / iMax * this.props.size * this.props.zoom;
                if (this.mouseMoveBegin) {
                    aImg[i].style.width = this.Changes[i] + this.props.size + 'px';
                    aImg[i].style.height = this.Changes[i] + this.props.size + 'px';
                }
            }
        }
    }, {
        key: 'mouseOut',
        value: function mouseOut() {
            var _this3 = this;

            this.inOut = false;
            this.mouseMoveBegin = false;
            var target = this.refs.target;
            var aImg = target.getElementsByTagName('img');

            var _loop2 = function _loop2(i) {
                var t = 0;
                var during = 60;
                var step = function step() {
                    var value = _this3.easeOut(t, aImg[i].offsetWidth, _this3.props.size - aImg[i].offsetWidth, during);
                    aImg[i].style.width = value + "px";
                    aImg[i].style.height = value + "px";
                    t++;
                    if (t <= during && !_this3.inOut) {
                        requestAnimationFrame(step);
                    } else {}
                };
                step();
            };

            for (var i = 0; i < aImg.length; i++) {
                _loop2(i);
            }
        }
    }, {
        key: 'getDistance',
        value: function getDistance(img, target, oEvent) {
            return Math.abs(img.offsetLeft + target.offsetLeft - oEvent.clientX + img.offsetWidth / 2);
        }
    }, {
        key: 'easeOut',
        value: function easeOut(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    }, {
        key: 'filterImg',
        value: function filterImg(body, img) {
            var src = [];
            var imgs = _react2.default.Children.map(this.props.children, function (child, index) {
                if (child.type == "img") {
                    return _react2.default.createElement('img', _extends({ style: img }, child.props));
                }
            });
            return imgs;
        }
    }, {
        key: 'render',
        value: function render() {
            var body = {
                position: "absolute",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%"
            };
            var img = {
                width: this.props.size + "px",
                height: this.props.size + "px",
                alignSelf: "flex-end"
            };

            return _react2.default.createElement(
                'div',
                { ref: 'target', onMouseEnter: this.mouseEnter, onMouseMove: this.mouseMove, onMouseLeave: this.mouseOut, style: body },
                this.filterImg(body, img)
            );
        }
    }]);

    return AppleMenu;
}(_react.Component);

AppleMenu.defaultProps = {
    size: 64,
    zoom: 0.5
};

exports.default = AppleMenu;