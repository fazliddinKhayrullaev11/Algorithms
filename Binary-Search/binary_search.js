

// just practise exercises for Binary Search Algorithms

let playersNum=[1,2,3,5,6,10,91,49,21,30,19,11];
let randomNum=5;









// function binarySearch(array,target) {
//     let leftIn=0;
//     let rightIn=array.length-1;
//     while (leftIn<=rightIn) {
//         let middIn=Math.floor((leftIn +rightIn)/2);
//         if (target===array[middIn]) {
//             return middIn
//         }
//         if (target< array[middIn]) {
//             rightIn=middIn-1
            
//         } else {
//             leftIn=middIn+1
//         }
        
//     }
//        return -1
    
// }
// console.log(binarySearch(playersNum,randomNum));

function myBinary(array,target) {
    let left=0;
    let right=array.length-1;
    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (target===array[mid]) {
            
            return mid
        }
        if (target<=array[mid]) {
            return right=mid-1
            
        } else{
            return left=mid+1
        }

    }


    
}
  console.log(myBinary(playersNum,randomNum));