export interface ParkingType {
    time?: string;
    paid: boolean;
    left: boolean;
    plate: string;
    reservation?: string;
}