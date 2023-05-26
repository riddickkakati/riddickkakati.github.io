let date = new Date();//Create a date object.
let currentHour = date.getHours();
let createTxtMsg;
if (currentHour >= 4 && currentHour < 10) {
  createTxtMsg = "Good Morning! <br>Welcome to my personal website <br><br>";//If we created the variable inside loop, we could not grab/extract the variable outside the if condition. Thats why we created an empty variable first and assigned values to it based on the condtions.
} else if (currentHour >= 10 && currentHour < 12) {
  createTxtMsg = "Good Day! <br>Welcome to my personal website <br><br>";
} else if (currentHour >= 12 && currentHour < 18) {
  createTxtMsg = "Good Afternoon! <br>Welcome to my personal website <br><br>";
} else if (currentHour >= 18 && currentHour < 22) {
  createTxtMsg = "Good Evening! <br>Welcome to my personal website <br><br>";
} else if (currentHour >= 22 || currentHour < 4) {
  createTxtMsg = "Its a lovely night! <br>Welcome to my personal website <br><br>";
} else {
  createTxtMsg = "Hello! <br>Welcome to my personal website <br><br>";
}
document.querySelector("#welcome").innerHTML = createTxtMsg;
