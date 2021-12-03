package nido.backnido.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import nido.backnido.entity.Product;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.ProductService;
import nido.backnido.service.ReserveService;
import nido.backnido.utils.UtilsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;


import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/v1/product")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;
    private final ReserveService reserveService;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
        this.reserveService = reserveService;
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

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestParam("body") String product, @RequestPart(value= "file") final List<MultipartFile> files) throws JsonProcessingException {
        ProductDTO productDTO = objectMapper.readValue(product, ProductDTO.class);
        productService.create(productDTO, files);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody @Valid Product product, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            throw new CustomBindingException ("Errores encontrados, por favor compruebe e intente nuevamente",HttpStatus.NOT_FOUND.value(),UtilsException.fieldBindingErrors(bindingResult));
        }
        productService.update(product);
    }

    @PutMapping("delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        reserveService.deleteAllByProductId(id);
        productService.delete(id);
    }

    @GetMapping("/search/{city}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findProductByCity(@PathVariable String city){
        return productService.findProductByCity(city);
    }
    @GetMapping("/category")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findProductByCategory(@RequestParam("name") String category){
    	return productService.findProductByCategory(category);
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> filterProductsByLocationAndDate(@RequestParam("city") String city, @RequestParam("dateIn") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateIn, @RequestParam("dateOut") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateOut){
     return productService.filterProductsByLocationAndDate(city, dateIn, dateOut);
    }
}
