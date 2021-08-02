let value = "";
let tempMemory = "";

const handleBtnClick = (btnValue) => {
  value += btnValue;
  setScreenValue(value);
  console.log(value); 
};

const setScreenValue = (value) => {
  const screen = window.document.getElementById("screen");
  screen.value = value;
};

const handleEquals = () => {
  let memory = value;
  let result = eval(memory);
  window.document.getElementById("screen").value = result;
  let tempMemory = result;
  value = tempMemory;
  console.log("tempMemory: "+ tempMemory); 
}

const screenClear = () => {
  value = "";
  setScreenValue(value);
};