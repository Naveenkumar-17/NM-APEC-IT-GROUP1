package com.yourpackage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "transactions")
public class Transaction {
    @Id
    private String id;
    private String sender;
    private String receiver;
    private double amount;

    // Constructors, getters, setters, etc.
}
