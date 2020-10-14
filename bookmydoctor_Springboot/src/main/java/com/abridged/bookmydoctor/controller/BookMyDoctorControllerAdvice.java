package com.abridged.bookmydoctor.controller;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.abridged.bookmydoctor.exception.AppointmentException;
import com.abridged.bookmydoctor.exception.AvailabilityException;
import com.abridged.bookmydoctor.exception.DoctorException;
import com.abridged.bookmydoctor.exception.FeedBackException;
import com.abridged.bookmydoctor.exception.PatientException;
import com.abridged.bookmydoctor.response.AppointmentResponse;
import com.abridged.bookmydoctor.response.AvailabilityDatesResponse;
import com.abridged.bookmydoctor.response.DoctorResponse;
import com.abridged.bookmydoctor.response.FeedBackResponse;
import com.abridged.bookmydoctor.response.PatientResponse;
import com.abridged.bookmydoctor.response.ValidationResponse;

@RestControllerAdvice
public class BookMyDoctorControllerAdvice {

	@ExceptionHandler(PatientException.class)
	public PatientResponse handlePatientException(PatientException e) {
		PatientResponse response = new PatientResponse();
		response.setStatusCode(501);
		response.setError(true);
		response.setMessage(e.getMessage());
		return response;
	}

	@ExceptionHandler(DoctorException.class)
	public DoctorResponse handleDoctorException(DoctorException e) {
		DoctorResponse response = new DoctorResponse();
		response.setStatusCode(501);
		response.setError(true);
		response.setMessage(e.getMessage());
		return response;
	}

	@ExceptionHandler(AppointmentException.class)
	public AppointmentResponse handleAppointmentException(AppointmentException e) {
		AppointmentResponse response = new AppointmentResponse();
		response.setStatusCode(501);
		response.setError(true);
		response.setMessage(e.getMessage());
		return response;
	}

	@ExceptionHandler(AvailabilityException.class)
	public AvailabilityDatesResponse handleAvailabilityException(AvailabilityException e) {
		AvailabilityDatesResponse response = new AvailabilityDatesResponse();
		response.setStatusCode(501);
		response.setError(true);
		response.setMessage(e.getMessage());
		return response;
	}

	@ExceptionHandler(FeedBackException.class)
	public FeedBackResponse handleFeedBackException(FeedBackException e) {
		FeedBackResponse response = new FeedBackResponse();
		response.setStatusCode(501);
		response.setError(true);
		response.setMessage(e.getMessage());
		return response;
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ValidationResponse globalHandleValidation(MethodArgumentNotValidException e) {
		ValidationResponse response = new ValidationResponse();
		response.setMessage("Validation Error");
		response.setDescription(e.getBindingResult().getFieldError().getDefaultMessage());

		return response;

	}

	/*
	 * @ExceptionHandler(Exception.class) public ValidationResponse
	 * globalHandleException(Exception e) { ValidationResponse response = new
	 * ValidationResponse(); response.setMessage("Cannot Be deleted"); response.
	 * setDescription("As the ID you Have entered is a foreign key in another table so it Cannot be deleted"
	 * );
	 * 
	 * return response;
	 * 
	 * }
	 */

}
