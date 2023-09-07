package Ecommerce.Service;

import Ecommerce.Model.Product;
import Ecommerce.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product updateProduct(Long id, Product updatedProduct) {
        Product existingProduct = productRepository.findById(id).orElse(null);
        if (existingProduct != null) {
            // Update product attributes based on the updatedProduct
        	  existingProduct.setName(updatedProduct.getName());
              existingProduct.setPrice(updatedProduct.getPrice());
              existingProduct.setQuantity(updatedProduct.getQuantity());
          
              existingProduct.setDescription(updatedProduct.getDescription());
              existingProduct.setImg(updatedProduct.getImg());
              existingProduct.setTags(updatedProduct.getTags());

            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
