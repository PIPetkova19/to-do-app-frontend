import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../task/services/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {

  task: any;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');
    console.log("ID param:", idParam);

    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      console.log("Invalid ID!");
      return;
    }

    this.service.getTaskById(id).subscribe({
      next: (data) => {
        console.log("TASK:", data);
        this.task = data;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log("ERROR:", err);
      }
    });
  }
}