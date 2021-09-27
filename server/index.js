import express  from "express"
import cors from "cors"
import morgan from "morgan"

const app = express();
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send({"Hello":"Yes"});
});

app.post('/add', (req, res)=>{
    const data = req.body;
    console.log(data)
    res.send('wow');
})

app.listen(5000, () => {
    console.log(`Server started on http://localhost:5000`);
});