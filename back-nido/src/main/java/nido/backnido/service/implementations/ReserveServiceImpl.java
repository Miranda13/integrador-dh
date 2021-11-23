package nido.backnido.service.implementations;

import nido.backnido.entity.Reserve;
import nido.backnido.entity.dto.ReserveDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.ReserveRepository;
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

    ModelMapper modelMapper = new ModelMapper();


    @Override
    public List<ReserveDTO> getAll() {
        List<ReserveDTO> reserveResponse = new ArrayList<>();

        for (Reserve reserve : reserveRepository.findAll()) {
            reserveResponse.add(modelMapper.map(reserve, ReserveDTO.class));
        }

        return reserveResponse;

    }

    @Override
    public ReserveDTO getById(Long id) {
        Reserve response = reserveRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Reserva no encontrada, por favor compruebe", HttpStatus.NOT_FOUND.value())
        );
        return modelMapper.map(response, ReserveDTO.class);
    }

//    @Override
//    public List<ReserveDTO> findReservationsByProductId(Long productId) {
//        List<ReserveDTO> reserveResponse = new ArrayList<>();
//
//        for (Reserve reserve : reserveRepository.findReservationsByProductId(productId)) {
//            reserveResponse.add(modelMapper.map(reserve, ReserveDTO.class));
//        }
//
//        return reserveResponse;
//    }
//
//    @Override
//    public void create(Reserve newReserve) {
//
//        Optional<Reserve> queryResponse = reserveRepository.checkAvailability(newReserve.getDateIn(), newReserve.getDateOut());
//
//        if (queryResponse.isEmpty()) {
//            reserveRepository.save(newReserve);
//        }
//
//        throw new CustomBaseException("Ya existe una reserva en esas fechas, por favor ingrese una fecha disponible", HttpStatus.BAD_REQUEST.value());
//    }

    @Override
    public void update(Reserve updatedReserve) {
    }

    @Override
    public void delete(Long id) {
        reserveRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Reserva con el id: " + id + " no encontrada por favor compruebe el id e intente nuevamente ", HttpStatus.NOT_FOUND.value())
        );
        reserveRepository.deleteById(id);
    }
}
