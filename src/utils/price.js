export const addComma = price => {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  return price.toString().replace(regexp, ",");
};
