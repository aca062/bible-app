package com.bible.backend.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
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

	private String bookName;

	private Number chapter;

	private Number verse;

	private String text;

	public Verse() {
	}

	public Verse(String bookName, Number chapter, Number verse, String text) {
		this.bookName = bookName;
		this.chapter = chapter;
		this.verse = verse;
		this.text = text;
	}

	public String getbookName() {
		return bookName;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setbookName(String bookName) {
		this.bookName = bookName;
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
