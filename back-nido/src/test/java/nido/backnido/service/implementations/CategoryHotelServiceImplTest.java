package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class CategoryHotelServiceImplTest {

    @Autowired
    CategoryHotelService categoryHotelService;

    @Autowired
    CategoryHotelRepository categoryHotelRepository;

    @BeforeAll
    public void setup() {

        categoryHotelService.create(new CategoryHotel("Default Title 1", "Default Description 1", 1L));
        categoryHotelService.create(new CategoryHotel("Default Title 2", "Default Description 2", 2L));

    }

//    @AfterAll
//    public void teardown(){
//
//        categoryHotelService.delete(1L);
//        categoryHotelService.delete(2L);
//
//    }

    @Test
    public void listAndRegisterTest() {

        List<CategoryHotelDTO> categoryRes = categoryHotelService.getAll();

        CategoryHotelDTO res1 = categoryRes.get(0);
        CategoryHotelDTO res2 = categoryRes.get(1);

        assertEquals("Default Title 1", res1.getTitle());
        assertEquals("Default Description 1", res1.getDescription());
        assertEquals(1, res1.getImagesImageId());

        assertEquals("Default Title 2", res2.getTitle());
        assertEquals("Default Description 2", res2.getDescription());
        assertEquals(2, res2.getImagesImageId());

    }

    @Test
    public void findCategoryByTitleTest() {

        List<CategoryHotelDTO> findRes = categoryHotelRepository.findByCategoryTitle("Default");

        assertEquals("Default Title 1", findRes.get(0).getTitle());
        assertEquals("Default Description 1", findRes.get(0).getDescription());
        assertEquals(1, findRes.get(0).getImagesImageId());

        assertEquals("Default Title 2", findRes.get(1).getTitle());
        assertEquals("Default Description 2", findRes.get(1).getDescription());
        assertEquals(2, findRes.get(1).getImagesImageId());

    }

}