function addTableValue() {
  var firstnameInput = document.getElementById("firstname").value;
  var lastnameInput = document.getElementById("lastname").value;
  var bdayInput = document.getElementById("birthday").value;
  var genderInput = document.querySelector('input[name="genders"]:checked');

  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function(element) {
    element.remove();
  });

  var hasError = false;

  if (firstnameInput === "") {
    document.getElementById("firstname").classList.add("error");
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "*First name is required";
    errorMessage.classList.add("error-message");
    document.getElementById("firstname").parentNode.appendChild(errorMessage);
    hasError = true;
  } else {
    document.getElementById("firstname").classList.remove("error");
  }

  if (lastnameInput === "") {
    document.getElementById("lastname").classList.add("error");
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "*Last name is required";
    errorMessage.classList.add("error-message");
    document.getElementById("lastname").parentNode.appendChild(errorMessage);
    hasError = true;
  } else {
    document.getElementById("lastname").classList.remove("error");
  }

  if (bdayInput === "") {
    document.getElementById("birthday").style.borderColor = "blue";
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "*Birthday is required";
    errorMessage.classList.add("error-message");
    document.getElementById("birthday").parentNode.appendChild(errorMessage);
    hasError = true;
} else {
    document.getElementById("birthday").style.borderColor = ""; // Reset to default
}


  if (!genderInput) {
    validateGender();
    hasError = true;
  }

  if (hasError) {
    return; 
  }

  var table = document.getElementById("data");
  var row = table.insertRow(-1);
  var firstname = row.insertCell(0);
  var lastname = row.insertCell(1);
  var gender = row.insertCell(2);
  var bday = row.insertCell(3);
  firstname.innerHTML = firstnameInput;
  lastname.innerHTML = lastnameInput;
  bday.innerHTML = bdayInput;
  if (genderInput) {
    gender.innerHTML = genderInput.value;
  }

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("birthday").value = "";
  var radios = document.getElementsByName("genders");
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

function cancel() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("birthday").value = "";
  var radios = document.getElementsByName("genders");
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function(element) {
    element.remove();
  });
  document.getElementById("lastname").classList.remove("error");
  document.getElementById("firstname").classList.remove("error");
}

function checkKeyPress(event) {
  if (event.keyCode === 13) {
    addTableValue();
  }
}

function validateGender() {
  const genderError = document.getElementById("genderError");

  const existingErrorMessages = genderError.querySelectorAll(".error-message");
  existingErrorMessages.forEach(function(element) {
    element.remove();
  });

  genderError.classList.add("genderErrors");
  var errorMessage = document.createElement("p");
  errorMessage.textContent = "*Gender is required";
  errorMessage.classList.add("error-message");
  genderError.appendChild(errorMessage);
}
