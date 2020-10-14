package com.abridged.bookmydoctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abridged.bookmydoctor.dao.AdminDao;
import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.dto.FeedBackInfoBean;
import com.abridged.bookmydoctor.dto.PatientInfoBean;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adminDao;
	
	@Override
	public List<DoctorInfoBean> getAllDoctors() {
		// TODO Auto-generated method stub
		return adminDao.getAllDoctors();
	}

	@Override
	public DoctorInfoBean getDoctor(int doctorId) {
		// TODO Auto-generated method stub
		return adminDao.getDoctor(doctorId);
	}

	@Override
	public boolean deleteDoctor(int doctorId) {
		// TODO Auto-generated method stub
		return adminDao.deleteDoctor(doctorId);
	}

	@Override
	public List<PatientInfoBean> getAllPatients() {
		// TODO Auto-generated method stub
		return adminDao.getAllPatients();
	}

	@Override
	public PatientInfoBean getPatient(int patientId) {
		// TODO Auto-generated method stub
		return adminDao.getPatient(patientId);
	}

	@Override
	public boolean deletePatient(int patientId) {
		// TODO Auto-generated method stub
		return adminDao.deletePatient(patientId);
	}

	@Override
	public List<AppointmentInfoBean> getAllAppointments() {
		// TODO Auto-generated method stub
		return adminDao.getAllAppointments();
	}

	@Override
	public AppointmentInfoBean getAppointment(int appointmentId) {
		// TODO Auto-generated method stub
		return adminDao.getAppointment(appointmentId);
	}

	@Override
	public List<FeedBackInfoBean> getAllFeedBacks() {
		// TODO Auto-generated method stub
		return adminDao.getAllFeedBacks();
	}

	@Override
	public boolean adminLogin(String email, String password) {
		// TODO Auto-generated method stub
		return adminDao.adminLogin(email, password);
	}

}
