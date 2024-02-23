import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
const buttonCalendar = document.querySelector("button[data-start]")
const inputCalendar = document.querySelector("#datetime-picker")
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= options.defaultDate) {
            alert("Please choose a date in the future")
            buttonCalendar.disabled = true
        } else {
            buttonCalendar.disabled = false
        }
    console.log(selectedDates[0]);
  },
};

 let userSelectedDate 

flatpickr(inputCalendar, options);

buttonCalendar.addEventListener("click", haha)

function haha() {
    console.log("hi")
}