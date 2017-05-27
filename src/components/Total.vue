<template>
    <section class="chart">
        <el-row>
            <el-col>
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
        <el-row>
          <el-col>
              <div id="payChartLine" style="width:100%; height:400px;"></div>
          </el-col>
        </el-row>
        <template>
          <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="date" label="每日留存" width="100">
            </el-table-column>
            <el-table-column prop="loginCount" label="每日登录总数" width="100">
            </el-table-column>
            <el-table-column v-for="n in 28" :prop="String(n)" :label="String(n)" width="80">
            </el-table-column>
          </el-table>
        </template>
    </section>
</template>
<script>
    import echarts from 'echarts'
    export default{
        data (){
            return {
                chartLine:null,
                payChartLine:null,
                tableData:[],
                dailyUserCount:[],
                newUserCount:[],
                charDay:[],
            }
        },
        mounted:function(){
            var _this=this;
            var vm = this;
            this.$http.get('/api/daily.php')
            .then(function (response) {
                vm.tableData = response.data.retention;
                for(var k in response.data.newUserCount){
                  vm.charDay.push(Number(k));
                  vm.dailyUserCount.push(Number(response.data.dailyUserCount[k]));
                  vm.newUserCount.push(Number(response.data.newUserCount[k]));
                }
                vm.drawChartLine();
                vm.drawPayChartLine();
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        methods:{
          drawChartLine(){
            this.chartLine = echarts.init(document.getElementById('chartLine'));
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
                    data: this.charDay
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'每日用户',
                        type:'line',
                        data:this.dailyUserCount
                    },
                    {
                        name:'新增用户',
                        type:'line',
                        data:this.newUserCount
                    }
                ]
            });
          },
          drawPayChartLine(){
            this.payChartLine = echarts.init(document.getElementById('payChartLine'));
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
