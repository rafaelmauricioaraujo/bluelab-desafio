
var data;

function buscaFilme(consulta) {

    $.get("http://www.omdbapi.com/?t=" + consulta + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var title = data.Title;
        var type = data.Type;
        var year = data.Year;
        var runtime = data.Runtime;
        var genre = data.Genre;
        var website = data.Website;
        var imdburl = "https://www.imdb.com/title/" + data.imdbID + "/";
        var posterurl = data.Poster;

        document.getElementById("resposta").innerHTML =
            "<h1>" + title + "</h1>" +
            "<p> Tipo: " + type + "</p>" +
            "<p>Year Realised: " + year + "</p>" +
            "<p> Minutos: " + runtime + "</p>" +
            "<p> Gênero: " + genre + "</p>" +
            "<p> Site: " + website + "</p>" +
            "<br><img src=" + posterurl + "/>" +
            "<p>IMDB page: <a href=" + imdburl + " target=_'blank'>" + imdburl + "</a></p>";
    })
}

function getList(consulta){
    $.get("http://www.omdbapi.com/?s=" + consulta + "&apikey=e4e957f", function(data){
        var dataString = JSON.stringify(data);
        console.log(data);
    }); 
}
