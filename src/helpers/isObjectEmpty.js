function isObjectEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

export default isObjectEmpty;
