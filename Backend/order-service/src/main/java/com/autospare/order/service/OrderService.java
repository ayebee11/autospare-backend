package com.autospare.order.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.autospare.order.model.Order;
import com.autospare.order.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Place a new order
    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }

    // Get orders for a specific user
    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    // Get all orders (admin)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // ✅ Get total revenue (admin)
    public Double getTotalRevenue() {
        return orderRepository.getTotalRevenue();
    }

    // ✅ Get total orders placed this week (admin)
    public Long getWeeklyOrderCount() {
        LocalDateTime startOfWeek = LocalDate.now().with(java.time.DayOfWeek.MONDAY).atStartOfDay();
        LocalDateTime endOfWeek = LocalDate.now().with(java.time.DayOfWeek.SUNDAY).atTime(LocalTime.MAX);
        return orderRepository.countOrdersThisWeek(startOfWeek, endOfWeek);
    }

    public List<Object[]> getTopSellingProducts() {
        return orderRepository.findTopSellingProducts();
    }
    
}
