
function pending(){
    var user = document.getElementById('hello').value;

    document.getElementById('B').innerHTML = user;
    
}
function myFunction() {
    
    var checkBox = document.getElementById("A");
    
    var text = document.getElementById("B").innerHTML;
    
    if (checkBox.checked == true){
    document.getElementById('C').innerHTML = text;
    document.getElementById('B').innerHTML ='';
    document.getElementById("A").checked = false; 
    } else {
      text.style.display = "none";
    }
  }
  function remov1(){
    var text = document.getElementById("B");
    text.style.display = "none";
  }
  function remov2(){
    var text = document.getElementById("C");
    text.style.display = "none";
    
  }
  function myNew() {
    
    var checkBox = document.getElementById("D");
    var text = document.getElementById("C").innerHTML;
    if (checkBox.checked == true){
    document.getElementById('B').innerHTML = text;
    document.getElementById('C').innerHTML ='';
    document.getElementById("D").checked = false;  
    } else {
      text.style.display = "none";
    }
  }