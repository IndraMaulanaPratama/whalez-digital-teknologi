# RESTFULL API TEST WHAZE TEKNOLOGI
Aplikasi ini dibuat untuk memenuhi test recruitment pegawai PT. Whalez Digital Teknologi

# OPERATING SYSTEM YANG DIGUNAKAN
![LINUX](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

# TEKNOLOGI YANG DIGUNAKAN
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

# DATABASE MANAGEMENT SYSTEM YANG DIGUNAKAN
![MySql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

# CODE EDITOR YANG DIGUNAKAN
![VSCODE](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

# FITURE YANG DIBUAT
- Authentication
-- SignUP
-- SignIn
-- Forgot Password
-- Reset Password

- CRUD
-- Create Movie
-- Show Movie
--Update Movie
-- Delete Movie
-- Disable Movie (Soft Delete)

# DEPENDENCIES YANG DIGUNAKAN
- bcrypt: ^5.0.1,
- dotenv: ^16.0.1,
- express: ^4.18.1,
- mysql: ^2.18.1,
- mysql2: ^2.3.3,
- nodemon: ^2.0.19,
- sequelize: ^6.21.3

# REQUIREMENT
- node: v16.16.0
- npm: 8.16.0

# STRUCTURE
```
. RESTFULL
|
|--- src
|    |-- config
|    |-- controller
|    |-- middleware
|    |-- model
|    |-- routes
|    |-- tool
|
|-- env-example
|-- api_test.http
|-- package.json
```

# INSTALLATION
Clone Project dari repo
```
git clone https://github.com/IndraMaulanaPratama/whalez-digital-teknologi.git
```

Install Dependencies
```
npm install --save
```

Buka File index.js didalam folder src > model

Uncomment line sync database 
```
// *** Uncomment to syncronize model to database *** //
// db.sync({alter: true})
```

Buat Database dengan nama whalez_movie
```
create database whaze_movie
```

Atau Dump dari folder src > config 

# JALANKAN SERVICE
ketikan perintah 
```
npm start
```

# CREDIT
Anda datap hubungi saya di:

[![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/message/K53BUSB6NENUH1)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/wirahmarama)

## TERIMAKASIH, SALAM HANGAT DAN SEHAT SELALU