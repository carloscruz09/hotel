import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
       
@Injectable()
export class ClientService {
    
    constructor(private http: Http) {
        console.log("Constructor");
    }
    
    getClients() {
        console.log("getClients");

        return this.http.get('/test/v1/clients/getAll').
            map(res => res.json())
    }

    addClient(model:any) {
        console.log("addClient");
       this.http.post('/test/v1/clients/addClient', {
            id:'0',
            name: model.name,
            firstName: model.firstName,
            lastName: model.lastName,
            address:model.address,
            phone:model.phone,
            mobilePhone:model.mobilePhone,
            office:model.office,
            status:model.status,
            document:model.document
        })
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log("Error occured");
                }
            );
    }
}