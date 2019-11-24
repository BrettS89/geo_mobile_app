export default (status, message) => {
  if (status.toString()[0] === '4') {
    throw {
      status,
      error: new Error(message),
    };
  } else if (status.toString()[0] === '5') {
    throw {
      status,
      error: new Error('A server error occured'),
    };
  }
};
