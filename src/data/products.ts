// Product images
import jackSkellington from '@/assets/jack-skellington.png';
import sally from '@/assets/sally.png';
import jackSallyPair from '@/assets/jack-sally-pair.png';
import zero from '@/assets/zero.png';
import coraline from '@/assets/coraline.png';
import mafalda from '@/assets/mafalda.png';
import jackCojin from '@/assets/jack-cojin.png';
import emilyNoviaCadaver from '@/assets/emily-novia-cadaver.png';
import victorNoviaCadaver from '@/assets/victor-novia-cadaver.png';
import emilyVictorPair from '@/assets/emily-victor-pair.png';
import rick from '@/assets/rick.png';
import snoopyAstronauta from '@/assets/snoopy-astronauta.png';
import snoopyAviador from '@/assets/snoopy-aviador.png';
import snoopyPiloto from '@/assets/snoopy-piloto.png';

export interface Product {
  id: number;
  name: string;
  price: string;
  cat: string;
  img: string;
  images?: string[];
  desc: string;
  longDesc: string;
}

export const products: Product[] = [
  // El Extraño Mundo de Jack - Precios +50%
  { 
    id: 101, 
    name: "Jack Skellington", 
    price: "127.500", 
    cat: "Nightmare", 
    img: jackSkellington,
    images: [jackSkellington],
    desc: "El Rey Calabaza de Halloween Town, peluche artesanal hipoalergénico hecho en Colombia.",
    longDesc: "Lleva a casa al icónico Jack Skellington, el Rey Calabaza de 'El Extraño Mundo de Jack' de Tim Burton. Este peluche artesanal colombiano de 40cm está confeccionado con materiales premium hipoalergénicos, perfecto para niños y coleccionistas. Cada detalle de su traje a rayas y su característica sonrisa esquelética está cuidadosamente bordado a mano. Ideal para fans del cine de animación stop-motion, decoración gótica y amantes de Halloween. Envío gratis a toda Colombia."
  },
  { 
    id: 102, 
    name: "Sally", 
    price: "127.500", 
    cat: "Nightmare", 
    img: sally,
    images: [sally],
    desc: "La dulce creación del Dr. Finkelstein, muñeca de trapo artesanal con costuras decorativas.",
    longDesc: "Sally, la encantadora muñeca de trapo de 'El Extraño Mundo de Jack', cobra vida en este peluche artesanal colombiano. Con sus distintivas costuras decorativas y su cabello de hilo rojo, esta pieza de 40cm captura toda la dulzura y valentía del personaje de Tim Burton. Fabricada con materiales hipoalergénicos certificados y relleno antialérgico. Perfecta para coleccionistas de merchandising de Pesadilla Antes de Navidad, regalos únicos y decoración temática. Incluye envío gratis nacional."
  },
  { 
    id: 103, 
    name: "Jack & Sally", 
    price: "255.000", 
    cat: "Parejas", 
    img: jackSallyPair,
    images: [jackSallyPair],
    desc: "Set exclusivo de la pareja más romántica del cine de Tim Burton. Regalo perfecto.",
    longDesc: "El set definitivo para fans de Tim Burton: Jack Skellington y Sally juntos en un pack especial con descuento. Esta pareja icónica de 'El Extraño Mundo de Jack' viene presentada en empaque de regalo premium. Ambos peluches artesanales de 40cm están hechos con materiales hipoalergénicos colombianos de primera calidad. Ideal para aniversarios, San Valentín, bodas temáticas o coleccionistas de Nightmare Before Christmas. El regalo perfecto que une el amor eterno con el arte artesanal. Envío gratis a todo Colombia."
  },
  { 
    id: 104, 
    name: "Zero", 
    price: "67.500", 
    cat: "Nightmare", 
    img: zero,
    images: [zero],
    desc: "El adorable perro fantasma con nariz de calabaza brillante. Compañero fiel de Jack.",
    longDesc: "Zero, el fantasmal y adorable perro de Jack Skellington, ahora en versión peluche artesanal. Este tierno personaje de 25cm destaca por su nariz en forma de calabaza y su cuerpo etéreo de tela suave hipoalergénica. Perfecto para complementar tu colección de El Extraño Mundo de Jack o como regalo para niños amantes de las mascotas animadas. Hecho a mano en Colombia con los más altos estándares de calidad y seguridad infantil. Envío gratis incluido."
  },
  { 
    id: 105, 
    name: "Cojín Jack", 
    price: "82.500", 
    cat: "Decoración", 
    img: jackCojin,
    images: [jackCojin],
    desc: "Cojín decorativo con la icónica sonrisa de Jack. Perfecto para tu sala o habitación.",
    longDesc: "Transforma tu espacio con este cojín decorativo de Jack Skellington. La característica sonrisa del Rey Calabaza adorna este cojín de 45x45cm, perfecto para sofás, camas o sillas. Confeccionado en Colombia con telas hipoalergénicas de alta durabilidad, cierre invisible y relleno premium. Ideal para decoración gótica, habitaciones temáticas de Halloween o fans del universo Tim Burton. Combina con nuestra colección de peluches para crear el ambiente perfecto. Envío gratis a toda Colombia."
  },

  // Novia Cadáver - Precios +50%
  { 
    id: 201, 
    name: "Emily (Novia Cadáver)", 
    price: "165.000", 
    cat: "Corpse Bride", 
    img: emilyNoviaCadaver,
    images: [emilyNoviaCadaver],
    desc: "La novia fantasma más elegante del cine de Tim Burton. Detalles en encaje premium.",
    longDesc: "Emily, la Novia Cadáver de la película homónima de Tim Burton, revive en este exquisito peluche artesanal. Con su vestido de novia en encaje azul deteriorado y su velo etéreo, esta pieza de 45cm es una obra maestra del arte textil colombiano. Cada detalle, desde sus ojos expresivos hasta las flores marchitas de su ramo, está meticulosamente elaborado con materiales hipoalergénicos premium. Ideal para coleccionistas de Corpse Bride, amantes del gótico romántico y fans del stop-motion. Envío gratis nacional."
  },
  { 
    id: 202, 
    name: "Victor Van Dort", 
    price: "165.000", 
    cat: "Corpse Bride", 
    img: victorNoviaCadaver,
    images: [victorNoviaCadaver],
    desc: "El caballero de corazón noble de La Novia Cadáver. Elegancia victoriana artesanal.",
    longDesc: "Victor Van Dort, el tímido pero noble protagonista de 'La Novia Cadáver', cobra vida en este peluche artesanal de 45cm. Su traje victoriano de boda está recreado con increíble fidelidad usando telas premium hipoalergénicas. Cada costura refleja la elegancia del personaje que cautivó tanto a Emily como a Victoria. Pieza esencial para coleccionistas de Tim Burton, amantes del cine de animación y fans del romance gótico. Fabricado en Colombia con amor artesanal. Envío gratis incluido."
  },
  { 
    id: 203, 
    name: "Emily & Victor", 
    price: "330.000", 
    cat: "Parejas", 
    img: emilyVictorPair,
    images: [emilyVictorPair],
    desc: "Colección premium de la pareja gótica más amada. Arte textil de lujo colombiano.",
    longDesc: "El set más exclusivo de nuestra colección: Emily y Victor juntos en un pack de regalo premium. Esta pareja icónica de 'La Novia Cadáver' representa el amor que trasciende la muerte. Ambos peluches de 45cm están elaborados con los materiales más finos: encajes importados, telas hipoalergénicas y bordados detallados. Presentación en caja de regalo especial. Perfecto para bodas góticas, aniversarios, coleccionistas de Tim Burton o decoración temática de alto nivel. Envío gratis a toda Colombia."
  },

  // Snoopy Variaciones - Precios +50%
  { 
    id: 301, 
    name: "Snoopy Aviador", 
    price: "82.500", 
    cat: "Snoopy", 
    img: snoopyAviador,
    images: [snoopyAviador],
    desc: "Snoopy como el As de la Primera Guerra Mundial. Bufanda y gafas de aviador incluidas.",
    longDesc: "El legendario As de la Primera Guerra Mundial aterriza en tu hogar. Este Snoopy Aviador de 35cm recrea al intrépido beagle de Peanuts en su Sopwith Camel imaginario, listo para enfrentar al Barón Rojo. Con su casco de piloto, bufanda roja ondeante y gafas de aviador, es el regalo perfecto para fans de Charles Schulz y coleccionistas de Snoopy en Colombia. Materiales 100% hipoalergénicos y seguros para todas las edades. Envío gratis nacional."
  },
  { 
    id: 302, 
    name: "Snoopy Astronauta", 
    price: "82.500", 
    cat: "Snoopy", 
    img: snoopyAstronauta,
    images: [snoopyAstronauta],
    desc: "Snoopy explorador espacial con traje de astronauta NASA. Edición coleccionista.",
    longDesc: "Houston, tenemos un beagle adorable. Este Snoopy Astronauta de 35cm celebra la histórica colaboración entre Peanuts y la NASA. Con su traje espacial blanco detallado y casco de astronauta, este peluche artesanal colombiano es perfecto para pequeños soñadores y coleccionistas de merchandise espacial. Hecho con materiales hipoalergénicos certificados, ideal para niños y adultos fans de la exploración espacial y los clásicos de Charles Schulz. Envío gratis a toda Colombia."
  },
  { 
    id: 303, 
    name: "Snoopy Piloto de Carreras", 
    price: "82.500", 
    cat: "Snoopy", 
    img: snoopyPiloto,
    images: [snoopyPiloto],
    desc: "Snoopy velocista con casco de carreras. Para fans del automovilismo y Peanuts.",
    longDesc: "La velocidad y la ternura se unen en este Snoopy Piloto de Carreras de 35cm. Con su casco de competición y mono de piloto, este beagle está listo para cruzar la meta. Perfecto para fans del automovilismo, coleccionistas de Peanuts y niños que sueñan con la velocidad. Elaborado artesanalmente en Colombia con materiales hipoalergénicos de primera calidad. Un regalo único que combina el mundo de las carreras con el encanto atemporal de Charles Schulz. Envío gratis incluido."
  },

  // Otros personajes - Precios +50%
  { 
    id: 401, 
    name: "Coraline Jones", 
    price: "127.500", 
    cat: "Coraline", 
    img: coraline,
    images: [coraline],
    desc: "La valiente aventurera con su icónico impermeable amarillo. Del mundo de Laika Studios.",
    longDesc: "Coraline Jones, la intrépida heroína de la película de Laika Studios, ahora en versión peluche artesanal colombiano. Con su distintivo impermeable amarillo, cabello azul y expresión decidida, esta muñeca de 40cm captura toda la valentía del personaje. Perfecta para fans del stop-motion, coleccionistas de merchandising de Coraline y amantes del cine de animación independiente. Materiales 100% hipoalergénicos y seguros. El complemento ideal para tu colección de Henry Selick. Envío gratis a toda Colombia."
  },
  { 
    id: 402, 
    name: "Mafalda", 
    price: "97.500", 
    cat: "Clásicos", 
    img: mafalda,
    images: [mafalda],
    desc: "La niña argentina más querida de Latinoamérica. Filosofía y ternura en un peluche.",
    longDesc: "Mafalda, el icónico personaje de Quino que conquistó Latinoamérica, ahora en peluche artesanal. Esta pequeña filósofa de 35cm viene con su característico vestido rojo y su expresión pensativa. Perfecta para fans del cómic argentino, coleccionistas de personajes latinoamericanos y quienes buscan un regalo con significado cultural. Hecho en Colombia con materiales hipoalergénicos, uniendo el talento artesanal colombiano con el legado cultural argentino. Envío gratis nacional."
  },
  { 
    id: 501, 
    name: "Rick Sánchez", 
    price: "112.500", 
    cat: "Adult Swim", 
    img: rick,
    images: [rick],
    desc: "El científico más loco del multiverso. Para fans adultos de Rick and Morty.",
    longDesc: "Wubba lubba dub dub! Rick Sánchez, el genio científico más irreverente del multiverso, llega en versión peluche artesanal. Con su bata de laboratorio, cabello despeinado y expresión característica, este Rick de 40cm es imprescindible para fans de Rick and Morty. Diseñado para coleccionistas adultos del show de Adult Swim. Materiales hipoalergénicos de primera calidad, elaborado en Colombia. El regalo perfecto para quienes aprecian el humor inteligente y la ciencia ficción absurda. Envío gratis incluido."
  },
];