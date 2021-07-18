document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#start-btn")
    btn.addEventListener("click", () => {
        const clock = document.querySelector("#timer")
        setInterval(() => {
            clock.innerHTML = Number(clock.innerHTML) + 1
        }, 1000)
        console.log(typeof Number(clock.innerHTML))
    })
})