package victor.colomina.anoll.perudo.game;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import victor.colomina.anoll.perudo.player.*;

@Entity
public class GameJPA {

    @Id
    private String name;

    @ManyToMany
    private List<PlayerJPA> players;

    public GameJPA() {
    }

    public GameJPA(String name, PlayerJPA player) {
        this.name = name;
        this.players = new ArrayList<>() {{
            add(player);
        }};
    }

    public void join(PlayerJPA playerJPA) {
        if (!players.contains(playerJPA))
            this.players.add(playerJPA);
    }

    public String getId() {
        return name;
    }

    public List<PlayerJPA> getPlayers() {
        return players;
    }

    @Override
    public String toString() {
        return "GameJPA{" +
                "name='" + name + '\'' +
                ", players=" + players +
                '}';
    }

}
