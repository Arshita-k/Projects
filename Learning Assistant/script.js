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
            'Authorization': apikey,
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
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
            {
                headers: {
                    Authorization: apikey,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error in query function:", error);
        throw error; // Re-throw to handle it in `generateAnswer`
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
            console.log(response); // Log response to check its structure
            // Assuming the response has `answer` in its structure
            document.getElementById("answerResult").textContent =
                response?.answer || "No answer found.";
        })
        .catch((error) => {
            console.error("Error in generateAnswer function:", error);
            document.getElementById("answerResult").textContent =
                "Error fetching the answer. Please try again.";
        });
}


