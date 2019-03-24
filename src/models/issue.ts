export class Issue {
    private id: number;
    private created_at: Date;
    private updated_at: Date;
    private title: string;
    private description: string;
    private status: string;
    private severity: number;
    private due_date: Date;
    private type: string;
    private project: number;
    private assignee: string;
  constructor(
    id,
    created_at,
    updated_at,
    title,
    description,
    status,
    severity,
    due_date,
    type,
    project,
    assignee
  ) {
  this.id = id;
  this.created_at = created_at;
  this.updated_at = updated_at;
  this.title = title;
  this.description = description;
  this.status = status;
  this.severity = severity;
  this.due_date = due_date;
  this.type = type;
  this.project = project;
  this.assignee = assignee;
  }
}
