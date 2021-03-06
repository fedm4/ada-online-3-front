import User from '../models/User';

export const getUsers = (): Promise<User[]> => {
    return fetch('https://5f518d325e98480016123ada.mockapi.io/api/v1/users')
        .then(res => res.json())
        .then((data: User[]) => data);
}