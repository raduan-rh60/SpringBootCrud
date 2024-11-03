import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

export class UserService{
    private baseUrl = "http://localhost:8080/profile";
   
    public constructor(private httpClient:HttpClient){}

    public getallUser():Observable<any>{
        return this.httpClient.get(this.baseUrl);
    }

    PostUser(data:User){
        return this.httpClient.post<User>(this.baseUrl,data);
    }

    putUser(id:number, data:User){
        return this.httpClient.put(this.baseUrl+"/"+id,data);
    }

    deleteUser(id:number){
        return this.httpClient.delete(this.baseUrl+"/"+id);
    }
}