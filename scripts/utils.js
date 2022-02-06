export function formatDate(date) {
  return date.toLocaleString("en-IE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatCurrency(amount) {
  return amount.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
  });
}
