import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent  implements OnInit{
 tasks: any[] = [];

  constructor(private service: TaskService, private cdr: ChangeDetectorRef) {}

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
}
