package nido.backnido.service;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;

import java.util.List;

public interface CategoryHotelService {

    List<CategoryHotelDTO> getAll();
    CategoryHotelDTO getById(Long id);
    void create(CategoryHotel newCategory);
    void update(CategoryHotel updatedCategory);
    void delete(Long id);

}
