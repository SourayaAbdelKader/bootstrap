//Full Names should be a minimum of 5 characters
function validateFullName() {
    let full_name = document.getElementById("full_name").value;
    full_name.replace(/ /g, "") //to remove white spaces
    if (full_name.length < 5) {
      return false;
    };
    return true
};

//Email field should be an email, with a minimum of 3 characters before the @ and 5 characters after the @. 
function validateEmail() {
    let email = document.getElementById("email").value;
    let email_array = email.split("@");
    if (email_array[0].length < 3 || email_array[1].length <5) {
        return false;
    }; 
    return true;
};

//Phone Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234).
function validatePhoneNumber() {
    let phone_number = document.getElementById("phone_number").value;
    if (phone_number.slice(0, 4) != "+961") {
        return false
    }
    if (phone_number[4] == 3) {
        if (phone_number.slice(4,).length != 7) {
            return false
        }
    } else if (phone_number.slice(4,).length != 8){
        return false;
    };
    return true
};

//Message should be a minimum of 100 characters.
function validateMessage() {
    let message = document.getElementById("message").value;
    message.replace(/ /g, "") //to remove white spaces
    if (message.length < 100) {
      return false;
    };
    return true
};

//If the validation fails, please show a div (section) under the Contact Me title highlighting what went wrong with a red background. 
const button = document.getElementById("button");
const error = document.getElementById("error");
const messag_box = document.getElementById("message");
const phone_number = document.getElementById("phone_number");
const email_box = document.getElementById("email");
const full_name_box = document.getElementById("full_name");

button.addEventListener("click", () => {
    tag = document.createElement('div');
    if (!validateFullName()) {
        text = document.createTextNode("Full Names should be a minimum of 5 characters.");
        tag.appenChild(text);
        error.appendChild(tag);
        full_name_box.addClass("red-border");
    };
    if (!validateFullName()) {
        text = document.createTextNode("Full Names should be a minimum of 5 characters.");
        tag.appenChild(text);
        error.appendChild(tag);
        button.addClass("red-border");
    };

}
);