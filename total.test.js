const obscureCreditCard = require('./total');

describe('obscureCreditCard', () => {
  it('should obscure a valid credit card number', () => {
    expect(obscureCreditCard('1234567890123456')).toBe('************3456');
  });

  it('should return "Invalid Credit Card" for a card with less than 12 digits', () => {
    expect(obscureCreditCard('1234567890')).toBe('Invalid Credit Card');
  });

  it('should return "Invalid Credit Card" for a card with more than 16 digits', () => {
    expect(obscureCreditCard('12345678901234567890')).toBe('Invalid Credit Card');
  });

  it('should obscure a valid credit card number with 12 digits', () => {
    expect(obscureCreditCard('123456789012')).toBe('********9012');
  });

  it('should obscure a valid credit card number with 16 digits', () => {
    expect(obscureCreditCard('1234567890123456')).toBe('************3456');
  });

  it('should return "Invalid Credit Card" for a card with exactly 11 digits', () => {
    expect(obscureCreditCard('12345678901')).toBe('Invalid Credit Card');
  });
});