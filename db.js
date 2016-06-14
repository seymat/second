/**
 * Created by Şeyma on 14.06.2016.
 */


var http = require('http');

http.createServer(function (q, r) {

    // control for favicon
    var favicon = new Buffer('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64');
    if (q.url === '/favicon.ico') {
        console.log(q.url)
        r.statusCode = 200;
        r.setHeader('Content-Length', favicon.length);
        r.setHeader('Content-Type', 'image/x-icon');
        r.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
        r.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
        r.end(favicon);
        console.log('favicon requested');
        return;
    }

    // not the favicon? say hai
    console.log('hello');
    r.writeHead(200, {'Content-Type': 'text/plain'} );
    r.write('Hello, world!');
    r.end();

}).listen(10000);

console.log('Server running at http://127.0.0.1:10000/');