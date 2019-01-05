import { Component, OnInit } from '@angular/core'; 
import { MaterialService } from 'src/app/services/material/material.service';
import { Material } from 'src/app/model/material';
import { Finish } from 'src/app/model/Finish';


@Component({
  selector: 'app-alterar-preco',
  templateUrl: './alterar-preco.component.html',
  styleUrls: ['./alterar-preco.component.css']
})
export class AlterarPrecoComponent implements OnInit {
  objFinishSelect: Finish;

  loading = false;
  selectedPrecoFinish: Number;
  selectedPrecoMat: Number;
  availableMaterials: any[] = [];
  availableFinishes: any[] = [];
  selectedMaterial: Number;
  selectedFinish: Number; 
objMaterialSelect:Material; 
selectDate= new Date();

constructor(private materialService:MaterialService) { 
}
  ngOnInit() {
    this.materialService.getDotnetMaterials().subscribe((data) => { 
      this.availableMaterials = data;   
     this.setMaterial(data[0].id); 
    });
    
  }
  setMaterial(material: any): void {
    this.selectedMaterial = material;
    this.availableFinishes = [];
    for (var i = 0; i < this.availableMaterials.length; i++) {
        if (this.availableMaterials[i].id == this.selectedMaterial) {
         this. objMaterialSelect= this.availableMaterials[i];
          this.selectedPrecoMat=this. objMaterialSelect.preco;
          for (var j = 0; j < this. objMaterialSelect.finishes.length; j++) { 
                  var finish = this.availableMaterials[i].finishes[j];
                  if (!(finish in this.availableFinishes)) {
                    this.availableFinishes.push(finish);
                  }
                }
                this.selectedFinish = this.availableFinishes[0].id;
                this.selectedPrecoFinish = this.availableFinishes[0].acrescento;
       }
    } 
  } 
  setMaterialPreco(npreco:Number){ 
    this.objMaterialSelect.preco= npreco;
  }

  setFinish(idFinish:any){

    for (var j = 0; j < this. objMaterialSelect.finishes.length; j++) { 
      var finish = this.objMaterialSelect.finishes[j];
      if (idFinish== finish.id) {
        this.objFinishSelect= finish;
        this.selectedFinish = finish.id;
        this.selectedPrecoFinish =finish.acrescento;
      }
    }
  }

  setPrecoFinish(npreco:Number){
    this.objFinishSelect.acrescento= npreco;
  }

  saveMaterial(){ 
    this.materialService.editDotnetMaterial(this.selectedMaterial,this.objMaterialSelect); 
  }

}
