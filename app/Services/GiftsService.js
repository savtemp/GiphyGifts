import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { api } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    let res = await api.get(`/gifts`);
    // console.log("getting gift data", res.data);
    appState.gifts = res.data.map((gift) => new Gift(gift));
    console.log("getting all the gifts", appState.gifts);
  }

  async openGift(id) {
    let gift = appState.gifts.find((g) => g.id == id);
    console.log("getting gift with Id to open", gift);
    if (!gift) {
      throw new Error("Bad Gift Id");
    } else {
      gift.opened = true;
    }
    // gift.opened = !gift.opened;
    let giftIndex = appState.gifts.indexOf(gift);

    let res = await api.put(`/gifts/${id}`, gift);
    let openedGift = new Gift(res.data);

    appState.gifts.splice(giftIndex, 1, openedGift);
    appState.gifts = appState.gifts;
  }

  async createGift(giftData) {
    let res = await api.post(`/gifts`, giftData);
    let gift = new Gift(res.data);
    console.log("Creating new gift", gift);
    appState.gifts = [...appState.gifts, gift];
  }
}

export const giftsService = new GiftsService();
