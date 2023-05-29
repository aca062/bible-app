package com.bible.backend.services;

import com.bible.backend.dto.ImageDto;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import org.springframework.stereotype.Component;

@Component("ImageService")
public class ImageService {
	private Playwright playwrightInstance;

	public ImageService() {
		this.playwrightInstance = Playwright.create();
	}

	public ImageDto getImage() {
		Browser browserInstance = this.playwrightInstance.chromium().launch();

		String path = retrieveImage(browserInstance);

		ImageDto image = new ImageDto(path);

		return image;
	}

	private String retrieveImage(Browser browser) {

		String imagePath;

		Page page = browser.newPage();

		String url = "https://generatorfun.com/";

		page.navigate(url + "random-nature-image");
		page.waitForSelector(
				"body > main > div > img");

		Document webPage = Jsoup.parse(page.content());

		Element image = webPage.select("body > main > div > img").first();

		if (image == null) {
			return null;
		}

		var pathSplit = image.toString().split("src=");
		var src = pathSplit[1].split(" ");
		var path = src[0].replace("\"", "");

		imagePath = url + path;

		page.close();

		return imagePath;
	}
}
