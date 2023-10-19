const oldUsername:string[]=["Abu Bakar","Talha","ALi","Farhan","Haseeb"];
const newUsernames:string[]=["Hashim","Agha","Danish","Faisal","Ahmad"];
for(let x=0;x<oldUsername.length;x++){
    for(let y=0;y<newUsernames.length;y++);
    if(oldUsername[x]==(newUsernames[x])){
        console.log("Change your username");
    }else{
        console.log("username is available");
    }
}