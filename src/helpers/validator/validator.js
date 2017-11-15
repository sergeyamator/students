export default {
  isNotEmpty(input) {
    return !!input;
  },
  isNumber(input) {
    return /^\d+$/.test(input);
  },
  isEmail(input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
  },
  isMaxLength(input, value) {
    if (input.length <= value) {
      return true;
    }
    return false;
  },
  isMinLength(input, value) {
    if (input.length >= value) {
      return true;
    }
    return false;
  },
  isEqual(firstInput, secondInput) {
    return firstInput === secondInput;
  },
};

