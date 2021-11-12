package nido.backnido.controller;

import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.ProductService;
import nido.backnido.utils.UtilsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


import java.util.List;

@RestController
@RequestMapping("api/v1/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> getAll(){

        return productService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO getById(@PathVariable Long id){
        return productService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid ProductDTO product, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(), UtilsException.fieldBindingErrors(bindingResult));
        }
        productService.create(product);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody @Valid Product product, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException ("Errores encontrados, por favor compruebe e intente nuevamente",HttpStatus.NOT_FOUND.value(),UtilsException.fieldBindingErrors(bindingResult));
        }
        productService.update(product);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        productService.delete(id);
    }
    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findProductByCity(@RequestParam String city){
        return productService.findProductByCity(city);
    }
    @GetMapping("/category")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findProductByCategory(@RequestParam("name") String category){
    	return productService.findProductByCategory(category);
    }
}
