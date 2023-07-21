
//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

evenListeners();

function evenListeners() {
    //cuando el usuario agrega un nuevo Tweets
    formulario.addEventListener('submit', agregarTweets);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        //busca lago en lcoale storage y conviertelo a rreglo o si no asignarle un arreglo vacio
        tweets = JSON.parse(localStorage.getItem('tweets') || []);
        // console.log(tweets);
        crearHTML();
    });
};


function agregarTweets(e) {
    e.preventDefault();

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet)

    if (tweet === '') {
        mostrarError('El tweet no puede ir Vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
        //tweet
    }

    //añadir al arreglo tweets
    tweets = [...tweets, tweetObj];

    // una vez agregado vamos a crear HTML
    crearHTML();

    //resetear el formulario al momento de enviar 
    formulario.reset();
}

function mostrarError(msj) {
    const msjError = document.createElement('P');
    msjError.textContent = msj;
    msjError.classList.add('error');

    //INsertandolo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msjError);

    // Elimina en un tiempo predertemindo el mensaje de alerta
    setTimeout(() => {
        msjError.remove();
    }, 2500)
}

//MUestra el listado de los tweets
function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach((tweet) => {

            //Agregar el boton de eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //anadir la funcion de eliminar
            btnEliminar.onclick = ()=>{
                eliminarTweet(tweet.id);
            }

            //crear el HTML
            const li = document.createElement('LI');

            //añadir el texto
            li.textContent = tweet.tweet;

            //asignar el btn de eliminar 
            li.appendChild(btnEliminar);

            //insertar en el HTML
            listaTweets.appendChild(li);
        });
    };
    enviarLocalStorage();
};

//limpia el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// ENVIA AL LOCALE STORAGE
function enviarLocalStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// BORRA UN TWEET
function eliminarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    crearHTML();
};