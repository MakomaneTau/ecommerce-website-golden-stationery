const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");


if(bar){
    bar.addEventListener("click", () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener("click", () =>{
        nav.classList.remove('active');
    })
}

document.addEventListener("click", (event) => {
    if (nav.classList.contains('active') && !nav.contains(event.target) && !bar.contains(event.target)) {
        nav.classList.remove('active');
    }
});