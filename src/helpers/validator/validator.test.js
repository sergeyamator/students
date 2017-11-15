import validator from './validator';

describe('Validation', () => {
  describe('#isNotEmpty', () => {
    it('should return true if argument is not empty', () => {
      expect(validator.isNotEmpty('any')).toBe(true);
    });

    it('should return false if argument is empty', () => {
      expect(validator.isNotEmpty('')).toBe(false);
    });
  });

  describe('#isNumber', () => {
    it('should return true if argument only numbers', () => {
      expect(validator.isNumber('435')).toBe(true);
    });

    it('should return false if argument have not only numbers', () => {
      expect(validator.isNumber('4a35')).toBe(false);
    });
  });

  describe('#isEmail', () => {
    it('should return true if argument is email', () => {
      expect(validator.isEmail('test@gmail.com')).toBe(true);
    });

    it('should return false if argument is not email', () => {
      expect(validator.isEmail('4a35.fsadf')).toBe(false);
    });
  });

  describe('#isMinLength', () => {
    const minLength = 5;
    it('should return true if length is more than expected value', () => {
      expect(validator.isMinLength('sadfasdfsadfasf', minLength)).toBe(true);
    });

    it('should return false if length is less than expected value', () => {
      expect(validator.isMinLength('4a35', minLength)).toBe(false);
    });
  });

  describe('#isMaxLength', () => {
    const maxLength = 10;

    it('should return true if length is less than expected value', () => {
      expect(validator.isMaxLength('a', maxLength)).toBe(true);
    });

    it('should return false if length is more than expected value', () => {
      expect(validator.isMaxLength('4afasdfasfasfd35', maxLength)).toBe(false);
    });
  });

  describe('#isEqual', () => {
    it('should return true if first and second value are equal', () => {
      const first = 'any';
      const second = 'any';

      expect(validator.isEqual(first, second)).toBe(true);
    });

    it('should return false if first and second value are not equal', () => {
      const first = 'first';
      const second = 'second';

      expect(validator.isEqual(first, second)).toBe(false);
    });
  });
});
