const PriceStatus = {
  Monthly: 0,
  Yearly: 1,

  // isValid(value) {
  //   return [0, 1, 2, 3].includes(value);
  // },

  // getName(value) {
  //   return Object.keys(this).find((key) => this[key] === value);
  // },
};

Object.freeze(PriceStatus);

module.exports = { PriceStatus };
