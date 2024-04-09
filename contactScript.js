let scriptURL = "https://script.google.com/macros/s/AKfycbyZaWEs3lpy11kFWbHYpSzxndmavR7YYQRvmEHSyA-sXxg-kncb_mA7owuI0_ikNviQ/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit-button").textContent = "Please wait...";
    document.getElementById("submit-button").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit-button").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name-field").value = "";
                document.getElementById("email-field").value = "";
                document.getElementById("message-field").value = "";
                document.getElementById("submit-button").textContent = "Send";
                document.getElementById("submit-button").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("submit-button").textContent = "Please Try Again😘"
            document.getElementById("submit-button").disabled = false;
        });
});
