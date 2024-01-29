navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    var video = document.getElementById('webcam');
    video.srcObject = stream;
  })
  .catch(function (error) {
    if (error.name === 'NotAllowedError') {
      console.error('Permission denied by user.');
    } else {
      console.error('Error accessing webcam:', error);
    }
  });