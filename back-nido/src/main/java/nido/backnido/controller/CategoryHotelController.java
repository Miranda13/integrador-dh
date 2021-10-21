package nido.backnido.controller;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.DTO.CategoryHotelDTO;
import nido.backnido.service.CategoryHotelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createCategory(@RequestBody CategoryHotel categoryHotel){
        categoryHotelService.create(categoryHotel);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody CategoryHotel categoryHotel){
        categoryHotelService.update(categoryHotel);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        categoryHotelService.delete(id);
    }

}
