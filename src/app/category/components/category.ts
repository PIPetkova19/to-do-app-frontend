import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})

export class CategoryComponent implements OnInit{
  categories: any[] = [];

  constructor(private service: CategoryService, private cdr: ChangeDetectorRef) {}

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
}
