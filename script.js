

let l = document.querySelector(`.l`)
const kq = document.querySelector(`#kq`)
const kw = document.querySelector(`#kw`)
console.log(l.innerText)
console.log(kq.innerText)
console.log(kw.innerText)
kq.addEventListener(`click`, () => {
    if (l.innerText === kq.innerText) {
    console.log(`Win!`)
} else {
    console.log(`Lose!`)
}
})
kw.addEventListener(`click`, () => {
    if (l.innerText === kw.innerText) {
    console.log(`Win!`)
} else {
    console.log(`Lose!`)
}
})