import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material/material.service';
import { Material } from 'src/app/model/material';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})

export class MaterialListComponent implements OnInit {

  materials: Material[] = [];
  constructor(
    private authenticationService: AuthenticationService,
    private materialService: MaterialService) { }

  ngOnInit() {
    this.materialService.getMaterials()
    .subscribe(material => {
      this.materials = material;
    })
  }

}
