// 計算公式是以體重（公斤）除以身高（公尺）的平方

function bmiCalculator(height, weight) {
    // 實作內容
    let h = height / 100
    let w = weight
    let bmiCalculator = w / ( h * h )
    return Math.floor( bmiCalculator *10 ) / 10
  }
  
  // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4

  

  