const apiKey = '7b3405e1';
// alert("Debes buscar algo, sino, no habra nada que mostrar");
let movie = prompt('Busque una Pelicula : ');
const urlApi = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`;
fetch(urlApi)
	.then(resp => resp.json())
	.then(data => watch(data))
	.catch(err => new Error(err));

let watch = (data)=>{
	if(data.Response === "False"){
		// <iframe src="https://giphy.com/embed/kNwQN4ueScpbaeWtef" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-season-1-episode-squid-game-kNwQN4ueScpbaeWtef">via GIPHY</a></p>
		let error1 = document.getElementById('article-head').innerHTML = '<strong>Lo sentimos mucho</strong>, no encontramos lo que buscabas. <h1>😓<h1> <iframe src="https://giphy.com/embed/kNwQN4ueScpbaeWtef" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-season-1-episode-squid-game-kNwQN4ueScpbaeWtef"></a></p>';
	}
	let body = '';
	for(var i = 0 ; i < data.Search.length; i++){
		
		body += `<tr><td>${data.Search[i].Title}</td><td>${data.Search[i].Year}</td><td><img src="${data.Search[i].Poster}" alt=""></td></tr>`;
		document.getElementById('tbody').innerHTML = body;
	}
}
