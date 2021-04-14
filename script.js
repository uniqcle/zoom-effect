const container = document.getElementById("container"); 
const numberX = document.querySelector("#number #x"); 
const numberY = document.querySelector("#number #y"); 
const img = document.querySelector("img")

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";

}); 

container.addEventListener("mouseleave", e=>{
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
})