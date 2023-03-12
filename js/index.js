var c = document.getElementById('container');
var box = document.getElementById('box');

window.addEventListener('devicemotion', function(e) {
  console.log(e);
  var ps = document.querySelectorAll('p');
  ps[0] = 'a'+e.rotationRate.aplha;
  ps[1] = 'b'+e.rotationRate.beta;
  ps[2] = 'g'+e.rotationRate.gamma;
  ps[3].textContent = e.accelerationIncludingGravity.x;
  ps[4].textContent = e.accelerationIncludingGravity.y;
  ps[5].textContent = e.accelerationIncludingGravity.z;
});


function fazer(){
var a1= document.getElementById("txt1").value;
var a2= parseFloat(document.getElementById("txt2").value);
var a3= parseInt(document.getElementById("txt3").value);

var a= document.getElementById("tab1");
var b= document.getElementById("td1");
var c= document.getElementById("td2");
var d= document.getElementById("td3");
var e= document.getElementById("td4");

a.className='fundoTab';
b.className='fundoTab';
c.className='fundoTab';
d.className='fundoTab';
e.className='fundoTab';


if(a2>5000)
{
d.className='FundoAzul';
}
else
{
d.className='FundoVermelho';
}

if(a3>=18)
{
e.className='FundoAmarelo';
}
else
{
e.className='FundoVerde';
}

document.getElementById("td1").innerHTML = "CAD";
document.getElementById("td2").innerHTML = a1;
document.getElementById("td3").innerHTML = a2;
document.getElementById("td4").innerHTML = a3;


}





/*
c.animate([
  {transform: 'rotateY(-40deg) rotateZ(60deg)'},
  {transform: 'rotateY(40deg) rotateZ(-60deg)'}
], {
  duration: 1600,
  easing: 'ease-in-out',
  direction: 'alternate',
  iterations: Infinity
});
//*/