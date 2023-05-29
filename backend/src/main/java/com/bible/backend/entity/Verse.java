package com.bible.backend.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "verses")
public class Verse implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String book_name;

	private Number chapter;

	private Number verse;

	private String text;

	public Verse() {
	}

	public Verse(String book_name, Number chapter, Number verse, String text) {
		this.book_name = book_name;
		this.chapter = chapter;
		this.verse = verse;
		this.text = text;
	}

	public String getbook_name() {
		return book_name;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setbook_name(String book_name) {
		this.book_name = book_name;
	}

	public Number getChapter() {
		return chapter;
	}

	public void setChapter(Number chapter) {
		this.chapter = chapter;
	}

	public Number getVerse() {
		return verse;
	}

	public void setVerse(Number verse) {
		this.verse = verse;
	}
}
