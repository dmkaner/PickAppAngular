import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.required]
  });

  icMail = icMail;
  loading = false;
  serverMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  get email() {
    return this.form.get('email');
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;

    try {
      await this.afAuth.auth.sendPasswordResetEmail(email);
      this.serverMessage = 'Check your email';
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }

}
