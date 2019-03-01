
function lerCampo() {
    /**
     * função responsável por verificar se foi digitado algo 
     * no campo de busca, caso sim, é chamado a função buscaFilme, caso não
     * o espaço de resposta permanece oculto e qualquer tag html é removida
     * para uma melhor visualização do site.
     */
    if ($("#campo").val() == "") {
        $("#resultado").removeClass("shown").addClass("hidden");
        $("#resultado").html("");
    } else {
        buscaFilme($("#campo").val());
    }
}

function buscaFilme(filme) {
    /**
     * Função responsável por fazer uma requisição a API de filmes e retornar um objeto
     * JSON contendo informações sobre o filme pesquisado
     * e atualizar página com estas informações.
     * 
     * entrada: nome do filme ou parte do nome
     */
    let data;
    $.get("http://www.omdbapi.com/?t=" + filme + "&apikey=e4e957f", function (apidata) {
        let apistring = JSON.stringify(apidata);
        data = JSON.parse(apistring);
        /**
         * a variável abaixo 'resposta' tem como objeitvo fazer a verificação de existe filme
         * com o texto informado. Caso sim, inicia a leitura das informações do filme,
         * caso não, é respondido com um texto de filme não encontrado
         */
        let resposta = data.Response;
        if (resposta == "True") {

            let title = ((data.Title == "N/A") ? "Infelizmente não temos essa informação :( " : data.Title);
            let year = ((data.Year == "N/A") ? "Infelizmente não temos essa informação :( " : data.Year);
            let runtime = ((data.Runtime == "N/A") ? "Infelizmente não temos essa informação :( " : data.Runtime);
            let genre = ((data.Genre == "N/A") ? "Infelizmente não temos essa informação :(" : data.Genre);
            let website = ((data.Website == "N/A") ? "Infelizmente não temos essa informação :(" : data.Website)
            let posterurl = ((data.Poster == "N/A") ? "":data.Poster);

            /**
             *  O código abaixo captura o campo de resultado e preenche com os campos mapeados do JSON
             * solicitado
             */
            $("#resultado").html
                ("<h2>" + title + "</h2>" +
                    "<img src=" + posterurl + "/>" +
                    "<p> Ano de Lançamento: " + year + "</p>" +
                    "<p> Minutos: " + runtime + "</p>" +
                    "<p> Gênero: " + genre + "</p>" +
                    "<p> Site: <a href=" + website + " target='_blank'>" + website + "</a></p>"
                );

            $("#resultado").removeClass("hidden").addClass("shown");

        } else if (resposta == "False") {
            /**
             * resposta de filme não encontrado caso o campo resposta seja igual a False;
             */
            $("#resultado").html("<h2> Não encontramos filme com esse nome... :( </h2>");
        }
    })
}

