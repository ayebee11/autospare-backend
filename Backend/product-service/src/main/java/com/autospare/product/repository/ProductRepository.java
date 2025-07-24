package com.autospare.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository; // ✅ Add this

import com.autospare.product.model.Product;

@Repository  // ✅ Required so Spring Boot can detect this interface as a bean
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(String category);

    List<Product> findByNameContainingIgnoreCase(String keyword);

    // Admin: Get total number of products
    @Query("SELECT COUNT(p) FROM Product p")
    Long getTotalProductCount();

    // Admin: Get low stock products
    List<Product> findByQuantityAvailableLessThan(int threshold);
}
