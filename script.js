const valuesArray = [
  { value: "DeFi", colorClass: "text-red-400" },
  { value: "Payment", colorClass: "text-green-400" },
  { value: "Web3", colorClass: "text-yellow-300" },
];

const spanElement = document.getElementById("changeSpan");

let currentIndex = 0;

function changeSpanContent() {
  spanElement.classList.add("animate__fadeOutUp");

  setTimeout(() => {
    // Update content and apply color class
    spanElement.innerHTML = valuesArray[currentIndex].value;
    spanElement.classList.remove("animate__fadeOutUp");
    spanElement.classList.remove("text-yellow-300");
    spanElement.classList.add("animate__fadeInUp");
    spanElement.classList.add(valuesArray[currentIndex].colorClass);

    // Remove color class after animation completes
    spanElement.addEventListener("animationend", () => {
      spanElement.classList.remove(valuesArray[currentIndex].colorClass);
    });

    currentIndex = (currentIndex + 1) % valuesArray.length;
  }, 1000);
}

setInterval(changeSpanContent, 2500);

let joinBtn = document.getElementById("join");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

joinBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("animate__fadeIn");
  document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
  document.getElementById("blur").classList.add("blur");
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("animate__fadeIn");
  document
    .getElementsByTagName("body")[0]
    .classList.remove("overflow-y-hidden");
  document.getElementById("blur").classList.remove("blur");
});

// write a form validation function and display error messages beflow the input fields

let form = document.getElementById("form");
let email = document.getElementById("email");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let emailError = document.getElementById("emailError");
let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "" || !email.value.includes("@")) {
    emailError.innerHTML = "Please enter valid email";
    emailError.classList.remove("hidden");
    email.classList.add("border-red-500");
  } else {
    emailError.classList.add("hidden");
    email.classList.remove("border-red-500");
  }

  if (fname.value === "") {
    fnameError.innerHTML = "Please enter your name";
    fnameError.classList.remove("hidden");
    fname.classList.add("border-red-500");
  } else {
    fnameError.classList.add("hidden");
    fname.classList.remove("border-red-500");
  }

  if (lname.value === "") {
    lnameError.innerHTML = "Please enter your message";
    lnameError.classList.remove("hidden");
    lname.classList.add("border-red-500");
  } else {
    lnameError.classList.add("hidden");
    lname.classList.remove("border-red-500");
  }
});
