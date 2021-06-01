function add() {
    var title= document.getElementById("title").value;
    console.log(title);

    var secNode = document.createElement("section");  //create tag
    secNode.setAttribute("class","abc");              // add attribute for tag
    var sectionText = document.createTextNode(title); // create text
    secNode.appendChild(sectionText);                 // add text to tage


    document.getElementById("main").appendChild(secNode); // add to main tag
}