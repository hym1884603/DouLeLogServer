<template>
	<section>
		<!--列表-->
		<template>
			<el-table :data="tableData" highlight-current-row v-loading="listLoading" style="width: 100%;">
				</el-table-column>
				<el-table-column prop="level" :label="$t('levelRate.level')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="successTimes" :label="$t('levelRate.successTimes')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="failTimes" :label="$t('levelRate.failTimes')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="oneStartTimes" :label="$t('levelRate.oneStartTimes')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="twoStartTimes" :label="$t('levelRate.twoStartTimes')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="threeStartTimes" :label="$t('levelRate.threeStartTimes')" min-width="100" sortable>
			</el-table>
		</template>

		<!--分页-->
		<el-col :span="24" class="toolbar" style="padding-bottom:10px;">
			<el-pagination :current-page="page.current" :page-sizes="[10, 20, 30, 40,1000]" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper"
				:total="page.total" style="text-align:center" @size-change="sizeChange" @current-change="currentChange" >
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
	import util from '../../common/util'
	import NProgress from 'nprogress'

  export default {
    mounted(){
      this.tableData = [{
				level:1,
				successTimes:40962,
				failTimes:109,
				oneStartTimes:41071,
				twoStartTimes:3,
				threeStartTimes:40959,
			}];
    },
    data() {
      return {
        page:{
          current:1,
          size:10,
          total:400
        },
				tableData: [],
				listLoading:false
     		}
    },
    methods: {
      sizeChange(size){
        this.listLoading = true;
        console.log(size);
      },
      currentChange(page){
        this.listLoading = true;
        console.log(page);
      }
    }
  }
</script>

<style scoped>
	.toolbar .el-form-item {
		margin-bottom: 10px;
	}

	.toolbar {
		background: #fff;
		padding: 10px 10px 0px 10px;
	}
</style>
