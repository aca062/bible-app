package com.bible.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bible.backend.entity.Verse;

@RepositoryRestResource(exported = false)
public interface VerseRepository extends CrudRepository<Verse, Long> {

}
