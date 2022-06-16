package com.thirdware.springmvcjpa.service.imp;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.thirdware.springmvcjpa.service.EmailSenderService;

@Service
public class EmailSenderServiceImp implements EmailSenderService {
	private final JavaMailSender mailSender;
	public EmailSenderServiceImp(JavaMailSender mailSender){
		this.mailSender = mailSender;
	}
	@Override
	
	 public void sendEmail(String to, String subject, String message) {
	 SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
	 simpleMailMessage.setFrom("navin.v1711@gmail.com");
	 simpleMailMessage.setTo(to);
	 simpleMailMessage.setSubject(subject);
	 simpleMailMessage.setText(message);
	 this.mailSender.send(simpleMailMessage);
	}
}