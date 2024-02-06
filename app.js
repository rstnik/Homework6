let yearOfBirth = prompt("Enter your year of birth");
if (yearOfBirth !== null) {
  parseInt(yearOfBirth);
  while (isNaN(yearOfBirth) || yearOfBirth < 1900 || yearOfBirth > 2024) {
    alert(`Please enter the correct year of birth`);
    yearOfBirth = parseInt(prompt("Enter your year of birth"));
  }
} else {
  alert("Too bad you chose not to enter your birth year.");
}
let cityOfResidence = prompt("Enter your city of residence");
if (cityOfResidence !== null) {
  while (!isNaN(cityOfResidence)) {
    alert(`Please enter the correct city of residence`);
    cityOfResidence = prompt("Enter your city of residence");
  }
} else {
  alert("Too bad you chose not to enter city of residence");
}
let favoriteSport = prompt("Enter your favorite sport");
if (favoriteSport !== null) {
  while (!isNaN(favoriteSport)) {
    alert(`Please enter the correct favorite sport`);
    favoriteSport = prompt("Enter your favorite sport");
  }
} else {
  alert("Too bad you chose not to enter favorite sport");
}
let ourYear = 2024;
let age = ourYear - yearOfBirth;
if (age == ourYear) {
  age = "unknown";
} else if (cityOfResidence == null) {
  cityOfResidence = "unknown";
} else if (favoriteSport == null) {
  favoriteSport = "unknown";
}
let capital = `You live in ${cityOfResidence}`;
switch (cityOfResidence) {
  case "Київ":
  case "Київ":
  case "Kyiv":
  case "Kiev":
  case "Киев":
    capital = "You live in the capital of Ukraine";
    break;
  case "Вашингтон":
  case "Washington":
    capital = "You live in the capital of the United States";
    break;
  case "Лондон":
  case "Washington":
    capital = "You live in the capital of the United Kingdom";
}
let sportDream = "";
switch (favoriteSport) {
  case "Football":
  case "football":
  case "Футбол":
  case "футбол":
    sportDream = "Cool! Do you want to be like Lionel Messi?";
    break;
  case "Basketball":
  case "basketball":
  case "Баскетбол":
  case "баскетбол":
    sportDream = "Cool! You want to be like Michael Jordan?";
    break;
  case "Volleyball":
  case "volleyball":
  case "Волейбол":
  case "волейбол":
    sportDream = "Cool! You want to be like Simone Gianelli?";
    break;
}
alert(
  `Your age is ${age}\n${capital}\nYour favorite sport is ${favoriteSport}\n${sportDream}`
);
