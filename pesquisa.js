var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var text = document.getElementById("pesquisa");

text.addEventListener("keyup", function(event){
  if(event.keyCode ===13){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'pesquisa.json');
    ourRequest.onload = function(){
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    };
    ourRequest.send();
  }});


btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'pesquisa.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);

  };
  ourRequest.send();
});


function renderHTML(data){
  //var search = document.getElementById('pesquisa').value;
/*for (var variable in data) {
  if (data.hasOwnProperty(variable)) {
    window.location.assign(data[variable]);
  }
}*/
 var arroz = (document.getElementById('pesquisa').value);
 var oito = arroz.toLowerCase();
  var htmlString = "";
//htmlString = data[0][search];
htmlString = data[0][oito];
  window.location.assign(htmlString);
if (htmlString == undefined) {
  window.alert("Desculpe, ainda não temos " + arroz + " disponível em nosso site.")
window.location.assign('index.html');


}
  //animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
