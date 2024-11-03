package com.crude.demo.service;

import com.crude.demo.entity.User;

import java.util.List;

public interface UserServices {
    public User getUserById(int id);
    public List<User> getAllUSer();
    public User addUser(User user);
    public User updateUser(User user);
    public void deleteUser(int id);
}
