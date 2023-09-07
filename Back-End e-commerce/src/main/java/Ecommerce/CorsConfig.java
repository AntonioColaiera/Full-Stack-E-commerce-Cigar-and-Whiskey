package Ecommerce;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000") // Imposta l'origine consentita (indirizzo del frontend)
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Imposta i metodi HTTP consentiti
            .allowCredentials(true); // Abilita il supporto alle credenziali (se necessario)
    }
}