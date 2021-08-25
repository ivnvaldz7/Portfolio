let text = document.querySelector('.banner_text--title')
let str = text.innerHTML
text.innerHTML = ''
let speed = 230
let count = 0
const typing = ()=>{
    if(count < str.length){
        text.innerHTML += str.charAt(count)
        count++
        setTimeout(typing, speed)
    }
}
setTimeout(typing, speed)