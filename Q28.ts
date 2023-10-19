let peronAge : number = 49;
if(peronAge<2){
    console.log("the person in baby");
}else if(peronAge>=2 && peronAge<4){
    console.log('the person is a toddler');
}else if (peronAge>=4 && peronAge<13){
    console.log ('the person is an kid');
}else if (peronAge>=13 && peronAge<20){
    console.log ("the person is a teenager ");
}else if(peronAge>=20 && peronAge<65){
    console.log (" the person is an adult");
}else{
    console.log("person is older");
}