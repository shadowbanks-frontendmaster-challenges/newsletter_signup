const signupForm = document.querySelector(".signup-form");
const emailInput = document.querySelector("#email");
const signupErr = document.querySelector(".signup-email-err");
const body = document.querySelector("body");
const signup = document.querySelector(".signup");
const signupSuccess = document.querySelector(".signup-success");
const dismissBtn = document.querySelector(".signup-success-dismiss-btn");

// console.log(body);
console.log(signup, signupSuccess);
// console.log(signupForm, emailInput, signupErr);
emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    signupErr.textContent = ""; // remove the error message
    emailInput.classList.remove("error"); // add error class to the input
  } else {
    showErr();
  }
});

signupForm.addEventListener("submit", (event) => {
  if (!emailInput.validity.valid) {
    showErr();
    event.preventDefault(); // prevent the form submission
  } else {
    signup.classList.add("hide");
    signupSuccess.classList.remove("hide");
    emptyInput();
    event.preventDefault(); // prevent the form submission
  }
});

dismissBtn.addEventListener("click", () => {
  signupSuccess.classList.add("hide");
  signup.classList.remove("hide");
});

const emptyInput = () => {
  emailInput.value = "";
};

const showErr = () => {
    emailInput.classList.add("error");
    signupErr.textContent = "Valid email required";
};