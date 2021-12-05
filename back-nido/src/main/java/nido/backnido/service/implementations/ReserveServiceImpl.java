package nido.backnido.service.implementations;

import nido.backnido.entity.Reserve;
import nido.backnido.entity.dto.ReserveDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ProductRepository;
import nido.backnido.repository.ReserveRepository;
import nido.backnido.repository.ScoreRepository;
import nido.backnido.repository.UserRepository;
import nido.backnido.service.ImageService;
import nido.backnido.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    private ReserveRepository reserveRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    ScoreRepository scoreRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ImageService imageService;

    ModelMapper modelMapper = new ModelMapper();


    @Override
    public List<ReserveDTO> getAll() {
        // Response de entidades
        List<Reserve> entityResponse = reserveRepository.findAll();
        // Acá voy guardando los dto para devolverlos al front
        List<ReserveDTO> dtoResponse = new ArrayList<>();


        for (Reserve reserve : entityResponse) {
            // Variables que se re-definen y son necesarias para cada ciclo
            ReserveDTO reservedto = modelMapper.map(reserve, ReserveDTO.class);
            Long productId = reservedto.getProduct().getProductId();

            // Le paso al DTO los valores de la entidad
            reservedto.getProduct().setScore(productRepository.getById(productId).getScores());
            reservedto.getProduct().setImages(imageService.findByProductId(reserve.getProduct()));
            reservedto.getProduct().setAvgScore(scoreRepository.getAverageProductScore(productId));

            dtoResponse.add(reservedto);

        }

        return dtoResponse;

    }

    @Override
    public ReserveDTO getById(Long id) {
        Reserve response = reserveRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Reserva no encontrada, por favor compruebe", HttpStatus.NOT_FOUND.value())
        );

        ReserveDTO dtoRes = modelMapper.map(response, ReserveDTO.class);
        Long productId = dtoRes.getProduct().getProductId();

        dtoRes.getProduct().setScore(productRepository.getById(productId).getScores());
        dtoRes.getProduct().setImages(imageService.findByProductId(response.getProduct()));
        dtoRes.getProduct().setAvgScore(scoreRepository.getAverageProductScore(productId));

        return dtoRes;
    }

    @Override
    public List<ReserveDTO> findReservationsByProductId(Long productId) {
        List<ReserveDTO> reserveResponse = new ArrayList<>();

        for (Reserve reserve : reserveRepository.findReservationsByProductId(productId)) {
            reserveResponse.add(modelMapper.map(reserve, ReserveDTO.class));
        }

        return reserveResponse;
    }

    @Override
    public List<ReserveDTO> findReservationsByUserId(Long userId) {
        List<ReserveDTO> reserveResponse = new ArrayList<>();

        for (Reserve reserve : reserveRepository.findReservationsByUserId(userId)) {

//            reserve.getProduct();

            reserveResponse.add(modelMapper.map(reserve, ReserveDTO.class));

        }

        return reserveResponse;
    }

    @Override
    public void create(Reserve newReserve) {
        Optional<Reserve> queryResponse = reserveRepository.checkAvailability(newReserve.getDateIn(), newReserve.getDateOut(),newReserve.getProduct().getProductId());
        if (queryResponse.isEmpty()) {
            reserveRepository.save(newReserve);
        } else {
            throw new CustomBaseException("Ya existe una reserva en esas fechas, por favor ingrese una fecha disponible", HttpStatus.BAD_REQUEST.value());
        }

    }

    @Override
    public void update(Reserve updatedReserve) {
    }

    @Override
    public void delete(Long id) {
        reserveRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Reserva con el id: " + id + " no encontrada por favor compruebe el id e intente nuevamente ", HttpStatus.NOT_FOUND.value())
        );
        reserveRepository.softDelete(id);
    }

    @Override
    public void deleteAllByProductId(Long productId) {
        productRepository.findById(productId).orElseThrow(() ->
                new CustomBaseException("Producto con el id: " + productId + " no encontrado por favor compruebe el id e intente nuevamente", HttpStatus.NOT_FOUND.value())
        );
        reserveRepository.softDeleteAllByProductId(productId);
    }

    @Override
    public void deleteAllByUserId(Long userId) {
        userRepository.findById(userId).orElseThrow(() ->
                new CustomBaseException("Usuario con el id: " + userId + " no encontrado por favor compruebe el id e intente nuevamente", HttpStatus.NOT_FOUND.value())
        );
        reserveRepository.softDeleteAllByUserId(userId);
    }


}
