let matchFound = false
const username:string[]=["Admin","Client1","Client2","Client3","Client4","Client5"];
for(let x=0;x<username.length;x++){
    if(username[x]==="admin"){
    console.log('Welcome admin,do you want status report');
    matchFound = true
    break
    }
}    
if(matchFound===false){
    console.log("Hello client,thankyou for logging in again");
}
export{};