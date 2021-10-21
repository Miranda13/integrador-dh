package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.DTO.CategoryRoomDTO;
import nido.backnido.repository.CategoryRoomRepository;
import nido.backnido.service.CategoryRoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryRoomServiceImpl implements CategoryRoomService {

    @Autowired
    CategoryRoomRepository categoryRoomRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<CategoryRoomDTO> getAll() {

        List<CategoryRoomDTO> categoryHotelResponse = new ArrayList<>();

        for (CategoryRoom category : categoryRoomRepository.findAll()) {
            categoryHotelResponse.add(modelMapper.map(category, CategoryRoomDTO.class));
        }

        return categoryHotelResponse;

    }

    @Override
    public CategoryRoomDTO getById(Long id) {

        CategoryRoomDTO responseDTO = null;
        Optional<CategoryRoom> response = categoryRoomRepository.findById(id);

        if (response.isPresent()){
            responseDTO = modelMapper.map(response, CategoryRoomDTO.class);
        }

        return responseDTO;
    }

    @Override
    public void create(CategoryRoom newCategory) {
        if(newCategory != null){
            categoryRoomRepository.save(newCategory);
        }

    }

    @Override
    public void update(CategoryRoom updatedCategory) {
        if(updatedCategory != null){
            categoryRoomRepository.save(updatedCategory);
        }
    }

    @Override
    public void delete(Long id) {
        if(categoryRoomRepository.findById(id).isPresent()) {
            categoryRoomRepository.deleteById(id);
        }
    }

}
