function bmiCalculator(height, weight) {
    // 實作內容
    let h = height / 100
    let bmiCalculator = (weight / ( h * h ) )
    return Math.floor(bmiCalculator *10)/10
  //   math.floor(bmiCalculator) 
  }
  
  // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4