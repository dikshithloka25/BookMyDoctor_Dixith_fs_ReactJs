package com.abridged.bookmydoctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abridged.bookmydoctor.dao.PatientDAO;
import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;
@Service
public class PatientServiceImpl implements PatientService {
	@Autowired
	private PatientDAO patientDao;
	

	@Override
	public boolean addPatient(PatientInfoBean bean) {
		// TODO Auto-generated method stub
		return patientDao.addPatient(bean);
	}

	@Override
	public boolean addAppointment(AppointmentInfoBean bean) {
		// TODO Auto-generated method stub
		return patientDao.addAppointment(bean);
	}

	@Override
	public boolean patientFeedBack(FeedBackInfoBean bean) {
		// TODO Auto-generated method stub
		return patientDao.patientFeedBack(bean);
	}

	@Override
	public List<DoctorInfoBean> getDoctors(String speciality, String location) {
		// TODO Auto-generated method stub
		return patientDao.getDoctors(speciality, location);
	}

	@Override
	public PatientInfoBean loginPatient(String email, String password) {
		// TODO Auto-generated method stub
		return patientDao.loginPatient(email, password);
	}

	@Override
	public boolean editPatientProfile(PatientInfoBean bean) {
		// TODO Auto-generated method stub
		return patientDao.editPatientProfile(bean);
	}

	@Override
	public List<AppointmentInfoBean> getAppointmentsByPatient(int patientId) {
		// TODO Auto-generated method stub
		return patientDao.getAppointmentsByPatient(patientId);
	}

	@Override
	public AvailabilityDates getAvailabilityDatesOfDoctor(int doctorId) {
		// TODO Auto-generated method stub
		return patientDao.getAvailabilityDatesOfDoctor(doctorId);
	}

	@Override
	public List<FeedBackInfoBean> getFeedBacksOfDoctors(int doctorId) {
		// TODO Auto-generated method stub
		return patientDao.getFeedBacksOfDoctors(doctorId);
	}

}
