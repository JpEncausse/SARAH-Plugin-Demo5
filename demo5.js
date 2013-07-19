exports.action = function(data, callback, config, SARAH){
  
  config = config.modules.demo5;
  if (!config.my_url){
  	callback({'tts' : 'Paramètre my_url invalide'});
  	return;
  }

  if (!data.param1){
  	callback({'tts' : 'Paramètre param1 invalide'});
  	return;
  }
  console.log(data.param1); 
  var url2 = "https://dl.dropboxusercontent.com/u/255810/Temporaire/debug/demo5/demo5_REST.json";
  var url3 = "https://dl.dropboxusercontent.com/u/255810/Temporaire/debug/demo5/demo5_REST.xml";

  sendURL(config.my_url, callback, function(body){
    sendURL(url2, callback, function(body2){
      sendURL(url3, callback, function(body3){
        
        var json = JSON.parse(body2);
        console.log('JSON', json.Hello);
        
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser({trim: true});
        parser.parseString(body3, function (err, xml) {
          console.log('XML1', xml.root);
          console.log('XML2', xml.root.hello[0]._, xml.root.hello[0].$.name, '\n'); 
          callback({'tts': xml.root.hello[0]._ });  
        }); 
      }); 
    }); 
  }); 
  
}

var sendURL = function(url, callback, cb){

  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
    if (err || response.statusCode != 200) {
      callback({'tts': "L'action a échoué"});
      return;
    }

    cb(body);
  });

}


var data = "Hello";
exports.mafunc = function(){ return data; }




