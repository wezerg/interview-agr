/**
 * Après plusieurs essais, voila le resultat sur lequel je me suis arrété.
 * La compléxité de l'algorithme est selon moi de 0(n^3) puique l'on est sur 3 boucle imbriquée malgré que certaines itérations sont réduites
 * 
 * Vous trouverez en fin de fichier l'appel de la fonction avec l'input de l'énonce donnée et une valeur supplémentaire de test 
 * 
 * - Fonctionnement : 
 * La fonction accepte un tableau de charactère et retourne un tableau de strings
 * La 1ère boucle regarde chaque charactère (cursor1)
 * La 2ème boucle regarde charque charactère n+1 (cursor2)
 * La 3ème boucle regarde chaque charactère n+m (cursor3)
 * Lors de la 3eme boucle on concatène le string et on l'ajoute si il n'est pas déja présent
 * Lorsque l'itération de la 3eme boucle se termine, on réinitialise le string
 */

// ++ => Définition du type char
const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] as const;
type char = typeof lowercaseChars[number];

/**
 * Function that accept one argument, a list of char, and return a list of unique string concatenated from the chars in param
 * 
 * @param arrayPrefix array of chars
 * @returns array of unique strings
 */
function getStringsFromChars(arrayPrefix: char[]): string[]{
    // List of returning strings
    const listString: string[] = [];
    // Loop on each char of the array in param
    for (let i: number = 0; i < arrayPrefix.length; i++) {
        // String to save in list, initialized with current char
        let str: string = arrayPrefix[i];
        // Cursor on begin of sub array
        let cursor: number = i + 1;
        // Save current char if unique
        if (!listString.includes(str)) {
            listString.push(str);
        }
        // Get a look on each char after current char
        for (let j: number = cursor; j < arrayPrefix.length; j++) {
            // Loop on sub array
            for (let k: number = j; k < arrayPrefix.length; k++) {
                str += arrayPrefix[k];
                if (!listString.includes(str)) {
                    listString.push(str);
                }
            }
            // Reset string after loop on sub array
            str = arrayPrefix[i];
        }
    }
    return listString;
}

// Appel de la fonction
getStringsFromChars(['c', 'n', 's']);
getStringsFromChars(['c', 'h', 'b', 'd']);