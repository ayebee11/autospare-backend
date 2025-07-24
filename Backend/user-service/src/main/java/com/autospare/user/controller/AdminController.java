package com.autospare.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.autospare.user.service.UserService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    // ✅ Admin metric: Total number of users
    @GetMapping("/total-users")
    public Long getTotalUsers() {
        return userService.getTotalUserCount();
    }
}
