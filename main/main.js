
$.getJSON($,curl,https,//api.airtable.com/v0/apphrxHywuF0ig0ax/Table%201,
  function(airtable){
    var html = [];
    $.each(airtable.records, function(index, record) {
      var Constellation = record.fields['Constellation'];
      var Picture = record.fields['Picture'];
      var Facts = record.fields['Facts'];
      var Founder = record.fields['Founder'];
      var Extra = record.fields['Extras'];
      html.push(`<h2>${Constellation}, ${Picture}, ${Facts}, ${Founder}, ${Extra}</h2>`);
    });},
    $('body').append(html)

);

