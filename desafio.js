// Classe genérica para representar um herói de aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    // Define o ataque com base no tipo do herói
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou de maneira desconhecida";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}!`);
  }
}

// Criando instâncias de heróis
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shifu", 65, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

// Executando ataques
heroi1.atacar(); // O guerreiro atacou usando usou espada!
heroi2.atacar(); // O mago atacou usando usou magia!
heroi3.atacar(); // O monge atacou usando usou artes marciais!
heroi4.atacar(); // O ninja atacou usando usou shuriken!
