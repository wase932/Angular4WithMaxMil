import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    // To receive initial value:
    /* Note that a "+" is added to cast the value as an int (number);
     * To test: Goto: http://localhost:4200/servers/1 (availabe servers 1 to 3)
     */
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // To react to subsequent changes in the router parameters:
    // Again note the cast to int.
    // Without the cast, the parameter passed will be a string, and would cause an exception to the getServer(value: number) method
    this.route.params.subscribe( (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
     });
  }

}
