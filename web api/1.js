var body = document.body;
var editButton = document.getElementById('editButton');
var paragraph = document.getElementById('paragraph');
var backButton = document.getElementById('backButton');
var saveButton = document.getElementById('saveButton')

editButton.addEventListener('click', function() {
    paragraph.setAttribute("contenteditable", "true");
    saveButton.disabled = false;
    backButton.disabled = false; 
    editButton.disabled = true;
    saveButton.addEventListener('click', function() {
        localStorage.setItem('info', paragraph.innerHTML);
        saveButton.disabled = true;
        backButton.disabled = true; 
        editButton.disabled = false;
    })

    backButton.addEventListener('click', function() {
        paragraph.innerHTML = localStorage.getItem('info');
        saveButton.disabled = true;
        backButton.disabled = true; 
        editButton.disabled = false;
    })
}); 

function CheckPageLoad() {
    paragraph.innerHTML = localStorage.getItem('info');
}