import Elem from "./Elem.js";

export default class JatekTer {
  #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  #aktElem = "X";
  constructor() {
    this.#megjelenit();
    $(window).on("lepes",(event)=>{
        console.log(event.detail)
        let id = event.detail
        this.#beallit(id)
    })
  }

  #beallit(id){
    this.#lista[id]=this.#aktElem
    this.#aktElem==="X"?this.#aktElem="O":this.#aktElem="X"
    this.#megjelenit()
  }
  #megjelenit() {
    let szuloElem=$(".jatekter")
    szuloElem.empty()
    /* kirak 9 db elemet a jatéktérre */
    this.#lista.forEach((ertek, index)=>{
      new Elem(index, ertek,szuloElem)
    });
  }
  #ell(){
    //szorgalmi
  }
}
