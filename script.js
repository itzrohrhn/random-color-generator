//arrow function definition for generating random colors
const color = () => {
    //generationg random hex numbers for the hex color codes.
    const randNum = Math.floor(Math.random()*16777215);
    const randCode = "#"+randNum.toString(16);
    console.log(randCode);
    document.body.style.backgroundColor = randCode;
    document.getElementById("color-code").innerHTML = randCode;
}
//button and tag work
document.getElementById("btn").addEventListener("click",color);
const btn = document.getElementById("btn");
const tag = document.getElementById("tag");
//setting the styling and text when the button is clicked
btn.addEventListener("click",function(){
    btn.innerHTML = "Click Me";
    tag.style.boxShadow = `10px 10px 10px ${randCode}`;
});
