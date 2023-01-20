






let nums=[0,1,2,3,4,5,6,7,8,9,10,11,12];



function binary(arr,val) {


    let lower=0;
    let upper=arr.length-1;
     

    while (lower<=upper) {
        console.log('attempt');
        let middle = lower+Math.floor((upper-lower)/2);
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

console.log(binary(nums, 7));
  



 