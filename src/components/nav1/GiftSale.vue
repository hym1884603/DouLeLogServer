<template>
<el-form ref="form" :model="form" label-position="left" label-width="80px" style="margin:20px;width:60%;min-width:600px;">
    <el-row>
        <el-tag type="primary" style="width:90px">{{$t('giftSale.liveItem')}}</el-tag>
        <el-radio-group v-for="(level,index) in allLevel" v-model="pickedIndex">
            <el-radio class="radio" :label="index">{{level.start}}To{{level.end}}</el-radio>
        </el-radio-group>
        <el-button type="danger" size="small">{{$t('giftSale.delete')}}</el-button>
    </el-row>
    <el-row>
        <el-tag type="primary" style="width:90px">{{$t('giftSale.giftLevelPicked')}}</el-tag>
        <el-radio-group v-model="childrenPickedIndex">
            <el-radio class="radio" :label=0>{{$t('giftSale.one')}}</el-radio>
            <el-radio class="radio" :label=1>{{$t('giftSale.two')}}</el-radio>
            <el-radio class="radio" :label=2>{{$t('giftSale.three')}}</el-radio>
        </el-radio-group>
        <el-button type="info" size="small">{{$t('giftSale.read')}}</el-button>
    </el-row>
    <el-row>
      <el-form-item :label="$t('giftSale.startLevel')">
        <el-col :span="8">
          <el-input-number v-model="pickedLevel.start"/></el-input-number>
        </el-col>
        <el-col class="line" :span="2">{{$t('giftSale.endLevel')}}</el-col>
        <el-col :span="8">
          <el-input-number v-model="pickedLevel.end"/></el-input-number>
        </el-col>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item :label="$t('giftSale.propAdd')">
        <el-col class="select" :span="4">
          <el-select v-model="childrenLevel" :placeholder="$t('giftSale.pleaseChoose')" >
            <el-option
              v-for="item in levels"
              :label="item.text"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="select" :span="4">
          <el-select v-model="propItem" :placeholder="$t('giftSale.pleaseChoose')" >
            <el-option
              v-for="item in options"
              :label="item.text"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="select" :span="4">
          <el-select v-model="propNum">
            <el-option
              v-for="n in 5"
              :label="n"
              :value="n">
            </el-option>
          </el-select>
        </el-col>
        <el-button class="select" @click=onSubmit type="success" size="small">{{$t("giftSale.add")}}</el-button>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item :label="$t('giftSale.first')">
        <el-col :span="4">
          <el-tag type="primary">{{$t('giftSale.count')}}{{count1}}</el-tag>
          <el-tag type="primary">{{$t('giftSale.discount')}}{{discount1}}</el-tag>
        </el-col>
        <el-col :span="2">
          {{$t('giftSale.discountNum')}}
        </el-col>
        <el-col :span="4">
          <el-input v-model="price1" width="50px"></el-input>
        </el-col>
        <el-col :span="1">
          {{$t('giftSale.dollar')}}
        </el-col>
        <el-col :span="4">
          <el-input v-model="dollar1" width="50px"></el-input>
        </el-col>
      </el-from-item>
    </el-row>
    <el-row>
      <ul>
        <li v-for="item in Level1" v-on:click = "removeItem(item,0)">
          {{item.text}}:{{item.value}}
        </li>
      </ul>
    </el-row>
	</el-form>
</template>

<script>
export default {
    data() {
        return {
            pickedIndex: 0,
            allLevel: [],
            childrenPickedIndex: 0,
            pickedLevel: {
                start: 0,
                end: 0
            },
            levels:[
              { text: this.$t('giftSale.first'), value: '0'},
              { text: this.$t('giftSale.second'), value: '1'},
              { text: this.$t('giftSale.third'), value: '2'},
            ],
            options: [
              { text: this.$t('giftSale.item1'), value: 'A', coin:25, name:'1'},
              { text: this.$t('giftSale.item2'), value: 'B', coin:25, name:'2'},
              { text: this.$t('giftSale.item3'), value: 'C', coin:10, name:'3'},
              { text: this.$t('giftSale.item4'), value: 'D', coin:30, name:'4'},
              { text: this.$t('giftSale.item5'), value: 'E', coin:25, name:'5'},
              { text: this.$t('giftSale.item6'), value: 'F', coin:15, name:'6'}
            ],
            Level1:[
              {text:"aaa",value:5},
              {text:"aaa",value:5},
              {text:"aaa",value:5},
              {text:"aaa",value:5},
            ],
            childrenLevel:"",
            propItem: "",
            propNum:1,
            show: false,
            count1:0,
            count2:0,
            count3:0,
            discount1:0,
            discount2:0,
            discount3:0,
            price1:0,
            price2:0,
            price3:0,
            dollar1:0,
            dollar2:0,
            dollar3:0,
        }
    },
    watch: {
        pickedIndex: function(val) {
            this.pickedLevel = this.allLevel[val];
        },
    },
    methods: {
        onSubmit() {

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
<style>
.radio {
    padding: 10px 10px 10px 10px;
}

.select{
  margin-left: 5px;
}
</style>
