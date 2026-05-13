import { Category } from "./category";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";
import { User } from "./user";

export interface Task {
    id: number;
    title: String;
    description: String,
    dueDate: String,
    priority: Priority;
    status: Status;
    category: Category;
    ownerUser: User;
    assignedUser: User;
}
