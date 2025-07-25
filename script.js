const form=document.querySelector("form")
const w = document.getElementById("weight")
const h = document.getElementById("height")
console.log(form)
console.log(w)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    Evaluate();
})
function Evaluate(){
  const height=parseInt(h.value);
  const weight=parseInt(w.value);
  const result=document.querySelector("#results");
  //Weight and Height Check
  if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML = "Please provide a valid height";
  }
  else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHtml = "Please provide a valid weight";
  }
  //Calculate BMI
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  //display the results
  result.innerHTML = `<span>${bmi}</span>`

}