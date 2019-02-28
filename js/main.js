
function lerCampo() {
    if ($("#campo").val() == "") {
        $("#resultado").removeClass("shown").addClass("hidden");
    } else {
        buscaFilme($("#campo").val());
    }
}

function buscaFilme(consulta) {
    let data;
    $.get("http://www.omdbapi.com/?t=" + consulta + "&apikey=e4e957f", function (rawdata) {
        let rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        console.log(data);
        let resposta = data.Response;
        if (resposta == "True") {
            let title = ((data.Title == "N/A") ? "Infelizmente não temos essa informação :( ": data.Title);
            let year = ((data.Year == "N/A") ? "Infelizmente não temos essa informação :( " : data.Year);
            let runtime = ((data.Runtime == "N/A") ? "Infelizmente não temos essa informação :( ": data.Runtime);
            let genre = ((data.Genre == "N/A") ? "Infelizmente não temos essa informação :(" : data.Genre);
            let website = ((data.Website == "N/A")? "Infelizmente não temos essa informação :(" : data.Website)
            let posterurl = ((data.Poster == "N/A")? "Infelizmente não temos essa informação :(" : data.Poster);

            $("#resultado").html("<h2>" + title + "</h2>" +
            "<p> Ano de Lançamento: " + year + "</p>" +
            "<p> Minutos: " + runtime + "</p>" + 
            "<p> Gênero: " + genre + "</p>" + 
            "<p> Site: <a href=" + website + " target='_blank'>" + website + "</a></p>");
            
            $("#resultado").removeClass("hidden").addClass("shown");

        } else if(resposta == "False"){
            $("#resultado").html("<h2> Não encontramos filme com esse nome... :( </h2>");
        }
    })
}

