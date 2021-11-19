package nido.backnido.service.implementations;

import nido.backnido.entity.Role;
import nido.backnido.entity.User;
import nido.backnido.entity.dto.UserDTO;
import nido.backnido.exception.CustomBaseException;
import nido.backnido.repository.UserRepository;
import nido.backnido.service.RoleService;
import nido.backnido.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    RoleService roleService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<UserDTO> getAll() {
        List<UserDTO> userResponse = new ArrayList<>();

        for (User user : userRepository.findAll()) {
            UserDTO userdto = modelMapper.map(user, UserDTO.class);
            userResponse.add(userdto);
        }

        return userResponse;
    }

    @Override
    public UserDTO getById(Long id) {
        User response = userRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Usuario no encontrado, por favor compruebe", HttpStatus.BAD_REQUEST.value())
        );

        return modelMapper.map(response, UserDTO.class);

    }

    @Override
    public void create(User newUser) {
        if (newUser != null) {

            newUser.setPassword(bcryptEncoder.encode(newUser.getPassword()));

            Role role;

            if(newUser.getEmail().split("@")[1].equals("admin.nido")){
                role = roleService.findRoleByName("ADMIN");
            } else {
                role = roleService.findRoleByName("USER");
            }

            newUser.setRole(role);

            userRepository.save(newUser);
        }
    }

    @Override
    public void update(User updatedUser) {
        if (updatedUser.getUserId() != null) {
            userRepository.findById(updatedUser.getUserId()).orElseThrow(() ->
                    new CustomBaseException("Usuario no encontrado, por favor compruebe", HttpStatus.NOT_FOUND.value())
            );
        } else {
            throw new CustomBaseException("El id del usuario no puede estar vacio, por favor compruebe", HttpStatus.BAD_REQUEST.value());
        }
        userRepository.save(updatedUser);
    }

    @Override
    public void delete(Long id) {
        userRepository.findById(id).orElseThrow(() ->
                new CustomBaseException("Usuario con el id: " + id + " no encontrado por favor compruebe el id e intente nuevamente ", HttpStatus.NOT_FOUND.value())
        );
        userRepository.deleteById(id);
    }
}
