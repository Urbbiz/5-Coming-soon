function inputValidation (data) {
    if (!Array.isArray(data)) {
        console.error ('ERROR: social ikonom generuoti reikia array tipo duomenu')
        return false;
    }
    if(data.length === 0) {
        console.error ('Error; social ikonom reikia ne tuscio array tipo duomenu saraso ')
    }
return true; /* jeigu virsui patikrinimus praejo data, tuomet isspausdins, kad patikrinimas praejo ir jis yra validus */
}

export {inputValidation} /* tam kad sita funkcija galetu naudotis kitas failas, turime ji exportuoti. */