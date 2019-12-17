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
        selectedCurrencyValue: null,
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
      convertCurrency: function(amount){
        return this.selectedCurrency * this.amount;
      }
    }
  });
});

        //.then(data => this.dogImgURL = data.message);
