
function lerCampo() {
    if ($("#campo").val() == "") {
        $("#resultado").removeClass("shown").addClass("hidden");
    } else {
        buscaFilme($("#campo").val());
    }
}

function buscaFilme(consulta) {
    var data;
    $.get("http://www.omdbapi.com/?t=" + consulta + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var resposta = data.Response;
        console.log(resposta);
        if (resposta == "True") {
            var title = data.Title;
            var type = data.Type;
            var year = data.Year;
            var runtime = data.Runtime;
            var genre = data.Genre;
            var website = data.Website;
            var imdburl = "https://www.imdb.com/title/" + data.imdbID + "/";
            var posterurl = data.Poster;

            document.getElementById("resultado").innerHTML =
                "<br><img src=" + posterurl + "/>" +
                "<h2>" + title + "</h2>" +
                "<p>Tipo: " + type + "</p>" +
                "<p>Ano de Lançamento " + year + "</p>" +
                "<p>Minutos: " + runtime + "</p>" +
                "<p>Gênero: " + genre + "</p>" +
                "<p>Site: <a href=" + website + " target=_'blank'>" + website + "</a></p>"
            $("#resultado").removeClass("hidden").addClass("shown");
        } else if(resposta == "False"){
            document.getElementById("resultado").innerHTML = "<h2> Não encontramos nada com esse nome... :( </h2>"
        }
    })
}
