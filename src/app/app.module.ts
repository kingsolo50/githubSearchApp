import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { FormControl } from '@angular/forms';
import { FormGroup  } from '@angular/forms';
//mport { RouterModule }   from '@angular/router';

//components
import { AppComponent } from './app.component';
import { GithubComponent } from './components/profile.component';
//service
import { GithubService } from './services/github-service';
//http provider
import { HttpModule } from '@angular/http'; // http requests

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // RouterModule.forRoot([ //declaring your routes here
    //   { // main page when website loads
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: '???',
    //     component: ???Component
    //   },
    //   {
    //     path: '???',
    //     component: ???Component
    //   }
    // ])
  ],
  declarations: [ 
    AppComponent,
    GithubComponent
  ],
  providers: [ GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
