package com.autospare.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.autospare.product.repository")  // ✅ Fix for repository scanning
public class ProductServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }

    // ✅ OPTIONAL: Uncomment to seed sample data ONLY ON FIRST RUN
    // @Bean
    // CommandLineRunner seedProducts(ProductRepository productRepository) {
    //     return args -> {
    //         if (productRepository.count() == 0) {
    //             productRepository.saveAll(List.of(
    //                 new Product(null, "Engine Oil", "High-quality synthetic engine oil", 850, "/assets/engineoil.jpg", "Lubricants", 100),
    //                 new Product(null, "Coolant", "Premium coolant for optimal engine temp", 420, "/assets/coolant.jpg", "Lubricants", 120),
    //                 new Product(null, "Grease Spray", "Multi-purpose grease spray", 220, "/assets/grease.jpg", "Lubricants", 90),
    //                 new Product(null, "Brake Fluid", "High-performance brake fluid", 350, "/assets/brakefluid.jpg", "Lubricants", 80),
    //                 new Product(null, "WD-40", "Rust removal and lubricant", 280, "/assets/wd40.jpg", "Lubricants", 150),

    //                 new Product(null, "Brake Pads", "Ceramic brake pads", 1200, "/assets/brakepads.jpg", "Brakes", 60),
    //                 new Product(null, "Brake Discs", "Solid brake discs for front wheels", 1900, "/assets/brakedisc.jpg", "Brakes", 50),
    //                 new Product(null, "Brake Shoes", "Drum brake shoes", 1100, "/assets/brakeshoes.jpg", "Brakes", 70),
    //                 new Product(null, "ABS Sensor", "High sensitivity ABS sensor", 1500, "/assets/abs.jpg", "Brakes", 55),
    //                 new Product(null, "Brake Caliper", "Front brake caliper assembly", 2100, "/assets/caliper.jpg", "Brakes", 40),

    //                 new Product(null, "Car Battery", "12V sealed battery", 4500, "/assets/carbattery.jpg", "Electrical", 25),
    //                 new Product(null, "Headlight Bulb", "LED headlight bulb", 499, "/assets/bulb.jpg", "Electrical", 150),
    //                 new Product(null, "Horn", "Twin-tone loud horn", 999, "/assets/horn.jpg", "Electrical", 85),
    //                 new Product(null, "Alternator", "Heavy duty alternator", 3500, "/assets/alternator.jpg", "Electrical", 20),
    //                 new Product(null, "Wiring Kit", "Full wiring harness", 850, "/assets/wiring.jpg", "Electrical", 30),

    //                 new Product(null, "Air Filter", "Dust-resistant air filter", 650, "/assets/airfilter.jpg", "Filters", 90),
    //                 new Product(null, "Oil Filter", "Standard oil filter", 400, "/assets/oilfilter.jpg", "Filters", 110),
    //                 new Product(null, "Fuel Filter", "High-flow fuel filter", 550, "/assets/fuelfilter.jpg", "Filters", 95),
    //                 new Product(null, "Cabin Filter", "Anti-bacterial cabin filter", 300, "/assets/cabinfilter.jpg", "Filters", 140),
    //                 new Product(null, "Transmission Filter", "Auto transmission filter", 780, "/assets/transmissionfilter.jpg", "Filters", 35),

    //                 new Product(null, "Wiper Blade", "All-weather wiper blade", 299, "/assets/wiper.jpg", "Accessories", 100),
    //                 new Product(null, "Steering Cover", "Leather-textured steering cover", 399, "/assets/steering.jpg", "Accessories", 75),
    //                 new Product(null, "Car Mat", "Anti-slip car mat set", 699, "/assets/carmat.jpg", "Accessories", 60),
    //                 new Product(null, "Car Perfume", "Long-lasting car freshener", 249, "/assets/perfume.jpg", "Accessories", 150),
    //                 new Product(null, "Dash Cam", "HD dash cam with loop recording", 2100, "/assets/dashcam.jpg", "Accessories", 20)
    //             ));
    //             System.out.println("✅ Sample products inserted.");
    //         } else {
    //             System.out.println("ℹ️ Products already exist. Skipping seeding.");
    //         }
    //     };
    // }
}
