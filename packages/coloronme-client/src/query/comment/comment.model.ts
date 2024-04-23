export type Comment = {
  comment: string;
  id: number;
  isMyComment: boolean;
  user: User;
  isReported: boolean;
  createdAt: string;
  isPosted: boolean;
};

export type User = {
  id: number;
  nickname: string;
  personalColorId: number;
  profileImageUrl: string;
};

export type Comments = Comment[];
