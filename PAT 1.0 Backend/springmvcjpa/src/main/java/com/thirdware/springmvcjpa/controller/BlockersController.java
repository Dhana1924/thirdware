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
import com.thirdware.springmvcjpa.model.Blockers;
import com.thirdware.springmvcjpa.repository.BlockersRepository;





@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class BlockersController { 
	
	@Autowired
	private BlockersRepository BlockersRepo;
	
	//get all Blockers
	@GetMapping("/blockers")
	public List<Blockers> getAllBlockers(){
		return BlockersRepo.findAll();
	}
	
	// create Blockers rest api
	@PostMapping("/blockers")
	public Blockers createBlockers(@RequestBody Blockers Blockers){
		return BlockersRepo.save(Blockers);
	}
	
	 @GetMapping("/blockers/{id}")
	 public ResponseEntity<Blockers> getBlockersById(@PathVariable Long id) {
		 Blockers Blockers = BlockersRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Blockers Detail dosent't exist with id :" + id));
	 return ResponseEntity.ok (Blockers);
	 }
	 
	 //Update Blockers
	 @PutMapping("/blockers/{id}")
	 public ResponseEntity<Blockers> getBlockersById(@PathVariable Long id , @RequestBody Blockers BlockersDetails) {
		 Blockers Blockers = BlockersRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Blockers Detail dosent't exist with id :" + id));

	 
		 Blockers.setBlocker(BlockersDetails.getBlocker());
		 Blockers.setBlockerstatus(BlockersDetails.getBlockerstatus());
		 Blockers.setBlockersolution(BlockersDetails.getBlockersolution());
		 Blockers updatedBlockers = BlockersRepo.save(Blockers);
		 return ResponseEntity.ok (updatedBlockers);
	 		}
	 
	 @DeleteMapping("/blockers/{id}")
	 public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id) {
		 Blockers Blockers = BlockersRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Blockers Detail dosent't exist with id :" + id));
	 
		 BlockersRepo.delete(Blockers);
		 Map<String, Boolean> response = new HashMap<>();
	
		 response.put("deleted", Boolean.TRUE);
		 return ResponseEntity.ok (response);
	  }
	}

