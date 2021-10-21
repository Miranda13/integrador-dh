package nido.backnido.controller;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.CategoryRoom;
import nido.backnido.entity.DTO.CategoryHotelDTO;
import nido.backnido.entity.DTO.CategoryRoomDTO;
import nido.backnido.service.CategoryHotelService;
import nido.backnido.service.CategoryRoomService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    public void createCategory(@RequestBody CategoryRoom categoryRoom){
        categoryRoomService.create(categoryRoom);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody CategoryRoom categoryRoom){
        categoryRoomService.update(categoryRoom);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        categoryRoomService.delete(id);
    }
}
