

/**
 * SRenderSocial funkcijai skirtu ivesties duomenu ( input params) validacija
 * @param {string} selector selektorus, kaip rasti norima vieta, kaip bus istatomas sugeneruotas kodas
 * @param {Array} data duomenu  masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaita, tai grazina`false`, priesingu atveju `true`
 */
 
function isinputValid (selector,data) {
    if(selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo')
        return false;

    }
    if(selector == '') {
        console.error('ERROR: selektorius negali buti tuscias')
        return false;

    }
    if (!Array.isArray(data)) {
        console.error ('ERROR: social ikonom generuoti reikia array tipo duomenu')
        return false;
    }
    if(data.length === 0) {
        console.error ('Error; social ikonom reikia ne tuscio array tipo duomenu saraso ')
    }
return true; /* jeigu virsui patikrinimus praejo data, tuomet isspausdins, kad patikrinimas praejo ir jis yra validus */
}

export {isinputValid} /* tam kad sita funkcija galetu naudotis kitas failas, turime ji exportuoti. */