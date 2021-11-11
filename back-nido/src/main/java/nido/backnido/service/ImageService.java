package nido.backnido.service;

import nido.backnido.entity.Image;
import nido.backnido.entity.dto.ImageDTO;

import java.util.List;

public interface ImageService {

    List<ImageDTO> getAll();
    ImageDTO getById(Long id);
    void create(Image newImage);
    void update(Image updatedImage);
    void delete(Long id);

}
