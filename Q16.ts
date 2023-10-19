const people_:string[] = ['Abu Bakar','Talha','Ali'];
for(let x=0;x<people_.length;x++){
    console.log(`we found a bigger dinner table and invite more for dinner${people_[x]}`);
}
people_.unshift("Farhan");
people_.splice(1,0,"Hashim");
people_.push("Haseeb");
for(let x=0;x<people_.length;x++){
    console.log(`you are invited with some new people ${people_[x]}`);
}
export{}