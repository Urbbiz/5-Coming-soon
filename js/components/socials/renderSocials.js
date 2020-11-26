import { isinputValid } from "../isinputValid.js"; /* susiimportafom if validacija, kuri yra kitame faile ir kuri validuos gautus duomenis dar pries paluriant funkcija */

function renderSocials(data) {
    if (!isinputValid(data)) {
        return false;
    }
    


    const socialsDOM = document.querySelector('footer > .row')
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if(typeof item !== 'object') {
            continue;
        }
        if (typeof item.icon !== 'string' || item.icon === '') {
            continue;
        }
        if(typeof item.link !== 'string' || item.link === '') {
            continue;
        }

        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

   if( HTML === '') {
       console.error ('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.')
       return false;
   }
    







    socialsDOM.innerHTML = HTML;
    return true;

}

export { renderSocials }