new Vue({
  el: '#app',
  data: {
    greeting: '안녕하시오!',
    user: 'UBB',
    city: '구로'
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === '안녕하시오!' ?
       '반갑소.' :
       '안녕하시오!';
    }
  }
});
