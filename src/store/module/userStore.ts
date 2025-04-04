export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      name: '张三',
    },
  }),
  // 计算属性
  getters: {
    /** 计算属性在使用时不要 加()调用；正确使用 实例.getSomeData */
    getSomeData() {
      return 'xxx';
    },
  },
  // 全局需要使用的方法
  actions: {},
});
