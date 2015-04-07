$(function (){
	//load spreadsheet
	var mySpreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AgYVWMxsntVodGlNeS13M0V1dmFmakJENTlaMWoxV2c&single=true&gid=3';
	$('#freelancerslist').sheetrock({
		url: mySpreadsheet,
		//chunkSize: 0,
		sql: 'select * order by A desc',
		userCallback: function() {
			links();
			twitter();
			websiteLink();
			//tableFilterApplication();
		}
	});

	// work out portfolio link
	function websiteLink() {
		$('table td a:not([href*="twitter"])').parent().addClass('website-link');
	}

	// add a table filter
	function tableFilterApplication() {
		$('table').filterTable({
			quickList: ['Branding', 'Interaction design', 'User experience', 'Front-end', 'Copywriting'],
			placeholder: "Search this list"
			
	        });
	}	

	// add boostrap style to table
	$('table').addClass('table table-striped table-hover');


	//add links
	function links() {
		var websiteEl = $('#freelancerslist td:nth-child(5)');
		websiteEl.each(function(index) {
			var link = $(this).text();
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	};

	//add links
	function twitter() {
		var twitterEl = $('#freelancerslist td:nth-child(6)');
		twitterEl.each(function(index) {
			var link = "http://twitter.com/"; //twitter url 
			var text = $(this).text();
				text = text.replace("@", "");
			link += text;
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	}


});
