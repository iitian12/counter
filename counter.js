let count = 0;

const buttons = document.querySelectorAll(".js-option");
const number = document.querySelector(".js-seen");
const one = document.querySelector(".js-one");
const two = document.querySelector(".js-two");
const three = document.querySelector(".js-three");

buttons.forEach(function (change) {
  change.addEventListener("click", function (show) {
    const event = show.currentTarget.classList;
    if (event.contains("decrease")) {
      count--;
    } else if (event.contains("increase")) {
      count++;
    } else if (event.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      number.style.color ="lightgreen";
    } else if (count < 0) {
      number.style.color = "brown";
    } else {
      number.style.color = "whitesmoke";
    }

    number.innerHTML = count;
  })
})

one.addEventListener("click", function () {
  count += 10;
  number.innerHTML = count;
})

two.addEventListener("click", function () {
  count += 100;
  number.innerHTML = count;
})

three.addEventListener("click", function () {
  count += 1000;
  number.innerHTML = count;
})






















// btns.forEach(function (btn) {
//   btn.addEventListener("click", function(Event){
//     const styles = Event.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains('increase')) {
//       count++;
//     } else {
//       count = 0;
//     }
//     value.innerHTML = count;
//   })
// }
// )