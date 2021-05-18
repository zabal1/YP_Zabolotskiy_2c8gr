package Object;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Blurb {
    private String id;
    private String description;
    private LocalDate creationDate;
    private String webLink;
    private String vendor;
    private String photoLink;
    private LocalDate deadlineDate;
    private int discount;
    private float rating;
    private List<String> hashTags;

    public Blurb(){}

    public Blurb(String id, String description, LocalDate creationDate, String webLink, String vendor, String photoLink, LocalDate deadlineDate, int discount, float rating, List<String> hashTags) {
        this.id = id;
        this.description = description;
        this.creationDate = creationDate;
        this.webLink = webLink;
        this.vendor = vendor;
        this.photoLink = photoLink;
        this.deadlineDate = deadlineDate;
        this.discount = discount;
        this.rating = rating;
        this.hashTags = hashTags;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getWebLink() {
        return webLink;
    }

    public void setWebLink(String webLink) {
        this.webLink = webLink;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public LocalDate getDeadlineDate() {
        return deadlineDate;
    }

    public void setDeadlineDate(LocalDate deadlineDate) {
        this.deadlineDate = deadlineDate;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public static boolean validate(Blurb blurb) {
        LocalDate currentDate = LocalDate.now();
        final String REGEX_ID = "\\d+";
        final String REGEX_DESCRIPTION = ".{1,300}";
        final String REGEX_WEBLINK = "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";

        if (blurb.getId() != null && blurb.getId().compareTo("0") > 0  && blurb.getId().compareTo("100") < 0 &&
                blurb.getDescription() != null && blurb.getDescription().matches(REGEX_DESCRIPTION) &&
                blurb.getCreationDate() != null && blurb.getCreationDate().isBefore(currentDate) &&
                blurb.getWebLink() != null && blurb.getWebLink().matches(REGEX_WEBLINK) &&
                blurb.getVendor()!= null && !blurb.getVendor().isEmpty() &&
                blurb.getPhotoLink() != null && !blurb.getPhotoLink().isEmpty() &&
                blurb.getDeadlineDate() != null && blurb.getDeadlineDate().isAfter(currentDate) &&
                blurb.getDiscount() > 0 && blurb.getDiscount() <= 100 &&
                blurb.getRating() > 0 && blurb.getRating() <= 10 &&
                blurb.getHashTags() != null && !blurb.getHashTags().isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Blurb that = (Blurb) o;

        if (discount != that.discount) return false;
        if (Float.compare(that.rating, rating) != 0) return false;
        if (!Objects.equals(description, that.description)) return false;
        if (!Objects.equals(creationDate, that.creationDate)) return false;
        if (!Objects.equals(webLink, that.webLink)) return false;
        if (!Objects.equals(vendor, that.vendor)) return false;
        if (!Objects.equals(photoLink, that.photoLink)) return false;
        if (!Objects.equals(deadlineDate, that.deadlineDate)) return false;
        return Objects.equals(hashTags, that.hashTags);
    }

    @Override
    public int hashCode() {
        int result = description != null ? description.hashCode() : 0;
        result = 31 * result + (creationDate != null ? creationDate.hashCode() : 0);
        result = 31 * result + (webLink != null ? webLink.hashCode() : 0);
        result = 31 * result + (vendor != null ? vendor.hashCode() : 0);
        result = 31 * result + (photoLink != null ? photoLink.hashCode() : 0);
        result = 31 * result + (deadlineDate != null ? deadlineDate.hashCode() : 0);
        result = 31 * result + discount;
        result = 31 * result + (rating != +0.0f ? Float.floatToIntBits(rating) : 0);
        result = 31 * result + (hashTags != null ? hashTags.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Advertisement{");
        sb.append("id='").append(id).append('\'');
        sb.append(", description='").append(description).append('\'');
        sb.append(", creationDate=").append(creationDate);
        sb.append(", webLink='").append(webLink).append('\'');
        sb.append(", vendor='").append(vendor).append('\'');
        sb.append(", photoLink='").append(photoLink).append('\'');
        sb.append(", deadlineDate=").append(deadlineDate);
        sb.append(", discount=").append(discount);
        sb.append(", rating=").append(rating);
        sb.append(", hashTags=").append(hashTags);
        sb.append('}');
        return sb.toString();
    }
}