package com.npci.insurance.entity;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid")
	private Integer userid;

	@Column(name = "emailid")
	private String emailid;

	@Column(name = "password")
	private String password;

	@Column(name = "mobileno")
	private long mobileno;

	@Column(name = "address")
	private String address;

	@Column(name = "pincode")
	private Integer pincode;

	@Column(name = "birthdate")
	private Date birthdate;

	public User() {

	}

	public User(String emailid, String password, long mobileno, String address, Integer pincode, Date birthdate) {
		this.emailid = emailid;
		this.password = password;
		this.mobileno = mobileno;
		this.address = address;
		this.pincode = pincode;
		this.birthdate = birthdate;
	}

	public User(Integer userid, String emailid, String password, long mobileno, String address, Integer pincode,
			Date birthdate) {
		super();
		this.userid = userid;
		this.emailid = emailid;
		this.password = password;
		this.mobileno = mobileno;
		this.address = address;
		this.pincode = pincode;
		this.birthdate = birthdate;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobileno() {
		return mobileno;
	}

	public void setMobileno(long mobileno) {
		this.mobileno = mobileno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", emailid=" + emailid + ", password=" + password + ", mobileno=" + mobileno
				+ ", address=" + address + ", pincode=" + pincode + ", birthdate=" + birthdate + "]";
	}

}
