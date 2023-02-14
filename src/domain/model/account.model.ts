export interface AccountModelGet {
  id: string;
  email: string;
  profilePhotoUrl: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountModelWithPassword extends AccountModelGet {
  password: string;
}

export interface AccountModelWithToken extends AccountModelGet {
  refreshToken: string | null;
  tokenExpiresAt: Date | null;
}

export interface AccountModel
  extends AccountModelGet,
    AccountModelWithToken,
    AccountModelWithPassword {}
