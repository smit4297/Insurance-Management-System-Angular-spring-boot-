package com.npci.insurance.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="health_policy")
public class HealthPolicy {
	
	@Id
	@Column(name="policyid")
	private Integer policyid;
	
	@Column(unique=true, name="healthpolicyid")
	private Integer healthpolicyid;

	@Column(name="policyname")
	private String policyname;

	@Column(name="policydescription")
	private String policydescription;

	@Column(name="imageurl")
	private String imageurl;

	@Column(name="sumassurence")
	private Integer sumassurence;

	@Column(name="policyterm")
	private Integer policyterm;
	
	@Column(name="premium")
	private Integer premium;
	
	
	public HealthPolicy() {
		
	}

	public HealthPolicy(Integer policyid,Integer healthpolicyid,  String policyname, String policydescription, String imageurl, Integer sumassurence,
			Integer policyterm, Integer premium) {
		super();
		this.policyid = policyid;
		this.healthpolicyid = healthpolicyid;
		this.policyname = policyname;
		this.policydescription = policydescription;
		this.imageurl = imageurl;
		this.sumassurence = sumassurence;
		this.policyterm = policyterm;
		this.premium = premium;
		
	}

	public Integer getPolicyid() {
		return policyid;
	}

	public void setPolicyid(Integer policyid) {
		this.policyid = policyid;
	}

	public String getPolicyname() {
		return policyname;
	}

	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}

	public String getPolicydescription() {
		return policydescription;
	}

	public void setPolicydescription(String policydescription) {
		this.policydescription = policydescription;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public Integer getSumassurence() {
		return sumassurence;
	}

	public void setSumassurence(Integer sumassurence) {
		this.sumassurence = sumassurence;
	}

	public Integer getPolicyterm() {
		return policyterm;
	}

	public void setPolicyterm(Integer policyterm) {
		this.policyterm = policyterm;
	}

	public Integer getPremium() {
		return premium;
	}

	public void setPremium(Integer premium) {
		this.premium = premium;
	}

	public Integer getHealthpolicyid() {
		return healthpolicyid;
	}

	public void setHealthpolicyid(Integer healthpolicyid) {
		this.healthpolicyid = healthpolicyid;
	}

	@Override
	public String toString() {
		return "HealthPolicy [policyid=" + policyid + ", healthpolicyid=" + healthpolicyid + ", policyname="
				+ policyname + ", policydescription=" + policydescription + ", imageurl=" + imageurl + ", sumassurence="
				+ sumassurence + ", policyterm=" + policyterm + ", premium=" + premium + "]";
	}
	

}
