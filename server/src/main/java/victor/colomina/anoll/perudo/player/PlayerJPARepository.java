package victor.colomina.anoll.perudo.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerJPARepository extends JpaRepository<PlayerJPA, String> {

}
