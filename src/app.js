import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        rates: {},
        base: null,
        date: null,
        amount:0,
        selectedCurrency: 0,
        direction: "fromEuros",

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
          let step1 = (this.selectedCurrency * this.amount).toFixed(2);
          return this.amount + " Euros = " + step1;
        } else {
        let step1 = (this.amount / this.selectedCurrency).toFixed(2);
           return this.amount + " = " + step1 + " Euros";
        }
      }
    }
  });
});

        //.then(data => this.dogImgURL = data.message);
