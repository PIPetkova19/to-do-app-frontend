import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl:'./user.css'
})

export class UserComponent implements OnInit {

  users: User[] = [];

  applyForm=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

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

submitApp() {
  this.service.submitApp(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  ).subscribe({
    next: () => {
      this.service.getUsers().subscribe({
        next: (data) => {
          this.users = data;
          this.applyForm.reset();
        },
        error: (err) => console.error(err)
      });
    },
    error: (err) => console.error(err)
  });
}
}