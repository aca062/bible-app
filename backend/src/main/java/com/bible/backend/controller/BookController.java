package com.bible.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bible.backend.repositories.BookRepository;

/**
 * Controlador para gestionar las solicitudes relacionadas con los libros
 * creados por el usuario que contienen una colección de versículos de la
 * Biblia.
 * Permite el acceso desde la URL http://localhost:4200.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {
	@Autowired
	BookRepository bookRepository; // Repositorio para acceder a los datos de los libros creados por el usuario.

	// Aquí se pueden añadir los métodos correspondientes para manejar las
	// solicitudes relacionadas con los libros.
}