package com.bible.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bible.backend.repositories.BookRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {
	@Autowired
	BookRepository bookRepository;
}
