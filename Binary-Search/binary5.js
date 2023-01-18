


let nums=[0,1,2,3,4,5,6,7,8,9,10]

let binary=(arr,val)=>{
 let lower=0;
 let upper=arr.length-1;


 while (lower<=upper) {
 console.log('attempts')
    let middle=lower+Math.floor((upper-lower)/2);

    if (val===arr[middle]) {
        return middle
        
    }
    if (val<arr[middle]) {
        upper=middle-1
        
    } else {
        lower=middle+1;
    }
    }
}

console.log(binary(nums,1));