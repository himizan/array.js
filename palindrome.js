let value = "madams"
const reValue = ()=>{
    let myRevValue = value.toString().split("").reverse().join("");
    let myStr = value.toString();
    if(myRevValue == myStr){
        console.log("Palidrome");
    }else{
        console.log("Not a Palidrome");
    }
}
reValue();