<template>
  <transition name="van-fade">
    <van-row>
      <van-col span="24">
        <van-cell-group class="form">
          <van-cell title="停车位产权办理查询" style="font-weight: bold"/>
          <van-field
                  readonly
                  clickable
                  label="小区"
                  :value="tool.communityName"
                  placeholder="选择小区"
                  @click="tool.showPicker = true"
          />
          <van-popup v-model="tool.showPicker" position="bottom" >
            <van-picker
                    show-toolbar
                    :columns="tool.columns"
                    @cancel="tool.showPicker = false"
                    @confirm="onConfirm"
                    title="选择小区"
                    :item-height="40"
            />
          </van-popup>
          <van-field
                  pattern="[0-9]*"
                  v-model="form.batch"
                  clearable
                  label="期号"
                  right-icon="question-o"
                  placeholder="请输入期号"
                  @click-right-icon="$toast('请输入期号，可为空')"
          />

          <van-field
                  pattern="[0-9]*"
                  v-model="form.floor"
                  label="楼号"
                  placeholder="请输入楼号"
          />
          <van-field
                  pattern="[0-9]*"
                  v-model="form.unit"
                  label="楼层"
                  placeholder="请输入楼层号"
          />
          <van-field
                  pattern="[0-9]*"
                  v-model="form.room"
                  label="车位"
                  placeholder="请输入车位号"
          />
          <van-field
                  v-model="form.identity_no"
                  label="身份证号"
                  placeholder="请输入身份证号"
          />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-popup
                v-model="tool.result"
                round
                position="bottom"
        >
          <van-row>
            <van-col span="24">
              <van-panel style="text-align: left; border-bottom: 0;" title="车位产权办理查询结果">
                <van-row style="padding: 8px 15px 0px 15px;">
                  <van-image
                          width="100%"
                          height="80"
                          src="http://deed.static.wowphp.cn/dls.jpeg"
                  />
                </van-row>
                <van-row style="padding: 8px 8px 0px 8px;">
                  <van-col span="24" class="mx-5">
                    <van-steps
                            :active="result.step"
                            active-icon="success"
                            active-color="#38f"
                    >
                      <van-step>资料审核</van-step>
                      <van-step>税务审核</van-step>
                      <van-step>不动产审核</van-step>
                      <van-step>办理完成</van-step>
                    </van-steps>
                  </van-col>
                </van-row>
                <van-row style="padding: 8px 8px 8px 12px;">
                  <van-col span="3">
                    <van-image
                            round
                            width="1.6rem"
                            height="1.6rem"
                            src="http://deed.static.wowphp.cn/logo/logo.jpeg"
                    />
                  </van-col>
                  <van-col span="21">
                    <small>圆堂客户{{ this.result.client ? this.result.client : '' }}您好 !</small>
                  </van-col>
                  <van-col span="21" offset="3">
                    <small>
                      {{ this.result.notice ? this.result.notice : '' }}
                    </small>
                  </van-col>
                </van-row>
              </van-panel>
            </van-col>
          </van-row>
          <van-divider dashed>
            <small>&copy; 2019 圆堂科技</small>
          </van-divider>
        </van-popup>
      </van-col>
      <van-col style="margin-top: 8px;" span="24">
        <van-button type="info" style="width: 100%" @click="showResult">
          <b>查 询</b>
        </van-button>
      </van-col>
    </van-row>
  </transition>
</template>

<script>
export default {
  name: 'Store',
  data () {
    return {
      tool: {
        numberKeyboard: false,
        result: false,
        smsCodeStatus: false,
        columns: [],
        communities: [],
        communityName: '',
        showPicker: false
      },
      result: {
        step: -1,
        status: '办理完成'
      },
      form: {
        community: '',
        batch: '',
        floor: '',
        unit: '',
        room: '',
        identity_no: '',
        type: 2
      }
    }
  },
  methods: {
    onConfirm (value, index) {
      this.tool.communityName = value
      this.tool.showPicker = false
      this.form.community = this.tool.communities[index].id
    },
    showResult () {
      let fields = [
        { 'message': '请输入身份证号', 'name': 'identity_no' },
        { 'message': '请输入车位号', 'name': 'room' },
        { 'message': '请输入楼层号', 'name': 'unit' },
        { 'message': '请输入楼号', 'name': 'floor' },
        { 'message': '请输入期号', 'name': 'batch' },
        { 'message': '请选择小区', 'name': 'community' }
      ]
      let hasError = false
      fields.forEach(item => {
        let name = item.name
        if (this.form[name] === '') {
          this.$notify(item.message)
          hasError = true
        }
      })

      if (hasError) {
        return false
      }
      // 检查输入
      this.$toast.loading({ message: '正在查询' })
      this.$axios.get('sys/query', {
        params: this.form
      }).then(r => {
        if (r.data.code === 5000) {
          return this.$notify(r.data.msg)
        }

        if (r.data.code === 5001) {
          return this.$toast.fail(r.data.msg)
        }
        this.result = r.data.data
        this.tool.result = true
        this.$toast.clear()
      }).catch(e => {
        this.$toast.clear()
        this.$toast.alert({ message: '网络错误，请重试!' })
      })
    }
  },
  beforeCreate () {
    this.$axios.get('sys/communities').then(r => {
      r.data.data.map(item => {
        this.tool.communities.push(item)
        this.tool.columns.push(item.name)
      })
    })
  }
}
</script>

<style scoped>

</style>
