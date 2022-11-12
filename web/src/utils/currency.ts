export const formatPrice = (price: string): string => {
  if (!price) {
    return '';
  }

  let formattedPrice = '';

  let counter = 0;

  for (let i = price?.length - 1; i >= 0; i--) {
    if (counter === 3) {
      formattedPrice = '.' + formattedPrice;
      counter = 0;
    }

    formattedPrice = price[i] + formattedPrice;

    counter++;
  }

  formattedPrice = 'Rp ' + formattedPrice;

  return formattedPrice;
};
