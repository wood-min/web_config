const https = require('https');
const url = require('url');

const endpoint = "https://ocpc.baidu.com/ocpcapi/api/uploadConvertData";
const parsedEndpoint = url.parse(endpoint);

const postData = JSON.stringify({
    "token": "jEg1TRzZoIXpNGRcTjnTGyh878KbDLIh@d7ohFELWp8fXz9FZU6FPhlLUqwOAnCQz",
    "conversionTypes": [
            {
                "logidUrl": "http://www.b123.com/12345?XX=XXX&bd_vid=1111",
                "newType": 1
            }
        ]
});

const options = {
    hostname: parsedEndpoint.hostname,
    port: parsedEndpoint.port,
    path: parsedEndpoint.path,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

const req = https.request(options, (res) => {
    //检验状态码，如果成功接收数据
    if (res.statusCode === 200) {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`"res data: ${chunk}`);
        });
    }
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();