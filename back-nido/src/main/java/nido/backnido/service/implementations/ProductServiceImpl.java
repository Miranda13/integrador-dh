package nido.backnido.service.implementations;

import nido.backnido.entity.Image;
import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ProductRepository;
import nido.backnido.service.ImageService;
import nido.backnido.service.ProductService;
import nido.backnido.service.ScoreService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ImageService imageService;
    @Autowired
    ScoreService scoreService;
    
    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<ProductDTO> getAll() {
        List<ProductDTO> productResponse = new ArrayList<>();

        for (Product product : productRepository.findAll()) {
        	ProductDTO productdto = modelMapper.map(product, ProductDTO.class);
        	productdto.setScore(product.getScores());
        	if(scoreService.getScoreByProductId(productdto.getProductId()).size() != 0) {
        		productdto.setAvgScore(scoreService.getAverageProductScore(productdto.getProductId()));        		
        	}
        	productdto.setImages(imageService.findByProductId(product));
            productResponse.add(productdto);
        }

        return productResponse;
    }

    @Override
    public ProductDTO getById(Long id) {
        Product response = productRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Producto no encontrado, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        ProductDTO productdto = modelMapper.map(response, ProductDTO.class);
        productdto.setScore(response.getScores());
    	if(scoreService.getScoreByProductId(productdto.getProductId()).size() != 0) {
    		productdto.setAvgScore(scoreService.getAverageProductScore(productdto.getProductId()));        		
    	}
    	productdto.setImages(imageService.findByProductId(response));
        return productdto;
    }

    @Override
    public void create(ProductDTO newProduct) {
        try{
            if (newProduct != null) {
            	Product miProduct = modelMapper.map(newProduct,Product.class);
            	Product productCreate = productRepository.save(miProduct);
            	if(newProduct.getImages().size() != 0){
            		for (Image image : newProduct.getImages()) {
            			image.setProduct(productCreate);
            			imageService.create(image);
            		}
            	}
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
        ProductDTO productdto;
        for (Product product : productRepository.findByCategory_TitleContaining(title)) {
        	productdto = modelMapper.map(product, ProductDTO.class);
        	productdto.setScore(product.getScores());
        	if(scoreService.getScoreByProductId(productdto.getProductId()).size() != 0) {
        		productdto.setAvgScore(scoreService.getAverageProductScore(productdto.getProductId()));        		
        	}
        	productdto.setImages(imageService.findByProductId(product));
            productResponse.add(productdto);
        }

        return productResponse;
    }

    @Override
    public List<ProductDTO> findProductByCity(String city) {
        List<ProductDTO> productResponse = new ArrayList<>();
        ProductDTO productdto;
        for (Product product : productRepository.findProductByCity(city)) {
            productdto = modelMapper.map(product, ProductDTO.class);
            productdto.setScore(product.getScores());
        	if(scoreService.getScoreByProductId(productdto.getProductId()).size() != 0) {
        		productdto.setAvgScore(scoreService.getAverageProductScore(productdto.getProductId()));        		
        	}
            productdto.setImages(imageService.findByProductId(product));
            productResponse.add(productdto);
        }
        return productResponse;
    }

    @Override
    public List<ProductDTO> filterProductsByLocationAndDate(String city, LocalDate dateIn, LocalDate dateOut) {
//        return productRepository.filterProductsByLocationAndDate(city, dateIn, dateOut).stream()
//                .map(product -> new Product(product.getProductId(), product.getName(), product.getDescription(), product.getAddress(), product.getLatitude(),
//                        product.getLongitude(), product.getLocation(), product.getCategory(), product.getScores(), product.getFeatures()))
//                .collect(Collectors.toList());
        List<ProductDTO> productResponse = new ArrayList<>();
        ProductDTO productdto;
        for (Product product : productRepository.filterProductsByLocationAndDate(city, dateIn, dateOut)) {
            productdto = modelMapper.map(product, ProductDTO.class);
            productdto.setScore(product.getScores());
        	if(scoreService.getScoreByProductId(productdto.getProductId()).size() != 0) {
        		productdto.setAvgScore(scoreService.getAverageProductScore(productdto.getProductId()));        		
        	}
            productdto.setImages(imageService.findByProductId(product));
            productResponse.add(productdto);
        }
        return productResponse;
    }
}
