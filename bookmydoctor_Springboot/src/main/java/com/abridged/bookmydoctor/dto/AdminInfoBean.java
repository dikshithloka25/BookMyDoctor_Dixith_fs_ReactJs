package com.abridged.bookmydoctor.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
@Table(name = "admin_info")
public class AdminInfoBean {

	@Id
	@Column
	@JsonProperty
	@NotNull
	private int adminId;
	
	@Column
	@JsonProperty
	@NotNull
	private String email;
	
	@Column
	@JsonProperty
	@NotNull
	private String password;

	
	
}
