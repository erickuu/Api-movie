const apiKey = '7b3405e1';
let movie = prompt('Busque una Pelicula : ');
const urlApi = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`;
	
fetch(urlApi)
	.then(resp => resp.json())
	.then(data => watch(data))
	.catch(err => new Error(err));

let watch = (data)=>{
	let body = '';
	for(var i = 0 ; i < data.Search.length; i++){
		body += `<tr><td>${data.Search[i].Title}</td><td>${data.Search[i].Year}</td><td><img src="${data.Search[i].Poster}" alt=""></td></tr>`;
		document.getElementById('tbody').innerHTML = body;
	}
}
