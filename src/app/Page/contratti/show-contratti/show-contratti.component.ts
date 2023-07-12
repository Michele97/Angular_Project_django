import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-contratti',
  templateUrl: './show-contratti.component.html',
  styleUrls: ['./show-contratti.component.css']
})
export class ShowContrattiComponent implements OnInit {

  constructor(private service:SharedService) {}

  ContrattoList: any= [];
  ClienteList: any= [];

  ModalTitle: string = "";
  ActivateAddContrattiComp:boolean=false;
  cont:any;


  ngOnInit():void {
    this.refreshContrattoList();
    this.refreshClienteList();
  }

  addClick(){
    this.cont={
      id_contratto:0,
      contattoimporto:0.0,
      cliente:0,
      data:Date,
      scadenza:""
    }
    this.ModalTitle= "Aggiungi contratto";
    this.ActivateAddContrattiComp=true;
  }

  editClick(item:any){
    this.cont=item;
    this.ModalTitle= "Modifica Contratto";
    this.ActivateAddContrattiComp=true;

  }

  closeClick(){
    this.ActivateAddContrattiComp = false;
    this.refreshContrattoList();
  }



  deleteClick(val:any){
    console.log(val);
    if(confirm("Sei sicuro di volerlo eliminare?")){
      console.log(val.id_contratto);
      this.service.deleteContratto(val.id_contratto).subscribe(data=>{
        alert(data.toString());
        this.refreshContrattoList();
      });
    }
  }


  refreshContrattoList(){
    this.service.getContratto().subscribe(data=>{
      this.ContrattoList = data;
    });
  }
  refreshClienteList(){
    this.service.getCliente().subscribe(data=>{
      this.ClienteList = data;
    });
  }
}
