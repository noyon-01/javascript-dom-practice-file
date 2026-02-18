// !JavaScript Dom Adeventlistener Click Function Starts Here! //
document.getElementById("change_heading_btn").addEventListener("click", function () {
    const input_element = document.getElementById("input_fild");
    const input_value = input_element.value;
    const newHeading = document.createElement("h1");
    newHeading.innerText = input_value;
    const heading1 = document.getElementById("heading1");
    heading1.appendChild(newHeading);
  });
