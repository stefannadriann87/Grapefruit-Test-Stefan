window.onload = function() {
    var chart = new CanvasJS.Chart("chart", {
        animationEnabled: true,
        animationDuration: 2000,
        exportEnabled: true,
        title: {
            text: ""
        },
        toolTip: {
            enabled: false,
        },
        axisX: {
            labelFontColor: "#b2b2b2",
            labelFontSize: 11,
            labelFontFamily: "MontserratBold",
            valueFormatString: "MMM",
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            margin: 0,
        },
        axisY2: {
            labelFontColor: "#b2b2b2",
            labelFontSize: 11,
            labelFontFamily: "MontserratBold",
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            margin: 0,
            includeZero: false,
        },
        axisY: {
            gridThickness: 0
        },
        data: [{
                markerType: "none",
                markerColor: "#f96332",
                markerSize: 24,
                markerBorderColor: "#fee0d6",
                markerBorderThickness: 9,
                cursor: "pointer",
                type: "splineArea",
                color: "#ededed",
                axisYType: "secondary",
                xValueFormatString: "MMM",
                lineColor: "#f0f0f0",
                lineThickness: 2,
                dataPoints: [
                    { x: new Date(2018, 4, 1), y: 100 },
                    { x: new Date(2018, 5, 1), y: 40 },
                    { x: new Date(2018, 6, 1), y: 135, markerType: "circle" },
                    { x: new Date(2018, 7, 1), y: 105 },
                    { x: new Date(2018, 8, 1), y: 165 },
                    { x: new Date(2018, 9, 1), y: 112 },
                    { x: new Date(2018, 10, 1), y: 130 }
                    ]
                }
               ]
           });
    chart.render();

    $('.tab').click(function() {
        $('.tab').removeClass('active');
        $(this).addClass('active');

        chart.options.data[0].dataPoints.map(function(point) {
            point.markerType = 'none';
        });

        var randomIndex = Math.floor(Math.random() * chart.options.data[0].dataPoints.length) + 1;

        chart.options.data[0].dataPoints.forEach(function(point, index) {
            point.x = new Date(2018, index + 1, (index + 1) * 2);
            point.y = Math.floor(Math.random() * 200);

            if (index + 1 === randomIndex) {
                point.markerType = "circle";
            }
        });
        chart.render();
    });
}

$(document).ready(function() {
    $('.sign-up').click(function() {
        $('body').toggleClass('active-sign-in');
        $('.user-login').removeClass('active-log-in');
    });
    $('.log-in').click(function() {
        $('.user-login').toggleClass('active-log-in');
        $('body').toggleClass('active-body-log-in');
        $('body').removeClass('active-sign-in');
    });
    $('.close-log-in').click(function() {
        $('.user-login').removeClass('active-log-in');
        $('body').removeClass('active-body-log-in');
        $('body').removeClass('active-sign-in');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 6
            },
            767: {
                items: 8
            }
        }
    });

    $('#sign-in').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "te rog completeaza numele",
            email: {
                required: "te rog completeaza adresa",
                minlength: "adresa de mail introdusa este gresita"
            },
            password: {
                required: "te rog completeaza parola",
                minlength: "parola introdusa este gresita"
            },
        },
        submitHandler: function(form) {
            form.submit();
            alert('Success!');
        }
    });
});