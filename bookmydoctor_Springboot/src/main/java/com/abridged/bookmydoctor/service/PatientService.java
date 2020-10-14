package com.abridged.bookmydoctor.service;

import java.util.List;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;

public interface PatientService {

	public boolean addPatient(PatientInfoBean bean);
	
	public boolean editPatientProfile(PatientInfoBean bean);

	public boolean addAppointment(AppointmentInfoBean bean);
	
	public List<AppointmentInfoBean> getAppointmentsByPatient(int patientId);

	public boolean patientFeedBack(FeedBackInfoBean bean);
	
	public List<DoctorInfoBean> getDoctors(String speciality , String location);
	
	public PatientInfoBean loginPatient(String email , String password);
	
	public AvailabilityDates getAvailabilityDatesOfDoctor(int doctorId);
	
	public List<FeedBackInfoBean> getFeedBacksOfDoctors(int doctorId);
}
