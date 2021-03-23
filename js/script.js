/**
 * 
 Scrivi un programma che stampi i numeri da 1 a 100, 
 ma per i multipli di 3 stampi “Fizz” al posto del numero e 
 per i multipli di 5 stampi Buzz. 
 Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 * 
 * 
 * 
 */
 var number3 = [];

 var number5 = [];

 var number3_5 = [];

for (var i = 1; i <= 100; i++) {
    console.log([i]);

    if (i % 3 == 0){
        number3.push(i);
        
    }
    
    if (i % 5 == 0){
        number5.push(i);
        
    } 
    
    if ((i % 5 == 0) && (i % 3 == 0)){
        number3_5.push(i);

        
    }
}

console.log(number3);
console.log(number5);
console.log(number3_5);

