import { Category } from "./category";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";
import { User } from "./user";

export interface Task{ //response dto
    id: number;
    title: string;
    description: string,
    dueDate: Date,
    priority: Priority;
    status: Status;
    category: Category;
    ownerUser: User;
    assignedUser?: User;
}
