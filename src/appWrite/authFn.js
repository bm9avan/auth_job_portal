import { Client, Account } from "appwrite";

class AuthFn {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(import.meta.env.VITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async signUp(id, email, password, name) {
    const res = await this.account.create(id, email, password, name);
    // console.log(this.verification());
    return this.login(res.email, password);
  }

  verification() {
    account.createVerification("https://example.com").then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  login(email, password) {
    return this.account.createEmailSession(email, password);
  }

  getCurrentUser() {
    const cookies = localStorage.getItem("cookieFallback");
    if (cookies && cookies.length > 2) return this.account.get();
    else return new Promise((resolve, reject) => resolve(null));
  }

  logout() {
    return this.account.deleteSessions("current");
  }
}

const authFn = new AuthFn();
export default authFn;
