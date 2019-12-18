import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        rates: {},
        base: null,
        date: null,
        amount:0,
        selectedCurrency: null,
        direction: "fromEuros",
        convertedAmount:null
    },
    mounted() {
      this.getRates()
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      },
    },
    computed:  {
      conversion: function(amount){
        if(this.direction === "fromEuros"){
        return (this.selectedCurrency * this.amount).toFixed(2);
        } else {
        return (this.amount / this.selectedCurrency).toFixed(2);
        }
      }
    }
  });
});

        //.then(data => this.dogImgURL = data.message);
