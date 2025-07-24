package com.autospare.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.autospare.product.model.Product;
import com.autospare.product.repository.ProductRepository;

// @Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // 🧮 Get total product count
    public Long getTotalProductCount() {
        return productRepository.getTotalProductCount();
    }

    // ⚠️ Get products with low stock
    public List<Product> getLowStockProducts(int threshold) {
        return productRepository.findByQuantityAvailableLessThan(threshold);
    }
}
