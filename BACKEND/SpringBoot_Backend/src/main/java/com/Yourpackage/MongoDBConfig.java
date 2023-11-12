// MongoDBConfig.java

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.yourpackage.repository") // Adjust the package name
public class MongoDBConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "Transaction_Data"; // Specify your MongoDB database name
    }

    @Override
    @Bean
    public MongoClient mongoClient() {
        MongoClientURI uri = new MongoClientURI("your-mongodb-uri"); // Specify your MongoDB connection URI
        return new MongoClient(uri);
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoClient(), getDatabaseName());
    }
}
