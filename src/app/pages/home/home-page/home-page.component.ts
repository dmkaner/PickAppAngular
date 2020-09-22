import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pickup } from '../pickup.model';
import { Subscription } from 'rxjs';

import icAccessTime from '@iconify/icons-ic/access-time';
import icLocalShipping from '@iconify/icons-ic/local-shipping';
import icHome from '@iconify/icons-ic/home';
import icPlace from '@iconify/icons-ic/place';
import icMoreVert from '@iconify/icons-ic/more-vert';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';

import { Order, tableSalesData } from './table-sales-data';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { PickupService } from '../pickup.service';
import { Observable } from 'rxjs';
// import { SnackService } from '../../../services/snack.service';

@Component({
  selector: 'vex-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class HomePageComponent implements OnInit {

  form: FormGroup;

  loading = false;
  serverMessage: string;

  subPickup: Subscription;
  subShipment: Subscription;

  currentPickups: Pickup[];
  currentShipments: Pickup[];

  tableData = tableSalesData;
  // tableColumns: TableColumn<Order>[] = [
  //   {
  //     label: '',
  //     property: 'status',
  //     type: 'badge'
  //   },
  //   {
  //     label: 'PRODUCT',
  //     property: 'name',
  //     type: 'text'
  //   },
  //   {
  //     label: '$ PRICE',
  //     property: 'price',
  //     type: 'text',
  //     cssClasses: ['font-medium']
  //   },
  //   {
  //     label: 'DATE',
  //     property: 'timestamp',
  //     type: 'text',
  //     cssClasses: ['text-secondary']
  //   }
  // ];
  tableColumns: TableColumn<Pickup>[] = [
    {
      label: 'STATUS',
      property: 'status',
      type: 'badge'
    },
    {
      label: 'ITEM',
      property: 'itemName',
      type: 'text'
    },
    {
      label: 'Tracking #',
      property: 'trackingNumber',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'DATE',
      property: 'scheduledDate',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];

  icAccessTime = icAccessTime;
  icLocalShipping = icLocalShipping;
  icHome = icHome;
  icPlace = icPlace;
  icMoreVert = icMoreVert;

  result: string;

  constructor(
    public afAuth: AngularFireAuth, 
    private cd: ChangeDetectorRef, 
    public pickupService: PickupService, 
    private fb: FormBuilder, 
    private dialog: MatDialog
    // private snack: SnackService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      pickupAddress: ['', [Validators.required]],
      shippingAddress: ['', [Validators.required]],
      shippingOption: ['', [Validators.required]],
      itemName: ['', [Validators.required]],
      scheduledDate: ['', [Validators.required]],
      scheduledTime: ['', [Validators.required]]
    });

    this.subPickup = this.pickupService
                  .getCurrentPickups()
                  .subscribe(currentPickups => (this.currentPickups = currentPickups))

    this.subShipment = this.pickupService
                  .getShipments()
                  .subscribe(currentShipments => (this.currentShipments = currentShipments))

    this.tableData = this.currentPickups;
  }

  ngOnDestroy() {
    this.subPickup.unsubscribe();
    this.subShipment.unsubscribe();
  }

  openDialog() {
    this.dialog.open(DemoDialogComponent, {
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
    });
  }

  get pickupAddress() {
    return this.form.get('pickupAddress');
  }

  get shippingAddress() {
    return this.form.get('shippingAddress');
  }

  get shippingOption() {
    return this.form.get('shippingOption');
  }

  get itemName() {
    return this.form.get('itemName');
  }

  get scheduledDate() {
    return this.form.get('scheduledDate');
  }

  get scheduledTime() {
    return this.form.get('scheduledTime');
  }

  async onSubmit() {
    this.loading = true;

    const pickupAddress = this.pickupAddress.value;
    const shippingAddress = this.shippingAddress.value;
    const shippingOption = this.shippingOption.value;
    const itemName = this.itemName.value;
    const scheduledTime = this.scheduledTime.value;
    const scheduledDate = this.scheduledDate.value;
    const status = "awaiting confirmation";

    try {

      this.pickupService.createPickup({
        pickupAddress,
        shippingAddress,
        shippingOption,
        itemName,
        scheduledTime,
        scheduledDate,
        status
      });

      // this.snack.pickupScheduled();
      
    } catch (err) {
      this.serverMessage = err;
    }

    this.form.reset();
    this.form.markAsUntouched();
    this.loading = false;
  }

}

@Component({
  selector: 'vex-components-overview-demo-dialog',
  template: `
      <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center">
          <div>Order Sent!</div>
          <button type="button" mat-icon-button (click)="close('Ok')" tabindex="-1">
              <mat-icon [icIcon]="icClose"></mat-icon>
          </button>
      </div>

      <mat-dialog-content>
          <p>You will review your request and get back with a confirmation email soon!</p>
      </mat-dialog-content>


      <mat-dialog-actions align="end">
          <button mat-button color="primary" (click)="close('Ok')">Ok</button>
      </mat-dialog-actions>
  `
})
export class DemoDialogComponent {
  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>) {}

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
