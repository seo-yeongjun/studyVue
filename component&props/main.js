Vue.component('whether-day-div', {
    props: ['day', 'weather', 'temperature'],
    template: '<div><h1>{{day}}</h1><p>{{weather}}</p><p>{{temperature}}</p></div>'
})

Vue.component('whether-month-div', {
    props: ['month'],
    template: `
        <div>
            <h3>{{month}}</h3>
            <div>
             <whether-day-div v-for="day in days" :day="day.day" :weather="day.weather" :temperature="day.temperature"></whether-day-div>
            </div>
        </div>
        `,
    data: function () {
        return {
            days: [
                { day: 'Monday', weather: 'Sunny', temperature: 20 },
                { day: 'Tuesday', weather: 'Rainy', temperature: 10 },
                { day: 'Wednesday', weather: 'Cloudy', temperature: 15 },
                { day: 'Thursday', weather: 'Sunny', temperature: 25 },
                { day: 'Friday', weather: 'Rainy', temperature: 10 },
                { day: 'Saturday', weather: 'Sunny', temperature: 22 },
                { day: 'Sunday', weather: 'Cloudy', temperature: 18 },
            ]
        }
    },
})

const app = new Vue({
    el: "#componentAndPropsApp",
    data: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        monthsIndex: 0,
    },
    methods: {
        monthPlus : function(){
            this.monthsIndex = (this.monthsIndex + 1) % this.months.length;
        },
        monthMinus : function(){
            this.monthsIndex = (this.monthsIndex - 1 + this.months.length) % this.months.length;
        }
    }
});