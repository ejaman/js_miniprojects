const bill = document.querySelector(".bill");
const custom = document.querySelector(".custom");
const num = document.querySelector(".num");
const btns = document.querySelector(".btns");
const tipP = document.querySelector(".tipPerP");
const totalP = document.querySelector(".totalPerP");
const resetBtn = document.querySelector(".restBtn");

let tip = "";
btns.addEventListener("click", (event) => {
  tip = event.target;
  if (tip.matches(".tip")) {
    custom.value = "";
    onCalculate(tip);
  }
});

custom.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    onCalculate(custom);
  }
});

num.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    custom.value === "" ? onCalculate(tip) : onCalculate(custom);
  }
});

// reset
resetBtn.addEventListener("click", () => {
  onRest();
});

// 계산 기능을 밖으로?

function onCalculate(target) {
  // 커스텀 값이 있다면 초기화해줌
  num.value === "" ? (num.value = 1) : num.value;
  const tipamount = (bill.value * 0.01 * target.value) / num.value;
  tipP.innerText = `$ ${tipamount}`;
  totalP.innerText = `$ ${tipamount + bill.value / num.value}`;
  console.log(target.value);
  check = target.value;
}

// 리셋 기능
function onRest() {
  bill.value = "";
  custom.value = "Custom";
  num.value = "";
  // reset inputs and focus on bill input
  bill.focus();
}
