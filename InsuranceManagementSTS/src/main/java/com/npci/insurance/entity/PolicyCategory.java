package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "policy_category")
public class PolicyCategory {

	@Id
	@Column(name = "categoryid")
	private Integer categoryid;

	@Column(name = "categoryname")
	private String categoryname;

	public PolicyCategory() {

	}

	public PolicyCategory(String categoryname) {
		this.categoryname = categoryname;
	}

	public PolicyCategory(Integer categoryid, String categoryname) {
		super();
		this.categoryid = categoryid;
		this.categoryname = categoryname;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	@Override
	public String toString() {
		return "PolicyCategory [categoryid=" + categoryid + ", categoryname=" + categoryname + "]";
	}

}
