import {UserDB} from '../models/UserDB';

export default async function getUserFromDB(
  userId: string,
  db: any,
): Promise<UserDB> {
  const userStr = await db.get(`Users.${userId}`);
  const userDB: UserDB = JSON.parse(userStr);
  return userDB;
}
