package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hospital_illness")
public class HospitalIllness {

	@Id
	@Column(name="healthpolicyid")
	private Integer healthpolicyid;
	
	@Column(name="hospitalid")
	private Integer hospitalid;
	
	@Column(name="illnessid")
	private Integer illnessid;
	
	public HospitalIllness(){
		
	}

	public HospitalIllness(Integer healthpolicyid, Integer hospitalid, Integer illnessid) {
		super();
		this.healthpolicyid = healthpolicyid;
		this.hospitalid = hospitalid;
		this.illnessid = illnessid;
	}

	public Integer getHealthpolicyid() {
		return healthpolicyid;
	}

	public void setHealthpolicyid(Integer healthpolicyid) {
		this.healthpolicyid = healthpolicyid;
	}

	public Integer getHospitalid() {
		return hospitalid;
	}

	public void setHospitalid(Integer hospitalid) {
		this.hospitalid = hospitalid;
	}

	public Integer getIllnessid() {
		return illnessid;
	}

	public void setIllnessid(Integer illnessid) {
		this.illnessid = illnessid;
	}

	@Override
	public String toString() {
		return "HospitalIllness [healthpolicyid=" + healthpolicyid + ", hospitalid=" + hospitalid + ", illnessid="
				+ illnessid + "]";
	}
	
	
	
	
}
