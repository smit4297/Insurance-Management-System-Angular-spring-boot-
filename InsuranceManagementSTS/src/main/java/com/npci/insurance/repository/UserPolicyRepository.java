package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.UserPolicy;


@RepositoryRestResource(path="userpolicies")
@CrossOrigin("http://localhost:4200/")
public interface UserPolicyRepository extends JpaRepository <UserPolicy,Integer>{
	//public List<UserPolicy> findBycategoryid(Integer policyid);

}
