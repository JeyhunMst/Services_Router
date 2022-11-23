import { UsersService } from "../APIs/Services/Users";

export const useServices = () => {
  const usersService = new UsersService();

  return { usersService };
};