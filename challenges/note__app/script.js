const noteAppContainer = document.getElementById("note__container");
const button = document.getElementById("button");

function createNote() {
  const textarea = document.createElement("textarea");

  textarea.placeholder = "Empty Note";
  textarea.style.borderRadius = "20px";
  textarea.style.opacity = "0.3";
  textarea.style.boxShadow = "18px 8px 30px 0 black";
  textarea.classList.add("note");
  noteAppContainer.appendChild(textarea);
}

function removeNoteAppElement() {}

button.addEventListener("click", createNote);

noteAppContainer.addEventListener("dblclick", function (event) {
  const result = confirm("Are you sure you want to remove this element?");
  if (result) {
    noteAppContainer.removeChild(event.target);
  }
});
