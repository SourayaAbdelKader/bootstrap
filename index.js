//Full Names should be a minimum of 5 characters
function validateFullName() {
    let full_name = document.getElementById("full_name").value;
    if (full_name.length < 5) {
      return false;
    };
};

//Email field should be an email, with a minimum of 3 characters before the @ and 5 characters after the @. 
function validateEmail() {
    let email = document.getElementById("email").value;
    let email_array = text.split("@");
    if (email_array[0].length < 3 || email_array[1].length <5) {
        return false;
    }; 
};

//Phone Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234).
function validatePhoneNumber() {
    let phone_numer = document.getElementById("phone_number").value;
    if (x == "") {
      return false;
    };

}

//Message should be a minimum of 100 characters.
function validateMessage() {
    let message = document.getElementById("message").value;
    if (message.length < 100) {
      return false;
    };
};

//If the validation fails, please show a div (section) under the Contact Me title highlighting what went wrong with a red background. 