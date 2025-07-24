package com.autospare.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping; // ✅ Make sure this package exists
import org.springframework.web.bind.annotation.RequestParam;

import com.autospare.product.model.Product;
import com.autospare.product.service.ProductService;

// @RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    private final ProductService productService;

    @Autowired
    public AdminController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/total-products")
    public Long getTotalProductCount() {
        return productService.getTotalProductCount();
    }

    @GetMapping("/low-stock")
    public List<Product> getLowStockProducts(@RequestParam(defaultValue = "10") int threshold) {
        return productService.getLowStockProducts(threshold);
    }
}
