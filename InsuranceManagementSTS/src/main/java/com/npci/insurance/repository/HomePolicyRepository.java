package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.HomePolicy;



@RepositoryRestResource(path="homepolicies")
@CrossOrigin("http://localhost:4200/")
public interface HomePolicyRepository extends JpaRepository <HomePolicy,Integer>{
	//public List<HomePolicy> findBycategoryid(Integer policyid);

}