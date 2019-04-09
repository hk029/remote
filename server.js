const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const spawn = require('child_process')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));


app.use(bodyParser.json())
app.post('/', (req, res) => {
    const {repository} = req.body;
    const {name} = repository;
    switch(name){
        case 'tech-blog':
        console.log('tech!');
        updateBlog();
        break;
        
    }
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

const updateBlog = () => {
    spawn.exec('/Users/hawkeye-kai/project/voidsky/test.sh', {} , (a, b)=> console.log(b,'successs'));
}
// updateBlog()