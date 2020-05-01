import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(
    private snackBar: MatSnackBar
    ) {}

  authError() {
    this.snackBar.open('You must be logged in!', 'OK', {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef;
  }

  pickupScheduled() {
    this.snackBar.open('Pickup pending approval! You will be notified upon confirmation!', 'OK', {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef;
  }
}