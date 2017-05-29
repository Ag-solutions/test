import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  myUser: any;
  myProfile: any;
  myRepos: any;
  constructor(private http:Http, private router: Router){}
  id: any;
  
  getUser() {
    this.http.get('https://api.github.com/users/' + this.myUser)
    .map(response => response.json())
    .subscribe(res => this.myProfile = res);
    this.http.get('https://api.github.com/users/' + this.myUser + '/repos')
    .map(response => response.json())
    .subscribe(res => this.myRepos = res);
  }
 

  ngOnInit() {
  }

}
