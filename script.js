document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function loadNotes() {
    fetch("review.php")
        .then(response => response.json())
        .then(data => {
            const notesContainer = document.getElementById("notes-container");
            notesContainer.innerHTML = "";
            data.notes.forEach(note => {
                const noteDiv = document.createElement("div");
                noteDiv.className = "note";
                noteDiv.innerText = note;
                notesContainer.appendChild(noteDiv);
            });
        });
}
