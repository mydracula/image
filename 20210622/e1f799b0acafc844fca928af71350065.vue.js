<template>
  <a-row>
    <a-col :span="6">
      <!-- <div></div> -->
      <a-spin class="tree-warp" :spinning="spinning">
        <a-tree showLine :treeData="treeData" @select="selectTree"></a-tree>
      </a-spin>
    </a-col>
    <a-col :span="18">
      <div class="tree-manage">
        <div>
          <a-button type="primary" class="btn-space" @click="del">
            <a-icon type="close"></a-icon>
            删除
          </a-button>
          <a-button class="btn-space" @click="add">
            <a-icon type="plus"></a-icon>
            添加
          </a-button>
        </div>
        <div class="detail">
          <a-form :form="form" @submit="save">
            <a-row>
              <a-col :span="12"
                ><a-form-item label="菜单名称" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                  <a-input
                    :disabled="edit"
                    v-decorator="[
                      'menuName',
                      {
                        rules: [{ required: true, message: '请输入菜单名称!' }]
                      }
                    ]"
                  /> </a-form-item
              ></a-col>
              <a-col :span="12">
                <a-form-item label="地址" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                  <a-input :disabled="edit" v-decorator="['routUrl', { rules }]"> </a-input> </a-form-item
              ></a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                  <a-button type="primary" html-type="submit">
                    保存
                  </a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { getMenuSysData, platformMenuBySys, platformMenu, addPlatformMenu, platformMenuByParent, delPlatformMenu } from '@/api/dataApi'

import _ from 'lodash'

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 }
}
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14, offset: 8 }
}

export default {
  data() {
    return {
      treeData: [],
      childrenData: [],
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      edit: true,
      isAdd: true,
      rules: [{ required: true, message: '请输入地址!' }],
      parentKey: '',
      spinning: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let arr = await this.getTreeData()
      let children = await this.getChildData(arr)
      arr.forEach((item) => {
        children.forEach((childItem) => {
          if (item.dictCode === childItem[0].sysId) {
            item['children'] = childItem
          }
        })
      })
      this.treeData = arr
      console.log(this.treeData, '结果')
      this.spinning = false
    },
    async getTreeData() {
      const { result } = await getMenuSysData()

      let arr = []
      result.forEach((item) => {
        arr.push({
          title: item.name,
          key: item.id,
          dictCode: item.dictCode
        })
      })
      return arr
    },
    async getChildData(arr) {
      // let dataInfo = {}
      let childrenArr = []
      for (let item of arr) {
        const data = await platformMenuBySys(item.dictCode)
        if (data.result.length) {
          let deep = _.cloneDeep(data.result)
          let childArr = this.TreeDataSource(deep)
          childrenArr.push(childArr)
        }
        // let deep = _.cloneDeep(data.result)
        // let childArr = this.TreeDataSource(deep)
        // if (childArr.length) {
        //   return childArr
        // }
        // if (data.result.length) {
        //   for (let menuItem of data.result) {
        //     let { sysId } = menuItem
        //     if (!dataInfo[sysId]) {
        //       dataInfo[sysId] = []
        //     }

        //     dataInfo[sysId].push({
        //       title: menuItem.menuName,
        //       routUrl: menuItem.routUrl,
        //       key: menuItem.id,
        //       sysId: menuItem.sysId,
        //       remarks: menuItem.remarks,
        //       createUser: menuItem.createUser,
        //       type: menuItem.type,
        //       parentId: menuItem.parentId
        //     })
        //   }
        // }
      }
      return childrenArr
      // let childArr = Object.values(dataInfo)
      // return childArr
      // console.log(childrenArr, '323232')
      // return childrenArr
    },
    TreeDataSource(arr) {
      if (!Array.isArray(arr)) {
        return
      }
      return arr.map((v, i) => {
        return {
          title: v.menuName,
          routUrl: v.routUrl,
          key: v.id,
          sysId: v.sysId,
          remarks: v.remarks,
          createUser: v.createUser,
          type: v.type,
          parentId: v.parentId,
          children: v.childMenus ? this.TreeDataSource(v.childMenus) : []
        }
      })
    },
    async del() {
      if (!this.parentKey) {
        this.$message.info('请选中左边菜单！')
      } else {
        const { status, msg } = await delPlatformMenu(this.parentKey)
        if (status === '1') {
          this.$message.success(`info：${msg}`)
          this.spinning = true
          this.getData()
          this.form.resetFields()
        } else {
          this.$message.info(`info：${msg}`)
        }
      }
    },
    selectTree(keys, row) {
      let data = row.selectedNodes[0].data.props
      this.parentKey = data.dataRef.key
      this.isAdd = false
      if (data.dictCode) {
        this.edit = true
        this.rules = [{ required: false, message: '请输入地址!' }]
      } else {
        this.rules = [{ required: true, message: '请输入地址!' }]
        this.edit = false
      }
      // this.form.getFieldDecorator('id')
      // this.form.getFieldDecorator('sysId')
      // this.form.getFieldDecorator('remarks')
      // this.form.getFieldDecorator('createUser')
      // this.form.getFieldDecorator('type')
      // this.form.getFieldDecorator('parentId')
      this.form.setFieldsValue({
        routUrl: data.routUrl,
        menuName: data.title
        // id: data.dataRef.key,
        // sysId: data.dataRef.sysId,
        // remarks: data.dataRef.remarks,
        // createUser: data.dataRef.createUser,
        // type: data.dataRef.type,
        // parentId: data.dataRef.parentId
      })
      console.log(data)
      if (this.edit) {
        let obj = {
          sysId: data.dictCode,
          parentId: null,
          remarks: null
        }
        localStorage.setItem('platformMenuData', JSON.stringify(obj))
      } else {
        let obj = {
          id: data.dataRef.key,
          parentId: data.dataRef.parentId,
          sysId: data.dataRef.sysId,
          remarks: data.dataRef.remarks,
          createUser: data.dataRef.createUser,
          type: data.dataRef.type
        }
        localStorage.setItem('platformMenuData', JSON.stringify(obj))
      }
    },
    save(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          if (this.isAdd) {
            let parentId = JSON.parse(localStorage.getItem('platformMenuData')).id || null
            let obj = {
              sysId: JSON.parse(localStorage.getItem('platformMenuData')).sysId,
              parentId,
              remarks: JSON.parse(localStorage.getItem('platformMenuData')).remarks
            }
            let p = Object.assign({}, obj, values)
            const { status, msg } = await addPlatformMenu(p)
            if (status === '1') {
              this.$message.success(`info：${msg}`)
              this.spinning = true
              this.getData()
              this.form.resetFields()
              // if (obj.parentId) {
              //   let arr = []
              //   const { result } = await platformMenuByParent(obj.parentId)
              //   result.forEach((item) => {
              //     arr.push({
              //       title: item.menuName,
              //       routUrl: item.routUrl,
              //       key: item.id,
              //       sysId: item.sysId,
              //       remarks: item.remarks,
              //       createUser: item.createUser,
              //       type: item.type,
              //       parentId: item.parentId
              //     })
              //   })
              // }
            } else {
              this.$message.info(`info：${msg}`)
            }
            this.isAdd = false
          } else {
            if (!this.edit) {
              if (localStorage.getItem('platformMenuData')) {
                let obj = Object.assign({}, JSON.parse(localStorage.getItem('platformMenuData')), values)
                console.log(obj)
                const { msg, status } = await platformMenu(obj)
                if (status === '1') {
                  this.$message.success(`info：${msg}`)
                  this.spinning = true
                  this.getData()
                } else {
                  this.$message.info(`info：${msg}`)
                }
              } else {
                this.$message.info('info：请选中左边菜单！')
              }
            } else {
              this.$message.info('info：禁止直接修改系统名称！')
            }
          }
        }
      })
    },
    add() {
      if (!this.parentKey) {
        this.$message.info('请选中左边菜单！')
      } else {
        this.form.resetFields()
        this.isAdd = true
        this.edit = false
        this.rules = [{ required: true, message: '请输入地址!' }]
      }
    }
  }
}
</script>

<style scoped>
.tree-warp {
  border-right: 1px solid #e8e8e8;
  min-height: 600px;
}
.tree-manage {
  margin-left: 16px;
}

.detail {
  border: 1px solid #e8e8e8;
  padding-top: 24px;
  margin-top: 24px;
}

.btn-space {
  margin-right: 16px;
}
</style>
