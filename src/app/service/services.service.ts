import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  arrPosts: Post[];


  constructor() {
    this.arrPosts = [
      {
        titulo: 'El indomable Will Hunting',
        texto: 'No sabes lo que significa perder a alguien, porque sólo lo sabrás cuando ames a alguien más que a ti mismo. Dudo que te hayas atrevido a amar de ese modo. Te miro y no veo a un hombre inteligente y confiado. Veo a un chaval creído y cagado de miedo. Eres un genio, Will, eso nadie lo niega. Nadie puede comprender lo que pasa en tu interior. En cambio presumes de saberlo todo de mí porque viste un cuadro y rajaste mi vida de arriba a abajo',
        autor: 'Sean Maguire',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/el-indomable-will-hunting-los-zascas-de-robbie-williams/125895976-1-esl-ES/El-indomable-Will-Hunting-Los-zascas-de-Robbie-Williams.jpg?resize=768:*',
        fecha: new Date('1997-10-10'),
        categoria: 'drama',
      },
      {
        titulo: 'Un domingo cualquiera',
        texto: 'Podemos salir del infierno, pulgada a pulgada. Yo no puedo hacerlo por vosotros. Soy muy viejo. Miro alrededor y veo esas jóvenes caras y pienso: he cometido todos los errores que un hombre de mediana edad puede cometer. He despilfarrado todo mi dinero. Podéis creerlo. He echado de mi vida a todo el que me ha amado. Y últimamente ni siquiera soporto la cara que veo en el espejo. Mirad, cuando te haces mayor, en la vida, hay cosas que se van. Vamos, eso es parte de la vida. Pero solo aprendes eso cuando empiezas a perder esas cosas. Descubres que la vida es cuestión de pulgadas',
        autor: 'Tony D\'Amato',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/un-domingo-cualquiera-la-vida-a-pulgadas/125895990-1-esl-ES/Un-domingo-cualquiera-La-vida-a-pulgadas.jpg?resize=768:*',
        fecha: new Date(),
        categoria: 'drama',
      },
      {
        titulo: 'Aguantar los golpes',
        texto: 'El mundo no es todo alegría y color. El mundo es un lugar terrible y por muy duro que seas, es capaz de arrodillarte a golpes y tenerte sometido permanentemente si tú no se lo impides. Ni tú, ni yo, ni nadie golpea más fuerte que la vida, pero no importa lo fuerte que golpeas, sino lo fuerte que pueden golpearte. Y lo aguantas mientras avanzas. Hay que soportar sin dejar de avanzar, así es como se gana. Si tú sabes lo que vales ve y consigue lo que mereces, pero tendrás que soportar los golpes. Y no podrás estar diciendo que no estás donde querías llegar por culpa de él, de ella ni de nadie, eso lo hacen los cobardes y tú no lo eres',
        autor: 'Rocky Balboa',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/rocky-balboa-aguantar-los-golpes/125896018-1-esl-ES/Rocky-Balboa-Aguantar-los-golpes.jpg?resize=768:*',
        fecha: new Date(),
        categoria: 'Cine deportivo, drama y acción',
      },
      {
        titulo: 'Confía en ti mismo',
        texto: 'Nunca dejes que nadie te diga que no puedes hacer algo. Ni siquiera yo, ¿vale? Si tienes un sueño, tienes que protegerlo. Las personas que no son capaces de hacer algo te dirán que tú tampoco puedes. Si quieres algo ve por ello y punto',
        autor: 'Chris Gardner',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/en-busca-de-la-felicidad-confia-en-ti-mismo/125895997-1-esl-ES/En-busca-de-la-felicidad-Confia-en-ti-mismo.jpg?resize=768:*',
        fecha: new Date('2007-02-01'),
        categoria: 'drama',
      },
      {
        titulo: 'Haz el amor, no la guerra',
        texto: 'Nuestro conocimiento nos ha hecho cínicos. Nuestra inteligencia, duros y secos. Pensamos demasiado y sentimos muy poco. Más que máquinas, necesitamos humanidad. Más que inteligencia, tener bondad y dulzura. Sin estas cualidades, la vida será violenta. Se perderá todo (...) A los que puedan oírme, les digo: no desesperéis. La desdicha que padecemos no es más que la pasajera codicia y la amargura de hombres que temen seguir el camino del progreso humano. El odio de los hombres pasará. Y caerán los dictadores. Y el poder que le quitaron al pueblo, se le reintegrará al pueblo. Y así, mientras el hombre exista, la libertad no perecerá',
        autor: 'El dictador de Tomania',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/el-gran-dictador-haz-el-amor-no-la-guerra/125896004-1-esl-ES/El-gran-dictador-Haz-el-amor-no-la-guerra.jpg?resize=768:*',
        fecha: new Date('1940-04-20'),
        categoria: 'Comedia dramática, Sátira',
      },
      {
        titulo: '¿Qué haríamos sin libertad?',
        texto: 'Luchad y puede que muráis. Huid y viviréis. Un tiempo al menos. Y al morir en vuestro lecho, dentro de muchos años, ¿no estaréis dispuestos a cambiar todos los días desde hoy, por una oportunidad, solo una oportunidad de volver aquí a matar a nuestros enemigos? Pueden que nos quiten la vida, pero jamás nos quitarán la libertad',
        autor: 'William Wallace',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/braveheart-que-hariamos-sin-libertad/125896032-1-esl-ES/Braveheart-Que-hariamos-sin-libertad.jpg?resize=768:*',
        fecha: new Date('1995-10-20'),
        categoria: 'Drama histórico',
      },
      {
        titulo: '¡Hoy no es ese día!',
        texto: 'Veo en vuestros ojos el mismo miedo que encogería mi propio corazón. Pudiera llegar el día en el que valor de los hombres decayera en que olvidáramos a nuestros compañeros y se rompieran los lazos de nuestra comunidad, pero hoy no es ese día. En que una hora de lobos y escudos rotos rubricaran la consumación de la edad de los hombres, pero hoy no es ese día. En este día lucharemos. Por todo aquello que vuestro corazón ama, de esta buena tierra, os llamo a luchar',
        autor: 'Aragorn II',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/el-senor-de-los-anillos-iii-!hoy-no-es-ese-dia/125896025-1-esl-ES/El-senor-de-los-anillos-III-!Hoy-no-es-ese-dia.jpg?resize=768:*',
        fecha: new Date('2003-12-17'),
        categoria: '	Aventuras, Fantasía épica',
      },
      {
        titulo: 'Salir de la zona de confort',
        texto: 'Hay, claro está, personas que no quieren que hablemos. Sospecho que, en este momento, estarán dando órdenes por teléfono, y que hombres armados ya vienen en camino.¿Por qué? Porque mientras puedan utilizarán la fuerza ¿Para qué el diálogo? Sin embargo, las palabras siempre conservarán su poder, las palabras hacen posible que algo tome significado y, si se escuchan, enuncian la verdad. Y la verdad es, que en este país, algo va muy mal, ¿no? (...) Había una plaga de problemas que conspiraron para corromper vuestros sentidos y sorberos el sentido común. El temor pudo con vosotros y, presas del pánico, acudisteis al actual li­der, Adam Sandler. Os prometió orden, os prometió paz. Y todo cuanto os pidió a cambio fue vuestra silenciosa y obediente sumisión',
        autor: 'V de Vendetta',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/v-de-vendetta-salir-de-la-zona-de-confort/125896046-1-esl-ES/V-de-Vendetta-Salir-de-la-zona-de-confort.jpg?resize=768:*',
        fecha: new Date('2005-03-12'),
        categoria: '	Ciencia ficción, distopía',
      }

    ]

  }

  getAllpost() {
    return this.agregarPost;
  }


  agregarPost(post: Post) {

  }


  getPostsByCategoria(cat) {

  }
}
