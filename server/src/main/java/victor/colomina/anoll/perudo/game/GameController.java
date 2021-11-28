package victor.colomina.anoll.perudo.game;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import victor.colomina.anoll.perudo.player.PlayerJPA;
import victor.colomina.anoll.perudo.player.PlayerJPARepository;

@RestController
@CrossOrigin
public class GameController {

    private final GameJPARepository gameJPARepository;
    private final PlayerJPARepository playerJPARepository;

    public GameController(GameJPARepository gameJPARepository, PlayerJPARepository playerJPARepository) {
        this.gameJPARepository = gameJPARepository;
        this.playerJPARepository = playerJPARepository;
    }

    @PostMapping("/api/game")
    @ResponseStatus(HttpStatus.CREATED)
    private void create(@RequestParam String name, @RequestParam String player) {
        PlayerJPA playerJPA = playerJPARepository.findById(player).orElse(null);

        gameJPARepository.save(new GameJPA(name, playerJPA));
    }

}
