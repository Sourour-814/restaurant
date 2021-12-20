import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
constructor(private router : Router, public dialogRef: MatDialogRef<LoginComponent>) { }
nomUtilisateur : string
motPasse : string
login() : void {
if(this.nomUtilisateur == 'admin' && this.motPasse == 'admin'){
this.router.navigate(["gestionplats"]);
this.dialogRef.close();
}else {
alert("le nom d'utilisateur ou le mot de passe est incorrect");
}
}
ngOnInit(): void {
}
}
