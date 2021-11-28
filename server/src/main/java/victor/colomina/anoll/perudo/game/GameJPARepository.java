package victor.colomina.anoll.perudo.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameJPARepository extends JpaRepository<GameJPA, String> {
}
