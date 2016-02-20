window.onload = function(){
 

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild
    var div1 = document.createElement('div');
    div1.id = 'first';
    document.body.appendChild(div1);

    var span1 = document.createElement('span');
    span1.id = 'myname';
    div1.appendChild(span1);
  
    var myname = document.createTextNode('Jason');
    span1.appendChild(myname);

    var div2 = document.createElement('div');
    div2.id = 'second';
    document.body.appendChild(div2);

    var span2 = document.createElement('span');
    span2.id = 'YourName';
    div2.appendChild(span2);

    var YourName = document.createTextNode('Joe');
    span2.appendChild(YourName);

    var div3 = document.createElement('div');
    div3.id = 'third';
    document.body.appendChild(div3);

    var span3 = document.createElement('span');
    span3.id = 'neighborName';
    div3.appendChild(span3);

    var neighborName = document.createTextNode('Victor');
    span3.appendChild(neighborName);

    var div4 = document.createElement('div');
    div4.id = 'nested';
    document.body.appendChild(div4);

    var span4 = document.createElement('span');
    span4.id = 'deeperNested';
    div4.appendChild(span4);


    var p = document.createElement('p');
    p.id = 'superNested';
    span4.appendChild(p);

    var Yay = document.createTextNode('yay');
    p.appendChild(Yay);
    


  }

  generateDocument();
};