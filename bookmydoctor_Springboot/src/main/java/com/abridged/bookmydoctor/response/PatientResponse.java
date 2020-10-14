package com.abridged.bookmydoctor.response;

import java.util.List;

import com.abridged.bookmydoctor.dto.PatientInfoBean;

import lombok.Data;

@Data
public class PatientResponse {

	private int statusCode;
	private boolean isError;
	private String message;
	private PatientInfoBean bean;
	private List<PatientInfoBean> list;
}
