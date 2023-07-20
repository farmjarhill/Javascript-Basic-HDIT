console.log("Hello world form HTML");

// Dùng vòng lặp for để duyệt qua tất cả các phần tử của cái điều kiện mình muốn lọc
let arr = ['MU', 'ManCity', 'Liver', 'Chelsea']
let i = 0;
for (let i = 0; i < arr.length; i++) {             // for(Khởi tạo giá trị; Check điều kiện; Sau khi thực hiện điều kiện thì làm gì?)
  console.log("Check variable i =", arr[i]);        // Không nên dùng biến var i thay cho let i vì phạm vi của var vượt khỏi block code của chính nó
                                                    // Điều này sẽ gây nên sai thông tin chồng chéo, cập nhật linh tinh, ảnh hưởng đến giá trị biến khác.
}                                                   // Khi khai báo bằng let, phạm vi của hàm chỉ tác đụng trong hàm đấy thôi.

//var i = 0;
console.log('Check variable i:', i)

// i++ ==== i = i + 1
// ++ i 