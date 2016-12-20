<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item :label="$t('conversion.shot')">
			<el-input-number v-model="form.shot" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.fiftyCoin')">
			<el-input-number v-model="form.fiftyCoin" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.hundredCoin')">
			<el-input-number v-model="form.hundredCoin" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.dragonBall')">
			<el-input-number v-model="form.dragonBall" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.colorfulBall')">
			<el-input-number v-model="form.colourfulBall" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.life')">
			<el-input-number v-model="form.life" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.transformBall')">
			<el-input-number v-model="form.transformBall" :min="0" :max="200"></el-input-number>
		</el-form-item>
		<el-form-item :label="$t('conversion.activeTime')">
			<el-col :span="8">
				<el-date-picker
				type="date"
				:placeholder="$t('conversion.startTime')"
				v-model="form.date1"
				style="width: 100%;"
				:picker-options="pickerOptions1">
			</el-date-picker>
			</el-col>
			<!-- <el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col> -->
			<el-col :span="8">
				<el-date-picker
				type="date"
				:placeholder="$t('conversion.endTime')"
				v-model="form.date2"
				style="width: 100%;"
				:picker-options="pickerOptions2">
			</el-date-picker>
			</el-col>
		</el-form-item>
		<el-form-item>
			<el-button @click=onSubmit type="primary">{{$t("conversion.conversion")}}</el-button>
			<el-button @click.native.prevent>{{$t("conversion.cancel")}}</el-button>
		</el-form-item>
		<el-input :span="2" v-model="code" v-if="show">
			<template slot="prepend">{{$t("conversion.code")}}</template>
		</el-input>
	</el-form>
</template>

<script>
  export default {
    data() {
      return {
				pickerOptions1: {
					shortcuts: [{
						text: this.$t('conversion.today'),
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: this.$t('conversion.yesterday'),
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: this.$t('conversion.beforeYesterday'),
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 2);
							picker.$emit('pick', date);
						}
					}]
				},
				pickerOptions2: {
					shortcuts: [{
						text: this.$t('conversion.tomorrow'),
						onClick(picker) {
							picker.$emit('pick', new Date() + 3600 * 1000 * 24);
						}
					},{
						text: this.$t('conversion.affterTomorrow'),
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
							picker.$emit('pick', date);
						}
					}]
				},
        form: {
          date1: '',
          date2: '',
					shot:0,
					fiftyCoin:0,
					hundredCoin:0,
					dragonBall:0,
					colorfulBall:0,
					life:0,
					transformBall:0,
        },
				code:"",
				show:false,
      }
    },
    methods: {
      onSubmit() {
				if(!(this.form['date1']&&this.form['date2']))
				{
					this.warn();
				}
				var count = 0;
				for(var x in this.form)
				{
					if(this.form[x]>0){
						count += 1;
					}
				}
				if(count>4){
					this.countWarn();
				}
				var code = "ssss";
				this.show=true;
				this.code = code;
				this.successNotify(code);
        // this.$http.get('http://www.baidu.com',{
				//
				// }).then(function(response){
				// 	console.log(response);
				// }).catch(function(error){
				// 	console.log(error);
				// })
      },
			warn() {
				this.$notify({
					title: this.$t('conversion.warn'),
					message: this.$t('conversion.warnMessage'),
					type: 'warning'
				});
			},
			countWarn() {
				this.$notify({
					title: this.$t('conversion.warn'),
					message: this.$t('conversion.countMessage'),
					type: 'warning'
				});
			},
			successNotify(code) {
				this.$notify({
					title: this.$t('conversion.success'),
					message: code,
					type: 'success'
				});
			},
    }
  }
</script>
