function bonAppetit(bill, k, b) {
  let fBA = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      fBA += bill[i] / 2;
    }
  }
  fBA === b ? console.log('Bon Appetit') : console.log(b - fBA);
}

bonAppetit([2, 4, 6], 3, 6);
