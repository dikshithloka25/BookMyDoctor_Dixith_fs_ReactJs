package com.abridged.bookmydoctor.service;

import java.util.List;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;

public interface AdminService {

	List<DoctorInfoBean> getAllDoctors();

	DoctorInfoBean getDoctor(int doctorId);

	boolean deleteDoctor(int doctorId);

	List<PatientInfoBean> getAllPatients();

	PatientInfoBean getPatient(int patientId);

	boolean deletePatient(int patientId);

	List<AppointmentInfoBean> getAllAppointments();

	AppointmentInfoBean getAppointment(int appointmentId);
	
	public List<FeedBackInfoBean> getAllFeedBacks();
	
	public boolean adminLogin(String email, String password);
}
