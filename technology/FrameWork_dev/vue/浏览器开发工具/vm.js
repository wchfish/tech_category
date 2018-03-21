var vm = new Vue({
    el: '#app',
    template: '<div class="app">{{counter}}</div>',
    data: {
        counter: 0
    },
    methods: {
        increment: function() {
            counter++;
        }
    }
});