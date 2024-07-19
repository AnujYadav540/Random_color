let mybt = document.getElementById("mybtn");
mybt.addEventListener("click" , generate_random_color);
function generate_random_color()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    // document.body.style.backgroundColor = color; 

 let random_col_div = document.getElementById("random");

random_col_div.style.backgroundColor = color;

let colorcode = document.querySelector("h1");
colorcode.innerHTML = color;
};

