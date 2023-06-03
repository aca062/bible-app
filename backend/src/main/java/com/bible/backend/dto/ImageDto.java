package com.bible.backend.dto;

/**
 * Clase DTO (Data Transfer Object) que representa la información de una imagen.
 */
public class ImageDto {
	private String path; // Ruta de la imagen.

	/**
	 * Constructor de la clase ImageDto.
	 *
	 * @param path Ruta de la imagen.
	 */
	public ImageDto(String path) {
		this.path = path;
	}

	/**
	 * Obtiene la ruta de la imagen.
	 *
	 * @return Ruta de la imagen.
	 */
	public String getPath() {
		return path;
	}

	/**
	 * Establece la ruta de la imagen.
	 *
	 * @param path Ruta de la imagen.
	 */
	public void setPath(String path) {
		this.path = path;
	}
}
