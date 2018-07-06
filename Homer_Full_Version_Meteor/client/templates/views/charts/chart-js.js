Template.chartJs.onRendered(function(){

    /**
     * Options for Line chart
     */

    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [

            {
                label: "Dt 1",
                backgroundColor: 'rgba(98,203,49, 0.5)',
                pointBorderWidth: 1,
                pointBackgroundColor: "rgba(98,203,49,1)",
                pointRadius: 3,
                pointBorderColor: '#ffffff',
                borderWidth: 1,
                data: [16, 32, 18, 26, 42, 33, 44]
            },
            {
                label: "Dt 2",
                backgroundColor: 'rgba(220,220,220,0.5)',
                borderColor: "rgba(220,220,220,0.7)",
                pointBorderWidth: 1,
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointRadius: 3,
                pointBorderColor: '#ffffff',
                borderWidth: 1,
                data: [22, 44, 67, 43, 76, 45, 12]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };

    var ctx = document.getElementById("lineOptions").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

    /**
     * Options for Sharp Line chart
     */
    var sharpLineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Dt 1",
                backgroundColor: "rgba(98,203,49,0.5)",
                data: [33, 48, 40, 19, 54, 27, 54],
                lineTension: 0,
                pointBorderWidth: 1,
                pointBackgroundColor: "rgba(98,203,49,1)",
                pointRadius: 3,
                pointBorderColor: '#ffffff',
                borderWidth: 1
            }
        ]
    };

    var sharpLineOptions = {
        responsive: true,
        legend: {
            display: false
        }
    };

    var ctx = document.getElementById("sharpLineOptions").getContext("2d");
    new Chart(ctx, {type: 'line', data: sharpLineData, options:sharpLineOptions});


    /**
     * Options for Bar chart
     */
    var barOptions = {
        responsive:true
    };

    /**
     * Data for Bar chart
     */
    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Dt 1",
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Dt 2",
                backgroundColor: "rgba(98,203,49,0.5)",
                borderColor: "rgba(98,203,49,0.8)",
                highlightFill: "rgba(98,203,49,0.75)",
                highlightStroke: "rgba(98,203,49,1)",
                borderWidth: 1,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var ctx = document.getElementById("barOptions").getContext("2d");
    new Chart(ctx, {type: 'bar', data: barData, options:barOptions});

    /**
     * Options for Bar chart
     */
    var singleBarOptions = {
        responsive:true,
        legend: {
            display: false
        }
    };

    /**
     * Data for Bar chart
     */
    var singleBarData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Dt 1",
                backgroundColor: "rgba(98,203,49,0.5)",
                borderColor: "rgba(98,203,49,0.8)",
                highlightFill: "rgba(98,203,49,0.75)",
                highlightStroke: "rgba(98,203,49,1)",
                borderWidth: 1,
                data: [15, 20, 30, 40, 30, 50, 60]
            }
        ]
    };

    var ctx = document.getElementById("singleBarOptions").getContext("2d");
    new Chart(ctx, {type: 'bar', data: singleBarData, options:singleBarOptions});


    var polarData = {
        datasets: [{
            data: [
                120,
                130,
                100
            ],
            backgroundColor: [
                "#62cb31",
                "#80dd55",
                "#a3e186"
            ],
            label: 'Dt 1' // for legend
        }],
        labels: [
            "Homer",
            "Inspinia",
            "Luna"
        ]
    }

    var polarOptions = {
        responsive: true

    };

    var ctx = document.getElementById("polarOptions").getContext("2d");
    new Chart(ctx, {type: 'polarArea', data: polarData, options:polarOptions});


    var doughnutData = {
        labels: [
            "App",
            "Software",
            "Laptop"
        ],
        datasets: [
            {
                data: [20, 120, 100],
                backgroundColor: [
                    "#62cb31",
                    "#91dc6e",
                    "#a3e186"
                ],
                hoverBackgroundColor: [
                    "#57b32c",
                    "#57b32c",
                    "#57b32c"
                ]
            }]
    }


    var doughnutOptions = {
        responsive: true
    };

    var ctx = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    var radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "Dt 1",
                backgroundColor: "rgba(98,203,49,0.2)",
                borderColor: "rgba(98,203,49,1)",
                pointBackgroundColor: "rgba(98,203,49,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#62cb31",
                borderWidth: 1,
                data: [65, 59, 66, 45, 56, 55, 40]
            },
            {
                label: "Dt 2",
                backgroundColor: "rgba(98,203,49,0.4)",
                borderColor: "rgba(98,203,49,1)",
                pointBackgroundColor: "rgba(98,203,49,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#62cb31",
                borderWidth: 1,
                data: [28, 12, 40, 19, 63, 27, 87]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };


    var ctx = document.getElementById("radarChart").getContext("2d");
    new Chart(ctx, {type: 'radar', data: radarData, options:radarOptions});

});