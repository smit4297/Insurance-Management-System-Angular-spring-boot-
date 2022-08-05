package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.HospitalIllness;
import com.npci.insurance.entity.Illness;


@RepositoryRestResource(path="hospitalillness")
@CrossOrigin("http://localhost:4200/")
public interface HospitalIllnessRepository extends JpaRepository<HospitalIllness,Integer>{

	
	
	

}
