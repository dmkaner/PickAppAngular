import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Pickup } from './pickup.model';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  async createPickup(data: Pickup) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection('pickupData').doc(user.uid).collection('pickups').add({
      ...data,
      date: Date.now()
    });
  }

  deletePickup(pickupId: string) {
    return this.db
      .collection('pickups')
      .doc(pickupId)
      .delete();
  }

  // updatePickup(boardId: string, tasks: Task[]) {
  //   return this.db
  //     .collection('boards')
  //     .doc(boardId)
  //     .update({ tasks });
  // }

  getCurrentPickups() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection('pickupData').doc(user.uid).collection<Pickup>('pickups', ref =>
              ref.where('status', '==', 'pickup confirmed')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  getShipments() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection('pickupData').doc(user.uid).collection<Pickup>('pickups', ref =>
              ref.where('status', '==', 'shipping')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

}
