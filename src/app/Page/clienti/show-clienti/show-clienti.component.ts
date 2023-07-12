import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-show-clienti',
  templateUrl: './show-clienti.component.html',
  styleUrls: ['./show-clienti.component.css']
})
export class ShowClientiComponent implements OnInit {

  constructor(private service:SharedService) {}

  ClienteList: any= [];

  ModalTitle: string = "";
  ActivateAddClientiComp:boolean=false;
  cli:any;



  ngOnInit():void {
    this.refreshClienteList();
  }

  addClick(){
    this.cli={
        clienteId:0,
        clienteName:"",
        clienteCognome:"",
        clienteCodF:"",
        clienteRegione:"",
        clientepiva:"",
        aziendaFlag:false
    }
    this.ModalTitle= "Aggiungi Cliente";
    this.ActivateAddClientiComp=true;
  }
  closeClick(){
    this.ActivateAddClientiComp = false;
    this.refreshClienteList();
  }

  editClick(item:any){
    this.cli=item;
    this.ModalTitle= "Modifica Cliente";
    this.ActivateAddClientiComp=true;
  }

  deleteClick(val:any){
    console.log(val);
    if(confirm("Sei sicuro di volerlo eliminare?")){
      console.log(val.clienteId);
      this.service.deleteCliente(val.clienteId).subscribe(data=>{
        alert(data.toString());
        this.refreshClienteList();
      });
    }

  }

  refreshClienteList(){
    this.service.getCliente().subscribe(data=>{
      this.ClienteList = data;
    });
  }
}
