package Ecommerce.Service;

import Ecommerce.Model.Tag;

import java.util.List;

public interface TagService {
    Tag createTag(Tag tag);
    Tag getTagById(Long id);
    List<Tag> getAllTags();
    Tag updateTag(Long id, Tag updatedTag);
    void deleteTag(Long id);
}

