const formatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
  useGrouping: "always",
});

const formatPrice = (value) => formatter.format(value);

export default formatPrice;
