package com.thirdware.springmvcjpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thirdware.springmvcjpa.model.ToDoTaskList;

@Repository
public interface ToDoTaskRepository extends JpaRepository<ToDoTaskList, Long> {

}
