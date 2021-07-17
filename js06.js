// // 檢查傳入的引數是否為某數的平方

// function isSquare(num) {
//     // 實作寫在這裡...
//     let sq = Math.sqrt(num)
//     if (sq % 1 == 0){
//         return true
//     }else{
//         return false
//     }
//   }
  
//   console.log(isSquare(0))   // 印出 true
//   console.log(isSquare(4))   // 印出 true
//   console.log(isSquare(5))   // 印出 false
//   console.log(isSquare(25))  // 印出 true
//   console.log(isSquare(26))  // 印出 false

  
  function printStars(n) {
    // 實作內容
    for (let i = 1; i <= n; i++){
        let result = ""
        for (let j = 1; j <= i; j++){
            result = result + "*"
        }console.log(result)
    }
  }
  
  printStars(6)