// Get DOM elements
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");
const display = document.getElementById("display");

// 1️⃣ Save data to local storage
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  if (name) {
    localStorage.setItem("username", name);
    alert("Name saved!");
    nameInput.value = "";
  } else {
    alert("Please enter a name");
  }
});

// 2️⃣ Show data from local storage
showBtn.addEventListener("click", () => {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    display.textContent = `Saved Name: ${storedName}`;
  } else {
    display.textContent = "No name found in local storage";
  }
});

// 3️⃣ Clear data from local storage
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  display.textContent = "";
  alert("Name cleared!");
});

// 4 Bonus Example – Store an Object
const user = { name: 'Noyon', age: 23 };
localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);
console.log(storedUser.age);
