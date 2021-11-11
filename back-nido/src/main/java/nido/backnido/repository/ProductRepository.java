package nido.backnido.repository;

import nido.backnido.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "Select p.* FROM Product p INNER JOIN Category c WHERE c.title LIKE CONCAT('%',:title,'%');", nativeQuery = true)
    List<Product> findProductByCategory(@Param("title")String title);

    @Query(value= "Select p.* FROM Product p INNER JOIN Location l WHERE l.city LIKE CONCAT('%',:city,'%');", nativeQuery = true)
    List<Product> findProductByCity(@Param("city")String city);
    
}