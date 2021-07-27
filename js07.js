const lists = [2, 4, 1, 8, 7, 3, 5]
function greaterThan(n){
  function bigerThan4(x){
    return x > n
  }
  return bigerThan4
}
// 實作...

const result = lists.filter(greaterThan(4))
console.log(result)  // 印出 [ 8, 7, 5 ]




