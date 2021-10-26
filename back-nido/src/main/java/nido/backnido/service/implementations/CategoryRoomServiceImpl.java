package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.DTO.CategoryRoomDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.CategoryRoomRepository;
import nido.backnido.service.CategoryRoomService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        CategoryRoom response = categoryRoomRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        return modelMapper.map(response, CategoryRoomDTO.class);
    }

    @Override
    public void create(CategoryRoom newCategory) {
        if(newCategory != null){
            categoryRoomRepository.save(newCategory);
        }

    }

    @Override
    public void update(CategoryRoom updatedCategory) {
        if(updatedCategory.getCategoryRoomId() != null){
            categoryRoomRepository.findById(updatedCategory.getCategoryRoomId()).orElseThrow(()->
                    new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
            );
        }else{
            throw  new CustomBaseException("El id de la categoria no puede estar vacio, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        categoryRoomRepository.save(updatedCategory);
    }

    @Override
    public void delete(Long id) {
        categoryRoomRepository.findById(id).orElseThrow(()->
                new CustomBaseException("Categoria con el id: "+ id + " no encontrada por favor compruebe el id e intente nuevamente ",HttpStatus.BAD_REQUEST.value())
        );
        categoryRoomRepository.deleteById(id);
    }

}
