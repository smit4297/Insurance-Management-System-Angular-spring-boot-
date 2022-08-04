package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "illness")
public class Illness {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "illnessid")
	private Integer illnessid;

	@Column(name = "illness_name")
	private String illness_name;

	public Illness() {

	}

	public Illness(String illness_name) {
		this.illness_name = illness_name;
	}

	public Illness(Integer illnessid, String illness_name) {
		super();
		this.illnessid = illnessid;
		this.illness_name = illness_name;
	}

	public Integer getIllnessid() {
		return illnessid;
	}

	public void setIllnessid(Integer illnessid) {
		this.illnessid = illnessid;
	}

	public String getIllness_name() {
		return illness_name;
	}

	public void setIllness_name(String illness_name) {
		this.illness_name = illness_name;
	}

	@Override
	public String toString() {
		return "Illness [illnessid=" + illnessid + ", illness_name=" + illness_name + "]";
	}

}
