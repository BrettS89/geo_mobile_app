export default (status, message) => {
  if (status.toString()[0] === '5' || status.toString()[0] === '4') {
    throw new Error(message);
  }
};
