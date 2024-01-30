export interface ColorResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
}

export type Client = {
  memberId: number;
  nickname: string;
  email: string;
  profileImageUrl?: string;
  consultedDate: string | null;
  personalColorId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  age: number;
  genderEnum: string;
  consultedContent: string;
  consultedDrawing: string;
};

export type Me = {
  name: string;
  company: string;
  email: string;
};

export type AuthResult = {
  accessToken: string;
  email: string;
  refreshToken: string;
  roleType: string;
};

export type MutatedUser = { name?: string; company?: string; email?: string };
