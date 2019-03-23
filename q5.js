const http = require('http');

/*http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000);*/

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    switch(req.method){
        case 'GET':
            res.write('<h1>Hello world</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',data =>{
                res.write('<h1>Hello '+ data+ '</h1>');
                res.end();

            });

            break;
    }
}).listen(3000,(err)=>{
    console.log('Server is listening to port 3000')
});