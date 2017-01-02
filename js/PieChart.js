class PieChart {
    static draw(label, data) {
        let dataPoints = [];
        let sum = this.reduce(data);

        data.forEach(function (val, name) {
            let percentVal = (val/sum).toFixed(2) * 100;
            dataPoints.push({y: percentVal, name: name});
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

    static reduce(data) {
        let sum = 0;

        data.forEach(function (val) {
            sum += val;
        });

        return sum;
    }
}