package Object;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Collection {
    private List<Blurb> blurbs;

    public Collection() {
        this.blurbs = new ArrayList<>();
    }

    public Blurb get(String id) {
        try {
            return blurbs.stream().filter(a->a.getId().equals(id)).findAny().get();
        } catch (NoSuchElementException e) {
            return null;
        }
    }

    public List<Blurb> getAds(int skip, int top, Filter filter) {
        if (filter.getHashTags().size() == 0 && filter.getVendors().size() == 0) {
            return blurbs.stream().skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));
        } else if (filter.getHashTags().size() == 0) {
            return filterByVendors(this.blurbs, filter.getVendors(), skip, top);
        } else if (filter.getVendors().size() == 0) {
            return filterByTags(this.blurbs, filter.getHashTags(), skip, top);
        }
        return filterByTags(filterByVendors(this.blurbs, filter.getVendors(), skip, top),
                filter.getHashTags(), 0, top);
    }

    public List<Blurb> getAll() {
        return blurbs;
    }

    public boolean add(Blurb blurb) {
        if (blurbs.contains(blurb)) {
            return false;
        }

        return true;
    }

    public boolean edit(String id, Blurb blurb) {
        if (blurb.getVendor() != null || !blurb.getId().isEmpty() || blurb.getCreationDate() != null) {
            return false;
        }

        Blurb currentAd = blurbs.stream().filter(ad -> ad.getId().equals(id)).findFirst().orElse(null);
        if (currentAd == null) {
            return false;
        }

        Blurb adToEdit = new Blurb();
        adToEdit.setId(currentAd.getId());
        adToEdit.setDescription(currentAd.getDescription());
        adToEdit.setCreationDate(currentAd.getCreationDate());
        adToEdit.setWebLink(currentAd.getWebLink());
        adToEdit.setVendor(currentAd.getVendor());
        adToEdit.setPhotoLink(currentAd.getPhotoLink());
        adToEdit.setDeadlineDate(currentAd.getDeadlineDate());
        adToEdit.setDiscount(currentAd.getDiscount());
        adToEdit.setRating(currentAd.getRating());
        adToEdit.setHashTags(new ArrayList<>(currentAd.getHashTags()));
        if (blurb.getDescription() != null) {
            adToEdit.setDescription(blurb.getDescription());
        }
        if (blurb.getWebLink() != null) {
            adToEdit.setWebLink(blurb.getWebLink());
        }
        if (blurb.getPhotoLink() != null) {
            adToEdit.setPhotoLink(blurb.getPhotoLink());
        }
        if (blurb.getDeadlineDate() != null) {
            adToEdit.setDeadlineDate(blurb.getDeadlineDate());
        }
        if (blurb.getDiscount() != 0) {
            adToEdit.setDiscount(blurb.getDiscount());
        }
        if (blurb.getRating() != 0) {
            adToEdit.setRating(blurb.getRating());
        }
        if (!blurb.getHashTags().isEmpty()) {
            adToEdit.setHashTags(blurb.getHashTags());
        }

        if (Blurb.validate(adToEdit)) {
            currentAd.setId(adToEdit.getId());
            currentAd.setDescription(adToEdit.getDescription());
            currentAd.setCreationDate(adToEdit.getCreationDate());
            currentAd.setWebLink(adToEdit.getWebLink());
            currentAd.setVendor(adToEdit.getVendor());
            currentAd.setPhotoLink(adToEdit.getPhotoLink());
            currentAd.setDeadlineDate(adToEdit.getDeadlineDate());
            currentAd.setDiscount(adToEdit.getDiscount());
            currentAd.setRating(adToEdit.getRating());
            currentAd.setHashTags(adToEdit.getHashTags());
            return true;
        } else {
            return false;
        }
    }

    public boolean remove(String id) {
        Optional<Blurb> ad = blurbs.stream().filter(e -> e.getId().equals(id)).findFirst();
        if(ad.isPresent()){
            blurbs.remove(ad.get());
            return true;
        }
        return false;
    }

    public void addAll(List<Blurb> blurbList) {
        blurbs.forEach(a-> {add(a);});
    }

    public void clear() {
        blurbs.clear();
    }

    private List<Blurb> filterByVendors(List<Blurb> ads, List<String> vendors,
                                                int skip, int top) {
        return ads.stream().filter(element -> vendors.contains(element.getVendor()))
                .skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));
    }

    private List<Blurb> filterByTags(List<Blurb> ads, List<String> hashTags, int skip,
                                             int top) {
        return ads.stream().filter(element -> element.getHashTags().stream().anyMatch(hashTag -> hashTags.contains(hashTag)))
                .skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));

    }
}