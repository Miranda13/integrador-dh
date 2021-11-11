package nido.backnido.service.implementations;

import nido.backnido.entity.Image;
import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ProductRepository;
import nido.backnido.service.ImageService;
import nido.backnido.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ImageService imageService;

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
        try{
            if (newProduct != null) {

                System.out.println(productRepository.save(newProduct).getProductId());

//                if(newProduct.getImages().size() != 0){
//
//                    for (Image image : newProduct.getImages()) {
//                        image.setProduct(productToSave);
//                        imageService.create(image);
//
//                    }
//                }

            }
        }catch(DataIntegrityViolationException exception) {
            throw new CustomBaseException("Error al crear producto, verifique si la información de las tablas relacionadas existe", HttpStatus.BAD_REQUEST.value());
        }catch (Exception e){
            throw new CustomBaseException("Error al crear producto, verifique la información", HttpStatus.BAD_REQUEST.value());
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

    @Override
    public List<ProductDTO> findProductByCategory(String title) {
        List<ProductDTO> productResponse = new ArrayList<>();

        for (Product product : productRepository.findProductByCategory(title)) {
            productResponse.add(modelMapper.map(product, ProductDTO.class));
        }

        return productResponse;
    }

    @Override
    public List<ProductDTO> findProductByCity(String city) {
        List<ProductDTO> productResponse = new ArrayList<>();

        for (Product product : productRepository.findProductByCity(city)) {
            productResponse.add(modelMapper.map(product, ProductDTO.class));
        }

        return productResponse;
    }
}
