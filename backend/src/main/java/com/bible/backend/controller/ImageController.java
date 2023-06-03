package com.bible.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bible.backend.dto.ImageDto;
import com.bible.backend.services.ImageService;

/**
 * Controlador para gestionar las solicitudes relacionadas con las imágenes.
 * Permite el acceso desde la URL http://localhost:4200.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/image")
public class ImageController {
	@Autowired
	private ImageService imageService; // Servicio para obtener la URL de la imagen.

	/**
	 * Obtiene la URL de la imagen.
	 * 
	 * @return ResponseEntity que contiene el objeto ImageDto con la URL y el estado
	 *         HTTP OK si la imagen se encuentra.
	 */
	@GetMapping("data")
	public ResponseEntity<ImageDto> getImage() {
		return new ResponseEntity<ImageDto>(imageService.getImage(), HttpStatus.OK);
	}
}