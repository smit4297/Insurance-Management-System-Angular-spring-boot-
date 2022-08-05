package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.HomePolicy;
import com.npci.insurance.entity.Hospital;



@RepositoryRestResource(path="hospitals")
@CrossOrigin("http://localhost:4200/")
public interface HospitalRepository extends JpaRepository <Hospital,Integer>{
	//public List<Hospital> findBycategoryid(Integer hospitalid);
	
//	@Query(value = "select hospitalname from hospital where hospitalid in (select hospitalid from hospital_illness where healthpolicyid = (select healthpolicyid from health_policy where policyid = :polid))",nativeQuery = true)
//	public List<String> getAllHospitalNameUsingPolicyId(@Param("polid") Integer policyid);

	@Query(value = "select * from hospital where hospitalid in (select hospitalid from hospital_illness where healthpolicyid = (select healthpolicyid from health_policy where policyid = :polid))",nativeQuery = true)
	public List<Hospital> getAllHospitalsUsingPolicyId(@Param("polid") Integer policyid);

}

