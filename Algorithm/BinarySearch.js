function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // Nếu không tìm thấy
}

const arr = [10, 20, 30, 40, 50];
const target = 30;
console.log("Chỉ số của phần tử tìm được:", binarySearch(arr, target));
