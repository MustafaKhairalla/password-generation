function generatePassword(){

    //setting all charectors
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";
    var password = "";
    
    //setting the password number of characters 
    var numberOfChars = document.getElementById("input").value;

    //result value
    var resultEl = document.getElementById("result");

    //loop to select passwords
    for(var i=0; i <= numberOfChars; i++){
        password = password + chars.charAt(Math.floor(Math.random() * Math.floor(chars.length - 1)));
    }

    //display password to result-area
    //document.getElementById("result").innerText;
    resultEl.innerText = password

}
//this is just a bonus --- 
function copyToClipboard(){

    var copyText = document.getElementById("result");
    copyText.selector()
    
    //copyText.select();

    //document.execCommand("copy")



}

