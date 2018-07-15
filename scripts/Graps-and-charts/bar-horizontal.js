var ctx = document.getElementById("bar-horizontal").getContext('2d');

var myBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
            label: 'Number of Votes',
            data: [5, 1, 13, 9, 4, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.25)',
                'rgba(54, 162, 235, 0.25)',
                'rgba(255, 206, 86, 0.25)',
                'rgba(75, 192, 192, 0.25)',
                'rgba(153, 102, 255, 0.25)',
                'rgba(255, 159, 64, 0.25)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});