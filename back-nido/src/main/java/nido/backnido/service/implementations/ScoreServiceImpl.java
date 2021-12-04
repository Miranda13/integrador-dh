package nido.backnido.service.implementations;

import nido.backnido.entity.Product;
import nido.backnido.entity.Score;
import nido.backnido.entity.User;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.entity.dto.ScoreDTO;
import nido.backnido.entity.dto.UserDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ScoreRepository;
import nido.backnido.service.ProductService;
import nido.backnido.service.ScoreService;
import nido.backnido.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    ScoreRepository scoreRepository;
    @Autowired
    ProductService productService;
    @Autowired
    UserService userService;
    
    @Override
    public void create(Score score) {
    	List<Score> scores = scoreRepository.findAll();
    	
    	for(Score s : scores) {
    		if(s.getProduct().getProductId() == score.getProduct().getProductId() && s.getUser().getUserId() == score.getUser().getUserId()) {
    			score.setScoreId(s.getScoreId());
    			scoreRepository.save(score);
    		}
    	}
    	if (score != null && score.getScoreId() == null) {
            scoreRepository.save(score);
        }
        
    }

    @Override
    public void update(Score score) {
        if(score.getScoreId() != null) {
            scoreRepository.findById(score.getScoreId()).orElseThrow( () ->
                    new CustomBaseException("Puntuación no encontrada, por favor compruebe", HttpStatus.NOT_FOUND.value()));
        } else {
            throw new CustomBaseException("El id de la puntuación no puede estar vacío, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        scoreRepository.save(score);
    }

    @Override
    public void delete(Long id) {
        scoreRepository.findById(id).orElseThrow( () ->
                new CustomBaseException("Puntuación con el id: " + id + " no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value()));
        scoreRepository.deleteById(id);
    }

    @Override
    public double getAverageProductScore(Long productId) {
        try {
            return scoreRepository.getAverageProductScore(productId);
        }catch (AopInvocationException e){
            throw new CustomBaseException("Error el producto no tiene puntuaciones", HttpStatus.BAD_REQUEST.value());
        }catch (Exception exception){
            throw new CustomBaseException("Error al buscar producto, verifique la información", HttpStatus.BAD_REQUEST.value());
        }
    }

	@Override
	public List<Score> getScoreByProductId(Long productId) {
		return scoreRepository.findByProduct_ProductId(productId);
	}
}
