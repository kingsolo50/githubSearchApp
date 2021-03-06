import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//
//import { GithubComponent } from '../components/profile.component';

@Injectable()
export class GithubService {

  private username:string;
  private client_id = '???';
  private client_secret = '???';

  constructor(private _http:Http) { 
    console.log('Github service ready..');
    this.username = null;
  }

  //adding function to get the data from github's api using a function dec
  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json())
  }

  //adding function to get the data from github's api using a function dec
  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json())
  }

  //updates username from the search function 
  updateUser(username:string){
    this.username = username;
  }

}
