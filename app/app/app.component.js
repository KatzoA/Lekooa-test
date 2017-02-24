"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.loadingRepos = true;
        this.loadingUserInfos = true;
        this.getUserInfos('Lekooa')
            .then(function (UserInfos) {
            console.log(UserInfos);
            _this.user = UserInfos;
            _this.loadingUserInfos = false;
        });
        this.getRepos('Lekooa')
            .then(function (repos) {
            console.log(repos);
            _this.repos = repos;
            _this.loadingRepos = false;
        });
    }
    AppComponent.prototype.getUserInfos = function (user) {
        return fetch("https://api.github.com/users/" + user)
            .then(function (user) {
            return user.json();
        });
    };
    AppComponent.prototype.getRepos = function (user) {
        return fetch("https://api.github.com/users/" + user + "/repos")
            .then(function (repos) {
            return repos.json();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <table *ngIf=\"!loadingUserInfos\">\n    <thead>\n      {{user.login}} github :\n    </thead>\n    <tbody>\n    <tr>\n      <td colspan=\"2\"><img [src]=\"user.avatar_url\" alt=\"\"></td>\n    </tr>\n    </tbody>\n  </table>\n  <table *ngIf=\"!loadingRepos\">\n  <thead>\n    {{user.login}} public repos ({{user.public_repos}}) :\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let repo of repos\">\n    <td>Nom:</td><td>{{repo.full_name}}</td>\n    <td>Date cr\u00E9ation:</td><td>{{repo.created_at}}</td>\n  </tr>\n  </tbody>\n  </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map