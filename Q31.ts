let username:string[] = ["username1","username2","username3"];
if(username.length==0){
    console.log("We need to find some user");
}else{
    for (var i= 0;i<username.length ;++i) {
        username.pop()
        console.log(username);
}
console.log("we need to find some users");
}
// }else{
//     console.log("No user found")
// }