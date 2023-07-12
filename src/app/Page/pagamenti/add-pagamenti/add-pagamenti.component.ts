import { Component,OnInit,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-pagamenti',
  templateUrl: './add-pagamenti.component.html',
  styleUrls: ['./add-pagamenti.component.css']
})
export class AddPagamentiComponent implements OnInit  {
  constructor(private service:SharedService) {}

  ContrattoList: any= [];
  @Input() pag:any;
  id_Pagamento:number=0;
  dataPaga:Date= new Date();
  importo:number=0.0;
  id_Contratto:number=0;


  ngOnInit(): void {
    this.id_Pagamento = this.pag.id_Pagamento;
    console.log(this.id_Pagamento);
    this.dataPaga = this.pag.dataPaga;
    this.importo = this.pag.importo;
    this.id_Contratto= this.pag.id_Contratto;
    this.refreshContrattoList();
  }

  addClick(){
    var val = {
      id_Pagamento:this.id_Pagamento,
      dataPaga:this.dataPaga,
      importo:this.importo,
      id_Contratto:this.id_Contratto
    };
    console.log(val);
    console.log(this.id_Pagamento);

    this.service.addPagamento(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateClick(){
    var val = {
      id_Pagamento:this.id_Pagamento,
      dataPaga:this.dataPaga,
      importo:this.importo,
      id_Contratto:this.id_Contratto
    };
    console.log(val);

    this.service.updataPagamento(val).subscribe(res=>{
      alert(res.toString());
      });
  }

  refreshContrattoList(){
    this.service.getContratto().subscribe(data=>{
      this.ContrattoList = data;
    });
  }
}
