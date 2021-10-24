package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class CategoryHotelServiceImplTest {

    @Autowired
    CategoryHotelService categoryHotelService;

    @BeforeAll
    public void setup() {

        categoryHotelService.create(new CategoryHotel("Default Title 1", "Default Description 1", 1L));
        categoryHotelService.create(new CategoryHotel("Default Title 2", "Default Description 2", 2L));

    }

    @AfterAll
    public void teardown(){

        categoryHotelService.deleteByCategoryTitle("Updated");
        categoryHotelService.deleteByCategoryTitle("Default");

    }

    @Test
    public void findCategoryByTitleTest() {

        List<CategoryHotelDTO> findRes = categoryHotelService.findByCategoryTitle("Default");
        assertEquals(2, findRes.size());
        assertEquals(CategoryHotelDTO.class, findRes.get(0).getClass());
    }

    @Test
    public void listAllTest() {
        List<CategoryHotelDTO> categoryRes = categoryHotelService.getAll();

        assertEquals(2, categoryRes.size());
    }

//    @Test
//    public void getByIdTest() {
//
//        assertEquals(CategoryHotelDTO.class, categoryHotelService.getById(1L).getClass());
//
//    }
}