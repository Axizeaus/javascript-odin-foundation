// selecting and assigning
const container = document.querySelector('#container');
// creating a new div and assigning it as content
const content = document.createElement('div');
// adding 'content' as a class
content.classList.add('content');
// adding some texts into the content ( the one above )
content.textContent = 'This is the glorious text-content!';
// appending it as to make sure it got tagged onto the wagon.
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red";
para.style.cssText = 'color: red';
container.appendChild(para);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = "I'm a blue h3";
blueH3.style.color = 'blue';
container.appendChild(blueH3);

const childContainer = document.createElement('div');
childContainer.classList.add('childContainer');
childContainer.style.border = '5px black solid';
childContainer.style.backgroundColor = 'pink';
// childContainer.style.height = '200px';
// childContainer.style.width = 'max-width';
container.appendChild(childContainer);

const grandh1 = document.createElement('h1');
grandh1.classList.add('grandh1');
grandh1.textContent = "I'm in a div";
childContainer.appendChild(grandh1);

const ch1 = document.createElement('p');
ch1.classList.add('ch1');
ch1.textContent = "ME TOO!";
childContainer.appendChild(ch1);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello from the other fileeeeeeeee!");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("I'm the real one calling from the other file!");
});

const btn3 = document.querySelector('#btn3');
btn3.onclick = () => alert("this is the arrow one");

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
  alert('this is btn4 speaking');
});

function alertFunction(){
  alert("YAY you did it");
}

// btn5.onclick = alertFunction;

// btn5.addEventListener('click', alertFunction)

// btn5.addEventListener('click', function (e) {
//   console.log(e);
// });

btn6.addEventListener('click', function (e){
  console.log(e.target);
});

btn7.addEventListener('click', function(e){
  e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
