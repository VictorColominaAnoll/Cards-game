package victor.colomina.anoll.perudo.game;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import victor.colomina.anoll.perudo.player.*;

@Entity
public class GameJPA {

    @Id
    private String id;

    @ManyToMany
    private List<PlayerJPA> players;

    public GameJPA() {
    }

    public String getId() {
        return id;
    }

    public List<PlayerJPA> getPlayers() {
        return players;
    }
}
