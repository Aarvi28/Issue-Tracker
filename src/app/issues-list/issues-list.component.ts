import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  
  @Input() public heading: string;
  @Input() public showAssignee: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
