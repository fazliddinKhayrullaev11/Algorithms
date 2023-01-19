



let numbers=[0,1,2,3,4,5,6,7,8,9,10];


let linear=(arr,val)=>{

    for (let i = 0; i < arr.length; i++) {
        if (val===arr[i]) {
            return i;
            
        }
        else{
             return -1;
        }
        
    }
};
console.log(linear(numbers,11));

 let binary=(arr,val)=>{
    let lower=0;
    let upper=arr.length-1;
       
    while (lower<=upper) {
        console.log("attempts");
        let middle=lower+Math.floor((upper-lower)/2)
        if (val===arr[middle]) {
            return middle
            
        }
        if (val>arr[middle]) {
            lower=middle+1;
            
        } else{
            upper=middle-1;
        }
        
       }


 }
      




console.log(binary(numbers,9));