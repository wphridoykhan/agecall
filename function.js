

function agecallll( nem , agee ){
    let boyosh ='';

  if(agee >= 0 && agee <5 ){
    boyosh = 'bacha';
  }else if(agee >= 5 && agee <10){
    boyosh = 'Balog';
  }else if(agee >= 10 && agee <18){
    boyosh = 'jubok';
  }else if(agee >= 18 && agee <30){
    boyosh = 'Yang';
  }else if(agee >= 30 && agee <40){
    boyosh = 'Chccha';
  }else if(agee >= 40 && agee <60){
    boyosh = 'Dada';
  }else if(agee >= 60 && agee <80){
    boyosh = 'Buira';
  }else if(agee >= 80 && agee <100){
    boyosh = 'Konkune buira';
  }else if(agee >= 100 && agee <150){
    boyosh = 'Ar nai mara gese';
  }else if(agee >= 150 ){
    boyosh = 'Atodin manush bache na...';
  }




  console.log(`  Hello ${nem} you are  ${boyosh}  `);

}