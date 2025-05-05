export interface JwtPayload {
   id: string;
}

export type Tokens = {
   accessToken: string;
   refreshToken: string;
};