package nido.backnido.service.implementations;

import nido.backnido.entity.Category;
import nido.backnido.entity.Product;
import nido.backnido.entity.dto.CategoryDTO;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ProductRepository;
import nido.backnido.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductSeviceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<ProductDTO> getAll() {
        List<ProductDTO> productResponse = new ArrayList<>();

        for (Product product : productRepository.findAll()) {
            productResponse.add(modelMapper.map(product, ProductDTO.class));
        }

        return productResponse;
    }

    @Override
    public ProductDTO getById(Long id) {
        Product response = productRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Producto no encontrado, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        return modelMapper.map(response, ProductDTO.class);
    }

    @Override
    public void create(Product newProduct) {
        if (newProduct != null) {
            productRepository.save(newProduct);
        }
    }

    @Override
    public void update(Product updatedProduct) {
        if (updatedProduct.getProductId() != null) {
            productRepository.findById(updatedProduct.getProductId()).orElseThrow(() ->
                    new CustomBaseException("Producto no encontrado, por favor compruebe", HttpStatus.NOT_FOUND.value())
            );
        } else {
            throw new CustomBaseException("El id del producto no puede estar vacío, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        productRepository.save(updatedProduct);
    }

    @Override
    public void delete(Long id) {
        productRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Producto con el id: " + id + " no encontrado por favor compruebe el id e intente nuevamente ", HttpStatus.BAD_REQUEST.value())
        );
        productRepository.deleteById(id);
    }
}
