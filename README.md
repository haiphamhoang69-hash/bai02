BÀI 2: ỨNG DỤNG NODE.JS ĐẦU TIÊN
1. Mục tiêu
Tạo ứng dụng Node.js đầu tiên.
Sử dụng module http để tạo HTTP Server.
Khởi chạy máy chủ tại cổng 3000.
Truy cập localhost:3000 để hiển thị họ tên và mã sinh viên.
2. Tạo chương trình myFirstNode.js

Tạo file myFirstNode.js và nhập đoạn code sau:

javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello World!<br>Tôi Là Phạm Hoàng Hải!<br>CD-CNTT18A13!');
}).listen(3000);

3. Cách chạy chương trình

Mở Terminal tại thư mục chứa file myFirstNode.js, nhập lệnh:

bash
node myFirstNode.js


Sau khi chạy lệnh, Node.js sẽ khởi động máy chủ và lắng nghe yêu cầu truy cập tại cổng 3000.

4. Truy cập HTTP Server

Mở trình duyệt và truy cập địa chỉ:

text
http://localhost:3000

5. Kết quả chạy chương trình

Khi truy cập vào địa chỉ trên, trình duyệt hiển thị:

text
Hello World!
Tôi Là Phạm Hoàng Hải!
CD-CNTT18A13!

6. Kết luận

Đã tạo và chạy thành công ứng dụng Node.js đầu tiên bằng cách sử dụng module http để khởi tạo HTTP Server tại cổng 3000. Truy cập thành công địa chỉ localhost:3000 và hiển thị nội dung Hello World, họ tên Phạm Hoàng Hải cùng mã sinh viên CD-CNTT18A13 trên trình duyệt.
