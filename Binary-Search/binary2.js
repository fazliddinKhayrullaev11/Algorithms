// let values=[0,1,2,3,4,5,6,7,8,9,10];

// let binSearch =(tar,arr)=>{

//   for (let i = 0; i < arr.length; i++) {
//     console.log("attempt");
//     if (tar===arr[i]){
//         return i
//     }
    
//   }
//   return -1

// }
// console.log(binSearch(13,values));


// let binary=(arr,val)=>{
//     let lower=0;
//     let upper=arr.length-1;
//     while (lower<=upper) {

//         console.log("attempt");
//     // let middle=Math.floor((lower+upper)/2)
//     let middle=lower+Math.floor((upper-lower)/2);
//     if (val===arr[middle]) {
//         return middle;

        
//     }
//     if (val<arr[middle]) {
//         upper=middle-1
        
//     } else{
//         lower=middle+1
//     }

        
//     }
//     return "element not found"
// }
// console.log(binary(values,8));
let values=[0,1,2,3,4,5,6,7,8,9,10];

// let binSearch =(tar,arr)=>{

//   for (let i = 0; i < arr.length; i++) {
//     console.log("attempt");
//     if (tar===arr[i]){
//         return i
//     }
    
//   }
//   return -1

// }
// console.log(binSearch(13,values));


// let binary=(arr,val)=>{
//     let lower=0;
//     let upper=arr.length-1;
//     while (lower<=upper) {

//         console.log("attempt");
//     // let middle=Math.floor((lower+upper)/2)
//     let middle=lower+Math.floor((upper-lower)/2);
//     if (val===arr[middle]) {
//         return middle;

        
//     }
//     if (val<arr[middle]) {
//         upper=middle-1
        
//     } else{
//         lower=middle+1
//     }

        
//     }
//     return "element not found"
// }

// console.log(binary(values,8));






let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


let binarySearch=(arr,val)=>{
           
         
      let lower=0;
      let upper=arr.length-1;



     while(lower<=upper){
        console.log('attempt');
      let middle=lower+Math.floor((upper-lower)/2);
         
     if(val===arr[middle]){
     return middle
          
      }

     if (val<middle){
        
       upper=middle-1;
      }  else{

       lower=middle+1;

        }
      
        }

        }


       console.log(binarySearch(numbers,6));