package victor.colomina.anoll.perudo.cards;

public class Card {

    private int id;
    private int position;
    private boolean show;
    private String content;

    public Card(int id, String content) {
        this.id = this.position = id;
        this.content = content;
        this.show = true;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public boolean isShow() {
        return show;
    }

    public void setShow(boolean show) {
        this.show = show;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", position=" + position +
                ", show=" + show +
                ", content='" + content + '\'' +
                '}';
    }
}
