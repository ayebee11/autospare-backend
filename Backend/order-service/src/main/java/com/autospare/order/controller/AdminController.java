package com.autospare.order.controller;

import java.util.List; // ✅ Needed for List<Object[]>

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.autospare.order.service.OrderService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private OrderService orderService;

    // ✅ Total revenue from all orders
    @GetMapping("/total-revenue")
    public Double getTotalRevenue() {
        return orderService.getTotalRevenue();
    }

    // ✅ Total orders placed this week
    @GetMapping("/weekly-orders")
    public Long getWeeklyOrders() {
        return orderService.getWeeklyOrderCount();
    }

    // ✅ Top-selling products
    @GetMapping("/top-products")
    public List<Object[]> getTopSellingProducts() {
        return orderService.getTopSellingProducts();
    }
}
