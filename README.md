# Huynh Nguyen Backend

Backend API cho portfolio website của Huynh Nguyen sử dụng Node.js, Express và MongoDB.

## Cấu trúc thư mục

```
src/
├── config/
│   └── database.js          # Cấu hình kết nối MongoDB
├── controllers/
│   ├── auth.js              # Controllers xử lý authentication
│   └── contact.js           # Controllers xử lý contact form
├── middleware/
│   ├── auth.js              # Middleware xác thực JWT
│   └── errorHandler.js      # Middleware xử lý lỗi
├── models/
│   ├── User.js              # Model User với Mongoose
│   └── Contact.js           # Model Contact cho form liên hệ
├── routes/
│   ├── auth.js              # Routes cho authentication
│   ├── contact.js           # Routes cho contact API
│   └── index.js             # Routes chính
└── server.js                # File khởi động server
```

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Cấu hình environment variables:
- Copy file `config.env.example` thành `config.env`
- Cập nhật các biến môi trường cần thiết

3. Khởi động server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Contact Form (Public)
- `POST /api/contact` - Gửi form liên hệ (họ tên, số điện thoại, email, lời nhắn)

### Contact Management (Admin Only)
- `GET /api/contact` - Lấy danh sách tất cả liên hệ
- `GET /api/contact/:id` - Lấy chi tiết một liên hệ
- `PUT /api/contact/:id` - Cập nhật trạng thái liên hệ
- `DELETE /api/contact/:id` - Xóa liên hệ

### Authentication
- `POST /api/auth/register` - Đăng ký user mới
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Lấy thông tin user hiện tại (cần authentication)

### Health Check
- `GET /api/health` - Kiểm tra trạng thái server

## Tính năng

- ✅ Kết nối MongoDB với Mongoose
- ✅ Authentication với JWT
- ✅ Password encryption với bcrypt
- ✅ Error handling middleware
- ✅ Rate limiting
- ✅ Security headers với Helmet
- ✅ CORS support
- ✅ Logging với Morgan
- ✅ Environment variables
- ✅ Input validation

## Công nghệ sử dụng

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM cho MongoDB
- **JWT** - JSON Web Tokens cho authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **express-rate-limit** - Rate limiting
- **dotenv** - Environment variables

## Environment Variables

### Local Development
Tạo file `config.env` với các biến sau:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Railway Deployment
Khi deploy lên Railway, cần cấu hình các environment variables sau:

1. **MONGODB_URI**: Connection string MongoDB Atlas
2. **DB_NAME**: Tên database (optional, có thể để trong connection string)
3. **JWT_SECRET**: Secret key cho JWT
4. **JWT_EXPIRES_IN**: Thời gian hết hạn JWT (default: 7d)
5. **RATE_LIMIT_WINDOW_MS**: Thời gian window cho rate limiting (default: 900000)
6. **RATE_LIMIT_MAX_REQUESTS**: Số request tối đa (default: 100)

**Lưu ý quan trọng**: Đảm bảo MongoDB Atlas cho phép kết nối từ Railway IP bằng cách:
1. Vào MongoDB Atlas Dashboard
2. Network Access → ADD IP ADDRESS
3. Chọn "ALLOW ACCESS FROM ANYWHERE" (0.0.0.0/0)