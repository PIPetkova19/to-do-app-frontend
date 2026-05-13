import { Priority } from "./enums/priority";
import { Status } from "./enums/status";

export interface Task {
    title: String;
    description: String,
    dueDate: String,
    priority: Priority;
    status: Status;
    categoryId: number;
    ownerUserId: number;
    assignedUserId: number;
}
