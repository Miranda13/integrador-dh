package nido.backnido.service;

import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.entity.dto.CategoryRoomDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRoomService {

    List<CategoryRoomDTO> getAll();
    CategoryRoomDTO getById(Long id);
    void create(CategoryRoom newCategory);
    void update(CategoryRoom updatedCategory);
    void delete(Long id);
}
