package com.thirdware.springmvcjpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thirdware.springmvcjpa.model.Registration;
import com.thirdware.springmvcjpa.service.RegistrationService;



@RestController
@RequestMapping("api/v1")
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	@PostMapping(path ="/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration registerUser(@RequestBody Registration registration) throws Exception {
		String tempEmailId=registration.getEmailId();
		if(tempEmailId !=null && !"".equals(tempEmailId)){
			Registration registrationObj=service.fetchUserByEmailId(tempEmailId);
		if(registrationObj !=null){
			throw new Exception("user with"+tempEmailId +"is already exist");
		}}
		Registration registrationObj =null;
		registrationObj=service.saveUser(registration);
		return registrationObj;
		
	}
	@PostMapping("/loginuser")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration loginUser(@RequestBody Registration registration) throws Exception{
		String tempEmailId=registration.getEmailId();
		String tempPass=registration.getPassword();
		Registration registrationObj=null;
		if(tempEmailId !=null && tempPass !=null){
			registrationObj= service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(registrationObj==null){
			throw new Exception("Bad Credentials");
		}
		return registrationObj;
	}

}