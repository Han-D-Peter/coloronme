export interface User {
  age: number;
  email: string;
  gender: string;
  id: number;
  name: string;
  nickname: string;
  personalColorId: number;
  profileImageUrl: string;
  updatedAt: string;
  userAuthDetailId: number;
  createdAt: string;
  deletedAt: string;
  worstColorId: number;
  userAuthDetail: UserAuthDetail;
}

interface UserAuthDetail {
  agreedToTerms: boolean;
  agreedToPrivacy: boolean;
  createdAt: string;
  id: number;
  isAgeRequirementAgreed: boolean;
  updatedAt: string;
  userId: number;
}
