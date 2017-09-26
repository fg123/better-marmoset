$(document).ready(function () {
	$("tr").each(function (index) {
		if (index == 0) { 
			$(this).append(`<th>#</th>
				<th>submitted</th>
				<th>public tests <br>score</th>
				<th>detailed<br>test results</th>
				<th>passed</th>
				<th>failed</th>
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
						var submissionUrl = $(data).find("td:nth-child(4) a").attr("href");
						jQuery.get(submissionUrl, function (submissionData) {
							var passed = 0, failed = 0;
							$(submissionData).find("tr td:nth-last-child(2)").each(function () { 

								if ($(this).text().indexOf("passed") !== -1) {
									passed++;
								}
								else { 
									failed++;
								}
							});
							$(data).find("td:nth-child(4)").after("<td>" + passed + "</td><td>" + failed + "</td>");
							tr.append(data.html());
						});
					}
					else { 
						tr.append(`<td colspan="5"><b>No submissions yet!</b></td>`);
					}
				}
			});
		}
	});
});