function SaveNote() {
    let fileName = document.getElementById("note-name").value;
    let fileData = document.getElementById("note-field").value
    if(!fileName) {
        alert("Please enter a file name!")
    } else {
        // Save file as filename
        console.log(fileName);

        // Save files content inside file
        console.log(fileData);
        
    }
    
}