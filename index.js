let count = 0;
const SECRET_NUMBER = 98;


while(true){
   const NUMBER = Number(prompt("Enter NUMBER")) ;
  if(NUMBER === SECRET_NUMBER){
    console.log("Вы угадали число 98! Ваше количество попыток:" + count)
    break;
  }
    if(NUMBER >SECRET_NUMBER){
  
 count++;
  console.log( 'Number is less ');

 
}  if (NUMBER <SECRET_NUMBER){
  count++;
  console.log( 'Number is more');

}
}


