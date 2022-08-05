package com.npci.insurance.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.npci.insurance.entity.HealthPolicy;



@RepositoryRestResource(path="healthpolicies")
@CrossOrigin("http://localhost:4200/")
public interface HealthPolicyRepository extends JpaRepository <HealthPolicy,Integer>{
	//public List<HealthPolicy> findBycategoryid(Integer policyid);

	@Query(value = "select * from health_policy where policyid in (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid)",nativeQuery = true)
	public List<HealthPolicy> getAllUsersHealthPolicy();
	
	@Query(value = "select * from health_policy where policyid = (select policy.policyid from policy join user_policy on policy.policyid=user_policy.policyid where categoryid = 1 and userid = :usrid)",nativeQuery = true)
	public List<HealthPolicy> getHealthPolicyByUserId(@Param("usrid") Integer userid);
}
