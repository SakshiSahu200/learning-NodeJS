const fs = require('fs');

const requestHandler = (req,res) => {
     ///console.log(req);} // req is the obj NodeJS generated for us 
    //with all the data of incoming request when we visit localhost:3000
    // console.log(req.url, req.method, req.headers);
    // const url = req.url;
    // const method = req.method;
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Hey</title></head>');
        res.write('<body><form action="/message" method= "POST"><input type= "text" name = "message"><button>Click</button></form></body>');
        res.write('</html');
        return res.end(); //using return so that it does not execute rest lines as no headers or write method should be used after res.end();
    }
    //now adding a condition to make url set back to / from message and take the content of input and put into a file\\
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);  //array of buffer chunk
        });
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString(); //with concat we are creating one buffer with all the chunks
            console.log(parsedBody );
            const message = parsedBody.split('=')[0];
           // fs.writeFileSync('message.txt', message); //storing in form of key-value pair
            //writeFileSync basically blocks the execution of next line of code until this file is done 
            fs.writeFile('message.txt', message, err => { //using this for asynchronous nature of NodeJS
                res.statusCode = 302;
                res.setHeader('Location', '/'); //on submit we will remain on same page
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello from my NodeJs</title></head>');
    res.write('<body>Running common code</body>');
    res.write('<html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text';
// }

// module.exports.handler = requestHandler;
exports.handler = requestHandler
exports.someText = 'Some hard coded text';