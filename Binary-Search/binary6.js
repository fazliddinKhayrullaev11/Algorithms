


       let numbers=[0,1,2,3,4,5,6,7,8,9,10];


       let binary=(arr,val)=>{

       let start=0;
       let end=arr.length-1;
       
       while(start<=end){
         let middle=start+Math.floor((end-start)/2);

          if(val===arr[middle]){
          return middle;

           }

          if (val<arr[middle]){
             upper=middle-1;
        
       
           }
          else{

            lower=middle+1;

            }

             }

             }
            console.log(binary(numbers,2));