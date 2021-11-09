package nido.backnido.service;

import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductService {

    List<ProductDTO> getAll();
    ProductDTO getById(Long id);
    void create(Product newProduct);
    void update(Product updatedProduct);
    void delete(Long id);
    List<ProductDTO> findProductByCategory(@Param("title")String title);
    List<ProductDTO> findProductByCity(@Param("city")String city);

}
