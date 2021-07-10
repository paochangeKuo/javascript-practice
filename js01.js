// 閏年規則如下：

// 西元年份除以4不可整除，為平年。
// 西元年份除以4可整除，且除以100不可整除，為閏年。
// 西元年份除以100可整除，且除以400不可整除，為平年
// 西元年份除以400可整除，為閏年。
var year = 1999

// if ((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0)){
//     console.log("是閏年")
// }else{
//     console.log("不是閏年")
// }


if ( year % 400 == 0 ){
    console.log( "是閏年" )
  }else{
    if ( year % 4 == 0 && year % 100 != 0 ){
      console.log( "是閏年" )
    }else
      console.log( "不是閏年" )
  }