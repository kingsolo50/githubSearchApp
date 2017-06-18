import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//components

//service
import { GithubService } from '../services/github-service.service';
//map function
import 'rxjs/add/operator/map';


@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: './profile.component.html'
  //styleUrls: ['./app.component.css']
})
export class GithubComponent {

  //create user property to used in scope
  user = [];
  repos = [];
  username:string;

  // Here is where you add a service to a component
  constructor(private _githubService:GithubService){
    //calling the get function dec from github-service.servicets
    this._githubService.getUser().subscribe(user => {
      //console.log(user);
      //add the property and scoped out under the user object
      //user is the date coming in from the api
      this.user = user;
    })

    //
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

  searchUser(){
    //console.log('It works');
    this._githubService.updateUser(this.username);

    //calling the get function dec from github-service.servicets
    this._githubService.getUser().subscribe(user => {
      //console.log(user);
      //add the property and scoped out under the user object
      //user is the date coming in from the api
      this.user = user;
    })

    //
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
  //scope
  title = 'Github ProfileSearch App';
}
