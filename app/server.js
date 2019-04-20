const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const socket = require('socket.io');
const cors = require('cors');
const responseTime = require('response-time');
var path = require('path');

require('dotenv').config();

const port = process.env.PORT || 3000;
let users;
let count;
let chatRooms;
let messagesArray = [];
const app = express();


//adding frontend dir
app.use(express.static(path.join(__dirname, '../frontend')));

app.use(bodyParser.json());
// Enable All CORS Requests
app.use(cors());
// Add response time in headers
app.use(responseTime());

const options = {
    reconnectTries: 3,
    poolSize: 3,
  };

const uri = "mongodb+srv://divek:connecttodb@cluster0-h6ard.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri,options);
client.connect((err, Database) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log("Connected to Database");
    const db = Database.db("Chat_App");
    users = db.collection("users");
    chatRooms = db.collection("chatRooms");
    const server = app.listen(port, () => {
        console.log("Server started on port " + port + "...");
    });
    const io = socket.listen(server);

    io.sockets.on('connection', (socket) => {
        socket.on('join', (data) => {
            socket.join(data.room);
            chatRooms.find({}).toArray((err, rooms) => {
                if(err){
                    console.log(err);
                    return false;
                }
                count = 0;
                rooms.forEach((room) => {
                    if(room.name == data.room){
                        count++;
                    }
                });
                if(count == 0) {
                    chatRooms.insert({ name: data.room, messages: [] }); 
                }
            });
        });
        socket.on('message', (data) => {
            io.in(data.room).emit('new message', {user: data.user, message: data.message});
            chatRooms.update({name: data.room}, { $push: { messages: { user: data.user, message: data.message } } }, (err, res) => {
                if(err) {
                    console.log(err);
                    return false;
                }
                console.log("Document updated");
            });
        });
        socket.on('typing', (data) => {
            socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
        });
    });

}); 
app.post('/api/users', (req, res, next) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    let count = 0;    
    users.find({}).toArray((err, Users) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        for(let i = 0; i < Users.length; i++){
            if(Users[i].username == user.username)
            count++;
        }
        // Add user if not already signed up
        if(count == 0){
            users.insert(user, (err, User) => {
                if(err){
                    res.send(err);
                }
                res.json(User);
            });
        }
        else {
            // Alert message logic here
            res.json({ user_already_signed_up: true });
        }
    });
    
});

app.post('/api/login', (req, res) => {
    let isPresent = false;
    let correctPassword = false;
    let loggedInUser;

    users.find({}).toArray((err, users) => {
        if(err) return res.send(err);
        users.forEach((user) => {
            if((user.username == req.body.username)) {
                if(user.password == req.body.password) {
                    isPresent = true;
                    correctPassword = true;
                    loggedInUser = {
                        username: user.username,
                        email: user.email
                    }    
                } else {
                    isPresent = true;
                }
            }
        });
            res.json({ isPresent: isPresent, correctPassword: correctPassword, user: loggedInUser });
    });
});

app.get('/api/users', (req, res, next) => {
    users.find({}, {username: 1, email: 1, _id: 0}).toArray((err, users) => {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
});

app.get('/chatroom/:name', (req, res, next) => {
    let name = req.params.name;
    chatRooms.findOne({name},(err, chatroom) => {
        if(err) {
            console.log(err);
            return false;
        }
        res.json(chatroom.messages);
    });
});

app.get((req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../frontend/index.html')); 

 });
 
 app.use((req, res) => { //put this at end
    res.status(404).sendFile(path.join(__dirname, '../frontend/error.html')); 
 });