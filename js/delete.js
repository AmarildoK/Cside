var oauth = OAuth({
    consumer: {
        public: '6c6fe642c14dc06386a4889464defdae',
        secret: 'c5c876f555255664'
    },
    signature_method: 'HMAC-SHA1'
});



var request_data = {
    url: 'https://www.flickr.com/services/oauth/request_token',
    method: 'POST'

};

request({
    url: request_data.url,
    method: request_data.method,
    form: oauth.authorize(request_data, token)
}, function(error, response, body) {
    //process your data here
});