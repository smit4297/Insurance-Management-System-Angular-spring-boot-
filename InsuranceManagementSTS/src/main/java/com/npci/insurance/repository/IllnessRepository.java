package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Illness;


@RepositoryRestResource(path="illness")
@CrossOrigin("http://localhost:4200/")
public interface IllnessRepository extends JpaRepository <Illness,Integer>{
	
		//public List<Illness> findBycategoryid(Integer illnessid);

}
