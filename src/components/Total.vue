<template>
    <section class="chart">
        <el-row>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="payChartLine" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default{
        data (){
            return {
                chartLine:null,
                payChartLine:null,
            }
        },
        mounted:function(){
            var _this=this;
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.payChartLine = echarts.init(document.getElementById('payChartLine'));

            this.chartLine.setOption({
                title: {
                    text: '活跃用户'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['每日用户','新增用户']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['12.1','12.2','12.3','12.4','12.5','12.6','12.7']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'每日用户',
                        type:'line',
                        data:[2000, 2500, 2400, 2300, 2100, 2300, 2100]
                    },
                    {
                        name:'新增用户',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    }
                ]
            });

            this.payChartLine.setOption({
                title: {
                    text: '每日支付'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['支付']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['12.1','12.2','12.3','12.4','12.5','12.6','12.7']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} $'
                    }
                },
                series: [
                    {
                        name:'每日支付',
                        type:'line',
                        data:[200, 300, 30, 500, 600, 300, 300]
                    }
                ]
            });
        }

    }
</script>

<style scoped>
    .chart {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
