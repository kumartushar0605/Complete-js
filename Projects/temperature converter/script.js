const calculateTemp= ()=>{
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;// in option , we have to select faren. cel. in index, like this

    let resultt;

    const celToFah = (cel) => {
let fahenheit = Math.round((cel * 9/5 )+ 32);
return fahenheit;
    }
    const fehtoCel = (fehr) => {
        let celsius = Math.round((fehr -32)+ 5/9);
        return celsius;
            }
  
    if(valueTemp=="cel"){

    resultt =celToFah(numberTemp);
    document.getElementById('resultcontainer').innerHTML = `${resultt}Fahrenheit`


}else{
    resultt =fehtoCel(numberTemp);
    document.getElementById('resultcontainer').innerHTML=`${resultt}Celsius`
}
}
