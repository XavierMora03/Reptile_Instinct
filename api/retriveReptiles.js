const Http = new XMLHttpRequest();
const url = 'http://dh89u63wwk.execute-api.us-east-2.amazonaws.com';
// const url = 'http://localhost:8080/reptiles';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
