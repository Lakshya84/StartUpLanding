// sets the error according to id
function setError(id, message) {
  var element = document.getElementById(id + "-error");
  if (element) element.innerText = message;
}

// clears the error
function clearError(id) {
  var element = document.getElementById(id + "-error");
  if (element) element.innerText = "";
}

function validateForm() {
  var returnVal = true;

  // Name Validation
  var fullname = document.getElementById("fullname").value.trim();
  clearError("fullname");
  if (fullname.length === 0) {
    setError("fullname", "Please enter your name");
    returnVal = false;
  }

  // Email Validation
  var email = document.getElementById("email").value.trim();
  clearError("email");
  if (email.length === 0) {
    setError("email", "Please enter your email");
    returnVal = false;
  }

  // Phone Validation
  var phone = document.getElementById("phone").value.trim();
  clearError("phone");
  if (!/^\d{10}$/.test(phone)) {
    setError("phone", "Phone number should be exactly 10 digits");
    returnVal = false;
  }

  // Date of Birth
  var dob = document.getElementById("dob").value;
  clearError("dob");
  if (!dob) {
    setError("dob", "Please enter your date of birth");
    returnVal = false;
  }

  // Gender
  var gender = document.getElementById("gender").value;
  clearError("gender");
  if (gender === "") {
    setError("gender", "Please select your gender");
    returnVal = false;
  }

  // City, State, Country
  var city = document.getElementById("city").value.trim();
  var state = document.getElementById("state").value.trim();
  var country = document.getElementById("country").value.trim();

  if (city.length < 3) {
    setError("city", "Please enter valid city");
    returnVal = false;
  }
  if (state.length === 0) {
    setError("state", "Please enter your state");
    returnVal = false;
  }
  if (country.length < 3) {
    setError("country", "Please enter valid country name");
    returnVal = false;
  }

  // Message
  var message = document.getElementById("message").value.trim();
  clearError("message");
  if (message.length === 0) {
    setError("message", "Please enter your message");
    returnVal = false;
  }

  // CV Upload
  var cv = document.getElementById("cv");
  clearError("cv");
  if (cv.files.length === 0) {
    setError("cv", "Please upload your CV");
    returnVal = false;
  } else {
    var cvFileName = cv.files[0].name;
  }

  // Terms and Conditions
  var terms = document.getElementById("terms").checked;
  clearError("terms");
  if (!terms) {
    setError("terms", "You must agree to the terms and conditions");
    returnVal = false;
  }

  // If validation is successful, store data in localStorage
  if (returnVal) {
    var formData = {
      fullname: fullname,
      email: email,
      phone: phone,
      dob: dob,
      gender: gender,
      city: city,
      state: state,
      country: country,
      message: message,
      cvFileName: cvFileName, // Just storing filename (not file itself) because localstorage only have less than 5MB space
      termsAccepted: terms,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form data saved successfully!");
  }

  return returnVal;
}

function loadFormData() {
  var storedData = localStorage.getItem("formData");

  if (storedData) {
    var formData = JSON.parse(storedData);

    document.getElementById("fullname").value = formData.fullname || "";
    document.getElementById("email").value = formData.email || "";
    document.getElementById("phone").value = formData.phone || "";
    document.getElementById("dob").value = formData.dob || "";
    document.getElementById("gender").value = formData.gender || "";
    document.getElementById("city").value = formData.city || "";
    document.getElementById("state").value = formData.state || "";
    document.getElementById("country").value = formData.country || "";
    document.getElementById("message").value = formData.message || "";
    document.getElementById("terms").checked = formData.termsAccepted || false;
  }
}

// Load form data when the page loads
window.onload = loadFormData;
