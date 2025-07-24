package com.autospare.product;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.autospare.product.model.Product;
import com.autospare.product.repository.ProductRepository;

@SpringBootApplication
@EnableJpaRepositories("com.autospare.product.repository")
public class ProductServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }

    // ✅ Seeder enabled
    @Bean
    CommandLineRunner seedProducts(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                productRepository.saveAll(List.of(
                    new Product(null, "Engine Oil", "High-quality synthetic engine oil", 850, "engineoil.jpg", "Lubricants", 100),
                    new Product(null, "Coolant", "Premium coolant for optimal engine temp", 420, "coolant.jpg", "Lubricants", 120),
                    new Product(null, "Grease Spray", "Multi-purpose grease spray", 220, "grease.jpg", "Lubricants", 90),
                    new Product(null, "Brake Fluid", "High-performance brake fluid", 350, "brakefluid.jpg", "Lubricants", 80),
                    new Product(null, "WD-40", "Rust removal and lubricant", 280, "wd40.jpg", "Lubricants", 150),

                    new Product(null, "Brake Pads", "Ceramic brake pads", 1200, "brakepads.jpg", "Brakes", 60),
                    new Product(null, "Brake Discs", "Solid brake discs for front wheels", 1900, "brakedisc.jpg", "Brakes", 50),
                    new Product(null, "Brake Shoes", "Drum brake shoes", 1100, "brakeshoes.jpg", "Brakes", 70),
                    new Product(null, "ABS Sensor", "High sensitivity ABS sensor", 1500, "abs.jpg", "Brakes", 55),
                    new Product(null, "Brake Caliper", "Front brake caliper assembly", 2100, "caliper.jpg", "Brakes", 40),

                    new Product(null, "Car Battery", "12V sealed battery", 4500, "carbattery.jpg", "Electrical", 25),
                    new Product(null, "Headlight Bulb", "LED headlight bulb", 499, "bulb.jpg", "Electrical", 150),
                    new Product(null, "Horn", "Twin-tone loud horn", 999, "horn.jpg", "Electrical", 85),
                    new Product(null, "Alternator", "Heavy duty alternator", 3500, "alternator.jpg", "Electrical", 20),
                    new Product(null, "Wiring Kit", "Full wiring harness", 850, "wiring.jpg", "Electrical", 30),

                    new Product(null, "Air Filter", "Dust-resistant air filter", 650, "airfilter.jpg", "Filters", 90),
                    new Product(null, "Oil Filter", "Standard oil filter", 400, "oilfilter.jpg", "Filters", 110),
                    new Product(null, "Fuel Filter", "High-flow fuel filter", 550, "fuelfilter.jpg", "Filters", 95),
                    new Product(null, "Cabin Filter", "Anti-bacterial cabin filter", 300, "cabinfilter.jpg", "Filters", 140),
                    new Product(null, "Transmission Filter", "Auto transmission filter", 780, "transmissionfilter.jpg", "Filters", 35),

                    new Product(null, "Wiper Blade", "All-weather wiper blade", 299, "wiper.jpg", "Accessories", 100),
                    new Product(null, "Steering Cover", "Leather-textured steering cover", 399, "steering.jpg", "Accessories", 75),
                    new Product(null, "Car Mat", "Anti-slip car mat set", 699, "carmat.jpg", "Accessories", 60),
                    new Product(null, "Car Perfume", "Long-lasting car freshener", 249, "perfume.jpg", "Accessories", 150),
                    new Product(null, "Dash Cam", "HD dash cam with loop recording", 2100, "dashcam.jpg", "Accessories", 20)
                ));
                System.out.println("✅ Sample products inserted.");
            } else {
                System.out.println("ℹ️ Products already exist. Skipping seeding.");
            }
        };
    }
}
