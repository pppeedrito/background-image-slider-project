  const btnleft = document.querySelector(".btn-left");
  const btnrigt = document.querySelector(".btn-right");
  var counter = 0;
  var change = document.querySelector(".img-container");
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

function nextPic(e){
  if(e.target.id == "btnright"){
    counter += 1;
    if (counter > pictures.length -1) {
      counter = 0;
    }
  }else{
   if (counter<= 0){
     counter = 4;
   }   else{
   counter -= 1;
  }
  }
  change.style.backgroundImage = "url("+"../img/" + pictures[counter] + ".jpeg)";
}
btnleft.addEventListener('click',nextPic);
btnrigt.addEventListener('click',nextPic);
