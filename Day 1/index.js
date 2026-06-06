let api="http://www.omdbapi.com/?i=tt3896198&apikey=951fb768"
function searchMovies(){
    let input = document.getElementById("searchInput").value
    
    let req=api+"&t="+input
    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET" , req)
    httpRequest.responseType="json"
    httpRequest.send()
    httpRequest.onload = function(){
        let response=httpRequest.response
        console.log(response)
        display(response)
    }
}

/*
function display(response){
    let details = document.getElementById("details")
    details.innerHTML=""
    
    let year=document.createElement("h3")
    let language=document.createElement("h3")
    let poster=document.createElement("img")
    poster.src=response.Poster
    details.append(poster)
    year.textContent=response.Awards
    language.textContent=response.Language
    details.append(year) 
    details.append(language) 
    
}*/

function display(response){
    let details = document.getElementById("details");
    details.innerHTML = "";

    let card = document.createElement("div");
    card.className = "movie-card";

    let poster = document.createElement("img");
    poster.src = response.Poster;

    let info = document.createElement("div");
    info.className = "movie-info";

    info.innerHTML = `
        <h2>${response.Title}</h2>
        <h3>🎬 Year: ${response.Year}</h3>
        <h3>🌍 Language: ${response.Language}</h3>
        <h3>🏆 Awards: ${response.Awards}</h3>
        <h3>⭐ IMDb: ${response.imdbRating}</h3>
    `;

    card.appendChild(poster);
    card.appendChild(info);
    details.appendChild(card);
}