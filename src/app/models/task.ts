import { Priority } from "./enums/priority";
import { Status } from "./enums/status";

export interface Task {
    id: number;
    title: string;
    description: string,
    dueDate: string,
    priority: Priority;
    status: Status;
    categoryId: number;
    ownerUserId: number;
    assignedUserId: number;
}
