package com.abridged.bookmydoctor.response;

import java.util.List;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import lombok.Data;

@Data
public class AppointmentResponse {

	private int statusCode;
	private boolean isError;
	private String message;
	private AppointmentInfoBean bean;
	private List<AppointmentInfoBean> list;
}
