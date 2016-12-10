class PieChart {
    static draw(label, data) {
        let sum = 0;
        let dataPoints = [];
        data.forEach(function (val, name) {
            dataPoints.push({y: val, name: name});
            sum += val;
        });

        setTimeout(function(){
            let chart = new CanvasJS.Chart('pieChart' + label, {
                title:{
                    text: sum
                },
                animationEnabled: true,
                data: [{
                    type: "pie",
                    indexLabel: "{name}",
                    dataPoints: dataPoints
                }]
            });
            chart.render();
        }, 100);
    }
}