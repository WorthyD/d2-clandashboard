import { isValidDate } from './date-utils';

describe('Date Utils', () => {
  describe('isValidDate', () => {
    it('should work with dates', () => {
      const d = new Date();
      expect(isValidDate(d)).toEqual(true);
    });
    it('should not work with numbers', () => {
      const d = 123232323;
      expect(isValidDate(d)).toEqual(false);
    });
    it('should not work with strings', () => {
      const d = 123232323;
      expect(isValidDate(d)).toEqual(false);
    });
    it('should not work with objects', () => {
      const d = {};
      expect(isValidDate(d)).toEqual(false);
    });
    it('should not work with nulls', () => {
      const d = null;
      expect(isValidDate(d)).toEqual(false);
    });
    it('should not work with undefined', () => {
      const d = undefined;
      expect(isValidDate(d)).toEqual(false);
    });
  });
});
