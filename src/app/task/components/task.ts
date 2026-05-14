import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Priority } from '../../models/enums/priority';
import { Status } from '../../models/enums/status';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
    categoryId: new FormControl(''),
    ownerUserId: new FormControl(''),
    assignedUserId: new FormControl('')
  });

  constructor(private service: TaskService, private cdr: ChangeDetectorRef, private router: Router) { }

  goToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

  ngOnInit(): void {
    this.service.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('ERROR:', err);
      }
    });
  }


  submitApp() {
    const value = this.applyForm.value;

    const task: any = {
      title: value.title ?? '',
      description: value.description ?? '',
      dueDate: value.dueDate ?? '',
      priority: value.priority as Priority,
      status: value.status as Status,
      categoryId: Number(value.categoryId),
      ownerUserId: Number(value.ownerUserId),
    };

    if (value.assignedUserId) {
      task.assignedUserId = Number(value.assignedUserId);
    }

    this.service.submitApp(task).subscribe({
      next: () => {
        this.service.getTasks().subscribe({
          next: (data) => {
            this.tasks = data;
            this.applyForm.reset();
            this.cdr.detectChanges();
          },
          error: (err) => console.error(err)
        });
      },
      error: (err) => console.error(err)
    });
  }
}
