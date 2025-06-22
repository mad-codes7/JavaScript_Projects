let text = document.querySelector("#text");
let btn = document.querySelector("button");
let isblack=true;

btn.addEventListener("click",()=>{
    if(isblack){
        text.style.color="black"
        document.body.style.backgroundColor="white";
    }
    else{
        text.style.color="white"
        document.body.style.backgroundColor="black"; 
    }
    isblack=!isblack;
});
