package nido.backnido.service.implementations;

import nido.backnido.entity.Category;
import nido.backnido.entity.dto.CategoryDTO;
import nido.backnido.service.CategoryService;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class CategoryServiceImplTest {

    @Autowired
    CategoryService categoryService;

    @Test
    public void findCategoryByTitleTest() {

        List<CategoryDTO> findRes = categoryService.findByCategoryTitle("Default");
        assertEquals(2, findRes.size());
        assertEquals(CategoryDTO.class, findRes.get(0).getClass());
    }

    @Test
    public void listAllTest() {
        List<CategoryDTO> categoryRes = categoryService.getAll();

        assertEquals(ArrayList.class, categoryRes.getClass());
    }
}