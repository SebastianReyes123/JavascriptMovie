
let movieData = require("./data");
let $ = require("jquery");

let ui = {
    title: $("#movieTitle"),
    des: $("#description"),
    img: $("#image"),
    actor: $("#list"),
    stars: $("#stars")
}
function renderMovie(movie) {
    ui.title.text(movie.Title);
    ui.des.text(movie.Description);
    ui.img.html("<img src=" + movie.Image + ">");
    // document.getElementById("image").setAttribute("src",movie.Image) //sätts in i en <img> tag ist för div. 
    let actors = "<ul>";
    for (let i in movie.Actors) {
        actors += "<li>" + movie.Actors[i] + "</li>";
    }
    actors += "</ul>";
    ui.actor.html(actors);
}
function changeStarRating(grade) {
    for (let i = 1; i <= 5; i++) {
        if (i <= grade) {
            $("#star" + i).addClass("filled");
            $("#star" + i).removeClass("unfilled");
        }
        else {
            $("#star" + i).removeClass("filled");
            $("#star" + i).addClass("unfilled");
        }

    }
}
ui.stars.click("span", function (e) {
    let star = $(e.target).attr("data-star-id");
    changeStarRating(+star);
});

renderMovie(movieData);

  // for (let i = 1; i <= 5; i++) {
//     $("#star" + i).click(function (e) {
//         changeStarRating(i);
//     });
// }

//   function hoverStarRatingIn(grade) {    
//         $("#star" + grade).addClass("hover");   
//         changeStarRating(grade);       
//      }
//      function hoverStarRatingOut(grade) {    
//         $("#star" + grade).removeClass("hover");
//         changeStarRating(grade);               
//      }
//   ui.stars.mouseenter("span", function(e){
//     let star = $(e.target).attr("data-star-id");
//     hoverStarRatingIn(+star);
//   }).mouseleave("span", function(e){
//     let star = $(e.target).attr("data-star-id");
//     hoverStarRatingOut(+star);
//   });
