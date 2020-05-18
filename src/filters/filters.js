import currency from '../assets/js/currency.min';

export default {
  filters: {
    convertCurrency: (value) => {
      value = currency(value, { decimal: ',', separator: '.' }).format();
      return 'R$ ' + value;
    },

    limitDescriptionCharacters: (description) => {
      if(description.length > 125){
        return description.slice(0, 125) + '...';
      }
      return description;
    },

    formatItemQuantity: (qty) => {
      if(qty > 9) return qty;

      return '0' + qty;
    }
  }
}