jumlahDataArray = function(dataArray){
    let result = 1;
    for ( let i = 0 ; i < dataArray.length; i++ ){
        result = result * dataArray[i];
    }
    return result;
}

myArray = [1,2,3];


console.log(jumlahDataArray(myArray))