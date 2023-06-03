package com.bible.backend.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entidad que representa un versículo de la Biblia.
 */
@Entity
@Table(name = "verses")
public class Verse implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id; // Identificador único del versículo.

	private String book_name; // Nombre del libro al que pertenece el versículo.

	private Number chapter; // Capítulo del libro al que pertenece el versículo.

	private Number verse; // Número del versículo dentro del capítulo.

	private String text; // Texto del versículo.

	/**
	 * Constructor vacío necesario para JPA.
	 */
	public Verse() {
	}

	/**
	 * Constructor de la clase Verse.
	 *
	 * @param book_name Nombre del libro al que pertenece el versículo.
	 * @param chapter   Capítulo del libro al que pertenece el versículo.
	 * @param verse     Número del versículo dentro del capítulo.
	 * @param text      Texto del versículo.
	 */
	public Verse(String book_name, Number chapter, Number verse, String text) {
		this.book_name = book_name;
		this.chapter = chapter;
		this.verse = verse;
		this.text = text;
	}

	/**
	 * Obtiene el nombre del libro al que pertenece el versículo.
	 *
	 * @return Nombre del libro.
	 */
	public String getBook_name() {
		return book_name;
	}

	/**
	 * Establece el nombre del libro al que pertenece el versículo.
	 *
	 * @param book_name Nombre del libro.
	 */
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}

	/**
	 * Obtiene el número del capítulo al que pertenece el versículo.
	 *
	 * @return Número del capítulo.
	 */
	public Number getChapter() {
		return chapter;
	}

	/**
	 * Establece el número del capítulo al que pertenece el versículo.
	 *
	 * @param chapter Número del capítulo.
	 */
	public void setChapter(Number chapter) {
		this.chapter = chapter;
	}

	/**
	 * Obtiene el número del versículo.
	 *
	 * @return Número del versículo.
	 */
	public Number getVerse() {
		return verse;
	}

	/**
	 * Establece el número del versículo.
	 *
	 * @param verse Número del versículo.
	 */
	public void setVerse(Number verse) {
		this.verse = verse;
	}

	/**
	 * Obtiene el texto del versículo.
	 *
	 * @return Texto del versículo.
	 */
	public String getText() {
		return text;
	}

	/**
	 * Establece el texto del versículo.
	 *
	 * @param text Texto del versículo.
	 */
	public void setText(String text) {
		this.text = text;
	}
}
