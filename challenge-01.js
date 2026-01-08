const massMark = 78, 
      heightMark = 1.69, 
      massJohn = 92, 
      heightJohn = 1.95;
    
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI)