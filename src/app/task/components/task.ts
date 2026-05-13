import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task';
import { Router,RouterLink } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent  implements OnInit{
 tasks: Task[] = [];

  constructor(private service: TaskService, private cdr: ChangeDetectorRef,private router: Router) {}


  goToDetails(id: number): void{
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
}
