const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    let result;


    const celToFah =(cel) => Math.round((cel*1.8) + 32);

    const fahToCel = (fah)=>Math.round([(fah-32)*5]/9);

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }
    else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
}