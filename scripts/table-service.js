import { formatDate, formatCurrency } from "./utils.js";

const tableRef = document.querySelector("#tableRef");
const tableBodyRef = tableRef.querySelector("tbody");

export default class TableService {
  static insertRow({ date, amount }) {
    const rowRef = tableBodyRef.insertRow();
    rowRef.className = "lb_u-colorFlash";

    const firstCell = rowRef.insertCell(0);
    const secondCell = rowRef.insertCell(1);

    firstCell.innerHTML = formatDate(date);
    secondCell.innerHTML = formatCurrency(amount);
  }
}
