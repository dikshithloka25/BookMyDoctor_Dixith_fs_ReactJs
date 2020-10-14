package com.abridged.bookmydoctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abridged.bookmydoctor.dao.DoctorDao;
import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
@Service
public class DoctorServiceImpl implements DoctorService{

	@Autowired
	private DoctorDao doctorDao;
	
	@Override
	public boolean addDoctor(DoctorInfoBean bean) {
		// TODO Auto-generated method stub
		return doctorDao.addDoctor(bean);
	}

	@Override
	public DoctorInfoBean loginDoctor(String email, String password) {
		// TODO Auto-generated method stub
		return doctorDao.loginDoctor(email, password);
	}

	@Override
	public boolean editDoctorProfile(DoctorInfoBean bean) {
		// TODO Auto-generated method stub
		return doctorDao.editDoctorProfile(bean);
	}

	@Override
	public List<AppointmentInfoBean> getDoctorAppointmentList(int doctorId) {
		// TODO Auto-generated method stub
		return doctorDao.getDoctorAppointmentList(doctorId);
	}

	@Override
	public boolean deleteAppointment(int appointmentId) {
		// TODO Auto-generated method stub
		return doctorDao.deleteAppointment(appointmentId);
	}

	@Override
	public boolean updateAppointment(AppointmentInfoBean bean) {
		// TODO Auto-generated method stub
		return doctorDao.updateAppointment(bean);
	}

	@Override
	public boolean addAvailability(AvailabilityDates bean) {
		// TODO Auto-generated method stub
		return doctorDao.addAvailability(bean);
	}

	@Override
	public boolean updateAvailability(AvailabilityDates bean) {
		// TODO Auto-generated method stub
		return doctorDao.updateAvailability(bean);
	}

}
