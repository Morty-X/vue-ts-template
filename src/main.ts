import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { pinia } from './store';
// import VxeUIAll from 'vxe-pc-ui';
// import 'vxe-pc-ui/lib/style.css';
// import VxeUITable from 'vxe-table';
// import 'vxe-table/lib/style.css';

/* -------------------------------------------------------------------------- */
// ...
import {
  VxeUI,
  VxeAlert,
  VxeAnchor,
  VxeAnchorLink,
  VxeAvatar,
  VxeBadge,
  VxeBreadcrumb,
  VxeBreadcrumbItem,
  VxeButton,
  VxeButtonGroup,
  VxeCalendar,
  VxeCard,
  VxeCarousel,
  VxeCarouselItem,
  VxeCheckbox,
  VxeCheckboxGroup,
  VxeCol,
  VxeCollapse,
  VxeCollapsePane,
  VxeColorPicker,
  VxeCountdown,
  VxeDatePicker,
  VxeDrawer,
  VxeEmpty,
  VxeForm,
  VxeFormDesign,
  VxeFormGather,
  VxeFormGroup,
  VxeFormItem,
  VxeFormView,
  VxeIcon,
  VxeIconPicker,
  VxeImage,
  VxeImageGroup,
  VxeImagePreview,
  VxeInput,
  VxeLayoutAside,
  VxeLayoutBody,
  VxeLayoutContainer,
  VxeLayoutFooter,
  VxeLayoutHeader,
  VxeLink,
  VxeListDesign,
  VxeListView,
  VxeList,
  VxeLoading,
  VxeMenu,
  VxeModal,
  VxeNoticeBar,
  VxeNumberInput,
  VxeOptgroup,
  VxeOption,
  VxePager,
  VxePasswordInput,
  VxePrintPageBreak,
  VxePrint,
  VxePulldown,
  VxeRadio,
  VxeRadioButton,
  VxeRadioGroup,
  VxeRate,
  VxeResult,
  VxeRow,
  VxeSelect,
  VxeSlider,
  VxeSteps,
  VxeSwitch,
  VxeTabPane,
  VxeTableSelect,
  VxeTabs,
  VxeTag,
  VxeTextEllipsis,
  VxeText,
  VxeTextarea,
  VxeTip,
  VxeTooltip,
  VxeTree,
  VxeTreeSelect,
  VxeUpload,
  VxeWatermark,
} from 'vxe-pc-ui';

import { VxeTable, VxeColumn, VxeColgroup, VxeGrid, VxeToolbar } from 'vxe-table';

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss';
import 'vxe-pc-ui/styles/cssvar.scss';

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN';

VxeUI.setI18n('zh-CN', zhCN);
VxeUI.setLanguage('zh-CN');

function lazyVxeUI(app: any) {
  app.use(VxeAlert);
  app.use(VxeAnchor);
  app.use(VxeAnchorLink);
  app.use(VxeAvatar);
  app.use(VxeBadge);
  app.use(VxeBreadcrumb);
  app.use(VxeBreadcrumbItem);
  app.use(VxeButton);
  app.use(VxeButtonGroup);
  app.use(VxeCalendar);
  app.use(VxeCard);
  app.use(VxeCarousel);
  app.use(VxeCarouselItem);
  app.use(VxeCheckbox);
  app.use(VxeCheckboxGroup);
  app.use(VxeCol);
  app.use(VxeCollapse);
  app.use(VxeCollapsePane);
  app.use(VxeColorPicker);
  app.use(VxeCountdown);
  app.use(VxeDatePicker);
  app.use(VxeDrawer);
  app.use(VxeEmpty);
  app.use(VxeForm);
  app.use(VxeFormDesign);
  app.use(VxeFormGather);
  app.use(VxeFormGroup);
  app.use(VxeFormItem);
  app.use(VxeFormView);
  app.use(VxeIcon);
  app.use(VxeIconPicker);
  app.use(VxeImage);
  app.use(VxeImageGroup);
  app.use(VxeImagePreview);
  app.use(VxeInput);
  app.use(VxeLayoutAside);
  app.use(VxeLayoutBody);
  app.use(VxeLayoutContainer);
  app.use(VxeLayoutFooter);
  app.use(VxeLayoutHeader);
  app.use(VxeLink);
  app.use(VxeListDesign);
  app.use(VxeListView);
  app.use(VxeList);
  app.use(VxeLoading);
  app.use(VxeMenu);
  app.use(VxeModal);
  app.use(VxeNoticeBar);
  app.use(VxeNumberInput);
  app.use(VxeOptgroup);
  app.use(VxeOption);
  app.use(VxePager);
  app.use(VxePasswordInput);
  app.use(VxePrintPageBreak);
  app.use(VxePrint);
  app.use(VxePulldown);
  app.use(VxeRadio);
  app.use(VxeRadioButton);
  app.use(VxeRadioGroup);
  app.use(VxeRate);
  app.use(VxeResult);
  app.use(VxeRow);
  app.use(VxeSelect);
  app.use(VxeSlider);
  app.use(VxeSteps);
  app.use(VxeSwitch);
  app.use(VxeTabPane);
  app.use(VxeTableSelect);
  app.use(VxeTabs);
  app.use(VxeTag);
  app.use(VxeTextEllipsis);
  app.use(VxeText);
  app.use(VxeTextarea);
  app.use(VxeTip);
  app.use(VxeTooltip);
  app.use(VxeTree);
  app.use(VxeTreeSelect);
  app.use(VxeUpload);
  app.use(VxeWatermark);
}

function lazyVxeTable(app: any) {
  app.use(VxeTable);
  app.use(VxeColumn);
  app.use(VxeColgroup);
  app.use(VxeGrid);
  app.use(VxeToolbar);
}
/* -------------------------------------------------------------------------- */
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(lazyVxeUI);
app.use(lazyVxeTable);

app.mount('#app');
