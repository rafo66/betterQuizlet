/*
se taire - schweigen, schweigt, schwieg, hat geschwiegen
l'expression - der Ausdruck, "e
représenter - dar/stellen
l'ambiance - die Stimmung
l'événement - das Ereignis, e
l'action - die Handlung
l'ennemi - der Feind, e
se serrer les coudes - zusammen/halten
le meneur - der Anführer
exiger - verlangen
se battre pour quelque chose - für etwas kämpfen
la violence - die Gewalt
inutile - nutzlos
consensuel - angepasst
la société - die Gesellschaft, en
la fondation, la création - die Gründung, -en
le soulèvement populaire - der Volksaufstand
la construction - der Bau
la chute du mur - der Mauerfall
indépendant(e) - unabhängig
*/ 

var listName = "ListName";
var listA = [
    
]
var listB = [
    
]
var curentCard = 1;
var curentCardReverse = 0;
var jeSais = 0;
var jeSaisPas = 0;


//document.getElementById("nbMots").innerHTML = "Nombre de mots : " + list.length/2;
//document.getElementById("listeName").innerHTML = "Nom : " + listName;

function test(){
  /* alert with a text box */
  var data = prompt("Data separated by - and new line", "a - b \n c - d \n e - f"); 

  processClippboard(data);

/*
    // get user clippboard content
    navigator.clipboard.readText()
  .then(text => {
    processClippboard(data);
    
    /*fetch('data.txt')
    .then(response => response.text())
    .then(text => console.log(processClippboard(text)))*/

 /* })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });*/
}

function processClippboard(text){
    // split clippboard content by line
    var lines = text.split(/\r?\n/);
    console.log(lines);

    /*if(confirm("Import ? \n \n " + lines) == false){
        return;
    }*/

    // for each line
    for (var i = 0; i < lines.length; i++) {
        // split line by -
        var line = lines[i].split("-");
        listA.push(line[0].trim());
        listB.push(line[1].trim());
    }
    console.log(listA);
    console.log(listB);

    document.getElementsByClassName("mainWord")[0].innerHTML = listB[curentCard-1];
    document.getElementsByClassName("mainInfos")[0].innerHTML = " Terme " + curentCard + "/" + listA.length;
}

function cardAction(){
  // get html element that called this function


  // change h1 text by class name
  if(curentCardReverse){
    curentCardReverse = 0;
    

    // rotate in 3d element for 1 second
    var eToRotate = document.getElementsByClassName("mainBox")[0];
    
    eToRotate.style.transform = "rotate3d(1, 0, 0, -90deg)";
    eToRotate.style.transition = "transform 0.2s";
    
    setTimeout(function(){
      eToRotate.style.transform = "rotate3d(1, 0, 0, 90deg)";
      eToRotate.style.transition = "transform 0s";
    }, 200);

    setTimeout(function(){
      eToRotate.style.transform = "rotate3d(1, 0, 0, 0deg)";
      eToRotate.style.transition = "transform 0.2s";

      document.getElementsByClassName("mainWord")[0].innerHTML = listB[curentCard-1];

      document.getElementsByClassName("mainInfos")[0].innerHTML = " Terme       " + curentCard + "/" + listA.length;


    }, 200);


    
  }else{
    curentCardReverse = 1;

    
    
    // rotate in 3d element for 1 second
    var eToRotate = document.getElementsByClassName("mainBox")[0];
    
    eToRotate.style.transform = "rotate3d(1, 0, 0, -90deg)";
    eToRotate.style.transition = "transform 0.2s";
    
    setTimeout(function(){
      eToRotate.style.transform = "rotate3d(1, 0, 0, 90deg)";
      eToRotate.style.transition = "transform 0s";
    }, 200);

    setTimeout(function(){
      eToRotate.style.transform = "rotate3d(1, 0, 0, 0deg)";
      eToRotate.style.transition = "transform 0.2s";

      document.getElementsByClassName("mainWord")[0].innerHTML = listA[curentCard-1];
      document.getElementsByClassName("mainInfos")[0].innerHTML = " Définition      " + curentCard + "/" + listA.length;
    }, 200);




  }



  

  

}

function nextCard(e){
  curentCard++;
  if(curentCard > listA.length){
      curentCard = 1;
  }
  curentCardReverse = 0;

  // change h1 text by class name
  document.getElementsByClassName("mainWord")[0].innerHTML = listB[curentCard-1];
  document.getElementsByClassName("mainInfos")[0].innerHTML = " Terme " + curentCard + "/" + listA.length;



  if (!e) var e = window.event; 
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
}

function prevCard(e){
  curentCard--;
  if(curentCard < 1){
      curentCard = listA.length;
  }
  curentCardReverse = 0;


  // change h1 text by class name
  document.getElementsByClassName("mainWord")[0].innerHTML = listB[curentCard-1];
  document.getElementsByClassName("mainInfos")[0].innerHTML = curentCard + "/" + listA.length;



  if (!e) var e = window.event; 
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
}



function sais(){
  jeSais++;
  document.getElementsByClassName("Resultreponse1")[0].innerHTML = jeSais + " / " + listA.length;

}

function saisPas(){
  jeSaisPas++;
  document.getElementsByClassName("Resultreponse2")[0].innerHTML = jeSaisPas + " / " + listA.length;
}


fetch('data.txt')
    .then(response => response.text())
    .then(text => console.log(processClippboard(text)))