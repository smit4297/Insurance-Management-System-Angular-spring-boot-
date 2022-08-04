package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Hospital;



@RepositoryRestResource(path="hospitals")
@CrossOrigin("http://localhost:4200/")
public interface HospitalRepository extends JpaRepository <Hospital,Integer>{
	//public List<Hospital> findBycategoryid(Integer hospitalid);

}

