package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hospital")
public class Hospital {
	
	@Id
	@Column(name = "hospitalid")
	private Integer hospitalid;

	@Column(name = "hospitalname")
	private String hospitalname;

	@Column(name = "pincode")
	private Integer pincode;

	public Hospital() {

	}

	public Hospital(String hospitalname, Integer pincode) {
		this.hospitalname = hospitalname;
		this.pincode = pincode;
	}

	public Hospital(Integer hospitalid, String hospitalname, Integer pincode) {
		super();
		this.hospitalid = hospitalid;
		this.hospitalname = hospitalname;
		this.pincode = pincode;
	}

	public Integer getHospitalid() {
		return hospitalid;
	}

	public void setHospitalid(Integer hospitalid) {
		this.hospitalid = hospitalid;
	}

	public String getHospitalname() {
		return hospitalname;
	}

	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}

	public Integer getpincode() {
		return pincode;
	}

	public void setpincode(Integer pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Hospital [hospitalid=" + hospitalid + ", hospitalname=" + hospitalname + ", pincode=" + pincode
				+ "]";
	}

}
