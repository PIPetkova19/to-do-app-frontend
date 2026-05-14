import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category';
import { Category } from '../../models/category';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})

export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  applyForm = new FormGroup({
    title: new FormControl('')
  });

  constructor(private service: CategoryService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('ERROR:', err);
      }
    });
  }


  submitApp() {
    this.service.submitApp(
      this.applyForm.value.title ?? ''
    ).subscribe({
      next: () => {
        this.service.getCategories().subscribe({
          next: (data) => {
            this.categories = data;
            this.applyForm.reset();
          },
          error: (err) => console.error(err)
        });
      },
      error: (err) => console.error(err)
    });
  }
}
