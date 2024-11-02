document.addEventListener("DOMContentLoaded", function() {
    const quizForms = document.querySelectorAll("form");

    quizForms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const input = form.querySelector("input[type='text']");
            const resultDiv = form.nextElementSibling;
            let correctAnswer = "";

            // Vérifiez les réponses correctes pour chaque matière
            switch (input.name) {
                case "math_answer":
                    correctAnswer = "fonction quadratique est une fonction polynomiale de degré 2";
                    break;
                case "science_answer":
                    correctAnswer = "H2O";
                    break;
                case "francais_answer":
                    correctAnswer = "verbe non conjugué";
                    break;
                case "history_answer":
                    correctAnswer = "1789";
                    break;
            }

            if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                resultDiv.textContent = "Bonne réponse !";
                resultDiv.style.color = "green";
            } else {
                resultDiv.textContent = "Mauvaise réponse, essayez encore.";
                resultDiv.style.color = "red";
            }
        });
    });
});
