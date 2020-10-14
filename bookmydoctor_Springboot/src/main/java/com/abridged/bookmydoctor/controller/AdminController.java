package com.abridged.bookmydoctor.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RestController;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;
import com.abridged.bookmydoctor.response.AppointmentResponse;
import com.abridged.bookmydoctor.response.DoctorResponse;
import com.abridged.bookmydoctor.response.FeedBackResponse;
import com.abridged.bookmydoctor.response.PatientResponse;
import com.abridged.bookmydoctor.service.AdminService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		CustomDateEditor editor = new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true);

		binder.registerCustomEditor(Date.class, editor);
	}

	@GetMapping(path = "/getdoctor", produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse getDoctorDetailByDoctorId(int doctorId) {
		DoctorInfoBean info = adminService.getDoctor(doctorId);
		DoctorResponse response = new DoctorResponse();
		if (info != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Doctor Record found");
			response.setBean(info);
		} 
		return response;
	}
	
	@GetMapping(path = "/adminlogin", produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse adminLogin(String email, String password) {
		boolean getAdmin = adminService.adminLogin(email, password);
		PatientResponse patientresponse = new PatientResponse();
		if (getAdmin) {
			patientresponse.setStatusCode(200);
			patientresponse.setError(false);
			patientresponse.setMessage("Admin login successfull");
		} 
		return patientresponse;
	}
	
	
	@GetMapping(path = "/getalldoctors", produces = MediaType.APPLICATION_JSON_VALUE)
	public DoctorResponse getAllDoctors() {
		List<DoctorInfoBean> list = adminService.getAllDoctors();
		DoctorResponse doctorresponse = new DoctorResponse();

		if (list != null) {
			doctorresponse.setStatusCode(200);
			doctorresponse.setError(false);
			doctorresponse.setMessage("Doctors list is found");
			doctorresponse.setList(list);
		} 
		return doctorresponse;

	}
	
	
	@DeleteMapping(path = "/deletedoctor", produces = MediaType.APPLICATION_JSON_VALUE)

	public DoctorResponse deleteDoctorById( int doctorId) {
		boolean isDeleted = adminService.deleteDoctor(doctorId);
		DoctorResponse doctorresponse = new DoctorResponse();

		if (isDeleted) {
			doctorresponse.setStatusCode(200);
			doctorresponse.setError(false);
			doctorresponse.setMessage(" Doctor Deleted succesfully");
		} 

		return doctorresponse;
	}
	
	
	@GetMapping(path = "/getpatient", produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse getPatientDetailByPatientId(int patientId) {
		PatientInfoBean info = adminService.getPatient(patientId);
		PatientResponse patientresponse = new PatientResponse();
		if (info != null) {
			patientresponse.setStatusCode(200);
			patientresponse.setError(false);
			patientresponse.setMessage("Patient Record Found");
			patientresponse.setBean(info);
		} 
		return patientresponse;
	}
	
	
	
	
	
	
	@GetMapping(path = "/getallpatients", produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse getAllPatients() {
		List<PatientInfoBean> list = adminService.getAllPatients();
		PatientResponse patientresponse = new PatientResponse();

		if (list != null) {
			patientresponse.setStatusCode(200);
			patientresponse.setError(false);
			patientresponse.setMessage("Patient list is found");
			patientresponse.setList(list);
		} 
		return patientresponse;

	}

	@DeleteMapping(path = "/deletepatient", produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse deletePatientById( int patientId) {
		boolean isDeleted = adminService.deletePatient(patientId);
		PatientResponse patientresponse = new PatientResponse();

		if (isDeleted) {
			patientresponse.setStatusCode(200);
			patientresponse.setError(false);
			patientresponse.setMessage(" Patient record Deleted succesfully");
		} 

		return patientresponse;
	}

	@GetMapping(path = "/getappointment", produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse getAppointmentDetailByAppointmentId(int appointmentId) {
		AppointmentInfoBean info = adminService.getAppointment(appointmentId);
		AppointmentResponse appointmentresponse = new AppointmentResponse();
		if (info != null) {
			appointmentresponse.setStatusCode(200);
			appointmentresponse.setError(false);
			appointmentresponse.setMessage("Appointment record found");
			appointmentresponse.setBean(info);
		}
		return appointmentresponse;
	}

	@GetMapping(path = "/getallappointments", produces = MediaType.APPLICATION_JSON_VALUE)
	public AppointmentResponse getAllAppointments() {
		List<AppointmentInfoBean> list = adminService.getAllAppointments();
		AppointmentResponse appointmentresponse = new AppointmentResponse();

		if (list != null) {
			appointmentresponse.setStatusCode(200);
			appointmentresponse.setError(false);
			appointmentresponse.setMessage("Appointments list found");
			appointmentresponse.setList(list);
		}
		return appointmentresponse;

	}
	
	@GetMapping(path = "/getallfeedbacks", produces = MediaType.APPLICATION_JSON_VALUE)
	public FeedBackResponse getAllFeedBacks() {
		List<FeedBackInfoBean> feedBacks = adminService.getAllFeedBacks();
		FeedBackResponse response = new FeedBackResponse();
		if (feedBacks != null) {
			response.setStatusCode(200);
			response.setError(false);
			response.setMessage("Feedbacks list found");
			response.setList(feedBacks);
		} 
		return response;
	}
	
	
}
