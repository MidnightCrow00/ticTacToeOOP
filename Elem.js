export default class Elem {
  #ertek = "";
  #szuloElem;
  #divElem;
  #id = 0;
  constructor(id, ertek, szuloElem) {
    this.#id = id;
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();
    /* eseménykezelő a divre */
    this.#divElem = this.#szuloElem.children("div:last-child");
    //console.log(this.#divElem)
    this.#divElem.on("click", () => {
      /* this - példány? */
      console.log(this.#id);
      
      if(this.#ertek===" "){
        this.#trigger("lepes")
      }
    });
  }

  #megjelenit() {
    let txt = `<div><p>${this.#ertek}</p></div>`;
    this.#szuloElem.append(txt);
  }
  /*az osztály ugy tud informáciot adni magarol egy adott esemény bekövetkeztekor, hogy létrehozunl egy saját esemenyt amire a masik osztaly fel tud iratkozni*/
  #trigger(esemenynev) {
    //létrehozunk egy uj esemenyt es at adunk informaciokat az objetkumrol{detail:}
    const e = new CustomEvent(esemenynev, { detail: this.#id });
    window.dispatchEvent(e);
  }
}
