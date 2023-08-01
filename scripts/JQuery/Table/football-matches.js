const data = {
    teams: [
        {
            name: 'Brazil',
            played: 3,
            won: 2,
            draw: 1,
            lost: 0,
            goalsFor: 5,
            goalsAgainst: 2,
            goalsDifference: 3,
            total: 7,
        },
        {
            name: 'Portugal',
            played: 3,
            won: 1,
            draw: 2,
            lost: 0,
            goalsFor: 7,
            goalsAgainst: 0,
            goalsDifference: 7,
            total: 5,
        },
        {
            name: 'Ivory Coast',
            played: 3,
            won: 1,
            draw: 1,
            lost: 1,
            goalsFor: 4,
            goalsAgainst: 3,
            goalsDifference: 1,
            total: 4,
        },
        {
            name: 'North Korea',
            played: 3,
            won: 0,
            draw: 0,
            lost: 3,
            goalsFor: 1,
            goalsAgainst: 12,
            goalsDifference: -11,
            total: 0,
        },
    ],
}

$(function () {
    const getTeams = data => {
        if (data.teams.length == 0) {
            throw new Error('The teams must be given');
        }

        for (let i = 0; i < data.teams.length; i++) {
            let row = $('<tr></tr>');

            let teamName = $('<td></td>');
            teamName.addClass('team-name');
            teamName.val(data.teams[i].name);
            teamName.html(data.teams[i].name);

            row.append(teamName);

            let playedGames = $('<td></td>');
            playedGames.val(data.teams[i].played);
            playedGames.html(data.teams[i].played);

            row.append(playedGames);

            let wonGames = $('<td></td>');
            wonGames.val(data.teams[i].won);
            wonGames.html(data.teams[i].won);

            row.append(wonGames);

            let drawGames = $('<td></td>');
            drawGames.val(data.teams[i].draw);
            drawGames.html(data.teams[i].draw);

            row.append(drawGames);

            let lostGames = $('<td></td>');
            lostGames.val(data.teams[i].lost);
            lostGames.html(data.teams[i].lost);

            row.append(lostGames);

            let goalsF = $('<td></td>');
            goalsF.val(data.teams[i].goalsFor);
            goalsF.html(data.teams[i].goalsFor);

            row.append(goalsF);

            let goalsA = $('<td></td>');
            goalsA.val(data.teams[i].goalsAgainst);
            goalsA.html(data.teams[i].goalsAgainst);

            row.append(goalsA);

            let goalsD = $('<td></td>');
            goalsD.val(data.teams[i].goalsDifference);
            goalsD.html(data.teams[i].goalsDifference);

            row.append(goalsD);

            let totalPoints = $('<td></td>');
            totalPoints.val(data.teams[i].total);
            totalPoints.html(data.teams[i].total);

            row.append(totalPoints);

            $('#teamsBody').append(row);
        }
    }

    getTeams(data);
});