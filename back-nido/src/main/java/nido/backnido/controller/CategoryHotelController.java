package nido.backnido.controller;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.CategoryHotelService;
import nido.backnido.utils.UtilsException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/categoryhotel")
public class CategoryHotelController {

    private final CategoryHotelService categoryHotelService;

    public CategoryHotelController(CategoryHotelService categoryHotelService) {
        this.categoryHotelService = categoryHotelService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryHotelDTO> getAll(){
        return categoryHotelService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryHotelDTO getById(@PathVariable Long id){
        return categoryHotelService.getById(id);
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryHotelDTO> getByTitle(@RequestParam String title){
        return categoryHotelService.findByCategoryTitle(title);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createCategory(@RequestBody @Valid  CategoryHotel categoryHotel, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(),UtilsException.fieldBindingErrors(bindingResult));
        }
        categoryHotelService.create(categoryHotel);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody @Valid CategoryHotel categoryHotel, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException ("Errores encontrados, por favor compruebe e intente nuevamente",HttpStatus.NOT_FOUND.value(),UtilsException.fieldBindingErrors(bindingResult));
        }
        categoryHotelService.update(categoryHotel);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        categoryHotelService.delete(id);
    }

}
