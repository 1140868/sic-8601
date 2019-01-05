import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MaterialService } from 'src/app/services/material/material.service';
import { Material } from 'src/app/model/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  material: Material = new Material();


  loading = false;
  error = '';
  availableFinishes: any[] = [];

  selectedName: string;
  selectedDescription: string;
  selectedAcrescento: number;
  selectedFinish: number;

  valid: boolean;

  constructor(
    private route: ActivatedRoute,
    private materialService: MaterialService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {

    this.materialService.getDotnetFinishes().subscribe((data) => { this.availableFinishes = data; });

  }

  goBack() {
    this.location.back();
  }


  createMaterial(): void {
    this.materialService.createDotnetMaterial({
      Name: this.selectedName,
      Description: this.selectedDescription,
      RestrictionId: 1
    }).subscribe(
      (material) => {
        /**
         * Binding the finish to the material..
         */
        this.materialService.createDotNetMaterialFinish(material, this.selectedFinish).subscribe(
          () => {
            alert("Material was created.");
            window.location.reload();
          },
          (error) => {
            console.log("Could not create material finish: " + error);
            alert("Something went wrong while binding the finish to the material.");
          },
          () => { }
        )
      },
      (error) => {
        console.log(error);
        if (error.error = "SyntaxError") {
          alert("Material was created.")
          window.location.reload();
        } else { alert("Could not create material: " + error); }
      },
      () => { }
    );
  };


  validateForms(): void { }

  setFinish(finish: any): void {
    this.selectedFinish = finish;
  }

  setName(name: string): void {
    this.selectedName = name;
  }
  setDescription(desc: string): void {
    this.selectedDescription = desc;
  }
  setAcrescento(acre: number): void {
    this.selectedAcrescento = acre;
  }

  getAcrescento(material:number, finish:number){

    this.materialService.getDotNetMaterialById



  }
}

