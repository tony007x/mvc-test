import express from 'express';
import CowAPI from '../Controller/cow'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/cow',CowAPI)

app.get('/', (req, res)=>{
  res.json({message: "hello api"})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});