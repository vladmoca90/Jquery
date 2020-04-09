const data = {
    lines: [{
            name: 'Bakerloo',
            status: 'Good service',
        },
        {
            name: 'Central',
            status: 'Good service',
        },
        {
            name: 'Circle',
            status: 'Good service',
        },
        {
            name: 'District',
            status: 'Partially closed',
        },
        {
            name: 'Hammersmith & city',
            status: 'Partially closed',
        },
        {
            name: 'Jubilee',
            status: 'Good service',
        },
        {
            name: 'Metropolitan',
            status: 'Partially closed',
        },
        {
            name: 'Northern',
            status: 'Good service',
        },
        {
            name: 'Picadilly',
            status: 'Good service',
        },
        {
            name: 'Victoria',
            status: 'Good service',
        },
        {
            name: 'Waterloo & city',
            status: 'Closed',
        },
        {
            name: 'London Overground',
            status: 'Good service',
        },
        {
            name: 'Tfl Rail',
            status: 'Good service',
        },
        {
            name: 'DLR',
            status: 'Good service',
        },
        {
            name: 'Croydon Tram',
            status: 'Good service',
        },
    ]
}

$(function () {

    const getTubeLines = data => {
        if (data.lines.length == 0) {
            throw new Error('The line names and statuses must be given.');
        }

        let body = $('.tube-body');

        for (let i = 0; i < data.lines.length; i++) {
            let row = $('<tr></tr>');
            let tubeLines = $('<td class="tube-lines"></td>');
            let linesStatus = $('<td class="tube-status"></td>');

            tubeLines.text(data.lines[i].name);
            linesStatus.text(data.lines[i].status);

            body.append(row);
            row.append(tubeLines);
            row.append(linesStatus);
        }
    }

    getTubeLines(data);

    function addColors() {
        let status = $('.tube-status');

        for (let i = 0; i < status.length; i++) {
            let tubeStatus = status.eq(i).text();
            if(tubeStatus === 'Closed') {
                status.parents('tr').eq(i).css('color', 'red');
            }
        }
    }

    addColors();
});