function comecarjogo() {
  window.location.href = "jogar-1.html";
}

function trocarArena01() {
  document.getElementById("imgArena").src = "imagens/InGame/arenaAzul.png";
}

function trocarArena02() {
  document.getElementById("imgArena").src = "imagens/InGame/arenaVerde.png";
}

function trocarArena03() {
  document.getElementById("imgArena").src = "imagens/InGame/arenaQueimando.png";
}

function trocarArena04() {
  document.getElementById("imgArena").src = "imagens/InGame/arenaPadrao.png";
}

//DB cartas

//Android

var ironGear = {
  id: "IronGear",
  classe: "Androides",
  atk: 21,
  def: 9,
  img: function() {
    return `imagens/Cartas/${this.classe}/${this.id}.png`;
  }
};

var protectorXII = {
  id: "ProtectorXII",
  classe: "Androides",
  atk: 10,
  def: 23,
  img: function() {
    return `imagens/Cartas/${this.classe}/${this.id}.png`;
  }
};

var viper = {
  id: "Viper",
  classe: "Androides",
  atk: 15,
  def: 8,
  img: function() {
    return `imagens/Cartas/${this.classe}/${this.id}.png`;
  }
};

var aracnodroid = {
  id: "IronGear",
  //id: "aracnodroid",
  classe: "Androides",
  atk: 17,
  def: 12,
  img: function() {
    return `imagens/Cartas/${this.classe}/${this.id}.png`;
  }
};

var oneSword = {
  id: "Viper",
  //id: "oneSword",
  classe: "Androides",
  atk: 24,
  def: 5,
  img: function() {
    return `imagens/Cartas/${this.classe}/${this.id}.png`;
  }
};

var android04 = {
  id: "android04",
  classe: "Androides",
  atk: 8,
  def: 25,
  img: "url"
};

var drakar = {
  id: "drakar",
  classe: "Androides",
  atk: 16,
  def: 13,
  img: "url"
};

var skank = {
  id: "skank",
  classe: "Androides",
  atk: 17,
  def: 15,
  img: "url"
};

var tribuz = {
  id: "tribuz",
  classe: "Androides",
  atk: 13,
  def: 16,
  img: "url"
};

var trazix = {
  id: "trazix",
  classe: "Androides",
  atk: 10,
  def: 16,
  img: "url"
};

var t5 = {
  id: "t5",
  classe: "Androides",
  atk: 1,
  def: 35,
  img: "url"
};

var banboub = {
  id: "banboub",
  classe: "Androides",
  atk: 15,
  def: 15,
  img: "url"
};

var whithez = {
  id: "whithez",
  classe: "Androides",
  atk: 16,
  def: 14,
  img: "url"
};

var androidCanon = {
  id: "androidCanon",
  classe: "Androides",
  atk: 18,
  def: 12,
  img: "url"
};

var t30 = {
  id: "t30",
  classe: "Androides",
  atk: 17,
  def: 13,
  img: "url"
};

var android23 = {
  id: "android23",
  classe: "Androides",
  atk: 22,
  def: 7,
  img: "url"
};

//Mecha

var titanKiller = {
  id: "titanKiller",
  classe: "Mecha",
  atk: 8,
  def: 24,
  img: "url"
};

var yellowBeast = {
  id: "yellowBeast",
  classe: "Mecha",
  atk: 17,
  def: 10,
  img: "url"
};

var rhinoplasma = {
  id: "rhinoplasma",
  classe: "Mecha",
  atk: 15,
  def: 12,
  img: "url"
};

var killerCrab = {
  id: "killerCrab",
  classe: "Mecha",
  atk: 14,
  def: 10,
  img: "url"
};

var avalanche = {
  id: "avalanche",
  classe: "Mecha",
  atk: 16,
  def: 10,
  img: "url"
};

var atlas = {
  id: "atlas",
  classe: "Mecha",
  atk: 10,
  def: 16,
  img: "url"
};

var raptor = {
  id: "raptor",
  classe: "Mecha",
  atk: 19,
  def: 8,
  img: "url"
};

var spykes = {
  id: "spykes",
  classe: "Mecha",
  atk: 12,
  def: 12,
  img: "url"
};

var littleMecha = {
  id: "littleMecha",
  classe: "Mecha",
  atk: 22,
  def: 7,
  img: "url"
};

var smasherIV = {
  id: "smasherIV",
  classe: "Mecha",
  atk: 12,
  def: 15,
  img: "url"
};

var colossus = {
  id: "colossus",
  classe: "Mecha",
  atk: 15,
  def: 13,
  img: "url"
};

var pigeonic = {
  id: "pigeonic",
  classe: "Mecha",
  atk: 16,
  def: 14,
  img: "url"
};

var gigaton = {
  id: "gigaton",
  classe: "Mecha",
  atk: 18,
  def: 10,
  img: "url"
};

var golemXVI = {
  id: "golemXVI",
  classe: "Mecha",
  atk: 9,
  def: 22,
  img: "url"
};

var cyclopes = {
  id: "cyclopes",
  classe: "Mecha",
  atk: 16,
  def: 13,
  img: "url"
};

var psypher = {
  id: "psypher",
  classe: "Mecha",
  atk: 20,
  def: 10,
  img: "url"
};

var decatron = {
  id: "decatron",
  classe: "Mecha",
  atk: 19,
  def: 10,
  img: "url"
};

//Cartas

var cartas = [
  [
    ironGear,
    protectorXII,
    viper,
    aracnodroid,
    oneSword,
    android04,
    drakar,
    skank,
    tribuz,
    trazix,
    t5,
    banboub,
    whithez,
    androidCanon,
    t30,
    android23
  ],
  [
    titanKiller,
    yellowBeast,
    rhinoplasma,
    killerCrab,
    avalanche,
    atlas,
    raptor,
    spykes,
    littleMecha,
    smasherIV,
    colossus,
    pigeonic,
    gigaton,
    golemXVI,
    cyclopes,
    psypher,
    decatron
  ]
];

localStorage.setItem("cartas", JSON.stringify(cartas));

////

let geraCartasMao = () => {
  let concatCartas = "";

  for (var i = 0; i < 5; i++) {
    let carta = cartas[0][i];

    concatCartas += `
<div class="col-2">
<img src="${carta.img()}" class="imgCard-p1">
<div class="def">${carta.def}</div>
<div class="atk">${carta.atk}</div>
</div>
`;

    $("#cartas-p1-mao").html(concatCartas);
    console.log(carta.img());
  }

  $("body").on("click", "div#cartas-p1-mao img.imgCard-p1", function() {
    $("img.imgCard-p1").removeClass("active");
    $(this).addClass("active");

    localStorage.setItem("tempcard", JSON.stringify([]));
    let tempCard = JSON.parse(localStorage.getItem("tempcard"));

    loop: for (let i = 0; i < cartas.length; i++) {
      for (let j = 0; j < cartas[i].length; j++) {
        if (cartas[i][j].img() === $(this).attr("src")) {
          console.log(cartas[i][j].img());
          tempCard.push({
            id: cartas[i][j].id,
            classe: cartas[i][j].classe,
            atk: cartas[i][j].atk,
            def: cartas[i][j].def,
            img: cartas[i][j].img()
          });
          break loop;
        }
      }
    }

    localStorage.setItem("tempcard", JSON.stringify(tempCard));

    $("div.slot-arena-p1").addClass("destaque");
  });
};

$("window").on("click", "div.slot-arena-p1.destaque", () => {
  let tempCard = JSON.parse(localStorage.getItem("tempcard"));
  console.log($(this));
  /*$(this).parent().html(`
    <img src="${tempCard.img}">
<div class="def">${tempCard.def}</div>
<div class="atk">${tempCard.atk}</div>
</div>
`);*/
});

let geraCartasArena = () => {};

$(document).ready(function() {
  if (localStorage.getItem("cartasp1") === null) {
    localStorage.setItem("cartasp1", JSON.stringify([]));
  }

  if (localStorage.getItem("tempcard") === null) {
    localStorage.setItem("tempcard", JSON.stringify([]));
  }

  geraCartasMao();
});

///

////

// Resgatar valores do localStorage:
// JSON.parse(localStorage.getItem("cartas"))[0][1].
