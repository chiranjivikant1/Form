

function fill(){
	
	if(check()){
		fillit();
    document.querySelector("form").reset();
	}
 
	function fillit(){	
		
		
 var fname= document.querySelector(".fname1").value;
  document.querySelector(".fname2").innerText= fname;
  
   var lname= document.querySelector(".lname1").value;
  document.querySelector(".lname2").innerText= lname;
  
   var email= document.querySelector(".email1").value;
  document.querySelector(".email2").innerText= email;
  
   var address= document.querySelector(".address1").value;
  document.querySelector(".address2").innerText= address;
  
  
   var pin= document.querySelector(".pin1").value;
  document.querySelector(".pin2").innerText= pin;
  
  
   var city= document.querySelector(".city1").value;
  document.querySelector(".city2").innerText= city;
  
  
  var radio = document.querySelector("input[name='gender']:checked").value;
   document.querySelector(".gender2").innerText= radio;
  
    var checklist = document.querySelectorAll("input[name='food']:checked"); var res=[];
  for(let i=0;i<checklist.length;i++){
    if((checklist[i].value) != 'undefined') {
      res.push(checklist[i].value);}
  }
   document.querySelector(".food2").innerText= [...res];
  
  
 var state = document.querySelector("#state");
   document.querySelector(".state2").innerText= state.value;


 var coun = document.querySelector("#country1");
   document.querySelector(".country2").innerText= coun.value;
	}
	
	
	function check(){
   let checklist = document.querySelectorAll("input[name='food']:checked"); 
  if(checklist.length<2){
    alert('please select any 2 Food choices');
    return false;
  }
  else
    return true;
}

}
 