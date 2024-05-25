var index = 0;
var data= ["Web 3.0", "The Real Time Communication Server", "Web 3.0", "The Real Time Broadcasting Server", "Web 3.0", "The Real Time Communication Services"];

var span= document.querySelector('span');
var section= document.querySelector('section');

function init() {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
}

init();

setInterval(
  function(){
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ?  index++ : 0 ;
  }
, 4501);
