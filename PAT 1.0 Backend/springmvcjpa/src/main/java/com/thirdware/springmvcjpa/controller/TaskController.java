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
import com.thirdware.springmvcjpa.model.TaskList;
import com.thirdware.springmvcjpa.repository.TaskRepository;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class TaskController { 
	
	@Autowired
	private TaskRepository taskRepo;
	
	//get all hospitals
	@GetMapping("/task")
	public List<TaskList> getAllTask(){
		return taskRepo.findAll();
	}
	
	// create Doctor rest api
	@PostMapping("/task")
	public TaskList createTask(@RequestBody TaskList tasklist){
		return taskRepo.save(tasklist);
	}
	
	 @GetMapping("/task/{id}")
	 public ResponseEntity<TaskList> getTaskById(@PathVariable Long id) {
	 TaskList tasklist = taskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));
	 return ResponseEntity.ok (tasklist);
	 }
	 
	 //Update Doctor
	 @PutMapping("/task/{id}")
	 public ResponseEntity<TaskList> getTaskById(@PathVariable Long id , @RequestBody TaskList taskDetails) {
	 TaskList tasklist = taskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));

	 
	 tasklist.setTaskname(taskDetails.getTaskname());
	 tasklist.setTaskassignee(taskDetails.getTaskassignee());
	 tasklist.setTaskstartdate(taskDetails.getTaskstartdate());
	 tasklist.setTaskenddate(taskDetails.getTaskenddate());
	 tasklist.setTaskstatus(taskDetails.getTaskstatus());
	 tasklist.setTaskprojectname(taskDetails.getTaskprojectname());
	 tasklist.setTaskprioritystatus(taskDetails.getTaskprioritystatus());
	 TaskList updatedTaskList = taskRepo.save(tasklist);
	 return ResponseEntity.ok (updatedTaskList);
	 }
	 
	 @DeleteMapping("/task/{id}")
	 public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id) {
	 TaskList tasklist = taskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Task Detail dosent't exist with id :" + id));
	 
	 taskRepo.delete(tasklist);
	 Map<String, Boolean> response = new HashMap<>();
	
	 response.put("deleted", Boolean.TRUE);
	 return ResponseEntity.ok (response);
	 }
}

