// #1 Falsy

function bouncer(arr) {
    let newArray = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] ){
            newArray.push(arr[i]);
        }
    } 
     return newArray;
}


bouncer([36,"shopping", null, 5,])


// #2 Chunky Monkey

function chunkArrayInGroups(arr,size) {
    let newArr = [];

    for(let i = 0; i < arr.length; i+= size){
        newArr.push(arr.slice(i, i+size));
    }
      return newArr;
}

chunkArrayInGroups(["alpha","beta","pizza","sushi","anime","pretzels"], 3);
