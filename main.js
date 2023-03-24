function season(){
			 let b=prompt("enter a month 0-11");
			 var months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
			 
			 if(b>=5 && b<=7){
				 document.getElementById("sea").innerHTML=months[b]+" "+"is Summer"
			 }
			 else if(b>=8 && b<=10){
			     document.getElementById("sea").innerHTML=months[b]+" "+"is Fall"
			 }
			 else if(b>=2 && b<=4){
				 document.getElementById("sea").innerHTML=months[b]+" "+"is Spring"
			 }
			 else{
				 document.getElementById("sea").innerHTML=months[b]+" "+"is Winter"
			 }
		}
		season();