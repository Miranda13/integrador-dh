package nido.backnido;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"nido.backnido"})
public class BackNidoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackNidoApplication.class, args);
	}

}
