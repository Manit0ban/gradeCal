
document.getElementById("btn").addEventListener("click", cal)

function cal() {
    let i1 = +document.getElementById("in-1").value;
    let i2 = +document.getElementById("in-2").value;
    let i3 = +document.getElementById("in-3").value;
    let i4 = +document.getElementById("in-4").value;
    let i5 = +document.getElementById("in-5").value;

    let grade2 = (i1 + i2 + i3 + i4 + i5) / 5;
    
    document.getElementById("span").innerHTML = grade2;
}

document.getElementById("btn2").addEventListener("click", calHy)

function calHy() {
    
let a = +document.getElementById("a-in").value; 
let b = +document.getElementById("b-in").value;
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));


document.getElementById("span2").innerHTML = c;







}