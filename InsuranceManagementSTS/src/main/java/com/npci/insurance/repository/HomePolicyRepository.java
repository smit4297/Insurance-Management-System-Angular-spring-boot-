package com.npci.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.insurance.entity.HealthPolicy;
import com.npci.insurance.entity.HomePolicy;



@RepositoryRestResource(path="homepolicies")
@CrossOrigin("http://localhost:4200/")
public interface HomePolicyRepository extends JpaRepository <HomePolicy,Integer>{
	//public List<HomePolicy> findBycategoryid(Integer policyid);
	
	@Query(value = "select * from home_policy where policyid in (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid)",nativeQuery = true)
	public List<HomePolicy> getAllUsersHomePolicy();
	
	@Query(value = "select * from home_policy where areaid = :arid",nativeQuery = true)
	public List<HomePolicy> getPolicyAreaWise(@Param("arid") Integer areaid);
	
	@Query(value = "select * from home_policy where policyid = (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid where categoryid = 2 and userid = :usrid)",nativeQuery = true)
	public List<HomePolicy> getHomePolicyByUserId(@Param("usrid") Integer userid);
	
}