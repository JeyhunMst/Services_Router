import { HttpClient } from "../HttpClient";

export class UsersService extends HttpClient {
  constructor() {
    super("https://637a596610a6f23f7f923c1f.mockapi.io");
  }

  getAllUsers() {
    return this.get("people");
  }

  postNewUsers(body) {
    return this.post("people", body);
  }
}