const isValidPassword = (password) => {
  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
  const number = "0123456789"
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


  if(password.length < 8) {
    return false
  }

  if(!hasNumber(password) || !hasCapital(password)) {
    return false
  }
  if(password.includes("password")) {
    return false
  }else{
    return true
  }
  // if(password.length >= 8 && hasNumber(password) && hasCapital(password) && !password.includes("password")) {
  //   return true
  // }else{
  //   return false
  // }


  function hasNumber(n) {
    for(let i = 0; i < number.length; i++) {
      if(n.includes(number[i])) {
        return true
      }
    }
    return false
  }

  function hasCapital(w) {
    // let boolean = false
    for(let j = 0; j < alphabet.length; j++) {
      if(w.includes(alphabet[j])) {
        return  true
      }
    }
    return false
  }
}             

console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true




// ----------------------------------

const isValidPassword = (password) => {
  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
//     if (password.length >= 8){
//       return true
//     }else{
//       return false
//     }

//     if (password.includes("password")){
//       return false
//     }
  if (hasNumber(password)){
    return true
  }else{
    return false
  }
  if (hasCapital(password)){
    return true
  }else{
    return false
  }

  function hasNumber(n){
    for(let i = 0; i < number.length; i++){
      if (n.includes(number[i])){
        return true
      }
    }
    return false
  }

  function hasCapital(w){
    for(let j = 0; j < capital.length; j++){
      if (w.includes(capital[j])){
        return true
      }
    }
    return false
  }
  
}
console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true


