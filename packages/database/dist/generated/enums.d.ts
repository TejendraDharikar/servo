export declare const UserRole: {
    readonly CUSTOMER: 'CUSTOMER';
    readonly PROVIDER: 'PROVIDER';
    readonly ADMIN: 'ADMIN';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const BookingStatus: {
    readonly PENDING: 'PENDING';
    readonly ACCEPTED: 'ACCEPTED';
    readonly REJECTED: 'REJECTED';
    readonly IN_PROGRESS: 'IN_PROGRESS';
    readonly COMPLETED: 'COMPLETED';
    readonly CANCELLED: 'CANCELLED';
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
