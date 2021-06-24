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
          <a-form-model layout="inline" ref="formInline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
            <a-form-model-item prop="name" label="角色" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="formInline.name" :disabled="flag"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="remarks" label="备注" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="formInline.remarks" :disabled="flag"></a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" html-type="submit" class="btn-space" :disabled="flag">
                提交
              </a-button>
              <a-button class="btn-space" @click="showModal" :disabled="edit">
                编辑
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
    </a-col>
    <a-modal title="菜单管理" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
      <a-form-model :model="form" :rules="rules">
        <a-form-model-item label="角色名" ref="autName" prop="autName" :label-col="formLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
          <a-input
            :disabled="true"
            v-model="form.autName"
            @blur="
              () => {
                $refs.autName.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="角色ID" ref="authorId" prop="authorId" :label-col="formLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
          <a-input
            :disabled="true"
            v-model="form.authorId"
            @blur="
              () => {
                $refs.authorId.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="角色授权" :label-col="formLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
          <a-card>
            <Son :queryObj="queryObj" @platformMenuIdList="platformMenuIdList" />
          </a-card>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </a-row>
</template>
<script>
import { getMenuSysData, platformRole, updateRole, addRole, delRole, boundRoleMenu, findSubRole } from '@/api/dataApi'
import Son from './menu/Son'
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 }
}
const formLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 12 }
}
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14, offset: 8 }
}
// const treeData = [
//   {
//     title: 'parent 1',
//     key: '0-0',
//     children: [
//       {
//         title: 'parent 1-0',
//         key: '0-0-0',
//         disabled: true,
//         children: [
//           { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
//           { title: 'leaf', key: '0-0-0-1' }
//         ]
//       },
//       {
//         title: 'parent 1-1',
//         key: '0-0-1',
//         children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }]
//       }
//     ]
//   }
// ]
export default {
  components: {
    Son
  },
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      formItemLayout,
      formTailLayout,
      formLayout,
      spinning: true,
      MenuIdList: [],
      treeData: [],
      treeCode: '',
      isAdd: false,
      flag: false,
      edit: true,
      formInline: {
        name: '',
        remarks: ''
      },
      form: {
        authorId: '',
        ownSys: ''
      },
      queryObj: {},
      rules: {
        authorId: [{ required: true, message: '请填写角色id', trigger: 'blur' }],
        autName: [{ required: true, message: '请填写所属系统', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.$nextTick(function() {
      this.getData()
    })
  },
  methods: {
    selectTree(keys, row) {
      let data = row.selectedNodes[0].data.props
      this.treeCode = data.dictCode
      let name = data.dataRef.title
      let remarks = data.dataRef.remarks
      let key = data.dataRef.key
      let sysId = data.dataRef.sysId
      if (data.name === '角色') {
        this.edit = false
        this.form.authorId = key
        this.form.autName = name
        this.flag = false
        this.formInline.name = name
        this.formInline.remarks = remarks
        this.queryObj = {
          id: key,
          sysId
        }
      } else if (this.treeCode || data.name === '菜单') {
        this.edit = true
        this.flag = true
        this.formInline.name = name
        this.formInline.remarks = remarks
        this.queryObj = {
          sysId: this.treeCode
        }
      }
    },
    async getData() {
      const { result } = await getMenuSysData()
      let deep = result.map((item) => {
        return {
          key: item.id,
          title: item.name,
          createTime: item.createTime,
          dictCode: item.dictCode,
          dictCodeParent: item.dictCodeParent,
          remark: item.remark
        }
      })
      let childrenArr = []
      for (let item of deep) {
        const { result } = await platformRole(item.dictCode)
        if (result.length) {
          result = await this.getTreeMenu(result)
          // console.log(result, 'reresultresultresultresultresultresultresultresultresult')
          // let childArr = this.TreeDataSource(result)
          childrenArr.push(result)
        }
      }

      deep.forEach((item) => {
        childrenArr.forEach((childItem) => {
          if (item.dictCode === childItem[0].sysId) {
            item['children'] = childItem
          }
        })
      })

      this.treeData = deep

      this.spinning = false
    },
    async getTreeMenu(r) {
      r = this.TreeDataSource(r)
      for (const iterator of r) {
        const { result } = await findSubRole(iterator.key)
        if (result.length) {
          // console.log(iterator, result, iterator.id)
          iterator.children = this.SubTreeDataSource(result)
        }
      }
      return r
    },
    TreeDataSource(arr) {
      if (!Array.isArray(arr)) {
        return
      }
      return arr.map((v, i) => {
        return {
          title: v.name,
          key: v.id,
          createDate: v.createDate,
          createType: v.createType,
          delFlag: v.delFlag,
          remarks: v.remarks,
          rolePlatformId: v.rolePlatformId,
          roleType: v.roleType,
          sysId: v.sysId,
          name: '角色'
          // children: v.children ? this.SubTreeDataSource(v.children) : []
        }
      })
    },
    SubTreeDataSource(arr) {
      if (!Array.isArray(arr)) {
        return
      }
      return arr.map((v, i) => {
        return {
          createTime: v.createTime,
          createType: v.createType,
          createUser: v.createUser,
          delFlag: v.delFlag,
          key: v.id,
          title: v.menuName,
          menuPlatformId: v.menuPlatformId,
          parentId: v.parentId,
          remarks: v.remarks,
          routUrl: v.routUrl,
          sysId: v.sysId,
          type: v.type,
          name: '菜单',
          children: v.childMenus ? this.SubTreeDataSource(v.childMenus) : []
        }
      })
    },
    async del() {
      if (this.queryObj.id) {
        const { status, msg } = await delRole(this.queryObj.id)
        if (status === '1') {
          this.$message.success(`info：${msg}`)
          this.getData()
        } else {
          this.$message.info(`info：${msg}`)
        }
        this.$refs.formInline.resetFields()
      } else {
        this.$message.info(`info：请选中左边角色`)
      }
    },
    add() {
      if (!this.treeCode) {
        this.$message.info(`info：请在系统下添加角色！`)
      } else {
        this.$refs.formInline.resetFields()
        this.flag = false
        this.isAdd = true
      }
    },
    async handleSubmit(e) {
      if (this.isAdd) {
        let parse = Object.assign({}, this.formInline, this.queryObj)
        if (this.formInline.name && this.queryObj) {
          const { status, msg } = await addRole(parse)
          if (status === '1') {
            this.$message.success(`info：${msg}`)
            this.getData()
          } else {
            this.$message.info(`info：${msg}`)
          }
          this.isAdd = false
          this.$refs.formInline.resetFields()
        }
      } else {
        if (this.formInline.name && this.queryObj) {
          let parse = Object.assign({}, this.formInline, this.queryObj)
          const { status, msg } = await updateRole(parse)
          if (status === '1') {
            this.$message.success(`info：${msg}`)
            this.getData()
          } else {
            this.$message.info(`info：${msg}`)
          }
          this.$refs.formInline.resetFields()
        } else {
          this.$message.info(`info：请选中左边角色`)
        }
      }
    },
    showModal() {
      this.visible = true
      this.$bus.$emit('findRoleMenu')
    },
    async handleOk(e) {
      const { status, msg } = await boundRoleMenu({
        platformMenuIdList: this.MenuIdList,
        platformRoleId: this.queryObj.id
      })
      if (status === '1') {
        this.$message.success(`info：${msg}`)
      } else {
        this.$message.info(`info：${msg}`)
      }
      this.getData()
      this.visible = false
    },
    handleCancel(e) {
      this.visible = false
    },
    platformMenuIdList(s) {
      this.MenuIdList = s
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

.ant-card-bordered {
  border: none !important;
}
.ant-card {
  background: transparent !important;
}
.detail {
  border: 1px solid #e8e8e8;
  padding: 24px 0;
  margin-top: 24px;
}

.btn-space {
  margin-right: 16px;
}
</style>
