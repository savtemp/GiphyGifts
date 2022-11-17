import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  let template = "";
  let gifts = appState.gifts;
  gifts.forEach((g) => (template += g.GiftTemplate));
  setHTML("gifts", template);
}

export class GiftsController {
  constructor() {
    // console.log("hello from the gifts controller");
    this.getGifts();
    appState.on("gifts", _drawGifts);
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (error) {
      console.error("[Getting Gift]", error);
      Pop.error(error);
    }
  }

  async openGift(id) {
    try {
      await giftsService.openGift(id);
    } catch (error) {
      console.error("[Opening Gift]", error);
      Pop.error(error);
    }
  }

  async createGift() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      let form = window.event.target;
      let giftData = getFormData(form);
      await giftsService.createGift(giftData);
      Pop.toast("Created A New Gift!", "success");
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[Create Gift]", error);
      Pop.error(error);
    }
  }
}
