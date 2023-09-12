function saveNote() {
  const note = document.getElementById('note').value;
  localStorage.setItem('note', note);
}
function loadNote() {
  const note = localStorage.getItem('note');
  if (note) {
    document.getElementById('note').value = note;
  }
}
function clearNote() {
  if (window.confirm('Are you sure you want to clear the note?')) {
    localStorage.removeItem('note');
    document.getElementById('note').value = '';
  }
}
window.addEventListener('load', loadNote);