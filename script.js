function imgSlider(e){
    document.querySelector(" .headimg").src = e;
}
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(" .number");

btn.forEach((button) => button.addEventListener("click", () =>{
    display.innerHTML = "0" + button.value;
})
);