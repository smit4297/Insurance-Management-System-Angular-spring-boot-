package com.npci.insurance.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.Area;


@RepositoryRestResource(path="area")
@CrossOrigin("http://localhost:4200/")
public interface AreaRepository extends JpaRepository <Area,Integer> {
	//public List<Area> findByareaid(Integer areaid);

}