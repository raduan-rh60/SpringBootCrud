package com.crude.demo.Exceptions;

public class UserNotFound extends RuntimeException{
    String msg;

    public UserNotFound(String message) {
        super(message);
        this.msg = message;
    }
}
