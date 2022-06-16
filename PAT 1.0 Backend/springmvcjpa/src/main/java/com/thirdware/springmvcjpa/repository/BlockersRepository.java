package com.thirdware.springmvcjpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thirdware.springmvcjpa.model.Blockers;

@Repository
public interface BlockersRepository extends JpaRepository<Blockers , Long> {

}
