document.getElementById('anonymous-submission').addEventListener('change', ()=>{
  document.getElementById('anonymous-submission').checked == true ? document.getElementById('name-container').style.display=('none'): document.getElementById('name-container').style.display=('block')
});

$(document).ready(function() {
  var $qTextField = $('#destination');
  var $embeddedMap = $('iframe');

  var typingTimer;
  var doneTypingInterval = 500;

  $qTextField.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  $qTextField.on('keydown', function () {
    clearTimeout(typingTimer);
  });

  function doneTyping () {
    var embeddedMapSrc = $embeddedMap.prop('src');
    var match = embeddedMapSrc.match(/q=(.*)/);
    if (match != null) {
      var newSrc = embeddedMapSrc.replace(match[1], $qTextField.val())
      $embeddedMap.attr("src", newSrc);
    }
  }
});


// const isChecked = ()=>{
//   if(document.getElementById('anonymous-submission').checked=true){
//     document.getElementById('name-container').style('display', 'none');
//   }
// }
// console.log(document.getElementById('anonymous-submission').checked)
// isChecked();