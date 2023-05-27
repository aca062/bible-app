package com.bible.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bible.backend.entity.Book;

@RepositoryRestResource
public interface BookRepository extends CrudRepository<Book, Long> {

}