import { Component, OnInit,AfterViewInit, Input, ElementRef, EventEmitter, Output,ViewChild} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-select-adryell',
  templateUrl: './select-adryell.component.html',
  styleUrls: ['./select-adryell.component.scss'],
  animations: [

    trigger('openClose', [
     // ...
     state('open', style({
       height: '250px',
       opacity: 1,
     })),
     state('closed', style({
       height: '0px',
       opacity: 1,
     })),
     transition('open => closed', [
       animate('0.3s')
     ]),
     transition('closed => open', [
       animate('0.3s')
     ]),
   ]),
  ]
})

export class SelectAdryellComponent implements OnInit {

  isOpen = false;
  showOptions: boolean = true;

  @Input() options:any = []; // ARRAY COM OPÇÕES
  @Input() placeholder:string ='Digite para pesquisar...';
  @Input() label:string ='Label';
  @Output() optionSelect = new EventEmitter<any>(); // EMITTER AO SELECIONAR UMA OPÇÃO
  temp = this.options;

  @ViewChild('inputSearch') inputSearch: any;
  constructor(
    private elementRef:ElementRef
  ) { }

  ngOnInit() {


    document.querySelector('body').addEventListener('keydown',event => {
      if(event.code == "Escape"){
          this.showOptions = true;
          this.isOpen = false;
      }
    });

    document.querySelector('body').addEventListener('click',event => {
      //console.log(event.path);
      let valid = false;
      for(let item of event['path']){
        if(item.id == 'box' || item.className == 'select'){
          valid = true;
        }
      }

      if(!valid){
        this.showOptions = true;
        this.isOpen = false;
      }
    });
  }

  teste = true;
  filter(event) {
    //this.temp = this.options;
    // debugger;
    if(this.teste){
      this.temp = this.options;
      this.teste = false;
    }
     const val = event.target.value;
     const temp = this.temp.filter(function (d) {
       for (var i in d) {
         if (i == 'text') {

             d[i] = String(d[i]);
             var result = d[i].toLowerCase().indexOf(val.toLowerCase()) !== -1 || !val.toLowerCase();

         }

         if (result) {
           return result;

         }
       }
     });
    this.options = temp;
  }

  openOptions() {
    this.isOpen = !this.isOpen;
    this.showOptions = !this.showOptions;
  }

  onClick(event) {
    console.log(event);
  }

  selecionados = [];
  fOptionSelect(obj, position){
    this.options[position].check = !this.options[position].check;
    if(this.options[position].check){
      this.selecionados.push(this.options[position]);
    }else{
      for(let i in this.selecionados){
        if(this.options[position] === this.selecionados[i]){
          this.selecionados.splice(parseInt(i), 1);
        }
      }
    }
    this.optionSelect.emit(obj);
  }

  removeAll(){
    this.selecionados = [];

    for(let i of this.options){
      i.check = false;
    }
  }

}
