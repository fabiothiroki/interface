export default interface User {
  id: number;
  ribons: number;
  email: string;
  acceptedPrivacyPolicy: boolean;
  accessToken: string;
  picture?: string;
  name: string;
  isSubscriber: boolean;
  firstAccess: boolean;
  userProperties: Record<string, any>;
  roles: string[];
  onesignalId: string;
  emailConfirmed: boolean;
}
