// All methods are based on ES6
export default {
  // makes Array unique
  uniqueArray(array){
    return [...new Set(array)];
  },
  splitNumAndStr(str){
    let num = str.match(/[0-9]+/ig);
    let string = str.match(/[a-z]+/ig);
    return {
      num,
      string
    }
  },
}
