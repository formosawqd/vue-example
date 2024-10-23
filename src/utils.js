// import { Message } from "element-ui";
import Vue from 'vue';

//防抖

export const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

export const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  };
};

export const test = () => {
  // Message.success("成功");
  console.log(Vue.$message);
  console.log('test');
};
