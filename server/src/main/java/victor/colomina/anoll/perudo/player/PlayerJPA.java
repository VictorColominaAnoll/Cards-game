package victor.colomina.anoll.perudo.player;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class PlayerJPA {

    @Id
    private String name;

    public PlayerJPA() {
    }

    public PlayerJPA(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "PlayerJPA{" +
                "name='" + name + '\'' +
                '}';
    }
}
