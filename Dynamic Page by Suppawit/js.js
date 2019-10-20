function ChangeBGRed() {

    document.getElementById("BG").style.background = "red" ; 

}

function ChangeBGWi() {

document.getElementById("BG").style.background = "white" ; 

}
function overname(x) {
    x.style.color = "red";
}

function outname(x) {
    x.style.color = "white";
}

function clickname(){
    newText = prompt('Edit your Name');
    if(newText != null){
        document.getElementById("FullName").innerHTML = newText;
    }

} 

function AddSkill() {
    let node = document.createElement("li");
    let newSkill =  prompt('Add your skill');
    if(newSkill != null && newSkill != ""){
        let textnode = document.createTextNode(newSkill);
        node.appendChild(textnode);
        document.getElementById("Skill").appendChild(node);
    }
  }
  
  function RemoveSkill() {
    var list = document.getElementById("Skill");
    list.removeChild(list.lastChild);
  }



  