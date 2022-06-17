//Imagenes
let images = ['media/picture1.jpg', "media/picture2.jpg", "media/picture3.jpg"];

//Elemento para cargar el slide
let slider = document.getElementById("slider-js");

//Elemento general del slider
let sliderContainer = document.getElementById("slider-container");

//Ancho del contenedor en funcion de las imagenes
slider.style.width = images.length * 100 + "%";

//Elemento para cargar la navegacion
let sliderNav = document.getElementById("slider-navigation");

//Variable para saber si el slide esta activo
let active = true;

//Eventos para saber si el raton esta sobre el slide
sliderContainer.addEventListener("mouseover", ()=>{
	if(active) active = false;
});

//Eventos para saber si el raton no esta sobre el slide
sliderContainer.addEventListener("mouseout", ()=>{
	if(!active) active = true;
});


//Evento al pulsar en la navegacion
sliderNav.addEventListener("click", (e) => slideImage(e.target.id.slice(-1)));



//Dibujar slide y navegacion
for(let img in images){

	//Cargar imagenes
	slider.innerHTML += `<img src="${images[img]}" class="slider_img" style="width: ${100/images.length}%">`;

	//Cargar navegacion
	sliderNav.innerHTML += `<span class="${img==0 ? 'slider-nav slider-nav--active' :
	'slider-nav'}" id="slider-nav-${img}">`;
}

//Variable contador de imagenes
let cont = 0;

//Intervalos de tiempo para el contador
const startInterval = () => setInterval (counter, 5000);

//Iniciar el contador
startInterval();

//Funcion que cambia de imagen
function counter(){
	if(active){
		cont++
		if(cont>=images.length) cont=0;
		setInterval(slideImage(cont), 5000);
		setInterval(setActive(cont), 5000);

	}
}

function slideImage(id){
	if(!active && !isNaN(id)){
		cont=id;
		setActive(id);

	}

	slider.style.left = "-" + id + "00%";

}

let navIcons = [...document.getElementsByClassName("slider-nav")];

function setActive(id) {

	navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
		idValue.classList.add("slider-nav--active"):
		idValue.classList.remove("slider-nav--active")
		)

}