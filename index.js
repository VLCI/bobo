const root = document.createElement('div');
root.setAttribute('title', 'Aceitas?');
root.style.width = '600px';
root.style.height = '600px';
root.style.backgroundColor = '#ffc8dd';

function moveButton1(e) {
  const button1 = document.getElementById('button-1');
  const xDiff = Math.abs(e.clientX - button1.offsetLeft);
  const yDiff = Math.abs(e.clientY - button1.offsetTop);
  if (xDiff < 50 && yDiff < 40) {
    const maxWidth = root.offsetWidth - button1.offsetWidth;
    const maxHeight = root.offsetHeight - button1.offsetHeight;
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    button1.style.left = `${x}px`;
    button1.style.top = `${y}px`;
  }
}

function accepted() {
  alert('Meu amor\n\nEu te amo meu amor, lanchinho mais tarde?');
}

function denied() {
  const button1 = document.getElementById('button-1');
  button1.parentNode.removeChild(button1);
}

const margin = document.createElement('div');
margin.style.width = '500px';
margin.style.height = '100px';
margin.style.backgroundColor = '#ffc8dd';
margin.style.border = 'ridge';
margin.style.margin = 'auto';
root.appendChild(margin);

const textId = document.createElement('h1');
textId.style.backgroundColor = '#ffc6dd';
textId.style.color = '#590d22';
textId.style.fontSize = '24px';
textId.style.fontWeight = 'bold';
textId.style.textAlign = 'center';
textId.style.marginTop = '20px';
textId.textContent = 'Quer namorar comigo?';
root.appendChild(textId);

const button1 = document.createElement('button');
button1.setAttribute('id', 'button-1');
button1.style.backgroundColor = '#ffb3c1';
button1.style.border = 'ridge';
button1.style.borderWidth = '3px';
button1.style.borderColor = '#000';
button1.style.width = '60px';
button1.style.height = '30px';
button1.style.position = 'absolute';
button1.style.left = '270px';
button1.style.top = '300px';
button1.style.fontFamily = 'Montserrat';
button1.style.fontSize = '8px';
button1.style.fontWeight = 'bold';
button1.textContent = 'Não';
button1.addEventListener('click', denied);
root.appendChild(button1);

root.addEventListener('mousemove', moveButton1);

const button2 = document.createElement('button');
button2.style.backgroundColor = '#ffb3c1';
button2.style.border = 'ridge';
button2.style.borderWidth = '3px';
button2.style.borderColor = '#000';
button2.style.width = '100px';
button2.style.height = '40px';
button2.style.marginTop = '30px';
button2.style.marginLeft = '250px';
button2.style.fontFamily = 'Montserrat';
button2.style.fontSize = '14px';
button2.style.fontWeight = 'bold';
button2.textContent = 'Sim';
button2.addEventListener('click', accepted);
root.appendChild(button2);

document.body.appendChild(root);