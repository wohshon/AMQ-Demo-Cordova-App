
document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        //path: 'hello',
        path: 'hello/pub',
        //path: 'connect',
        data: {
          hello: document.getElementById('hello_to').value,
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
};

document.getElementById('say_hello1').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        //path: 'hello',
        path: 'hello',
        //path: 'connect',
        data: {
          hello: document.getElementById('hello_to').value,
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
};