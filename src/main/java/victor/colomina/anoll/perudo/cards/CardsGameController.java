package victor.colomina.anoll.perudo.cards;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/cards")
public class CardsGameController {

    private String[] contents = {"❤", "🐐", "⭐", "☁", "🎉", "⚽", "❤", "🐐", "⭐", "☁", "🎉", "⚽", "❤", "🐐", "⭐", "☁", "🎉", "⚽", "❤", "🐐", "⭐", "☁", "🎉", "⚽", "❤", "🐐", "⭐", "☁", "🎉", "⚽", "❤", "🐐", "⭐", "☁", "🎉", "⚽"};

    @GetMapping
    public List<Card> getRandomCards() {
        shuffleContent();

        List<Card> cards = new ArrayList<>();

        for (int i = 0; i < 36; i++) {
            Card card = new Card(i + 1, contents[i]);
            cards.add(card);
        }

        return cards;
    }

    private void shuffleContent() {
        List<String> contentsList = Arrays.asList(contents);
        Collections.shuffle(contentsList);
        contentsList.toArray(contents);
    }
}
