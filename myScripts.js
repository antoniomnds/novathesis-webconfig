function showFormData(element_id){
    var x = document.forms[element_id]; // document.forms returns all <form> elements 
    var text = "";
    for(var i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br/>";    // append to text
    }
    document.getElementById("form_content").innerHTML = text;
}

// var x = document.getElementsByTagName("form");  // object collection with all document forms

