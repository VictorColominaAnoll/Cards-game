package victor.colomina.anoll.perudo.game;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import victor.colomina.anoll.perudo.player.PlayerJPA;
import victor.colomina.anoll.perudo.player.PlayerJPARepository;

import java.util.List;

@RestController
@CrossOrigin
public class GameController {

    private final GameJPARepository gameJPARepository;
    private final PlayerJPARepository playerJPARepository;

    public GameController(GameJPARepository gameJPARepository, PlayerJPARepository playerJPARepository) {
        this.gameJPARepository = gameJPARepository;
        this.playerJPARepository = playerJPARepository;
    }

    @GetMapping("/api/game")
    private List<GameJPA> findAll() {
        return gameJPARepository.findAll();
    }

    @PostMapping("/api/game")
    @ResponseStatus(HttpStatus.CREATED)
    private void create(@RequestParam String name, @RequestParam String player) {
        PlayerJPA playerJPA = playerJPARepository.findById(player).orElse(null);

        gameJPARepository.save(new GameJPA(name, playerJPA));
    }

    @PutMapping("/api/game")
    @ResponseStatus(HttpStatus.ACCEPTED)
    private void join(@RequestParam String name, @RequestParam String player) {
        GameJPA game = gameJPARepository.findById(name).orElse(null);
        PlayerJPA playerJPA = playerJPARepository.findById(player).orElse(null);
        game.join(playerJPA);
        gameJPARepository.save(game);
    }

}
