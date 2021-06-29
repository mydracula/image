<template>
  <div class="content">
    <a-row>
      <a-col :span="6">
        <a-spin class="tree-warp" :spinning="spinning">
          <a-tree showLine :treeData="treeData" @select="selectTree"></a-tree>
        </a-spin>
      </a-col>
      <a-col :span="18">
        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <span slot="action" slot-scope="text, record">
            <!-- slot-scope="text, record" -->

            <a-button type="primary" v-if="record.name === '角色'" class="my-btn green" @click="edit(record)">
              <a-icon type="edit"></a-icon>
              修改
            </a-button>
            <a-button type="primary" v-if="record.name === '角色'" class="my-btn red" @click="del(record)">
              <a-icon type="close"></a-icon>
              删除
            </a-button>
            <a-button type="primary" v-if="record.dictCode" @click="add(record)">
              添加
            </a-button>
            <a-button type="primary" v-if="record.name === '角色'" @click="partMenu(record)">
              分配菜单
            </a-button>
          </span>
        </a-table>
      </a-col>
    </a-row>
    <a-modal v-model="visible" title="编辑" @cancel="handCancel" @ok="handleOk">
      <a-form-model v-if="addFlag || editFlag" ref="ruleForm" :model="form" :rules="rules" :label-col="formLayout.labelCol" :wrapper-col="formLayout.wrapperCol">
        <a-form-model-item ref="title" label="角色" prop="title">
          <a-input
            v-model="form.title"
            @blur="
              () => {
                $refs.title.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="备注" prop="remarks">
          <a-input v-model="form.remarks" type="textarea" />
        </a-form-model-item>
      </a-form-model>

      <template>
        <a-tree v-if="partFlag" checkable showLine :treeData="subTree" @check="onCheck" :checkedKeys="checkedKeysMenu"></a-tree>
        <span v-if="emptyFlag">暂无菜单</span>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { getMenuSysData, platformRole, updateRole, addRole, delRole, boundRoleMenu, findSubRole, findRoleMenu } from '@/api/dataApi'

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

const columns = [
  {
    title: '角色名称',
    dataIndex: 'title',
    key: 'title',
    width: 300,
    align: 'center'
  },
  {
    title: '备注信息',
    dataIndex: 'remarks',
    key: 'remarks',
    width: 300,
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center'
  }
]
export default {
  data() {
    return {
      formItemLayout,
      formTailLayout,
      formLayout,
      spinning: true,
      treeData: [],
      columns,
      data: [],
      pagination: { pageSize: 15 },
      visible: false,
      form: {
        title: '',
        remarks: ''
      },
      rules: {
        title: [{ required: true, message: '请填写角色名称', trigger: 'blur' }],
        remarks: [{ required: true, message: '请填写角备注信息', trigger: 'blur' }]
      },
      visibleTemp: {},
      addFlag: false,
      editFlag: false,
      partFlag: false,
      subTree: [],
      checkedKeysMenu: [],
      platformMenuIdList: [],
      emptyFlag: false
    }
  },
  created() {
    this.$nextTick(function() {
      this.getData()
    })
  },
  mounted() {
    const unwatch = this.$watch('treeData', function(newValue) {
      this.data = this.treeData
      console.log(this.data)
      unwatch()
    })
  },
  methods: {
    selectTree(keys, row) {
      let data = row.selectedNodes[0].data.props
      console.log(data)
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
          children: v.childMenus.length ? this.SubTreeDataSource(v.childMenus) : null
        }
      })
    },
    add(parame) {
      console.log(parame)
      this.visibleTemp = parame
      this.addFlag = true
      this.visible = true
    },
    async handleOk() {
      // 系统添加或者角色修改
      if (this.$refs.ruleForm) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            // 系统下添加角色
            if (this.addFlag) {
              console.log('添加', this.addFlag)
              let object = {
                name: this.form.title,
                sysId: this.visibleTemp.dictCode,
                remarks: this.form.remarks
              }
              const { msg, status } = await addRole(object)
              if (status === '1') {
                this.$message.success(`info：${msg}`)
                this.spinning = true
                this.$refs.ruleForm.resetFields()
                this.visible = false
                await this.getData()
                this.data = this.treeData
              } else {
                this.$message.info(`info：${msg}`)
                this.$refs.ruleForm.resetFields()
                this.visible = false
              }
              this.addFlag = false
            }
            // 角色下编辑角色
            if (this.editFlag) {
              console.log('添加', this.editFlag)
              let object = {
                id: this.visibleTemp.key,
                sysId: this.visibleTemp.sysId,
                name: this.form.title,
                remarks: this.form.remarks
              }
              const { msg, status } = await updateRole(object)
              if (status === '1') {
                this.$message.success(`info：${msg}`)
                this.spinning = true
                this.$refs.ruleForm.resetFields()
                this.visible = false
                await this.getData()
                this.data = this.treeData
              } else {
                this.$message.info(`info：${msg}`)
                this.$refs.ruleForm.resetFields()
                this.visible = false
              }
              this.editFlag = false
            }
          } else {
            return false
          }
        })
      }
      // 分配菜单
      if (this.partFlag) {
        const { status, msg } = await boundRoleMenu({
          platformMenuIdList: this.platformMenuIdList,
          platformRoleId: this.visibleTemp.key
        })
        if (status === '1') {
          this.$message.success(`info：${msg}`)
          this.spinning = true
          this.visible = false
          await this.getData()
          this.data = this.treeData
        } else {
          this.$message.info(`info：${msg}`)
          this.visible = false
        }
        this.partFlag = false
      }
    },
    edit(parame) {
      console.log(parame)
      this.visibleTemp = parame
      this.editFlag = true
      this.visible = true
    },
    async del(parame) {
      console.log(parame)
      const { msg, status } = await delRole(parame.key)
      if (status === '1') {
        this.spinning = true
        await this.getData()
        this.data = this.treeData
        this.$message.success(`info：${msg}`)
      } else {
        this.$message.info(`info：${msg}`)
      }
    },
    async partMenu(parame) {
      console.log(parame)
      this.emptyFlag = false
      function getSubTree(result) {
        return result.map((v, i) => {
          return {
            title: v.menuName,
            routUrl: v.routUrl,
            key: v.id,
            sysId: v.sysId,
            remarks: v.remarks,
            createUser: v.createUser,
            type: v.type,
            parentId: v.parentId,
            children: v.childMenus.length ? getSubTree(v.childMenus) : null
          }
        })
      }
      const subRole = await findSubRole(parame.key)
      this.checkedKeysMenu = this.requestList(subRole.result)
      const { result } = await findRoleMenu(parame.sysId)
      if (result.length) {
        this.subTree = getSubTree(result)
      } else {
        this.subTree = []
        this.emptyFlag = true
      }

      this.partFlag = true
      this.visibleTemp = parame
      this.visible = true
    },
    onCheck(checkedKeys, e) {
      this.checkedKeysMenu = checkedKeys
      this.platformMenuIdList = [...e.halfCheckedKeys, ...this.checkedKeysMenu]
    },
    requestList(data) {
      this.text = []
      data.map((item) => {
        if (item.childMenus && item.childMenus.length > 0) {
          this.requestList(item.childMenus)
        } else {
          this.text.push(item.id)
        }
        return null
      })
      return this.text
    },
    handCancel() {
      if (this.$refs.ruleForm) {
        this.$refs.ruleForm.resetFields()
      }
      this.editFlag = false
      this.partFlag = false
      this.addFlag = false
    }
  }
}
</script>
<style scoped>
.tree-warp {
  border-right: 1px solid #e8e8e8;
  min-height: 600px;
  margin-right: 10px;
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

.content >>> .ant-table-placeholder {
  background: #0056ac;
  color: #fff;
}
</style>
