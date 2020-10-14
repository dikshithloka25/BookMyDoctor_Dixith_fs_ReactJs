package com.abridged.bookmydoctor.response;

import java.util.List;

import com.abridged.bookmydoctor.dto.DoctorInfoBean;

import lombok.Data;

@Data
public class DoctorResponse {

	private int statusCode;
	private boolean isError;
	private String message;
	private DoctorInfoBean bean;
	private List<DoctorInfoBean> list;
}
