class Dessin {
   getRandomNumber(max, min){
    let randomNumber = Math.floor(Math.random() * (max- min +1) + min);
    return randomNumber;
  }

}