interface iReview {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface iUser {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  pwd?: string;
  [x: string]: any;
  role?: number;
  provaider_name: string;
  access_token: string;
  refresh_token: string;
  expiration_time: string;
  firebase_uid: string;
}

export { iReview, iUser };
