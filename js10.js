// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let r = []
// for(let i = 0; i <= list.length-1; i++){
//     console.log(i)
//   if(list[i] % 2 != 0){
//       r.push(list[i])     
//     }
// }
// console.log(r)


// ---------------------------------
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let result = list.filter(number)
function number(n){
    return (n % 2 != 0)
}
console.log(result)