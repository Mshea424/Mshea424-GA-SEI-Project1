

let l = document.querySelector(`.l`)
const kq = document.querySelector(`#kq`)
const kw = document.querySelector(`#kw`)
function keycompare(elmt) {
    console.log()
    if (l.innerText === elmt.innerText) {
    console.log(`Win!`)
} else {
    console.log(`Lose!`)
}
// console.log(`compare`)
}
kq.addEventListener(`click`, (evt) => {keycompare(kq); console.log(evt); evt.target.classList.remove('k'); evt.target.classList.add('bk')})
kw.addEventListener(`click`, () => keycompare(kw))

// kq.addEventListener(`click`, () => {
//     if (l.innerText === kq.innerText) {
//         console.log(`Win!`)
//     } else {
//         console.log(`Lose!`)
//     }
// })
// kw.addEventListener(`click`, () => {
//     if (l.innerText === kw.innerText) {
//         console.log(`Win!`)
//     } else {
//         console.log(`Lose!`)
//     }
// })