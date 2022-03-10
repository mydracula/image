<template>
  <div class="test">
    <vxe-table border :data="tableData" :span-method="colspanMethod">
      <vxe-column field="name" title="姓名"></vxe-column>
      <vxe-column field="age" title="年龄"></vxe-column>
      <vxe-column field="phone" title="联系电话"></vxe-column>
      <vxe-column field="policy" title="可享政策"></vxe-column>
      <vxe-column field="streetName" title="街道"></vxe-column>
      <vxe-column field="communityName" title="社区"></vxe-column>
      <vxe-column field="residenceAddr" title="家庭住址"></vxe-column>
      <vxe-column field="deptName" title="主管部门"></vxe-column>
      <vxe-column
        field="processStatus"
        title="是否已享受"
        :formatter="getProcess"
      >
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          cardNo: "未知_FA3B44D8FD1C2EC5C975B2DBCE1BE530",
          id: 12122,
          name: "张敏",
          age: 41,
          phone: "18672308783",
          policy: "乳腺癌筛查",
          streetName: "东晓街道",
          communityName: "东晓社区",
          residenceAddr: "江背路16号国际名园B座2006",
          deptName: "区卫健局",
          processStatus: 1
        },
        {
          cardNo: "未知_FA3B44D8FD1C2EC5C975B2DBCE1BE530",
          id: 12121,
          name: "张敏",
          age: 41,
          phone: "18672308783",
          policy: "乳腺癌筛查",
          streetName: "东晓街道",
          communityName: "东晓社区",
          residenceAddr: "江背路16号国际名园B座2006",
          deptName: "区卫健局",
          processStatus: 1
        },
        {
          cardNo: "H60026553",
          id: 12124,
          name: "张敏",
          age: 41,
          phone: "18672308783",
          policy: "乳腺癌筛查",
          streetName: "南湖街道",
          communityName: "和平社区",
          residenceAddr: "和平路和平1号",
          deptName: "区民政局",
          processStatus: 2
        },
        {
          cardNo: "H60026553",
          id: 12125,
          name: "张敏",
          age: 41,
          phone: "18672308783",
          policy: "乳腺癌筛查",
          streetName: "南湖街道",
          communityName: "和平社区",
          residenceAddr: "和平路和平1号",
          deptName: "区民政局",
          processStatus: 2
        },
        {
          cardNo: "H60026553",
          id: 12126,
          name: "张敏",
          age: 41,
          phone: "18672308783",
          policy: "乳腺癌筛查",
          streetName: "南湖街道",
          communityName: "和平社区",
          residenceAddr: "和平路和平1号",
          deptName: "区民政局",
          processStatus: 2
        }
      ]
    };
  },
  methods: {
    colspanMethod({ row, _rowIndex, column, visibleData }) {
      const field = [
        "name",
        "age",
        "phone",
        "streetName",
        "communityName",
        "residenceAddr",
        "deptName"
      ]; // 需要合并的列

      const cellValue = row.cardNo; // 合并行的相同的唯一标识

      if (cellValue && field.includes(column.property)) {
        const prevRow = visibleData[_rowIndex - 1];
        let nexxtRow = visibleData[_rowIndex + 1];
        if (prevRow && prevRow.cardNo === cellValue) {
          // 如果和第一行数据一样，就删除
          return { rowspan: 0, colspan: 0 };
        } else {
          // 获取有机会数据是一样的
          let countRowspan = 1;
          while (nexxtRow && nexxtRow.cardNo === cellValue) {
            nexxtRow = visibleData[++countRowspan + _rowIndex];
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 };
          }
        }
      }
    },
    getProcess({ cellValue }) {
      console.log(cellValue);
      let list = [
        { label: "否", value: "1" },
        { label: "是", value: "2" }
      ];
      let item = list.find(item => item.value == cellValue);
      return item ? item.label : "";
    }
  }
};
</script>

<style scoped></style>
