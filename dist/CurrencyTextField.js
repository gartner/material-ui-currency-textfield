"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.predefinedOptions = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _autonumeric = _interopRequireDefault(require("autonumeric"));
var _material = require("@mui/material");
var _excluded = ["currencySymbol"],
  _excluded2 = ["classes", "currencySymbol", "inputProps", "InputProps"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } // import AutoNumeric from "autonumeric"
/**
 * CurrencyTextField is a [react](https://reactjs.org/) component with automated currency and number format, and with [Material-ui](https://material-ui.com/) look and feel.
 *
 * CurrencyTextField is a wrapper component for <a href="https://github.com/autoNumeric/autoNumeric">autonumeric</a> and based on <a href="https://github.com/mkg0/react-numeric">react-numeric</a>.
 *
 * Main features:
 * * Adds thousands separator automatically.
 * * Adds automatically the decimals on blur.
 * * Smart input. User can only type the accepted characters depending on the current value.
 * * Lots of config options...
 * * It accepts all the `props` and `classes` of Material-Ui <a href="https://material-ui.com/api/text-field/#textfield-api">TextField API</a> (Ex: classes, label, helperText, variant).
 * * And also all the `options` from <a href="http://autonumeric.org/guide">AutoNumeric</a>
 */
var CurrencyTextField = /*#__PURE__*/function (_React$Component) {
  function CurrencyTextField(props) {
    var _this;
    _classCallCheck(this, CurrencyTextField);
    _this = _callSuper(this, CurrencyTextField, [props]);
    _this.getValue = _this.getValue.bind(_this);
    _this.callEventHandler = _this.callEventHandler.bind(_this);
    return _this;
  }
  _inherits(CurrencyTextField, _React$Component);
  return _createClass(CurrencyTextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        currencySymbol = _this$props.currencySymbol,
        others = _objectWithoutProperties(_this$props, _excluded);
      this.autonumeric = new _autonumeric["default"](this.input, this.props.value, _objectSpread(_objectSpread(_objectSpread({}, this.props.preDefined), others), {}, {
        onChange: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onKeyPress: undefined,
        onKeyUp: undefined,
        onKeyDown: undefined,
        watchExternalChanges: false
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.autonumeric.remove();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var isValueChanged = this.props.value !== newProps.value && this.getValue() !== newProps.value;
      if (isValueChanged) {
        this.autonumeric.set(newProps.value);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (!this.autonumeric) return;
      var valueMapper = {
        string: function string(numeric) {
          return numeric.getNumericString();
        },
        number: function number(numeric) {
          return numeric.getNumber();
        }
      };
      return valueMapper[this.props.outputFormat](this.autonumeric);
    }
  }, {
    key: "callEventHandler",
    value: function callEventHandler(event, eventName) {
      if (!this.props[eventName]) return;
      this.props[eventName](event, this.getValue());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        currencySymbol = _this$props2.currencySymbol,
        inputProps = _this$props2.inputProps,
        InputProps = _this$props2.InputProps,
        others = _objectWithoutProperties(_this$props2, _excluded2);
      var otherProps = {};
      ["id", "label", "className", "autoFocus", "variant", "style", "error", "disabled", "type", "name", "defaultValue", "tabIndex", "fullWidth", "rows", "select", "required", "helperText", "unselectable", "margin", "SelectProps", "multiline", "size", "FormHelperTextProps", "placeholder"].forEach(function (prop) {
        return otherProps[prop] = _this2.props[prop];
      });
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
        inputRef: function inputRef(ref) {
          return _this2.input = ref;
        },
        onChange: function onChange(e) {
          return _this2.callEventHandler(e, "onChange");
        },
        onFocus: function onFocus(e) {
          return _this2.callEventHandler(e, "onFocus");
        },
        onBlur: function onBlur(e) {
          return _this2.callEventHandler(e, "onBlur");
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.callEventHandler(e, "onKeyPress");
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.callEventHandler(e, "onKeyUp");
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.callEventHandler(e, "onKeyDown");
        },
        InputProps: _objectSpread({
          startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
            position: "start"
          }, currencySymbol)
        }, InputProps),
        inputProps: _objectSpread({}, inputProps),
        sx: {
          "& .MuiInput-input": {
            textAlign: this.props.textAlign || "right"
          }
        }
      }, otherProps));
    }
  }]);
}(_react["default"].Component);
CurrencyTextField.propTypes = {
  type: _propTypes["default"].oneOf(["text", "tel", "hidden"]),
  /** The variant to use. */
  variant: _propTypes["default"].string,
  id: _propTypes["default"].string,
  /** The CSS class name of the wrapper element. */
  className: _propTypes["default"].string,
  /** Inline styling for element */
  style: _propTypes["default"].object,
  /** If true, the input element will be disabled. */
  disabled: _propTypes["default"].bool,
  /** The label content. */
  label: _propTypes["default"].string,
  /** Align the numbers in the textField.
   * If you pass the `inputProps` from TextFieldAPI text align won't work.
   * then, you have handle it by className with your own class inside inputProps.
   */
  textAlign: _propTypes["default"].oneOf(["right", "left", "center"]),
  /** Tab index for the element */
  tabIndex: _propTypes["default"].number,
  /** If true, the input element will be focused during the first mount. */
  autoFocus: _propTypes["default"].bool,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: _propTypes["default"].string,
  /** value to be enter and display in input */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  /** Callback fired when the value is changed. */
  onChange: _propTypes["default"].func,
  /** Callback fired when focused on element. */
  onFocus: _propTypes["default"].func,
  /** Callback fired on blur. */
  onBlur: _propTypes["default"].func,
  /** Callback fired on key press. */
  onKeyPress: _propTypes["default"].func,
  /** Callback fired on key press. */
  onKeyUp: _propTypes["default"].func,
  /** Callback fired on key press. */
  onKeyDown: _propTypes["default"].func,
  /** Defines the currency symbol string. */
  currencySymbol: _propTypes["default"].string,
  /** Defines what decimal separator character is used. */
  decimalCharacter: _propTypes["default"].string,
  /** Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed. */
  decimalCharacterAlternative: _propTypes["default"].string,
  /** Defines the default number of decimal places to show on the formatted value. */
  decimalPlaces: _propTypes["default"].number,
  /** Defines how many decimal places should be visible when the element is unfocused null. */
  decimalPlacesShownOnBlur: _propTypes["default"].number,
  /** Defines how many decimal places should be visible when the element has the focus. */
  decimalPlacesShownOnFocus: _propTypes["default"].number,
  /** Defines the thousand grouping separator character */
  digitGroupSeparator: _propTypes["default"].string,
  /** Controls the leading zero behavior   */
  leadingZero: _propTypes["default"].oneOf(["allow", "deny", "keep"]),
  /** maximum value that can be enter */
  maximumValue: _propTypes["default"].string,
  /** minimum value that can be enter */
  minimumValue: _propTypes["default"].string,
  /** placement of the negitive and possitive sign symbols */
  negativePositiveSignPlacement: _propTypes["default"].oneOf(["l", "r", "p", "s"]),
  /** Defines the negative sign symbol to use   */
  negativeSignCharacter: _propTypes["default"].string,
  /** how the value should be formatted,before storing it */
  outputFormat: _propTypes["default"].oneOf(["string", "number"]),
  /** Defines if the element value should be selected on focus. */
  selectOnFocus: _propTypes["default"].bool,
  /** Defines the positive sign symbol to use. */
  positiveSignCharacter: _propTypes["default"].string,
  /** Defines if the element should be set as read only on initialization. */
  readOnly: _propTypes["default"].bool,
  /** predefined objects are available in <a href="https://www.nodenpm.com/autonumeric/4.5.1/detail.html#predefined-options">AutoNumeric</a>*/
  preDefined: _propTypes["default"].object
};
CurrencyTextField.defaultProps = {
  type: "text",
  variant: "standard",
  currencySymbol: "$",
  outputFormat: "number",
  textAlign: "right",
  maximumValue: "10000000000000",
  minimumValue: "-10000000000000"
};
var _default = exports["default"] = CurrencyTextField;
var predefinedOptions = exports.predefinedOptions = _autonumeric["default"].getPredefinedOptions();