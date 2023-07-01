function palindrome(str) {
  let myStr = str.toLowerCase();
  let myReg = /\W|_/g
  let mainStr = myStr.replace(myReg, '');
  let revStr = mainStr.split("").reverse().join("");
  
  if (mainStr === revStr) return true
  else{
    return false
  }
  
}

palindrome("Eye");