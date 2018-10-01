import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-select-adryell';

  options = [
    {value: 1, text: "Nunca Operei"}, {value: 2, text: "Opero pouco e não tenho familiaridade"}, {value: 3, text: "Opero eventualmente e conheço os riscos associados"}, {value: 4, text: "Opero frequentemente e conheço os riscos associados"}

    // {value: 1, text: 'AAA'},
    // {value: 2, text: 'bb'},
    // {value: 3, text: 'ccc'},
    // {value: 4, text: 'dddd'},
    // {value: 5, text: 'eeee'},
    // {value: 6, text: 'fff'},
    // {value: 1, text: 'gggg'},
    // {value: 2, text: 'hhh'},
    // {value: 3, text: 'Opcao 2'},
    // {value: 4, text: 'Opcao1'},
    // {value: 5, text: 'Opcao 3'},
    // {value: 6, text: 'Opcao 4'}
  ]



  teste(obj){
    //console.log(">>> ", obj);
  }
}
