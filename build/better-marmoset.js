$(document).ready(function() {
    $('tr').each(function(index) {
        if (index == 0) {
            $(this).append(`<th>#</th>
				<th>submitted</th>
				<th>public tests <br>score</th>
				<th>release tests score</th>
				<th>detailed test results</th>
				<th>Download</th>`);
        } else {
            var projUrl = $(this)
                .find('td:nth-child(2) a')
                .attr('href');
            var tr = $(this);
            jQuery.ajax({
                url: projUrl,
                success: function(data) {
                    var header = $(data).find('tr:nth-child(1)');
                    var data = $(data).find('tr:nth-child(2)');
                    if (header.html().indexOf('release tests') < 0) {
                        $(data)
                            .find('td:nth-child(3)')
                            .after('<td>No Release Tests</td>');
                    } else {
                        $(data)
                            .find('td:nth-child(5)')
                            .remove();
                    }

                    if (data.length) {
                        tr.append(data.html());
                    } else {
                        tr.append(`<td colspan="6"><b>No submissions yet!</b></td>`);
                    }
                }
            });
        }
    });
});
