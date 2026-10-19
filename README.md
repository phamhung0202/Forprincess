# 🌷 Website Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 (Dành riêng cho Thiên Phúc)

Trang web thiệp chúc mừng tương tác 20/10 đầy lãng mạn, thơ mộng, với tông màu mận đen, tím đậm, hồng cánh sen và ánh vàng kim lấp lánh.

## ✨ Tính năng nổi bật

1. **Màn hình chào mừng tương tác (Interactive Welcome Quiz):**
   - Màn hình xuất hiện đầu tiên với 2 hình ảnh nổi bật đặt cạnh nhau: hình vẽ chibi dễ thương (`thienphuc1.jpg`) và ảnh chân dung rạng rỡ (`thienphuc2.jpg`).
   - Câu hỏi trắc nghiệm đơn lựa chọn (single-choice): "Bạn là Thiên Phúc như thế nào nhỉ? 🌸"
   - Nút "XÁC NHẬN ✨" chỉ mở khóa khi đã chọn 1 đáp án.
   - Khi xác nhận, hiển thị thông điệp lãng mạn bất ngờ: dù chọn đáp án nào thì thật ra Thiên Phúc đều sở hữu trọn vẹn cả sự xinh đẹp, dễ thương, dịu dàng và đặc biệt nhất.
   - Nút "TIẾP TỤC ĐẾN MÓN QUÀ 💝" chuyển tiếp mượt mà vào màn hình đóa hoa ly.

2. **Màn hình mở đầu (Hero Section):**
   - Biểu tượng đóa hoa ly hồng phấn mềm mại (Soft Pink Lily) nở rộ huyền ảo bằng SVG vector với 6 cánh xòe uốn lượn, các đốm nhụy và bầu nhụy vàng óng nổi bật.
   - Hoạt họa vươn nở, đung đưa và các hạt bụi hoa lung linh phát sáng.
   - Badge "ĐẶC BIỆT DÀNH TẶNG EM", tựa đề "GỬI EM BÉ".
   - Nút phát sáng "MỞ HỘP THƯ & MÓN QUÀ" chuyển thẳng trực tiếp vào lá thư chúc mừng.

3. **Lá thư chúc mừng (Greeting Letter):**
   - Toàn bộ bức thư (tiêu đề, 4 đoạn nội dung, câu kết) được chuyển sang phông chữ viết tay lãng mạn, mềm mại và thanh thoát (`Dancing Script`), hiển thị chuẩn xác 100% tiếng Việt có dấu và các emoji.
   - Màu chữ được giữ nguyên **màu đen** tinh tế, sắc nét và trang nhã trên nền thiệp kem cổ điển.
   - Nút bấm chuyển cảnh kỳ diệu: "NHẤN ĐỂ BẮT ĐẦU KHOẢNH KHẮC DIỆU KỲ".

4. **Hiệu ứng pháo hoa & Hiện ảnh chân dung thật (Real Portrait Reveal):**
   - Pháo hoa bay lên từ chân màn hình cùng âm thanh chùm pháo.
   - Bức ảnh thật `public/images/ThienPhuc.jpg` dần dần lộ diện rõ nét ở vị trí trung tâm cùng quầng hào quang và các hạt ma thuật xoay quanh.
   - Dòng chú thích ngọt ngào bên dưới chân dung: **`Em 100 điểm 💗✨🌷`**.

5. **Màn hình chúc mừng kết thúc (Final Celebration Screen):**
   - Ảnh chân dung thật của Thiên Phúc (`thienphuc3.jpg`) được phóng to thêm ~15% trong khung tròn nổi bật với viền ánh hồng mềm mại.
   - Bao quanh khung ảnh là hệ thống các ngôi sao 4 cánh, tia sáng lớn - vừa - nhỏ (hồng phấn, vàng kim, oải hương, trắng ấm) lấp lánh tự nhiên, nhấp nháy đa tầng mà không che khuất gương mặt.
   - Tiêu đề **“THIÊN PHÚC”** với nét chữ viết tay lãng mạn bay bổng (`Dancing Script`).
   - Nền được nâng độ sáng thêm 10–15% với quầng sáng tím hồng khuếch tán mềm mại phía sau chân dung.
   - Hai nút điều hướng hoạt động 100%:
     - **"THỬ KHOẢNH KHẮC DIỆU KỲ"**: Bắn lại pháo hoa và ảnh chân dung.
     - **"ĐỌC LẠI HỘP THƯ"**: Quay lại lá thư chúc mừng.

6. **Âm thanh & Hiệu ứng:**
   - Sử dụng Web Audio API tích hợp sẵn (tự tạo âm thanh lung linh, mở hộp và pháo nổ mà không lo lỗi thiếu file).
   - Nút bật/tắt âm thanh (mặc định tắt theo tiêu chuẩn UX).

---

## 🛠️ Hướng dẫn tùy biến thông điệp & Tên

Mở tệp [`src/config/greeting.ts`](file:///c:/Users/PHAMHUNG/OneDrive/Desktop/forThienPhuc/src/config/greeting.ts) để sửa:
- `recipientName`: Tên người thương (mặc định: "Thiên Phúc")
- `senderName`: Tên người gửi
- Nội dung thư, lời chúc, các nút bấm,...

---

## 🚀 Khởi chạy dự án

### Cài đặt thư viện:
```bash
npm install
```

### Chạy chế độ phát triển (Development Server):
```bash
npm run dev
```
Truy cập đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`).

### Đóng gói sản phẩm (Production Build):
```bash
npm run build
```
Thư mục xuất bản: `dist/`.
