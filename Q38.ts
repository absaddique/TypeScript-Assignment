function describe_city(name:string,country:string){
    console.log(`${name} is in ${country}`);
}
describe_city("Karachi","Pakistan");
function describeCity(name:string,country:string="Pakistan"){
    console.log(`${name} is in ${country}`);
}
describeCity("Lahore");
describeCity("Islamabad");
describeCity("Karachi");