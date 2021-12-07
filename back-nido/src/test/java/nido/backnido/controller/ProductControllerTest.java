package nido.backnido.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nido.backnido.entity.Category;
import nido.backnido.entity.Location;
import nido.backnido.entity.Product;
import nido.backnido.repository.ProductRepository;
import nido.backnido.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = ProductController.class)
@ActiveProfiles("test")
public class ProductControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private ProductService productService;
//
//    @MockBean
//    private ProductRepository productRepository;
//
//    @Autowired
//    ObjectMapper objectMapper;
//
//    @Test // BACK-CONTROLLER NID-019
//    public void createProductValidationReturnsStatus201Test() throws Exception {
//
//        mockMvc.perform(post("http://localhost:8080/api/v1/product")
//                .content(objectMapper.writeValueAsString(buildValidProduct()))
//                .contentType("application/json"))
//                .andExpect(status().isCreated());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-020
//    public void createProductValidationReturnsStatus400Test() throws Exception {
//
//        mockMvc.perform(post("http://localhost:8080/api/v1/product")
//                .content(objectMapper.writeValueAsString(buildInvalidProduct()))
//                .contentType("application/json"))
//                .andExpect(status().isBadRequest());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-021
//    public void getAllProductsReturnsStatus200Test() throws Exception {
//
//        mockMvc.perform(get("http://localhost:8080/api/v1/product")
//                .contentType("application/json"))
//                .andExpect(status().isOk());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-022
//    public void validContentUpdateReturnsStatus200Test() throws Exception {
//
//        Product expectedResponse = buildValidProduct();
//        expectedResponse.setProductId(1L);
//
//        mockMvc.perform(put("http://localhost:8080/api/v1/product")
//                .content(objectMapper.writeValueAsString(expectedResponse))
//                .contentType("application/json"))
//                .andExpect(status().isOk());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-023
//    public void invalidContentUpdateReturnsStatus400Test() throws Exception {
//
//        Product expectedResponse = buildValidProduct();
//        expectedResponse.setProductId(1L);
//
//        mockMvc.perform(put("http://localhost:8080/api/v1/product")
//                .content(objectMapper.writeValueAsString(buildInvalidProduct()))
//                .contentType("application/json"))
//                .andExpect(status().isBadRequest());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-024
//    public void deleteProductByIdReturnsStatus204Test() throws Exception {
//
//        mockMvc.perform(delete("http://localhost:8080/api/v1/product/1")
//                .contentType("application/json"))
//                .andExpect(status().isNoContent());
//
//    }
//
//    private Product buildValidProduct() {
//        Product newProduct = new Product();
//
//        newProduct.setName("Test Product");
//        newProduct.setDescription("Test Description");
//        newProduct.setLocation(new Location());
//        newProduct.setCategory(new Category());
//
//        return newProduct;
//    }
//
//    private Product buildInvalidProduct() {
//        return new Product();
//    }

}
