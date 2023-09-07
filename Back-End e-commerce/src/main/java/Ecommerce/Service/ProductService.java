package Ecommerce.Service;

import Ecommerce.Model.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Product product);
    Product getProductById(Long id);
    List<Product> getAllProducts();
    Product updateProduct(Long id, Product updatedProduct);
    void deleteProduct(Long id);
}
