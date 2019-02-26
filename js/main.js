var data;
function getanswer(g) {

    $.get("http://www.omdbapi.com/?s=" + g + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        console.log(data);
        //console.log("resultados:" + data.totalResults);
        var resultados = data.totalResults;
        var title = data.Search[0].Title;
        var year = data.Search[0].Year;
        var runtime = data.Search[0].Runtime;
        var genre = data.Search[0].Genre;
        var website = data.Search[0].Website;
        var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID + "/";
        var posterurl = data.Search[0].Poster;
        document.getElementById("resposta").innerHTML =
          //  "<h3> Resultados: " + resultados + "</h3>"+
            "<h1>" + title + "</h1>"+
            "<p>Year Realised: " + year + "</p>"+
            "<p> Minutos: " + runtime + "</p>"+
            "<p> Gênero: " + genre + "</p>" + 
            "<p> Site: " + website + "</p>"+
            "<br><img src=" + posterurl + "/>" + 
            "<p>IMDB page: <a href=" + imdburl + " target=_'blank'>" + imdburl + "</a></p>";
    })
}