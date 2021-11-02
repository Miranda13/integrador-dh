package nido.backnido.service;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CategoryHotelService {

    List<CategoryHotelDTO> getAll();
    CategoryHotelDTO getById(Long id);
    List<CategoryHotelDTO> findByCategoryTitle(String title);
    void create(CategoryHotel newCategory);
    void update(CategoryHotel updatedCategory);
    void delete(Long id);
    void deleteByCategoryTitle(String title);

}
