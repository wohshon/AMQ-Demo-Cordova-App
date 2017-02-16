//browerify script to load the feedhenry javascript sdk into a global variable
window.$fh = require('fh-js-sdk');

var randomValue=Math.floor((Math.random() * 1000000) + 1)+'_'+(Date.now());
if (document.getElementById('clientId').value=='') {
	document.getElementById('clientId').value=randomValue;
}

//alert(randomValue);
//alert(document.getElementById('hello_to').value);
//connect to mq
 $fh.cloud(
      {
        //path: 'hello',
        path: '/hello/connect',
        //method: post,
        data: {
  //        hello: document.getElementById('hello_to').value,
          clientId: document.getElementById('clientId').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );

