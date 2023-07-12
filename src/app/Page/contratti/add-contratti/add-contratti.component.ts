import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-contratti',
  templateUrl: './add-contratti.component.html',
  styleUrls: ['./add-contratti.component.css']
})
export class AddContrattiComponent implements OnInit {
  constructor(private service:SharedService) {}

  ClienteList: any= [];
  @Input() cont:any;
  id_contratto:number=0;
  contattoimporto:number=0.0;
  cliente:number=0;
  data:Date= new Date();
  scadenza:string="";
  scad:Date=new Date();

  ngOnInit(): void {
    this.id_contratto = this.cont.id_contratto;
    this.contattoimporto = this.cont.contattoimporto;
    this.cliente = this.cont.cliente;
    this.data= this.cont.data;
    this.scadenza= this.cont.scadenza;
    this.refreshClienteList();
  }


  addClick(){
    var val = {
                id_contratto:this.id_contratto,
                importo:this.contattoimporto,
                cliente:this.cliente,
                data:this.data,
                scadenzaContratto:this.scadenza
              };
              console.log(val);


    this.service.addContratto(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateClick(){
    var val = {
      id_contratto:this.id_contratto,
      importo:this.contattoimporto,
      cliente:this.cliente,
      data:this.data,
      scadenzaContratto:this.scadenza
    };
    console.log(val);
    this.service.updataContratto(val).subscribe(res=>{
      alert(res.toString());
      });
  }

  refreshClienteList(){
    this.service.getCliente().subscribe(data=>{
      this.ClienteList = data;
    });
  }
}
