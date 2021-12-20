import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router, public dialogRef: MatDialogRef<RegisterComponent>) { }
nomUtilisateur : string
motPasse : string
register() : void {
  
  this.router.navigate(["login"]);
  this.dialogRef.close();
}

ngOnInit(): void {
}
}

