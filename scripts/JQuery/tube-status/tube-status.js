const tube = {
    lines: [
        {
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
            name: 'Hammersmith & City',
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
            name: 'Waterloo & City',
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
    const getTubeLines = tube => {
        if (tube.lines.length == 0) {
            throw new Error('The line names and statuses must be given.');
        }

        let tubeBody = $('.tube-body');

        for(let i = 0; i < tube.lines.length; i++) {
            let row = $('<tr></tr>');
            let tubeLines = $('<td class="tube-lines"></td>');
            let linesStatus = $('<td class="tube-status"></td>');

            tubeLines.text(tube.lines[i].name);
            linesStatus.text(tube.lines[i].status);

            tubeBody.append(row);
            row.append(tubeLines);
            row.append(linesStatus);
        }
    }

    getTubeLines(tube);

    const addColorsToLines = () => {
        let status = $('.tube-status');

        for(let i = 0; i < status.length; i++) {
            let tubeStatus = status.eq(i).text();

            if(tubeStatus === 'Closed') {
                status.eq(i).css('color', 'red');
            }
            if(tubeStatus === 'Partially closed') {
                status.eq(i).css('color', 'orange');
            }
            if(tubeStatus === 'Good service') {
                status.eq(i).css('color', 'green');
            }
        }
    }

    addColorsToLines();
});