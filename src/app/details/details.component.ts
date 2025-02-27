import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empData:Employee=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService
  ){}
  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      //console.log(response);
      this.service.getParticularDataById(param.get("id"))
      .subscribe((response:any)=>{
        console.log(response);
        this.empData=response
      })
    })
  }


}
