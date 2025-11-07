document.addEventListener("DOMContentLoaded",()=>{
    let model = document.querySelector(".modal-overlay");
    let button = document.querySelector(".modal-overlay .modal button");
    let wrap = document.querySelector(".wrap")
    setTimeout(()=>{
        model.style.display = "flex";
        wrap.style.filter = "blur(4px)";
    },1000);
    button.addEventListener("click", ()=>{
        model.style.display = "none";
        wrap.style.filter = "blur(0px)";
    })
    
})