import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../commun/feedback';
import { ContactService } from '../services/contact.service';
@Component({ selector: 'app', templateUrl: 'contact.component.html' })
export class ContactComponent implements OnInit {

    public feedbackForm: FormGroup;
    soumis = false;
    feedback: Feedback;
  submitted = null;
  constructor(private contactservice: ContactService) { }
    ngOnInit() {
      this.feedbackForm = new FormGroup({
        prenom : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        nom : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        tel : new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
        email : new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl(''),
      });
    }
    public VerifErreur = (controlNom: string, erreurNom: string) => {
      return this.feedbackForm.controls[controlNom].hasError(erreurNom);
    }
     onSoumission(){
            alert('SUCCESS!! :-) \n\n' + JSON.stringify(this.feedbackForm.value, null, 4));
            this.soumis=true;
            this.feedback = this.feedbackForm.value;
            console.log(this.feedback);
            this.contactservice.contacter(this.feedback)
        .subscribe(feedback => {
           this.submitted = feedback;
           this.feedback = null;
           setTimeout(() => { this.submitted = null; this.soumis = true; }, 5000);
          },
          error => console.log(error.status, error.message));
      this.feedbackForm.reset({
        prenom: '',
        nom: '',
        telnum: '',
        email: '',
        message: ''
      });
      }}