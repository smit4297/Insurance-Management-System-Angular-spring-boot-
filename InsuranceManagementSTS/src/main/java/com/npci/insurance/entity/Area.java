package com.npci.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "area")
public class Area {
	@Id
	@Column(name = "areaid")
	private Integer areaid;

	@Column(name = "areaname")
	private String areaname;

	@Column(name = "totalclaimsinarea")
	private Integer totalclaimsinarea;

	public Area() {

	}

	public Area(Integer areaid, String areaname, Integer totalclaimsinarea) {
		super();
		this.areaid = areaid;
		this.areaname = areaname;
		this.totalclaimsinarea = totalclaimsinarea;
	}

	public Integer getAreaid() {
		return areaid;
	}

	public void setAreaid(Integer areaid) {
		this.areaid = areaid;
	}

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String areaname) {
		this.areaname = areaname;
	}

	public Integer getTotalclaimsinarea() {
		return totalclaimsinarea;
	}

	public void setTotalclaimsinarea(Integer totalclaimsinarea) {
		this.totalclaimsinarea = totalclaimsinarea;
	}

	@Override
	public String toString() {
		return "Area [areaid=" + areaid + ", areaname=" + areaname + ", totalclaimsinarea=" + totalclaimsinarea + "]";
	}

}
