package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Policy;


@RepositoryRestResource(path="policyids")
@CrossOrigin("http://localhost:4200/")
public interface PolicyRepository extends JpaRepository <Policy,Integer>{
	//public List<Policy> findBycategoryid(Integer policyid);

}