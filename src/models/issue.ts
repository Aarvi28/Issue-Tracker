export class Issue {
  constructor(
    private id: number,
    private created_at: Date,
    private updated_at: Date,
    private title: string,
    private description: string,
    private status: string,
    private severity: number,
    private due_date: Date,
    private type: string,
    private project: number,
    private assignee: string) {}
}
