package com.thirdware.springmvcjpa.service;

public interface EmailSenderService {
	void sendEmail(String to, String subject, String message);

}