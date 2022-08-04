package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_policy")
public class UserPolicy {
	
	@Id
	@Column(name="policyid")
	private Integer policyid;
	
	@Column(name="userid")
	private Integer userid;
	
	
	public UserPolicy() {
		
	}

	public UserPolicy(Integer policyid, Integer userid) {
		super();
		this.policyid = policyid;
		this.userid = userid;
	}

	public Integer getPolicyid() {
		return policyid;
	}

	public void setPolicyid(Integer policyid) {
		this.policyid = policyid;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	@Override
	public String toString() {
		return "UserPolicy [policyid=" + policyid + ", userid=" + userid + "]";
	}
	
}

