<template>
  <el-form style="margin:20px;width:60%;min-width:600px;" ref="form" >
  		<el-input :span="2" v-model="level" style="width:50%">
  			<template slot="prepend">{{$t("levelControl.targetLevel")}}</template>
  		</el-input>
      <el-form-item>
        <el-button style="margin-top:10px"@click=onSubmit type="primary">{{$t("levelControl.modify")}}</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
				level:0,
      }
    },
    methods: {
      onSubmit() {
        this.successNotify();
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
					title: this.$t('levelControl.success'),
					message: code,
					type: 'success'
				});
			},
    }
  }
</script>
