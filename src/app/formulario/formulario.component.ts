import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interface/post.interface';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newPost: Post[];
  formulario: FormGroup;


  constructor(private serviceServices: ServicesService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required, Validators.minLength(3)
      ]),
      texto: new FormControl('', []),
      autor: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imagen: new FormControl('', []),
      categoria: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newPost = this.formulario.value;
    console.log(this.newPost);

  }

}
