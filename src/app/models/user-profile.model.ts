/**
 * Created by root on 16.11.16.
 */
export class UserProfile {
    firstName: string;
    lastName: string;
    website: string;
    address: {
        city: string,
        state: string,
        zip: string
    };
    phone: string;
}