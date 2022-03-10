<template>
  <div class="table">
    <vxe-table
      row-key
      ref="vexTable"
      row-id="id"
      auto-resize
      align="center"
      resizable
      highlight-hover-row
      :checkbox-config="{ range: true, reserve: true }"
      @checkbox-all="handleSelectionChange"
      @checkbox-change="selectChangeEvent"
      v-loading="config.loading"
      :tooltip-config="tooltipConfig"
      :data="config.tableData"
    >
      <vxe-column type="checkbox" width="40"></vxe-column>
      <vxe-column
        v-for="(i, index) in config.headers"
        :type="i.type"
        :key="index"
        :title="i.value"
        :field="i.key"
        :width="i.width"
        show-overflow
      >
        <template #default="{ row }">
          <component
            :is="i.preHandle ? vexFormat : vexDefault"
            :data="row"
            :prop="i.key"
            :format="i.format"
            :attr="i.attr"
          >
          </component>
        </template>
      </vxe-column>
      <vxe-column title="操作" field="operate" v-if="!config.operate">
        <template #default="{ row }">
          <slot name="operate" :row="row" />
        </template>
      </vxe-column>
    </vxe-table>
    <vxe-pager
      :current-page="config.pageObj.current"
      :page-size="config.pageObj.size"
      :total="config.pageObj.total"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'Total']"
      @page-change="config.pageObj.handleCurrentChange"
    >
    </vxe-pager>
  </div>
</template>

<script>
import vexFormat from "@/components/Common/vexFormat";
import vexDefault from "@/components/Common/vexDefault";
export default {
  props: ["config"],
  data() {
    return {
      vexFormat: vexFormat,
      vexDefault: vexDefault,
      tooltipConfig: {
        showAll: true,
        enterable: true,
        contentMethod: this.showTooltipMethod
      },
      tipRules: ["sendMsgRecord", "pushMsgRecord", "visitRecord"],
      selectedRowKeys: [],
      /*table选中records*/
      selectionRows: []
    };
  },
  methods: {
    rowspanMethod({ row, _rowIndex, column, visibleData }) {
      console.log(
        row,
        _rowIndex,
        column,
        visibleData,
        "row, _rowIndex, column, visibleData"
      );
    },
    showTooltipMethod({ type, column, row, items, _columnIndex }) {
      const { property } = column;

      if (property == "operate") {
        if (type === "body") {
          return "操作";
        }
      }
      if (this.tipRules.includes(property)) {
        if (type === "body") {
          if (row[property]) {
            this.tooltipConfig.showAll = true;
            return row[property].content || row[property].record;
          }
        }
      }

      // this.tooltipConfig.showAll = false;
      // let condition =
      //   property === "sendMsgRecord" ||
      //   property === "pushMsgRecord" ||
      //   property === "visitRecord";
      // if (condition) {
      //   if (type === "body") {
      //     if (row[property]) {
      //       this.tooltipConfig.showAll = true;
      //       return row[property].content || row[property].record;
      //     }
      //   }
      // }
    },
    handleSelectionChange({ checked, records, reserves, row }) {
      //全选中时
      if (checked) {
        if (reserves.length == 0) {
          this.selectedRowKeys = records.map(v => v.id);
          this.selectionRows = records;
        } else {
          this.selectedRowKeys = [
            ...reserves.map(v => v.id),
            ...records.map(v => v.id)
          ];
          this.selectionRows = [...reserves, ...records];
        }
      } else {
        this.selectionRows = reserves;
        this.selectedRowKeys = reserves.map(v => v.id);
      }

      const newArr = this.deWeightThree(this.selectionRows);
      this.$emit("handleSelectionChange", newArr);
    },
    selectChangeEvent({ checked, records, reserves, row }) {
      if (checked) {
        if (reserves.length == 0) {
          this.selectedRowKeys = records.map(v => v.id);
          this.selectionRows = records;
        } else {
          this.selectedRowKeys = [
            ...reserves.map(v => v.id),
            ...records.map(v => v.id)
          ];
          this.selectionRows = [...reserves, ...records];
        }
      } else {
        let idIndex = this.selectedRowKeys.indexOf(row.id);
        if (idIndex > -1) {
          this.$delete(this.selectedRowKeys, idIndex);
        }

        let dataIndex = null;
        for (let i = 0; i < this.selectionRows.length; i++) {
          if (this.selectionRows[i].id == row.id) {
            dataIndex = i;
            break;
          }
        }
        this.$delete(this.selectionRows, dataIndex);
      }

      const newArr = this.deWeightThree(this.selectionRows);
      this.$emit("handleSelectionChange", newArr);
    },
    deWeightThree(arr) {
      let map = new Map();
      for (let item of arr) {
        if (!map.has(item.cardNo)) {
          map.set(item.cardNo, item);
        }
      }
      return [...map.values()];
    }
  }
};
</script>

<style scoped lang="scss">
.table {
  ::v-deep .vxe-table--render-default .vxe-body--column:not(.col--ellipsis),
  ::v-deep .vxe-table--render-default .vxe-footer--column:not(.col--ellipsis),
  ::v-deep .vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
    padding: 7px 0 !important;
  }
  ::v-deep tr.vxe-body--row {
    // background: black;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    .vxe-cell.c--tooltip {
      // background: yellow;
      // display: inline-table;
    }
  }
  ::v-deep .vxe-table--body-wrapper.body--wrapper {
    // overflow-y: visible !important;
    // overflow-x: visible !important;
    // &::-webkit-scrollbar {
    //   display: none;
    // }
  }
}
</style>
