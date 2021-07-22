// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.querySelector("#start-btn")
//     btn.addEventListener("click", () => {
//         const clock = document.querySelector("#timer")
//         setInterval(() => {
//             clock.innerHTML = Number(clock.innerHTML) + 1
//         }, 1000)
//         console.log(typeof Number(clock.innerHTML))
//     })
// })


document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#start-btn")
    const display = document.querySelector("#timer") 
    let running = false
    let number = 0
    let interval
  
    button.addEventListener("click", () => { 
  
      if(!running) {
        interval = setInterval(() => {
          number = number + 1
          display.innerText = `${number}`
        }, 1000)
        button.innerText = "暫停"
        running = true
      } else {
        clearInterval(interval)
        running = false
        button.innerText = "繼續"
      }
    })
  })             