var data;
function getanswer(g) {

    $.get("http://www.omdbapi.com/?t=" + g + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        console.log(data);
        //console.log("resultados:" + data.totalResults);
        var resultados = data.totalResults;
        var title = data.Title;
        console.log(title);
        var type = data.Type;
        console.log(type);
        //var year = data.Search[0].Year;
        var year = data.Year;
        var runtime = data.Runtime;
        var genre = data.Genre;
        var website = data.Website;
        var imdburl = "https://www.imdb.com/title/" + data.imdbID + "/";
        var posterurl = data.Poster;
        document.getElementById("resposta").innerHTML =
            //  "<h3> Resultados: " + resultados + "</h3>"+
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