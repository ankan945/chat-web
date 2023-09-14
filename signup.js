const form = document.querySelector(".signup form");
const continueBtn = form.querySelector(".button input");

form.onsubmit = (event)=>{
     event.preventDefault();  //prevents automatic form submission
}

continueBtn.onclick = ()=>{
    console.log("yooo");
}