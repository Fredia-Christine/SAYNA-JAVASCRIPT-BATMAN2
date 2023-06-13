

/* GET VALUES OF FORM AND VERIFY */ 
const form = document.querySelector('form'); 
const form = document.querySelector('form'); 
const closePopup = document.getElementById("close-popup"); 
const closePopup = document.getElementById("close-popup"); 
const popupE = document.querySelector(".popup-error"); 
const popupE = document.querySelector(".popup-error"); 
const popupM = document.querySelector(".popup-message"); 
const popupM = document.querySelector(".popup-message"); 
const ul = document.getElementById("message-error") 
const ul = document.getElementById("message-error") 


form.addEventListener('submit', (event) => { 
form.addEventListener('submit', (event) => { 
removeLI(ul) 
removeLI(ul) 
event.preventDefault(); 
event.preventDefault(); 
const email = form.elements['email'].value; 
const email = form.elements['email'].value; 
const accept = form.elements['accept'].checked; 
const accept = form.elements['accept'].checked; 
const type = form.elements['type'].value; 
const type = form.elements['type'].value; 
const confirmation = form.elements['confirmation'].value; 
const confirmation = form.elements['confirmation'].value; 
const message = form.elements['message'].value; 
const message = form.elements['message'].value; 
if (isEmailValid(email) && accept && type != "" && confirmation != "" && message != "") { 
if (isEmailValid(email) && accept && type != "" && confirmation != "" && message != "") { 
popupM.style.display = "block"; 
popupM.style.display = "block"; 
} else { 
} else { 
// Verify email 
// Verify email 
if (!isEmailValid(email)) { 
if (!isEmailValid(email)) { 
const li = document.createElement('li'); 
const li = document.createElement('li'); 
li.textContent = '(*) L\'addresse email que vous avez saisie n\'est pas valide!'; 
li.textContent = '(*) L\'addresse email que vous avez saisie n\'est pas valide!'; 
ul.appendChild(li); 
ul.appendChild(li); 
} 
} 


// Verify accept 
// Verify accept 
if (!accept) { 
if (!accept) { 
const li = document.createElement('li'); 
const li = document.createElement('li'); 
li.textContent = '(*) Vous devez accepter de recevoir l’actualité concernant les aventures de Batman'; 
li.textContent = '(*) Vous devez accepter de recevoir l’actualité concernant les aventures de Batman'; 
ul.appendChild(li); 
ul.appendChild(li); 
} 
} 


// Verify type 
// Verify type 
if (type == "") { 
if (type == "") { 
const li = document.createElement('li'); 
const li = document.createElement('li'); 
li.textContent = '(*) Veillez preciser la fréquence à laquelle vous souhaitez recevoir votre newsletter'; 
li.textContent = '(*) Veillez preciser la fréquence à laquelle vous souhaitez recevoir votre newsletter'; 
ul.appendChild(li); 
ul.appendChild(li); 
} 
} 


// Verify confirmation 
// Verify confirmation 
if (confirmation == "") { 
if (confirmation == "") { 
const li = document.createElement('li'); 
const li = document.createElement('li'); 
li.textContent = '(*) Veillez confirmer que vous voulez recevoir ou non des news'; 
li.textContent = '(*) Veillez confirmer que vous voulez recevoir ou non des news'; 
ul.appendChild(li); 
ul.appendChild(li); 
} 
} 


// Verify message 
// Verify message 
if (message == "") { 
if (message == "") { 
const li = document.createElement('li'); 
const li = document.createElement('li'); 
li.textContent = '(*) Redigez votre message'; 
li.textContent = '(*) Redigez votre message'; 
ul.appendChild(li); 
ul.appendChild(li); 
} 
} 
popupE.style.display = "block"; 
popupE.style.display = "block"; 
} 
} 
}); 
}); 


// EMAIL VALIDATON FUNCTION 
// EMAIL VALIDATON FUNCTION 
function isEmailValid(email) { 
function isEmailValid(email) { 
const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; 
const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; 
return regex.test(email); 
return regex.test(email); 
} 
} 


// REMOVE ALL ITEMS OF AN UL 
// REMOVE ALL ITEMS OF AN UL 
function removeLI(ul) { 
function removeLI(ul) { 
while (ul.firstChild) { 
while (ul.firstChild) { 
ul.removeChild(ul.firstChild); 
ul.removeChild(ul.firstChild); 
} 
} 
} 
} 


closePopup.addEventListener("click", function() { 
closePopup.addEventListener("click", function() { 
removeLI(ul) 
removeLI(ul) 
popupE.style.display = "none"; 
popupE.style.display = "none"; 
}); 
}); 


/** 
/** 
* || SCROLL TO HEROS AND ENEMY 
* || SCROLL TO HEROS AND ENEMY 
*/ 
*/ 
// Get buttons 
// Get buttons 
const scrollToHeros = document.getElementById('scroll-to-heros'); 
const scrollToHeros = document.getElementById('scroll-to-heros'); 
const scrollToEnemy = document.getElementById('scroll-to-enemy'); 
const scrollToEnemy = document.getElementById('scroll-to-enemy'); 


// Get destinations 
// Get destinations 
const heros = document.getElementById('heros'); 
const heros = document.getElementById('heros'); 
const enemy = document.getElementById('enemy'); 
const enemy = document.getElementById('enemy'); 


// Functions scroll 
// Functions scroll 
scrollToHeros.addEventListener('click', ()=> { 
scrollToHeros.addEventListener('click', ()=> { 
window.scrollTo({ 
window.scrollTo({ 
top: heros.offsetTop, 
top: heros.offsetTop, 
behavior: 'smooth' 
behavior: 'smooth' 
}); 
}); 
}) 
}) 


scrollToEnemy.addEventListener('click', ()=>{ 
scrollToEnemy.addEventListener('click', ()=>{ 
window.scrollTo({ 
window.scrollTo({ 
top: enemy.offsetTop, 
top: enemy.offsetTop, 
behavior: 'smooth' 
behavior: 'smooth' 
}) 
}) 
}) 
}) 


// VIDEO 
// VIDEO 
function pauseOrPlay() { 
function pauseOrPlay() { 
var playerIcon = document.getElementById('player-icon'); 
var playerIcon = document.getElementById('player-icon'); 
var video = document.getElementById('video'); 
var video = document.getElementById('video'); 
if (video.paused) { 
if (video.paused) { 
playerIcon.style.display = "none"; 
playerIcon.style.display = "none"; 
} else { 
} else { 
playerIcon.style.display = "block"; 
playerIcon.style.display = "block"; 
} 
} 
} 

}
