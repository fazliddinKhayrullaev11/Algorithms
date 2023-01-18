

let values=[0,1,2,3,4,5,6,7,8,9,10];

const binarySearch = (array, target) => {
    let startIndex = 0; // i marked it with 'lower'
    let endIndex = array.length - 1; // i marked it with 'upper'
    while(startIndex <= endIndex) {  // i iterates codes and recurse it untill it found the right solution for the recursive case
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex); // base case
      }

      // all three if loops below are the recursive cases 
      if(target > array[middleIndex]) { // it makes the code move to the rigth side of array middle element
        console.log("Searching the right side of Array")
        startIndex = middleIndex + 1; // it is because that this code has been moved to the right side of array middle element
      }
      if(target < array[middleIndex]) { // it makes the code move to the left side of array middle element
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1;  // it is because that this code has been moved to the left side of array middle element
      }
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    
    console.log("Target value not found in array");

  }
  console.log(binarySearch(values,7));