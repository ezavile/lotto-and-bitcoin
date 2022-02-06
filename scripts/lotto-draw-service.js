import ApiService from "./api-service.js";

export default class LottoDrawService {
  static getNextLottoDraw(dateValue) {
    const WEDNESDAY = 3;
    const SATURDAY = 6;
    const HOUR_8_PM = 20;

    const date = new Date(dateValue);
    const currentHour = date.getHours();

    if (currentHour >= HOUR_8_PM) {
      date.setDate(date.getDate() + 1);
    }

    date.setHours(HOUR_8_PM, 0, 0, 0);

    const day = date.getDay();

    const CLOSE_DAY = day <= WEDNESDAY ? WEDNESDAY : SATURDAY;
    const DIFF_DAY = CLOSE_DAY - day;

    date.setDate(date.getDate() + DIFF_DAY);

    return date;
  }

  static async getBitcoinValue(date) {
    const EUR_AMOUNT = 100;
    const latest = await ApiService.getLatest();
    const historical = await ApiService.getHistorical(date);

    if (!historical) return EUR_AMOUNT;

    return (latest / historical) * EUR_AMOUNT;
  }
}
