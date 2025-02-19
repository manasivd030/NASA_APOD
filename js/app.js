// Declaration of constants
const method = "GET";
const key = "KxusfycWULc1zvXGdmZHQwXBepaisiYWmI0fYdNq";
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + key;

// Load today's picture on page load
window.addEventListener('load', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    getDate();
});

function getDate() {
    const date = document.getElementById("date").value;
    setLoading(true);
    sendHttpRequest(method, `${baseUrl}&date=${date}`)
        .then(update)
        .catch(handleError)
        .finally(() => setLoading(false));
}

function setLoading(isLoading) {
    document.getElementById("apod_pic").style.opacity = isLoading ? 0.5 : 1;
}

function handleError(error) {
    const errorDiv = document.getElementById("error");
    errorDiv.style.display = "block";
    errorDiv.textContent = "Error loading image: " + error.message;
}

function update(data) {
    document.getElementById("error").style.display = "none";
    document.getElementById("pic_date").innerHTML = data.date;
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("apod_pic").src = data.url;
    document.getElementById("caption").innerHTML = data.explanation;
}

function sendHttpRequest(method, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    try {
                        const data = JSON.parse(this.response);
                        resolve(data);
                    } catch (e) {
                        reject(new Error('Invalid response format'));
                    }
                } else {
                    reject(new Error(`HTTP error! status: ${this.status}`));
                }
            }
        };

        req.onerror = () => reject(new Error('Network error'));
        req.open(method, url, true);
        req.send();
    });
}