package Ecommerce.Controller;

import Ecommerce.Model.Tag;
import Ecommerce.Service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    @PostMapping
    public Tag createTag(@RequestBody Tag tag) {
        return tagService.createTag(tag);
    }

    @GetMapping("/{id}")
    public Tag getTagById(@PathVariable Long id) {
        return tagService.getTagById(id);
    }

    @GetMapping
    public List<Tag> getAllTags() {
        return tagService.getAllTags();
    }

    @PutMapping("/{id}")
    public Tag updateTag(@PathVariable Long id, @RequestBody Tag tag) {
        return tagService.updateTag(id, tag);
    }

    @DeleteMapping("/{id}")
    public void deleteTag(@PathVariable Long id) {
        tagService.deleteTag(id);
    }
}
