const numbers = document.querySelectorAll(".number");
console.log(numbers);

const calculatorScreen = document.querySelector(`.calculator-screen`);

const updateScreen=(number) => {
  calculatorScreen.value =number;
}

numbers.forEach((number) => {
  number.addEventListener("click",(event) =>{
    inputNumber(event.target.value);
    updateScreen(currentInput);
    console.log(event.target.value);
  });

});
let prevInput ="0";
let calculationOperator="";
let currentInput="0";
const inputNumber =(number)=> {
  if(currentInput===`0`)
  {
    currentInput=number;
  }else {
    currentInput+=number;
  }

}

const operators= document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click",(event) =>{
  inputOperator(event.target.value);
    updateScreen(calculationOperator);
 });
});

const inputOperator=(operator)=> {
  prevInput=currentInput;
  calculationOperator=operator;
  currentInput=`0`;
}

const equalSign= document.querySelector(`.equal-sign`);
equalSign.addEventListener("click",()=>{
  calculate();
  updateScreen(currentInput);
  console.log("equal button is pressed");
})

const calculate =()=> {
  let result=0;
 switch (calculationOperator) {
   case `+`:
     result=parseInt(prevInput)+parseInt(currentInput);
     break;
   case `-`:
     result=parseInt(prevInput) - parseInt(currentInput);
     break;
  case `*`:
     result=parseInt(prevInput) * parseInt(currentInput);
     break;
   case `/`:
      result=parseInt(prevInput) / parseInt(currentInput);
      break;
    case `%`:
      result=parseInt(prevInput) % parseInt(currentInput);
      break;


      default:
      return;


 }
 currentInput=result.toString();
 calculationOperator="";
}

const clear =document.querySelector(`.backspace`);

clear.addEventListener (`click`,()=>{
  backsp();
  updateScreen(currentInput);
})

const backsp=() => {
  "calculatorScreen.value =calculatorScreen.value.substr(0, calculatorScreen.value.length -1)";
 if(calculatorScreen.value !=0) {
   prevInput=`currentInput`;
   currentInput=`  `;
   calculationOperator="";
 }else {
   prevInput=`0`;
   calculationOperator="";
   currentInput=`0`;
 }

}





const clearBtn=document.querySelector(`.all-clear`);

clearBtn.addEventListener (`click`,()=>{
  clearAll();
  updateScreen(currentInput);
})

const clearAll=() => {
prevInput=`0`;
calculationOperator="";
currentInput=`0`;}
