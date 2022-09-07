const BillAmount = document.querySelector("#billAmount");
const dateOfBirth = document.querySelector(".date-of-birth");
const btnCheck = document.querySelector("#check-number");
const LuckyNumber = document.querySelector(".lucky-number");
const Message = document.querySelector(".Message");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    Message.innerText = "your birthday date is lucky";
  } else {
    Message.innerText = "your birthday date is not lucky";
  }
}
function checkBirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, LuckyNumber.value);
  }
  Message.innerText = "please enter the both the field";
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

btnCheck.addEventListener("click", checkBirthdateIsLucky);
