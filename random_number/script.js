let text = document.querySelector('#text')
let btn = document.querySelector('button')
let value=0;
btn.addEventListener('click',()=>{
    value=Math.floor(Math.random() * (100 - 1 + 1)) + 1
    show();
})

const show=()=>{
    text.innerHTML=value;
}