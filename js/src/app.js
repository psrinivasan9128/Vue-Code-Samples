//var growler = new Vue({
//    el: '#growler',
//    data: {
//        beers: [
//            { name: 'Ahool Ale', abv: 5.4 },
//            { name: 'Sigbin Stout', abv: 8.1 }
//        ]
//    }
//});

var myFirstVue = new Vue({
    el: '#myFirstView',
    data: {
        ViewName: 'hope this works',
        query:''
    },
    methods: {
        searchMe: function (t,e) {
            alert(t);
        }
    }
});