const Http = new XMLHttpRequest();
const url = 'http://localhost:8080/reptiles';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}