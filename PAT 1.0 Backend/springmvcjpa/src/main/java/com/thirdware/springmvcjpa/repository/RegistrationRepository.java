package com.thirdware.springmvcjpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thirdware.springmvcjpa.model.Registration;


@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer>{

	public Registration findByEmailId (String emailId);
	public Registration findByEmailIdAndPassword (String emailId, String password);

}


