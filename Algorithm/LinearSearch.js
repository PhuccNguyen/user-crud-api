function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Trả về chỉ số của phần tử
      }
    }
    return -1; // Nếu không tìm thấy
  }
  
  const arr = [10, 20, 30, 40, 50];
  const target = 30;
  console.log("Chỉ số của phần tử tìm được:", linearSearch(arr, target));
  