var TX_INFO_CADS_HTTPListener = "[INFO][HTTPListener] ";

var TX_HTTP_RES_TEST = "HTTP(S) RESPONSE: Test";
var TX_DEBUG_200_OK = "INFO: Send Status 200 OK ";
var HTTPCode_OK = 200;

module.exports = {
    // create Listener for http requests
    httpListener: function (request, response) {
    console.info(TX_DEBUG_200_OK + HTTPCode_OK);
    response.writeHead(HTTPCode_OK);
    response.end(TX_HTTP_RES_TEST);
    }
};
