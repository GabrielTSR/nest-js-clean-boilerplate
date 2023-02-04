import type { AccountModel, RoomModel } from '.';

export interface PermissionModel {
    id: string;

    name: string;
    description: string | null;

    linkedAccounts?: AccountModel[];
    room?: RoomModel[];
}
