//Full Names should be a minimum of 5 characters
function validateFullName(full_name) {
    full_name.replace(/ /g, "") //to remove white spaces
    if (full_name.length < 5) {
      return false;
    };
    return true;
};

//Email field should be an email, with a minimum of 3 characters before the @ and 5 characters after the @. 
function validateEmail(email) {
    let email_array = email.split("@");
    if (email_array[0].length < 3 || email_array[1].length <5) {
        return false;
    }; 
    return true;
};

//Phone Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234).
function validatePhoneNumber(phone_number) {
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
    return true;
};

//Message should be a minimum of 100 characters.
function validateMessage(message) {
    message.replace(/ /g, "") //to remove white spaces
    if (message.length < 100) {
      return false;
    };
    return true
};

//If the validation fails, please show a div (section) under the Contact Me title highlighting what went wrong with a red background. 
const button = document.getElementById("button");
const error = document.getElementById("error");
let messag_box = document.getElementById("message");
let phone_number_box = document.getElementById("phone_number");
let email_box = document.getElementById("email");
let full_name_box = document.getElementById("full_name");

button.addEventListener("click", () => {
    let name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;
    let message = document.getElementById("message").value;

    tag = document.createElement('div');
    if (name.length != 0){
        if (! validateFullName(name)) {
            text = document.createTextNode("Full Names should be a minimum of 5 characters.");
            tag.appendChild(text);
            error.appendChild(tag);
            full_name_box.classList.add("red-border");
        };
    } ;
    if (email.length != 0){
        if (! validateEmail(email)) {
            text = document.createTextNode("Enter a valid email.");
            tag.appendChild(text);
            error.appendChild(tag);
            email_box.classList.add("red-border");
        };
    }
    if (phone_number.length != 0){
        if (! validatePhoneNumber(phone_number)){
            text = document.createTextNode("Enter a valid phone number.");
            tag.appendChild(text);
            error.appendChild(tag);
            phone_number_box.classList.add("red-border");
        };

    }
    if (phone_number.length != 0){
        if (! validateMessage(message)){
            text = document.createTextNode("Enter a valid message: your message should be at least 100 character.");
            tag.appendChild(text);
            error.appendChild(tag);
            messag_box.classList.add("red-border");
        }};
});