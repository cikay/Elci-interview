function formatPhoneNumber(phoneNumber) {
  let strPhoneNumber;
  if (typeof phoneNumber === 'number') {
    strPhoneNumber = phoneNumber.toString();
    console.log(typeof strPhoneNumber);
  } else if (typeof phoneNumber === 'string') {
    strPhoneNumber = phoneNumber;
  } else {
    throw new Error('Phone number must be string or number type');
  }

  const onlyNumber = strPhoneNumber.replace(/[- ]/g, '');
  if (onlyNumber.length !== 10 && onlyNumber.length !== 9) {
    throw new Error('Phone Number must include 10 or 9 character number');
  }

  const firstBlank =
    onlyNumber.substring(0, 3) + ' ' + onlyNumber.substring(3, 6);
  let formattedPhoneNumber;

  if (onlyNumber.length === 10) {
    formattedPhoneNumber =
      firstBlank +
      ' ' +
      onlyNumber.substring(6, 8) +
      ' ' +
      onlyNumber.substring(8);
  } else if (onlyNumber.length === 9) {
    formattedPhoneNumber = firstBlank + ' ' + onlyNumber.substring(6);
  }
  return { input: phoneNumber, output: formattedPhoneNumber };
}

const phoneNumbers = [
  '-5---45-877 85 -30',
  '-5---45-877 85 -0',
  '545-877-78-01',
  '123456789',
  '124--354-32- 10',
];
for (const phoneNumber of phoneNumbers) {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  console.log(formattedPhoneNumber);
}
