const functionOneToHundred = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

const app = new Vue({
    el: "#firstApp",
    data: {
        message: "Hello World!",
        image: "./assets/logo.png",
        productNumber : 10,
        oneTohundred: functionOneToHundred(),
        number : 0,
    },
    methods: {
        resetNumber : function(){
            this.number = 0;
        }
    }
})