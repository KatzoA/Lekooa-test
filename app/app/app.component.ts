import {Component, NgFor, NgIf} from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <table *ngIf="!loadingUserInfos">
    <thead>
      {{user.login}} github :
    </thead>
    <tbody>
    <tr>
      <td colspan="2"><img [src]="user.avatar_url" alt=""></td>
    </tr>
    </tbody>
  </table>
  <table *ngIf="!loadingRepos">
  <thead>
    {{user.login}} public repos ({{user.public_repos}}) :
  </thead>
  <tbody>
  <tr *ngFor="let repo of repos">
    <td>Nom:</td><td>{{repo.full_name}}</td>
    <td>Date création:</td><td>{{repo.created_at}}</td>
  </tr>
  </tbody>
  </table>
  `
})

export class AppComponent {
  loadingUserInfos: boolean;
  loadingRepos: boolean;
  user: Array<string>;
  repos: Array<string>;
  constructor() {
    this.loadingRepos = true;
    this.loadingUserInfos = true;
    this.getUserInfos('Lekooa')
      .then((UserInfos) => {
        console.log(UserInfos);
        this.user = UserInfos;
        this.loadingUserInfos = false;
      });
    this.getRepos('Lekooa')
      .then((repos) => {
        console.log(repos);
        this.repos = repos;
        this.loadingRepos = false;
      });
  }
  private getUserInfos(user: string) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(user => {
        return user.json();
      })
  }
  private getRepos(user: string) {
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then(repos => {
        return repos.json();
      })
  }
}
