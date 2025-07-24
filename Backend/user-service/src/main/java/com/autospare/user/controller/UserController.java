package com.autospare.user.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.autospare.user.model.User;
import com.autospare.user.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        System.out.println("📩 Register attempt: " + user.getEmail());

        Optional<User> existingUser = userService.findByEmail(user.getEmail());
        System.out.println("🔍 Existing user found? " + existingUser.isPresent());

        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        // Fallback default role
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        User savedUser = userService.registerUser(user);
        System.out.println("✅ User registered with ID: " + savedUser.getId());

        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        System.out.println("🔐 Login attempt: " + loginRequest.getEmail());

        Optional<User> user = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (user.isPresent()) {
            System.out.println("✅ Login success for: " + loginRequest.getEmail());
            return ResponseEntity.ok(user.get());
        } else {
            System.out.println("❌ Login failed for: " + loginRequest.getEmail());
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
