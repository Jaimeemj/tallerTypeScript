import { Serie } from "./Serie.js";
import { lstSeries } from "./data.js";




mostrarSeries2(lstSeries);

function calcularAverage(lstSeries:Serie[]):number
{
    let total:number = 0;
    for (let index = 0; index < lstSeries.length; index++) {
        const element = lstSeries[index];
        total +=element.seasons;
    }
    return total/lstSeries.length;
}
function mostrarSeries2(lstSeries: Serie[]): void {
    let seriesTable: HTMLTableElement = document.getElementById("tabSeries") as HTMLTableElement;

    let serieBody: HTMLTableSectionElement = document.createElement('tbody');

    for (let serie of lstSeries) {

        let trElement: HTMLTableRowElement = document.createElement('tr');
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td style="color: blue"><span class="serie-link">${serie.name}</span></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        let serieNameElement: HTMLElement = trElement.querySelector('.serie-link') as HTMLElement;
        serieNameElement.addEventListener('click', () => {
            mostrarDatosSerie(serie);
        });
        serieBody.appendChild(trElement);
    }
    let trAverage: HTMLElement=document.createElement('tr');
trAverage.innerHTML=`<td>Season average: ${calcularAverage(lstSeries)}`
serieBody.appendChild(trAverage);
    seriesTable.appendChild(serieBody);

mostrarDatosSerie(lstSeries[0]);
}

function mostrarDatosSerie(serie:Serie):void{
    let infoSerie:HTMLElement= document.getElementById("infoSerie")!;
    infoSerie.innerHTML="";
    let tbodySerie=document.createElement( "tbody"); 
    let trLink =document.createElement('div')
    trLink.innerHTML= `
    <img src="${serie.imageUrl}" class="img-fluid" alt="Responsive image">
    <h5 class="card-title">${serie.name}</h5>
    <p class="card-text">${serie.description}</p>
    <a href="${serie.link}" class="card-text">${serie.link}</a>`
    tbodySerie.appendChild(trLink)
    infoSerie.appendChild(tbodySerie);
}
