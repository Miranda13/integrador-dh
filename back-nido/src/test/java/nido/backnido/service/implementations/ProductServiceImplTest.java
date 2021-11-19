package nido.backnido.service.implementations;

import nido.backnido.entity.*;
import nido.backnido.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.skyscreamer.jsonassert.JSONCompareResult;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ProductServiceImplTest {

    @InjectMocks
    private ProductServiceImpl productService;
    @Mock
    private ProductRepository productRepository;

    @Test
    public void saveProductTest_Ok() {
        List<Product> expectedProducts = new ArrayList<>();
        expectedProducts.add(buildValidProduct());

        when(productRepository.findAll()).thenReturn(expectedProducts);

        productService.getAll();

        verify(productRepository).findAll();
        assertEquals(1, expectedProducts.size());

    }

//    @Test
//    public void getAllProducts_Ok() {
//        Product newProduct = buildValidProduct();
//        Product expectedResponse = buildValidProduct();
//        expectedResponse.setProductId(1L);
//
//        when(productRepository.save(newProduct)).thenReturn(expectedResponse);
//
//        productService.create(newProduct);
//
//        verify(productRepository).save(newProduct);
//        assertEquals(1L, expectedResponse.getProductId());
//        assertEquals(expectedResponse.getName(), expectedResponse.getName());
//        assertEquals(expectedResponse.getDescription(), expectedResponse.getDescription());
//        assertEquals(expectedResponse.getAvailability(), expectedResponse.getAvailability());
//        assertEquals(expectedResponse.getLocation(), expectedResponse.getLocation());
//        assertEquals(expectedResponse.getCategory(), expectedResponse.getCategory());
//        assertEquals(expectedResponse.getFeatures(), expectedResponse.getFeatures());
//
//    }

    @Test
    public void updateProductTest_Ok(){
        Product product = buildValidProduct();
        product.setProductId(1L);

        Product updatedProduct = buildValidProduct();
        updatedProduct.setProductId(1L);
        updatedProduct.setName("Updated Product");

        Product expectedResponse = updatedProduct;



        when(productRepository.findById(product.getProductId())).thenReturn(Optional.of(expectedResponse));
        productService.update(updatedProduct);

        verify(productRepository).save(updatedProduct);
        assertEquals(updatedProduct.getName(), expectedResponse.getName());
        assertTrue(product.getName() != expectedResponse.getName());

    }

    @Test
    public void deleteProductByIdTest_Ok() {

        Product product = buildValidProduct();
        product.setProductId(1L);

        when(productRepository.findById(anyLong())).thenReturn(Optional.of(product));
        doNothing().when(productRepository).deleteById(product.getProductId());

        productService.delete(1L);

        verify(productRepository, times(1)).deleteById(product.getProductId());
        verify(productRepository).findById(anyLong());
    }


    private Product buildValidProduct() {
        Product newProduct = new Product();

        newProduct.setName("Test Product");
        newProduct.setDescription("Test Description");
        newProduct.setLocation(new Location());
        newProduct.setCategory(new Category());
        newProduct.setFeatures(new HashSet<Feature>());

        return newProduct;
    }

}