package nido.backnido.service.implementations;

import nido.backnido.entity.Category;
import nido.backnido.entity.Product;
import nido.backnido.repository.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class CategoryServiceImplTest {

    @InjectMocks
    private CategoryServiceImpl categoryService;
    @Mock
    private CategoryRepository categoryRepository;

    @Test
    public void saveCategoryTest_Ok(){
        Set<Product> product = new HashSet<>();
        Category category = new Category(null,"Title category test", "Description category test", "Image category test", product);
        Category categoryResponse = new Category(1L,"Title category test", "Description category test", "Image category test", product);

        when(categoryRepository.save(category)).thenReturn(categoryResponse);

        categoryService.create(category);

        verify(categoryRepository).save(category);
        assertEquals(category.getTitle(),categoryResponse.getTitle());
        assertEquals(1L, categoryResponse.getCategoryId());
    }

    @Test
    public void saveCategoryTest_Null(){
        when(categoryRepository.save(any())).thenReturn(null);
        categoryService.create(null);
        verify(categoryRepository, times(0)).save(any());
    }
}