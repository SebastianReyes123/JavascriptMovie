function renderMovie(movie){
    document.getElementById("movieTitle").innerText = movie.Title;
    document.getElementById("description").innerText = movie.Description;    
    document.getElementById("image").innerHTML ="<img src="+movie.Image+">"; 
    let actors = "<ul>";
    for(let i in movie.Actors){
        actors += "<li>"+movie.Actors[i]+"</li>";
    }
    actors += "</ul>";
    document.getElementById("list").innerHTML = actors;
}