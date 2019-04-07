$(document).ready(function() {});

let sub = document.querySelector("#mybtn");
let recipient = document.querySelector("#recipient-name");
sub.addEventListener("click", remInput);
function remInput() {
  recipient.value = "";
  alert("Thank you for subscribing");
}
