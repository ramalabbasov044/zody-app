/** Blog api **/

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-language", "ru");

var formdata = new FormData();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};

fetch("https://zody.tech/api/v1/site/blog", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

/** Blog show **/

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-language", "ru");

var formdata = new FormData();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};

fetch("https://zody.tech/api/v1/site/blog/7-facts-about-astrology-that-prove-that-it-works", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



/** Contact api **/

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-language", "ru");

var raw = JSON.stringify({
    "name": "Ramal",
    "surname": "Abbasov",
    "email": "ramal@gmail.com",
    "body": "Salam,"
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://zody.tech/api/v1/site/contact", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
