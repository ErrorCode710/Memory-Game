import tanjiro from "../assets/img/characters/tanjiro.webp";
import nezuko from "../assets/img/characters/nezuko.webp";
import zenitsu from "../assets/img/characters/zenitsu.webp";
import inosuke from "../assets/img/characters/inosuke.webp";
import giyu from "../assets/img/characters/giyu.webp";
import shinobu from "../assets/img/characters/shinobu.webp";
import kyojuro from "../assets/img/characters/kyojuro.webp";
import tengen from "../assets/img/characters/tengen.webp";
import mitsuri from "../assets/img/characters/mitsuri.webp";
import muichiro from "../assets/img/characters/muichiro.webp";
import sanemi from "../assets/img/characters/sanemi.webp";
import muzan from "../assets/img/characters/muzan1.webp";

class Character {
  constructor(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}

export const characters = [
  new Character(1, "Tanjiro Kamado", tanjiro),
  new Character(2, "Nezuko Kamado", nezuko),
  new Character(3, "Zenitsu Agatsuma", zenitsu),
  new Character(4, "Inosuke Hashibira", inosuke),
  new Character(5, "Giyu Tomioka", giyu),
  new Character(6, "Shinobu Kocho", shinobu),
  new Character(7, "Kyojuro Rengoku", kyojuro),
  new Character(8, "Tengen Uzui", tengen),
  new Character(9, "Mitsuri Kanroji", mitsuri),
  new Character(10, "Muichiro Tokito", muichiro),
  new Character(11, "Sanemi Shinazugawa", sanemi),
  new Character(12, "Muzan Kibutsuji", muzan),
];
