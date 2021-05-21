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
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: new Date(),
        categoria: '',
      }
    ]

  }


  agregarPost(post: Post) {

  }

}
