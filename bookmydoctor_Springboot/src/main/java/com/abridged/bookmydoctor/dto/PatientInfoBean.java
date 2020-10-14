package com.abridged.bookmydoctor.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.Data;

@Data
@Entity
@Table(name = "patient_info")
@JsonRootName("PatientInfoBean")

public class PatientInfoBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "patient_id")
	@JsonProperty
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int patientId;

	@Column
	@JsonProperty
	@NotNull
	@Pattern(regexp = "[a-zA-Z]+[\\s[[a-zA-Z]+]]*", message = "Patient name should have only characters")
	private String patientName;

	@Column
	@JsonProperty
	@NotNull
	private long mobileNo;
	@Column
	@JsonProperty
	@NotNull
	@Email
	private String email;
	@Column
	@NotNull
	@JsonProperty
	@Pattern(regexp = "[[a-zA-Z][0-9]{1,}]{8,16}", message = "Password should have min 8 character and 1 special character ")
	private String password;
	@Column
	@JsonProperty
	@NotNull
	@Pattern(regexp = "[[A-Z] {1,2}][+,-]" , message = "Blood Valid Blood group")
	private String bloodGroup;
	@Column
	@JsonProperty
	@NotNull
	private String gender;
	@Column
	@JsonProperty
	@NotNull
	@Min(value = 1 ,message = "Age must be greater than 1")
	@Max(value = 130 , message = "Age must be less than 130")
	private int age;
	@Column
	@JsonProperty
	@NotNull
	private String address;

	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("patient")
	@JsonIgnore
	private List<AppointmentInfoBean> appointment = new ArrayList<AppointmentInfoBean>();

	@OneToMany(mappedBy = "patientInfo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("patientInfo")
	@JsonIgnore
	private List<FeedBackInfoBean> feedback = new ArrayList<FeedBackInfoBean>();
}
