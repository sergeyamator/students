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
  isMaxLength(input) {
    if (input.length <= 10) {
      return true;
    }
    return false;
  },
  isMinLength(input) {
    if (input.length >= 5) {
      return true;
    }
    return false;
  },
  isEqual(firstInput, secondInput) {
    return firstInput === secondInput;
  },
};

