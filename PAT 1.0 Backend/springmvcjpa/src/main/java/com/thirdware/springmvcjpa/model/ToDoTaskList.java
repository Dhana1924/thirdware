package com.thirdware.springmvcjpa.model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="ToDoTask_table")

public class ToDoTaskList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="todotaskname")
	private String todotaskname;
		
	@Column (name = "todotaskassignee")
	private String todotaskassignee;
		
	@Column (name = "todotaskstartdate")
	private String todotaskstartdate;
	
	
	@Column (name = "todotaskpriority")
	private String todotaskpriority;
	

}
