var http=require("http");
var querystring=require("querystring");

function fun(v)
{
    return`
    <table style="border:1px solid red;background-color:rgb(166, 242, 244)">
    <tr>
        <td>NAME</td>
        <td>${v.name}</td>
    </tr>
    <tr>
        <td>EMAIL</td>
        <td>${v.email}</td>
    </tr>
    <tr>
        <td>PASSWORD</td>
        <td>${v.password}</td>
    </tr>
    <tr>
        <td>PHONE NUMBER</td>
        <td>${v.number}</td>
    </tr>
    <tr>
        <td>USER NAME</td>
        <td>${v.username}</td>
    </tr>
    <tr>
        <td>GENDER</td>
        <td>${v.gender}</td>
    </tr>
    <tr>
        <td>AGE</td>
        <td>${v.age}</td>
    </tr>

    </table>`

}
http.createServer(function(req,res)
{
    var c="";
    req.on('data',function(chunk)
    { 
        res.writeHead(200,{'content-type':'text/html'});
        
        c=c+chunk;
        
    });

    req.on('end',function()
    {
        
        res.writeHead(200,{'content-type':'text/html'})

        res.write('<h1 style="color:green">YOUR FORM IS SUBMITED BY POST METHOD<h1>')
        var qs=querystring.parse(c);

        var json=fun(qs)
        res.write(json)

        res.end();
    });
 
}).listen(8080);