/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here

    let min = -1;
    let usedIndice = [] // store all used indice

    for (let i = 0; i < a.length; i++) {
        // skip all stored indice
        if(usedIndice.includes(i)){
            continue;
        }

        for (let j = i + 1 ; j < a.length ; j++) {

            if(a[j] === a[i]){
                usedIndice.push(i);
                usedIndice.push(j);

                let m = j - i;

                // console.log(i);
                // console.log(j);
                if(min === -1)
                    min = m;
                else if(m < min){
                    min = m;
                }
            }
        }
    }

    return min;
}

console.log(minimumDistances([7,1,3,4,1,7]));
