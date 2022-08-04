package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.User;


@RepositoryRestResource(path="users")
@CrossOrigin("http://localhost:4200/")
public interface UserRepository extends JpaRepository <User,Integer>{
	//public List<User> findBycategoryid(Integer userid);	

}