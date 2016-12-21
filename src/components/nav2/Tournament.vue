<template>
	<section>
		<!--列表-->
		<template>
			<el-table :data="tableData" highlight-current-row v-loading="listLoading" style="width: 100%;">
				</el-table-column>
				<el-table-column prop="loginCount" :label="$t('tournament.loginCount')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="one" :label="$t('tournament.one')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="two" :label="$t('tournament.two')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="three" :label="$t('tournament.three')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="four" :label="$t('tournament.four')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="five" :label="$t('tournament.five')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="count" :label="$t('tournament.count')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="times" :label="$t('tournament.times')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="date" :label="$t('tournament.date')" min-width="150" sortable>
				</el-table-column>
				<el-table-column prop="inviteTimes" :label="$t('tournament.inviteTimes')" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="getGift" :label="$t('tournament.getGift')" min-width="100" sortable>
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
				loginCount:1,
				one:40962,
				two:109,
				three:41071,
				four:3,
				five:40959,
				count:40959,
				times:40959,
				date:"1992-05-05 23:11:20",
				inviteTimes:100,
				getGift:10,
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
