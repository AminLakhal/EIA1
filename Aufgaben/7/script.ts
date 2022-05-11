//"Die Internetnutzung in Deutschland beträgt im Jahr 2022: xxx %" "Relativ zur Gesamtzahl der Internetnutzer in der EU ist die Internetnutzung 
//in Deutschland im Jahr 2022: xxx %" "Für Deutschland hat sich die Internetnutzung im Jahr 2022 im Vergleich zu 2008 um xxx % verändert."


let euiNutzerzahl2020: number = 389000000;

interface Country {
    name: string;
    eZahl22: number; //Einwohnerzahljahr
    eZahl20: number; //Einwohnerzahljahr
    iNutzer22: number; //Internetnutzerjahr
    iNutzer20: number; //Internetnutzerjahr

}

const arr: Country[] = [
    { name: "Deutschland", eZahl20: 83240000, iNutzer20: 79130000, eZahl22: 83756658, iNutzer22: 1, },
    { name: "Frankreich", eZahl20: 67390000, iNutzer20: 60420000, eZahl22: 6548000, iNutzer22: 1, },
    { name: "Italien", eZahl20: 59640000, iNutzer20: 54800000, eZahl22: 59530000, iNutzer22: 1, },
    { name: "Belgien", eZahl20: 11520000, iNutzer20: 10860000, eZahl22: 11580000, iNutzer22: 1, },
];
// Internetnutzer 2008 fiktiv
let iNutzer08: number[] =[504000,304000,20420000,39130000,]

for (let i = 0; i < arr.length; i++) {
    console.log("Die Internetnutzung in", arr[i].name, "beträgt im Jahr 2020:", arr[i].iNutzer20 * 100 / arr[i].eZahl20, "%.",
        "Relativ zur Gesamtzahl der Internetnutzer in der EU beträgt die Internetnutzung prozentual in", arr[i].name, arr[i].iNutzer20 * 100 / euiNutzerzahl2020, "% im Jahr 2020:",
        "Für ", arr[i].name, "hat sich die Internetnutzung im Jahr 2020 im Vergleich zu 2008 um ", iNutzer08[i]* 100 / arr[i].iNutzer20 , "% verändert."
    );
}