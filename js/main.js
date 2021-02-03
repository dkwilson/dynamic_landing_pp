// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  user = document.getElementById("user"),
  focus = document.getElementById("focus");

// options
const showAmPm = true;

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12nr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    // evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  }
}

// get user
function getUser() {
  if (localStorage.getItem("user") === null) {
    user.textContent = "[Enter User]";
  } else {
    user.textContent = localStorage.getItem("user");
  }
}

// set user
function setUser(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("user", e.target.innerText);
      user.blur();
    }
  } else {
    localStorage.setItem("user", e.target.innerText);
  }
}

// get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

user.addEventListener("keypress", setUser);
user.addEventListener("blur", setUser);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// run
showTime();
setBgGreet();
getUser();
getFocus();
