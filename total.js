function obscureCreditCard(cardNumber) {
  const cardLength = cardNumber.length;
  if (cardLength < 12 || cardLength > 16) {
    return "Invalid Credit Card";
  }

  let obscuredPart = "";
  for (let i = 0; i < cardLength - 4; i++) {
    obscuredPart += "*";
  }
  obscuredPart += cardNumber.slice(-4);

  return obscuredPart;
}

module.exports = obscureCreditCard;

