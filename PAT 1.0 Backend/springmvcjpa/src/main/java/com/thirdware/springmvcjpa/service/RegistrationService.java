package com.thirdware.springmvcjpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thirdware.springmvcjpa.model.Registration;
import com.thirdware.springmvcjpa.repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	public Registration saveUser(Registration registartion) {
		 return repo.save(registartion);
		
	}
public Registration fetchUserByEmailId (String email){
	 return repo.findByEmailId(email);
}
public Registration fetchUserByEmailIdAndPassword (String email,String password){
	 return repo.findByEmailIdAndPassword(email, password);
}
}