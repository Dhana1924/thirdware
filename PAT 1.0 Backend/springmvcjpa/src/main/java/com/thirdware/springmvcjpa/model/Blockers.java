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
@Entity(name="Blockers_table")

public class Blockers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="blocker")
	private String blocker;
	
	@Column (name = "blockerstatus")
	private String blockerstatus;
	
	@Column (name = "blockersolution")
	private String blockersolution;
	

}
