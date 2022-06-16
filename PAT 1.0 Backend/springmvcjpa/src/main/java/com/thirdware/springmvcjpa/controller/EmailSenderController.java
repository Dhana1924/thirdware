package com.thirdware.springmvcjpa.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thirdware.springmvcjpa.exception.ResourceNotFoundException;
import com.thirdware.springmvcjpa.model.EmailMessage;
import com.thirdware.springmvcjpa.service.EmailSenderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1/")
public class EmailSenderController {
	private final EmailSenderService emailSenderService;
	public EmailSenderController (EmailSenderService emailSenderService){
		this.emailSenderService = emailSenderService;
	}
	@PostMapping("/send")
	public ResponseEntity sendEmail (@RequestBody EmailMessage emailMessage) {
		this.emailSenderService.sendEmail(emailMessage.getTo(), emailMessage.getSubject(), emailMessage.getMessage());
		return ResponseEntity.ok("success");
		
	}

}