package com.crude.demo.service;

import com.crude.demo.Exceptions.UserNotFound;
import com.crude.demo.entity.User;
import com.crude.demo.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserServices{

    private UserRepository userRepo;

    @Override
    public User getUserById(int id) {
    return userRepo.findById(id).orElseThrow(
            () -> new UserNotFound("No User Exists by this id: "+id)
    );
    }

    @Override
    public List<User> getAllUSer() {
        return userRepo.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User updateUser(User user) {
        User existingUser
                = userRepo.findById(user.getId())
                .orElse(null);
        if (existingUser == null)
            throw new UserNotFound(
                    "No Such Customer exists!!");
        else {
            existingUser.setName(user.getName());
            existingUser.setRole(
                    user.getRole());
         return userRepo.save(existingUser);

        }
    }

    @Override
    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }
}
