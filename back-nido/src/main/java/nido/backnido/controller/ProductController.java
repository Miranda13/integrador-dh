package nido.backnido.controller;

import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
        public List<ProductDTO> findProductByCategory(@RequestParam String title){
        return productService.findProductByCategory(title);
    }


    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findProductByCity(@RequestParam String city){
        return productService.findProductByCity(city);
    }

}
