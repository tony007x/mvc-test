#How to start (หาก Clone repo ไป  Run)

1. `yarn`: เพื่อโหลด node_modules
   
2. `yarn dev` : เพื่อรัน Frontend

3. `cd Controller` : เข้าไปในโฟลเดอร์ Controller

5. `yarn` : เพื่อโหลด node_modules
4. `yarn dev`: เพื่อรัน Backend (API)

#อธิบาย

ใน `src/routes/views/home` คือ View ของ Frontend

ใน `Controller`[โฟลเดอร์นี้คือ Backend API] จะมีโฟลเดอร์ Controller , Model, routes

`Controller/cow.ts` เป็น API ที่รับค่า ID มาจาก Frontend
`Model/cowData.ts` เป็น Function ทำจะจัดการค่าต่อจจาก `cow.ts`
`Model/data/cowData.json` เป็นที่เก็บ ข้อมูล ของ  Cow

ใน `route` จะมีไฟล์ `index.ts` ที่ใช้เชื่อมต่อ API ใน `Controller/cow.ts`
