import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  //myBranches: any;
  example: any;
  @Input() myProj;
  @Input() myBranches;
  constructor(private http: Http) { }
  
  ngOnInit() {
  }

  infoProject(){
    // this.http.get('https://api.github.com/repos/' + this.myProj.full_name + '/branches')
    // .map(response => response.json())
    // .subscribe(res => this.myBranches = res);
    
    //test function
    console.log(this.myProj);
    console.log(this.myBranches);
    console.log(this.myProj.full_name);
    this.http.get('https://api.github.com/repos/angular/angular/branches/master')
    .map(response => response.json())
    .subscribe(res => this.example = res);
    console.log(this.example);
  }
}
