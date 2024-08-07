function CE2()
{
    let myObject={name:"Madras"};
    let newObject=myObject;
    myObject.name="Chennai";
    let myArray=["a","e","i","o"];
    let vArray=myArray;
    myArray.push("u");
    console.log(myObject);
    console.log(myArray);
    alert("Check the console output!");
}
 function Day1ce2()
 {
    return(
        <div>
        <p>ce2</p>
        <button onClick={CE2}>ce2</button>
        </div>
    )
 }
 export default Day1ce2