package nido.backnido.repository;

import nido.backnido.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//    @Query("FROM Category c WHERE c.title LIKE CONCAT('%',:title,'%')")
//    List<Product> findProductByCategory(@Param("title")String title);

}


/* TODO Implementar métodos de query custom -> Issue #26 */
// Listar productos según categoría, es decir, nos deberá devolver los productos que pertenezcan a cierta categoría.
// Listar productos según ciudad, es decir, nos deberá devolver los productos que pertenezcan a cierta ciudad