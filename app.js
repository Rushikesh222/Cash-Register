const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
checkBtn.addEventListener("click", function calidedateBillAndCashAmount() {
  hidemessage();

  if (billAmount.value > 0) {
    //12
    if (cashGiven.value > billAmount.value) {
      //2022>12 // true
      const amountTobeReturned = cashGiven.value - billAmount.value; //2022-12=2010
      calculateChange(amountTobeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function calculateChange(amountTobeReturned) {
  //2010
  //go over all the avilable
  for (let i = 0; i < availableNotes.length; i++) {
    // no of notes need for the denomination
    const numberOfNotes = Math.trunc(amountTobeReturned / availableNotes[i]);
    //2010 /2000 = 1 || 10 - 500 = 0
    //amount left after calculating in the number of notes needed
    amountTobeReturned %= availableNotes[i]; //2010 % 2000 = 10 || 10% 500 =10
    // updateing  the no of notes in the table for the current amount
    noOfNotes[i].innerText = numberOfNotes;
  }
}
function hidemessage() {
  errorMessage.style.display = "none";
}
function showMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}
