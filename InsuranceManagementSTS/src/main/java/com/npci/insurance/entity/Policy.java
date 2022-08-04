package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "policy")
public class Policy {
	@Id
	@Column(name = "policyid")
	private Integer policyid;

	@Column(name = "categoryid")
	private Integer categoryid;

	public Policy() {

	}

	public Policy(Integer categoryid) {
		this.categoryid = categoryid;
	}

	public Policy(Integer policyid, Integer categoryid) {
		super();
		this.policyid = policyid;
		this.categoryid = categoryid;
	}

	public Integer getPolicyid() {
		return policyid;
	}

	public void setPolicyid(Integer policyid) {
		this.policyid = policyid;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}

	@Override
	public String toString() {
		return "Policy [policyid=" + policyid + ", categoryid=" + categoryid + "]";
	}

}
