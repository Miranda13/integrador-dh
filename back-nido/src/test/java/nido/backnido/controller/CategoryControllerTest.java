package nido.backnido.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nido.backnido.entity.Category;
import nido.backnido.repository.CategoryRepository;
import nido.backnido.service.CategoryService;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = CategoryController.class)
@ActiveProfiles("test")
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryService categoryService;

    @MockBean
    private CategoryRepository categoryRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Test // BACK-CONTROLLER NID-005
    public void createCategoryValidationReturnsStatus201Test() throws Exception {

        mockMvc.perform(post("http://localhost:8080/api/v1/category")
                .content(objectMapper.writeValueAsString(buildValidCategory()))
                .contentType("application/json"))
                .andExpect(status().isCreated());

    }

    @Test // BACK-CONTROLLER NID-006
    public void createCategoryValidationReturnsStatus400Test() throws Exception {

        mockMvc.perform(post("http://localhost:8080/api/v1/category")
                .content(objectMapper.writeValueAsString(buildInvalidCategory()))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());

    }

    @Test // BACK-CONTROLLER NID-007
    public void listAllReturnsStatus200Test() throws Exception {

        List<Category> expectedResponse = new ArrayList<>();
        expectedResponse.add(buildValidCategory());

        BDDMockito.given(categoryRepository.findAll()).willReturn(expectedResponse);

        mockMvc.perform(get("http://localhost:8080/api/v1/category"))
                .andExpect(status().isOk());
    }

    @Test // BACK-CONTROLLER NID-008
    public void validContentUpdateReturnsStatus200Test() throws Exception {

        Category expectedResponse = buildValidCategory();
        expectedResponse.setCategoryId(1L);

        mockMvc.perform(put("http://localhost:8080/api/v1/category")
                .content(objectMapper.writeValueAsString(expectedResponse))
                .contentType("application/json"))
                .andExpect(status().isOk());

    }

    @Test // BACK-CONTROLLER NID-009
    public void invalidContentUpdateReturnsStatus400Test() throws Exception {

        Category expectedResponse = buildInvalidCategory();
        expectedResponse.setCategoryId(1L);

        mockMvc.perform(put("http://localhost:8080/api/v1/category")
                .content(objectMapper.writeValueAsString(expectedResponse))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());

    }

    @Test // BACK-CONTROLLER NID-010
    public void deleteCategoryByIdReturnsStatus204Test() throws Exception {

        mockMvc.perform(delete("http://localhost:8080/api/v1/category/1")
                .contentType("application/json"))
                .andExpect(status().isNoContent());

    }

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