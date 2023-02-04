import type { AccountModel, RoomModel } from '.';

export interface QuestionModel {
    id: string;

    author?: AccountModel;
    room?: RoomModel;

    content: string;
    answer: string | null;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: number;

    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
