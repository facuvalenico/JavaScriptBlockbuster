//función para que cargue las películas //cargarPeliculas(pagina);;
window.addEventListener("load",()=>{cargarPeliculas()});

let pagina=1;

let btnAnterior=document.querySelector("#btnAnterior");
let btnSiguiente=document.querySelector("#btnSiguiente");

btnAnterior.addEventListener("click",()=>{
    if (pagina>1){
        pagina=pagina-1;
        cargarPeliculas();
    }
});

btnSiguiente.addEventListener("click",()=>{
    if (pagina<500){
        pagina=pagina+1;
        cargarPeliculas();
    }
});

//funcion cargarPeliculas():
const cargarPeliculas = async () => {
    try {
        let respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=f959412b468845d77a0bee314005e2b9&language=es-MX&page=${pagina}`)
        if (respuesta.status===200){
            let datos = await respuesta.json()
            let peliculas= "";
            datos.results.forEach((pelicula)=>{
                peliculas=peliculas+`<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <div class="lasRejas">
                <img class="rejas" src="./imagenes/rejas.png"/>
                <img class="rejas" src="./imagenes/rejas.png"/>
                <img class="rejas" src="./imagenes/rejas.png"/>
                <img class="rejas" src="./imagenes/rejas.png"/>
                </div> 
                </div>`;
                document.querySelector(".contenedor").innerHTML=peliculas;
            })
        } else if (respuesta.status===404){
            console.log("la página no existe");
        }
         
    } catch (error) {
        document.write(error);
    }
    document.querySelector(".pagina").innerHTML=pagina;
};

