package Ecommerce.Service;

import Ecommerce.Model.Tag;
import Ecommerce.Repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagService {
    @Autowired
    private TagRepository tagRepository;

    @Override
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public Tag getTagById(Long id) {
        return tagRepository.findById(id).orElse(null);
    }

    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Override
    public Tag updateTag(Long id, Tag updatedTag) {
        Tag existingTag = tagRepository.findById(id).orElse(null);
        if (existingTag != null) {
            existingTag.setName(updatedTag.getName());
            return tagRepository.save(existingTag);
        } else {
            return null;
        }
    }

    @Override
    public void deleteTag(Long id) {
        tagRepository.deleteById(id);
    }
}
