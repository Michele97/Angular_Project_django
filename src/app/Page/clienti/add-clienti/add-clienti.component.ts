import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-clienti',
  templateUrl: './add-clienti.component.html',
  styleUrls: ['./add-clienti.component.css']
})


export class AddClientiComponent implements OnInit {
  constructor(private service:SharedService) {}
  @Input() cli:any;
  clienteId:number = 0;
  clienteName:string="";
  clienteCognome:string="";
  clienteCodF:string="";
  clienteRegione:string="";
  clientepiva:string="";
  aziendaFlag:boolean=false;

  ngOnInit(): void {
    this.clienteId=this.cli.clienteId;
    this.clienteName=this.cli.ClienteName;
    this.clienteCognome=this.cli.ClienteCognome;
    this.clienteCodF=this.cli.ClienteCodF;
    this.clienteRegione=this.cli.ClienteRegione;
    this.clientepiva=this.cli.Clientepiva;
    this.aziendaFlag=this.cli.aziendaFlag;
  }

  addClick(){
    var val = {
                clienteId:this.cli.clienteId,
                clienteName:this.clienteName,
                clienteCognome:this.clienteCognome,
                clienteCodF:this.clienteCodF,
                clienteregione:this.clienteRegione,
                clientepiva:this.clientepiva,
                aziendaFlag:this.aziendaFlag
              };
              console.log(val);


    this.service.addCliente(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateCliente(){
    if (this.aziendaFlag==false){

      var val = {
        clienteId:this.clienteId,
        clienteName:this.clienteName,
        clienteCognome:this.clienteCognome,
        clienteCodF:this.clienteCodF,
        clienteregione:"",
        clientepiva:"",
        aziendaFlag:this.aziendaFlag
      };
      console.log(val);
      this.service.updataCliente(val).subscribe(res=>{
        alert(res.toString());
        });
    }else {
      var val2 = {
        clienteId:this.clienteId,
        clienteName:this.clienteName,
        clienteCognome:"",
        clienteCodF:"",
        clienteregione:this.clienteRegione,
        clientepiva:this.clientepiva,
        aziendaFlag:this.aziendaFlag
      };
      console.log(val2);
      this.service.updataCliente(val2).subscribe(res=>{
        alert(res.toString());
        });
    }



  }
}

