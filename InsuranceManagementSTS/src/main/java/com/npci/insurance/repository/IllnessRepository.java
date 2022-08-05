package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Illness;

@RepositoryRestResource(path = "illness")
@CrossOrigin("http://localhost:4200/")
public interface IllnessRepository extends JpaRepository<Illness, Integer> {

	// public List<Illness> findBycategoryid(Integer illnessid);
	@Query(value = "select * from illness where illnessid in (select illnessid from hospital_illness where hospitalid = :hosid)",nativeQuery = true)
	public List<Illness> getAllIllnessCuredByHospital(@Param("hosid") Integer hospitalid);

	@Query(value = "select * from illness where illnessid in (select illnessid from hospital_illness where healthpolicyid = (select healthpolicyid from health_policy where policyid = :polid))",nativeQuery = true)
	public List<Illness> getAllIllnessIncludedInPolicy(@Param("polid") Integer policyid);

}
