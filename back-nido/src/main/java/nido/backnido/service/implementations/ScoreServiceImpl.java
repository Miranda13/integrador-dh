package nido.backnido.service.implementations;

import nido.backnido.entity.Score;
import nido.backnido.entity.dto.ScoreDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ScoreRepository;
import nido.backnido.service.ScoreService;
import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    ScoreRepository scoreRepository;

    @Override
    public void create(Score score) {
        if (score != null) {
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
    public double getAverageProductScore(Long id) {
        try {
            return scoreRepository.getAverageProductScore(id);
        }catch (AopInvocationException e){
            throw new CustomBaseException("Error al buscar producto, verifique si el producto existe", HttpStatus.BAD_REQUEST.value());
        }catch (Exception exception){
            throw new CustomBaseException("Error al buscar producto, verifique la información", HttpStatus.BAD_REQUEST.value());
        }
    }
}
