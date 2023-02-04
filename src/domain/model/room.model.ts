import type { AccountModel, PermissionModel, QuestionModel } from '.';

export interface RoomModel {
    id: string;

    code: string;
    name: string;

    owner?: AccountModel;
    permissions?: PermissionModel[];
    questions?: QuestionModel[];

    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
