var data;
function getanswer(g) {

    $.get("http://www.omdbapi.com/?s=" + g + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        console.log(data);
        var title = data.Search[0].Title;
        var year = data.Search[0].Year;
        var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID + "/";
        var posterurl = data.Search[0].Poster;
        document.getElementById("resposta").innerHTML =
            "<h1>" + title + "</h1><br><img src=" + posterurl + "/><br><p>Year Realised: " + year + "</p><br><p>IMDB page: <a href=" + imdburl + " target=_'blank'>" + imdburl + "</a></p>";
    })
}