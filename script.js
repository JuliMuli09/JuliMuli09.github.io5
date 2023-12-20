function calc() {
  var type_supplies = document.getElementById("type_supplies");
  var count = document.getElementById("count").value;
  if(count==""){alert("Вы не указали количество");}
  else{
    var price = 0;
    price += parseInt(type_supplies.options[type_supplies.selectedIndex].value);
    price = parseInt(count) * price;
    document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
  }
}
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("Вы должны использовать цифры.");
    return false;
  }
  return true;
}
