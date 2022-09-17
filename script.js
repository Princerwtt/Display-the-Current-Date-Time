// Write Your Code
// Expected Output in Console: 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let date = new Date();
let arrayofdays =
  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let day = date.getDay();
console.log("Today is :", arrayofdays[day], ".");

function getAmPm() {
  let meridian = "";
  let hours = date.getHours();
  if (hours > 12.) {
    meridian = "PM";
  }
  else {
    meridian = "AM";
  }

  let minute = date.getMinutes();
  let second = date.getSeconds();
  let totaltime = hours + " " + meridian + " : " + minute + " : " + second;
  return (totaltime);
}
console.log("current time is : ", getAmPm());
