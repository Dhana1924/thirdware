package com.thirdware.springmvcjpa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thirdware.springmvcjpa.exception.ResourceNotFoundException;
import com.thirdware.springmvcjpa.model.ToDoTaskList;
import com.thirdware.springmvcjpa.repository.ToDoTaskRepository;




@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class ToDoTaskController { 
	
	@Autowired
	private ToDoTaskRepository todotaskRepo;
	
	//get all Task
	@GetMapping("/todotask")
	public List<ToDoTaskList> getAllTask(){
		return todotaskRepo.findAll();
	}
	
	// create Task rest api
	@PostMapping("/todotask")
	public ToDoTaskList createTask(@RequestBody ToDoTaskList todotasklist){
		return todotaskRepo.save(todotasklist);
	}
	
	 @GetMapping("/todotask/{id}")
	 public ResponseEntity<ToDoTaskList> getTaskById(@PathVariable Long id) {
	 ToDoTaskList todotasklist = todotaskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));
	 return ResponseEntity.ok (todotasklist);
	 }
	 
	 //Update Doctor
	 @PutMapping("/todotask/{id}")
	 public ResponseEntity<ToDoTaskList> getTaskById(@PathVariable Long id , @RequestBody ToDoTaskList todotaskDetails) {
	 ToDoTaskList todotasklist = todotaskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));

	 
	 todotasklist.setTodotaskname(todotaskDetails.getTodotaskname());
	 todotasklist.setTodotaskassignee(todotaskDetails.getTodotaskassignee());
	 todotasklist.setTodotaskstartdate(todotaskDetails.getTodotaskstartdate());
	 todotasklist.setTodotaskpriority(todotaskDetails.getTodotaskpriority());
	 ToDoTaskList updatedtodoTaskList = todotaskRepo.save(todotasklist);
	 return ResponseEntity.ok (updatedtodoTaskList);
	 }
	 
	 @DeleteMapping("/todotask/{id}")
	 public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id) {
		 ToDoTaskList todotasklist = todotaskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));
	 
	 todotaskRepo.delete(todotasklist);
	 Map<String, Boolean> response = new HashMap<>();
	
	 response.put("deleted", Boolean.TRUE);
	 return ResponseEntity.ok (response);
	 }
}

