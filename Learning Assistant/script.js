let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; dots && i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    if (dots && dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
    }
}

// Placeholder functions for buttons
function summarizeContent() {
    const input = document.getElementById('summarizeInput').value;
    fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({inputs: input})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('summaryResult').textContent = data[0].summary_text;
    })
    .catch(error => console.error('Error:', error));
}

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
            headers: {
                Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

function generateAnswer() {
    const content = document.getElementById('questionsInput').value;
    const question = document.getElementById('questionInput').value;

    query({"inputs": {
        "question": question,
        "context": content
    }}).then((response) => {
        document.getElementById('answerResult').textContent = response.data[0].text;
    }).catch(error => console.error('Error:', error));
}
