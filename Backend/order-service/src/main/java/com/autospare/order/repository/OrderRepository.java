package com.autospare.order.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.autospare.order.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUserId(Long userId);

    @Query("SELECT SUM(o.totalPrice) FROM Order o")
    Double getTotalRevenue();

    @Query("SELECT COUNT(o) FROM Order o WHERE o.orderDate >= :startOfWeek AND o.orderDate <= :endOfWeek")
    Long countOrdersThisWeek(@Param("startOfWeek") LocalDateTime startOfWeek, @Param("endOfWeek") LocalDateTime endOfWeek);

    @Query("SELECT o.productId, SUM(o.quantity) as totalQty " +
       "FROM Order o GROUP BY o.productId ORDER BY totalQty DESC")
List<Object[]> findTopSellingProducts();


}
