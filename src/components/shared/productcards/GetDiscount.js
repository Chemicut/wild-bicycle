const GetDiscount = (fullprice, price) => {
    return Math.round(((fullprice - price) / fullprice) * 100);
  }
export default GetDiscount;