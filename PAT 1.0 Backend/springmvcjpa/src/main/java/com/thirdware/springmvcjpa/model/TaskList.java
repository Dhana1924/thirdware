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
@Entity(name="Task_table")

public class TaskList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="taskname")
	private String taskname;
		
	@Column (name = "taskassignee")
	private String taskassignee;
		
	@Column (name = "taskstartdate")
	private String taskstartdate;
	
	@Column (name = "taskenddate")
	private String taskenddate;
	
	@Column (name = "taskstatus")
	private String taskstatus;
	
	@Column (name = "taskprojectname")
	private String taskprojectname;
	
	@Column (name = "taskprioritystatus")
	private String taskprioritystatus;
	

}
