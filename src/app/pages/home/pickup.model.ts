export interface Pickup {
    id?: string;
    itemName?: string;
    pickupAddress?: string;
    shippingAddress?: string;
    shippingOption?: string;
    scheduledTime?: string; //data type change possible
    scheduledDate?: string;
    trackingNumber?: string; //data type change possible
    trackingLink?: string;
    packagePictureRoute?: string;
    status?: string;
}