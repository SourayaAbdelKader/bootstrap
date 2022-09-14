// fct takes a JSON link as a parameter and display its content in HTML elements

const contacts = (link) => {
    fetch(link)
    .then((response) => response.json())
    .then((data) => {
        let main_container = document.getElementById("box");
        for (var i=0; i< data.length; i++){
            var div = document.createElement("div");
            div.innerHtml = 'Name: ' + data[i].name + ' Email: ' + data[i].email + ' Phone: ' + data[i].phone + " Message" + data[i].message
            main_container.appendChild(div)
        }
    })
    .catch(error => {
        console.error('There was an error!');
    });
};

contacts(link)