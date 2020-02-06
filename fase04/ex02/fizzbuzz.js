function fizzbuzz(num1, num2){
    var a = num1
    while(a<= num2){
         if (a % 3 === 0 && a % 5 === 0){
          console.log(a + " fizzbuzz ")
          a++
        }
        if(a % 5 === 0){
          console.log(a + " buzz ")
         a++
    }
        if(a % 3 === 0){
        console.log(a + " fizz ")
         a++
}
console.log(a)
a++
}
}
