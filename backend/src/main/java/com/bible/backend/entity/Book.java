package com.bible.backend.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * Entidad que representa un libro con versículos de la Biblia.
 */
@Entity
@Table(name = "books")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id; // Identificador único del libro.

	private String name; // Nombre del libro.

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Verse> verses; // Lista de versículos asociados a este libro.

	/**
	 * Constructor vacío necesario para JPA.
	 */
	public Book() {
	}

	/**
	 * Constructor de la clase Book.
	 *
	 * @param name   Nombre del libro.
	 * @param verses Lista de versículos asociados al libro.
	 */
	public Book(String name, List<Verse> verses) {
		this.name = name;
		this.verses = verses;
	}

	/**
	 * Obtiene el identificador del libro.
	 *
	 * @return Identificador del libro.
	 */
	public long getId() {
		return id;
	}

	/**
	 * Obtiene el nombre del libro.
	 *
	 * @return Nombre del libro.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Establece el nombre del libro.
	 *
	 * @param name Nombre del libro.
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Obtiene la lista de versículos asociados al libro.
	 *
	 * @return Lista de versículos asociados al libro.
	 */
	public List<Verse> getVerses() {
		return verses;
	}

	/**
	 * Establece la lista de versículos asociados al libro.
	 *
	 * @param verses Lista de versículos asociados al libro.
	 */
	public void setVerses(List<Verse> verses) {
		this.verses = verses;
	}
}
