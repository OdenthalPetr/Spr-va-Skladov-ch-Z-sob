const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];
function result() {

    const produktyElement = document.getElementById("produkty")
    
    produktyElement.innerHTML = `<ul>${produkty.map(produkt => `<li>${produkt.nazev} - Cena: ${produkt.cenaZaKus} - Skladem: ${produkt.pocetNaSklade}</li>`).join('')}</ul>`;


    
}
function dear() {
    produkty.sort((a,b) => b.cenaZaKus-a.cenaZaKus);
    const produktyElement = document.getElementById("produkty")
    
    produktyElement.innerHTML = `<ul>${produkty.map(produkt => `<li>${produkt.nazev} - Cena: ${produkt.cenaZaKus} - Skladem: ${produkt.pocetNaSklade}</li>`).join('')}</ul>`;


}
let producty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
  ];
  
  function vypocetCelkoveHodnotyZasob(produkty) {
    let celkovaHodnota = 0;
  
    for (let i = 0; i < produkty.length; i++) {
      let cenaProduktu = produkty[i].cenaZaKus;
      let pocetNaSklade = produkty[i].pocetNaSklade;
      let hodnotaProduktu = cenaProduktu * pocetNaSklade;
  
      celkovaHodnota += hodnotaProduktu;
  
      console.log(`Index: ${i}, Název: ${produkty[i].nazev}, Celková hodnota: ${hodnotaProduktu}`);
    }
  
    console.log(`Celková hodnota zásob: ${celkovaHodnota}`);
  }
  
  vypocetCelkoveHodnotyZasob(produkty);
  const products = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
  ];
  function aktualizovatPocet(nazevProduktu, novyPocet) {
    for (let i = 0; i < produkty.length; i++) {
      if (produkty[i].nazev === nazevProduktu) {
        if (novyPocet >= 0) {
          produkty[i].pocetNaSklade = novyPocet;
          console.log(`Pocet kusu ${nazevProduktu} byl aktualizovan na ${novyPocet}.`);
        } else {
          console.log("Chyba: Novy pocet musi byt nezaporny.");
        }
        return; 
      }
    }
  
    console.log(`Chyba: Produkt ${nazevProduktu} nenalezen.`);
  }
  aktualizovatPocet("Tužka", 80);
  console.log(produkty);