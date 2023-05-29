package com.bible.backend.dto;

public class ImageDto {
	private String path;

	public ImageDto(String path) {
		this.path = path;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
}
