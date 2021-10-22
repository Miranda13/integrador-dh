package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryHotelServiceImpl implements CategoryHotelService {

    @Autowired
    CategoryHotelRepository categoryHotelRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<CategoryHotelDTO> getAll() {

        List<CategoryHotelDTO> categoryHotelResponse = new ArrayList<>();

        for (CategoryHotel category : categoryHotelRepository.findAll()) {
            categoryHotelResponse.add(modelMapper.map(category, CategoryHotelDTO.class));
        }

        return categoryHotelResponse;

    }

    @Override
    public CategoryHotelDTO getById(Long id) {

        CategoryHotelDTO responseDTO = null;
        Optional<CategoryHotel> response = categoryHotelRepository.findById(id);

        if (response.isPresent()){
            responseDTO = modelMapper.map(response, CategoryHotelDTO.class);
        }

        return responseDTO;
    }

    @Override
    public void create(CategoryHotel newCategory) {
        if(newCategory != null){
            categoryHotelRepository.save(newCategory);
        }

    }

    @Override
    public void update(CategoryHotel updatedCategory) {
        if(updatedCategory != null){
            categoryHotelRepository.save(updatedCategory);
        }
    }

    @Override
    public void delete(Long id) {
        if(categoryHotelRepository.findById(id).isPresent()) {
            categoryHotelRepository.deleteById(id);
        }
    }
}
