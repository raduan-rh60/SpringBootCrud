package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.User;

public interface UserServices {

	User getUserByID(int id);
	List<User> getAllUser();
	User CreateUser(User user);
	void login(int id,String name);
	
}
