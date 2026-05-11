import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
 styleUrl:'./user.css'
})
export class UserComponent implements OnInit {

  users: any[] = [];

  constructor(private service: UserService, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
    this.service.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('ERROR:', err);
      }
    });
  }
}