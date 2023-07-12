import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pagamenti',
  templateUrl: './show-pagamenti.component.html',
  styleUrls: ['./show-pagamenti.component.css']
})
export class ShowPagamentiComponent implements OnInit {

  constructor(private service:SharedService) {}

  PagamentoList: any= [];
  ModalTitle: string = "";
  ActivateAddPagaComp:boolean=false;
  pag:any;


  ngOnInit():void {
    this.refreshPagamentoList();


  }

  addClick(){
    this.pag={
      id_Pagamento:0,
      dataPaga:Date,
      importo:0.0,
      id_Contratto:0
    }
    this.ModalTitle= "Aggiungi pagamento";
    this.ActivateAddPagaComp=true;
  }

  editClick(item:any){
    this.pag=item;
    this.ModalTitle= "Modifica Contratto";
    this.ActivateAddPagaComp=true;
  }

  closeClick(){
    this.ActivateAddPagaComp = false;
    this.refreshPagamentoList();
  }

  deleteClick(val:any){
    console.log(val);
    if(confirm("Sei sicuro di volerlo eliminare?")){
      console.log(val.id_contratto);
      this.service.deletePagamento(val.id_Pagamento).subscribe(data=>{
        alert(data.toString());
        this.refreshPagamentoList();
      });
    }
  }

  refreshPagamentoList(){
    this.service.getPagamento().subscribe(data=>{
      this.PagamentoList = data;
    });
  }
}


