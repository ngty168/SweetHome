const express = require('express');
const app = express();
const port = 4000;
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10000mb' }));
app.use(express.json({ limit: '10000mb' }));
app.use(express.urlencoded({ limit: '10000mb' }));
app.use(express.json());
const cors=require("cors");
app.use(cors())
app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
app.get("/",(req,res)=>{
res.send("This Web server is processed for MongoDB")
})

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("ProductData");
productCollection = database.collection("Products");
app.get("/products",cors(),async (req,res)=>{
    const result = await productCollection.find({}).toArray();
    res.send(result)
    }
)
app.get("/products/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await productCollection.find({_id:o_id}).toArray();
    res.send(result[0])
})

app.get("/cakes",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh"}).toArray()
    res.send(result)
})
app.get("/cakes/nabati",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh", brand:"Nabati"}).toArray()
    res.send(result)
})
app.get("/cakes/oreo",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh", brand:"Oreo"}).toArray()
    res.send(result)
})
app.get("/cakes/oneone",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh", brand:"One One"}).toArray()
    res.send(result)
})
app.get("/cakes/cosy",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh", brand:"Cosy"}).toArray()
    res.send(result)
})
app.get("/cakes/afc",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh", brand:"AFC"}).toArray()
    res.send(result)
})
app.get("/candy",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo"}).toArray()
    res.send(result)
})
app.get("/candy/playmore",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Play More"}).toArray()
    res.send(result)
})
app.get("/candy/ferrero",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Ferrero Rocher"}).toArray()
    res.send(result)
})
app.get("/candy/xylitol",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Lotte Xylitol"}).toArray()
    res.send(result)
})
app.get("/candy/hershey",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Hershey's"}).toArray()
    res.send(result)
})
app.get("/candy/bernique",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Bernique"}).toArray()
    res.send(result)
})
app.get("/candy/meiji",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Meiji"}).toArray()
    res.send(result)
})
app.get("/candy/cadbury",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo", brand:"Cadbury"}).toArray()
    res.send(result)
})
app.get("/freshwater",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt"}).toArray()
    res.send(result)
})
app.get("/freshwater/th",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"TH True Juice"}).toArray()
    res.send(result)
})
app.get("/freshwater/pepsi",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"Pepsi"}).toArray()
    res.send(result)
})
app.get("/freshwater/sting",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"Sting"}).toArray()
    res.send(result)
})
app.get("/freshwater/fanta",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"Fanta"}).toArray()
    res.send(result)
})
app.get("/freshwater/mirinda",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"Mirinda"}).toArray()
    res.send(result)
})
app.get("/freshwater/cocacola",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt", brand:"Coca Cola"}).toArray()
    res.send(result)
})
app.get("/snack",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack"}).toArray()
    res.send(result)
})
app.get("/snack/oishi",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack", brand:"Oishi"}).toArray()
    res.send(result)
})
app.get("/snack/poca",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack", brand:"Poca"}).toArray()
    res.send(result)
})
app.get("/snack/lay",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack", brand:"Lay's"}).toArray()
    res.send(result)
})
app.get("/snack/ostar",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack", brand:"O'Star"}).toArray()
    res.send(result)
})
app.get("/snack/slide",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack", brand:"Slide"}).toArray()
    res.send(result)
})
app.get("/hot",cors(), async (req,res)=>{
    const result = await productCollection.find({"group.hot":"yes"}).toArray()
    res.send(result)
})
app.get("/new",cors(), async (req,res)=>{
    const result = await productCollection.find({"group.new":"yes"}).toArray()
    res.send(result)
})
app.get("/similar",cors(), async (req,res)=>{
    const result = await productCollection.find({}).limit(4).skip(48).toArray()
    res.send(result)
})





var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({secret: "Shh, its a secret!"}));




const fs = require('fs');
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
const jwt = require('jsonwebtoken');
const { userInfo } = require('os');

app.post('/login', cors(), async(req, res) => {
    const em = req.body.em;
    const pw = req.body.pw;

    userCollection=database.collection('Users');
    const user=await userCollection.find({email:em}).toArray();
    console.log(user)
    var crypto = require('crypto');
    if(user!==null){
        hash=crypto.pbkdf2Sync(pw, user[0].salt, 1000, 64, `sha512`).toString(`hex`);

        if (user[0].password===hash) {
             const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
                algorithm: 'RS256',  
                expiresIn: 120, 
                subject: user[0]._id.toString()
             })          
             res.status(200).json({ 
                idToken: jwtBearerToken, 
                expiresIn: 120, 
                _id: user[0]._id.toString(),
                add: user[0].address,
                avt: user[0].avatar
            });
          }
          else res.sendStatus(401);  
    }   
})

app.get("/users/:_id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params["_id"]);
    userCollection=database.collection('Users');
    const result = await userCollection.find({_id:o_id}).toArray();
    res.send(result[0])
})
app.post("/users", cors(), async(req, res)=>{
    var crypto = require('crypto');
    salt=crypto.randomBytes(16).toString('hex');

    userCollection=database.collection('Users');
    user=req.body
    
    hash=crypto.pbkdf2Sync(user.password, salt, 1000, 64, `sha512`).toString(`hex`);

    user.password=hash
    user.salt=salt

    await userCollection.insertOne(user)
    res.send(req.body)
})

app.put("/users", cors(), async(req, res)=>{
    await userCollection.updateOne(
        {_id: new ObjectId(req.body._id)},
        {$set: {
            name: req.body.name,
            // email: req.body.email,
            // password: req.body.password,
            birthday: req.body.birthday,
            phone: req.body.phone,
            address: req.body.address,
            // avatar: req.body.avatar
        }})
    var o_id= new ObjectId(req.body_id);
    const result = await userCollection.find({_id:o_id}).toArray();
    res.send(result[0])
})

app.post("/cart", cors(), (req, res)=>{
    product=req.body
    if(req.session.carts==null)
        req.session.carts=[]
    req.session.carts.push(product)
    res.send(product)
})
app.get("/cart", cors(), (req, res)=>{
    res.send(req.session.carts)
})
app.get("/cart/:id", cors(), (req, res)=>{
    if(req.session.carts!=null){
        p=req.session.carts.filter(x=>x.productId==req.body.productId)
        res.send(p)
    }
    else
        res.send(null)
})
app.delete("/cart/:id", cors(), (req, res)=>{
    if( req.session.carts!=null){
        id=req.params["id"]
        req.session.carts=req.session.carts.filter(x=>x.productId !== id);
    }
    res.send(req.session.carts)
})
app.put("/cart", cors(), (req, res)=>{
    if(req.session.carts!=null){
        p=req.session.carts.find(x=>x.productId==req.body.productId)
        if(p!=null)
        {
            p.quantity=req.body.quantity
        }
    }
    res.send(req.sessionID.carts)
})