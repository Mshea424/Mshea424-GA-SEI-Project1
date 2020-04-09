
let word = `LETTER`
let letters = word.split(``)
// populate letters loop
let lContainer = document.querySelector(`.letters`)
document.querySelector(`.statBar`).innerText = `Nackbook is running smoothly!`

for (let i = 0; i < letters.length; i++) {
    let l = document.createElement('div')
    l.classList.add('l')
    lContainer.appendChild(l)
}
let divL
// Comparison function
let lettersMatched = []
let breakCount = []
console.log(document.querySelectorAll(`.l`)[2])
function keycompare(elmt) {
    let breakCheck = []
    for (let i = 0; i < letters.length; i++) {   
         if (letters[i] === elmt.innerText) {        
        lettersMatched.push('l')
        breakCheck.push('l')
         document.querySelectorAll(`.l`)[i].innerText = letters[i]    
        }   
    }
    console.log(breakCheck)
    if (breakCheck.length !== 0) {
        alert('You chose the correct key! We Have progress! Sadly, this state-of-the-art key, is now broken.')
    } else {
        breakCount.push('b')
        console.log(breakCount)
        alert(`Oops! Wrong key!`)
    }
    if (lettersMatched.length < letters.length && breakCount.length === 1) {
        document.querySelector(`.statBar`).innerText = 'Your charging cable broke! Better hurry while the battery still works!'
    } else if (breakCount.length === 2) {
        
    }
    if (lettersMatched.length < letters.length && breakCount.length === 3) {
        
    }
    if (lettersMatched.length < letters.length && breakCount.length === 4) {

    }
    if (lettersMatched.length < letters.length && breakCount.length === 5) {
        document.querySelector(`.statBar`).innerText = `The coffee done been spilted accross your "Nackbook"! That can't be good!`
    } 
    if (lettersMatched.length < letters.length && breakCount.length === 6) {
        document.querySelector(`.statBar`).innerText = 'Your "Nackbook" has just undergone a mandatory OS update. It is now bricked. Better luck next time!'
        alert(`The Nackbook didnt make it. Our message is lost.`)
    }
    if (lettersMatched.length === letters.length && breakCount.length < 6) {
        alert('Message is complete! We have been saved!')
    }
}

// KBLine 1 variables
const kq = document.querySelector(`#kq`)
const kw = document.querySelector(`#kw`)
const ke = document.querySelector(`#ke`)
const kr = document.querySelector(`#kr`)
const kt = document.querySelector(`#kt`)
const ky = document.querySelector(`#ky`)
const ku = document.querySelector(`#ku`)
const ki = document.querySelector(`#ki`)
const ko = document.querySelector(`#ko`)
const kp = document.querySelector(`#kp`)

//KBline 2 variables
const ka = document.querySelector(`#ka`)
const ks = document.querySelector(`#ks`)
const kd = document.querySelector(`#kd`)
const kf = document.querySelector(`#kf`)
const kg = document.querySelector(`#kg`)
const kh = document.querySelector(`#kh`)
const kj = document.querySelector(`#kj`)
const kk = document.querySelector(`#kk`)
const kl = document.querySelector(`#kl`)

//KBline 3 variables
const kz = document.querySelector(`#kz`)
const kx = document.querySelector(`#kx`)
const kc = document.querySelector(`#kc`)
const kv = document.querySelector(`#kv`)
const kb = document.querySelector(`#kb`)
const kn = document.querySelector(`#kn`)
const km = document.querySelector(`#km`)

//KBline 1 Listeners
kq.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kq); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kw.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kw); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ke.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ke); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kr.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kr); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kt.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kt); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ky.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ky); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ku.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ku); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ki.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ki); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ko.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ko); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kp.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kp); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})

//KBline 2 Listeners
ka.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ka); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
ks.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(ks); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kd.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kd); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kf.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kf); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kg.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kg); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kh.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kh); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kj.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kj); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kk.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kk); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kl.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kl); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})

//KBline 3 Listeners
kz.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kz); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kx.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kx); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kc.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kc); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kv.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kv); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kb.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kb); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
kn.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(kn); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})
km.addEventListener(`click`, (evt) => {if(evt.target.classList.value === 'k') {keycompare(km); evt.target.classList.remove('k'); evt.target.classList.add('bk')} else {alert(`"Flutterby" Key is Broken!`)}})


if (breakCount.length === 1) {
    alert('Your charging cable broke! Better hurry while the battery still works!')
} else if (breakCount.length === 2) {
    alert('')
}
if (breakCount.length === 3) {
    alert('')
}
if (breakCount.length === 4) {
    alert('')
}
if (breakCount.length === 5) {
    alert(`The coffee done been spilted accross your "Nackbook"! That can't be good!`)
} 
if (breakCount.length === 6) {
    alert('Your "Nackbook" has just undergone a mandatory OS update. It is now bricked. Better luck next time!')
}

