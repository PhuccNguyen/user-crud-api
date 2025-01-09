function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  const arr = [5, 3, 8, 4, 2];
  console.log("Mảng sau khi sắp xếp:", quickSort(arr));
  