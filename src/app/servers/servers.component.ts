import { Component, OnInit } from '@angular/core';
import { FormsModule}  from '@angular/forms'

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  /*template: `
  <app-server></app-server>
  <app-server></app-server>
  `,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = ['E.V.A 1', 'E.V.A 2'];
  allowNewServer = false; 
  serverCreated= false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Ditisjokersbighambugrers';

  constructor() {
    setTimeout (()=> {this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {

  }
  
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push('this.serversName');
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
    
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
 

}
