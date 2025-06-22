let output = document.querySelector("#output");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let value=0;
output.innerHTML=value;

increment.addEventListener("click",()=>{
    value++;
    update();
})
decrement.addEventListener("click",()=>{
    value--;
    update();
})
reset.addEventListener("click",()=>{
    value=0;
    update();
})



function update(){
    output.innerHTML=value;
}