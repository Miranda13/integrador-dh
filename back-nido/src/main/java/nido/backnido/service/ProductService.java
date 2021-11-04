package nido.backnido.service;

import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;

import java.util.List;

public interface ProductService {
// TODO Implementar métodos de query custom -> Issue #26

    List<ProductDTO> getAll();
    ProductDTO getById(Long id);
    void create(Product newProduct);
    void update(Product updatedProduct);
    void delete(Long id);

}
