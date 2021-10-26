package nido.backnido.service.implementations;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.DTO.CategoryHotelDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        CategoryHotel response = categoryHotelRepository.findById(id).orElseThrow(()->
         new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        return modelMapper.map(response, CategoryHotelDTO.class);
    }

    @Override
    public void create(CategoryHotel newCategory) {
        if(newCategory != null){
            categoryHotelRepository.save(newCategory);
        }

    }

    @Override
    public void update(CategoryHotel updatedCategory) {
        if(updatedCategory.getCategoryHotelId() != null){
            categoryHotelRepository.findById(updatedCategory.getCategoryHotelId()).orElseThrow(()->
                    new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
         );
        }else{
           throw  new CustomBaseException("El id de la categoria no puede estar vacio, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        categoryHotelRepository.save(updatedCategory);
    }

    @Override
    public void delete(Long id) {
        categoryHotelRepository.findById(id).orElseThrow(()->
            new CustomBaseException("Categoria con el id: "+ id + " no encontrada por favor compruebe el id e intente nuevamente ",HttpStatus.BAD_REQUEST.value())
        );
        categoryHotelRepository.deleteById(id);
    }

    @Override
    public void deleteByCategoryTitle(String title) {
        if(title != null) {
            categoryHotelRepository.deleteByCategoryTitle(title);
        }

    }

    @Override
    public List<CategoryHotelDTO> findByCategoryTitle(String title) {

        List<CategoryHotelDTO> dtoResponse = new ArrayList<>();

        for (CategoryHotel category : categoryHotelRepository.findByCategoryTitle(title)) {
            dtoResponse.add(modelMapper.map(category, CategoryHotelDTO.class));
        }

        return dtoResponse;
    }
}
