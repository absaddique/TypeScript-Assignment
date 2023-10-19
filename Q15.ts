const people_:string[] = ['Abu Bakar','Talha','Ali'];
console.log("Talha");
people_.splice(1,1,"Ali");
for(let x=0;x<people_.length;x++){
    console.log(`you are invited to dinner ${people_[x]}`);
}