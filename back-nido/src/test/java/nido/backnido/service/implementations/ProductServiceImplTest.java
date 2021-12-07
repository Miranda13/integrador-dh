package nido.backnido.service.implementations;

import nido.backnido.entity.*;
import nido.backnido.entity.dto.FavoriteDTO;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.repository.ProductRepository;
import nido.backnido.service.ImageService;
import nido.backnido.service.ScoreService;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.skyscreamer.jsonassert.JSONCompareResult;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest
class ProductServiceImplTest {

    @InjectMocks
    private ProductServiceImpl productService;
    @Mock
    private ProductRepository productRepository;
    @MockBean
    private ImageService imageService;
    @MockBean
    ScoreService scoreService;

    final Location location = new Location();
    final Category category = new Category();
    final Set<Score> scores = new HashSet<>();
    final Set<Feature> features = new HashSet<>();

    @Test
    public void saveProductTest_Ok() {
        List<String> filesList = new ArrayList<>();
        final String URL_S3 = "https://bucketnido.s3.amazonaws.com/Products";
        Product product2 = new Product();
        List<MultipartFile> files = new ArrayList<>();


        Product product = new Product(1L, "name test", "description test", "subtitle test",
                "policy test", "rule test", "safety test", "adress test", 25.65, 35.88, location, category,imageService.findByProductId(product2), scores, features, true);

        Product productResponse = new Product(1L, "name test", "description test", "subtitle test",
                "policy test", "rule test", "safety test", "adress test", 25.65, 35.88, location, category,imageService.findByProductId(product), scores, features, true);

        filesList.forEach(file -> {
            Image image = new Image();
            image.setProduct(product);
            image.setTitle(file);
            image.setUrl(URL_S3.concat(file));
            imageService.create(image);

            ProductDTO product1 = new ProductDTO(1L, "name test", "description test", "subtitle test",
                    "policy test", "rule test", "safety test", "adress test", 25.65, 35.88, location, category,0.0,imageService.findByProductId(product), scores, features);


            when(productRepository.save(product)).thenReturn(productResponse);
            productService.create(product1, files);

            verify(productRepository).save(product);
            assertEquals(product.getName(),productResponse.getName());
            assertEquals(1L, productResponse.getProductId());
        });

    }

    @Test
    public void getAllProducts_Ok() {
        List<Product> productList = new ArrayList<>();

        for(Product product1: productRepository.findAll()) {
            ProductDTO productDTO = new ProductDTO(1L, "name test", "description test", "subtitle test",
                    "policy test", "rule test", "safety test", "adress test", 25.65, 35.88, location, category,0.0,imageService.findByProductId(product1), scores, features);
            productDTO.setScore(product1.getScores());
            productDTO.setImages(imageService.findByProductId(product1));
            productList.add(product1);
            when(productRepository.findAll()).thenReturn(productList);
            productService.getAll();
            verify(productRepository).findAll();
            assertEquals(1, productList.size());
        }

    }
//
//    @Test
//    public void updateProductTest_Ok(){
//        Product product = buildValidProduct();
//        product.setProductId(1L);
//
//        Product updatedProduct = buildValidProduct();
//        updatedProduct.setProductId(1L);
//        updatedProduct.setName("Updated Product");
//
//        Product expectedResponse = updatedProduct;
//
//
//
//        when(productRepository.findById(product.getProductId())).thenReturn(Optional.of(expectedResponse));
//        productService.update(updatedProduct);
//
//        verify(productRepository).save(updatedProduct);
//        assertEquals(updatedProduct.getName(), expectedResponse.getName());
//        assertTrue(product.getName() != expectedResponse.getName());
//
//    }
//
    @Test
    public void deleteProductByIdTest_Ok() {
        Product product2 = new Product();
        Product product = new Product(1L, "name test", "description test", "subtitle test",
                "policy test", "rule test", "safety test", "adress test", 25.65, 35.88, location, category,imageService.findByProductId(product2), scores, features, true);

        product.setProductId(1L);

        when(productRepository.findById(anyLong())).thenReturn(Optional.of(product));
        doNothing().when(productRepository).deleteById(product.getProductId());

        productService.delete(1L);

        verify(productRepository, times(1)).softDelete(product.getProductId());
        verify(productRepository).findById(anyLong());
    }

}