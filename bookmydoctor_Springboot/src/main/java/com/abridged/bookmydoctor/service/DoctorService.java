package com.abridged.bookmydoctor.service;

import java.util.List;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;

public interface DoctorService {

	
	public boolean addDoctor(DoctorInfoBean bean);

	public DoctorInfoBean loginDoctor(String email, String password);

	public boolean editDoctorProfile(DoctorInfoBean bean);
	
	public List<AppointmentInfoBean> getDoctorAppointmentList(int doctorId);

	public boolean deleteAppointment(int appointmentId);

	public boolean updateAppointment(AppointmentInfoBean bean);
	
	public boolean addAvailability(AvailabilityDates bean);
	
	public boolean updateAvailability(AvailabilityDates bean);
}
