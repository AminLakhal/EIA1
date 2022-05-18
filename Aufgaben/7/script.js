//"Die Internetnutzung in Deutschland beträgt im Jahr 2022: xxx %" "Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung 
//in Deutschland im Jahr 2022: xxx %" "Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2008 um xxx % verändert."
let euiNutzerzahl2020 = 389000000;
const arr = [
    { name: "Deutschland", eZahl20: 83240000, iNutzer20: 79130000, eZahl22: 83756658, iNutzer22: 79130000, },
    { name: "Frankreich", eZahl20: 67390000, iNutzer20: 60420000, eZahl22: 6548000, iNutzer22: 60420000, },
    { name: "Italien", eZahl20: 59640000, iNutzer20: 54800000, eZahl22: 59530000, iNutzer22: 54800000, },
    { name: "Bulgarien", eZahl20: 11520000, iNutzer20: 50860000, eZahl22: 11580000, iNutzer22: 10860000, },
];
// Internetnutzer 2008 fiktiv
let iNutzer08 = [5040000, 3040000, 20420000, 39130000,];
let gNutzer22 = arr[0].iNutzer22 + arr[1].iNutzer22 + arr[2].iNutzer22 + arr[3].iNutzer22;
let gNutzer08 = iNutzer08[0] + iNutzer08[1] + iNutzer08[2] + iNutzer08[3]; //gesamtnutzer08
let gEinw22 = arr[0].eZahl22 + arr[1].eZahl22 + arr[2].eZahl22 + arr[3].eZahl22; //gesamtnutzer
var a07;
(function (a07) {
    document.querySelector("h1").innerHTML = "Internetnutzung in der Europäischen Union";
    document.querySelector("section h2").innerHTML = JSON.stringify(gNutzer22 / 1000000) + " Mio";
    document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in der EU im Jahre 2022";
    document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((gNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
    document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
    document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((gNutzer08 * 100 / gNutzer22).toFixed(2));
    document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
    document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify(gNutzer22 / 1000000 - gNutzer08 / 1000000) + " Mio";
    document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
    document.querySelector(".chart").setAttribute("style", "height:" + gNutzer22 * 100 / euiNutzerzahl2020 + "%");
    function germany() {
        document.querySelector("h1").innerHTML = "Internetnutzung in Deutschland";
        document.querySelector("section h2").innerHTML = JSON.stringify(arr[0].iNutzer22 / 1000000) + " Mio";
        document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in Deutschland";
        document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((arr[0].iNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
        document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
        document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((iNutzer08[0] * 100 / arr[0].iNutzer20).toFixed(2));
        document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
        document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify((arr[0].iNutzer20 / 1000000 - iNutzer08[0] / 1000000).toFixed(2)) + " Mio";
        document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
        document.querySelector(".chart").setAttribute("style", "height:" + arr[0].iNutzer22 * 100 / euiNutzerzahl2020 / 140 * 100 + "%");
    }
    function france() {
        document.querySelector("h1").innerHTML = "Internetnutzung in Frankreich";
        document.querySelector("section h2").innerHTML = JSON.stringify(arr[1].iNutzer22 / 1000000) + " Mio";
        document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in Frankreich";
        document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((arr[1].iNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
        document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
        document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((iNutzer08[1] * 100 / arr[1].iNutzer20).toFixed(2));
        document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
        document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify((arr[1].iNutzer20 / 1000000 - iNutzer08[1] / 1000000).toFixed(2)) + " Mio";
        document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
        document.querySelector(".chart").setAttribute("style", "height:" + arr[1].iNutzer22 * 100 / euiNutzerzahl2020 / 140 * 100 + "%");
    }
    function italy() {
        document.querySelector("h1").innerHTML = "Internetnutzung in Italien";
        document.querySelector("section h2").innerHTML = JSON.stringify(arr[2].iNutzer22 / 1000000) + " Mio";
        document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in Italien";
        document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((arr[2].iNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
        document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
        document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((iNutzer08[2] * 100 / arr[2].iNutzer20).toFixed(2));
        document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
        document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify((arr[2].iNutzer20 / 1000000 - iNutzer08[2] / 1000000).toFixed(2)) + " Mio";
        document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
        document.querySelector(".chart").setAttribute("style", "height:" + arr[2].iNutzer22 * 100 / euiNutzerzahl2020 / 140 * 100 + "%");
    }
    function bulgaria() {
        document.querySelector("h1").innerHTML = "Internetnutzung in Bulgarien";
        document.querySelector("section h2").innerHTML = JSON.stringify(arr[3].iNutzer22 / 1000000) + " Mio";
        document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in Bulgarien";
        document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((arr[3].iNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
        document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
        document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((iNutzer08[3] * 100 / arr[3].iNutzer20).toFixed(2));
        document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
        document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify((arr[3].iNutzer20 / 1000000 - iNutzer08[3] / 1000000).toFixed(2)) + " Mio";
        document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
        document.querySelector(".chart").setAttribute("style", "height:" + arr[3].iNutzer22 * 100 / euiNutzerzahl2020 / 140 * 100 + "%");
    }
    function stars() {
        document.querySelector("h1").innerHTML = "Internetnutzung in der Europäischen Union";
        document.querySelector("section h2").innerHTML = JSON.stringify(gNutzer22 / 1000000) + " Mio";
        document.querySelector("h2+p").innerHTML = "Gesamtzahl der Nutzerinnen und Nutzer in der EU im Jahre 2022";
        document.querySelector("section:nth-child(4) h2").innerHTML = JSON.stringify((gNutzer22 * 100 / euiNutzerzahl2020).toFixed(2)) + " %";
        document.querySelector("section:nth-child(4) h2+p").innerHTML = "Relativ zur Gesamtzahl in der EU";
        document.querySelector("section:nth-child(5) h2").innerHTML = JSON.stringify((gNutzer08 * 100 / gNutzer22).toFixed(2));
        document.querySelector("section:nth-child(5) h2+p").innerHTML = "Wachstumsrate seit 2008 in der EU";
        document.querySelector("section:nth-child(6) h2").innerHTML = JSON.stringify(gNutzer22 / 1000000 - gNutzer08 / 1000000) + " Mio";
        document.querySelector("section:nth-child(6) h2+p").innerHTML = "Wachstumsrate gesamt zwischen 2008 and 2022 in der EU";
        document.querySelector(".chart").setAttribute("style", "height:" + gNutzer22 * 100 / euiNutzerzahl2020 + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".germany").addEventListener("click", germany);
        document.querySelector(".italy").addEventListener("click", italy);
        document.querySelector(".france").addEventListener("click", france);
        document.querySelector(".bulgaria").addEventListener("click", bulgaria);
        document.querySelector(".stars").addEventListener("click", stars);
    });
})(a07 || (a07 = {}));
//# sourceMappingURL=script.js.map