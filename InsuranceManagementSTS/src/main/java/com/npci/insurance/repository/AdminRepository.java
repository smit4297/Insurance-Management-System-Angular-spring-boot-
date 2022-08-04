package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Admin;


@RepositoryRestResource(path="admins")
@CrossOrigin("http://localhost:4200/")
public interface AdminRepository extends JpaRepository<Admin,String>{
	public List<Admin> findByemailid(String emailid);

}
