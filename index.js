const age = prompt("Please enter your age");
const kilometers = prompt("Please, enter how many kilometers is your trip");
const firstPrice = kilometers * 0.21;
const minorPrice = Math.round((20 / 100) * firstPrice);
const elderPrice = Math.round((40 / 100) * firstPrice);

if (age < 18 && age > 0) {
  alert(`You are a minor. Your final price is ${minorPrice} €`);
} else if (age >= 65) {
  alert(`You are an elder. Your final price is ${elderPrice} €`);
} else {
  alert("The value entered is not a number. Try again.");
}
