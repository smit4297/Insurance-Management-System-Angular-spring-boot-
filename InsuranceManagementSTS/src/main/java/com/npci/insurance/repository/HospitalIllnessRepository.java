package com.npci.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.HospitalIllness;


@RepositoryRestResource(path="hospitalillness")
@CrossOrigin("http://localhost:4200/")
public interface HospitalIllnessRepository extends JpaRepository<HospitalIllness,Integer>{

}
