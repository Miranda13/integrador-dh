package nido.backnido.service.implementations;

import nido.backnido.entity.Location;
import nido.backnido.entity.dto.LocationDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.LocationRepository;
import nido.backnido.service.LocationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    LocationRepository locationRepository;

    ModelMapper modelMapper = new ModelMapper();


    @Override
    public List<LocationDTO> getAll() {
        List<LocationDTO> locationResponse = new ArrayList<>();

        for (Location location : locationRepository.findAll()) {
            locationResponse.add(modelMapper.map(location, LocationDTO.class));
        }

        return locationResponse;
    }

    @Override
    public LocationDTO getById(Long id) {
        Location response = locationRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Locación no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );
        return modelMapper.map(response, LocationDTO.class);
    }

    @Override
    public void create(Location newLocation) {
        if (newLocation != null) {
            locationRepository.save(newLocation);
        }
    }

    @Override
    public void update(Location updatedLocation) {
        if(updatedLocation.getLocationId() != null) {
            locationRepository.findById(updatedLocation.getLocationId()).orElseThrow( () ->
                    new CustomBaseException("Locación no encontrada, por favor compruebe", HttpStatus.NOT_FOUND.value()));
        } else {
            throw new CustomBaseException("El id de la locación no puede estar vacío, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        locationRepository.save(updatedLocation);
    }

    @Override
    public void delete(Long id) {
        locationRepository.findById(id).orElseThrow( () ->
                new CustomBaseException("Locación con el id: " + id + " no encontrada, por favor compruebe", HttpStatus.BAD_REQUEST.value()));
        locationRepository.deleteById(id);
    }

    @Override
    public List<LocationDTO> getAllCities() {
        List<LocationDTO> locationResponse = new ArrayList<>();

        for (Location location : locationRepository.findAll()) {
            locationResponse.add(modelMapper.map(location, LocationDTO.class));
        }

        return locationResponse;
    }
}
