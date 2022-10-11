function mergeSort(arr) {
  if (arr.length < 2) return arr;
  else {
    let middle = Math.round(arr.length / 2);
    let leftHalfSorted = mergeSort(arr.slice(0, middle));
    let rightHalfSorted = mergeSort(arr.slice(middle));
    //merge the sorted halves
    let result = [];
    let i = (j = k = 0);
    do {
      if (leftHalfSorted[i] < rightHalfSorted[j]) {
        result[k] = leftHalfSorted[i];
        i += 1;
        k += 1;
      } else {
        result[k] = rightHalfSorted[j];
        j += 1;
        k += 1;
      }
    } while (i < leftHalfSorted.length && j < rightHalfSorted.length);

    while (i < leftHalfSorted.length) {
      result[k] = leftHalfSorted[i];
      i += 1;
      k += 1;
    }

    while (j < rightHalfSorted.length) {
      result[k] = rightHalfSorted[j];
      j += 1;
      k += 1;
    }

    return result;
  }
}

console.log(mergeSort([4, 22, 11, 1, 5, 0, 11]));
