const data = {
    departures: [{
        airline: 'Lufthansa',
        number: 'DE1502',
        destination: 'Frankfurt',
        scheduled: '7:05',
        expected: 'On time',
        terminal: '4',
        checkIn: '25-30',
        gate: '29B',
    },
    {
        airline: 'Lufthansa',
        number: 'DE1542',
        destination: 'Munich',
        scheduled: '10:25',
        expected: '11:00',
        terminal: '4',
        checkIn: '25-30',
        gate: '22C',
    },
    {
        airline: 'Air France',
        number: 'AF465',
        destination: 'Paris-Charles de Gaulle',
        scheduled: '13:30',
        expected: '13:45',
        terminal: '4',
        checkIn: '77-81',
        gate: '7A',
    },
    {
        airline: 'Turkish Airlines',
        number: 'TK1498',
        destination: 'Istanbul-Ataturk',
        scheduled: '11:45',
        expected: 'On time',
        terminal: '2',
        checkIn: '1-4',
        gate: '17D',
    },
    {
        airline: 'TAROM',
        number: 'RO5365',
        destination: 'Bucharest-Otopeni',
        scheduled: '15:10',
        expected: '15:25',
        terminal: '4',
        checkIn: '59-60',
        gate: '15C',
    },
    {
        airline: 'Delta Airlines',
        number: 'DL133',
        destination: 'New York-JFK',
        scheduled: '12:20',
        expected: '12:40',
        terminal: '2',
        checkIn: '30-35',
        gate: '20A',
    },
    {
        airline: 'Air China',
        number: 'CH49',
        destination: 'Beijing-Capital',
        scheduled: '17:15',
        expected: '17:50',
        terminal: '4',
        checkIn: '11-13',
        gate: '75C',
    },
    {
        airline: 'Asiana Airlines',
        number: 'AS743',
        destination: 'Seoul-Incheon',
        scheduled: '11:30',
        expected: '12:11',
        terminal: '3',
        checkIn: '17-18',
        gate: '33B',
    },
    {
        airline: 'Alitalia',
        number: 'AZ3365',
        destination: 'Rome-Fiumicino',
        scheduled: '9:45',
        expected: '10:00',
        terminal: '2',
        checkIn: '4-6',
        gate: '10B',
    },
    ],
}

$(function () {
    const addDepartures = data => {
        if (data.departures.length == 0) {
            throw new Error('The departures list must be given');
        }

        let body = $('#airlinesBody');

        for (let i = 0; i < data.departures.length; i++) {
            let row = $('<tr></tr>');
            body.append(row);

            let airline = $('<td class="airline"></td>');
            airline.text(data.departures[i].airline);

            row.append(airline);

            let airlNumber = $('<td class="number"></td>');
            airlNumber.text(data.departures[i].number);

            row.append(airlNumber);

            let dest = $('<td class="destination"></td>');
            dest.text(data.departures[i].destination);

            row.append(dest);

            let scheduled = $('<td class="scheduled"></td>');
            scheduled.text(data.departures[i].scheduled);

            row.append(scheduled);

            let expected = $('<td class="expected"></td>');
            expected.text(data.departures[i].expected);

            row.append(expected);

            let terminal = $('<td class="terminal"></td>');
            terminal.text(data.departures[i].terminal);

            row.append(terminal);

            let check = $('<td class="check-in"></td>');
            check.text(data.departures[i].checkIn);

            row.append(check);

            let gate = $('<td class="gate"></td>');
            gate.text(data.departures[i].gate);

            row.append(gate);
        }
    }

    addDepartures(data);
});