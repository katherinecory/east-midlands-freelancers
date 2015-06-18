$(function (){
  //load spreadsheet
  var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1uhDr_fIByZgERFUvoqLpSsVnERhQ2xAmdwcE35WbeBw/pubhtml?gid=1469068625&single=true';
  $('#freelancerslist').sheetrock({
    url: mySpreadsheet,
    chunkSize: 100,
    sql: 'select B,C,E,F,D,G,H,I order by B asc, C asc',
    labels: ['Name', 'Availability', 'Working', 'Location', 'Skills', '<i class="fa fa-external-link"></i>', '<i class="fa fa-twitter"></i>', '<i class="fa fa-envelope"></i>'],
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
        'Art Direction',
        'Branding',
        'Copywriting',
        'Digital Design',
        'Drupal',
        'Front-end',
        'Graphic design',
        'Illustration',
        'Javascript',
        'Mobile Apps',
        'Photography',
        'PHP',
        'UI Design',
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
      if ($(this).text().length) {
        var link = $(this).text();
        var text = $(this).text();
        $(this).html('<a href="'+ link +'" target="_blank" title="'+ text + '"><i class="fa fa-external-link"></i></a>');
      }
    });
  };

  //add twitter links
  function twitter() {
    var twitterEl = $('#freelancerslist td:nth-child(7)');
    twitterEl.each(function(index) {
      if ($(this).text().length) {
        var link = "http://twitter.com/"; //twitter url
            link += $(this).text().replace("@", "");
        var text = $(this).text();
        $(this).html('<a href="'+ link +'" target="_blank" title="'+ text + '"><i class="fa fa-twitter"></i></a>');
      }
    });
  }

  //add email links
  function emails() {
    var emailEl = $('#freelancerslist td:nth-child(8)');
    emailEl.each(function(index) {
      if ($(this).text().length) {
        var link = $(this).text();
        var text = $(this).text();
        $(this).html('<a href="mailto:'+ link +'" title="'+ text + '"><i class="fa fa-envelope"></i></a>');
      }
    });
  };
});

$(document).ready(function(){
  svgeezy.init(false, 'png');
});
