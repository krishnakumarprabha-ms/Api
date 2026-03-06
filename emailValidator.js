function validateEmail() {
    let email = document.getElementById("emailInput").value;
    let result = document.getElementById("result");
    if (!email) {
        result.style.display = "block";
        result.textContent = "Please enter an E-mail";
        return;
    }
    const xhr = new XMLHttpRequest();
    const url = `https://api.api-ninjas.com/v1/validateemail?email=${email}`;
    xhr.open("GET", url, true);
    xhr.setRequestHeader('X-Api-Key', '/VeUVtjKLIE575uZcFEiXQ==2uPfRmrtRvFuuyxc');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result.style.display = "block";
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            let content = `<ul><li>Valid: ${data.is_valid}</li><li>E-Mail: ${data.email}</li><li>Domain: ${data.domain}</li><li>Local Part: ${data.local_part}</li><li>Disposable: ${data.is_disposable}</li></ul>`;
            result.innerHTML = content;
        }
    }
    xhr.send();
}