package nido.backnido.controller;

import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.dto.CategoryRoomDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.CategoryRoomService;
import nido.backnido.utils.UtilsException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/categoryroom")
public class CategoryRoomController {

    private final CategoryRoomService categoryRoomService;

    public CategoryRoomController(CategoryRoomService categoryRoomService) {
        this.categoryRoomService = categoryRoomService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryRoomDTO> getAll(){
        return categoryRoomService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoryRoomDTO getById(@PathVariable Long id){
        return categoryRoomService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createCategory(@RequestBody @Valid CategoryRoom categoryRoom, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(), UtilsException.fieldBindingErrors(bindingResult));
        }
        categoryRoomService.create(categoryRoom);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody @Valid CategoryRoom categoryRoom, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException ("Errores encontrados, por favor compruebe e intente nuevamente",HttpStatus.BAD_REQUEST.value(),UtilsException.fieldBindingErrors(bindingResult));
        }
        categoryRoomService.update(categoryRoom);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        categoryRoomService.delete(id);
    }
}
