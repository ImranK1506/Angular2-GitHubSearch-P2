import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '90436210ee5c24795ab9';
    private client_secret = 'b192971b3af78f152af0509abf73d58824c37ac5';

    constructor(private _http: Http){
        console.log('Github Service Ready... ');
        this.username = 'imrank1506';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}