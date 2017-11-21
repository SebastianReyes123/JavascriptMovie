function renderMovie(movie) {
   $("#movieTitle").text(movie.Title);
    $("#description").text(movie.Description);
    $("#image").html("<img src=" + movie.Image + ">");
    // document.getElementById("image").setAttribute("src",movie.Image) //sätts in i en <img> tag ist för div. 
    let actors = "<ul>";
    for (let i in movie.Actors) {
        actors += "<li>" + movie.Actors[i] + "</li>";
    }
    actors += "</ul>";
    $("#list").html(actors);
}
function changeStarRating(grade) {
    for (let i = 1; i <= 5; i++) {            
        if(i<=grade)
        $("#star" + i).addClass("filled");              
        else
        $("#star" + i).removeClass("filled");              
             
    }
}
// for (let i = 1; i <= 5; i++) {
//     $("#star" + i).click(function (e) {
//         changeStarRating(i);
//     });
// }

$("#stars").click("span", function(e){
    let star = $(e.target).attr("data-star-id");
    changeStarRating(+star);
  });