let myname : string = "Abu Bakar Saddique";
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
function titleCase(_name:string){
let name_;
     name_ = _name.toLowerCase().split(" ");
    for (let x = 0 ; x <name_.length;x++){
        name_[x] = name_[x].charAt(0).toUpperCase() + name_[x].slice(1);
    }
    return name_.join(" ");

}
console.log(titleCase("Abu Bakar Saddique"));
