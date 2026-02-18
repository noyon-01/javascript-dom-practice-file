// !JavaScript Dom Adeventlistener Click Event Function Starts Here! //
document
  .getElementById("change_heading_btn")
  .addEventListener("click", function () {
    const heading1 = document.getElementById("heading1");
    heading1.innerText =
      "I Love To Programming and I Also Love To Writting Code";
  });

// !JavaScript Dom Adeventlistener Mouse Events Function Starts Here! //
document
  .getElementById("mouse_event")
  .addEventListener("mouseenter", function () {
    console.log("Mouse is Successfully Entered");
  });

document
  .getElementById("mouse_event")
  .addEventListener("mouseover", function () {
    console.log("Mouse is Successfully Overed");
  });

document
  .getElementById("mouse_event")
  .addEventListener("mousemove", function () {
    console.log("Mouse is Successfully Moved");
  });

document.getElementById("mouse_event").addEventListener("mouseup", function () {
    console.log("Mouse is Successfully Up")
});

document
  .getElementById("mouse_event")
  .addEventListener("mousedown", function () {
    console.log("mouse is Successfully down");
  });

document
  .getElementById("mouse_event")
  .addEventListener("mouseleave", function () {
    console.log("Mouse is Successfully Leaved");
  });
