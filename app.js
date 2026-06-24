const http=require('http');

const server=http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	res.end("Hello This is my first node.js server app by Raviraj RJ Solanki");
});

// Start the server
server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
