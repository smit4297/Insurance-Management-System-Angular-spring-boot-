package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.PolicyCategory;


@RepositoryRestResource(path="policycategory")
@CrossOrigin("http://localhost:4200/")
public interface PolicyCategoryRepository extends JpaRepository <PolicyCategory,Integer>{
	//public List<PolicyCategory> findBycategoryid(Integer categoryid);

}
