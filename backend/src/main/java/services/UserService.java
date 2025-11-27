package services;

import jakarta.ejb.Stateless;

@Stateless
public class UserService {

    public boolean checkUser(String login, String password) {
        return true;
    }

    public boolean registerUser(String login, String password) {
        return true;
    }
}
