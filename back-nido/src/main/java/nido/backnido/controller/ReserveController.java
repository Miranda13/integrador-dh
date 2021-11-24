package nido.backnido.controller;

import nido.backnido.entity.Reserve;
import nido.backnido.entity.dto.ReserveDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.ReserveService;
import nido.backnido.utils.UtilsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/reserve")
@CrossOrigin("*")public class ReserveController {

    @Autowired
    private ReserveService reserveService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ReserveDTO> getAll(){
        return reserveService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ReserveDTO getById(@PathVariable Long id){
        return reserveService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Secured("ROLE_USER")
    public void create(@RequestBody @Valid Reserve reserve, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(), UtilsException.fieldBindingErrors(bindingResult));
        }
        reserveService.create(reserve);
    }

    @GetMapping("product/{id}")
    @ResponseStatus(HttpStatus.OK)
    List<ReserveDTO> findReservationsByProductId(Long productId) {
        return reserveService.findReservationsByProductId(productId);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        reserveService.delete(id);
    }

}
