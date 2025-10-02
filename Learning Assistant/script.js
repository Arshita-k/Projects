let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; dots && i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    if (dots && dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// 🔐 Secure summarizeContent using serverless function
function summarizeContent() {
    const input = document.getElementById('summarizeInput').value;
    fetch("/api/huggingface", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: "facebook/bart-large-cnn",
            inputs: input
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('summaryResult').textContent = data?.summary_text || "No summary found.";
        })
        .catch(error => console.error('Error:', error));
}

// 🔐 Secure query using serverless function
async function query(data) {
    try {
        const response = await fetch("/api/huggingface", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "deepset/roberta-base-squad2",
                inputs: data.inputs
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error in query function:", error);
        throw error;
    }
}

function generateAnswer() {
    const content = document.getElementById("questionsInput").value;
    const question = document.getElementById("questionInput").value;

    query({
        inputs: {
            question: question,
            context: content,
        },
    })
        .then((response) => {
            document.getElementById("answerResult").textContent =
                response?.answer || "No answer found.";
        })
        .catch((error) => {
            document.getElementById("answerResult").textContent =
                "Error fetching the answer. Please try again.";
        });
}
