// selector-  pasakys, kaip rasti mus dominancia vieta.. selectoriu apsimoka kurti todel, kad ta pacia funkcija veliau bus galima panaudoti kad ir kitame projekte, nereikes jos perasineti.
// Target date new year evening 2021-01-01 00:00:00 arba

/**
 *  Generuoja statini laikrodi, kuris rodo kiek liko laiko iki artimiausiu naujusju metu.
 * @param {*} selector CSS taisykle kaip rasti vieta, kur bus generuojamas laikrodzio turinys.
 * @returns {}
 */
function renderClock(selector) {
    const DOM = document.querySelector(selector); /* vieta, kur turi nugulti turinys , pagal duota selector */
    if(!DOM) {  /* Jeigu neras tos vietos kur turi buti turinys, tuomet nutrauks funkcija */
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio turini')
        return false;
    }

    // einamieji metai  (2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    // naujakas = einamieji metai + 1 (2020 + 1 = 2021)
    const newYear = currentYear + 1;

    // susikonstruojame pilna data: ${naujakas}-01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();

    // einamasis laikas yyyy-mm-dd hh:mm:ss
    const currentTimeMiliseconds = date.getTime();

    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;

    // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes

    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 * 60 * 24;

    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;

    const minutes = Math.floor(secondsLeft / 60);

    const seconds = Math.floor(secondsLeft - minutes * 60);


    const HTML = `<div class="time-box">
    <h2>${days}</h2>
    <span>Days</span>
 </div>
 <div class="time-box">
     <h2>${hours}</h2>
     <span>Hours</span>
 </div>
 <div class="time-box">
     <h2>${minutes}</h2>
     <span>Minutes</span>
 </div>
 <div class="time-box">
     <h2>${seconds}</h2>
     <span>Seconds</span>
 </div>`;

    DOM.innerHTML = HTML;
    return true; 
   
}

export {renderClock}