package com.autospare.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.autospare.user.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 🔍 For login/authentication by email
    Optional<User> findByEmail(String email);

    // 🧮 Admin: Get total number of users
    @Query("SELECT COUNT(u) FROM User u")
    Long getTotalUsers();
}
