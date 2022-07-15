import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  infectedEmployees=[
    {
      id : 1,
      name : "Sandip",
      city : "Ranchi",
      grade : "trainee",
      project : "project1",
      gender : "male",
      infection : false,
      booster : 2,
      daysCompleted : "95",
      certificate: "",
    },
    {
      id : 2,
      name : "Roshan",
      city : "Bokaro",
      grade : "trainee",
      project : "project 2",
      gender : "male",
      infection : false,
      booster : 2,
      daysCompleted : "90",
      certificate: "",
    },
    {
      id : 3,
      name : "Amit",
      city : "Delhi",
      grade : "Full Employ",
      project : "project 3",
      gender : "male",
      infection : true,
      booster : 2,
      daysCompleted : "70",
      certificate: "",
    },
    {
      id : 4,
      name : "Kanchan",
      city : "Tata",
      grade : "trainee",
      project : "project 4",
      gender : "female",
      infection : false,
      booster : 2,
      daysCompleted : "99",
      certificate: "",
    },
    {
      id : 5,
      name : "Rohan",
      city : "Jamshedpur",
      grade : "trainee",
      project : "project 5",
      gender : "male",
      infection : true,
      booster : 2,
      daysCompleted : "98",
      certificate: "",
    }
    
    
  ]

}
