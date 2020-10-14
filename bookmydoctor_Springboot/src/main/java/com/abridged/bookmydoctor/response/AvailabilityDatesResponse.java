package com.abridged.bookmydoctor.response;

import java.util.List;

import com.abridged.bookmydoctor.dto.AvailabilityDates;
import lombok.Data;

@Data
public class AvailabilityDatesResponse {

	private int statusCode;
	private boolean isError;
	private String message;
	private AvailabilityDates bean;
	private List<AvailabilityDates> list;
}
