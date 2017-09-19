$(document).ready(function () {
	$("tr").each(function (index) {
		if (index == 0) { 
			$(this).append(`<th>#</th>
				<th>submitted</th>
				<th>public tests <br>score</th>
				<th>detailed<br>test results</th>
				<th>Download</th>`);
		}
		else { 
			var projUrl = $(this).find("td:nth-child(2) a").attr("href");
			var tr = $(this);
			jQuery.ajax({
				url: projUrl,
				success: function (data) {
					var data = $(data).find("tr:nth-child(2)");
					if (data.length) {
						tr.append(data.html());
					}
					else { 
						tr.append(`<td colspan="5"><b>No submissions yet!</b></td>`);
					}
				},
				async: false
			});
		}
	});
});