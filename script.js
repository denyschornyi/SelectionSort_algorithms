const findSmallest = (array) => {
    let smallest = array[0];
    let smallestIndex = 0;

    for(let i = 1; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
            smallestIndex = i;
        }
    }
    return  smallestIndex;
}

const selectionSort = (array) =>{
    const sortedArray = [];
    const length = array.length;
    for(let i = 0; i < length; i++){
        let smallestIndex = findSmallest(array);
        sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }
    return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
