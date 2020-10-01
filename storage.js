$( document ).ready(function() {
  chrome.storage.sync.get(['splunk-url', 'key-mapping'], function(result) {
    $('#splunk-url').val(result["splunk-url"]);
    $('#key-mapping').val(result["key-mapping"]);
  });

  $( "#big-save-button" ).click(function() {
    pleaseSaveMyStuffIDontWantToLoseIt();
  });
});


function pleaseSaveMyStuffIDontWantToLoseIt(){
  chrome.storage.sync.set(
    {"splunk-url": $('#splunk-url').val(), "key-mapping": $('#key-mapping').val()},
    function() {}
  );
}
