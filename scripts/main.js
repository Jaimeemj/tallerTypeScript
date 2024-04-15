import { lstSeries } from "./data.js";
mostrarSeries2(lstSeries);
function calcularAverage(lstSeries) {
    var total = 0;
    for (var index = 0; index < lstSeries.length; index++) {
        var element = lstSeries[index];
        total += element.seasons;
    }
    return total / lstSeries.length;
}
function mostrarSeries2(lstSeries) {
    var seriesTable = document.getElementById("tabSeries");
    var serieBody = document.createElement('tbody');
    var _loop_1 = function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td style=\"color: blue\"><span class=\"serie-link\">").concat(serie.name, "</span></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        var serieNameElement = trElement.querySelector('.serie-link');
        serieNameElement.addEventListener('click', function () {
            mostrarDatosSerie(serie);
        });
        serieBody.appendChild(trElement);
    };
    for (var _i = 0, lstSeries_1 = lstSeries; _i < lstSeries_1.length; _i++) {
        var serie = lstSeries_1[_i];
        _loop_1(serie);
    }
    var trAverage = document.createElement('tr');
    trAverage.innerHTML = "<td>Season average: ".concat(calcularAverage(lstSeries));
    serieBody.appendChild(trAverage);
    seriesTable.appendChild(serieBody);
    mostrarDatosSerie(lstSeries[0]);
}
function mostrarDatosSerie(serie) {
    var infoSerie = document.getElementById("infoSerie");
    infoSerie.innerHTML = "";
    var tbodySerie = document.createElement("tbody");
    var trLink = document.createElement('div');
    trLink.innerHTML = "\n    <img src=\"".concat(serie.imageUrl, "\" class=\"img-fluid\" alt=\"Responsive image\">\n    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n    <p class=\"card-text\">").concat(serie.description, "</p>\n    <a href=\"").concat(serie.link, "\" class=\"card-text\">").concat(serie.link, "</a>");
    tbodySerie.appendChild(trLink);
    infoSerie.appendChild(tbodySerie);
}
