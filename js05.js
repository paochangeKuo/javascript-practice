function displayName(firstName, lastName) {
    // 實作
  if (firstName == undefined && lastName == undefined){
    console.log("請輸入名稱")
  }else {
    if (lastName == undefined){
      console.log(firstName + "kitty")
    }else{
      console.log("Hello" + lastName)
    }
  }
  }
  displayName("Hello ", "Kitty")   // 印出 "Hello Kitty"
  displayName("Hello ", "天線寶寶") // 印出 "Hello 天線寶寶"
  displayName("Hello ")            // 印出 "Hello Kitty"
  displayName()                   // 印出 請輸入名稱
  
  function displayName(firstName, lastName){
    console.log(firstName + lastName)
  }
  
  displayName("hello", "baga")