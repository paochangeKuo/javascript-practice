// 計算公式是以體重（公斤）除以身高（公尺）的平方

// function bmiCalculator(height, weight) {
    實作內容
    let h = height / 100
    let w = weight
    let bmiCalculator = w / ( h * h )
    return Math.floor( bmiCalculator *10 ) / 10
  }
  
  // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4

  // 九九乘法表
  // for (let i = 1; i<= 9; i = i + 1){
  //   for (let j = 1; j <= 9; j = j + 1){
  //     console.log(i + " x " + j + " = " + i * j)
  //   }
  // }