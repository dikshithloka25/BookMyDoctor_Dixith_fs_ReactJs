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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;
import com.abridged.bookmydoctor.response.AppointmentResponse;
import com.abridged.bookmydoctor.response.AvailabilityDatesResponse;
import com.abridged.bookmydoctor.response.DoctorResponse;
import com.abridged.bookmydoctor.response.FeedBackResponse;
import com.abridged.bookmydoctor.response.PatientResponse;
import com.abridged.bookmydoctor.service.PatientService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		CustomDateEditor editor = new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true);

		binder.registerCustomEditor(Date.class, editor);
	}

	@PostMapping(path = "/addpatient", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse addPatientBean( @Valid @RequestBody PatientInfoBean bean) {
		System.out.println(bean);
		boolean isAdded = patientService.addPatient(bean);
		PatientResponse response = new PatientResponse();

		if (isAdded) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Patient Added succesfully");
			
		}

		return response;

	}

	@GetMapping(path = "/loginpatient", produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse patientLogin(String email, String password) {
		PatientInfoBean isLoggedIn = patientService.loginPatient(email, password);
		PatientResponse response = new PatientResponse();
		if (isLoggedIn!=null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Log In succesfully");
			response.setBean(isLoggedIn);
		}
		return response;

	}

	@PutMapping(path = "/updatepatient", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse updatPatientProfile(@RequestBody PatientInfoBean info) {
		boolean isUpdated = patientService.editPatientProfile(info);
		PatientResponse response = new PatientResponse();

		if (isUpdated) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Patient Updated succesfully");
		}
		return response;

	}

	@PostMapping(path = "/addappointment", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse addAppointmentBean(@RequestBody AppointmentInfoBean bean) {
		boolean isAdded = patientService.addAppointment(bean);
		AppointmentResponse response = new AppointmentResponse();

		if (isAdded) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Appointment Added succesfully");
		}
		return response;

	}

	@PostMapping(path = "/addfeedback", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public FeedBackResponse addPatientFeedBack(@Valid @RequestBody FeedBackInfoBean bean) {

		boolean isAdded = patientService.patientFeedBack(bean);

		FeedBackResponse response = new FeedBackResponse();

		if (isAdded) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("FeedBack Added succesfully");
		}
		return response;

	}

	@GetMapping(path = "/getdoctors", produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse getDoctorsBySpeciality(String speciality, String location) {
		List<DoctorInfoBean> doctorsList = patientService.getDoctors(speciality, location);
		DoctorResponse response = new DoctorResponse();
		if (doctorsList != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("List of Doctors of particular Speciality and location");
			response.setList(doctorsList);
		}
		return response;
	}

	@GetMapping(path = "/getallappointmentsofpatient", produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse getAllAppointmentsByPatient( int patientId) {
		List<AppointmentInfoBean> list = patientService.getAppointmentsByPatient(patientId);
		AppointmentResponse response = new AppointmentResponse();
		if (list != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Appointments details of patient");
			response.setList(list);
		}

		return response;
	}

	@GetMapping(path = "/getavailabilitydatesofdoctor", produces = MediaType.APPLICATION_JSON_VALUE)
	public AvailabilityDatesResponse getAvailabilityDatesOfdoctor( int doctorId) {
		AvailabilityDates dates = patientService.getAvailabilityDatesOfDoctor(doctorId);
		AvailabilityDatesResponse response = new AvailabilityDatesResponse();
		if (dates != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Availability Dates of Doctor");
			response.setBean(dates);
		}
		return response;
	}

	@GetMapping(path = "/getfeedback", produces = MediaType.APPLICATION_JSON_VALUE)
	public FeedBackResponse getFeedBacksOfDoctor( int doctorId) {
		List<FeedBackInfoBean> feedBacks = patientService.getFeedBacksOfDoctors(doctorId);
		FeedBackResponse response = new FeedBackResponse();
		if (feedBacks != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Feedbacks of Doctor");
			response.setList(feedBacks);
		}
		return response;

	}

}
