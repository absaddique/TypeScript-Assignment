const names:string[] =["Abu Bakar","Talha","Ali","Farhan","Hashim","Haseeb"];
for(let x=0;x<names.length;x++){
    console.log(`We can invite only two people for dinner ${names[x]}`);
}
for(let y=0;y<4;y++){
    console.log(`${names.pop()} Sorry we cannot invite you`);
}
for(let z=0;z<2;z++){
    console.log(`${names[z]} You are still invited`);
}
names.splice(0,2);
console.log(names);
export{}