"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// icons/Bell.tsx
import { motion } from "motion/react";
import { jsx, jsxs } from "react/jsx-runtime";
function Bell(_a) {
  var _b = _a, {
    size = 24,
    strokeWidth = 2
  } = _b, props = __objRest(_b, [
    "size",
    "strokeWidth"
  ]);
  return /* @__PURE__ */ jsxs(
    motion.svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "normal",
      whileHover: "hover"
    }, props), {
      children: [
        /* @__PURE__ */ jsx(
          motion.path,
          {
            d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9",
            variants: {
              normal: {
                rotate: 0
              },
              hover: {
                rotate: [0, -8, 8, -8, 8, 0]
              }
            },
            transition: {
              duration: 0.5,
              ease: "easeInOut"
            },
            style: {
              transformOrigin: "center top"
            }
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M10 21h4" })
      ]
    })
  );
}
export {
  Bell
};
//# sourceMappingURL=index.mjs.map