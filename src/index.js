module.exports = function check(str, bracketsConfig) {
  var arr = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      bracketsConfig[i][2] = 0;
    }
  }
  for (var j = 0; j < str.length; j++) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1] && bracketsConfig[i][0] == str[j]) {
        if (bracketsConfig[i][2]) {
          bracketsConfig[i][2] = 0;
          if (arr.pop() != bracketsConfig[i][0]) return false;
        } else {
          bracketsConfig[i][2] = 1;
          arr.push(bracketsConfig[i][0]);
        }
      }
      if (bracketsConfig[i][0] == str[j]) {
        arr.push(bracketsConfig[i][0]);
      }
      if (bracketsConfig[i][1] == str[j]) {
        if (arr.pop() != bracketsConfig[i][0]) return false;
      }
    }
  }
  if (arr.length) return false;
  else return true;
}