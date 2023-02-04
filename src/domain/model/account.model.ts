import type { PermissionModel, QuestionModel, RoomModel } from '.';

export interface AccountModel {
    id: string;

    email: string;
    password: string;
    profilePhotoUrl: string | null;

    refreshToken: string | null;
    tokenExpiresAt: number | null;

    permissions?: PermissionModel[];
    ownedRooms?: RoomModel[];
    questions?: QuestionModel[];

    createdAt: Date;
    updatedAt: Date | null;
}
