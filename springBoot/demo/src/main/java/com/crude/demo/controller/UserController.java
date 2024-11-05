package com.crude.demo.controller;

import com.crude.demo.entity.User;
import com.crude.demo.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("profile")
public class UserController {

    @Autowired
    private UserServiceImp userServiceImp;

    @GetMapping
    public ResponseEntity<List<User>> showall(){
        List<User> alluser = userServiceImp.getAllUSer();
        return new ResponseEntity<>(alluser, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> userbyid(@PathVariable("id") int id ){
        User userData = userServiceImp.getUserById(id);
        return new ResponseEntity<>(userData,HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){

        return new ResponseEntity<>(userServiceImp.addUser(user),HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updateUser( @PathVariable("id") int id,@RequestBody User user){
        user.setId(id);
        userServiceImp.updateUser(user);
        return new ResponseEntity<>("User Update Successful",HttpStatus.OK);
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") int id){
        userServiceImp.deleteUser(id);
        return new ResponseEntity<>("User deleted successful",HttpStatus.OK);
    }
}
