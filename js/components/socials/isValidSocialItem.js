/**
 * RenderSocial() funkcijos metu vykdomame cikle gaunamu duomenu validacija
 * @param {object} itemObject objektas aprasantis viena social nuoroda, kuri sudaro icona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
 */

function isValidSocialItem(itemObject) {
    if(typeof itemObject !== 'object') {
        console.warn ('ERROR: social elemento turetu buti objektas');
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
     itemObject.icon === '') {
        console.warn ('ERROR: social ikona  turetu buti tekstine ir ne tuscia');
        return false;
    }
    if(typeof itemObject.link !== 'string' ||
     itemObject.link === '') {
        console.warn ('ERROR: social elemento turetu buti tekstine ir ne tuscia');
        return false;
    }

    return true; 
}

export {isValidSocialItem}