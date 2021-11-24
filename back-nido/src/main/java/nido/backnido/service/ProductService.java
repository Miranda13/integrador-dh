package nido.backnido.service;

import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ProductService {

    List<ProductDTO> getAll();
    ProductDTO getById(Long id);
    void create(ProductDTO newProduct);
    void update(Product updatedProduct);
    void delete(Long id);
    List<ProductDTO> findProductByCategory(@Param("title")String title);
    List<ProductDTO> findProductByCity(String city);
    List<ProductDTO> filterProductsByLocationAndDate(String city, LocalDate dateIn, LocalDate dateOut);
}
