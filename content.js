
$(document).ready(function() {
  chrome.storage.sync.get(['splunk-url'], function(result) {
    splunkUrl = result["splunk-url"];
    splunkRegex = new RegExp(splunkUrl, 'g');
    if (!splunkRegex.exec(location.href)) {
      return;
    } else {
      button = $("<div>").html('🔗')
        .attr('id', 'splunk-links-button')
        .css({
          'position' : 'fixed',
          'right' : '0',
          'bottom' : '0',
          'margin': '15px',
          'background-color': 'green',
          'padding': '10px 11px',
          'border-radius': '30px',
          'text-align': 'center'
        });
      $("body").append(button);
      $( "#splunk-links-button" ).click(function() {
        addAllTheCoolLinks();
      });
    }
  });
})


function addAllTheCoolLinks() {
  chrome.storage.sync.get(['key-mapping'], function(result) {
    keyMapping = result["key-mapping"];

    parsedMapping = JSON.parse(keyMapping);
    $('.t.string').toArray().forEach(function(item) {
      if ($(item).hasClass('splunk-link-parsed')) {
        return;
      } else {
        $(item).addClass('splunk-link-parsed')
      }
      dataPath = $(item).attr('data-path')
      if (dataPath && parsedMapping.hasOwnProperty(dataPath)) {
        url = parsedMapping[dataPath].replace('{value}', $(item).html())
        $(item).html(`${$(item).html()} <a href="${url}">🔗</a>`);
      }
    });
  });
}



