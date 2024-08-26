import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'evo-button',
  templateUrl: './evo-button.component.html',
  // styleUrls: ['./evo-button.component.scss']
})
export class EvoButtonComponent implements OnInit {

  @Input() tipo: any = "primary";
  @Input() colorIcon: any = '';
  @Input() disabled: boolean = false;
  @Input() icon = "";
  @Input() size: string = "";
  @Input() small: boolean = false;
  @Input() onlyIcon: boolean = false;
  @Input() typeButton: string = 'default';
  @Output() clickButton:  EventEmitter<any> = new EventEmitter();
  @Input() noSpacing: boolean = false;
  @Input() color: ThemePalette;
  @Input() agrupado = false;
  @Input() noRadius = false;
  @Input() width = "";

  
  // opcoes do dropdown
  @Input() label: string = "Exibir por:";
  @Input() opcoes:any;
  @Output() clickDropdown: EventEmitter<any> = new EventEmitter();

  public opcaoSelecionada: string;
  public itemEscolhido;
  @Input() action: string;
  @Input() type: string;
  public item: any;

  constructor() { }

  ngOnInit(): void {
    this.verificaDefault();
  }

  clickBtn(item: any = false, event){
    var aa = item;
    this.clickButton.emit(event);
  }

  clickOpc(index, opcoes, item){
    opcoes.map((item) => item.selecionado = false);

    for(let i = 0; i <= opcoes.length; i++){
        if(i == index){
            opcoes[i].selecionado = true;
            this.opcaoSelecionada = opcoes[i].text;
            this.itemEscolhido = item;
            this.clickDropdown.emit({indice:index})
        }
    }
  }

  verificaDefault(){
    if(this.opcoes != undefined || this.opcoes != null){
        this.opcoes.forEach( item => {
            if(item.selecionado == true){
                this.opcaoSelecionada = item.text;
                this.itemEscolhido = item;
            }
        });
    }
  }

  largura() {
    let isPercentual = this.width.indexOf("%") > -1;
    return isPercentual ? this.width : (this.width + "px");
  }

}
