export class Gift {
  constructor(data) {
    this.id = data.id;
    this.tag = data.tag;
    this.url =
      data.url ||
      "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
    this.opened = data.opened;
  }

  get GiftTemplate() {
    return `
    <div class="col-md-3 card elevation-2" onclick="app.giftsController.openGift('${this.id}')">
      <img class="img-fluid mt-2" src="${this.OpenTheGift}" alt="ift Image">
      <p class="text-center m-1">${this.tag}</p>
    </div>    
    `;
  }

  get OpenTheGift() {
    if (this.opened == true) {
      return this.url;
    } else {
      return "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
    }
  }
}
