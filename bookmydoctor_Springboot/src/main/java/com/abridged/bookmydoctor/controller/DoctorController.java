package com.abridged.bookmydoctor.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.response.AppointmentResponse;
import com.abridged.bookmydoctor.response.AvailabilityDatesResponse;
import com.abridged.bookmydoctor.response.DoctorResponse;
import com.abridged.bookmydoctor.service.DoctorService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		CustomDateEditor editor = new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true);

		binder.registerCustomEditor(Date.class, editor);
	}

	@PostMapping(path = "/adddoctor", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse addDoctorBean(@Valid @RequestBody DoctorInfoBean bean) {
		boolean isAdded = doctorService.addDoctor(bean);
		DoctorResponse response = new DoctorResponse();

		if (isAdded) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Doctor Added succesfully");
		} 
		return response;
	}

	@GetMapping(path = "/logindoctor", produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse loginDoctorUsingEmail(@Valid String email, String password) {
		DoctorInfoBean isLoggedIn = doctorService.loginDoctor(email, password);
		DoctorResponse response = new DoctorResponse();

		if (isLoggedIn!=null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Log In succesfully");
			response.setBean(isLoggedIn);
		} 
		return response;

	}

	@PutMapping(path = "/editdoctorprofile", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse editDoctorProfile( @Valid @RequestBody DoctorInfoBean bean) {
		boolean isEdited = doctorService.editDoctorProfile(bean);
		DoctorResponse response = new DoctorResponse();
		if (isEdited) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Profile Edited succesfully");
		} 
		return response;

	}

	@GetMapping(path = "/getappointments", produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse getAppointmentsOFDoctor( int doctorId) {
		List<AppointmentInfoBean> list = doctorService.getDoctorAppointmentList(doctorId);

		AppointmentResponse response = new AppointmentResponse();
		if (list != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("List of Appointments of Doctor");
			response.setList(list);
		} 
		return response;
	}

	@DeleteMapping(path = "/deleteappointment", produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse deleteAppointment(int appointmentId) {
		boolean isDeleted = doctorService.deleteAppointment(appointmentId);
		AppointmentResponse response = new AppointmentResponse();

		if (isDeleted) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Appointment Deleted succesfully");
		}
		return response;

	}

	@PutMapping(path = "/updateappointment", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse updateAppointment(@RequestBody AppointmentInfoBean bean) {
		boolean isUpdated = doctorService.updateAppointment(bean);
		AppointmentResponse response = new AppointmentResponse();

		if (isUpdated) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Appointment Updated succesfully");
		} 
		return response;

	}

	@PostMapping(path = "/addavailability", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AvailabilityDatesResponse addAvailability(@RequestBody AvailabilityDates bean) {
System.out.println(bean);
		boolean isAdded = doctorService.addAvailability(bean);
		AvailabilityDatesResponse response = new AvailabilityDatesResponse();
		if (isAdded) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Available Dates Added succesfully");
		}
		return response;

	}

	@PutMapping(path = "/updateavailability", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AvailabilityDatesResponse updateAvailability(@RequestBody AvailabilityDates bean) {
		boolean isUpdated = doctorService.updateAvailability(bean);
		AvailabilityDatesResponse response = new AvailabilityDatesResponse();
		if (isUpdated) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Available Dates Updated succesfully");
		} 
		return response;
	}
}
