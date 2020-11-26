import { isinputValid } from "../isinputValid.js"; /* susiimportafom if validacija, kuri yra kitame faile ir kuri validuos gautus duomenis dar pries paluriant funkcija */
import {isValidSocialItem} from "./isValidSocialItem.js";

/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector selektorus, kaip rasti norima vieta, kaip bus istatomas sugeneruotas kodas
 * @param {Array} data duomenu  masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinamas `false`, o funkcijai suveikus teisingai - `true`
 */
function renderSocials(selector, data) {  /* pradziai pasirenka selector i kur eis duomenys ir poto jau duomenis(data) */
    if (!isinputValid(selector, data)) {
        return false;
    }
    

//  logic
    const socialsDOM = document.querySelector(selector); /* selector reiskia ta pati kaip querySelector('footer > .row) */

    // jeigu nera priekyje socialsDOM, tumet ismetam error 'nerasta turinio generavimo vieta' ir jeigu jis randa klaida, jis toliau net neleidzia uzsisukti let funkcijai, taupydamas resursus.
    if(!socialsDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        // jeigu sita funkcija if iskvietus ir jam davus 'item' i taji nari ir jeigu jis yra ne validus, tuomet sakau 'continue' tesk darba ir eik prie kito saraso nario. Priesingu atveju ta bloga item prisumuos prie HTML kito nario.
        if(!isValidSocialItem(item)) {
            continue;

        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }
    // post logic validation
   if( HTML === '') {
       console.error ('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.')
       return false;
   }
    





// return

    socialsDOM.innerHTML = HTML;
    return true;

}

export { renderSocials }