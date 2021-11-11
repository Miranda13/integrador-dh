package nido.backnido;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@EnableEncryptableProperties
@SpringBootApplication
public class BackNidoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackNidoApplication.class, args);
	}

}
