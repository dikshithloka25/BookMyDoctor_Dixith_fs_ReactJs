package com.abridged.bookmydoctor.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@Entity
@Table(name = "patient_feedback")
@JsonRootName("FeedBackInfoBean")
@JsonInclude(content = Include.NON_NULL)
public class FeedBackInfoBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column
	@JsonProperty
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ratingId;
	@ManyToOne
	@JoinColumn(name = "patient_id")
	@JsonIgnoreProperties("feedback")
	@NotNull
	private PatientInfoBean patientInfo = new PatientInfoBean();
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	@JsonIgnoreProperties("feedback")
	@NotNull
	private DoctorInfoBean doctorInfo = new DoctorInfoBean();

	@NotNull
	@Column(name = "rating")
	@JsonProperty
	@Min(value = 1 , message = "Rating must start from 1")
	@Max(value = 10 , message = "Rating must be out of 10")
	private int rating;

	@Column(name = "patient_name")
	@JsonProperty
	private String patientName = patientInfo.getPatientName();

	@Column(name = "doctor_name")
	@JsonProperty
	private String doctorName = doctorInfo.getDoctorName();

}
