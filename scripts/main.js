import TableService from "./table-service.js";
import LottoDrawService from "./lotto-draw-service.js";

const inputRef = document.querySelector("#inputRef");
const buttonRef = document.querySelector("#buttonRef");

inputRef.value = new Date().toISOString().slice(0, 16);

async function onSubmit(event) {
  event.preventDefault();

  const isValid = inputRef.checkValidity();
  if (!isValid) return;

  try {
    buttonRef.disabled = true;

    const date = LottoDrawService.getNextLottoDraw(inputRef.value);
    const amount = await LottoDrawService.getBitcoinValue(date);

    buttonRef.disabled = false;

    TableService.insertRow({ date, amount });
  } catch (error) {
    alert(error.message);
  }
}

window.onSubmit = onSubmit;
