package com.abridged.bookmydoctor.dao;

import java.util.List;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;

public interface AdminDao {

	public List<DoctorInfoBean> getAllDoctors();

	public DoctorInfoBean getDoctor(int doctorId);

	public boolean deleteDoctor(int doctorId);

	public List<PatientInfoBean> getAllPatients();

	public PatientInfoBean getPatient(int patientId);

	public boolean deletePatient(int patientId);

	public List<AppointmentInfoBean> getAllAppointments();

	public AppointmentInfoBean getAppointment(int appointmentId);
	
	public List<FeedBackInfoBean> getAllFeedBacks();
	
	public boolean adminLogin(String email, String password);

	
}
