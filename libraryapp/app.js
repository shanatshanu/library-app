const express =require("express");
const app = express();
app.set ('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.use(express.static(__dirname+'/public'))
const booksRouter = express.Router();
const adminRouter = express.Router();
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
const authorsRouter = express.Router();
app.use('/authors',authorsRouter);
const BookData = require('./src/model/bookdata')

const nav=[
          {link:'/books',name:'Books'},
          {link:'/authors',name:'Authors'},
          {link:'/admin',name:'Add Book'}

]

app.get('/',(req,res)=>{
    res.render('index',{title:'PGM Library', nav
});
})


var books=[
    {author:'Jawaharlal Nehru', img:''} ,
    {author:'APJ Abdul Kalam', img:''}
]


booksRouter.get('/',(req,res)=>{
    BookData.find()
    .then(function(books){
    res.render('books',{title:'PGM Library',nav,books
    })
}) 
})
adminRouter.get('/',(req,res)=>{
    res.render('addbook',{title:'PGM Library',nav,books
});
}) 

adminRouter.get('/add',(req,res)=>{

    var item={
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image
    }
    var book= BookData(item);
    book.save();
    res.redirect('/books');
})



authorsRouter.get('/',(req,res)=>{
    res.render('authors',{title:'PGM Library',
    nav:[{link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'}]
});
}) 

//same as book create authors

app.get('/login',(req,res)=>{
    res.send("You are logged in");
})

app.listen(5000,()=>{
    console.log("Server started..")
})