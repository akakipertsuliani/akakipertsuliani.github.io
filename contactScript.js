const scriptURL = 'https://script.google.com/macros/s/AKfycbzRKilu_nPN9Tuaf4YVZOzYOojFR0xCtq8HvBin5P3cf9h2-BPrSGcdJcwWjlM7BFVv/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("response").innerHTML = "Please wait...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("response").innerHTML = "Send Succesfuly🤩"
            setTimeout(() => {
                document.getElementById("response").innerHTML = "";
            }, 3500);
        }).catch(error => document.getElementById("response").innerHTML = "Please Try Again😘");
});
