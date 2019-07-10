<template>
<div>
   <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoLicenseNo}}：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoLicenseNo"
                v-model="licenseNo"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3" :gutter="20">
            <div class="grid-content bg-purple">
              <div class="grid-content bg-purple">
                <el-checkbox-group v-model="radio">
                  <el-checkbox label name="type">新保</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light">{{guItemMotorDtoFrameNo}}:</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-input :placeholder="['请输入']+guItemMotorDtoFrameNo" v-model="frameNo" clearable></el-input>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light">{{guItemMotorDtoEngineNo}}:</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">
              <el-input :placeholder="['请输入']+guItemMotorDtoEngineNo" v-model="engineNo" clearable></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoBrandName}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoBrandName"
                v-model="brandName"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoPrintBrandName}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoPrintBrandName"
                v-model="printBrandName"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button type="primary">显示CarID详情</el-button>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoSingeinDate}}:</div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <el-date-picker
                v-model="singeinDate"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col :span="3"></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoEnrollDate}}:</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-date-picker
                v-model="enrollDate"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoMotorType}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoMotorType"
                v-model="motorType"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoCarKindCode}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoCarKindCode"
                v-model="licenseType"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoVehicleCategory}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoVehicleCategory"
                v-model="vehicleCategory"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoLicenseType}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoLicenseType"
                v-model="licenseType"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoSeatCount}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoSeatCount"
                v-model="seatCount"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoTonCount}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoTonCount"
                v-model="tonCount"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoNegotiatedActualValue}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoNegotiatedActualValue"
                v-model="negotiatedActualValue"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoUseNatureCode}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoUseNatureCode"
                v-model="useNatureCode"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>

        

        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoAttributeProperty}}:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoAttributeProperty"
                v-model="attributeProperty"
                clearable
              ></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">{{guItemMotorDtoCarUseType}}:</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">
              <el-input
                :placeholder="['请输入']+guItemMotorDtoCarUseType"
                v-model="carUseType"
                clearable
              ></el-input>
            </div>
          </el-col>
        </el-row>
        </div>
</template>
<script>
import { mapState, mapMutations, mapAction } from "vuex";

export default {
  data() {
    return {
      licenseNo: "111",
      frameNo: "222",
      engineNo: "333",
      brandName: "",
      printBrandName: "",
      singeinDate: "",
      enrollDate: "",
      motorType: "",
      licenseType: "",
      vehicleCategory: "",
      licenseType: "",
      seatCount: "",
      carKindCode: "",
      tonCount: "",
      negotiatedActualValue: "ggg",
      useNatureCode: "",
      attributeProperty: "",
      carUseType: "",

      radio: "",
      //---------日期start-----------
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
      //-----日期end------------
    };
  },
  methods: {
    newProposal() {}
  },
  computed: {
    ...mapState({
      guItemMotorDtoLicenseNo: state => state.guItemMotor.licenseNo,
      guItemMotorDtoFrameNo: state => state.guItemMotor.frameNo,
      guItemMotorDtoEngineNo: state => state.guItemMotor.engineNo,
      guItemMotorDtoBrandName: state => state.guItemMotor.brandName,
      guItemMotorDtoPrintBrandName: state => state.guItemMotor.printBrandName,
      guItemMotorDtoSingeinDate: state => state.guItemMotor.singeinDate,
      guItemMotorDtoEnrollDate: state => state.guItemMotor.enrollDate,
      guItemMotorDtoMotorType: state => state.guItemMotor.motorType,
      guItemMotorDtoCarKindCode: state => state.guItemMotor.carKindCode,
      guItemMotorDtoVehicleCategory: state => state.guItemMotor.vehicleCategory,
      guItemMotorDtoLicenseType: state => state.guItemMotor.licenseType,
      guItemMotorDtoSeatCount: state => state.guItemMotor.seatCount,
      guItemMotorDtoTonCount: state => state.guItemMotor.tonCount,
      guItemMotorDtoNegotiatedActualValue: state =>
        state.guItemMotor.negotiatedActualValue,
      guItemMotorDtoUseNatureCode: state => state.guItemMotor.useNatureCode,
      guItemMotorDtoAttributeProperty: state =>
        state.guItemMotor.attributeProperty,
      guItemMotorDtoCarUseType: state => state.guItemMotor.carUseType
    })
  }
};
</script>

<style>
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: -webkit-left;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>