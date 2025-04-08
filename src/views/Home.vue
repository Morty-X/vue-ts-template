<template>
  <div>
    <vxe-modal v-model="showPopup" v-bind="modalOptions">
      <template #default>
        <vxe-form v-bind="formOptions" v-on="formEvents"></vxe-form>
        <div>
          <vxe-table v-bind="tableOptions">
            <vxe-column field="noticeCode" title="入库单编号"></vxe-column>
            <vxe-column field="noticeName" title="通知单名称"></vxe-column>
            <vxe-column field="poCode" title="采购订单编号"></vxe-column>
            <vxe-column field="vendorName" title=" 供应商名称"></vxe-column>
            <vxe-column field="contact" title=" 联系人 "></vxe-column>
            <vxe-column field="tel" title=" 联系方式 "></vxe-column>
            <vxe-column field="arrivalDate" title=" 到货日期 "></vxe-column>
          </vxe-table>
          <vxe-pager
            v-model:current-page="pageVO.currentPage"
            v-model:page-size="pageVO.pageSize"
            :total="pageVO.total"
            @page-change="pageChangeEvent"
          >
          </vxe-pager>
        </div>
        <div style="text-align: center; margin-top: 16px">
          <vxe-button status="primary" content="确定" />
          <vxe-button content="取消" />
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type {
  VxeModalProps,
  VxeFormProps,
  VxeFormItemPropTypes,
  VxeFormListeners,
  VxePagerEvents,
} from 'vxe-pc-ui';

const showPopup = ref(true);
const modalOptions = reactive<VxeModalProps>({
  title: '到货通知单选择',
  width: 800,
  height: 500,
  escClosable: true,
  resize: true,
  showMaximize: true,
});

const statusItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '草稿', value: '0' },
    { label: '已确认', value: '1' },
    { label: '审批中', value: '2' },
    { label: '已审批', value: '3' },
    { label: '已完成', value: '4' },
  ],
});
const formOptions = reactive<VxeFormProps<daoHuoNoticeVO>>({
  data: {
    // 到货日期
    arrivalDate: '',
    // 练习人
    contact: '',
    // 通知单编号
    noticeCode: '',
    // 通知单名称
    noticeName: '',
    // 采购订单编号
    poCode: '',
    // 备注
    remark: '',
    // 状态
    status: '',
    // 联系方式
    tel: '',
    // 供应商名称
    vendorName: '',
  },
  // rules: {

  // },
  items: [
    {
      field: 'noticeCode',
      title: '通知单编号',
      span: 8,
      itemRender: { name: 'VxeInput' },
    },
    {
      field: 'noticeName',
      title: '通知单名称',
      span: 8,
      itemRender: { name: 'VxeInput' },
    },
    {
      field: 'poCode',
      title: '采购订单编号',
      span: 8,
      itemRender: { name: 'VxeInput' },
    },
    {
      field: 'vendorName',
      title: '供应商名称',
      span: 8,
      itemRender: { name: 'VxeInput' },
    },
    {
      field: 'arrivalDate',
      title: '到货日期',
      span: 8,
      itemRender: { name: 'VxeDatePicker' },
    },
    {
      field: 'status',
      title: '单据状态',
      span: 8,
      itemRender: statusItemRender,
    },

    {
      align: 'left',
      span: 24,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '搜索', status: 'primary' },
          { type: 'reset', content: '重置' },
        ],
      },
    },
  ],
});

const formEvents: VxeFormListeners<daoHuoNoticeVO> = {
  submit() {
    console.log('保存成功', JSON.stringify(formOptions.data));
  },
  reset() {
    console.log('重置事件');
  },
};
const tableOptions = ref<daoHuoNoticeVO[]>([]);

/* -----分页相关变量--------------------------------- */
const pageVO = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
});

const pageChangeEvent: VxePagerEvents.PageChange = () => {
  console.log(`分页事件：第 ${pageVO.currentPage} 页，每页  ${pageVO.pageSize} 条`);
};
/** 到货通知单的 数据模型 */
export interface daoHuoNoticeVO {
  arrivalDate?: string;
  attr1?: string;
  attr2?: string;
  attr3?: number;
  attr4?: number;
  contact?: string;
  createBy?: string;
  createTime?: string;
  noticeCode?: string;
  noticeId?: number;
  noticeName?: string;
  params?: Params;
  poCode?: string;
  remark?: string;
  searchValue?: string;
  status?: string;
  tel?: string;
  updateBy?: string;
  updateTime?: string;
  vendorCode?: string;
  vendorId?: number;
  vendorName?: string;
  vendorNick?: string;
}
export interface Params {}
</script>
