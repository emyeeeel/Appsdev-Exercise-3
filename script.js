const side1 = 6;
const side2 = 7;
const side3 = 8;

const semi = (side1 + side2 + side3) / 2;

const area = Math.sqrt(semi * (semi-side1) * (semi-side2) * (semi-side3));

function calculate(){
    const result = document.getElementById('result');
    result.innerHTML = area;
}