package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repo.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServiceImpl implements UserServices{
	
	UserRepository repo;

	@Override
	public User getUserByID(int id) {
		// TODO Auto-generated method stub
		return this.repo.findById(id).get();
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return this.repo.findAll();
	}

	@Override
	public void login(User user) {
		
		// TODO Auto-generated method stub
		return this.repo.findlogin(user, null)
	}

	@Override
	public User CreateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

}
