
var data;

var tbody = document.querySelector("table tbody")
console.log('tbody: '+ tbody);


function getanswer(g) {

    $.get("http://www.omdbapi.com/?t=" + g + "&apikey=e4e957f", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        console.log(data);
        //console.log("resultados:" + data.totalResults);
        var resultados = data.totalResults;
        var title = data.Title;
        var type = data.Type;
        //var year = data.Search[0].Year;
        var year = data.Year;
        var runtime = data.Runtime;
        var genre = data.Genre;
        var website = data.Website;
        var imdburl = "https://www.imdb.com/title/" + data.imdbID + "/";
        var posterurl = data.Poster;

        /*

        var resposta = [
            year,
            runtime,
            genre,
            website
        ];
        */

        //console.log("resposta: " + resposta);
        //var tr = document.createElement("tr");
        //var tdAno = document.createElement("tr");
        //var tdRuntime = document.createElement("tr");
        ///var tdGenre = document.createElement("tr");
        //var tdWebsite document.createElement("tr");
        //tdAno.textContent = data.Year;
        //tdRuntime.textContent = data.Runtime;
        //tdGenre.textContent = data.Genre;
        //tdWebsite.textContent = data.Website;

        /*
        var tr = document.createElement("tr");
        console.log('tr criada: ' + tr);
        resposta.array.forEach(function (element) {
            var td = document.createElement("td");
            td.textContent = element.value;
            tr.appendChild(td);
        });
        */
        //console.log("tr: " + tr);
        //tbody.appendChild(tr);
        //console.log("tbody: " + tbody);
        
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
