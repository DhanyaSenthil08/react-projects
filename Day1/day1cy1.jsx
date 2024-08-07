function compare(){
    const name1="kabil";
    const name2="kabil";
    const obj1={name:"kabil"};
    const obj2={name:"kabil"};
    console.log(name1===name2);
    console.log(name1===obj1);
    console.log(obj1===obj2);
}
function Day1cy1()
{
    return(
        <div>
            <button onClick={compare}>Click</button>
        </div>
    )
}
export default Day1cy1;