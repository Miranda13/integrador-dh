package nido.backnido.service.implementations;

import nido.backnido.entity.Category;
import nido.backnido.entity.dto.CategoryDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryHotelServiceImpl implements CategoryHotelService {

    @Autowired
    CategoryHotelRepository categoryHotelRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<CategoryDTO> getAll() {

        List<CategoryDTO> categoryHotelResponse = new ArrayList<>();

        for (Category category : categoryHotelRepository.findAll()) {
            categoryHotelResponse.add(modelMapper.map(category, CategoryDTO.class));
        }

        return categoryHotelResponse;

    }

    @Override
    public CategoryDTO getById(Long id) {
        Category response = categoryHotelRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        return modelMapper.map(response, CategoryDTO.class);
    }

    @Override
    public void create(Category newCategory) {
        if (newCategory != null) {
            categoryHotelRepository.save(newCategory);
        }
    }

    @Override
    public void update(Category updatedCategory) throws CustomBaseException {
        if (updatedCategory.getCategoryId() != null) {
            categoryHotelRepository.findById(updatedCategory.getCategoryId()).orElseThrow(() ->
                    new CustomBaseException("Categoria no encontrada, por favor compruebe", HttpStatus.NOT_FOUND.value())
            );
        } else {
            throw new CustomBaseException("El id de la categoria no puede estar vacio, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        categoryHotelRepository.save(updatedCategory);
    }

    @Override
    public void delete(Long id) {
        categoryHotelRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Categoria con el id: " + id + " no encontrada por favor compruebe el id e intente nuevamente ", HttpStatus.BAD_REQUEST.value())
        );
        categoryHotelRepository.deleteById(id);
    }

    @Override
    public void deleteByCategoryTitle(String title) {
        if (title != null) {
            categoryHotelRepository.deleteByCategoryTitle(title);
        }

    }

    @Override
    public List<CategoryDTO> findByCategoryTitle(String title) {

        List<CategoryDTO> dtoResponse = new ArrayList<>();

        for (Category category : categoryHotelRepository.findByCategoryTitle(title)) {
            dtoResponse.add(modelMapper.map(category, CategoryDTO.class));
        }

        return dtoResponse;
    }
}
