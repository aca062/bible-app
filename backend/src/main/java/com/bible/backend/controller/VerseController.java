package com.bible.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bible.backend.repositories.VerseRepository;

/**
 * Controlador para gestionar las solicitudes relacionadas con los versículos de
 * la Biblia.
 * Permite el acceso desde la URL http://localhost:4200.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VerseController {
	@Autowired
	VerseRepository verseRepository; // Repositorio para acceder a los datos de los versículos de la Biblia.

	// Aquí se pueden añadir los métodos correspondientes para manejar las
	// solicitudes relacionadas con los versículos.
}
