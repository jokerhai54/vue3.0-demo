export default {
    backgroundColor: '',
    title: {
        text: '刨析地图大数据',
        textStyle: {
            color: "white"
        }, //省份标签字体颜色
        subtext: 'giao',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        textStyle: {
            color: "white"
        }, //省份标签字体颜色
        x: 'right',
        y: 'center',
        splitList: [{
                start: 500,
                end: 600
            }, {
                start: 400,
                end: 500
            },
            {
                start: 300,
                end: 400
            }, {
                start: 200,
                end: 300
            },
            {
                start: 100,
                end: 200
            }, {
                start: 0,
                end: 100
            },
        ],
        color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
    },
    //配置属性
    series: [{
        name: '数据',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
            normal: {
                show: true, //省份名称
                textStyle: {
                    // color: "white"
                } //省份标签字体颜色

            },
            emphasis: { //对应的鼠标悬浮效果
                show: false,
                textStyle: {
                    color: "#800080"
                }
            }
        },
        aspectScale: 0.75,
        symbolSize: 10,
        lineStyle: {
            color: '#8df4f4'
        },
        zoom: 1.2,
        itemStyle: {
            normal: { //鼠标未移入区域颜色配置
                // borderWidth: .8, //区域边框宽度
                // borderColor: '#53D9FF', //区域边框颜色
                // areaColor: "#ffefd5", //区域颜色

                areaColor: '#24CFF4',
                borderColor: '#53D9FF',
                borderWidth: 1.3,
                shadowBlur: 15,
                shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 7,
                shadowOffsetY: 6,
            },
            emphasis: { //鼠标移入区域颜色配置
                // borderColor: '#53D9FF',
                borderWidth: 1.6,
                areaColor: "#8dd7fc", 
                shadowBlur: 30,

            }
        },
        data: [{
                name: '北京',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '天津',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '上海',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '重庆',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '河北',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '河南',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '云南',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '辽宁',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '黑龙江',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '湖南',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '安徽',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '山东',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '新疆',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '江苏',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '浙江',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '江西',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '湖北',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '广西',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '甘肃',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '山西',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '内蒙古',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '陕西',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '吉林',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '福建',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '贵州',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '广东',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '青海',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '西藏',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '四川',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '宁夏',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '海南',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '台湾',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '香港',
                value: Math.round(Math.random() * 500)
            },
            {
                name: '澳门',
                value: Math.round(Math.random() * 500)
            }
        ] //数据
    }]
}