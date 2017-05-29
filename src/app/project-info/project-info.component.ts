import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AppComponent } from 'app/app.component';
import * as Rx from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  id: string;
  @Input() myProfile; 
  @Input() myRepos;
  myProj: any;
  myBranches: any;
  
  constructor(route: ActivatedRoute, private http: Http, private router: Router) {
    //this.id = route.snapshot.params['id'];
   }
  
  ngOnInit() {
      
  }

  sortedRepos(){
     return this.myRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  choseProject(repo: any, http: Http) {
    this.myProj = repo;
    this.http.get('https://api.github.com/repos/' + this.myProj.full_name + '/branches')
     .map(response => response.json())
     .subscribe(res => this.myBranches = res);
  }
}
