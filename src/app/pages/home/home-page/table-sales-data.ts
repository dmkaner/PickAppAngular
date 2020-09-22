import { DateTime } from 'luxon';
import { Pickup } from '../pickup.model';

export interface Order {
  name: string;
  price: string;
  status: 'ready' | 'pending' | 'warn';
  timestamp: string;
}

export const tableSalesData: Pickup[] = [
  {
    itemName: 'Apple iPhone 8',
    trackingNumber: '123l4kjbu32',
    status: 'shipping',
    scheduledDate: DateTime.local().minus({ minutes: 2 }).toRelative()
  }
];
