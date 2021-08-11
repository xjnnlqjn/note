const app = new Vue({
  el: "#todoapp",
  data: {
    //  总数据
    list: ["写代码", "听音乐", "看看书"],
    //  输入的内容
    inputValue: "",
  },
  // 方法
  methods: {
    // 增加任务
    add: function () {
      this.list.push(this.inputMessage);
    },
    // 删除任务
    remove:function(index){
      this.list.splice(index,1);
    },
    clear() {
      this.list = [];
    }
  }
});

