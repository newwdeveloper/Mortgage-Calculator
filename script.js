const principleAmount = document.querySelector("#money");
const years = document.querySelector(".year");
const interests = document.querySelector("#interestPer");
const repaymentCheck = document.querySelector("#repayment");
const interestCheck = document.querySelector("#interest");
const btn = document.querySelector("#submit");
const clearAll = document.querySelector("#clear");
const resultInterest = document.querySelector(".intShow");
const loan = document.querySelector(".loan");
const totRepayment = document.querySelector(".totRepay");

function checkInputs() {
  const amount = principleAmount.value.trim();
  const year = years.value.trim();
  const interest = interests.value.trim();
  btn.disabled = !(
    amount &&
    year &&
    interest &&
    (repaymentCheck.checked || interestCheck.checked)
  );
}

// Add event listeners to inputs and checkboxes to enable/disable the button
principleAmount.addEventListener("input", checkInputs);
years.addEventListener("input", checkInputs);
interests.addEventListener("input", checkInputs);
repaymentCheck.addEventListener("change", checkInputs);
interestCheck.addEventListener("change", checkInputs);

btn.addEventListener("click", function () {
  if (repaymentCheck.checked) {
    const amount = parseInt(principleAmount.value);
    const year = parseInt(years.value);
    const interest = parseInt(interests.value) / 100;

    if (
      !isNaN(amount) &&
      !isNaN(year) &&
      !isNaN(interest) &&
      amount > 0 &&
      year > 0 &&
      interest > 0
    ) {
      const intersetValue = amount * year * interest;
      const repyValue = intersetValue + amount;
      loan.innerText = `LOAN AMOUNT : ${amount} Rs`;
      loan.style.color = "black";
      totRepayment.innerText = ` REPAYMENT AMOUNT : ${repyValue} Rs`;
      totRepayment.style.color = "black";
    } else {
      alert("enter valid numbers");
      clearAll();
    }
  }
  if (interestCheck.checked) {
    const amount = parseInt(principleAmount.value);
    const year = parseInt(years.value);
    const interest = parseInt(interests.value) / 100;

    if (!isNaN(amount) && !isNaN(year) && !isNaN(interest)) {
      const intersetValue = amount * year * interest;
      const repyValue = intersetValue + amount;
      loan.innerText = `LOAN AMOUNT : ${amount} Rs`;
      loan.style.color = "black";
      resultInterest.innerText = ` INTEREST VALUE  : ${intersetValue} Rs`;
      resultInterest.style.color = "black";
    } else {
      alert("enter valid numbers");
      clearAll();
    }
  }
});

clearAll.addEventListener("click", function () {
  principleAmount.value = "";
  years.value = "";
  interests.value = "";
  repaymentCheck.checked = false;
  interestCheck.checked = false;
  resultInterest.innerText = "INTEREST VALUE";
  totRepayment.innerText = "TOTAL REPAYMENT";
  loan.innerText = "LOAN AMOUNT";
  resultInterest.style.backgroundColor = "";
  loan.style.backgroundColor = "";
  totRepayment.style.backgroundColor = "";
  btn.disabled = true;
});
