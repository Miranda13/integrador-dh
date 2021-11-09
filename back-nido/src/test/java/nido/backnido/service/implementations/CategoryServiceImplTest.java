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

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class CategoryServiceImplTest {

    @Autowired
    CategoryService categoryService;

    @BeforeAll
    public void setup() {

        categoryService.create(new Category("Default Title 1", "Default Description 1", "imgur.com/sample"));
        categoryService.create(new Category("Default Title 2", "Default Description 2", "imgur.com/sample"));

    }

    @AfterAll
    public void teardown(){

        categoryService.deleteByCategoryTitle("Updated");
        categoryService.deleteByCategoryTitle("Default");

    }

    @Test
    public void findCategoryByTitleTest() {

        List<CategoryDTO> findRes = categoryService.findByCategoryTitle("Default");
        assertEquals(2, findRes.size());
        assertEquals(CategoryDTO.class, findRes.get(0).getClass());
    }

    @Test
    public void listAllTest() {
        List<CategoryDTO> categoryRes = categoryService.getAll();

        assertEquals(2, categoryRes.size());
    }
}