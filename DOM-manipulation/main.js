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

const btn2 = document.querySelector('#btn');
btn2.addEventListener('click', () => {
  alert("I'm the real one calling from the other file!");
});
