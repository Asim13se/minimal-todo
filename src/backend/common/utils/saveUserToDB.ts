import {UserDB} from '../models/UserDB';

export default async function saveUserToDB(userDB: UserDB, db: any) {
  await db.put(`Users.${userDB.id}`, JSON.stringify(userDB));
}
