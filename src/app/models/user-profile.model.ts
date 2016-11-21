import { Address } from "./address.model";

export class UserProfile {
    firstName: string;
    lastName: string;
    website: string;
    address: Address;
    phone: string;
    stars: number;
    reviewsCount: number;
    followersCount: number;
}
