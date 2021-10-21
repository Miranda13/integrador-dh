package nido.backnido.service;

import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.DTO.CategoryRoomDTO;

import java.util.List;

public interface CategoryRoomService {

    List<CategoryRoomDTO> getAll();
    CategoryRoomDTO getById(Long id);
    void create(CategoryRoom newCategory);
    void update(CategoryRoom updatedCategory);
    void delete(Long id);

}
