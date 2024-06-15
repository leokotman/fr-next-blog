import apiClient from '@/api/client';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getUsers = async () => {
  const response = await apiClient({
    url: `${process.env.BASE_URL}users`,
    method: 'GET',
  })
    .then((res) => {
      if (!res.data) {
        throw Error('Error fetching users data');
      }
      return res.data;
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return response;
};
export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export const useUsersQuery = (
  options: Omit<UseQueryOptions<IUser[]>, 'queryKey' | 'queryFn'> = {}
) => {
  return useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: async () => await getUsers(),
    ...options,
  });
};
