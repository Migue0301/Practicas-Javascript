const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


//Sun
//Shadow
//ctx.shadowColor = "yellow";
//ctx.shadowBlur = 15;

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(10, 10, 10, 0, Math.PI * 2);
ctx.fill();



//Planet
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(180, 180, 130, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgb(145, 58, 0';
ctx.beginPath();
ctx.arc(185, 185, 125, 0, Math.PI * 2);
ctx.fill();

//Moon
ctx.fillStyle = "rgb(160, 160, 160";
ctx.beginPath();
ctx.arc(280, 180, 30, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "rgb(60, 60, 60";
ctx.beginPath();
ctx.arc(281, 182, 28, 0, Math.PI * 2);
ctx.fill();

//Stars
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(50, 50, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(35, 120, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(350, 20, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(270, 50, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(250, 350, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(300, 310, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(350, 370, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(370, 200, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(350, 110, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(365, 280, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(40, 380, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(30, 290, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(100, 330, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(130, 380, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(160, 330, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(170, 360, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(200, 20, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(20, 220, 1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(100, 40, 1, 0, Math.PI * 2);
ctx.fill();