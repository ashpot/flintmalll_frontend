export const formatPrice = (amount, decimals = 2) => {
      if (!amount) return "0.00";
      return Number(amount).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };