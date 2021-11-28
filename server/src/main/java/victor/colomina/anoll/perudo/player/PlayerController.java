package victor.colomina.anoll.perudo.player;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PlayerController {

    private final PlayerJPARepository playerJPARepository;

    public PlayerController(PlayerJPARepository playerJPARepository) {
        this.playerJPARepository = playerJPARepository;
    }

    @PostMapping("/api/player")
    @ResponseStatus(HttpStatus.CREATED)
    private void createPlayer(@RequestParam String name){
        playerJPARepository.save(new PlayerJPA(name));
        System.out.println(playerJPARepository.findAll());
    }
}
