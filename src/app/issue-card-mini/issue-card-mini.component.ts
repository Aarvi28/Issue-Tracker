import { Component, OnInit } from '@angular/core';

import { card } from '../../models/card';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.css']
})
export class IssueCardMiniComponent {
  issueData = card;
}
