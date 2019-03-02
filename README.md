# node-js와 mongodb Clusters를 활용한 서버 입니다.
개인적인 연습용 서버입니다.

* * *

## npm 모듈
```
sudo npm i express bcryptjs passport mongoose connect-flash express-session passport-local express-session express-ejs-layouts ejs connect-flash
```

## 프론트엔드 프레임워크
* Bootstrap - <https://getbootstrap.com/>
* Bootswatch - <https://bootswatch.com/>
* Fontawesome - <https://fontawesome.com/>

* * * 

## 실행방법
### 1. 서버 실행
   * `npm i nodemon` - nodemon 설치 
   * `nodemon app.js` - nodemon 이용 서버 start
   
### 2. db 연동 ( <https://cloud.mongodb.com/> )
   * ./config/keys.js -> MongoURI 변경
   * Clusters -> Security -> IP 변경 ( server 실행시 WIFI변경 될때마다 변경 해줘야 함 )
