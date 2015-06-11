$(function (){
  //load spreadsheet
  var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1uhDr_fIByZgERFUvoqLpSsVnERhQ2xAmdwcE35WbeBw/pubhtml?gid=1469068625&single=true';
  $('#freelancerslist').sheetrock({
    url: mySpreadsheet,
    chunkSize: 100,
    sql: 'select B,C,E,F,D,G,H,I order by B asc, C asc',
    labels: ['Name', 'Availability', 'Working', 'Location', 'Skills', 'Website URL', 'Twitter', 'Email'],
    userCallback: function() {
      links();
      twitter();
      websiteLink();
      tableFilterApplication();
      emails();
    }
  });

  // work out portfolio link
  function websiteLink() {
    $('table td a:not([href*="twitter"])').parent().addClass('website-link');
  }

  // add a table filter
  function tableFilterApplication() {
    $('#freelancerslist').filterTable({
      quickList: [
        'Animation',
        'Branding',
        'Copywriting',
        'Drupal',
        'Front-end',
        'Graphic design',
        'Illustration',
        'Javascript',
        'Mobile Apps',
        '.NET',
        'Node',
        'Photography',
        'PHP',
        'Python',
        'Ruby',
        'UX',
        'Videography',
        'Wordpress'
      ],
      placeholder: "Search this list",
      minRows: 1
    });
     // add boostrap style to table
    $('#freelancerslist').addClass('table table-striped table-hover');
  }

  // add boostrap style to table
  $('table').addClass('table table-striped table-hover');

  //add links
  function links() {
    var websiteEl = $('#freelancerslist td:nth-child(6)');
    websiteEl.each(function(index) {
      var link = $(this).text();
      $(this).wrapInner('<a target="_blank" href="'+ link +'" />');
    });
  };

  //add twitter links
  function twitter() {
    var twitterEl = $('#freelancerslist td:nth-child(7)');
    twitterEl.each(function(index) {
      var link = "http://twitter.com/"; //twitter url
      var text = $(this).text();
      text = text.replace("@", "");
      link += text;
      $(this).wrapInner('<a target="_blank" href="'+ link +'" />');
    });
  }

  //add email links
  function emails() {
    var emailEl = $('#freelancerslist td:nth-child(8)');
    emailEl.each(function(index) {
      var link = $(this).text();
      $(this).wrapInner('<a href="mailto:'+ link +'" />');
    });
  };
});
