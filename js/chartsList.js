var myChart1 = echarts.init(document.getElementById('chart1'));
var myChart2 = echarts.init(document.getElementById('chart2'));
var myChart3 = echarts.init(document.getElementById('chart3'));
var myChart4 = echarts.init(document.getElementById('chart4'));

// 指定图表的配置项和数据

var option1 = {
    title: {
        text: '装备种类统计',
        top: 0,
        left: 5,
        textStyle: {
            fontSize: 16,
            fontWeight: 300,
            height: 10
        },
        backgroundColor: '#fff',
        shadowColor: '#145ab9',
        shadowBlur: 0,
        shadowOffsetX: -5,
        shadowOffsetY: -1,
        padding: [0, 5]
    },
    grid: {
    },
    tooltip: {
    },
    legend: {
        width: 242,
        bottom: 10,
        itemWidth: 15,
        data:['项目一','项目二','项目三','项目四','项目五']
    },
   
    series: [
        {
            name: '项目类型',
            type:'pie',
            radius: ['25%', '40%'],
            center: ['50%', '40%'],
            data:[
                {value:335, name:'项目一'},
                {value:310, name:'项目二'},
                {value:234, name:'项目三'},
                {value:135, name:'项目四'},
                {value:1548, name:'项目五'}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(generateOptions('保障次数统计', '#33c1ff', '#1891ff'));
myChart2.setOption(generateOptions('装备借用次数统计', '#fd9', '#ff5581'));
myChart3.setOption(generateOptions('声次下载次数统计', '#00C8B7', '#56EDC9'));
myChart4.setOption(option1);


function generateOptions(str, color1, color2) {
    return {
        title: {
            text: str,
            top: 0,
            left: 5,
            textStyle: {
                fontSize: 16,
                fontWeight: 300
            },
            backgroundColor: '#fff',
            shadowColor: '#145ab9',
            shadowBlur: 0,
            shadowOffsetX: -5,
            shadowOffsetY: -1,
            padding: [0, 5]
        },
        grid: {
            top: 50,
            bottom: 50,
            left: 30,
            right: 0
        },
        tooltip: {},
        xAxis: {
            data: ["项目一","项目一","项目一","项目一","项目一","项目一", "项目一"],
            nameTextStyle: {
                fontSize: 10
            },
            axisLabel: {
                interval:0,
                rotate:40
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [{
            name: '项目',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 22],
            barWidth: 10,
            itemStyle: {
                color: color1
                // new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: color1
                // }, {
                //     offset: 1,
                //     color: color2
                // }]),
            }
        }]
    };
}