//Seletores
var minhaNodeList = document.getElementsByTagName("LI");
var i;
var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');


// Botão de Create a "close" anexá-lo a cada item da lista
for (i = 0; i < minhaNodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  minhaNodeList[i].appendChild(span);
}

//Clique e fecha o item selecionado pelo botão 

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Adiciona a CheckedList ao clicar em um item da lista
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');

  }
}, false);


// Crie um novo item da lista ao clicar no botão "Adicionar"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputText").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Campo vazio!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputText").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

