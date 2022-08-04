package com.npci.insurance.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.npci.insurance.entity.HealthPolicy;


@RepositoryRestResource(path="healthpolicies")
@CrossOrigin("http://localhost:4200/")
public interface HealthPolicyRepository extends JpaRepository <HealthPolicy,Integer>{
	//public List<HealthPolicy> findBycategoryid(Integer policyid);

}
