package nido.backnido.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nido.backnido.configuration.WebSecurityConfig;
import nido.backnido.entity.Category;
import nido.backnido.repository.CategoryRepository;
import nido.backnido.service.CategoryService;
import nido.backnido.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.annotation.Import;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@AutoConfigureMockMvc
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@WebMvcTest(CategoryController.class)
class CategoryControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private UserDetailsService userDetailsService;
//
//    private CategoryService categoryService;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Test // BACK-CONTROLLER NID-005
//    public void createCategoryValidationReturnsStatus201Test() throws Exception {
//
//        Category mockCategory = Category.builder().title("Test title").description("").urlImage("").build();
//
//        mockMvc.perform(post("/api/v1/category")
//                        .contentType("application/json")
//                        .content(objectMapper.writeValueAsString(buildValidCategory()))
//                )
//                .andDo(print())
//                .andExpect(status().isCreated())
//                .andReturn();
//    }
//
//
//    @Test // BACK-CONTROLLER NID-006
//    public void createCategoryValidationReturnsStatus400Test() throws Exception {
//        mockMvc.perform(post("/api/v1/category")
//                        .content(objectMapper.writeValueAsString(buildInvalidCategory()))
//                        .contentType("application/json"))
//                .andExpect(status().isBadRequest());
//    }
//
//    @Test // BACK-CONTROLLER NID-007
//    public void listAllReturnsStatus200Test() throws Exception {
//        mockMvc.perform(get("/api/v1/category"))
//                .andExpect(status().isOk());
//    }
//
//    @Test // BACK-CONTROLLER NID-008
//    public void validContentUpdateReturnsStatus200Test() throws Exception {
//
//        Category expectedResponse = buildValidCategory();
//        expectedResponse.setCategoryId(1L);
//
//        mockMvc.perform(put("/api/v1/category")
//                        .contentType("application/json")
//                        .content(objectMapper.writeValueAsString(expectedResponse))
//                )
//                .andDo(print())
//                .andExpect(status().isOk())
//                .andReturn();
//
//    }

    //
//    @Test // BACK-CONTROLLER NID-009
//    public void invalidContentUpdateReturnsStatus400Test() throws Exception {
//
//        Category expectedResponse = buildInvalidCategory();
//        expectedResponse.setCategoryId(1L);
//
//        mockMvc.perform(put("http://localhost:8080/api/v1/category")
//                .content(objectMapper.writeValueAsString(expectedResponse))
//                .contentType("application/json"))
//                .andExpect(status().isBadRequest());
//
//    }
//
//    @Test // BACK-CONTROLLER NID-010
//    public void deleteCategoryByIdReturnsStatus204Test() throws Exception {
//
//        mockMvc.perform(delete("http://localhost:8080/api/v1/category/1")
//                .contentType("application/json"))
//                .andExpect(status().isNoContent());
//
//    }
//
    private Category buildValidCategory() {
        Category newCategory = new Category();
        newCategory.setTitle("Familiar");
        newCategory.setDescription("Hotel familiar");
        newCategory.setUrlImage("imgur.com/sample");
        return newCategory;
    }

    private Category buildInvalidCategory() {
        Category newCategory = new Category();
        return newCategory;
    }

}